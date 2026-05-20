import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF3F8",
  },

  contentContainer: {
    paddingHorizontal: RFPercentage(2.2),
    paddingTop: RFPercentage(2),
    paddingBottom: RFPercentage(12),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: RFPercentage(2.2),
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: RFPercentage(1),
  },

  logoImage: {
    width: RFPercentage(7.2),
    height: RFPercentage(7.2),
    marginRight: RFPercentage(1.2),
    resizeMode: "contain",
  },

  headerEyebrow: {
    fontSize: RFPercentage(1.42),
    color: "#64748B",
    fontWeight: "800",
  },

  headerTitle: {
    fontSize: RFPercentage(2.35),
    color: "#0F172A",
    fontWeight: "900",
    letterSpacing: 0.2,
  },

  headerSubtitle: {
    fontSize: RFPercentage(1.38),
    color: "#475569",
    fontWeight: "600",
    marginTop: RFPercentage(0.15),
  },

  filterButton: {
    width: RFPercentage(5.2),
    height: RFPercentage(5.2),
    borderRadius: RFPercentage(2.6),
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DDE7F0",
    elevation: 3,
    shadowColor: "#0F172A",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  heroCard: {
    borderRadius: RFPercentage(2.2),
    padding: RFPercentage(2.2),
    marginBottom: RFPercentage(1.7),
    elevation: 6,
    shadowColor: "#0CBBDD",
    shadowOpacity: 0.24,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heroLabel: {
    color: "#FFFFFF",
    fontSize: RFPercentage(1.8),
    fontWeight: "900",
  },

  heroValue: {
    color: "#FFFFFF",
    fontSize: RFPercentage(3.8),
    fontWeight: "900",
    marginTop: RFPercentage(1.1),
  },

  heroBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: RFPercentage(1.25),
    paddingVertical: RFPercentage(0.55),
    borderRadius: RFPercentage(2),
  },

  heroBadgeText: {
    color: "#FFFFFF",
    fontSize: RFPercentage(1.35),
    fontWeight: "900",
  },

  heroProgressTrack: {
    height: RFPercentage(0.65),
    backgroundColor: "rgba(255,255,255,0.28)",
    borderRadius: RFPercentage(1),
    marginTop: RFPercentage(2.4),
    overflow: "hidden",
  },

  heroProgressFill: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: RFPercentage(1),
  },

  heroBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: RFPercentage(1.3),
  },

  heroBottomText: {
    color: "#0F172A",
    fontSize: RFPercentage(1.45),
    fontWeight: "800",
  },

  metricsGrid: {
    flexDirection: "row",
    gap: RFPercentage(1.3),
    marginBottom: RFPercentage(1.7),
  },

  metricCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: RFPercentage(1.8),
    padding: RFPercentage(1.7),
    borderWidth: 1,
    borderColor: "#DDE7F0",
    elevation: 2,
    shadowColor: "#0F172A",
    shadowOpacity: 0.045,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  metricIconBox: {
    width: RFPercentage(4.2),
    height: RFPercentage(4.2),
    borderRadius: RFPercentage(1.3),
    backgroundColor: "#E6FAFD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: RFPercentage(1),
  },

  metricLabel: {
    color: "#64748B",
    fontSize: RFPercentage(1.35),
    fontWeight: "800",
  },

  metricValue: {
    color: "#0F172A",
    fontSize: RFPercentage(2),
    fontWeight: "900",
    marginTop: RFPercentage(0.35),
  },

  limitCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: RFPercentage(1.9),
    padding: RFPercentage(1.9),
    marginBottom: RFPercentage(2.3),
    borderWidth: 1,
    borderColor: "#DDE7F0",
    elevation: 2,
    shadowColor: "#0F172A",
    shadowOpacity: 0.045,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  limitHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: RFPercentage(1.5),
  },

  sectionHeader: {
    marginBottom: RFPercentage(1.2),
  },

  sectionTitle: {
    color: "#1E293B",
    fontSize: RFPercentage(2.25),
    fontWeight: "900",
  },

  sectionSubtitle: {
    color: "#64748B",
    fontSize: RFPercentage(1.45),
    fontWeight: "600",
    marginTop: RFPercentage(0.25),
  },

  statusBadge: {
    backgroundColor: "#D1FAE5",
    borderWidth: 1,
    borderColor: "#86EFAC",
    paddingHorizontal: RFPercentage(1),
    paddingVertical: RFPercentage(0.45),
    borderRadius: RFPercentage(1.3),
  },

  statusBadgeText: {
    color: "#047857",
    fontSize: RFPercentage(1.25),
    fontWeight: "900",
  },

  limitValues: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: RFPercentage(1.2),
  },

  limitLabel: {
    color: "#94A3B8",
    fontSize: RFPercentage(1.3),
    fontWeight: "800",
  },

  limitLabelRight: {
    color: "#94A3B8",
    fontSize: RFPercentage(1.3),
    fontWeight: "800",
    textAlign: "right",
  },

  limitValue: {
    color: "#0F172A",
    fontSize: RFPercentage(1.7),
    fontWeight: "900",
    marginTop: RFPercentage(0.25),
  },

  limitValueRight: {
    color: "#0CBBDD",
    fontSize: RFPercentage(1.7),
    fontWeight: "900",
    marginTop: RFPercentage(0.25),
    textAlign: "right",
  },

  limitProgressTrack: {
    height: RFPercentage(0.85),
    backgroundColor: "#DDF3F7",
    borderRadius: RFPercentage(1),
    overflow: "hidden",
  },

  limitProgressFill: {
    height: "100%",
    backgroundColor: "#0CBBDD",
    borderRadius: RFPercentage(1),
  },

  limitPercent: {
    color: "#0891B2",
    fontSize: RFPercentage(1.35),
    fontWeight: "900",
    marginTop: RFPercentage(0.9),
    textAlign: "right",
  },

  documentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: RFPercentage(1.8),
    padding: RFPercentage(1.8),
    marginBottom: RFPercentage(1.3),
    borderWidth: 1,
    borderColor: "#DDE7F0",
  },

  documentTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFPercentage(1),
  },

  documentIcon: {
    width: RFPercentage(4.5),
    height: RFPercentage(4.5),
    borderRadius: RFPercentage(1.4),
    backgroundColor: "#E6FAFD",
    alignItems: "center",
    justifyContent: "center",
  },

  documentInfo: {
    flex: 1,
  },

  documentTitle: {
    color: "#0F172A",
    fontSize: RFPercentage(1.8),
    fontWeight: "900",
  },

  documentName: {
    color: "#94A3B8",
    fontSize: RFPercentage(1.35),
    fontWeight: "700",
    marginTop: RFPercentage(0.2),
  },

  documentValue: {
    color: "#0F172A",
    fontSize: RFPercentage(1.75),
    fontWeight: "900",
  },

  documentDescription: {
    color: "#64748B",
    fontSize: RFPercentage(1.48),
    fontWeight: "700",
    marginTop: RFPercentage(1.1),
  },

  documentFooter: {
    borderTopWidth: 1,
    borderTopColor: "#EEF2F7",
    marginTop: RFPercentage(1.3),
    paddingTop: RFPercentage(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  documentDate: {
    color: "#64748B",
    fontSize: RFPercentage(1.35),
    fontWeight: "900",
  },

  documentStatus: {
    backgroundColor: "#D1FAE5",
    borderWidth: 1,
    borderColor: "#86EFAC",
    paddingHorizontal: RFPercentage(1),
    paddingVertical: RFPercentage(0.45),
    borderRadius: RFPercentage(1.3),
  },

  documentStatusText: {
    color: "#047857",
    fontSize: RFPercentage(1.25),
    fontWeight: "900",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.45)",
    justifyContent: "flex-end",
  },

  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: RFPercentage(3),
    borderTopRightRadius: RFPercentage(3),
    paddingHorizontal: RFPercentage(2.4),
    paddingTop: RFPercentage(1.2),
    paddingBottom: RFPercentage(3),
  },

  modalHandle: {
    width: RFPercentage(5),
    height: RFPercentage(0.45),
    backgroundColor: "#CBD5E1",
    borderRadius: RFPercentage(1),
    alignSelf: "center",
    marginBottom: RFPercentage(2),
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: RFPercentage(2),
  },

  modalTitle: {
    color: "#0F172A",
    fontSize: RFPercentage(2.3),
    fontWeight: "900",
  },

  modalSubtitle: {
    color: "#64748B",
    fontSize: RFPercentage(1.45),
    fontWeight: "600",
    marginTop: RFPercentage(0.25),
  },

  closeButton: {
    width: RFPercentage(4),
    height: RFPercentage(4),
    borderRadius: RFPercentage(2),
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },

  closeButtonText: {
    color: "#334155",
    fontSize: RFPercentage(2.6),
    fontWeight: "600",
    lineHeight: RFPercentage(2.7),
  },

  modalField: {
    marginBottom: RFPercentage(1.5),
  },

  inputLabel: {
    color: "#64748B",
    fontSize: RFPercentage(1.45),
    fontWeight: "900",
    marginBottom: RFPercentage(0.55),
  },

  pickerContainer: {
    height: RFPercentage(5.9),
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#DDE7F0",
    borderRadius: RFPercentage(1.35),
    justifyContent: "center",
    overflow: "hidden",
  },

  pickerStyle: {
    height: RFPercentage(5.9),
    color: "#334155",
    fontSize: RFPercentage(1.65),
  },

  applyButton: {
    height: RFPercentage(5.7),
    backgroundColor: "#0CBBDD",
    borderRadius: RFPercentage(1.4),
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(0.8),
  },

  applyButtonText: {
    color: "#FFFFFF",
    fontSize: RFPercentage(1.65),
    fontWeight: "900",
  },
});

export default styles;