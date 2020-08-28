export default function formValidation() {
    const d = document;

    const $form = d.querySelector('#formulario');
    const $inputs = d.querySelectorAll('#formulario [required]')
    const $btnSubmit = d.querySelector('.btn')

    console.log($inputs)

    d.addEventListener('keyup', (e)=>{
        e.preventDefault()

        if(e.target.matches('#formulario [required]')){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern

            if(pattern && $input.value !== ''){
                let regex = new RegExp(pattern)
                if(!regex.exec($input.value)) {
                    $input.parentElement.querySelector('.alert').style.display = 'block'
                    $input.classList.add('error')

                }else {
                    $input.parentElement.querySelector('.alert').style.display = 'none'
                    $input.classList.remove('error')
                    $input.classList.add('success')
                }

            }else {
                $input.parentElement.querySelector('.alert').style.display = 'block'
                $input.classList.add('error')
            }

        }
    })

}
