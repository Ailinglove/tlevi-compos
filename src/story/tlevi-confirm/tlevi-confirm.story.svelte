<script>
  import Popup from "../../components/confirm/Confirm.svelte";
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
  title="二次确认弹窗"
>
  <Hst.Variant>
    <Popup>
      <p>这是中间的内容啊啊啊啊啊啊啊</p>
      <p>这是中间的内容啊啊啊啊啊啊啊</p>
      <p>这是中间的内容啊啊啊啊啊啊啊</p>
      <p>这是中间的内容啊啊啊啊啊啊啊</p>
      <p>这是中间的内容啊啊啊啊啊啊啊</p>
      <p>这是中间的内容啊啊啊啊啊啊啊</p>
      <p>这是中间的内容啊啊啊啊啊啊啊</p>

    </Popup>

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
