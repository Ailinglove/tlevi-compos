<script>
  import MyButton from "../../components/button/MyButton.svelte";
  import {logEvent} from 'histoire/client'
  export let Hst
  let btnContext='这是一个按钮';
  let disabled = false;

  const onClickBtn = (data)=>{
    console.log(data, data.detail)
    logEvent('onClickBtn', data)
    alert(`子组件传过来的参数啊${data.detail.num}`)
  }
</script>

<Hst.Story
  title="测试啊"
  layout={{type: 'single', iframe: true}}
>
  <Hst.Variant>
    <MyButton {btnContext} on:onClickBtn = {onClickBtn}>
    </MyButton>

    <!-- <svelte:fragment slot="controls">
      Content: <input type="text" bind:value={btnContext} />
      Disabled: <input type="checkbox" bind:checked={disabled} />
    </svelte:fragment> -->

    <svelte:fragment slot="controls">
      <Hst.Text bind:value={btnContext} title="Content" />
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
