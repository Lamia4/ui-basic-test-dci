

class Table {
    constructor ({ title, width, columns, rows}) {

    this.tableTitle = title || 'DefaultTable ';
    this.tableWidth = width || process.stdout.columns;
    this.tableColumns = columns || [];
    this.tableRows = rows || [];

    }

    setTitle = (title) => this.tableTitle = title;
    setWidth = (width) => this.tableWidth = width;
    setColumns = (columns) => this.tableColumns = columns;
    setRows = (rows) => this.tableRows = rows;

    createTitle = ()  => 
    {
        const padding = Math.round((this.tableWidth - this.tableTitle.length)/2); //für padding

        return `\n${" ".repeat(padding)}${this.tableTitle}${" ".repeat(padding)}`; //padding + Titel + padding
    }
    createColumn = (text, width) =>  //2 Parameter: Title und Breite der Spalte, es wird eine Spalte erstellt
    {
            const restWidth = width - text.toString().length || 20; //Restweite von taerminalweite - textweite
            
            return ` ${ text.toString() } ${ " ".repeat(restWidth - 4) }|`; //2 steht für 2 Zeichen | und leerzeichen
    }

    // createHeader = () => 
    // {
    //     let tempString = "|";
    //     let width = this.tableWidth;

    //     this.tableColumns.forEach((column, i)=>
    //     {
    //         if(this.tableColumns.length === i+1)
    //         {
    //             tempString += this.createHeader(column.title, width -1); //letzte spalte
    //         }
    //         else 
    //         {
    //             tempString += this.createColumn(column.title, column.width) //erste, zweite, dritte spalte
    //         }
    //         width -= column.width; // jeden durchlauf ziehen wir die breite der spalte ab;
    //     });

    //     return tempString;
    // }

    createHeader = () =>
    {
        let tempString = "|";
        let restWidth = this.tableWidth; //100% Breite des Terminals

        this.tableColumns.forEach((column, i) =>

        {
            if(this.tableColumns.length === i + 1)
            {
                // problem mit width + 2 oder - 1;
                tempString += this.createColumn(column.title, restWidth +2); // | ID (Restweite +2) |
            }
            else
            {
                tempString += this.createColumn(column.title, column.width);  // title von column und die weite von column werden dann mit ausgegeben zum | also das heißt, so sieht das dann aus | ID (weite z. bsp. 10) | oder | Name (weite 25) |
            }

            restWidth -= column.width;
        });

        return tempString;
    }

    createDivider = () => 
    {
        let tempString = "|";
        let width = this.tableWidth; //100% Breite

        this.tableColumns.forEach((column, i) =>
        {
            if(this.tableColumns.length === i+1) //letzte Spalte
            {
                tempString += "-".repeat(width) + "|"; //am Ende übrige Länge nehmen und mit Bindestrichen und |
            }
            else{
                tempString += "-".repeat(column.width -2 || 20) + "|"; //z.Bsp. 10-8, also 8, es wird 8 mal wiederholt
            }
            width -= column.width; //es wird immer die Breite abgezogen, bis man die letzte Breite hat von der Gesamtbreite
        });
        return tempString;
    }

    createRow = (rowContent) => //auf jeweils immer auf ein objekt vom rows array angewandt
    {
        let tempString = "|";
        

        for(let key in rowContent) //für jeden Eintragung in dem Objekt von const row, also für jeden key von den objekten vom array rows, also id, name und role
        {
            let width = this.tableWidth;

            this.tableColumns.forEach((column, i) => //für jeden objekt in tableColumns array, also z bsp  { key: 'id', title: 'ID', width: 10}
            {
                if(column.key === key) //wenn der Eintrag von objekt.key, also wenn value oder property in obj in array von const columns auch in array rows im objekt als key zu finden ist : key: id : ist id in jedem object in der rows-array drin -- 1. obj hat id: 1, also ist id vorhanden, ist key name in rows drin? ja, weil name: "Zeynep", also name vorhanden,

                {
                        if(this.tableColumns.length === i+1) // die letzte Spalte
                        {
                            tempString += this.createColumn (rowContent[key], width +2); //die Breite vom einzelnen Eintrag in der Zeile und die Restweite + 2 Zeichen (| und Leerzeichen)
                        }
                        else{
                            tempString += this.createColumn(rowContent[key], column.width); //die Breite vom  Eintrag und die Breite von der Spalte
                        }

                }
                width -= column.width;
            })
        }

        return tempString;
    }


    showTable = () =>
    {

        console.log(this.createTitle());
        console.log(this.createHeader());
        console.log(this.createDivider());
        this.tableRows.forEach((row,i) =>
        {
           console.log(this.createRow(row)); 
        }); // weil wir mehrere Rows haben
        // console.log("Title");
        // console.log("Header");
        // console.log("Divider");
        // console.log("Zeilen");

}


}

// const Table = new table;
// console.log(Table);

module.exports= Table;