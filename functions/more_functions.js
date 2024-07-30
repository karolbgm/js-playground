function displayMailingLabel(name, address, city, state, zip) {
  console.log(`Send to: ${name}, ${address}, ${city}, ${state}, ${zip}`);
}

displayMailingLabel("KM", "4211 Oxford Este", "Cincinnati", "OH", "34567");

function displayReceipt(totalDue, amountPaid) {
  if (totalDue > amountPaid) {
    console.log(`To complete payment: ${totalDue - amountPaid}`);
  } else {
    console.log(`Total Due: ${totalDue}, Amount Paid: ${amountPaid}. Change Due ${Math.abs(totalDue - amountPaid)}`);
  }
}

displayReceipt(100, 150);
displayReceipt(150, 90);

