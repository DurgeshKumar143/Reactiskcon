const validemail =/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

const validadd = /^([A-Za-z0-9\s\.\&]+\s+(Place|Terrace|Highway|Road|St?reet?|Road|Lane|Suite|Avenue|Parkway|Court|Boulevard|Rd|Island|Drive|Pike|Floor|St|Falls|Park|Spring|Ave|Drive|Dr|\d+)[.\s]?,?\s?((N|S)?(E|W)?),?[\s0-9\#]*,)(\s[A-Za-z].*,)(\s[A-Za-z\s\.]+)([0-9]+\-?.*)$/

const validname=/^[a-z ,.'-]+$/i

const validrating =/(")(?![^<>]*>)/

const validpass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const validamount=/^\d+\.\d{2}$/

export{validemail,validadd,validname,validrating,validpass,validamount};

