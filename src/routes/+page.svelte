<script>
  import { onMount } from 'svelte';

  let myvad;

  onMount(async () => {
    const { MicVAD } = await import("@ricky0123/vad-web");

    myvad = await MicVAD.new({
        onSpeechStart: () => {
        console.log("Speech start detected")
        },
        onSpeechEnd: (audio) => {
            console.log("stopped");
            // do something with `audio` (Float32Array of audio samples at sample rate 16000)...
        },
    });

    myvad.start();
  });
</script>