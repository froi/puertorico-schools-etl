class ElementrySchoolEnrollment {
  constructor(data) {
    this.gradeInfant = data.hasOwnProperty('grado_infant') ? data.grado_infant : undefined
    this.gradeToddler = data.hasOwnProperty('grado_toddler') ? data.grado_toddler : undefined
    this.gradePK = data.hasOwnProperty('grado_pk') ? data.grado_pk : undefined
    this.gradePKE = data.hasOwnProperty('grado_pke') ? data.grado_pke : undefined
    this.gradePKM = data.hasOwnProperty('grado_pkm') ? data.grado_pkm : undefined
    this.gradeK = data.hasOwnProperty('grado_k') ? data.grado_k : undefined
    this.grade1 = data.hasOwnProperty('grado_1') ? data.grado_1 : undefined
    this.grade2 = data.hasOwnProperty('grado_2') ? data.grado_2 : undefined
    this.grade3 = data.hasOwnProperty('grado_3') ? data.grado_3 : undefined
    this.grade4 = data.hasOwnProperty('grado_4') ? data.grado_4 : undefined
    this.grade5 = data.hasOwnProperty('grado_5') ? data.grado_5 : undefined
    this.grade6 = data.hasOwnProperty('grado_6') ? data.grado_6 : undefined
    this.totalElementryNoGrade = data.hasOwnProperty('grado_sge') ? data.grado_sge : undefined
  }
}
class MiddleSchoolEnrollment {
  constructor(data) {
    this.grade7 = data.hasOwnProperty('grado_7') ? data.grado_7 : undefined
    this.grade8 = data.hasOwnProperty('grado_8') ? data.grado_8 : undefined
    this.grade9 = data.hasOwnProperty('grado_9') ? data.grado_9 : undefined
    this.totalMiddleNoGrade = data.hasOwnProperty('grado_sgi') ? data.grado_sgi : undefined
  }
}
class HighSchoolEnrollment {
  constructor(data) {
    this.grade10 = data.hasOwnProperty('grado_10') ? data.grado_10 : undefined
    this.grade11 = data.hasOwnProperty('grado_11') ? data.grado_11 : undefined
    this.grade12 = data.hasOwnProperty('grado_12') ? data.grado_12 : undefined
    this.totalHighNoGrade = data.hasOwnProperty('grado_sgs') ? data.grado_sgs : undefined
  }
}
function getSchoolEnrollmentType(item) {
  if(item.nivel_original.toLowerCase() === 'elementar') {
    return new ElementrySchoolEnrollment(item)
  }

  if(item.nivel_original.toLowerCase() === 'intermedio') {
    return new MiddleSchoolEnrollment(item)
  }

  return new ElementrySchoolEnrollment(item)
}

class StandardTestScores {
  constructor(data){
    this.percentAdvancedSpanish = data.hasOwnProperty('espa_ol_avanzado') ?
      data.espa_ol_avanzado : undefined
    this.percentBasicSpanish = data.hasOwnProperty('espa_ol_b_sico') ?
      data.espa_ol_b_sico : undefined
    this.percentPreBasicSpanish = data.hasOwnProperty('espa_ol_pre_b_sico') ?
      data.espa_ol_pre_b_sico : undefined
    this.percentProficientSpanish = data.hasOwnProperty('espa_ol_proficiente') ?
      data.espa_ol_proficiente : undefined
    this.percentAdvancedProficiancySpanish = data.hasOwnProperty('espa_ol_proficiente_avanzado') ?
      data.espa_ol_proficiente_avanzado : undefined
    this.percentAdvancedEnglish = data.hasOwnProperty('ingl_s_avanzado') ?
      data.ingl_s_avanzado : undefined
    this.percentBasicEnglish = data.hasOwnProperty('ingl_s_b_sico') ?
      data.ingl_s_b_sico : undefined
    this.percentPreBasicEnglish = data.hasOwnProperty('ingl_s_pre_b_sico') ?
      data.ingl_s_pre_b_sico : undefined
    this.percentProficientEnglish = data.hasOwnProperty('ingl_s_proficiente') ?
      data.ingl_s_proficiente : undefined
    this.percentAdvancedProficiancyEnglish = data.hasOwnProperty('ingl_s_proficiente_avanzado') ?
      data.ingl_s_proficiente_avanzado : undefined
    this.percentAdvancedMath = data.hasOwnProperty('matem_ticas_avanzado') ?
      data.matem_ticas_avanzado : undefined
    this.percentBasicMath = data.hasOwnProperty('matem_ticas_b_sico') ?
      data.matem_ticas_b_sico : undefined
    this.percentPreBasicMath = data.hasOwnProperty('matem_ticas_pre_b_sico') ?
      data.matem_ticas_pre_b_sico : undefined
    this.percentProficientMath = data.hasOwnProperty('matem_ticas_proficiente') ?
      data.matem_ticas_proficiente : undefined
    this.percentAdvancedProficiancyMath = data.hasOwnProperty('matem_ticas_proficiente_avanzado') ?
      data.matem_ticas_proficiente_avanzado : undefined
  }
}
class Geolocation {
  constructor(data) {
    this.type = data.hasOwnProperty('type') ? data.type.toLowerCase() : undefined
    this.coordinates = data.hasOwnProperty('coordinates') ? data.coordinates : undefined
  }
}
class School {
  constructor(data, geolocation, standardTestScores, enrollment) {
    this.schoolCode = data.hasOwnProperty('codigo') ? data.codigo : undefined
    this.schoolName = data.hasOwnProperty('escuela') ? data.escuela.toLowerCase() : undefined
    this.address = data.hasOwnProperty('direccio_fisica') ? data.direccio_fisica.toLowerCase() : undefined
    this.state = data.hasOwnProperty('direccio_estado') ? data.direccio_estado.toLowerCase() : undefined
    this.city = data.hasOwnProperty('direccion_municipio') ? data.direccion_municipio.toLowerCase() : undefined
    this.zipcode = data.hasOwnProperty('direccion_zipcode') ? data.direccion_zipcode : undefined
    this.schoolPrinciple = data.hasOwnProperty('director') ? data.director.toLowerCase() : undefined
    this.schoolDistrict = data.hasOwnProperty('distrito') ? data.distrito.toLowerCase() : undefined
    this.currentState = data.hasOwnProperty('estatus_actual') && data.estatus_actual ?
      data.estatus_actual.toLowerCase() : undefined
    this.schoolType = data.hasOwnProperty('nivel_original') ? data.nivel_original.toLowerCase() : undefined
    this.schoolCity = data.hasOwnProperty('municipio_escolar') ? data.municipio_escolar.toLowerCase() : undefined
    this.schoolRegion = data.hasOwnProperty('region') ? data.region.toLowerCase() : undefined
    this.originalGrades = data.hasOwnProperty('grados_original') && data.grados_original ?
      data.grados_original.toLowerCase().split(',') : []
    this.currentGrades = data.hasOwnProperty('grados_posterior') && data.grados_posterior ?
      data.grados_posterior.toLowerCase().split(',') : []
    this.totalEnrollment = data.hasOwnProperty('matricula_total') ? parseInt(data.matricula_total) : 0
    this.percentUnderProvertyLine = data.hasOwnProperty('bajo_nivel_pobreza') ? data.bajo_nivel_pobreza : 0
    this.enrollment = enrollment || {}
    this.telephone = data.hasOwnProperty('telefono') ? data.telefono : undefined
    this.fax = data.hasOwnProperty('fax') ? data.fax : undefined
    this.zoneType = data.hasOwnProperty('zona') ? data.zona.toLowerCase() : undefined
    this.geolocation = geolocation || {}
    this.standardTestScores = standardTestScores || {}
  }  
}

module.exports = {
  School,
  getSchoolEnrollmentType,
  Geolocation,
  StandardTestScores
}
