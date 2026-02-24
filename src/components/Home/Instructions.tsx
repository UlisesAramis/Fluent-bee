const Instructions = () => {
  return (
    <section className="bg-white bg-honey-comb-cell bg-cover bg-center  w-full">
      <div className="flex flex-col items-center gap-y-10 pt-20">
        <div className="aspect-video w-5/6 mx-auto rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/1YuKJ8fA0n8"
            title="English Conversation Practice"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="text-black w-5/6 mx-auto text-center flex flex-col gap-y-5">
          <h1 className="text-3xl uppercase font-bold">Instructions</h1>
          <p>
            To start a conversation on Fluentbee.ai, please grant the necessary
            microphone permissions to your browser. After permissions are
            secured, simply press the 'Talk' button, start to talk, and press
            again to send your message, then patiently await the response from
            your AI tutor.
          </p>

          <p className="font-bold">
            Remember, only the time you spend speaking is deducted from your
            available minutes; the AI tutor’s responses do not impact your time
            balance. So, a conversation where you speak for two minutes could
            actually span five minutes of interaction, maximizing the value you
            receive from each session.
          </p>

          <p>
            For those who prefer visual aids, you have the option to unhide and
            view the conversation text, allowing you to see exactly what is
            being asked or stated.
          </p>

          <p className="font-bold text-neon-sky">
            Now, why wait? Dive in, try it now, and embark on your journey to
            sharpen your English conversational skills with Fluentbee.ai!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
