import React, { Component } from 'react';
import * as FormData from 'form-data'
//const FormData = require('form-data');
import ArticleForm from './ArticleForm.js';

class UploadFile extends Component {
    state = {
        file: null,
        fileName: null,
        fileResult: null,
        author: "",
        title: "",
        publisher: "",
        year: "",
        month: "",
        journal: ""
    }

    handleFile(e) {
        //read file and save into state
        let file = e.target.files[0]
        this.setState({ fileName: e.target.files[0].name })
        this.setState({ file: file })

        let formData = new FormData();
        formData.append("uploaded-file", file);
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        
        //read file data and extract data 
        reader.onload = (e) => {
            //split the file line by line
            const lines = reader.result.split(/\r\n|\n/);
            var authorResult = "";
            var titleResult = "";
            var publisherResult = "";
            var yearResult = "";
            var monthResult = "";
            var journalResult = "";

            //check each line containes that key word
            for (var count = 0; count < lines.length; count++) {

                if (isIncluded(lines[count], "author")) {
                    authorResult += lines[count];
                }
                if (isIncluded(lines[count], "title")) {
                    titleResult += lines[count];
                }
                if (isIncluded(lines[count], "publisher")) {
                    publisherResult += lines[count];
                } if (isIncluded(lines[count], "year")) {
                    yearResult += lines[count];
                } if (isIncluded(lines[count], "month")) {
                    monthResult += lines[count];
                } if (isIncluded(lines[count], "journal")) {
                    journalResult += lines[count];
                }
            }
            
            //update state
            authorResult=authorResult.replaceAll("author = "," ");
            authorResult=authorResult.replaceAll("{"," ");
            authorResult=authorResult.replaceAll("}"," ");

            titleResult=titleResult.replaceAll("title = "," ");
            titleResult= titleResult.replaceAll("{"," ");
            titleResult= titleResult.replaceAll("}"," ");

            publisherResult=publisherResult.replaceAll("publisher = "," ");
            publisherResult= publisherResult.replaceAll( "{"," ");
            publisherResult= publisherResult.replaceAll("}"," ");

            yearResult=yearResult.replaceAll("year = "," ");
            yearResult= yearResult.replaceAll( "{"," ");
            yearResult= yearResult.replaceAll( "}"," ");

            monthResult=monthResult.replaceAll("month = "," ");

            journalResult=journalResult.replaceAll("journal = "," ");
            journalResult= journalResult.replaceAll( "{"," ");
            journalResult= journalResult.replaceAll("}"," ");

            this.setState({ author: authorResult });
            this.setState({ title: titleResult });
            this.setState({ publisher: publisherResult });
            this.setState({ year: yearResult });
            this.setState({ month: monthResult });
            this.setState({ journal: journalResult });


        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Upload your file</h1>
                <div className="input-group">

                    <div className="custom-file" onSubmit={this.onSubmit}>

                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" onChange={(e) => this.handleFile(e)} />
                        <label className="custom-file-label" htmlFor="inputGroupFile01" >choose a file</label>
                    </div>

                </div>
                <p>{this.state.fileName}</p>
                <br></br>
                <p>{this.state.fileResult}</p>

                {/* pass down the state to the article form */}
                <ArticleForm
                    author={this.state.author}
                    title={this.state.title}
                    publisher={this.state.publisher}
                    year={this.state.year}
                    month={this.state.month}
                    journal={this.state.journal}
                >
                </ArticleForm>

            </React.Fragment>
        );
    }

}
function isIncluded(result, text) {
    return result.includes(text);
}
export default UploadFile;