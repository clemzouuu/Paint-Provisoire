// Selectionne le contenu de la balise dessin (formes svg)
// Permet la sauvegarde des svg lorsqu'un bouton est enclenché

let form_data = document.getElementById('form_data')
let form_1 = document.getElementById('form_1')

let sauvegarder = document.getElementById('exporter')
  form_1.addEventListener("submit", (e) => {
    e.preventDefault();
  let cc = document.getElementById('dessin')
  form_data.value = cc.outerHTML
  form_1.submit()

});
    

// Création d'un cercle 
function cercle() {
    let cercle = document.getElementById('cercle')
    cercle.addEventListener("click", () => {

      // Création du SVG (conteneur)
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "200") 
        svg.setAttribute("height", "200")

        // Initialisation des propriétés d'une variable (servant de forme) qui sera contenue dans le SVG
        var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("height", "50");
        c.setAttribute("width", "50");
        c.cx.baseVal.value = 50;
        c.cy.baseVal.value = 50;
        c.r.baseVal.value = 45;
        c.style.fill = "white";
        c.style.stroke = "black";
        c.dataset.scale = 1;
        
        // Pour afficher la forme : Le svg et la zone de texte héritent des propriétés de leur contenu 
        svg.appendChild(c);
        document.querySelector("#dessin").appendChild(svg);

        // Au clique du bouton, la forme créé prendra des contours rouges       
        let contour = document.getElementById('forme_couleur_contours')
        contour.addEventListener("click", () => {
            c.style.stroke = "red"
        })

        // Au clique du bouton, la forme créé prendra un fond rouge    
        let couleur = document.getElementById('forme_couleur_interieur')
        couleur.addEventListener("click", () => {
            c.style.fill = "red"
        })
        
        // Fonction agrandissant la taille de la forme, soumis à une limite. 
        // Agrandissement en fonction d'une échélle prédéfinie dans l'initialisation
        const sizeUp = () => {
            const sizeUp = document.querySelector('.sizeUp')
            sizeUp.addEventListener('click', () => {

                let scale = parseFloat(c.dataset.scale);
                if (scale < 2) { 
                scale += 0.1
                c.style.transform = 'scale(' + scale + ')'
                c.dataset.scale = scale
                 }
            })
        }
        sizeUp()

        // Fonction diminuant la taille de la forme
        const sizeDown = () => {
            const sizeDown = document.querySelector('.sizeDown')
            sizeDown.addEventListener('click', () => {

                let scale = parseFloat(c.dataset.scale);
                scale -= 0.1
                c.style.transform = 'scale(' + scale + ')'
                c.dataset.scale = scale
            })
        }
        sizeDown()

        svg.style.position = 'absolute'
        svg.style.transition = 'transform 0.5s'
    
    // Permet le déplacement du cercle 
    const movingObject = () => {
        let draggable
        objectSelected = false

        // Clique = carré bleu de selection autour de la forme 
        svg.addEventListener('mousedown', () => {
          draggable = svg
          draggable.style.transition = 'transform 0.5s'
          draggable.style.outline = '1px solid blue'
          objectSelected = true
    
          if (objectSelected == true) {
            dessin.addEventListener('mousemove', (e) => {
              let x = e.pageX
              let y = e.pageY
              draggable.style.left = x + 'px'
              draggable.style.top = y + 'px'
            })
          }
        })
        dessin.addEventListener('mouseup', (e) => {
          objectSelected = false
          if (objectSelected == false) {
            draggable.style.outline = 'none'
            draggable = null
          }
        })
      }
      movingObject()
    })
};
cercle();

// Fonction identiques au cercle 
function rectangle() {
    let rectangle = document.getElementById('rectangle')
    rectangle.addEventListener("click", () => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");  
        svg.setAttribute("viewBox", "0 0 200 200")
        svg.setAttribute("width", "300")
        svg.setAttribute("height", "300")
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")  
        rect.setAttribute("y", "0");  
        rect.setAttribute("x", "0");
        rect.setAttribute("height", "100");
        rect.setAttribute("width", "150");
        rect.style.fill = "white";
        rect.style.stroke = "black";
        rect.dataset.scale = 1;
        
        svg.appendChild(rect);  
        document.querySelector("#dessin").appendChild(svg);

        let contour = document.getElementById('forme_couleur_contours')
        contour.addEventListener("click", () => {
            rect.style.stroke = "red"
        })

        let couleur = document.getElementById('forme_couleur_interieur')
        couleur.addEventListener("click", () => {
            rect.style.fill = "red"
        })

        const sizeUp = () => {
            const sizeUp = document.querySelector('.sizeUp')
            sizeUp.addEventListener('click', () => {
                let scale = parseFloat(rect.dataset.scale);
                if (scale < 1.3) { 
                scale += 0.1
                rect.style.transform = 'scale(' + scale + ')'
                rect.dataset.scale = scale }
            })
        }
        sizeUp()

        const sizeDown = () => {
            const sizeDown = document.querySelector('.sizeDown')
            sizeDown.addEventListener('click', () => {

                let scale = parseFloat(rect.dataset.scale);
                scale -= 0.1
                rect.style.transform = 'scale(' + scale + ')'
                rect.dataset.scale = scale
            })
        }
        sizeDown()

        svg.style.position = 'absolute'
        svg.style.transition = 'transform 0.5s'

    const movingObject = () => {
        let draggable
        objectSelected = false
        svg.addEventListener('mousedown', () => {
          draggable = svg
          draggable.style.transition = 'transform 0.5s'
    
          draggable.style.outline = '1px solid blue'
          objectSelected = true
    
          if (objectSelected == true) {
            dessin.addEventListener('mousemove', (e) => {
              let x = e.pageX
              let y = e.pageY
              draggable.style.left = x + 'px'
              draggable.style.top = y + 'px'
            })
          }
        })
        dessin.addEventListener('mouseup', (e) => {
          objectSelected = false
          if (objectSelected == false) {
            draggable.style.outline = 'none'
            draggable = null
          }
        })
      }
      movingObject()
    })
};
rectangle();

// Fonction identiques au cercle 
function triangle() {
    let triangle = document.getElementById('triangle')
    triangle.addEventListener("click", () => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");  
        svg.setAttribute("viewBox", "0 0 500 500")
        svg.setAttribute("width", "200")
        svg.setAttribute("height", "200")
        const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon")  
        triangle.setAttribute("y", "0");  
        triangle.setAttribute("x", "0");
        triangle.setAttribute("points", "170,50 50,300 300,300")
        triangle.style.fill = "white";
        triangle.style.stroke = "black";
        triangle.dataset.scale = 1;
 
        svg.appendChild(triangle);  
        document.querySelector("#dessin").appendChild(svg);

        let contour = document.getElementById('forme_couleur_contours')
        contour.addEventListener("click", () => {
            triangle.style.stroke = "red"
        })

        let couleur = document.getElementById('forme_couleur_interieur')
        couleur.addEventListener("click", () => {
            triangle.style.fill = "red"
        })

        const sizeUp = () => {
            const sizeUp = document.querySelector('.sizeUp')
            sizeUp.addEventListener('click', () => {
                let scale = parseFloat(triangle.dataset.scale);
                if (scale < 1.6) { 
                scale += 0.1
                triangle.style.transform = 'scale(' + scale + ')'
                triangle.dataset.scale = scale }

            })
        }
        sizeUp()

        const sizeDown = () => {
            const sizeDown = document.querySelector('.sizeDown')
            sizeDown.addEventListener('click', () => {

                let scale = parseFloat(triangle.dataset.scale);
                scale -= 0.1
                triangle.style.transform = 'scale(' + scale + ')'
                triangle.dataset.scale = scale
            })
        }
        sizeDown()
        svg.style.position = 'absolute'
        svg.style.transition = 'transform 0.5s'

    const movingObject = () => {
        let draggable
        objectSelected = false
        svg.addEventListener('mousedown', () => {
          draggable = svg
          draggable.style.transition = 'transform 0.5s'
    
          draggable.style.outline = '1px solid blue'
          objectSelected = true
    
          if (objectSelected == true) {
            dessin.addEventListener('mousemove', (e) => {
              let x = e.pageX
              let y = e.pageY
              draggable.style.left = x + 'px'
              draggable.style.top = y + 'px'
            })
          }
        })
        dessin.addEventListener('mouseup', (e) => {
          objectSelected = false
          if (objectSelected == false) {
            draggable.style.outline = 'none'
            draggable = null
          }
        })
      }
      movingObject()
    })
 
};

triangle();

// Création de texte
function texte() {
    let texte = document.getElementById('texte')
    texte.addEventListener("click", () => {
        let ecrire = prompt("Entrez le texte")
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 50 50")
        svg.setAttribute("width", "150")
        svg.setAttribute("height", "50")
        const texte = document.createElementNS("http://www.w3.org/2000/svg", "text")
        texte.setAttribute("y", "25");
        texte.setAttribute("x", "0");
        texte.setAttribute("width", "30");
        texte.setAttribute("height", "30");
        texte.setAttribute("Font-family", 'Arial');
        texte.append(ecrire);
        texte.dataset.scale = 1;
        svg.appendChild(texte);
        document.querySelector("#dessin").appendChild(svg);
      
    // Change la couleur du texte au clique d'une option
    let couleur = document.getElementById('lettre_couleur')
    couleur.addEventListener("click", () => {
        texte.style.fill = "red";
      })
    // Surligne le texte au clique d'une option
    let surligner = document.getElementById('surligner')
    surligner.addEventListener("click", () => {
        svg.style.backgroundColor = "yellow";  
    })


    const sizeUp = () => {
      const sizeUp = document.querySelector('.sizeUp')
      sizeUp.addEventListener('click', () => {
          let scale = parseFloat(texte.dataset.scale);
          if (scale < 1.3) { 
          scale += 0.1
          texte.style.transform = 'scale(' + scale + ')'
          texte.dataset.scale = scale }
      })
  }
  sizeUp()

    const sizeDown = () => {
        const sizeDown = document.querySelector('.sizeDown')
        sizeDown.addEventListener('click', () => {

            let scale = parseFloat(texte.dataset.scale);
            scale -= 0.1
            texte.style.transform = 'scale(' + scale + ')'
            texte.dataset.scale = scale
        })
    }
    sizeDown()

    // Permet le déplacement du texte

    svg.style.position = 'absolute'
    svg.style.transition = 'transform 0.5s'

const movingObject = () => {
    let draggable
    objectSelected = false
    svg.addEventListener('mousedown', () => {
      draggable = svg
      draggable.style.transition = 'transform 0.5s'

      draggable.style.outline = '1px solid blue'
      objectSelected = true

      if (objectSelected == true) {
        dessin.addEventListener('mousemove', (e) => {
          let x = e.pageX
          let y = e.pageY
          draggable.style.left = x + 'px'
          draggable.style.top = y + 'px'
        })
      }
    })
    dessin.addEventListener('mouseup', (e) => {
      objectSelected = false
      if (objectSelected == false) {
        draggable.style.outline = 'none'
        draggable = null
      }
    })

  }
  movingObject()
  })

};
texte();
