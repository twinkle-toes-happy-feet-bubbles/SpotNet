const tableUsers = document.querySelector('.table-products');

console.log("Reading");

/*

// Create element and render products

const renderUser = doc => {

  const tr = `

    <tr data-id='${doc.id}'>

    <hr>

      <td>${doc.data().ProductName}</td>

      <td>${doc.data().BrandName}</td>

      <td>${doc.data().Price}</td>

      <td><img style="width="69px; height="69px;"src="${doc.data().Imagesrc}"></img></td>

      <td>

        <button class="btn btn-edit">Edit</button>

        <button class="btn btn-delete">Delete</button>

      </td>

    </tr>

    <hr>

  `;

  tableUsers.insertAdjacentHTML('beforeend', tr);

}

*/

/*

import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "/products");

const docSnap = await getDoc(docRef);

if (docSnap.exists()) {

  console.log("Document data:", docSnap.data());

} else {

  // doc.data() will be undefined in this case

  console.log("No such document!");

}

*/

/* Workin ¥¥¥¥¥

var docRef = db.collection("products").select();

docRef.get().then((doc) => {

  if (doc.exists) {

    console.log("Document data:", doc.data());

  } else {

    // doc.data() will be undefined in this case

    console.log("No such document!");

  }

}).catch((error) => {

  console.log("Error getting document:", error);

});

*/

db.collection("products")

  .get()

  .then((querySnapshot) => {

    querySnapshot.forEach((doc) => {

      // doc.data() is never undefined for query doc snapshots

      console.log(doc.id, " => ", doc.data());

      

// Create element and render products

const renderUser = doc => {

  const tr = `

    <tr data-id='${doc.id}'>

    <hr>

      <td>${doc.data().ProductName}</td>

      <td>${doc.data().BrandName}</td>

      <td>${doc.data().Price}</td>

      <td><img style="width="69px; height="69px;"src="${doc.data().Imagesrc}"></img></td>

      <td>

        

        <button class="btn btn-delete">Delete</button>

      </td>

    </tr>

    <hr>

  `;

  tableUsers.insertAdjacentHTML('beforeend', tr);

}

    });

  })

  .catch((error) => {

    console.log("Error getting documents: ", error);

  });
