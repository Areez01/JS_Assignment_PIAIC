function cars(manufacturer, model, year, color,more_options){
   const cars_info = {
    'manufacturer' : manufacturer,
    'model' : model,
    'year' : year,
    'color' : color,
    ...more_options
   }

    console.log({manufacturer, model, year, color, more_options})
return cars_info;

    
}


cars('Toyota', 'Corolla','2022','White', {gearshift : "Manual", rim : "Alloy Rim"});

cars('Suzuki', 'Alto','2016','Black', {gearshift : "Automatic"})

