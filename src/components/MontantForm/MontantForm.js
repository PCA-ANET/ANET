/* eslint-disable */
/*@Ayoub : fix the issues related to jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { t } from '../../i18n';

const validationSchema = Yup.object().shape({
  montant: Yup.number()
    .required("must enter Amount"),
  libelle: Yup.string()
    .required("must enter a libelle"),
});

const MontantForm = (props) => {

  return (
    <div className="panel-body">
      <div className="wizard-progress_content">
        <div className="wizard-progress_step step-content active">
          <div className="row mx-auto">
            <div className="col-sm-12">

              <Formik

                initialValues={{ montant: "", libelle: "", ajoutaMesFavo: false, libelleFavo: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {

                  setSubmitting(true);



                }}
              >
                {({

                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => {


                  return (


                    <form className="form-horizontal group-border-dashed" onSubmit={handleSubmit} style={{ borderRadius: '0px' }}>
                      <div className="form-group align-items-center justify-content-center">
                        <label className="col-sm-12 col-md-3 col-lg-2 control-label">{t("Components:Montant")}</label>
                        <div className="col-sm-12 col-md-7 col-lg-3">
                          <input
                            className="form-control"
                            name="montant"
                            type="number"
                            onChange={(e) => {
                              handleChange(e);
                              let montant = e.target.value;
                              props.amount(montant)
                            }}
                            onBlur={handleBlur}
                            value={values.montant}



                          />



                        </div>
                      </div>
                      <div className="form-group align-items-center justify-content-center">
                        <label className="col-sm-12 col-md-3 col-lg-2 control-label">{t("Components:LIBELLÉ")}</label>
                        <div className="col-sm-12 col-md-7 col-lg-3">
                          <input
                            className="form-control"
                            name="libelle"
                            type="text"
                            placeholder=""
                            onChange={(e) => {
                              handleChange(e);
                              let libelle = e.target.value;
                              props.lib(libelle)
                            }}
                            onBlur={handleBlur}
                            value={values.libelle}
                          />
                        </div>
                      </div>
                      <div className="form-group align-items-center " >
                        <div className="col-sm-12 col-md-5 col-lg-5 text-right sm-text-left">
                          <label >{t("Components:AJOUTERF")}</label>
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-4">
                          <div className="check-field_action check-inline">
                            <div className="bcp-checkbox">

                              <input
                                name="ajoutaMesFavo"
                                id="remember"
                                type="checkbox"
                                onChange={(e) => {
                                  handleChange(e);
                                  props.favo(e.target.checked)
                                }}
                                onBlur={handleBlur}
                                value={values.ajoutaMesFavo}
                                checked={values.ajoutaMesFavo}
                              />
                              <label htmlFor="remember"></label>
                            </div>

                            <div className="d-inline-block check_favori col-sm-12">
                              <input
                                className="form-control"
                                type="text"
                                name="libelleFavo"
                                placeholder={t("Components:Libellédufavori")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.libelleFavo}

                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>

                  )
                }
                }

              </Formik>


            </div>
          </div>
        </div>
      </div>
    </div>








  );
}

export default MontantForm;
