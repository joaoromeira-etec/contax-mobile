import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const { width } = Dimensions.get('window');

const styles=StyleSheet.create({
    // --- ESTRUTURA BASE ---
    container: {
        flex: 1,
        backgroundColor: '#F5F7F9',
        padding: RFPercentage(2),
    },
    logoContainer: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    logoImage: { 
        width: 35, 
        height: 35, 
        marginRight: 10 
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 1
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: '#0cbddd',
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: RFPercentage(1.8),
        color: '#777',
    },
    // --- CARDS E CONTEÚDO ---
    card: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderColor: '#E2E8F0',
        borderWidth: RFPercentage(0.1),
        padding: RFPercentage(2),
        marginTop: RFPercentage(2),
        marginBottom: RFPercentage(2),
        elevation: 3, //Android.
        shadowColor: '#000', //iOS
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    divisor: {
        height: RFPercentage(0.2),
        width: '100%',
        backgroundColor: '#E2E8F0',
        marginVertical: RFPercentage(1)
    },
    cardTitulo: {
        fontSize: RFPercentage(2.2),
        fontWeight: 'bold',
        marginBottom: RFPercentage(1),
        color: '#333',
    },
    cardTexto: {
            fontSize: RFPercentage(2),
            fontWeight: '500',
            color: '#777',
            marginTop: RFPercentage(1),
            marginBottom: RFPercentage(2),
    },
    // --- FILTROS ---
    filterRow: {
        flexDirection: 'row',
        marginBottom: 15
    },
    label: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5,
        fontWeight: '600'
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 10,
        backgroundColor: '#FFF',
        height: 50,
        justifyContent: 'center',
    },
    pickerStyle: {
        height: 50,
        width: '100%',
        color: '#475569',
    },
    // --- TABELA DE DOCUMENTOS ---
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        paddingBottom: 8,
        marginBottom: 5
    },
    th: {
        flex: 1,
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
        alignItems: 'center'
    },
    rowActive: {
        backgroundColor: '#E0F7F9'
    },
    cell: {
        flex: 1,
        fontSize: 11,
        color: '#444'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#00A8B5',
        borderRadius: 4,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // --- PREVIEW DO DOCUMENTO ---
    previewCard: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 15,
        elevation: 3,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#E2E8F0'
    },
    previewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    previewTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#333'
    },
    docImagePlaceholder: {
        width: '100%',
        height: 250,
        backgroundColor: '#F1F5F9',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    // --- AÇÕES FLUTUANTES / BOTTOM ---
    actionContainer: {
        backgroundColor: '#FFF',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        elevation: 10
    },
    actionCount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#334155',
        marginBottom: 12
    },
    btnAction: {
        backgroundColor: '#00A8B5',
        height: 52,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnActionText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    },

    // --- BOTTOM TAB CUSTOMIZADA ---
    bottomTab: {
        height: 70,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        alignItems: 'center'
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}
);
export default styles;