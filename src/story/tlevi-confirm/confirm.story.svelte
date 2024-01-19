<script>
  import Popup from "../../components/confirm/Confirm.svelte";
  import {logEvent} from 'histoire/client'
  export let Hst
  let title='删除';
  let content = '确认删除吗？';
  let okText = '确认';
  let cancelText = '取消';
  let show = false;

  const onCancel = (e)=>{
    logEvent('onClickBtn', e);
    show = false;
  }


  const onOk = (e)=>{
    logEvent('onOk', e)
    show = false;
  }

  const changeConfirmStatus = ()=>{
    show = !show;
  }
</script>

<Hst.Story
  title="二次确认弹窗"
>
  <Hst.Variant title="有content">
    <button on:click={changeConfirmStatus}>点击展示弹窗</button>
    {#if show}
    <Popup {title} {content} {okText} {cancelText} on:onOk={onOk} on:onCancel={onCancel}>
    </Popup>
    {/if}

    <svelte:fragment slot="controls">
      <Hst.Text bind:value={title} title="title" />
      <Hst.Text bind:value={content} title="content" />
      <Hst.Text bind:value={okText} title="okText" />
      <Hst.Text bind:value={cancelText} title="cancelText" />
    </svelte:fragment>
  </Hst.Variant>
  <Hst.Variant title="自定义content">
    <button on:click={changeConfirmStatus}>点击展示弹窗</button>
    {#if show}
    <Popup {title} {okText} {cancelText} on:onOk={onOk} on:onCancel={onCancel}>
      <p>这是用户自定义的内容！！</p>
      <p>这是用户自定义的内容！！</p>
      <p>这是用户自定义的内容！！</p>
      <p>这是用户自定义的内容！！</p>
      <p>这是用户自定义的内容！！</p>
      <p>这是用户自定义的内容！！</p>
      <p>这是用户自定义的内容！！</p>
    </Popup>
    {/if}

    <svelte:fragment slot="controls">
      <Hst.Text bind:value={title} title="title" />
      <Hst.Text bind:value={content} title="content" />
      <Hst.Text bind:value={okText} title="okText" />
      <Hst.Text bind:value={cancelText} title="cancelText" />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
