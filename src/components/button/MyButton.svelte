<script>
  import {createEventDispatcher} from 'svelte';
  export let btnContext;

  const dispatch = createEventDispatcher();
  const clickBtn = ()=>{
    console.log('点击按钮啊');
    dispatch('onClickBtn', {num: 2})
  }
</script>
<div>
  <button on:click={clickBtn}>
    {btnContext}
  </button>
</div>


