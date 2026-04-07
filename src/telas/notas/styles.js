import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: '#F2F5F7'
    },
    container: {
        flex: 1,
        padding: 15
    },
    logo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00A8B5'
    },
    logoSmall:
    { fontSize: 12,
        color: '#666',
        fontWeight: 'normal'
    },
    badge: {
        color: '#888',
        fontSize: 12
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        elevation: 3
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10
    },
    filterRow: {
        flexDirection: 'row',
        marginBottom: 15
    },
    label: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5
    },
    fakeInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnFilter: {
        backgroundColor: '#00A8B5',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnFilterText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        pb: 5,
        mb: 5
    },
    th: {
        flex: 1,
        fontSize: 10,
        color: '#AAA',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
        alignItems: 'center'
    },
    rowActive: {
        backgroundColor: '#E0F7F9'
    },
    cell: {
        flex: 1,
        fontSize: 10,
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
    previewCard: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        elevation: 3
    },
    previewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        mb: 10
    },
    previewTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333'
    },
    docImagePlaceholder: {
        width: '100%',
        height: 200,
        backgroundColor: '#FAFAFA',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#CCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionContainer: {
        position: 'bottom',
        //bottom: 70,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#EEE'
    },
    actionCount: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10
    },
    btnAction: {
        backgroundColor: '#00A8B5',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnActionText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
});