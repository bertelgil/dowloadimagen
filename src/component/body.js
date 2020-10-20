import React from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { Input, Form,Modal, Image, Button, Icon, Container} from 'semantic-ui-react';


class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {      
            value: '' ,
            open1: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {    
          this.setState({value: event.target.value});  
        }

     handleSubmit(event) {
            this.setState({open1: true})
            event.preventDefault();
    }   

    handleDownload = (url, filename) => {
      this.setState({open1: false})
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        })
      }    
    // download () {
    
    //     var element = document.createElement("a");
    //     var file = new Blob(
    //       [ 
    //         "https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg"
            
    //       ],
    //       { type: "image/*" }
    //     );
    //     element.href = URL.createObjectURL(file);
    //     element.download = "image.jpg";
    //     element.click();
    //   };

    render() {
       const {value} = this.state;
        return (
              
            <div>
              <Container textAlign='center'>Descarga Tu Imagen aca</Container>
              {/* <img src={window.location.origin + value}></img> */}
                <Form onSubmit={this.handleSubmit}>
                    <Input loading icon='user' placeholder='Search...' value={this.state.value}  onChange={this.handleChange} />
                    <Input type="submit" value="Submit"/>
                </Form>

                
                <Modal open={this.state.open1}>
                    <Modal.Header>Deseas Descargar este Imagen?</Modal.Header>
                    <Modal.Content image>
                    <Image size='medium' src={this.state.value}/>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button primary onClick={() => {this.handleDownload(""+value +"", 'test-download.png')}} >
                        Descargar <Icon name='right chevron' />
                    </Button>
                    </Modal.Actions>
                </Modal>
                </div>      
            );
      }
    }
 
export default Body;