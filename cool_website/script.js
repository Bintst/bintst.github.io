const contact = document.getElementById(`pop`)
const coTR = document.getElementById(`trA`)
const consw = document.getElementById(`ConT`)
var cls = document.getElementById(`btn-nav`)

consw.addEventListener("click", function pop_out() {
    if (document.getElementById(`pop`).style.visibility = `hidden`) {
        document.getElementById(`pop`).style.visibility = `visible`
        if (document.getElementById(`pop`).style.visibility = `visible`) {
            document.getElementById(`trA`).style.visibility = `visible`
        }
    }
  });


cls.addEventListener("click", function pop_out() {
  if (document.getElementById(`pop`).style.visibility = `visible`) {
      document.getElementById(`pop`).style.visibility = `hidden`
      if (document.getElementById(`pop`).style.visibility = `hidden`) {
          document.getElementById(`trA`).style.visibility = `hidden`
      }
  }
});