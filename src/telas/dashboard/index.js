import { View, Text, ScrollView, Image, Modal, Pressable } from "react-native";
import { useMemo, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import logoContaxCor from "../../../assets/logoContaxCor.png";
import styles from "./styles";

export default function Dashboard() {
  const dataHoje = new Date();
  const anoAtual = dataHoje.getFullYear();

  const [modalFiltroVisivel, setModalFiltroVisivel] = useState(false);

  const [mesSelecionado, setMesSelecionado] = useState(
    String(dataHoje.getMonth() + 1).padStart(2, "0")
  );

  const [anoSelecionado, setAnoSelecionado] = useState(anoAtual.toString());

  const empresaLogada = {
    id: 1,
    nome: "Tech Solutions",
    tipo: "MEI",
    cnpj: "12.345.678/0001-01",
    limiteMensal: 20000,
    caixaAtual: 8450,
  };

  const [documentos] = useState([
    {
      id: 1,
      empresaId: 1,
      data: "10/01/2026",
      tipo: "NF-e",
      documento: "nf1.pdf",
      descricao: "Acordo Especial",
      valor: 1000,
      status: "Emitida",
    },
    {
      id: 2,
      empresaId: 1,
      data: "12/01/2026",
      tipo: "Recibo",
      documento: "recibo1.pdf",
      descricao: "Recibo de pagamento",
      valor: 500,
      status: "Emitida",
    },
    {
      id: 3,
      empresaId: 1,
      data: "15/02/2026",
      tipo: "NF-e",
      documento: "nf2.pdf",
      descricao: "Consultoria mensal",
      valor: 2000,
      status: "Emitida",
    },
  ]);

  const meses = [
    { label: "Janeiro", value: "01" },
    { label: "Fevereiro", value: "02" },
    { label: "Março", value: "03" },
    { label: "Abril", value: "04" },
    { label: "Maio", value: "05" },
    { label: "Junho", value: "06" },
    { label: "Julho", value: "07" },
    { label: "Agosto", value: "08" },
    { label: "Setembro", value: "09" },
    { label: "Outubro", value: "10" },
    { label: "Novembro", value: "11" },
    { label: "Dezembro", value: "12" },
  ];

  const anosDisponiveis = [];
  for (let i = 2020; i <= anoAtual; i++) {
    anosDisponiveis.push(i.toString());
  }
  anosDisponiveis.reverse();

  const documentosDaEmpresa = useMemo(() => {
    return documentos.filter((doc) => doc.empresaId === empresaLogada.id);
  }, [documentos]);

  const documentosFiltrados = useMemo(() => {
    return documentosDaEmpresa.filter((doc) => {
      const [, mes, ano] = doc.data.split("/");
      return mes === mesSelecionado && ano === anoSelecionado;
    });
  }, [documentosDaEmpresa, mesSelecionado, anoSelecionado]);

  const documentosRecentes = useMemo(() => {
    return [...documentosDaEmpresa]
      .sort((a, b) => {
        const [diaA, mesA, anoA] = a.data.split("/");
        const [diaB, mesB, anoB] = b.data.split("/");

        return new Date(`${anoB}-${mesB}-${diaB}`) - new Date(`${anoA}-${mesA}-${diaA}`);
      })
      .slice(0, 3);
  }, [documentosDaEmpresa]);

  const faturamentoMes = documentosFiltrados.reduce(
    (acc, doc) => acc + Number(doc.valor || 0),
    0
  );

  const totalNotasEmitidas = documentosFiltrados.length;

  const percentualUtilizado = empresaLogada.limiteMensal
    ? Math.min((faturamentoMes / empresaLogada.limiteMensal) * 100, 100)
    : 0;

  const restanteLimite = Math.max(empresaLogada.limiteMensal - faturamentoMes, 0);

  const statusLimite =
    percentualUtilizado >= 90
      ? "Atenção"
      : percentualUtilizado >= 70
      ? "Moderado"
      : "Saudável";

  const nomeMes = meses.find((m) => m.value === mesSelecionado)?.label;

  function formatCurrency(value) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={logoContaxCor} style={styles.logoImage} />

            <View>
              <Text style={styles.headerEyebrow}>Dashboard MEI</Text>
              <Text style={styles.headerTitle}>{empresaLogada.nome}</Text>
              <Text style={styles.headerSubtitle}>
                {empresaLogada.tipo} · {empresaLogada.cnpj}
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.filterButton}
            onPress={() => setModalFiltroVisivel(true)}
          >
            <Ionicons name="filter" size={22} color="#0CBBDD" />
          </Pressable>
        </View>

        <LinearGradient
          colors={["#04BBD3", "#3BAFB8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroTop}>
            <View>
              <Text style={styles.heroLabel}>Faturamento do mês</Text>
              <Text style={styles.heroValue}>{formatCurrency(faturamentoMes)}</Text>
            </View>

            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgeText}>{nomeMes}</Text>
            </View>
          </View>

          <View style={styles.heroProgressTrack}>
            <View
              style={[
                styles.heroProgressFill,
                { width: `${Math.max(percentualUtilizado, 3)}%` },
              ]}
            />
          </View>

          <View style={styles.heroBottom}>
            <Text style={styles.heroBottomText}>
              {percentualUtilizado.toFixed(1)}% do limite usado
            </Text>
            <Text style={styles.heroBottomText}>{anoSelecionado}</Text>
          </View>
        </LinearGradient>

        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <View style={styles.metricIconBox}>
              <Ionicons name="wallet-outline" size={21} color="#0CBBDD" />
            </View>
            <Text style={styles.metricLabel}>Caixa atual</Text>
            <Text style={styles.metricValue}>
              {formatCurrency(empresaLogada.caixaAtual)}
            </Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricIconBox}>
              <Ionicons name="document-text-outline" size={21} color="#0CBBDD" />
            </View>
            <Text style={styles.metricLabel}>Notas emitidas</Text>
            <Text style={styles.metricValue}>{totalNotasEmitidas}</Text>
          </View>
        </View>

        <View style={styles.limitCard}>
          <View style={styles.limitHeader}>
            <View>
              <Text style={styles.sectionTitle}>Limite mensal</Text>
              <Text style={styles.sectionSubtitle}>Controle de faturamento</Text>
            </View>

            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>{statusLimite}</Text>
            </View>
          </View>

          <View style={styles.limitValues}>
            <View>              
              <Text style={styles.limitValue}>
                {formatCurrency(empresaLogada.limiteMensal)}
              </Text>
            </View>

            <View>              
              <Text style={styles.limitValueRight}>
                {formatCurrency(restanteLimite)}
              </Text>
            </View>
          </View>

          <View style={styles.limitProgressTrack}>
            <View
              style={[
                styles.limitProgressFill,
                { width: `${Math.max(percentualUtilizado, 3)}%` },
              ]}
            />
          </View>

          <Text style={styles.limitPercent}>
            {percentualUtilizado.toFixed(1)}% utilizado no período
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Documentos recentes</Text>
            <Text style={styles.sectionSubtitle}>Últimas emissões da empresa</Text>
          </View>
        </View>

        {documentosRecentes.map((doc) => (
          <View key={doc.id} style={styles.documentCard}>
            <View style={styles.documentTop}>
              <View style={styles.documentIcon}>
                <Ionicons name="document-text-outline" size={20} color="#0CBBDD" />
              </View>

              <View style={styles.documentInfo}>
                <Text style={styles.documentTitle}>{doc.tipo}</Text>
                <Text style={styles.documentName}>{doc.documento}</Text>
              </View>

              <Text style={styles.documentValue}>{formatCurrency(doc.valor)}</Text>
            </View>

            <Text style={styles.documentDescription}>{doc.descricao}</Text>

            <View style={styles.documentFooter}>
              <Text style={styles.documentDate}>{doc.data}</Text>

              <View style={styles.documentStatus}>
                <Text style={styles.documentStatusText}>{doc.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={modalFiltroVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => setModalFiltroVisivel(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalFiltroVisivel(false)}
        >
          <Pressable style={styles.modalContent}>
            <View style={styles.modalHandle} />

            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Filtrar dashboard</Text>
                <Text style={styles.modalSubtitle}>
                  Escolha o período da empresa
                </Text>
              </View>

              <Pressable
                style={styles.closeButton}
                onPress={() => setModalFiltroVisivel(false)}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </Pressable>
            </View>

            <View style={styles.modalField}>
              <Text style={styles.inputLabel}>Mês</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={mesSelecionado}
                  onValueChange={setMesSelecionado}
                  style={styles.pickerStyle}
                  dropdownIconColor="#64748B"
                >
                  {meses.map((m) => (
                    <Picker.Item key={m.value} label={m.label} value={m.value} />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.modalField}>
              <Text style={styles.inputLabel}>Ano</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={anoSelecionado}
                  onValueChange={setAnoSelecionado}
                  style={styles.pickerStyle}
                  dropdownIconColor="#64748B"
                >
                  {anosDisponiveis.map((ano) => (
                    <Picker.Item key={ano} label={ano} value={ano} />
                  ))}
                </Picker>
              </View>
            </View>

            <Pressable
              style={styles.applyButton}
              onPress={() => setModalFiltroVisivel(false)}
            >
              <Text style={styles.applyButtonText}>Aplicar filtro</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}