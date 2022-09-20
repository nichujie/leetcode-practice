class Foo {
    private AtomicBoolean firstReady;
    private AtomicBoolean secondReady;

    public Foo() {
        this.firstReady = new AtomicBoolean(false);
        this.secondReady = new AtomicBoolean(false);
    }

    public void first(Runnable printFirst) throws InterruptedException {
        
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        firstReady.set(true);
    }

    public void second(Runnable printSecond) throws InterruptedException {
        while (!firstReady.get()) {}
        
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        secondReady.set(true);
    }

    public void third(Runnable printThird) throws InterruptedException {
        while (!secondReady.get()) {}
        
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
    }
}