import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
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

  // ===== FILTRO =====
  const [mesFiltro, setMesFiltro] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // converter Date → YYYY-MM
  function formatMonth(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  }

  // texto bonito
  function formatMonthLabel(date){
    return date.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    });
  }

  const notasFiltradas = useMemo(() => {
    const mesFiltroFormatado = formatMonth(mesFiltro);

    const [anoFiltro, mesFiltroNum] = mesFiltroFormatado.split("-");

    return notas.filter((nota) => {
      if (!nota.data) return false;

      const [dia, mes, ano] = nota.data.split("/");

      return ano === anoFiltro && mes === mesFiltroNum;
    });
  }, [notas, mesFiltro]);

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
          Visão Geral — {formatMonthLabel(mesFiltro)}
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

        <Text style={styles.label}>Mês</Text>

        <TouchableOpacity 
          style={styles.select}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.selectTxt}>
            {formatMonthLabel(mesFiltro)}
          </Text>
        </TouchableOpacity>
      </View>

      {/* PICKER */}
      {showPicker && (
        <DateTimePicker
          value={mesFiltro}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) setMesFiltro(selectedDate);
          }}
        />
      )}

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