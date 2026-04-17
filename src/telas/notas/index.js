import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, SafeAreaView } from 'react-native';
import logoContaxCor from '../../../assets/logoContaxCor.png';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function Documentos() {
  const [selectedDocs, setSelectedDocs] = useState(['2']); // Simulando um item selecionado
  const [viewingDoc, setViewingDoc] = useState(true); // Controla se o documento aberto aparece
  const [mesSelecionado, setMesSelecionado] = useState('01');
  const [anoSelecionado, setAnoSelecionado] = useState(anoAtual?.toString() || "2026");

  const documentos = [
    { id: '1', data: '10/01', desc: 'Nota Fiscal de Serviço', tipo: 'NF-e' },
    { id: '2', data: '12/01', desc: 'Recibo de Pagamento', tipo: 'Recibo' },
    { id: '3', data: '15/01', desc: 'Relatório Mensal', tipo: 'Relatório' },
  ];

    const meses = [
    { label: 'Janeiro', value: '01' }, { label: 'Fevereiro', value: '02' },
    { label: 'Março', value: '03' }, { label: 'Abril', value: '04' },
    { label: 'Maio', value: '05' }, { label: 'Junho', value: '06' },
    { label: 'Julho', value: '07' }, { label: 'Agosto', value: '08' },
    { label: 'Setembro', value: '09' }, { label: 'Outubro', value: '10' },
    { label: 'Novembro', value: '11' }, { label: 'Dezembro', value: '12' },
  ];

  const dataHoje = new Date();
  const anoAtual = dataHoje ? dataHoje.getFullYear() : 2026;

  const anosDisponiveis = [];
  for (let i = 2020; i <= (anoAtual || 2026); i++) {
    anosDisponiveis.push(i.toString());
  }

  anosDisponiveis.reverse();

  const renderItem = ({ item }) => {
    const isSelected = selectedDocs.includes(item.id);
    return (
      <View style={[styles.row, isSelected && styles.rowActive]}>
        <TouchableOpacity style={styles.checkbox}>
          <Text style={{color: '#00A8B5'}}>{isSelected ? '✓' : ''}</Text>
        </TouchableOpacity>
        <Text style={styles.cell}>{item.data}</Text>
        <Text style={styles.cell}>{item.desc}</Text>
        <Text style={styles.cell}>{item.tipo}</Text>
      </View>
    );
  };

  return (
      <ScrollView style={styles.container}>

        {/* HEADER DO TITULO */}
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image 
                    source={logoContaxCor} 
                    style={styles.logoImage} 
                    resizeMode="contain" // Garante que a imagem não distorça
                />
            <View>
                <Text style={styles.titulo}>CONTAX</Text>
                <Text style={styles.subtitulo}>ME & MEI · Notas Fiscais</Text>
            </View>
         </View>
        </View>

        <View style={styles.divisor}/>

    <View style={styles.card}>
      <Text style={styles.cardTitulo}>Filtro</Text>
      <View style={styles.divisor} />
      
      <View style={styles.filterRow}>
        {/* PICKER DE MÊS */}
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={styles.label}>Mês</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={mesSelecionado}
              onValueChange={(itemValue) => setMesSelecionado(itemValue)}
              style={styles.pickerStyle}
              dropdownIconColor="#00A8B5"
            >
              {meses.map((m) => (
                <Picker.Item key={m.value} label={m.label} value={m.value} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Ano</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={anoSelecionado}
              onValueChange={(itemValue) => setAnoSelecionado(itemValue)}
              style={styles.pickerStyle}
              dropdownIconColor="#00A8B5"
            >
            {anosDisponiveis.map((ano) => (
              <Picker.Item key={ano} label={ano} value={ano} />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.btnAction}>
        <Text style={styles.btnActionText}>Aplicar</Text>
      </TouchableOpacity>
    </View>

        {/* LISTA DE DOCUMENTOS */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Lista de Documentos</Text>
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
      <View style={styles.actionContainer}>
        <Text style={styles.actionCount}>{selectedDocs.length} itens selecionados</Text>
        <TouchableOpacity style={styles.btnAction}>
          <Text style={styles.btnActionText}>Visualizar / Baixar Selecionados</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
}

const TabIcon = ({ label, icon, active }) => (
  <TouchableOpacity style={styles.tabItem}>
    <Text style={{ fontSize: 20, color: active ? '#00A8B5' : '#888' }}>{icon}</Text>
    <Text style={{ fontSize: 10, color: active ? '#00A8B5' : '#888' }}>{label}</Text>
  </TouchableOpacity>
);