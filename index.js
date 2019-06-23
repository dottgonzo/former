"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validate(formdata, formschema) {
    var requireds = [];
    for (var s = 0; s < formschema.length; s++) {
        if (formschema[s].required) {
            var exists = false;
            for (var d = 0; d < formdata.length; d++) {
                if (formdata[d].label === formschema[s].label) {
                    switch (formschema[s].type) {
                        case 'checkbox':
                            exists = true;
                            break;
                        case 'text':
                            if (formdata[d].value && formdata[d].value !== '' && formdata[d].value.length > 8)
                                exists = true;
                        case 'string':
                            if (formdata[d].value && formdata[d].value !== '' && formdata[d].value.length > 0)
                                exists = true;
                            break;
                        case 'email':
                            if (formdata[d].value && formdata[d].value !== '' && formdata[d].value.split('@').length > 1 && formdata[d].value.split('@')[1].split('.').length > 1)
                                exists = true;
                            break;
                        default:
                            if (formdata[d].value && formdata[d].value !== '')
                                exists = true;
                            break;
                    }
                }
            }
            if (!exists)
                requireds.push(formschema[s]);
        }
    }
    if (requireds.length > 0) {
        return { errors: requireds };
    }
    return { ok: true };
}
exports.validate = validate;
