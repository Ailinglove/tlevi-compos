<script>
  import { createEventDispatcher } from "svelte";
  export let title = '确认XXX';
  export let content = ''
  export let okText = '确认'
  export let cancelText = '取消'

  const dispatch = createEventDispatcher();
  const onCancel = ()=>{
    dispatch('onCancel')
  }
  const onOk = ()=>{
    dispatch('onOk')
  }

</script>
<div class="tlevi-confirm-wrapper">
  <div class="tlevi-content-wrapper">
    <div class="tlevi-content">
      <div class="tlevi-content-title">{title}</div>
      <div class="tlevi-content-box">
        {#if content}
          <div class="tlevi-content-content">{content}</div>
        {:else}
          <slot></slot>
        {/if}

      </div>
      <div class="tlevi-content-btn-wrapper">
        {#if okText}
        <div class="tlevi-content-btn-ok" 
          on:click={onOk}>
          {okText}
        </div>
        {/if}
        {#if cancelText}
        <div class="tlevi-content-btn-cancel" on:click={onCancel}>
          {cancelText}
        </div>
        {/if}

      </div>

    </div>

  </div>
</div>
<style lang="less">

.tlevi-confirm-wrapper{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  .tlevi-content-wrapper{
    width: 300px;
    background-color: white;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    border-radius: 12px;
    .tlevi-content{
      text-align: center;
      padding: 20px 10px;
      &-title{
        font-weight: 600;
        font-size: 12px;
        text-align: center;

      }
      &-box{
        padding: 20px 0;
        .tlevi-content-content{
          font-size: 11px;
          text-align: center;

        }
      }
      &-btn-wrapper{
        display: flex;
        justify-content: space-around;
        align-items: center;

        .tlevi-content-btn-ok,
        .tlevi-content-btn-cancel{
          border-radius: 20px;
          width: 120px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
        .tlevi-content-btn-ok{
          background-color: orange;
          color: white;
        }
        .tlevi-content-btn-cancel{
          background-color: whitesmoke;
          color: grey;
        }
      }

    }

  }
  
}
</style>
