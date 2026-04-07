import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';

export default function Documentos() {
  const [selectedDocs, setSelectedDocs] = useState(['2']); // Simulando um item selecionado
  const [viewingDoc, setViewingDoc] = useState(true); // Controla se o documento aberto aparece

  const documentos = [
    { id: '1', data: '10/01/2026', desc: 'Nota Fiscal de Serviço', tipo: 'NF-e' },
    { id: '2', data: '12/01/2026', desc: 'Recibo de Pagamento', tipo: 'Recibo' },
    { id: '3', data: '15/01/2026', desc: 'Relatório Mensal', tipo: 'Relatório' },
  ];

  const renderItem = ({ item }) => {
    const isSelected = selectedDocs.includes(item.id);
    return (
      <View style={[styles.row, isSelected && styles.rowActive]}>
        <TouchableOpacity style={styles.checkbox}>
          <Text style={{color: '#00A8B5'}}>{isSelected ? '✓' : ''}</Text>
        </TouchableOpacity>
        <Text style={styles.cell}>{item.data}</Text>
        <Text style={[styles.cell, { fontWeight: 'bold' }]}>{item.empresa}</Text>
        <Text style={styles.cell}>{item.desc}</Text>
        <Text style={styles.cell}>{item.tipo}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>

        {/* FILTRO (MOVIDO PARA CIMA) */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Filtrar por Período:</Text>
          <View style={styles.filterRow}>
            <View style={{flex: 1, marginRight: 10}}>
              <Text style={styles.label}>Mês</Text>
              <View style={styles.fakeInput}><Text>Janeiro de 2026</Text></View>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.label}>Ano</Text>
              <View style={styles.fakeInput}><Text>2026</Text></View>
            </View>
          </View>
          <TouchableOpacity style={styles.btnFilter}><Text style={styles.btnFilterText}>Aplicar Filtro</Text></TouchableOpacity>
        </View>

        {/* LISTA DE DOCUMENTOS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Lista de Documentos</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.th}>DATA</Text>
            <Text style={styles.th}>DESCRIÇÃO</Text>
            <Text style={styles.th}>TIPO</Text>
          </View>
          <FlatList
            data={documentos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false} // Scroll controlado pelo ScrollView principal
          />
        </View>

        {/* DOCUMENTO ABERTO (PREVIEW) */}
        {viewingDoc && (
          <View style={styles.previewCard}>
            <View style={styles.previewHeader}>
               <Text style={styles.previewTitle}>NF-e</Text>
            </View>
            <View style={styles.docImagePlaceholder}>
               <Text style={{color: '#AAA'}}>Simulação do Documento Aberto</Text>
               {/* Aqui entraria a tag <Image source={...} /> */}
            </View>
          </View>
        )}

        <View style={{ height: 100 }} /> 
      </ScrollView>

      {/* BOTÃO FLUTUANTE DE AÇÃO */}
      <View style={styles.actionContainer}>
        <Text style={styles.actionCount}>{selectedDocs.length} itens selecionados</Text>
        <TouchableOpacity style={styles.btnAction}>
          <Text style={styles.btnActionText}>Visualizar / Baixar Selecionados</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const TabIcon = ({ label, icon, active }) => (
  <TouchableOpacity style={styles.tabItem}>
    <Text style={{ fontSize: 20, color: active ? '#00A8B5' : '#888' }}>{icon}</Text>
    <Text style={{ fontSize: 10, color: active ? '#00A8B5' : '#888' }}>{label}</Text>
  </TouchableOpacity>
);