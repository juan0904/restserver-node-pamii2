const Parser = require("./parser");

module.exports = class Formatter {
  
    static convertJsonToSoapRequest(jsonArguments) {
    let soapBody = Parser.parseJSONBodyToXML(jsonArguments);


    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
               <soapenv:Header/>
               <soapenv:Body>
                  <tem:EjecutarConsultaXML>
                     <tem:pvstrxmlParametros>
                        <![CDATA[
                           ${soapBody}
                        ]]>
                     </tem:pvstrxmlParametros>
                  </tem:EjecutarConsultaXML>
                </soapenv:Body>
            </soapenv:Envelope> `;
        /*
    return `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://tempuri.org/">
        <soap:Header/>
        <soap:Body>
            ${soapBody}
        </soap:Body>
        </soap:Envelope> `;
    */
  }
};

/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> 
   <soapenv:Header/>
   <soapenv:Body>
      <tem:EjecutarConsultaXML>
         <!--Optional:-->
         <tem:pvstrxmlParametros><![CDATA[

               <Consulta>
                      <NombreConexion>Unoee_Quest_real</NombreConexion>
                      <IdCia>1</IdCia>
                      <IdProveedor>PAMII</IdProveedor>
                      <IdConsulta>RPS_CONSULTA_CATALOGO_VEO_V2</IdConsulta>
                      <Usuario>integracion.pamii</Usuario>
                      <Clave>R.W]@1IXf0</Clave>                        
               </Consulta>

                      ]]></tem:pvstrxmlParametros>
      </tem:EjecutarConsultaXML>
   </soapenv:Body>
</soapenv:Envelope>
*/