const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    water: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    food: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    journal: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    takePills: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07']
}

nlwSetup.setData(data)
nlwSetup.load()