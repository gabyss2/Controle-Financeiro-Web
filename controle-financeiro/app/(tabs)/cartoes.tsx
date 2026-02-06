
import React from "react"; import { ScrollView } from "react-native"; import { Screen } from "../../components/UI"; import CardEditor from "../../components/CardEditor"; import PurchaseForm from "../../components/PurchaseForm"; import FaturaView from "../../components/FaturaView";
export default function Cartoes() { return (<Screen title="Cartões"><ScrollView contentContainerStyle={{ gap: 16 }}><CardEditor /><PurchaseForm /><FaturaView /></ScrollView></Screen>); }
