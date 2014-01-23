// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12546 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12546 = (function (f,fn_handler,meta12547){
this.f = f;
this.fn_handler = fn_handler;
this.meta12547 = meta12547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12546.cljs$lang$type = true;
cljs.core.async.t12546.cljs$lang$ctorStr = "cljs.core.async/t12546";
cljs.core.async.t12546.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12546");
});
cljs.core.async.t12546.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12548){var self__ = this;
var _12548__$1 = this;return self__.meta12547;
});
cljs.core.async.t12546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12548,meta12547__$1){var self__ = this;
var _12548__$1 = this;return (new cljs.core.async.t12546(self__.f,self__.fn_handler,meta12547__$1));
});
cljs.core.async.__GT_t12546 = (function __GT_t12546(f__$1,fn_handler__$1,meta12547){return (new cljs.core.async.t12546(f__$1,fn_handler__$1,meta12547));
});
}
return (new cljs.core.async.t12546(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12550 = buff;if(G__12550)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12550.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12550);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12551 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12551);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12551);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12552 = n;var x_12553 = 0;while(true){
if((x_12553 < n__4248__auto___12552))
{(a[x_12553] = 0);
{
var G__12554 = (x_12553 + 1);
x_12553 = G__12554;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12555 = (i + 1);
i = G__12555;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12559 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12559 = (function (flag,alt_flag,meta12560){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12560 = meta12560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12559.cljs$lang$type = true;
cljs.core.async.t12559.cljs$lang$ctorStr = "cljs.core.async/t12559";
cljs.core.async.t12559.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12559");
});
cljs.core.async.t12559.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12561){var self__ = this;
var _12561__$1 = this;return self__.meta12560;
});
cljs.core.async.t12559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12561,meta12560__$1){var self__ = this;
var _12561__$1 = this;return (new cljs.core.async.t12559(self__.flag,self__.alt_flag,meta12560__$1));
});
cljs.core.async.__GT_t12559 = (function __GT_t12559(flag__$1,alt_flag__$1,meta12560){return (new cljs.core.async.t12559(flag__$1,alt_flag__$1,meta12560));
});
}
return (new cljs.core.async.t12559(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12565 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12565 = (function (cb,flag,alt_handler,meta12566){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12566 = meta12566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12565.cljs$lang$type = true;
cljs.core.async.t12565.cljs$lang$ctorStr = "cljs.core.async/t12565";
cljs.core.async.t12565.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12565");
});
cljs.core.async.t12565.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12567){var self__ = this;
var _12567__$1 = this;return self__.meta12566;
});
cljs.core.async.t12565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12567,meta12566__$1){var self__ = this;
var _12567__$1 = this;return (new cljs.core.async.t12565(self__.cb,self__.flag,self__.alt_handler,meta12566__$1));
});
cljs.core.async.__GT_t12565 = (function __GT_t12565(cb__$1,flag__$1,alt_handler__$1,meta12566){return (new cljs.core.async.t12565(cb__$1,flag__$1,alt_handler__$1,meta12566));
});
}
return (new cljs.core.async.t12565(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12568_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12568_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12569 = (i + 1);
i = G__12569;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12570){var map__12572 = p__12570;var map__12572__$1 = ((cljs.core.seq_QMARK_.call(null,map__12572))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572):map__12572);var opts = map__12572__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12570 = null;if (arguments.length > 1) {
  p__12570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12570);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12573){
var ports = cljs.core.first(arglist__12573);
var p__12570 = cljs.core.rest(arglist__12573);
return alts_BANG___delegate(ports,p__12570);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12581 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12581 = (function (ch,f,map_LT_,meta12582){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12582 = meta12582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12581.cljs$lang$type = true;
cljs.core.async.t12581.cljs$lang$ctorStr = "cljs.core.async/t12581";
cljs.core.async.t12581.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12581");
});
cljs.core.async.t12581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12584 = (function (fn1,_,meta12582,ch,f,map_LT_,meta12585){
this.fn1 = fn1;
this._ = _;
this.meta12582 = meta12582;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12585 = meta12585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12584.cljs$lang$type = true;
cljs.core.async.t12584.cljs$lang$ctorStr = "cljs.core.async/t12584";
cljs.core.async.t12584.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12584");
});
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12574_SHARP_){return f1.call(null,(((p1__12574_SHARP_ == null))?null:self__.f.call(null,p1__12574_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12586){var self__ = this;
var _12586__$1 = this;return self__.meta12585;
});
cljs.core.async.t12584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12586,meta12585__$1){var self__ = this;
var _12586__$1 = this;return (new cljs.core.async.t12584(self__.fn1,self__._,self__.meta12582,self__.ch,self__.f,self__.map_LT_,meta12585__$1));
});
cljs.core.async.__GT_t12584 = (function __GT_t12584(fn1__$1,___$2,meta12582__$1,ch__$2,f__$2,map_LT___$2,meta12585){return (new cljs.core.async.t12584(fn1__$1,___$2,meta12582__$1,ch__$2,f__$2,map_LT___$2,meta12585));
});
}
return (new cljs.core.async.t12584(fn1,___$1,self__.meta12582,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12581.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12583){var self__ = this;
var _12583__$1 = this;return self__.meta12582;
});
cljs.core.async.t12581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12583,meta12582__$1){var self__ = this;
var _12583__$1 = this;return (new cljs.core.async.t12581(self__.ch,self__.f,self__.map_LT_,meta12582__$1));
});
cljs.core.async.__GT_t12581 = (function __GT_t12581(ch__$1,f__$1,map_LT___$1,meta12582){return (new cljs.core.async.t12581(ch__$1,f__$1,map_LT___$1,meta12582));
});
}
return (new cljs.core.async.t12581(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12590 = (function (ch,f,map_GT_,meta12591){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12591 = meta12591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12590.cljs$lang$type = true;
cljs.core.async.t12590.cljs$lang$ctorStr = "cljs.core.async/t12590";
cljs.core.async.t12590.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12590");
});
cljs.core.async.t12590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12590.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12592){var self__ = this;
var _12592__$1 = this;return self__.meta12591;
});
cljs.core.async.t12590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12592,meta12591__$1){var self__ = this;
var _12592__$1 = this;return (new cljs.core.async.t12590(self__.ch,self__.f,self__.map_GT_,meta12591__$1));
});
cljs.core.async.__GT_t12590 = (function __GT_t12590(ch__$1,f__$1,map_GT___$1,meta12591){return (new cljs.core.async.t12590(ch__$1,f__$1,map_GT___$1,meta12591));
});
}
return (new cljs.core.async.t12590(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12596 = (function (ch,p,filter_GT_,meta12597){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12597 = meta12597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12596.cljs$lang$type = true;
cljs.core.async.t12596.cljs$lang$ctorStr = "cljs.core.async/t12596";
cljs.core.async.t12596.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12596");
});
cljs.core.async.t12596.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12596.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12596.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12598){var self__ = this;
var _12598__$1 = this;return self__.meta12597;
});
cljs.core.async.t12596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12598,meta12597__$1){var self__ = this;
var _12598__$1 = this;return (new cljs.core.async.t12596(self__.ch,self__.p,self__.filter_GT_,meta12597__$1));
});
cljs.core.async.__GT_t12596 = (function __GT_t12596(ch__$1,p__$1,filter_GT___$1,meta12597){return (new cljs.core.async.t12596(ch__$1,p__$1,filter_GT___$1,meta12597));
});
}
return (new cljs.core.async.t12596(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12660){var state_val_12661 = (state_12660[1]);if((state_val_12661 === 1))
{var state_12660__$1 = state_12660;var statearr_12662_12682 = state_12660__$1;(statearr_12662_12682[2] = null);
(statearr_12662_12682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 2))
{var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12660__$1,4,ch);
} else
{if((state_val_12661 === 3))
{var inst_12658 = (state_12660[2]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12660__$1,inst_12658);
} else
{if((state_val_12661 === 4))
{var inst_12642 = (state_12660[7]);var inst_12642__$1 = (state_12660[2]);var inst_12643 = (inst_12642__$1 == null);var state_12660__$1 = (function (){var statearr_12663 = state_12660;(statearr_12663[7] = inst_12642__$1);
return statearr_12663;
})();if(cljs.core.truth_(inst_12643))
{var statearr_12664_12683 = state_12660__$1;(statearr_12664_12683[1] = 5);
} else
{var statearr_12665_12684 = state_12660__$1;(statearr_12665_12684[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 5))
{var inst_12645 = cljs.core.async.close_BANG_.call(null,out);var state_12660__$1 = state_12660;var statearr_12666_12685 = state_12660__$1;(statearr_12666_12685[2] = inst_12645);
(statearr_12666_12685[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 6))
{var inst_12642 = (state_12660[7]);var inst_12647 = p.call(null,inst_12642);var state_12660__$1 = state_12660;if(cljs.core.truth_(inst_12647))
{var statearr_12667_12686 = state_12660__$1;(statearr_12667_12686[1] = 8);
} else
{var statearr_12668_12687 = state_12660__$1;(statearr_12668_12687[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 7))
{var inst_12656 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12669_12688 = state_12660__$1;(statearr_12669_12688[2] = inst_12656);
(statearr_12669_12688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 8))
{var inst_12642 = (state_12660[7]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12660__$1,11,out,inst_12642);
} else
{if((state_val_12661 === 9))
{var state_12660__$1 = state_12660;var statearr_12670_12689 = state_12660__$1;(statearr_12670_12689[2] = null);
(statearr_12670_12689[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 10))
{var inst_12653 = (state_12660[2]);var state_12660__$1 = (function (){var statearr_12671 = state_12660;(statearr_12671[8] = inst_12653);
return statearr_12671;
})();var statearr_12672_12690 = state_12660__$1;(statearr_12672_12690[2] = null);
(statearr_12672_12690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 11))
{var inst_12650 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12673_12691 = state_12660__$1;(statearr_12673_12691[2] = inst_12650);
(statearr_12673_12691[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_12677 = [null,null,null,null,null,null,null,null,null];(statearr_12677[0] = state_machine__5507__auto__);
(statearr_12677[1] = 1);
return statearr_12677;
});
var state_machine__5507__auto____1 = (function (state_12660){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12660);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12678){if((e12678 instanceof Object))
{var ex__5510__auto__ = e12678;var statearr_12679_12692 = state_12660;(statearr_12679_12692[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12693 = state_12660;
state_12660 = G__12693;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12680 = f__5522__auto__.call(null);(statearr_12680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12681);
return statearr_12680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12845){var state_val_12846 = (state_12845[1]);if((state_val_12846 === 1))
{var state_12845__$1 = state_12845;var statearr_12847_12884 = state_12845__$1;(statearr_12847_12884[2] = null);
(statearr_12847_12884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 2))
{var state_12845__$1 = state_12845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12845__$1,4,in$);
} else
{if((state_val_12846 === 3))
{var inst_12843 = (state_12845[2]);var state_12845__$1 = state_12845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12845__$1,inst_12843);
} else
{if((state_val_12846 === 4))
{var inst_12791 = (state_12845[7]);var inst_12791__$1 = (state_12845[2]);var inst_12792 = (inst_12791__$1 == null);var state_12845__$1 = (function (){var statearr_12848 = state_12845;(statearr_12848[7] = inst_12791__$1);
return statearr_12848;
})();if(cljs.core.truth_(inst_12792))
{var statearr_12849_12885 = state_12845__$1;(statearr_12849_12885[1] = 5);
} else
{var statearr_12850_12886 = state_12845__$1;(statearr_12850_12886[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 5))
{var inst_12794 = cljs.core.async.close_BANG_.call(null,out);var state_12845__$1 = state_12845;var statearr_12851_12887 = state_12845__$1;(statearr_12851_12887[2] = inst_12794);
(statearr_12851_12887[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 6))
{var inst_12791 = (state_12845[7]);var inst_12796 = f.call(null,inst_12791);var inst_12801 = cljs.core.seq.call(null,inst_12796);var inst_12802 = inst_12801;var inst_12803 = null;var inst_12804 = 0;var inst_12805 = 0;var state_12845__$1 = (function (){var statearr_12852 = state_12845;(statearr_12852[8] = inst_12803);
(statearr_12852[9] = inst_12802);
(statearr_12852[10] = inst_12805);
(statearr_12852[11] = inst_12804);
return statearr_12852;
})();var statearr_12853_12888 = state_12845__$1;(statearr_12853_12888[2] = null);
(statearr_12853_12888[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 7))
{var inst_12841 = (state_12845[2]);var state_12845__$1 = state_12845;var statearr_12854_12889 = state_12845__$1;(statearr_12854_12889[2] = inst_12841);
(statearr_12854_12889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 8))
{var inst_12805 = (state_12845[10]);var inst_12804 = (state_12845[11]);var inst_12807 = (inst_12805 < inst_12804);var inst_12808 = inst_12807;var state_12845__$1 = state_12845;if(cljs.core.truth_(inst_12808))
{var statearr_12855_12890 = state_12845__$1;(statearr_12855_12890[1] = 10);
} else
{var statearr_12856_12891 = state_12845__$1;(statearr_12856_12891[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 9))
{var inst_12838 = (state_12845[2]);var state_12845__$1 = (function (){var statearr_12857 = state_12845;(statearr_12857[12] = inst_12838);
return statearr_12857;
})();var statearr_12858_12892 = state_12845__$1;(statearr_12858_12892[2] = null);
(statearr_12858_12892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 10))
{var inst_12803 = (state_12845[8]);var inst_12805 = (state_12845[10]);var inst_12810 = cljs.core._nth.call(null,inst_12803,inst_12805);var state_12845__$1 = state_12845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12845__$1,13,out,inst_12810);
} else
{if((state_val_12846 === 11))
{var inst_12802 = (state_12845[9]);var inst_12816 = (state_12845[13]);var inst_12816__$1 = cljs.core.seq.call(null,inst_12802);var state_12845__$1 = (function (){var statearr_12862 = state_12845;(statearr_12862[13] = inst_12816__$1);
return statearr_12862;
})();if(inst_12816__$1)
{var statearr_12863_12893 = state_12845__$1;(statearr_12863_12893[1] = 14);
} else
{var statearr_12864_12894 = state_12845__$1;(statearr_12864_12894[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 12))
{var inst_12836 = (state_12845[2]);var state_12845__$1 = state_12845;var statearr_12865_12895 = state_12845__$1;(statearr_12865_12895[2] = inst_12836);
(statearr_12865_12895[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 13))
{var inst_12803 = (state_12845[8]);var inst_12802 = (state_12845[9]);var inst_12805 = (state_12845[10]);var inst_12804 = (state_12845[11]);var inst_12812 = (state_12845[2]);var inst_12813 = (inst_12805 + 1);var tmp12859 = inst_12803;var tmp12860 = inst_12802;var tmp12861 = inst_12804;var inst_12802__$1 = tmp12860;var inst_12803__$1 = tmp12859;var inst_12804__$1 = tmp12861;var inst_12805__$1 = inst_12813;var state_12845__$1 = (function (){var statearr_12866 = state_12845;(statearr_12866[8] = inst_12803__$1);
(statearr_12866[9] = inst_12802__$1);
(statearr_12866[10] = inst_12805__$1);
(statearr_12866[11] = inst_12804__$1);
(statearr_12866[14] = inst_12812);
return statearr_12866;
})();var statearr_12867_12896 = state_12845__$1;(statearr_12867_12896[2] = null);
(statearr_12867_12896[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 14))
{var inst_12816 = (state_12845[13]);var inst_12818 = cljs.core.chunked_seq_QMARK_.call(null,inst_12816);var state_12845__$1 = state_12845;if(inst_12818)
{var statearr_12868_12897 = state_12845__$1;(statearr_12868_12897[1] = 17);
} else
{var statearr_12869_12898 = state_12845__$1;(statearr_12869_12898[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 15))
{var state_12845__$1 = state_12845;var statearr_12870_12899 = state_12845__$1;(statearr_12870_12899[2] = null);
(statearr_12870_12899[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 16))
{var inst_12834 = (state_12845[2]);var state_12845__$1 = state_12845;var statearr_12871_12900 = state_12845__$1;(statearr_12871_12900[2] = inst_12834);
(statearr_12871_12900[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 17))
{var inst_12816 = (state_12845[13]);var inst_12820 = cljs.core.chunk_first.call(null,inst_12816);var inst_12821 = cljs.core.chunk_rest.call(null,inst_12816);var inst_12822 = cljs.core.count.call(null,inst_12820);var inst_12802 = inst_12821;var inst_12803 = inst_12820;var inst_12804 = inst_12822;var inst_12805 = 0;var state_12845__$1 = (function (){var statearr_12872 = state_12845;(statearr_12872[8] = inst_12803);
(statearr_12872[9] = inst_12802);
(statearr_12872[10] = inst_12805);
(statearr_12872[11] = inst_12804);
return statearr_12872;
})();var statearr_12873_12901 = state_12845__$1;(statearr_12873_12901[2] = null);
(statearr_12873_12901[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 18))
{var inst_12816 = (state_12845[13]);var inst_12825 = cljs.core.first.call(null,inst_12816);var state_12845__$1 = state_12845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12845__$1,20,out,inst_12825);
} else
{if((state_val_12846 === 19))
{var inst_12831 = (state_12845[2]);var state_12845__$1 = state_12845;var statearr_12874_12902 = state_12845__$1;(statearr_12874_12902[2] = inst_12831);
(statearr_12874_12902[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12846 === 20))
{var inst_12816 = (state_12845[13]);var inst_12827 = (state_12845[2]);var inst_12828 = cljs.core.next.call(null,inst_12816);var inst_12802 = inst_12828;var inst_12803 = null;var inst_12804 = 0;var inst_12805 = 0;var state_12845__$1 = (function (){var statearr_12875 = state_12845;(statearr_12875[8] = inst_12803);
(statearr_12875[9] = inst_12802);
(statearr_12875[10] = inst_12805);
(statearr_12875[11] = inst_12804);
(statearr_12875[15] = inst_12827);
return statearr_12875;
})();var statearr_12876_12903 = state_12845__$1;(statearr_12876_12903[2] = null);
(statearr_12876_12903[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_12880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12880[0] = state_machine__5507__auto__);
(statearr_12880[1] = 1);
return statearr_12880;
});
var state_machine__5507__auto____1 = (function (state_12845){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12845);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12881){if((e12881 instanceof Object))
{var ex__5510__auto__ = e12881;var statearr_12882_12904 = state_12845;(statearr_12882_12904[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12905 = state_12845;
state_12845 = G__12905;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12845){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12883 = f__5522__auto__.call(null);(statearr_12883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12965){var state_val_12966 = (state_12965[1]);if((state_val_12966 === 1))
{var state_12965__$1 = state_12965;var statearr_12967_12987 = state_12965__$1;(statearr_12967_12987[2] = null);
(statearr_12967_12987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12966 === 2))
{var state_12965__$1 = state_12965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12965__$1,4,from);
} else
{if((state_val_12966 === 3))
{var inst_12963 = (state_12965[2]);var state_12965__$1 = state_12965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12965__$1,inst_12963);
} else
{if((state_val_12966 === 4))
{var inst_12948 = (state_12965[7]);var inst_12948__$1 = (state_12965[2]);var inst_12949 = (inst_12948__$1 == null);var state_12965__$1 = (function (){var statearr_12968 = state_12965;(statearr_12968[7] = inst_12948__$1);
return statearr_12968;
})();if(cljs.core.truth_(inst_12949))
{var statearr_12969_12988 = state_12965__$1;(statearr_12969_12988[1] = 5);
} else
{var statearr_12970_12989 = state_12965__$1;(statearr_12970_12989[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12966 === 5))
{var state_12965__$1 = state_12965;if(cljs.core.truth_(close_QMARK_))
{var statearr_12971_12990 = state_12965__$1;(statearr_12971_12990[1] = 8);
} else
{var statearr_12972_12991 = state_12965__$1;(statearr_12972_12991[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12966 === 6))
{var inst_12948 = (state_12965[7]);var state_12965__$1 = state_12965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12965__$1,11,to,inst_12948);
} else
{if((state_val_12966 === 7))
{var inst_12961 = (state_12965[2]);var state_12965__$1 = state_12965;var statearr_12973_12992 = state_12965__$1;(statearr_12973_12992[2] = inst_12961);
(statearr_12973_12992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12966 === 8))
{var inst_12952 = cljs.core.async.close_BANG_.call(null,to);var state_12965__$1 = state_12965;var statearr_12974_12993 = state_12965__$1;(statearr_12974_12993[2] = inst_12952);
(statearr_12974_12993[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12966 === 9))
{var state_12965__$1 = state_12965;var statearr_12975_12994 = state_12965__$1;(statearr_12975_12994[2] = null);
(statearr_12975_12994[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12966 === 10))
{var inst_12955 = (state_12965[2]);var state_12965__$1 = state_12965;var statearr_12976_12995 = state_12965__$1;(statearr_12976_12995[2] = inst_12955);
(statearr_12976_12995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12966 === 11))
{var inst_12958 = (state_12965[2]);var state_12965__$1 = (function (){var statearr_12977 = state_12965;(statearr_12977[8] = inst_12958);
return statearr_12977;
})();var statearr_12978_12996 = state_12965__$1;(statearr_12978_12996[2] = null);
(statearr_12978_12996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_12982 = [null,null,null,null,null,null,null,null,null];(statearr_12982[0] = state_machine__5507__auto__);
(statearr_12982[1] = 1);
return statearr_12982;
});
var state_machine__5507__auto____1 = (function (state_12965){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12965);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12983){if((e12983 instanceof Object))
{var ex__5510__auto__ = e12983;var statearr_12984_12997 = state_12965;(statearr_12984_12997[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12998 = state_12965;
state_12965 = G__12998;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12965){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12985 = f__5522__auto__.call(null);(statearr_12985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12986);
return statearr_12985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13085 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13063){var state_val_13064 = (state_13063[1]);if((state_val_13064 === 1))
{var state_13063__$1 = state_13063;var statearr_13065_13086 = state_13063__$1;(statearr_13065_13086[2] = null);
(statearr_13065_13086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13064 === 2))
{var state_13063__$1 = state_13063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13063__$1,4,ch);
} else
{if((state_val_13064 === 3))
{var inst_13061 = (state_13063[2]);var state_13063__$1 = state_13063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13063__$1,inst_13061);
} else
{if((state_val_13064 === 4))
{var inst_13044 = (state_13063[7]);var inst_13044__$1 = (state_13063[2]);var inst_13045 = (inst_13044__$1 == null);var state_13063__$1 = (function (){var statearr_13066 = state_13063;(statearr_13066[7] = inst_13044__$1);
return statearr_13066;
})();if(cljs.core.truth_(inst_13045))
{var statearr_13067_13087 = state_13063__$1;(statearr_13067_13087[1] = 5);
} else
{var statearr_13068_13088 = state_13063__$1;(statearr_13068_13088[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13064 === 5))
{var inst_13047 = cljs.core.async.close_BANG_.call(null,tc);var inst_13048 = cljs.core.async.close_BANG_.call(null,fc);var state_13063__$1 = (function (){var statearr_13069 = state_13063;(statearr_13069[8] = inst_13047);
return statearr_13069;
})();var statearr_13070_13089 = state_13063__$1;(statearr_13070_13089[2] = inst_13048);
(statearr_13070_13089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13064 === 6))
{var inst_13044 = (state_13063[7]);var inst_13050 = p.call(null,inst_13044);var state_13063__$1 = state_13063;if(cljs.core.truth_(inst_13050))
{var statearr_13071_13090 = state_13063__$1;(statearr_13071_13090[1] = 9);
} else
{var statearr_13072_13091 = state_13063__$1;(statearr_13072_13091[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13064 === 7))
{var inst_13059 = (state_13063[2]);var state_13063__$1 = state_13063;var statearr_13073_13092 = state_13063__$1;(statearr_13073_13092[2] = inst_13059);
(statearr_13073_13092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13064 === 8))
{var inst_13056 = (state_13063[2]);var state_13063__$1 = (function (){var statearr_13074 = state_13063;(statearr_13074[9] = inst_13056);
return statearr_13074;
})();var statearr_13075_13093 = state_13063__$1;(statearr_13075_13093[2] = null);
(statearr_13075_13093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13064 === 9))
{var state_13063__$1 = state_13063;var statearr_13076_13094 = state_13063__$1;(statearr_13076_13094[2] = tc);
(statearr_13076_13094[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13064 === 10))
{var state_13063__$1 = state_13063;var statearr_13077_13095 = state_13063__$1;(statearr_13077_13095[2] = fc);
(statearr_13077_13095[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13064 === 11))
{var inst_13044 = (state_13063[7]);var inst_13054 = (state_13063[2]);var state_13063__$1 = state_13063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13063__$1,8,inst_13054,inst_13044);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13081 = [null,null,null,null,null,null,null,null,null,null];(statearr_13081[0] = state_machine__5507__auto__);
(statearr_13081[1] = 1);
return statearr_13081;
});
var state_machine__5507__auto____1 = (function (state_13063){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13063);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13082){if((e13082 instanceof Object))
{var ex__5510__auto__ = e13082;var statearr_13083_13096 = state_13063;(statearr_13083_13096[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13097 = state_13063;
state_13063 = G__13097;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13063){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13084 = f__5522__auto__.call(null);(statearr_13084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13085);
return statearr_13084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13144){var state_val_13145 = (state_13144[1]);if((state_val_13145 === 7))
{var inst_13140 = (state_13144[2]);var state_13144__$1 = state_13144;var statearr_13146_13162 = state_13144__$1;(statearr_13146_13162[2] = inst_13140);
(statearr_13146_13162[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 6))
{var inst_13133 = (state_13144[7]);var inst_13130 = (state_13144[8]);var inst_13137 = f.call(null,inst_13130,inst_13133);var inst_13130__$1 = inst_13137;var state_13144__$1 = (function (){var statearr_13147 = state_13144;(statearr_13147[8] = inst_13130__$1);
return statearr_13147;
})();var statearr_13148_13163 = state_13144__$1;(statearr_13148_13163[2] = null);
(statearr_13148_13163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 5))
{var inst_13130 = (state_13144[8]);var state_13144__$1 = state_13144;var statearr_13149_13164 = state_13144__$1;(statearr_13149_13164[2] = inst_13130);
(statearr_13149_13164[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 4))
{var inst_13133 = (state_13144[7]);var inst_13133__$1 = (state_13144[2]);var inst_13134 = (inst_13133__$1 == null);var state_13144__$1 = (function (){var statearr_13150 = state_13144;(statearr_13150[7] = inst_13133__$1);
return statearr_13150;
})();if(cljs.core.truth_(inst_13134))
{var statearr_13151_13165 = state_13144__$1;(statearr_13151_13165[1] = 5);
} else
{var statearr_13152_13166 = state_13144__$1;(statearr_13152_13166[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13145 === 3))
{var inst_13142 = (state_13144[2]);var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13144__$1,inst_13142);
} else
{if((state_val_13145 === 2))
{var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13144__$1,4,ch);
} else
{if((state_val_13145 === 1))
{var inst_13130 = init;var state_13144__$1 = (function (){var statearr_13153 = state_13144;(statearr_13153[8] = inst_13130);
return statearr_13153;
})();var statearr_13154_13167 = state_13144__$1;(statearr_13154_13167[2] = null);
(statearr_13154_13167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13158 = [null,null,null,null,null,null,null,null,null];(statearr_13158[0] = state_machine__5507__auto__);
(statearr_13158[1] = 1);
return statearr_13158;
});
var state_machine__5507__auto____1 = (function (state_13144){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13144);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13159){if((e13159 instanceof Object))
{var ex__5510__auto__ = e13159;var statearr_13160_13168 = state_13144;(statearr_13160_13168[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13169 = state_13144;
state_13144 = G__13169;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13144){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13161 = f__5522__auto__.call(null);(statearr_13161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13231){var state_val_13232 = (state_13231[1]);if((state_val_13232 === 1))
{var inst_13211 = cljs.core.seq.call(null,coll);var inst_13212 = inst_13211;var state_13231__$1 = (function (){var statearr_13233 = state_13231;(statearr_13233[7] = inst_13212);
return statearr_13233;
})();var statearr_13234_13252 = state_13231__$1;(statearr_13234_13252[2] = null);
(statearr_13234_13252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13232 === 2))
{var inst_13212 = (state_13231[7]);var state_13231__$1 = state_13231;if(cljs.core.truth_(inst_13212))
{var statearr_13235_13253 = state_13231__$1;(statearr_13235_13253[1] = 4);
} else
{var statearr_13236_13254 = state_13231__$1;(statearr_13236_13254[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13232 === 3))
{var inst_13229 = (state_13231[2]);var state_13231__$1 = state_13231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13231__$1,inst_13229);
} else
{if((state_val_13232 === 4))
{var inst_13212 = (state_13231[7]);var inst_13215 = cljs.core.first.call(null,inst_13212);var state_13231__$1 = state_13231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13231__$1,7,ch,inst_13215);
} else
{if((state_val_13232 === 5))
{var state_13231__$1 = state_13231;if(cljs.core.truth_(close_QMARK_))
{var statearr_13237_13255 = state_13231__$1;(statearr_13237_13255[1] = 8);
} else
{var statearr_13238_13256 = state_13231__$1;(statearr_13238_13256[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13232 === 6))
{var inst_13227 = (state_13231[2]);var state_13231__$1 = state_13231;var statearr_13239_13257 = state_13231__$1;(statearr_13239_13257[2] = inst_13227);
(statearr_13239_13257[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13232 === 7))
{var inst_13212 = (state_13231[7]);var inst_13217 = (state_13231[2]);var inst_13218 = cljs.core.next.call(null,inst_13212);var inst_13212__$1 = inst_13218;var state_13231__$1 = (function (){var statearr_13240 = state_13231;(statearr_13240[8] = inst_13217);
(statearr_13240[7] = inst_13212__$1);
return statearr_13240;
})();var statearr_13241_13258 = state_13231__$1;(statearr_13241_13258[2] = null);
(statearr_13241_13258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13232 === 8))
{var inst_13222 = cljs.core.async.close_BANG_.call(null,ch);var state_13231__$1 = state_13231;var statearr_13242_13259 = state_13231__$1;(statearr_13242_13259[2] = inst_13222);
(statearr_13242_13259[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13232 === 9))
{var state_13231__$1 = state_13231;var statearr_13243_13260 = state_13231__$1;(statearr_13243_13260[2] = null);
(statearr_13243_13260[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13232 === 10))
{var inst_13225 = (state_13231[2]);var state_13231__$1 = state_13231;var statearr_13244_13261 = state_13231__$1;(statearr_13244_13261[2] = inst_13225);
(statearr_13244_13261[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13248 = [null,null,null,null,null,null,null,null,null];(statearr_13248[0] = state_machine__5507__auto__);
(statearr_13248[1] = 1);
return statearr_13248;
});
var state_machine__5507__auto____1 = (function (state_13231){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13231);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13249){if((e13249 instanceof Object))
{var ex__5510__auto__ = e13249;var statearr_13250_13262 = state_13231;(statearr_13250_13262[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13231);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13263 = state_13231;
state_13231 = G__13263;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13231){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13251 = f__5522__auto__.call(null);(statearr_13251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13265 = {};return obj13265;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13267 = {};return obj13267;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13491 = (function (cs,ch,mult,meta13492){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13492 = meta13492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13491.cljs$lang$type = true;
cljs.core.async.t13491.cljs$lang$ctorStr = "cljs.core.async/t13491";
cljs.core.async.t13491.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13491");
});})(cs))
;
cljs.core.async.t13491.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13491.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13491.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13491.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13491.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13493){var self__ = this;
var _13493__$1 = this;return self__.meta13492;
});})(cs))
;
cljs.core.async.t13491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13493,meta13492__$1){var self__ = this;
var _13493__$1 = this;return (new cljs.core.async.t13491(self__.cs,self__.ch,self__.mult,meta13492__$1));
});})(cs))
;
cljs.core.async.__GT_t13491 = ((function (cs){
return (function __GT_t13491(cs__$1,ch__$1,mult__$1,meta13492){return (new cljs.core.async.t13491(cs__$1,ch__$1,mult__$1,meta13492));
});})(cs))
;
}
return (new cljs.core.async.t13491(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13714 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13628){var state_val_13629 = (state_13628[1]);if((state_val_13629 === 32))
{var inst_13496 = (state_13628[7]);var inst_13572 = (state_13628[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13628,31,Object,null,30);var inst_13579 = cljs.core.async.put_BANG_.call(null,inst_13572,inst_13496,done);var state_13628__$1 = state_13628;var statearr_13630_13715 = state_13628__$1;(statearr_13630_13715[2] = inst_13579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13628__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 1))
{var state_13628__$1 = state_13628;var statearr_13631_13716 = state_13628__$1;(statearr_13631_13716[2] = null);
(statearr_13631_13716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 33))
{var inst_13585 = (state_13628[9]);var inst_13587 = cljs.core.chunked_seq_QMARK_.call(null,inst_13585);var state_13628__$1 = state_13628;if(inst_13587)
{var statearr_13632_13717 = state_13628__$1;(statearr_13632_13717[1] = 36);
} else
{var statearr_13633_13718 = state_13628__$1;(statearr_13633_13718[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 2))
{var state_13628__$1 = state_13628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13628__$1,4,ch);
} else
{if((state_val_13629 === 34))
{var state_13628__$1 = state_13628;var statearr_13634_13719 = state_13628__$1;(statearr_13634_13719[2] = null);
(statearr_13634_13719[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 3))
{var inst_13626 = (state_13628[2]);var state_13628__$1 = state_13628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13628__$1,inst_13626);
} else
{if((state_val_13629 === 35))
{var inst_13610 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13635_13720 = state_13628__$1;(statearr_13635_13720[2] = inst_13610);
(statearr_13635_13720[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 4))
{var inst_13496 = (state_13628[7]);var inst_13496__$1 = (state_13628[2]);var inst_13497 = (inst_13496__$1 == null);var state_13628__$1 = (function (){var statearr_13636 = state_13628;(statearr_13636[7] = inst_13496__$1);
return statearr_13636;
})();if(cljs.core.truth_(inst_13497))
{var statearr_13637_13721 = state_13628__$1;(statearr_13637_13721[1] = 5);
} else
{var statearr_13638_13722 = state_13628__$1;(statearr_13638_13722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 36))
{var inst_13585 = (state_13628[9]);var inst_13589 = cljs.core.chunk_first.call(null,inst_13585);var inst_13590 = cljs.core.chunk_rest.call(null,inst_13585);var inst_13591 = cljs.core.count.call(null,inst_13589);var inst_13564 = inst_13590;var inst_13565 = inst_13589;var inst_13566 = inst_13591;var inst_13567 = 0;var state_13628__$1 = (function (){var statearr_13639 = state_13628;(statearr_13639[10] = inst_13567);
(statearr_13639[11] = inst_13566);
(statearr_13639[12] = inst_13565);
(statearr_13639[13] = inst_13564);
return statearr_13639;
})();var statearr_13640_13723 = state_13628__$1;(statearr_13640_13723[2] = null);
(statearr_13640_13723[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 5))
{var inst_13503 = cljs.core.deref.call(null,cs);var inst_13504 = cljs.core.seq.call(null,inst_13503);var inst_13505 = inst_13504;var inst_13506 = null;var inst_13507 = 0;var inst_13508 = 0;var state_13628__$1 = (function (){var statearr_13641 = state_13628;(statearr_13641[14] = inst_13505);
(statearr_13641[15] = inst_13507);
(statearr_13641[16] = inst_13506);
(statearr_13641[17] = inst_13508);
return statearr_13641;
})();var statearr_13642_13724 = state_13628__$1;(statearr_13642_13724[2] = null);
(statearr_13642_13724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 37))
{var inst_13585 = (state_13628[9]);var inst_13594 = cljs.core.first.call(null,inst_13585);var state_13628__$1 = (function (){var statearr_13643 = state_13628;(statearr_13643[18] = inst_13594);
return statearr_13643;
})();var statearr_13644_13725 = state_13628__$1;(statearr_13644_13725[2] = null);
(statearr_13644_13725[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 6))
{var inst_13556 = (state_13628[19]);var inst_13555 = cljs.core.deref.call(null,cs);var inst_13556__$1 = cljs.core.keys.call(null,inst_13555);var inst_13557 = cljs.core.count.call(null,inst_13556__$1);var inst_13558 = cljs.core.reset_BANG_.call(null,dctr,inst_13557);var inst_13563 = cljs.core.seq.call(null,inst_13556__$1);var inst_13564 = inst_13563;var inst_13565 = null;var inst_13566 = 0;var inst_13567 = 0;var state_13628__$1 = (function (){var statearr_13645 = state_13628;(statearr_13645[10] = inst_13567);
(statearr_13645[11] = inst_13566);
(statearr_13645[20] = inst_13558);
(statearr_13645[12] = inst_13565);
(statearr_13645[13] = inst_13564);
(statearr_13645[19] = inst_13556__$1);
return statearr_13645;
})();var statearr_13646_13726 = state_13628__$1;(statearr_13646_13726[2] = null);
(statearr_13646_13726[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 38))
{var inst_13607 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13647_13727 = state_13628__$1;(statearr_13647_13727[2] = inst_13607);
(statearr_13647_13727[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 7))
{var inst_13624 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13648_13728 = state_13628__$1;(statearr_13648_13728[2] = inst_13624);
(statearr_13648_13728[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 39))
{var inst_13585 = (state_13628[9]);var inst_13603 = (state_13628[2]);var inst_13604 = cljs.core.next.call(null,inst_13585);var inst_13564 = inst_13604;var inst_13565 = null;var inst_13566 = 0;var inst_13567 = 0;var state_13628__$1 = (function (){var statearr_13649 = state_13628;(statearr_13649[10] = inst_13567);
(statearr_13649[11] = inst_13566);
(statearr_13649[12] = inst_13565);
(statearr_13649[13] = inst_13564);
(statearr_13649[21] = inst_13603);
return statearr_13649;
})();var statearr_13650_13729 = state_13628__$1;(statearr_13650_13729[2] = null);
(statearr_13650_13729[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 8))
{var inst_13507 = (state_13628[15]);var inst_13508 = (state_13628[17]);var inst_13510 = (inst_13508 < inst_13507);var inst_13511 = inst_13510;var state_13628__$1 = state_13628;if(cljs.core.truth_(inst_13511))
{var statearr_13651_13730 = state_13628__$1;(statearr_13651_13730[1] = 10);
} else
{var statearr_13652_13731 = state_13628__$1;(statearr_13652_13731[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 40))
{var inst_13594 = (state_13628[18]);var inst_13595 = (state_13628[2]);var inst_13596 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13597 = cljs.core.async.untap_STAR_.call(null,m,inst_13594);var state_13628__$1 = (function (){var statearr_13653 = state_13628;(statearr_13653[22] = inst_13595);
(statearr_13653[23] = inst_13596);
return statearr_13653;
})();var statearr_13654_13732 = state_13628__$1;(statearr_13654_13732[2] = inst_13597);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13628__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 9))
{var inst_13553 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13655_13733 = state_13628__$1;(statearr_13655_13733[2] = inst_13553);
(statearr_13655_13733[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 41))
{var inst_13594 = (state_13628[18]);var inst_13496 = (state_13628[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13628,40,Object,null,39);var inst_13601 = cljs.core.async.put_BANG_.call(null,inst_13594,inst_13496,done);var state_13628__$1 = state_13628;var statearr_13656_13734 = state_13628__$1;(statearr_13656_13734[2] = inst_13601);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13628__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 10))
{var inst_13506 = (state_13628[16]);var inst_13508 = (state_13628[17]);var inst_13514 = cljs.core._nth.call(null,inst_13506,inst_13508);var inst_13515 = cljs.core.nth.call(null,inst_13514,0,null);var inst_13516 = cljs.core.nth.call(null,inst_13514,1,null);var state_13628__$1 = (function (){var statearr_13657 = state_13628;(statearr_13657[24] = inst_13515);
return statearr_13657;
})();if(cljs.core.truth_(inst_13516))
{var statearr_13658_13735 = state_13628__$1;(statearr_13658_13735[1] = 13);
} else
{var statearr_13659_13736 = state_13628__$1;(statearr_13659_13736[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 42))
{var state_13628__$1 = state_13628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13628__$1,45,dchan);
} else
{if((state_val_13629 === 11))
{var inst_13505 = (state_13628[14]);var inst_13525 = (state_13628[25]);var inst_13525__$1 = cljs.core.seq.call(null,inst_13505);var state_13628__$1 = (function (){var statearr_13660 = state_13628;(statearr_13660[25] = inst_13525__$1);
return statearr_13660;
})();if(inst_13525__$1)
{var statearr_13661_13737 = state_13628__$1;(statearr_13661_13737[1] = 16);
} else
{var statearr_13662_13738 = state_13628__$1;(statearr_13662_13738[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 43))
{var state_13628__$1 = state_13628;var statearr_13663_13739 = state_13628__$1;(statearr_13663_13739[2] = null);
(statearr_13663_13739[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 12))
{var inst_13551 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13664_13740 = state_13628__$1;(statearr_13664_13740[2] = inst_13551);
(statearr_13664_13740[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 44))
{var inst_13621 = (state_13628[2]);var state_13628__$1 = (function (){var statearr_13665 = state_13628;(statearr_13665[26] = inst_13621);
return statearr_13665;
})();var statearr_13666_13741 = state_13628__$1;(statearr_13666_13741[2] = null);
(statearr_13666_13741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 13))
{var inst_13515 = (state_13628[24]);var inst_13518 = cljs.core.async.close_BANG_.call(null,inst_13515);var state_13628__$1 = state_13628;var statearr_13667_13742 = state_13628__$1;(statearr_13667_13742[2] = inst_13518);
(statearr_13667_13742[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 45))
{var inst_13618 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13671_13743 = state_13628__$1;(statearr_13671_13743[2] = inst_13618);
(statearr_13671_13743[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 14))
{var state_13628__$1 = state_13628;var statearr_13672_13744 = state_13628__$1;(statearr_13672_13744[2] = null);
(statearr_13672_13744[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 15))
{var inst_13505 = (state_13628[14]);var inst_13507 = (state_13628[15]);var inst_13506 = (state_13628[16]);var inst_13508 = (state_13628[17]);var inst_13521 = (state_13628[2]);var inst_13522 = (inst_13508 + 1);var tmp13668 = inst_13505;var tmp13669 = inst_13507;var tmp13670 = inst_13506;var inst_13505__$1 = tmp13668;var inst_13506__$1 = tmp13670;var inst_13507__$1 = tmp13669;var inst_13508__$1 = inst_13522;var state_13628__$1 = (function (){var statearr_13673 = state_13628;(statearr_13673[27] = inst_13521);
(statearr_13673[14] = inst_13505__$1);
(statearr_13673[15] = inst_13507__$1);
(statearr_13673[16] = inst_13506__$1);
(statearr_13673[17] = inst_13508__$1);
return statearr_13673;
})();var statearr_13674_13745 = state_13628__$1;(statearr_13674_13745[2] = null);
(statearr_13674_13745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 16))
{var inst_13525 = (state_13628[25]);var inst_13527 = cljs.core.chunked_seq_QMARK_.call(null,inst_13525);var state_13628__$1 = state_13628;if(inst_13527)
{var statearr_13675_13746 = state_13628__$1;(statearr_13675_13746[1] = 19);
} else
{var statearr_13676_13747 = state_13628__$1;(statearr_13676_13747[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 17))
{var state_13628__$1 = state_13628;var statearr_13677_13748 = state_13628__$1;(statearr_13677_13748[2] = null);
(statearr_13677_13748[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 18))
{var inst_13549 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13678_13749 = state_13628__$1;(statearr_13678_13749[2] = inst_13549);
(statearr_13678_13749[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 19))
{var inst_13525 = (state_13628[25]);var inst_13529 = cljs.core.chunk_first.call(null,inst_13525);var inst_13530 = cljs.core.chunk_rest.call(null,inst_13525);var inst_13531 = cljs.core.count.call(null,inst_13529);var inst_13505 = inst_13530;var inst_13506 = inst_13529;var inst_13507 = inst_13531;var inst_13508 = 0;var state_13628__$1 = (function (){var statearr_13679 = state_13628;(statearr_13679[14] = inst_13505);
(statearr_13679[15] = inst_13507);
(statearr_13679[16] = inst_13506);
(statearr_13679[17] = inst_13508);
return statearr_13679;
})();var statearr_13680_13750 = state_13628__$1;(statearr_13680_13750[2] = null);
(statearr_13680_13750[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 20))
{var inst_13525 = (state_13628[25]);var inst_13535 = cljs.core.first.call(null,inst_13525);var inst_13536 = cljs.core.nth.call(null,inst_13535,0,null);var inst_13537 = cljs.core.nth.call(null,inst_13535,1,null);var state_13628__$1 = (function (){var statearr_13681 = state_13628;(statearr_13681[28] = inst_13536);
return statearr_13681;
})();if(cljs.core.truth_(inst_13537))
{var statearr_13682_13751 = state_13628__$1;(statearr_13682_13751[1] = 22);
} else
{var statearr_13683_13752 = state_13628__$1;(statearr_13683_13752[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 21))
{var inst_13546 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13684_13753 = state_13628__$1;(statearr_13684_13753[2] = inst_13546);
(statearr_13684_13753[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 22))
{var inst_13536 = (state_13628[28]);var inst_13539 = cljs.core.async.close_BANG_.call(null,inst_13536);var state_13628__$1 = state_13628;var statearr_13685_13754 = state_13628__$1;(statearr_13685_13754[2] = inst_13539);
(statearr_13685_13754[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 23))
{var state_13628__$1 = state_13628;var statearr_13686_13755 = state_13628__$1;(statearr_13686_13755[2] = null);
(statearr_13686_13755[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 24))
{var inst_13525 = (state_13628[25]);var inst_13542 = (state_13628[2]);var inst_13543 = cljs.core.next.call(null,inst_13525);var inst_13505 = inst_13543;var inst_13506 = null;var inst_13507 = 0;var inst_13508 = 0;var state_13628__$1 = (function (){var statearr_13687 = state_13628;(statearr_13687[14] = inst_13505);
(statearr_13687[15] = inst_13507);
(statearr_13687[16] = inst_13506);
(statearr_13687[17] = inst_13508);
(statearr_13687[29] = inst_13542);
return statearr_13687;
})();var statearr_13688_13756 = state_13628__$1;(statearr_13688_13756[2] = null);
(statearr_13688_13756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 25))
{var inst_13567 = (state_13628[10]);var inst_13566 = (state_13628[11]);var inst_13569 = (inst_13567 < inst_13566);var inst_13570 = inst_13569;var state_13628__$1 = state_13628;if(cljs.core.truth_(inst_13570))
{var statearr_13689_13757 = state_13628__$1;(statearr_13689_13757[1] = 27);
} else
{var statearr_13690_13758 = state_13628__$1;(statearr_13690_13758[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 26))
{var inst_13556 = (state_13628[19]);var inst_13614 = (state_13628[2]);var inst_13615 = cljs.core.seq.call(null,inst_13556);var state_13628__$1 = (function (){var statearr_13691 = state_13628;(statearr_13691[30] = inst_13614);
return statearr_13691;
})();if(inst_13615)
{var statearr_13692_13759 = state_13628__$1;(statearr_13692_13759[1] = 42);
} else
{var statearr_13693_13760 = state_13628__$1;(statearr_13693_13760[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 27))
{var inst_13567 = (state_13628[10]);var inst_13565 = (state_13628[12]);var inst_13572 = cljs.core._nth.call(null,inst_13565,inst_13567);var state_13628__$1 = (function (){var statearr_13694 = state_13628;(statearr_13694[8] = inst_13572);
return statearr_13694;
})();var statearr_13695_13761 = state_13628__$1;(statearr_13695_13761[2] = null);
(statearr_13695_13761[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 28))
{var inst_13564 = (state_13628[13]);var inst_13585 = (state_13628[9]);var inst_13585__$1 = cljs.core.seq.call(null,inst_13564);var state_13628__$1 = (function (){var statearr_13699 = state_13628;(statearr_13699[9] = inst_13585__$1);
return statearr_13699;
})();if(inst_13585__$1)
{var statearr_13700_13762 = state_13628__$1;(statearr_13700_13762[1] = 33);
} else
{var statearr_13701_13763 = state_13628__$1;(statearr_13701_13763[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 29))
{var inst_13612 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13702_13764 = state_13628__$1;(statearr_13702_13764[2] = inst_13612);
(statearr_13702_13764[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 30))
{var inst_13567 = (state_13628[10]);var inst_13566 = (state_13628[11]);var inst_13565 = (state_13628[12]);var inst_13564 = (state_13628[13]);var inst_13581 = (state_13628[2]);var inst_13582 = (inst_13567 + 1);var tmp13696 = inst_13566;var tmp13697 = inst_13565;var tmp13698 = inst_13564;var inst_13564__$1 = tmp13698;var inst_13565__$1 = tmp13697;var inst_13566__$1 = tmp13696;var inst_13567__$1 = inst_13582;var state_13628__$1 = (function (){var statearr_13703 = state_13628;(statearr_13703[10] = inst_13567__$1);
(statearr_13703[11] = inst_13566__$1);
(statearr_13703[12] = inst_13565__$1);
(statearr_13703[13] = inst_13564__$1);
(statearr_13703[31] = inst_13581);
return statearr_13703;
})();var statearr_13704_13765 = state_13628__$1;(statearr_13704_13765[2] = null);
(statearr_13704_13765[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 31))
{var inst_13572 = (state_13628[8]);var inst_13573 = (state_13628[2]);var inst_13574 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13575 = cljs.core.async.untap_STAR_.call(null,m,inst_13572);var state_13628__$1 = (function (){var statearr_13705 = state_13628;(statearr_13705[32] = inst_13573);
(statearr_13705[33] = inst_13574);
return statearr_13705;
})();var statearr_13706_13766 = state_13628__$1;(statearr_13706_13766[2] = inst_13575);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13628__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13710[0] = state_machine__5507__auto__);
(statearr_13710[1] = 1);
return statearr_13710;
});
var state_machine__5507__auto____1 = (function (state_13628){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13628);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13711){if((e13711 instanceof Object))
{var ex__5510__auto__ = e13711;var statearr_13712_13767 = state_13628;(statearr_13712_13767[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13628);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13768 = state_13628;
state_13628 = G__13768;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13628){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13713 = f__5522__auto__.call(null);(statearr_13713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13714);
return statearr_13713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13770 = {};return obj13770;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13880 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13881){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta13881 = meta13881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13880.cljs$lang$type = true;
cljs.core.async.t13880.cljs$lang$ctorStr = "cljs.core.async/t13880";
cljs.core.async.t13880.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13880");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13880.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13880.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13880.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13880.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13880.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13880.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13880.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13882){var self__ = this;
var _13882__$1 = this;return self__.meta13881;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13882,meta13881__$1){var self__ = this;
var _13882__$1 = this;return (new cljs.core.async.t13880(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13881__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13880 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13880(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13881){return (new cljs.core.async.t13880(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13881));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13880(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13989 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13947){var state_val_13948 = (state_13947[1]);if((state_val_13948 === 1))
{var inst_13886 = (state_13947[7]);var inst_13886__$1 = calc_state.call(null);var inst_13887 = cljs.core.seq_QMARK_.call(null,inst_13886__$1);var state_13947__$1 = (function (){var statearr_13949 = state_13947;(statearr_13949[7] = inst_13886__$1);
return statearr_13949;
})();if(inst_13887)
{var statearr_13950_13990 = state_13947__$1;(statearr_13950_13990[1] = 2);
} else
{var statearr_13951_13991 = state_13947__$1;(statearr_13951_13991[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 2))
{var inst_13886 = (state_13947[7]);var inst_13889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13886);var state_13947__$1 = state_13947;var statearr_13952_13992 = state_13947__$1;(statearr_13952_13992[2] = inst_13889);
(statearr_13952_13992[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 3))
{var inst_13886 = (state_13947[7]);var state_13947__$1 = state_13947;var statearr_13953_13993 = state_13947__$1;(statearr_13953_13993[2] = inst_13886);
(statearr_13953_13993[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 4))
{var inst_13886 = (state_13947[7]);var inst_13892 = (state_13947[2]);var inst_13893 = cljs.core.get.call(null,inst_13892,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13894 = cljs.core.get.call(null,inst_13892,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13895 = cljs.core.get.call(null,inst_13892,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13896 = inst_13886;var state_13947__$1 = (function (){var statearr_13954 = state_13947;(statearr_13954[8] = inst_13893);
(statearr_13954[9] = inst_13896);
(statearr_13954[10] = inst_13895);
(statearr_13954[11] = inst_13894);
return statearr_13954;
})();var statearr_13955_13994 = state_13947__$1;(statearr_13955_13994[2] = null);
(statearr_13955_13994[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 5))
{var inst_13896 = (state_13947[9]);var inst_13899 = cljs.core.seq_QMARK_.call(null,inst_13896);var state_13947__$1 = state_13947;if(inst_13899)
{var statearr_13956_13995 = state_13947__$1;(statearr_13956_13995[1] = 7);
} else
{var statearr_13957_13996 = state_13947__$1;(statearr_13957_13996[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 6))
{var inst_13945 = (state_13947[2]);var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13947__$1,inst_13945);
} else
{if((state_val_13948 === 7))
{var inst_13896 = (state_13947[9]);var inst_13901 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13896);var state_13947__$1 = state_13947;var statearr_13958_13997 = state_13947__$1;(statearr_13958_13997[2] = inst_13901);
(statearr_13958_13997[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 8))
{var inst_13896 = (state_13947[9]);var state_13947__$1 = state_13947;var statearr_13959_13998 = state_13947__$1;(statearr_13959_13998[2] = inst_13896);
(statearr_13959_13998[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 9))
{var inst_13904 = (state_13947[12]);var inst_13904__$1 = (state_13947[2]);var inst_13905 = cljs.core.get.call(null,inst_13904__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13906 = cljs.core.get.call(null,inst_13904__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13907 = cljs.core.get.call(null,inst_13904__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13947__$1 = (function (){var statearr_13960 = state_13947;(statearr_13960[12] = inst_13904__$1);
(statearr_13960[13] = inst_13906);
(statearr_13960[14] = inst_13907);
return statearr_13960;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13947__$1,10,inst_13905);
} else
{if((state_val_13948 === 10))
{var inst_13911 = (state_13947[15]);var inst_13912 = (state_13947[16]);var inst_13910 = (state_13947[2]);var inst_13911__$1 = cljs.core.nth.call(null,inst_13910,0,null);var inst_13912__$1 = cljs.core.nth.call(null,inst_13910,1,null);var inst_13913 = (inst_13911__$1 == null);var inst_13914 = cljs.core._EQ_.call(null,inst_13912__$1,change);var inst_13915 = (inst_13913) || (inst_13914);var state_13947__$1 = (function (){var statearr_13961 = state_13947;(statearr_13961[15] = inst_13911__$1);
(statearr_13961[16] = inst_13912__$1);
return statearr_13961;
})();if(cljs.core.truth_(inst_13915))
{var statearr_13962_13999 = state_13947__$1;(statearr_13962_13999[1] = 11);
} else
{var statearr_13963_14000 = state_13947__$1;(statearr_13963_14000[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 11))
{var inst_13911 = (state_13947[15]);var inst_13917 = (inst_13911 == null);var state_13947__$1 = state_13947;if(cljs.core.truth_(inst_13917))
{var statearr_13964_14001 = state_13947__$1;(statearr_13964_14001[1] = 14);
} else
{var statearr_13965_14002 = state_13947__$1;(statearr_13965_14002[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 12))
{var inst_13926 = (state_13947[17]);var inst_13912 = (state_13947[16]);var inst_13907 = (state_13947[14]);var inst_13926__$1 = inst_13907.call(null,inst_13912);var state_13947__$1 = (function (){var statearr_13966 = state_13947;(statearr_13966[17] = inst_13926__$1);
return statearr_13966;
})();if(cljs.core.truth_(inst_13926__$1))
{var statearr_13967_14003 = state_13947__$1;(statearr_13967_14003[1] = 17);
} else
{var statearr_13968_14004 = state_13947__$1;(statearr_13968_14004[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 13))
{var inst_13943 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13969_14005 = state_13947__$1;(statearr_13969_14005[2] = inst_13943);
(statearr_13969_14005[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 14))
{var inst_13912 = (state_13947[16]);var inst_13919 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13912);var state_13947__$1 = state_13947;var statearr_13970_14006 = state_13947__$1;(statearr_13970_14006[2] = inst_13919);
(statearr_13970_14006[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 15))
{var state_13947__$1 = state_13947;var statearr_13971_14007 = state_13947__$1;(statearr_13971_14007[2] = null);
(statearr_13971_14007[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 16))
{var inst_13922 = (state_13947[2]);var inst_13923 = calc_state.call(null);var inst_13896 = inst_13923;var state_13947__$1 = (function (){var statearr_13972 = state_13947;(statearr_13972[9] = inst_13896);
(statearr_13972[18] = inst_13922);
return statearr_13972;
})();var statearr_13973_14008 = state_13947__$1;(statearr_13973_14008[2] = null);
(statearr_13973_14008[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 17))
{var inst_13926 = (state_13947[17]);var state_13947__$1 = state_13947;var statearr_13974_14009 = state_13947__$1;(statearr_13974_14009[2] = inst_13926);
(statearr_13974_14009[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 18))
{var inst_13912 = (state_13947[16]);var inst_13906 = (state_13947[13]);var inst_13907 = (state_13947[14]);var inst_13929 = cljs.core.empty_QMARK_.call(null,inst_13907);var inst_13930 = inst_13906.call(null,inst_13912);var inst_13931 = cljs.core.not.call(null,inst_13930);var inst_13932 = (inst_13929) && (inst_13931);var state_13947__$1 = state_13947;var statearr_13975_14010 = state_13947__$1;(statearr_13975_14010[2] = inst_13932);
(statearr_13975_14010[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 19))
{var inst_13934 = (state_13947[2]);var state_13947__$1 = state_13947;if(cljs.core.truth_(inst_13934))
{var statearr_13976_14011 = state_13947__$1;(statearr_13976_14011[1] = 20);
} else
{var statearr_13977_14012 = state_13947__$1;(statearr_13977_14012[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 20))
{var inst_13911 = (state_13947[15]);var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13947__$1,23,out,inst_13911);
} else
{if((state_val_13948 === 21))
{var state_13947__$1 = state_13947;var statearr_13978_14013 = state_13947__$1;(statearr_13978_14013[2] = null);
(statearr_13978_14013[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 22))
{var inst_13904 = (state_13947[12]);var inst_13940 = (state_13947[2]);var inst_13896 = inst_13904;var state_13947__$1 = (function (){var statearr_13979 = state_13947;(statearr_13979[19] = inst_13940);
(statearr_13979[9] = inst_13896);
return statearr_13979;
})();var statearr_13980_14014 = state_13947__$1;(statearr_13980_14014[2] = null);
(statearr_13980_14014[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 23))
{var inst_13937 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13981_14015 = state_13947__$1;(statearr_13981_14015[2] = inst_13937);
(statearr_13981_14015[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13985[0] = state_machine__5507__auto__);
(statearr_13985[1] = 1);
return statearr_13985;
});
var state_machine__5507__auto____1 = (function (state_13947){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13986){if((e13986 instanceof Object))
{var ex__5510__auto__ = e13986;var statearr_13987_14016 = state_13947;(statearr_13987_14016[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14017 = state_13947;
state_13947 = G__14017;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13947){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13988 = f__5522__auto__.call(null);(statearr_13988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13989);
return statearr_13988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14019 = {};return obj14019;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__14020_SHARP_){if(cljs.core.truth_(p1__14020_SHARP_.call(null,topic)))
{return p1__14020_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14020_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14145 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14145 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14146){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14146 = meta14146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14145.cljs$lang$type = true;
cljs.core.async.t14145.cljs$lang$ctorStr = "cljs.core.async/t14145";
cljs.core.async.t14145.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14145");
});})(mults,ensure_mult))
;
cljs.core.async.t14145.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14145.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14147){var self__ = this;
var _14147__$1 = this;return self__.meta14146;
});})(mults,ensure_mult))
;
cljs.core.async.t14145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14147,meta14146__$1){var self__ = this;
var _14147__$1 = this;return (new cljs.core.async.t14145(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14146__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14145 = ((function (mults,ensure_mult){
return (function __GT_t14145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14146){return (new cljs.core.async.t14145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14146));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14145(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14269 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14221){var state_val_14222 = (state_14221[1]);if((state_val_14222 === 1))
{var state_14221__$1 = state_14221;var statearr_14223_14270 = state_14221__$1;(statearr_14223_14270[2] = null);
(statearr_14223_14270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 2))
{var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14221__$1,4,ch);
} else
{if((state_val_14222 === 3))
{var inst_14219 = (state_14221[2]);var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14221__$1,inst_14219);
} else
{if((state_val_14222 === 4))
{var inst_14150 = (state_14221[7]);var inst_14150__$1 = (state_14221[2]);var inst_14151 = (inst_14150__$1 == null);var state_14221__$1 = (function (){var statearr_14224 = state_14221;(statearr_14224[7] = inst_14150__$1);
return statearr_14224;
})();if(cljs.core.truth_(inst_14151))
{var statearr_14225_14271 = state_14221__$1;(statearr_14225_14271[1] = 5);
} else
{var statearr_14226_14272 = state_14221__$1;(statearr_14226_14272[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 5))
{var inst_14157 = cljs.core.deref.call(null,mults);var inst_14158 = cljs.core.vals.call(null,inst_14157);var inst_14159 = cljs.core.seq.call(null,inst_14158);var inst_14160 = inst_14159;var inst_14161 = null;var inst_14162 = 0;var inst_14163 = 0;var state_14221__$1 = (function (){var statearr_14227 = state_14221;(statearr_14227[8] = inst_14162);
(statearr_14227[9] = inst_14161);
(statearr_14227[10] = inst_14163);
(statearr_14227[11] = inst_14160);
return statearr_14227;
})();var statearr_14228_14273 = state_14221__$1;(statearr_14228_14273[2] = null);
(statearr_14228_14273[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 6))
{var inst_14200 = (state_14221[12]);var inst_14198 = (state_14221[13]);var inst_14150 = (state_14221[7]);var inst_14198__$1 = topic_fn.call(null,inst_14150);var inst_14199 = cljs.core.deref.call(null,mults);var inst_14200__$1 = cljs.core.get.call(null,inst_14199,inst_14198__$1);var state_14221__$1 = (function (){var statearr_14229 = state_14221;(statearr_14229[12] = inst_14200__$1);
(statearr_14229[13] = inst_14198__$1);
return statearr_14229;
})();if(cljs.core.truth_(inst_14200__$1))
{var statearr_14230_14274 = state_14221__$1;(statearr_14230_14274[1] = 19);
} else
{var statearr_14231_14275 = state_14221__$1;(statearr_14231_14275[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 7))
{var inst_14217 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14232_14276 = state_14221__$1;(statearr_14232_14276[2] = inst_14217);
(statearr_14232_14276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 8))
{var inst_14162 = (state_14221[8]);var inst_14163 = (state_14221[10]);var inst_14165 = (inst_14163 < inst_14162);var inst_14166 = inst_14165;var state_14221__$1 = state_14221;if(cljs.core.truth_(inst_14166))
{var statearr_14236_14277 = state_14221__$1;(statearr_14236_14277[1] = 10);
} else
{var statearr_14237_14278 = state_14221__$1;(statearr_14237_14278[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 9))
{var inst_14196 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14238_14279 = state_14221__$1;(statearr_14238_14279[2] = inst_14196);
(statearr_14238_14279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 10))
{var inst_14162 = (state_14221[8]);var inst_14161 = (state_14221[9]);var inst_14163 = (state_14221[10]);var inst_14160 = (state_14221[11]);var inst_14168 = cljs.core._nth.call(null,inst_14161,inst_14163);var inst_14169 = cljs.core.async.muxch_STAR_.call(null,inst_14168);var inst_14170 = cljs.core.async.close_BANG_.call(null,inst_14169);var inst_14171 = (inst_14163 + 1);var tmp14233 = inst_14162;var tmp14234 = inst_14161;var tmp14235 = inst_14160;var inst_14160__$1 = tmp14235;var inst_14161__$1 = tmp14234;var inst_14162__$1 = tmp14233;var inst_14163__$1 = inst_14171;var state_14221__$1 = (function (){var statearr_14239 = state_14221;(statearr_14239[8] = inst_14162__$1);
(statearr_14239[9] = inst_14161__$1);
(statearr_14239[10] = inst_14163__$1);
(statearr_14239[14] = inst_14170);
(statearr_14239[11] = inst_14160__$1);
return statearr_14239;
})();var statearr_14240_14280 = state_14221__$1;(statearr_14240_14280[2] = null);
(statearr_14240_14280[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 11))
{var inst_14174 = (state_14221[15]);var inst_14160 = (state_14221[11]);var inst_14174__$1 = cljs.core.seq.call(null,inst_14160);var state_14221__$1 = (function (){var statearr_14241 = state_14221;(statearr_14241[15] = inst_14174__$1);
return statearr_14241;
})();if(inst_14174__$1)
{var statearr_14242_14281 = state_14221__$1;(statearr_14242_14281[1] = 13);
} else
{var statearr_14243_14282 = state_14221__$1;(statearr_14243_14282[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 12))
{var inst_14194 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14244_14283 = state_14221__$1;(statearr_14244_14283[2] = inst_14194);
(statearr_14244_14283[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 13))
{var inst_14174 = (state_14221[15]);var inst_14176 = cljs.core.chunked_seq_QMARK_.call(null,inst_14174);var state_14221__$1 = state_14221;if(inst_14176)
{var statearr_14245_14284 = state_14221__$1;(statearr_14245_14284[1] = 16);
} else
{var statearr_14246_14285 = state_14221__$1;(statearr_14246_14285[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 14))
{var state_14221__$1 = state_14221;var statearr_14247_14286 = state_14221__$1;(statearr_14247_14286[2] = null);
(statearr_14247_14286[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 15))
{var inst_14192 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14248_14287 = state_14221__$1;(statearr_14248_14287[2] = inst_14192);
(statearr_14248_14287[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 16))
{var inst_14174 = (state_14221[15]);var inst_14178 = cljs.core.chunk_first.call(null,inst_14174);var inst_14179 = cljs.core.chunk_rest.call(null,inst_14174);var inst_14180 = cljs.core.count.call(null,inst_14178);var inst_14160 = inst_14179;var inst_14161 = inst_14178;var inst_14162 = inst_14180;var inst_14163 = 0;var state_14221__$1 = (function (){var statearr_14249 = state_14221;(statearr_14249[8] = inst_14162);
(statearr_14249[9] = inst_14161);
(statearr_14249[10] = inst_14163);
(statearr_14249[11] = inst_14160);
return statearr_14249;
})();var statearr_14250_14288 = state_14221__$1;(statearr_14250_14288[2] = null);
(statearr_14250_14288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 17))
{var inst_14174 = (state_14221[15]);var inst_14183 = cljs.core.first.call(null,inst_14174);var inst_14184 = cljs.core.async.muxch_STAR_.call(null,inst_14183);var inst_14185 = cljs.core.async.close_BANG_.call(null,inst_14184);var inst_14186 = cljs.core.next.call(null,inst_14174);var inst_14160 = inst_14186;var inst_14161 = null;var inst_14162 = 0;var inst_14163 = 0;var state_14221__$1 = (function (){var statearr_14251 = state_14221;(statearr_14251[8] = inst_14162);
(statearr_14251[9] = inst_14161);
(statearr_14251[10] = inst_14163);
(statearr_14251[16] = inst_14185);
(statearr_14251[11] = inst_14160);
return statearr_14251;
})();var statearr_14252_14289 = state_14221__$1;(statearr_14252_14289[2] = null);
(statearr_14252_14289[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 18))
{var inst_14189 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14253_14290 = state_14221__$1;(statearr_14253_14290[2] = inst_14189);
(statearr_14253_14290[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 19))
{var state_14221__$1 = state_14221;var statearr_14254_14291 = state_14221__$1;(statearr_14254_14291[2] = null);
(statearr_14254_14291[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 20))
{var state_14221__$1 = state_14221;var statearr_14255_14292 = state_14221__$1;(statearr_14255_14292[2] = null);
(statearr_14255_14292[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 21))
{var inst_14214 = (state_14221[2]);var state_14221__$1 = (function (){var statearr_14256 = state_14221;(statearr_14256[17] = inst_14214);
return statearr_14256;
})();var statearr_14257_14293 = state_14221__$1;(statearr_14257_14293[2] = null);
(statearr_14257_14293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 22))
{var inst_14211 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14258_14294 = state_14221__$1;(statearr_14258_14294[2] = inst_14211);
(statearr_14258_14294[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 23))
{var inst_14198 = (state_14221[13]);var inst_14202 = (state_14221[2]);var inst_14203 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14198);var state_14221__$1 = (function (){var statearr_14259 = state_14221;(statearr_14259[18] = inst_14202);
return statearr_14259;
})();var statearr_14260_14295 = state_14221__$1;(statearr_14260_14295[2] = inst_14203);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14221__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 24))
{var inst_14200 = (state_14221[12]);var inst_14150 = (state_14221[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14221,23,Object,null,22);var inst_14207 = cljs.core.async.muxch_STAR_.call(null,inst_14200);var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14221__$1,25,inst_14207,inst_14150);
} else
{if((state_val_14222 === 25))
{var inst_14209 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14261_14296 = state_14221__$1;(statearr_14261_14296[2] = inst_14209);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14221__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14265[0] = state_machine__5507__auto__);
(statearr_14265[1] = 1);
return statearr_14265;
});
var state_machine__5507__auto____1 = (function (state_14221){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14221);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14266){if((e14266 instanceof Object))
{var ex__5510__auto__ = e14266;var statearr_14267_14297 = state_14221;(statearr_14267_14297[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14221);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14298 = state_14221;
state_14221 = G__14298;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14221){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14268 = f__5522__auto__.call(null);(statearr_14268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14269);
return statearr_14268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___14435 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14405){var state_val_14406 = (state_14405[1]);if((state_val_14406 === 1))
{var state_14405__$1 = state_14405;var statearr_14407_14436 = state_14405__$1;(statearr_14407_14436[2] = null);
(statearr_14407_14436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 2))
{var inst_14368 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14369 = 0;var state_14405__$1 = (function (){var statearr_14408 = state_14405;(statearr_14408[7] = inst_14369);
(statearr_14408[8] = inst_14368);
return statearr_14408;
})();var statearr_14409_14437 = state_14405__$1;(statearr_14409_14437[2] = null);
(statearr_14409_14437[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 3))
{var inst_14403 = (state_14405[2]);var state_14405__$1 = state_14405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14405__$1,inst_14403);
} else
{if((state_val_14406 === 4))
{var inst_14369 = (state_14405[7]);var inst_14371 = (inst_14369 < cnt);var state_14405__$1 = state_14405;if(cljs.core.truth_(inst_14371))
{var statearr_14410_14438 = state_14405__$1;(statearr_14410_14438[1] = 6);
} else
{var statearr_14411_14439 = state_14405__$1;(statearr_14411_14439[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 5))
{var inst_14389 = (state_14405[2]);var state_14405__$1 = (function (){var statearr_14412 = state_14405;(statearr_14412[9] = inst_14389);
return statearr_14412;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14405__$1,12,dchan);
} else
{if((state_val_14406 === 6))
{var state_14405__$1 = state_14405;var statearr_14413_14440 = state_14405__$1;(statearr_14413_14440[2] = null);
(statearr_14413_14440[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 7))
{var state_14405__$1 = state_14405;var statearr_14414_14441 = state_14405__$1;(statearr_14414_14441[2] = null);
(statearr_14414_14441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 8))
{var inst_14387 = (state_14405[2]);var state_14405__$1 = state_14405;var statearr_14415_14442 = state_14405__$1;(statearr_14415_14442[2] = inst_14387);
(statearr_14415_14442[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 9))
{var inst_14369 = (state_14405[7]);var inst_14382 = (state_14405[2]);var inst_14383 = (inst_14369 + 1);var inst_14369__$1 = inst_14383;var state_14405__$1 = (function (){var statearr_14416 = state_14405;(statearr_14416[7] = inst_14369__$1);
(statearr_14416[10] = inst_14382);
return statearr_14416;
})();var statearr_14417_14443 = state_14405__$1;(statearr_14417_14443[2] = null);
(statearr_14417_14443[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 10))
{var inst_14373 = (state_14405[2]);var inst_14374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14405__$1 = (function (){var statearr_14418 = state_14405;(statearr_14418[11] = inst_14373);
return statearr_14418;
})();var statearr_14419_14444 = state_14405__$1;(statearr_14419_14444[2] = inst_14374);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 11))
{var inst_14369 = (state_14405[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14405,10,Object,null,9);var inst_14378 = chs__$1.call(null,inst_14369);var inst_14379 = done.call(null,inst_14369);var inst_14380 = cljs.core.async.take_BANG_.call(null,inst_14378,inst_14379);var state_14405__$1 = state_14405;var statearr_14420_14445 = state_14405__$1;(statearr_14420_14445[2] = inst_14380);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 12))
{var inst_14391 = (state_14405[12]);var inst_14391__$1 = (state_14405[2]);var inst_14392 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14391__$1);var state_14405__$1 = (function (){var statearr_14421 = state_14405;(statearr_14421[12] = inst_14391__$1);
return statearr_14421;
})();if(cljs.core.truth_(inst_14392))
{var statearr_14422_14446 = state_14405__$1;(statearr_14422_14446[1] = 13);
} else
{var statearr_14423_14447 = state_14405__$1;(statearr_14423_14447[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 13))
{var inst_14394 = cljs.core.async.close_BANG_.call(null,out);var state_14405__$1 = state_14405;var statearr_14424_14448 = state_14405__$1;(statearr_14424_14448[2] = inst_14394);
(statearr_14424_14448[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 14))
{var inst_14391 = (state_14405[12]);var inst_14396 = cljs.core.apply.call(null,f,inst_14391);var state_14405__$1 = state_14405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14405__$1,16,out,inst_14396);
} else
{if((state_val_14406 === 15))
{var inst_14401 = (state_14405[2]);var state_14405__$1 = state_14405;var statearr_14425_14449 = state_14405__$1;(statearr_14425_14449[2] = inst_14401);
(statearr_14425_14449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14406 === 16))
{var inst_14398 = (state_14405[2]);var state_14405__$1 = (function (){var statearr_14426 = state_14405;(statearr_14426[13] = inst_14398);
return statearr_14426;
})();var statearr_14427_14450 = state_14405__$1;(statearr_14427_14450[2] = null);
(statearr_14427_14450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14431[0] = state_machine__5507__auto__);
(statearr_14431[1] = 1);
return statearr_14431;
});
var state_machine__5507__auto____1 = (function (state_14405){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14405);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14432){if((e14432 instanceof Object))
{var ex__5510__auto__ = e14432;var statearr_14433_14451 = state_14405;(statearr_14433_14451[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14452 = state_14405;
state_14405 = G__14452;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14405){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14434 = f__5522__auto__.call(null);(statearr_14434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14435);
return statearr_14434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14560 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14536){var state_val_14537 = (state_14536[1]);if((state_val_14537 === 1))
{var inst_14507 = cljs.core.vec.call(null,chs);var inst_14508 = inst_14507;var state_14536__$1 = (function (){var statearr_14538 = state_14536;(statearr_14538[7] = inst_14508);
return statearr_14538;
})();var statearr_14539_14561 = state_14536__$1;(statearr_14539_14561[2] = null);
(statearr_14539_14561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14537 === 2))
{var inst_14508 = (state_14536[7]);var inst_14510 = cljs.core.count.call(null,inst_14508);var inst_14511 = (inst_14510 > 0);var state_14536__$1 = state_14536;if(cljs.core.truth_(inst_14511))
{var statearr_14540_14562 = state_14536__$1;(statearr_14540_14562[1] = 4);
} else
{var statearr_14541_14563 = state_14536__$1;(statearr_14541_14563[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14537 === 3))
{var inst_14534 = (state_14536[2]);var state_14536__$1 = state_14536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14536__$1,inst_14534);
} else
{if((state_val_14537 === 4))
{var inst_14508 = (state_14536[7]);var state_14536__$1 = state_14536;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14536__$1,7,inst_14508);
} else
{if((state_val_14537 === 5))
{var inst_14530 = cljs.core.async.close_BANG_.call(null,out);var state_14536__$1 = state_14536;var statearr_14542_14564 = state_14536__$1;(statearr_14542_14564[2] = inst_14530);
(statearr_14542_14564[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14537 === 6))
{var inst_14532 = (state_14536[2]);var state_14536__$1 = state_14536;var statearr_14543_14565 = state_14536__$1;(statearr_14543_14565[2] = inst_14532);
(statearr_14543_14565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14537 === 7))
{var inst_14515 = (state_14536[8]);var inst_14516 = (state_14536[9]);var inst_14515__$1 = (state_14536[2]);var inst_14516__$1 = cljs.core.nth.call(null,inst_14515__$1,0,null);var inst_14517 = cljs.core.nth.call(null,inst_14515__$1,1,null);var inst_14518 = (inst_14516__$1 == null);var state_14536__$1 = (function (){var statearr_14544 = state_14536;(statearr_14544[8] = inst_14515__$1);
(statearr_14544[9] = inst_14516__$1);
(statearr_14544[10] = inst_14517);
return statearr_14544;
})();if(cljs.core.truth_(inst_14518))
{var statearr_14545_14566 = state_14536__$1;(statearr_14545_14566[1] = 8);
} else
{var statearr_14546_14567 = state_14536__$1;(statearr_14546_14567[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14537 === 8))
{var inst_14508 = (state_14536[7]);var inst_14515 = (state_14536[8]);var inst_14516 = (state_14536[9]);var inst_14517 = (state_14536[10]);var inst_14520 = (function (){var c = inst_14517;var v = inst_14516;var vec__14513 = inst_14515;var cs = inst_14508;return ((function (c,v,vec__14513,cs,inst_14508,inst_14515,inst_14516,inst_14517,state_val_14537){
return (function (p1__14453_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14453_SHARP_);
});
;})(c,v,vec__14513,cs,inst_14508,inst_14515,inst_14516,inst_14517,state_val_14537))
})();var inst_14521 = cljs.core.filterv.call(null,inst_14520,inst_14508);var inst_14508__$1 = inst_14521;var state_14536__$1 = (function (){var statearr_14547 = state_14536;(statearr_14547[7] = inst_14508__$1);
return statearr_14547;
})();var statearr_14548_14568 = state_14536__$1;(statearr_14548_14568[2] = null);
(statearr_14548_14568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14537 === 9))
{var inst_14516 = (state_14536[9]);var state_14536__$1 = state_14536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14536__$1,11,out,inst_14516);
} else
{if((state_val_14537 === 10))
{var inst_14528 = (state_14536[2]);var state_14536__$1 = state_14536;var statearr_14550_14569 = state_14536__$1;(statearr_14550_14569[2] = inst_14528);
(statearr_14550_14569[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14537 === 11))
{var inst_14508 = (state_14536[7]);var inst_14525 = (state_14536[2]);var tmp14549 = inst_14508;var inst_14508__$1 = tmp14549;var state_14536__$1 = (function (){var statearr_14551 = state_14536;(statearr_14551[11] = inst_14525);
(statearr_14551[7] = inst_14508__$1);
return statearr_14551;
})();var statearr_14552_14570 = state_14536__$1;(statearr_14552_14570[2] = null);
(statearr_14552_14570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14556 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14556[0] = state_machine__5507__auto__);
(statearr_14556[1] = 1);
return statearr_14556;
});
var state_machine__5507__auto____1 = (function (state_14536){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14536);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14557){if((e14557 instanceof Object))
{var ex__5510__auto__ = e14557;var statearr_14558_14571 = state_14536;(statearr_14558_14571[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14572 = state_14536;
state_14536 = G__14572;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14536){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14559 = f__5522__auto__.call(null);(statearr_14559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14560);
return statearr_14559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14642){var state_val_14643 = (state_14642[1]);if((state_val_14643 === 1))
{var inst_14619 = 0;var state_14642__$1 = (function (){var statearr_14644 = state_14642;(statearr_14644[7] = inst_14619);
return statearr_14644;
})();var statearr_14645_14666 = state_14642__$1;(statearr_14645_14666[2] = null);
(statearr_14645_14666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14643 === 2))
{var inst_14619 = (state_14642[7]);var inst_14621 = (inst_14619 < n);var state_14642__$1 = state_14642;if(cljs.core.truth_(inst_14621))
{var statearr_14646_14667 = state_14642__$1;(statearr_14646_14667[1] = 4);
} else
{var statearr_14647_14668 = state_14642__$1;(statearr_14647_14668[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14643 === 3))
{var inst_14639 = (state_14642[2]);var inst_14640 = cljs.core.async.close_BANG_.call(null,out);var state_14642__$1 = (function (){var statearr_14648 = state_14642;(statearr_14648[8] = inst_14639);
return statearr_14648;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14642__$1,inst_14640);
} else
{if((state_val_14643 === 4))
{var state_14642__$1 = state_14642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14642__$1,7,ch);
} else
{if((state_val_14643 === 5))
{var state_14642__$1 = state_14642;var statearr_14649_14669 = state_14642__$1;(statearr_14649_14669[2] = null);
(statearr_14649_14669[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14643 === 6))
{var inst_14637 = (state_14642[2]);var state_14642__$1 = state_14642;var statearr_14650_14670 = state_14642__$1;(statearr_14650_14670[2] = inst_14637);
(statearr_14650_14670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14643 === 7))
{var inst_14624 = (state_14642[9]);var inst_14624__$1 = (state_14642[2]);var inst_14625 = (inst_14624__$1 == null);var inst_14626 = cljs.core.not.call(null,inst_14625);var state_14642__$1 = (function (){var statearr_14651 = state_14642;(statearr_14651[9] = inst_14624__$1);
return statearr_14651;
})();if(inst_14626)
{var statearr_14652_14671 = state_14642__$1;(statearr_14652_14671[1] = 8);
} else
{var statearr_14653_14672 = state_14642__$1;(statearr_14653_14672[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14643 === 8))
{var inst_14624 = (state_14642[9]);var state_14642__$1 = state_14642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14642__$1,11,out,inst_14624);
} else
{if((state_val_14643 === 9))
{var state_14642__$1 = state_14642;var statearr_14654_14673 = state_14642__$1;(statearr_14654_14673[2] = null);
(statearr_14654_14673[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14643 === 10))
{var inst_14634 = (state_14642[2]);var state_14642__$1 = state_14642;var statearr_14655_14674 = state_14642__$1;(statearr_14655_14674[2] = inst_14634);
(statearr_14655_14674[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14643 === 11))
{var inst_14619 = (state_14642[7]);var inst_14629 = (state_14642[2]);var inst_14630 = (inst_14619 + 1);var inst_14619__$1 = inst_14630;var state_14642__$1 = (function (){var statearr_14656 = state_14642;(statearr_14656[7] = inst_14619__$1);
(statearr_14656[10] = inst_14629);
return statearr_14656;
})();var statearr_14657_14675 = state_14642__$1;(statearr_14657_14675[2] = null);
(statearr_14657_14675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14661 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14661[0] = state_machine__5507__auto__);
(statearr_14661[1] = 1);
return statearr_14661;
});
var state_machine__5507__auto____1 = (function (state_14642){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14642);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14662){if((e14662 instanceof Object))
{var ex__5510__auto__ = e14662;var statearr_14663_14676 = state_14642;(statearr_14663_14676[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14677 = state_14642;
state_14642 = G__14677;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14642){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14664 = f__5522__auto__.call(null);(statearr_14664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14665);
return statearr_14664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14774 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14749){var state_val_14750 = (state_14749[1]);if((state_val_14750 === 1))
{var inst_14726 = null;var state_14749__$1 = (function (){var statearr_14751 = state_14749;(statearr_14751[7] = inst_14726);
return statearr_14751;
})();var statearr_14752_14775 = state_14749__$1;(statearr_14752_14775[2] = null);
(statearr_14752_14775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14750 === 2))
{var state_14749__$1 = state_14749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14749__$1,4,ch);
} else
{if((state_val_14750 === 3))
{var inst_14746 = (state_14749[2]);var inst_14747 = cljs.core.async.close_BANG_.call(null,out);var state_14749__$1 = (function (){var statearr_14753 = state_14749;(statearr_14753[8] = inst_14746);
return statearr_14753;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14749__$1,inst_14747);
} else
{if((state_val_14750 === 4))
{var inst_14729 = (state_14749[9]);var inst_14729__$1 = (state_14749[2]);var inst_14730 = (inst_14729__$1 == null);var inst_14731 = cljs.core.not.call(null,inst_14730);var state_14749__$1 = (function (){var statearr_14754 = state_14749;(statearr_14754[9] = inst_14729__$1);
return statearr_14754;
})();if(inst_14731)
{var statearr_14755_14776 = state_14749__$1;(statearr_14755_14776[1] = 5);
} else
{var statearr_14756_14777 = state_14749__$1;(statearr_14756_14777[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14750 === 5))
{var inst_14726 = (state_14749[7]);var inst_14729 = (state_14749[9]);var inst_14733 = cljs.core._EQ_.call(null,inst_14729,inst_14726);var state_14749__$1 = state_14749;if(inst_14733)
{var statearr_14757_14778 = state_14749__$1;(statearr_14757_14778[1] = 8);
} else
{var statearr_14758_14779 = state_14749__$1;(statearr_14758_14779[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14750 === 6))
{var state_14749__$1 = state_14749;var statearr_14760_14780 = state_14749__$1;(statearr_14760_14780[2] = null);
(statearr_14760_14780[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14750 === 7))
{var inst_14744 = (state_14749[2]);var state_14749__$1 = state_14749;var statearr_14761_14781 = state_14749__$1;(statearr_14761_14781[2] = inst_14744);
(statearr_14761_14781[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14750 === 8))
{var inst_14726 = (state_14749[7]);var tmp14759 = inst_14726;var inst_14726__$1 = tmp14759;var state_14749__$1 = (function (){var statearr_14762 = state_14749;(statearr_14762[7] = inst_14726__$1);
return statearr_14762;
})();var statearr_14763_14782 = state_14749__$1;(statearr_14763_14782[2] = null);
(statearr_14763_14782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14750 === 9))
{var inst_14729 = (state_14749[9]);var state_14749__$1 = state_14749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14749__$1,11,out,inst_14729);
} else
{if((state_val_14750 === 10))
{var inst_14741 = (state_14749[2]);var state_14749__$1 = state_14749;var statearr_14764_14783 = state_14749__$1;(statearr_14764_14783[2] = inst_14741);
(statearr_14764_14783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14750 === 11))
{var inst_14729 = (state_14749[9]);var inst_14738 = (state_14749[2]);var inst_14726 = inst_14729;var state_14749__$1 = (function (){var statearr_14765 = state_14749;(statearr_14765[10] = inst_14738);
(statearr_14765[7] = inst_14726);
return statearr_14765;
})();var statearr_14766_14784 = state_14749__$1;(statearr_14766_14784[2] = null);
(statearr_14766_14784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14770 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14770[0] = state_machine__5507__auto__);
(statearr_14770[1] = 1);
return statearr_14770;
});
var state_machine__5507__auto____1 = (function (state_14749){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14771){if((e14771 instanceof Object))
{var ex__5510__auto__ = e14771;var statearr_14772_14785 = state_14749;(statearr_14772_14785[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14786 = state_14749;
state_14749 = G__14786;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14749){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14773 = f__5522__auto__.call(null);(statearr_14773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14774);
return statearr_14773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14921 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14891){var state_val_14892 = (state_14891[1]);if((state_val_14892 === 1))
{var inst_14854 = (new Array(n));var inst_14855 = inst_14854;var inst_14856 = 0;var state_14891__$1 = (function (){var statearr_14893 = state_14891;(statearr_14893[7] = inst_14855);
(statearr_14893[8] = inst_14856);
return statearr_14893;
})();var statearr_14894_14922 = state_14891__$1;(statearr_14894_14922[2] = null);
(statearr_14894_14922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 2))
{var state_14891__$1 = state_14891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14891__$1,4,ch);
} else
{if((state_val_14892 === 3))
{var inst_14889 = (state_14891[2]);var state_14891__$1 = state_14891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14891__$1,inst_14889);
} else
{if((state_val_14892 === 4))
{var inst_14859 = (state_14891[9]);var inst_14859__$1 = (state_14891[2]);var inst_14860 = (inst_14859__$1 == null);var inst_14861 = cljs.core.not.call(null,inst_14860);var state_14891__$1 = (function (){var statearr_14895 = state_14891;(statearr_14895[9] = inst_14859__$1);
return statearr_14895;
})();if(inst_14861)
{var statearr_14896_14923 = state_14891__$1;(statearr_14896_14923[1] = 5);
} else
{var statearr_14897_14924 = state_14891__$1;(statearr_14897_14924[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 5))
{var inst_14859 = (state_14891[9]);var inst_14855 = (state_14891[7]);var inst_14864 = (state_14891[10]);var inst_14856 = (state_14891[8]);var inst_14863 = (inst_14855[inst_14856] = inst_14859);var inst_14864__$1 = (inst_14856 + 1);var inst_14865 = (inst_14864__$1 < n);var state_14891__$1 = (function (){var statearr_14898 = state_14891;(statearr_14898[10] = inst_14864__$1);
(statearr_14898[11] = inst_14863);
return statearr_14898;
})();if(cljs.core.truth_(inst_14865))
{var statearr_14899_14925 = state_14891__$1;(statearr_14899_14925[1] = 8);
} else
{var statearr_14900_14926 = state_14891__$1;(statearr_14900_14926[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 6))
{var inst_14856 = (state_14891[8]);var inst_14877 = (inst_14856 > 0);var state_14891__$1 = state_14891;if(cljs.core.truth_(inst_14877))
{var statearr_14902_14927 = state_14891__$1;(statearr_14902_14927[1] = 12);
} else
{var statearr_14903_14928 = state_14891__$1;(statearr_14903_14928[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 7))
{var inst_14887 = (state_14891[2]);var state_14891__$1 = state_14891;var statearr_14904_14929 = state_14891__$1;(statearr_14904_14929[2] = inst_14887);
(statearr_14904_14929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 8))
{var inst_14855 = (state_14891[7]);var inst_14864 = (state_14891[10]);var tmp14901 = inst_14855;var inst_14855__$1 = tmp14901;var inst_14856 = inst_14864;var state_14891__$1 = (function (){var statearr_14905 = state_14891;(statearr_14905[7] = inst_14855__$1);
(statearr_14905[8] = inst_14856);
return statearr_14905;
})();var statearr_14906_14930 = state_14891__$1;(statearr_14906_14930[2] = null);
(statearr_14906_14930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 9))
{var inst_14855 = (state_14891[7]);var inst_14869 = cljs.core.vec.call(null,inst_14855);var state_14891__$1 = state_14891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14891__$1,11,out,inst_14869);
} else
{if((state_val_14892 === 10))
{var inst_14875 = (state_14891[2]);var state_14891__$1 = state_14891;var statearr_14907_14931 = state_14891__$1;(statearr_14907_14931[2] = inst_14875);
(statearr_14907_14931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 11))
{var inst_14871 = (state_14891[2]);var inst_14872 = (new Array(n));var inst_14855 = inst_14872;var inst_14856 = 0;var state_14891__$1 = (function (){var statearr_14908 = state_14891;(statearr_14908[12] = inst_14871);
(statearr_14908[7] = inst_14855);
(statearr_14908[8] = inst_14856);
return statearr_14908;
})();var statearr_14909_14932 = state_14891__$1;(statearr_14909_14932[2] = null);
(statearr_14909_14932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 12))
{var inst_14855 = (state_14891[7]);var inst_14879 = cljs.core.vec.call(null,inst_14855);var state_14891__$1 = state_14891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14891__$1,15,out,inst_14879);
} else
{if((state_val_14892 === 13))
{var state_14891__$1 = state_14891;var statearr_14910_14933 = state_14891__$1;(statearr_14910_14933[2] = null);
(statearr_14910_14933[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 14))
{var inst_14884 = (state_14891[2]);var inst_14885 = cljs.core.async.close_BANG_.call(null,out);var state_14891__$1 = (function (){var statearr_14911 = state_14891;(statearr_14911[13] = inst_14884);
return statearr_14911;
})();var statearr_14912_14934 = state_14891__$1;(statearr_14912_14934[2] = inst_14885);
(statearr_14912_14934[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14892 === 15))
{var inst_14881 = (state_14891[2]);var state_14891__$1 = state_14891;var statearr_14913_14935 = state_14891__$1;(statearr_14913_14935[2] = inst_14881);
(statearr_14913_14935[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14917[0] = state_machine__5507__auto__);
(statearr_14917[1] = 1);
return statearr_14917;
});
var state_machine__5507__auto____1 = (function (state_14891){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14918){if((e14918 instanceof Object))
{var ex__5510__auto__ = e14918;var statearr_14919_14936 = state_14891;(statearr_14919_14936[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14937 = state_14891;
state_14891 = G__14937;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14891){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14920 = f__5522__auto__.call(null);(statearr_14920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14921);
return statearr_14920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15080 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15050){var state_val_15051 = (state_15050[1]);if((state_val_15051 === 1))
{var inst_15009 = [];var inst_15010 = inst_15009;var inst_15011 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15050__$1 = (function (){var statearr_15052 = state_15050;(statearr_15052[7] = inst_15011);
(statearr_15052[8] = inst_15010);
return statearr_15052;
})();var statearr_15053_15081 = state_15050__$1;(statearr_15053_15081[2] = null);
(statearr_15053_15081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 2))
{var state_15050__$1 = state_15050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15050__$1,4,ch);
} else
{if((state_val_15051 === 3))
{var inst_15048 = (state_15050[2]);var state_15050__$1 = state_15050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15050__$1,inst_15048);
} else
{if((state_val_15051 === 4))
{var inst_15014 = (state_15050[9]);var inst_15014__$1 = (state_15050[2]);var inst_15015 = (inst_15014__$1 == null);var inst_15016 = cljs.core.not.call(null,inst_15015);var state_15050__$1 = (function (){var statearr_15054 = state_15050;(statearr_15054[9] = inst_15014__$1);
return statearr_15054;
})();if(inst_15016)
{var statearr_15055_15082 = state_15050__$1;(statearr_15055_15082[1] = 5);
} else
{var statearr_15056_15083 = state_15050__$1;(statearr_15056_15083[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 5))
{var inst_15014 = (state_15050[9]);var inst_15011 = (state_15050[7]);var inst_15018 = (state_15050[10]);var inst_15018__$1 = f.call(null,inst_15014);var inst_15019 = cljs.core._EQ_.call(null,inst_15018__$1,inst_15011);var inst_15020 = cljs.core.keyword_identical_QMARK_.call(null,inst_15011,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15021 = (inst_15019) || (inst_15020);var state_15050__$1 = (function (){var statearr_15057 = state_15050;(statearr_15057[10] = inst_15018__$1);
return statearr_15057;
})();if(cljs.core.truth_(inst_15021))
{var statearr_15058_15084 = state_15050__$1;(statearr_15058_15084[1] = 8);
} else
{var statearr_15059_15085 = state_15050__$1;(statearr_15059_15085[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 6))
{var inst_15010 = (state_15050[8]);var inst_15035 = inst_15010.length;var inst_15036 = (inst_15035 > 0);var state_15050__$1 = state_15050;if(cljs.core.truth_(inst_15036))
{var statearr_15061_15086 = state_15050__$1;(statearr_15061_15086[1] = 12);
} else
{var statearr_15062_15087 = state_15050__$1;(statearr_15062_15087[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 7))
{var inst_15046 = (state_15050[2]);var state_15050__$1 = state_15050;var statearr_15063_15088 = state_15050__$1;(statearr_15063_15088[2] = inst_15046);
(statearr_15063_15088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 8))
{var inst_15014 = (state_15050[9]);var inst_15010 = (state_15050[8]);var inst_15018 = (state_15050[10]);var inst_15023 = inst_15010.push(inst_15014);var tmp15060 = inst_15010;var inst_15010__$1 = tmp15060;var inst_15011 = inst_15018;var state_15050__$1 = (function (){var statearr_15064 = state_15050;(statearr_15064[7] = inst_15011);
(statearr_15064[8] = inst_15010__$1);
(statearr_15064[11] = inst_15023);
return statearr_15064;
})();var statearr_15065_15089 = state_15050__$1;(statearr_15065_15089[2] = null);
(statearr_15065_15089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 9))
{var inst_15010 = (state_15050[8]);var inst_15026 = cljs.core.vec.call(null,inst_15010);var state_15050__$1 = state_15050;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15050__$1,11,out,inst_15026);
} else
{if((state_val_15051 === 10))
{var inst_15033 = (state_15050[2]);var state_15050__$1 = state_15050;var statearr_15066_15090 = state_15050__$1;(statearr_15066_15090[2] = inst_15033);
(statearr_15066_15090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 11))
{var inst_15014 = (state_15050[9]);var inst_15018 = (state_15050[10]);var inst_15028 = (state_15050[2]);var inst_15029 = [];var inst_15030 = inst_15029.push(inst_15014);var inst_15010 = inst_15029;var inst_15011 = inst_15018;var state_15050__$1 = (function (){var statearr_15067 = state_15050;(statearr_15067[7] = inst_15011);
(statearr_15067[12] = inst_15028);
(statearr_15067[8] = inst_15010);
(statearr_15067[13] = inst_15030);
return statearr_15067;
})();var statearr_15068_15091 = state_15050__$1;(statearr_15068_15091[2] = null);
(statearr_15068_15091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 12))
{var inst_15010 = (state_15050[8]);var inst_15038 = cljs.core.vec.call(null,inst_15010);var state_15050__$1 = state_15050;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15050__$1,15,out,inst_15038);
} else
{if((state_val_15051 === 13))
{var state_15050__$1 = state_15050;var statearr_15069_15092 = state_15050__$1;(statearr_15069_15092[2] = null);
(statearr_15069_15092[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 14))
{var inst_15043 = (state_15050[2]);var inst_15044 = cljs.core.async.close_BANG_.call(null,out);var state_15050__$1 = (function (){var statearr_15070 = state_15050;(statearr_15070[14] = inst_15043);
return statearr_15070;
})();var statearr_15071_15093 = state_15050__$1;(statearr_15071_15093[2] = inst_15044);
(statearr_15071_15093[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15051 === 15))
{var inst_15040 = (state_15050[2]);var state_15050__$1 = state_15050;var statearr_15072_15094 = state_15050__$1;(statearr_15072_15094[2] = inst_15040);
(statearr_15072_15094[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15076[0] = state_machine__5507__auto__);
(statearr_15076[1] = 1);
return statearr_15076;
});
var state_machine__5507__auto____1 = (function (state_15050){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15050);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15077){if((e15077 instanceof Object))
{var ex__5510__auto__ = e15077;var statearr_15078_15095 = state_15050;(statearr_15078_15095[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15050);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15096 = state_15050;
state_15050 = G__15096;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15050){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15079 = f__5522__auto__.call(null);(statearr_15079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15080);
return statearr_15079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map