import { View, Text, ScrollView, Image } from 'react-native';
import { useState, useMemo } from 'react';
import { Picker } from '@react-native-picker/picker';
import logoContaxCor from '../../../assets/logoContaxCor.png';
import styles from './styles';

export default function Dashboard(){

  // ===== DADOS =====
  const [notas] = useState([
    {
      id: 1,
      data: "10/01/2026",
      empresa: "Empresa X",
      descricao: "Serviço de desenvolvimento",
      valor: 1500
    },
    {
      id: 2,
      data: "15/02/2026",
      empresa: "Empresa Y",
      descricao: "Consultoria",
      valor: 800
    }
  ]);

  // ===== DATA ATUAL =====
  const dataHoje = new Date();
  const anoAtual = dataHoje.getFullYear();

  // ===== ESTADOS DO FILTRO =====
  const [mesSelecionado, setMesSelecionado] = useState(
    String(dataHoje.getMonth() + 1).padStart(2, '0')
  );

  const [anoSelecionado, setAnoSelecionado] = useState(
    anoAtual.toString()
  );

  // ===== MESES =====
  const meses = [
    { label: 'Janeiro', value: '01' },
    { label: 'Fevereiro', value: '02' },
    { label: 'Março', value: '03' },
    { label: 'Abril', value: '04' },
    { label: 'Maio', value: '05' },
    { label: 'Junho', value: '06' },
    { label: 'Julho', value: '07' },
    { label: 'Agosto', value: '08' },
    { label: 'Setembro', value: '09' },
    { label: 'Outubro', value: '10' },
    { label: 'Novembro', value: '11' },
    { label: 'Dezembro', value: '12' },
  ];

  // ===== ANOS =====
  const anosDisponiveis = [];
  for (let i = 2020; i <= anoAtual; i++) {
    anosDisponiveis.push(i.toString());
  }
  anosDisponiveis.reverse();

  // ===== FILTRO =====
  const notasFiltradas = useMemo(() => {
    return notas.filter((nota) => {
      if (!nota.data) return false;

      const [dia, mes, ano] = nota.data.split("/");

      return mes === mesSelecionado && ano === anoSelecionado;
    });
  }, [notas, mesSelecionado, anoSelecionado]);

  // ===== RESUMO =====
  const totalNotas = notasFiltradas.length;

  const totalFaturamento = notasFiltradas.reduce(
    (acc, item) => acc + Number(item.valor || 0),
    0
  );

  function formatCurrency(value) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const nomeMes = meses.find(m => m.value === mesSelecionado)?.label;

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={logoContaxCor} 
            style={styles.logoImage} 
          />
          <View>
            <Text style={styles.titulo}>CONTAX</Text>
            <Text style={styles.subtitulo}>
              ME & MEI · Notas Fiscais
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.divisor}/>

      {/* ===== VISÃO GERAL ===== */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Visão Geral — {nomeMes} de {anoSelecionado}
        </Text>

        <View style={styles.divisor}/>

        <View style={styles.summaryRow}>
          <View>
            <Text style={styles.summaryLabel}>Notas</Text>
            <Text style={styles.summaryValue}>{totalNotas}</Text>
          </View>

          <View>
            <Text style={styles.summaryLabel}>Faturamento</Text>
            <Text style={styles.summaryValue}>
              {formatCurrency(totalFaturamento)}
            </Text>
          </View>
        </View>
      </View>

      {/* ===== FILTRO ===== */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Filtro</Text>
        <View style={styles.divisor}/>

        <View style={styles.filterRow}>

          {/* MÊS */}
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Mês</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={mesSelecionado}
                onValueChange={setMesSelecionado}
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
                onValueChange={setAnoSelecionado}
                style={styles.pickerStyle}
              >
                {anosDisponiveis.map((ano) => (
                  <Picker.Item key={ano} label={ano} value={ano} />
                ))}
              </Picker>
            </View>
          </View>

        </View>
      </View>

      {/* ===== NOTAS ===== */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Notas fiscais do período
        </Text>

        <View style={styles.divisor} />

        {notasFiltradas.length === 0 ? (
          <Text style={styles.emptyText}>
            Nenhuma nota fiscal encontrada.
          </Text>
        ) : (
          notasFiltradas.map((nota) => (
            <View key={nota.id} style={styles.notaItem}>
              
              <View style={styles.notaHeader}>
                <Text style={styles.notaData}>{nota.data}</Text>
                <Text style={styles.notaValor}>
                  {formatCurrency(nota.valor)}
                </Text>
              </View>

              <Text style={styles.notaEmpresa}>
                {nota.empresa}
              </Text>

              <Text style={styles.notaDescricao}>
                {nota.descricao}
              </Text>

            </View>
          ))
        )}
      </View>

    </ScrollView>
  );
}