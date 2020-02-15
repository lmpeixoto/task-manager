require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('5e3ee716c73a691020eafe19').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e3f00c622bc1c3d6858d65c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})