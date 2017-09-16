function CF_Translate_Field( field_data, language ){
    return  {
        language: language,
        ID: field_data.ID,
        caption: field_data.caption,
        label: field_data.label,
        default: field_data.default,
        type: field_data.hasOwnProperty( 'type' ) ? field_data.type : '',
        options: field_data.hasOwnProperty( 'options' ) ? field_data.options : {},
    };

}