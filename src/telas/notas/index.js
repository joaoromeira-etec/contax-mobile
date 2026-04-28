import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import logoContaxCor from '../../../assets/logoContaxCor.png';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function Documentos() {

  const [selectedDocs, setSelectedDocs] = useState(['2']);
  const [viewingDoc, setViewingDoc] = useState(true);
  const [mesSelecionado, setMesSelecionado] = useState('01');

  const dataHoje = new Date();
  const anoAtual = dataHoje.getFullYear();

  const [anoSelecionado, setAnoSelecionado] = useState(anoAtual.toString());

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

  const anosDisponiveis = [];
  for (let i = 2020; i <= anoAtual; i++) {
    anosDisponiveis.push(i.toString());
  }
  anosDisponiveis.reverse();


  function toggleDoc(id) {
    setSelectedDocs((prev) => {
      if (prev.includes(id)) {
        return prev.filter((docId) => docId !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  const renderItem = ({ item }) => {
    const isSelected = selectedDocs.includes(item.id);

    return (
      <View style={[styles.row, isSelected && styles.rowActive]}>

        {/* CHECKBOX FUNCIONAL */}
        <TouchableOpacity 
          style={styles.checkbox}
          onPress={() => toggleDoc(item.id)}
        >
          <Text style={{ color: '#00A8B5', fontWeight: 'bold' }}>
            {isSelected ? '✓' : ''}
          </Text>
        </TouchableOpacity>

        <Text style={styles.cell}>{item.data}</Text>
        <Text style={styles.cell}>{item.desc}</Text>
        <Text style={styles.cell}>{item.tipo}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={logoContaxCor} 
            style={styles.logoImage} 
            resizeMode="contain"
          />
          <View>
            <Text style={styles.titulo}>CONTAX</Text>
            <Text style={styles.subtitulo}>ME & MEI · Notas Fiscais</Text>
          </View>
        </View>
      </View>

      <View style={styles.divisor}/>

      {/* FILTRO */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Filtro</Text>
        <View style={styles.divisor} />
        
        <View style={styles.filterRow}>

          {/* MÊS */}
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>Mês</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={mesSelecionado}
                onValueChange={(itemValue) => setMesSelecionado(itemValue)}
                style={styles.pickerStyle}
              >
                {meses.map((m) => (
                  <Picker.Item key={m.value} label={m.label} value={m.value} />
                ))}
              </Picker>
            </View>
          </View>

          {/* ANO */}
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Ano</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={anoSelecionado}
                onValueChange={(itemValue) => setAnoSelecionado(itemValue)}
                style={styles.pickerStyle}
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

      {/* LISTA */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Lista de Documentos</Text>

        <View style={styles.divisor}/>

        <View style={styles.tableHeader}>
          <Text style={styles.th}>DATA</Text>
          <Text style={styles.th}>DESCRIÇÃO</Text>
          <Text style={styles.th}>TIPO</Text>
        </View>

        <FlatList
          data={documentos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>

      {/* PREVIEW */}
      {viewingDoc && (
        <View style={styles.previewCard}>
          <View style={styles.previewHeader}>
            <Text style={styles.previewTitle}>NF-e</Text>
          </View>

          <View style={styles.docImagePlaceholder}>
            <Text style={{color: '#AAA'}}>
              Simulação do Documento Aberto
            </Text>
          </View>
        </View>
      )}

      {/* AÇÕES */}
      <View style={styles.previewCard}>
        <Text style={styles.actionCount}>
          {selectedDocs.length} itens selecionados
        </Text>

        <TouchableOpacity style={styles.btnAction}>
          <Text style={styles.btnActionText}>
            Visualizar / Baixar Selecionados
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}