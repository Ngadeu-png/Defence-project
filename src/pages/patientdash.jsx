import React from "react";
import PatientInfoCard from "./patient/appointment";
import BookAppointmentForm from "./patient/appointment";
import ConsultationJoin from "./patient/consultation";
import HealthRecords from "./patient/health record";


const PatientDashboard = () => {
  return (
    <div className="relative pt-15">
      <BookAppointmentForm />
      <ConsultationJoin />
      <HealthRecords />
      
    </div>
  );
};

export default PatientDashboard;
