const Formatter = require("./formatter");

const ApiClient = require("./api-client");
// Any API Client implementation. Can be axios

const Parser = require("./parser");


/*
    Webservices: https://wsquest.siesacloud.com:8043/WSUNOEE/WSUNOEE.WSDL
    Asmx: https://wsquest.siesacloud.com:8043/WSUNOEE/WSUNOEE.asmx
*/

//???
//const url = `http://169.55.98.188:8043/WSUNOEE/WSUNOEE.asmx`;
const url = `https://wsquest.siesacloud.com:8043/WSUNOEE/WSUNOEE.asmx`;

module.exports = class Remote {

  static async loadQuest(
    nombreConexion,
    idCia,
    idProveedor,
    idConsulta,
    usuario,
    clave
  ) {
    try {
      let payload = {
        Consulta: {
          NombreConexion: nombreConexion,
          IdCia: idCia,
          IdProveedor: idProveedor,
          IdConsulta: idConsulta,
          Usuario: usuario,
          Clave: clave
        },
      };


      const headers = {
        headers: {
          "Accept-Encoding": "gunzip,deflate",
          "Content-Type": "text/xml;charset=UTF-8",
          "SOAPAction": "http://tempuri.org/EjecutarConsultaXML",
          //"Content-Length": 801,
          //"Host": "169.55.98.188:8043",
          //"Connection": "Keep-Alive",
          //"User-Agent": "Apache-HttpClient/4.5.5 (Java/16.0.1)",
        },
      };

      let args = Formatter.convertJsonToSoapRequest(payload);
      //console.log('ARGS:',args);

      let remoteResponse = await ApiClient.post(url, args, headers);
      //console.log(remoteResponse.data);

      let data = remoteResponse.data;

      let remoteResponseJSON = await Parser.convertXMLToJSON(data);

      //console.log(remoteResponseJSON);

      return remoteResponseJSON;

    } catch (err) {
      throw new Error(
        `Oops algo estuvo mal. Por favor Trate de nuevo mas tarde... ${JSON.stringify(
          err
        )}`
      );
    }
  }

};