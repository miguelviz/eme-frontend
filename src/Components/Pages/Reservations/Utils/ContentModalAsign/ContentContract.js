import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import { Page, Text, View, Document, StyleSheet,PDFViewer,Image } from '@react-pdf/renderer';
import {useModal} from "../../../../Principal/Modal/Context";

const Content = (props)=>{
    const {selectedClient} = props;
    const {data} = useModal();
    const {apartmentData} = data;
    const returnUnderScore = ()=>{
        let str = selectedClient.names + " " + selectedClient.second_names;
        let str_return = "";
        for (let index = 0; index < str.length; index++) {
            str_return += "_";
        }
        return str_return;
    }
    return(
        <>
            {
                selectedClient ? 
                <PDFViewer style={{width:"100%",height:window.screen.height-400,overflowY:"auto"}}>
                    <Document>
                        <Page size="A4" style={styles.page}>
                            <View style={{width:"100%"}}>
                                <Text style={{fontSize:20,fontWeight:"bold",textAlign:"right",marginTop:10,marginRight:10}}>Contrato Arrendatario</Text>
                                <View style={styles.Rower}>
                                    <View style={{margin: 10,padding: 10,flexGrow: 1,width:"40%"}}>
                                        <Image src={process.env.PUBLIC_URL + "/eme_logo_cuad.png"} style={{width:200}} />
                                    </View>
                                    <View style={{margin: 10,padding: 10,flexGrow: 1,width:"70%"}}>
                                        <Text style={styles.normalText}>Cliente: {selectedClient.names + " " + selectedClient.second_names} </Text>
                                        <Text style={styles.normalText}>Apartamento: {apartmentData.name_apartment} </Text>
                                        <Text style={styles.normalText}>Tipo de apartamento: {apartmentData.name_type} </Text>
                                        <Text style={styles.normalText}>Piso: {apartmentData.floor||"Planta Baja"} </Text>
                                        <Text style={styles.normalText}>Recamaras: {apartmentData.bedrooms} </Text>
                                        <Text style={styles.normalText}>Baños: {apartmentData.bathrooms} </Text>
                                    </View>
                                </View>
                                <View style={{alignItems:"center",marginTop:30}}>
                                    <View>
                                        <Text style={styles.normalText}>{returnUnderScore()}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.normalText}>{selectedClient.names + " " + selectedClient.second_names} </Text>
                                    </View>
                                </View>
                            </View>
                        </Page>
                    </Document>
                </PDFViewer> : 
                <Container>
                    <Row>
                        <Col sm="12" style={{padding:20}} className="d-flex justify-content-center">
                            <span style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>Por favor asigne un cliente para visualizar el contrato</span>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column'
    },
    Rower:{
        flexDirection: 'row',
        width:"100%"
    },
    normalText:{fontSize:13,marginTop:10,fontWeight:"normal"},
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
export default Content;