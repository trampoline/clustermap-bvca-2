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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31086 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31086 = (function (f,fn_handler,meta31087){
this.f = f;
this.fn_handler = fn_handler;
this.meta31087 = meta31087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31086.cljs$lang$type = true;
cljs.core.async.t31086.cljs$lang$ctorStr = "cljs.core.async/t31086";
cljs.core.async.t31086.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31086");
});
cljs.core.async.t31086.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31088){var self__ = this;
var _31088__$1 = this;return self__.meta31087;
});
cljs.core.async.t31086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31088,meta31087__$1){var self__ = this;
var _31088__$1 = this;return (new cljs.core.async.t31086(self__.f,self__.fn_handler,meta31087__$1));
});
cljs.core.async.__GT_t31086 = (function __GT_t31086(f__$1,fn_handler__$1,meta31087){return (new cljs.core.async.t31086(f__$1,fn_handler__$1,meta31087));
});
}
return (new cljs.core.async.t31086(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31090 = buff;if(G__31090)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__31090.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31090.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31090);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31090);
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
{var val_31091 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31091);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31091);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___31092 = n;var x_31093 = 0;while(true){
if((x_31093 < n__4248__auto___31092))
{(a[x_31093] = 0);
{
var G__31094 = (x_31093 + 1);
x_31093 = G__31094;
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
var G__31095 = (i + 1);
i = G__31095;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31099 = (function (flag,alt_flag,meta31100){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31100 = meta31100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31099.cljs$lang$type = true;
cljs.core.async.t31099.cljs$lang$ctorStr = "cljs.core.async/t31099";
cljs.core.async.t31099.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31099");
});
cljs.core.async.t31099.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31101){var self__ = this;
var _31101__$1 = this;return self__.meta31100;
});
cljs.core.async.t31099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31101,meta31100__$1){var self__ = this;
var _31101__$1 = this;return (new cljs.core.async.t31099(self__.flag,self__.alt_flag,meta31100__$1));
});
cljs.core.async.__GT_t31099 = (function __GT_t31099(flag__$1,alt_flag__$1,meta31100){return (new cljs.core.async.t31099(flag__$1,alt_flag__$1,meta31100));
});
}
return (new cljs.core.async.t31099(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31105 = (function (cb,flag,alt_handler,meta31106){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31106 = meta31106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31105.cljs$lang$type = true;
cljs.core.async.t31105.cljs$lang$ctorStr = "cljs.core.async/t31105";
cljs.core.async.t31105.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31105");
});
cljs.core.async.t31105.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31107){var self__ = this;
var _31107__$1 = this;return self__.meta31106;
});
cljs.core.async.t31105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31107,meta31106__$1){var self__ = this;
var _31107__$1 = this;return (new cljs.core.async.t31105(self__.cb,self__.flag,self__.alt_handler,meta31106__$1));
});
cljs.core.async.__GT_t31105 = (function __GT_t31105(cb__$1,flag__$1,alt_handler__$1,meta31106){return (new cljs.core.async.t31105(cb__$1,flag__$1,alt_handler__$1,meta31106));
});
}
return (new cljs.core.async.t31105(cb,flag,alt_handler,null));
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
return (function (p1__31108_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31108_SHARP_,port], null));
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
var G__31109 = (i + 1);
i = G__31109;
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
var alts_BANG___delegate = function (ports,p__31110){var map__31112 = p__31110;var map__31112__$1 = ((cljs.core.seq_QMARK_.call(null,map__31112))?cljs.core.apply.call(null,cljs.core.hash_map,map__31112):map__31112);var opts = map__31112__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31110 = null;if (arguments.length > 1) {
  p__31110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31110);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31113){
var ports = cljs.core.first(arglist__31113);
var p__31110 = cljs.core.rest(arglist__31113);
return alts_BANG___delegate(ports,p__31110);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31121 = (function (ch,f,map_LT_,meta31122){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31122 = meta31122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31121.cljs$lang$type = true;
cljs.core.async.t31121.cljs$lang$ctorStr = "cljs.core.async/t31121";
cljs.core.async.t31121.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31121");
});
cljs.core.async.t31121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31124 = (function (fn1,_,meta31122,ch,f,map_LT_,meta31125){
this.fn1 = fn1;
this._ = _;
this.meta31122 = meta31122;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31125 = meta31125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31124.cljs$lang$type = true;
cljs.core.async.t31124.cljs$lang$ctorStr = "cljs.core.async/t31124";
cljs.core.async.t31124.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31124");
});
cljs.core.async.t31124.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31124.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31114_SHARP_){return f1.call(null,(((p1__31114_SHARP_ == null))?null:self__.f.call(null,p1__31114_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31126){var self__ = this;
var _31126__$1 = this;return self__.meta31125;
});
cljs.core.async.t31124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31126,meta31125__$1){var self__ = this;
var _31126__$1 = this;return (new cljs.core.async.t31124(self__.fn1,self__._,self__.meta31122,self__.ch,self__.f,self__.map_LT_,meta31125__$1));
});
cljs.core.async.__GT_t31124 = (function __GT_t31124(fn1__$1,___$2,meta31122__$1,ch__$2,f__$2,map_LT___$2,meta31125){return (new cljs.core.async.t31124(fn1__$1,___$2,meta31122__$1,ch__$2,f__$2,map_LT___$2,meta31125));
});
}
return (new cljs.core.async.t31124(fn1,___$1,self__.meta31122,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t31121.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31123){var self__ = this;
var _31123__$1 = this;return self__.meta31122;
});
cljs.core.async.t31121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31123,meta31122__$1){var self__ = this;
var _31123__$1 = this;return (new cljs.core.async.t31121(self__.ch,self__.f,self__.map_LT_,meta31122__$1));
});
cljs.core.async.__GT_t31121 = (function __GT_t31121(ch__$1,f__$1,map_LT___$1,meta31122){return (new cljs.core.async.t31121(ch__$1,f__$1,map_LT___$1,meta31122));
});
}
return (new cljs.core.async.t31121(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31130 = (function (ch,f,map_GT_,meta31131){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31131 = meta31131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31130.cljs$lang$type = true;
cljs.core.async.t31130.cljs$lang$ctorStr = "cljs.core.async/t31130";
cljs.core.async.t31130.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31130");
});
cljs.core.async.t31130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31130.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31132){var self__ = this;
var _31132__$1 = this;return self__.meta31131;
});
cljs.core.async.t31130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31132,meta31131__$1){var self__ = this;
var _31132__$1 = this;return (new cljs.core.async.t31130(self__.ch,self__.f,self__.map_GT_,meta31131__$1));
});
cljs.core.async.__GT_t31130 = (function __GT_t31130(ch__$1,f__$1,map_GT___$1,meta31131){return (new cljs.core.async.t31130(ch__$1,f__$1,map_GT___$1,meta31131));
});
}
return (new cljs.core.async.t31130(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31136 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31136 = (function (ch,p,filter_GT_,meta31137){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31137 = meta31137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31136.cljs$lang$type = true;
cljs.core.async.t31136.cljs$lang$ctorStr = "cljs.core.async/t31136";
cljs.core.async.t31136.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31136");
});
cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31138){var self__ = this;
var _31138__$1 = this;return self__.meta31137;
});
cljs.core.async.t31136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31138,meta31137__$1){var self__ = this;
var _31138__$1 = this;return (new cljs.core.async.t31136(self__.ch,self__.p,self__.filter_GT_,meta31137__$1));
});
cljs.core.async.__GT_t31136 = (function __GT_t31136(ch__$1,p__$1,filter_GT___$1,meta31137){return (new cljs.core.async.t31136(ch__$1,p__$1,filter_GT___$1,meta31137));
});
}
return (new cljs.core.async.t31136(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31221 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31200){var state_val_31201 = (state_31200[1]);if((state_val_31201 === 1))
{var state_31200__$1 = state_31200;var statearr_31202_31222 = state_31200__$1;(statearr_31202_31222[2] = null);
(statearr_31202_31222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31201 === 2))
{var state_31200__$1 = state_31200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31200__$1,4,ch);
} else
{if((state_val_31201 === 3))
{var inst_31198 = (state_31200[2]);var state_31200__$1 = state_31200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31200__$1,inst_31198);
} else
{if((state_val_31201 === 4))
{var inst_31182 = (state_31200[7]);var inst_31182__$1 = (state_31200[2]);var inst_31183 = (inst_31182__$1 == null);var state_31200__$1 = (function (){var statearr_31203 = state_31200;(statearr_31203[7] = inst_31182__$1);
return statearr_31203;
})();if(cljs.core.truth_(inst_31183))
{var statearr_31204_31223 = state_31200__$1;(statearr_31204_31223[1] = 5);
} else
{var statearr_31205_31224 = state_31200__$1;(statearr_31205_31224[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31201 === 5))
{var inst_31185 = cljs.core.async.close_BANG_.call(null,out);var state_31200__$1 = state_31200;var statearr_31206_31225 = state_31200__$1;(statearr_31206_31225[2] = inst_31185);
(statearr_31206_31225[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31201 === 6))
{var inst_31182 = (state_31200[7]);var inst_31187 = p.call(null,inst_31182);var state_31200__$1 = state_31200;if(cljs.core.truth_(inst_31187))
{var statearr_31207_31226 = state_31200__$1;(statearr_31207_31226[1] = 8);
} else
{var statearr_31208_31227 = state_31200__$1;(statearr_31208_31227[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31201 === 7))
{var inst_31196 = (state_31200[2]);var state_31200__$1 = state_31200;var statearr_31209_31228 = state_31200__$1;(statearr_31209_31228[2] = inst_31196);
(statearr_31209_31228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31201 === 8))
{var inst_31182 = (state_31200[7]);var state_31200__$1 = state_31200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31200__$1,11,out,inst_31182);
} else
{if((state_val_31201 === 9))
{var state_31200__$1 = state_31200;var statearr_31210_31229 = state_31200__$1;(statearr_31210_31229[2] = null);
(statearr_31210_31229[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31201 === 10))
{var inst_31193 = (state_31200[2]);var state_31200__$1 = (function (){var statearr_31211 = state_31200;(statearr_31211[8] = inst_31193);
return statearr_31211;
})();var statearr_31212_31230 = state_31200__$1;(statearr_31212_31230[2] = null);
(statearr_31212_31230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31201 === 11))
{var inst_31190 = (state_31200[2]);var state_31200__$1 = state_31200;var statearr_31213_31231 = state_31200__$1;(statearr_31213_31231[2] = inst_31190);
(statearr_31213_31231[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_31217 = [null,null,null,null,null,null,null,null,null];(statearr_31217[0] = state_machine__5507__auto__);
(statearr_31217[1] = 1);
return statearr_31217;
});
var state_machine__5507__auto____1 = (function (state_31200){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31200);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31218){if((e31218 instanceof Object))
{var ex__5510__auto__ = e31218;var statearr_31219_31232 = state_31200;(statearr_31219_31232[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31233 = state_31200;
state_31200 = G__31233;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31200){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31220 = f__5522__auto__.call(null);(statearr_31220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31221);
return statearr_31220;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31385){var state_val_31386 = (state_31385[1]);if((state_val_31386 === 1))
{var state_31385__$1 = state_31385;var statearr_31387_31424 = state_31385__$1;(statearr_31387_31424[2] = null);
(statearr_31387_31424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 2))
{var state_31385__$1 = state_31385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31385__$1,4,in$);
} else
{if((state_val_31386 === 3))
{var inst_31383 = (state_31385[2]);var state_31385__$1 = state_31385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31385__$1,inst_31383);
} else
{if((state_val_31386 === 4))
{var inst_31331 = (state_31385[7]);var inst_31331__$1 = (state_31385[2]);var inst_31332 = (inst_31331__$1 == null);var state_31385__$1 = (function (){var statearr_31388 = state_31385;(statearr_31388[7] = inst_31331__$1);
return statearr_31388;
})();if(cljs.core.truth_(inst_31332))
{var statearr_31389_31425 = state_31385__$1;(statearr_31389_31425[1] = 5);
} else
{var statearr_31390_31426 = state_31385__$1;(statearr_31390_31426[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 5))
{var inst_31334 = cljs.core.async.close_BANG_.call(null,out);var state_31385__$1 = state_31385;var statearr_31391_31427 = state_31385__$1;(statearr_31391_31427[2] = inst_31334);
(statearr_31391_31427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 6))
{var inst_31331 = (state_31385[7]);var inst_31336 = f.call(null,inst_31331);var inst_31341 = cljs.core.seq.call(null,inst_31336);var inst_31342 = inst_31341;var inst_31343 = null;var inst_31344 = 0;var inst_31345 = 0;var state_31385__$1 = (function (){var statearr_31392 = state_31385;(statearr_31392[8] = inst_31343);
(statearr_31392[9] = inst_31342);
(statearr_31392[10] = inst_31344);
(statearr_31392[11] = inst_31345);
return statearr_31392;
})();var statearr_31393_31428 = state_31385__$1;(statearr_31393_31428[2] = null);
(statearr_31393_31428[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 7))
{var inst_31381 = (state_31385[2]);var state_31385__$1 = state_31385;var statearr_31394_31429 = state_31385__$1;(statearr_31394_31429[2] = inst_31381);
(statearr_31394_31429[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 8))
{var inst_31344 = (state_31385[10]);var inst_31345 = (state_31385[11]);var inst_31347 = (inst_31345 < inst_31344);var inst_31348 = inst_31347;var state_31385__$1 = state_31385;if(cljs.core.truth_(inst_31348))
{var statearr_31395_31430 = state_31385__$1;(statearr_31395_31430[1] = 10);
} else
{var statearr_31396_31431 = state_31385__$1;(statearr_31396_31431[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 9))
{var inst_31378 = (state_31385[2]);var state_31385__$1 = (function (){var statearr_31397 = state_31385;(statearr_31397[12] = inst_31378);
return statearr_31397;
})();var statearr_31398_31432 = state_31385__$1;(statearr_31398_31432[2] = null);
(statearr_31398_31432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 10))
{var inst_31343 = (state_31385[8]);var inst_31345 = (state_31385[11]);var inst_31350 = cljs.core._nth.call(null,inst_31343,inst_31345);var state_31385__$1 = state_31385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31385__$1,13,out,inst_31350);
} else
{if((state_val_31386 === 11))
{var inst_31342 = (state_31385[9]);var inst_31356 = (state_31385[13]);var inst_31356__$1 = cljs.core.seq.call(null,inst_31342);var state_31385__$1 = (function (){var statearr_31402 = state_31385;(statearr_31402[13] = inst_31356__$1);
return statearr_31402;
})();if(inst_31356__$1)
{var statearr_31403_31433 = state_31385__$1;(statearr_31403_31433[1] = 14);
} else
{var statearr_31404_31434 = state_31385__$1;(statearr_31404_31434[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 12))
{var inst_31376 = (state_31385[2]);var state_31385__$1 = state_31385;var statearr_31405_31435 = state_31385__$1;(statearr_31405_31435[2] = inst_31376);
(statearr_31405_31435[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 13))
{var inst_31343 = (state_31385[8]);var inst_31342 = (state_31385[9]);var inst_31344 = (state_31385[10]);var inst_31345 = (state_31385[11]);var inst_31352 = (state_31385[2]);var inst_31353 = (inst_31345 + 1);var tmp31399 = inst_31343;var tmp31400 = inst_31342;var tmp31401 = inst_31344;var inst_31342__$1 = tmp31400;var inst_31343__$1 = tmp31399;var inst_31344__$1 = tmp31401;var inst_31345__$1 = inst_31353;var state_31385__$1 = (function (){var statearr_31406 = state_31385;(statearr_31406[8] = inst_31343__$1);
(statearr_31406[9] = inst_31342__$1);
(statearr_31406[10] = inst_31344__$1);
(statearr_31406[11] = inst_31345__$1);
(statearr_31406[14] = inst_31352);
return statearr_31406;
})();var statearr_31407_31436 = state_31385__$1;(statearr_31407_31436[2] = null);
(statearr_31407_31436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 14))
{var inst_31356 = (state_31385[13]);var inst_31358 = cljs.core.chunked_seq_QMARK_.call(null,inst_31356);var state_31385__$1 = state_31385;if(inst_31358)
{var statearr_31408_31437 = state_31385__$1;(statearr_31408_31437[1] = 17);
} else
{var statearr_31409_31438 = state_31385__$1;(statearr_31409_31438[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 15))
{var state_31385__$1 = state_31385;var statearr_31410_31439 = state_31385__$1;(statearr_31410_31439[2] = null);
(statearr_31410_31439[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 16))
{var inst_31374 = (state_31385[2]);var state_31385__$1 = state_31385;var statearr_31411_31440 = state_31385__$1;(statearr_31411_31440[2] = inst_31374);
(statearr_31411_31440[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 17))
{var inst_31356 = (state_31385[13]);var inst_31360 = cljs.core.chunk_first.call(null,inst_31356);var inst_31361 = cljs.core.chunk_rest.call(null,inst_31356);var inst_31362 = cljs.core.count.call(null,inst_31360);var inst_31342 = inst_31361;var inst_31343 = inst_31360;var inst_31344 = inst_31362;var inst_31345 = 0;var state_31385__$1 = (function (){var statearr_31412 = state_31385;(statearr_31412[8] = inst_31343);
(statearr_31412[9] = inst_31342);
(statearr_31412[10] = inst_31344);
(statearr_31412[11] = inst_31345);
return statearr_31412;
})();var statearr_31413_31441 = state_31385__$1;(statearr_31413_31441[2] = null);
(statearr_31413_31441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 18))
{var inst_31356 = (state_31385[13]);var inst_31365 = cljs.core.first.call(null,inst_31356);var state_31385__$1 = state_31385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31385__$1,20,out,inst_31365);
} else
{if((state_val_31386 === 19))
{var inst_31371 = (state_31385[2]);var state_31385__$1 = state_31385;var statearr_31414_31442 = state_31385__$1;(statearr_31414_31442[2] = inst_31371);
(statearr_31414_31442[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31386 === 20))
{var inst_31356 = (state_31385[13]);var inst_31367 = (state_31385[2]);var inst_31368 = cljs.core.next.call(null,inst_31356);var inst_31342 = inst_31368;var inst_31343 = null;var inst_31344 = 0;var inst_31345 = 0;var state_31385__$1 = (function (){var statearr_31415 = state_31385;(statearr_31415[8] = inst_31343);
(statearr_31415[9] = inst_31342);
(statearr_31415[15] = inst_31367);
(statearr_31415[10] = inst_31344);
(statearr_31415[11] = inst_31345);
return statearr_31415;
})();var statearr_31416_31443 = state_31385__$1;(statearr_31416_31443[2] = null);
(statearr_31416_31443[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_31420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31420[0] = state_machine__5507__auto__);
(statearr_31420[1] = 1);
return statearr_31420;
});
var state_machine__5507__auto____1 = (function (state_31385){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31385);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31421){if((e31421 instanceof Object))
{var ex__5510__auto__ = e31421;var statearr_31422_31444 = state_31385;(statearr_31422_31444[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31385);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31445 = state_31385;
state_31385 = G__31445;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31385){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31423 = f__5522__auto__.call(null);(statearr_31423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31423;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___31526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31505){var state_val_31506 = (state_31505[1]);if((state_val_31506 === 1))
{var state_31505__$1 = state_31505;var statearr_31507_31527 = state_31505__$1;(statearr_31507_31527[2] = null);
(statearr_31507_31527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31506 === 2))
{var state_31505__$1 = state_31505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31505__$1,4,from);
} else
{if((state_val_31506 === 3))
{var inst_31503 = (state_31505[2]);var state_31505__$1 = state_31505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31505__$1,inst_31503);
} else
{if((state_val_31506 === 4))
{var inst_31488 = (state_31505[7]);var inst_31488__$1 = (state_31505[2]);var inst_31489 = (inst_31488__$1 == null);var state_31505__$1 = (function (){var statearr_31508 = state_31505;(statearr_31508[7] = inst_31488__$1);
return statearr_31508;
})();if(cljs.core.truth_(inst_31489))
{var statearr_31509_31528 = state_31505__$1;(statearr_31509_31528[1] = 5);
} else
{var statearr_31510_31529 = state_31505__$1;(statearr_31510_31529[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31506 === 5))
{var state_31505__$1 = state_31505;if(cljs.core.truth_(close_QMARK_))
{var statearr_31511_31530 = state_31505__$1;(statearr_31511_31530[1] = 8);
} else
{var statearr_31512_31531 = state_31505__$1;(statearr_31512_31531[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31506 === 6))
{var inst_31488 = (state_31505[7]);var state_31505__$1 = state_31505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31505__$1,11,to,inst_31488);
} else
{if((state_val_31506 === 7))
{var inst_31501 = (state_31505[2]);var state_31505__$1 = state_31505;var statearr_31513_31532 = state_31505__$1;(statearr_31513_31532[2] = inst_31501);
(statearr_31513_31532[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31506 === 8))
{var inst_31492 = cljs.core.async.close_BANG_.call(null,to);var state_31505__$1 = state_31505;var statearr_31514_31533 = state_31505__$1;(statearr_31514_31533[2] = inst_31492);
(statearr_31514_31533[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31506 === 9))
{var state_31505__$1 = state_31505;var statearr_31515_31534 = state_31505__$1;(statearr_31515_31534[2] = null);
(statearr_31515_31534[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31506 === 10))
{var inst_31495 = (state_31505[2]);var state_31505__$1 = state_31505;var statearr_31516_31535 = state_31505__$1;(statearr_31516_31535[2] = inst_31495);
(statearr_31516_31535[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31506 === 11))
{var inst_31498 = (state_31505[2]);var state_31505__$1 = (function (){var statearr_31517 = state_31505;(statearr_31517[8] = inst_31498);
return statearr_31517;
})();var statearr_31518_31536 = state_31505__$1;(statearr_31518_31536[2] = null);
(statearr_31518_31536[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31522 = [null,null,null,null,null,null,null,null,null];(statearr_31522[0] = state_machine__5507__auto__);
(statearr_31522[1] = 1);
return statearr_31522;
});
var state_machine__5507__auto____1 = (function (state_31505){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31505);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31523){if((e31523 instanceof Object))
{var ex__5510__auto__ = e31523;var statearr_31524_31537 = state_31505;(statearr_31524_31537[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31505);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31538 = state_31505;
state_31505 = G__31538;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31505){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31525 = f__5522__auto__.call(null);(statearr_31525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31526);
return statearr_31525;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___31625 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31603){var state_val_31604 = (state_31603[1]);if((state_val_31604 === 1))
{var state_31603__$1 = state_31603;var statearr_31605_31626 = state_31603__$1;(statearr_31605_31626[2] = null);
(statearr_31605_31626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31604 === 2))
{var state_31603__$1 = state_31603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31603__$1,4,ch);
} else
{if((state_val_31604 === 3))
{var inst_31601 = (state_31603[2]);var state_31603__$1 = state_31603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31603__$1,inst_31601);
} else
{if((state_val_31604 === 4))
{var inst_31584 = (state_31603[7]);var inst_31584__$1 = (state_31603[2]);var inst_31585 = (inst_31584__$1 == null);var state_31603__$1 = (function (){var statearr_31606 = state_31603;(statearr_31606[7] = inst_31584__$1);
return statearr_31606;
})();if(cljs.core.truth_(inst_31585))
{var statearr_31607_31627 = state_31603__$1;(statearr_31607_31627[1] = 5);
} else
{var statearr_31608_31628 = state_31603__$1;(statearr_31608_31628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31604 === 5))
{var inst_31587 = cljs.core.async.close_BANG_.call(null,tc);var inst_31588 = cljs.core.async.close_BANG_.call(null,fc);var state_31603__$1 = (function (){var statearr_31609 = state_31603;(statearr_31609[8] = inst_31587);
return statearr_31609;
})();var statearr_31610_31629 = state_31603__$1;(statearr_31610_31629[2] = inst_31588);
(statearr_31610_31629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31604 === 6))
{var inst_31584 = (state_31603[7]);var inst_31590 = p.call(null,inst_31584);var state_31603__$1 = state_31603;if(cljs.core.truth_(inst_31590))
{var statearr_31611_31630 = state_31603__$1;(statearr_31611_31630[1] = 9);
} else
{var statearr_31612_31631 = state_31603__$1;(statearr_31612_31631[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31604 === 7))
{var inst_31599 = (state_31603[2]);var state_31603__$1 = state_31603;var statearr_31613_31632 = state_31603__$1;(statearr_31613_31632[2] = inst_31599);
(statearr_31613_31632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31604 === 8))
{var inst_31596 = (state_31603[2]);var state_31603__$1 = (function (){var statearr_31614 = state_31603;(statearr_31614[9] = inst_31596);
return statearr_31614;
})();var statearr_31615_31633 = state_31603__$1;(statearr_31615_31633[2] = null);
(statearr_31615_31633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31604 === 9))
{var state_31603__$1 = state_31603;var statearr_31616_31634 = state_31603__$1;(statearr_31616_31634[2] = tc);
(statearr_31616_31634[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31604 === 10))
{var state_31603__$1 = state_31603;var statearr_31617_31635 = state_31603__$1;(statearr_31617_31635[2] = fc);
(statearr_31617_31635[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31604 === 11))
{var inst_31584 = (state_31603[7]);var inst_31594 = (state_31603[2]);var state_31603__$1 = state_31603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31603__$1,8,inst_31594,inst_31584);
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
var state_machine__5507__auto____0 = (function (){var statearr_31621 = [null,null,null,null,null,null,null,null,null,null];(statearr_31621[0] = state_machine__5507__auto__);
(statearr_31621[1] = 1);
return statearr_31621;
});
var state_machine__5507__auto____1 = (function (state_31603){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31622){if((e31622 instanceof Object))
{var ex__5510__auto__ = e31622;var statearr_31623_31636 = state_31603;(statearr_31623_31636[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31637 = state_31603;
state_31603 = G__31637;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31603){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31624 = f__5522__auto__.call(null);(statearr_31624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31625);
return statearr_31624;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31684){var state_val_31685 = (state_31684[1]);if((state_val_31685 === 7))
{var inst_31680 = (state_31684[2]);var state_31684__$1 = state_31684;var statearr_31686_31702 = state_31684__$1;(statearr_31686_31702[2] = inst_31680);
(statearr_31686_31702[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31685 === 6))
{var inst_31673 = (state_31684[7]);var inst_31670 = (state_31684[8]);var inst_31677 = f.call(null,inst_31670,inst_31673);var inst_31670__$1 = inst_31677;var state_31684__$1 = (function (){var statearr_31687 = state_31684;(statearr_31687[8] = inst_31670__$1);
return statearr_31687;
})();var statearr_31688_31703 = state_31684__$1;(statearr_31688_31703[2] = null);
(statearr_31688_31703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31685 === 5))
{var inst_31670 = (state_31684[8]);var state_31684__$1 = state_31684;var statearr_31689_31704 = state_31684__$1;(statearr_31689_31704[2] = inst_31670);
(statearr_31689_31704[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31685 === 4))
{var inst_31673 = (state_31684[7]);var inst_31673__$1 = (state_31684[2]);var inst_31674 = (inst_31673__$1 == null);var state_31684__$1 = (function (){var statearr_31690 = state_31684;(statearr_31690[7] = inst_31673__$1);
return statearr_31690;
})();if(cljs.core.truth_(inst_31674))
{var statearr_31691_31705 = state_31684__$1;(statearr_31691_31705[1] = 5);
} else
{var statearr_31692_31706 = state_31684__$1;(statearr_31692_31706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31685 === 3))
{var inst_31682 = (state_31684[2]);var state_31684__$1 = state_31684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31684__$1,inst_31682);
} else
{if((state_val_31685 === 2))
{var state_31684__$1 = state_31684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31684__$1,4,ch);
} else
{if((state_val_31685 === 1))
{var inst_31670 = init;var state_31684__$1 = (function (){var statearr_31693 = state_31684;(statearr_31693[8] = inst_31670);
return statearr_31693;
})();var statearr_31694_31707 = state_31684__$1;(statearr_31694_31707[2] = null);
(statearr_31694_31707[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31698 = [null,null,null,null,null,null,null,null,null];(statearr_31698[0] = state_machine__5507__auto__);
(statearr_31698[1] = 1);
return statearr_31698;
});
var state_machine__5507__auto____1 = (function (state_31684){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31684);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31699){if((e31699 instanceof Object))
{var ex__5510__auto__ = e31699;var statearr_31700_31708 = state_31684;(statearr_31700_31708[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31684);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31709 = state_31684;
state_31684 = G__31709;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31684){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31701 = f__5522__auto__.call(null);(statearr_31701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31701;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31771){var state_val_31772 = (state_31771[1]);if((state_val_31772 === 1))
{var inst_31751 = cljs.core.seq.call(null,coll);var inst_31752 = inst_31751;var state_31771__$1 = (function (){var statearr_31773 = state_31771;(statearr_31773[7] = inst_31752);
return statearr_31773;
})();var statearr_31774_31792 = state_31771__$1;(statearr_31774_31792[2] = null);
(statearr_31774_31792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31772 === 2))
{var inst_31752 = (state_31771[7]);var state_31771__$1 = state_31771;if(cljs.core.truth_(inst_31752))
{var statearr_31775_31793 = state_31771__$1;(statearr_31775_31793[1] = 4);
} else
{var statearr_31776_31794 = state_31771__$1;(statearr_31776_31794[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31772 === 3))
{var inst_31769 = (state_31771[2]);var state_31771__$1 = state_31771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31771__$1,inst_31769);
} else
{if((state_val_31772 === 4))
{var inst_31752 = (state_31771[7]);var inst_31755 = cljs.core.first.call(null,inst_31752);var state_31771__$1 = state_31771;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31771__$1,7,ch,inst_31755);
} else
{if((state_val_31772 === 5))
{var state_31771__$1 = state_31771;if(cljs.core.truth_(close_QMARK_))
{var statearr_31777_31795 = state_31771__$1;(statearr_31777_31795[1] = 8);
} else
{var statearr_31778_31796 = state_31771__$1;(statearr_31778_31796[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31772 === 6))
{var inst_31767 = (state_31771[2]);var state_31771__$1 = state_31771;var statearr_31779_31797 = state_31771__$1;(statearr_31779_31797[2] = inst_31767);
(statearr_31779_31797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31772 === 7))
{var inst_31752 = (state_31771[7]);var inst_31757 = (state_31771[2]);var inst_31758 = cljs.core.next.call(null,inst_31752);var inst_31752__$1 = inst_31758;var state_31771__$1 = (function (){var statearr_31780 = state_31771;(statearr_31780[8] = inst_31757);
(statearr_31780[7] = inst_31752__$1);
return statearr_31780;
})();var statearr_31781_31798 = state_31771__$1;(statearr_31781_31798[2] = null);
(statearr_31781_31798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31772 === 8))
{var inst_31762 = cljs.core.async.close_BANG_.call(null,ch);var state_31771__$1 = state_31771;var statearr_31782_31799 = state_31771__$1;(statearr_31782_31799[2] = inst_31762);
(statearr_31782_31799[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31772 === 9))
{var state_31771__$1 = state_31771;var statearr_31783_31800 = state_31771__$1;(statearr_31783_31800[2] = null);
(statearr_31783_31800[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31772 === 10))
{var inst_31765 = (state_31771[2]);var state_31771__$1 = state_31771;var statearr_31784_31801 = state_31771__$1;(statearr_31784_31801[2] = inst_31765);
(statearr_31784_31801[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_31788 = [null,null,null,null,null,null,null,null,null];(statearr_31788[0] = state_machine__5507__auto__);
(statearr_31788[1] = 1);
return statearr_31788;
});
var state_machine__5507__auto____1 = (function (state_31771){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31771);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31789){if((e31789 instanceof Object))
{var ex__5510__auto__ = e31789;var statearr_31790_31802 = state_31771;(statearr_31790_31802[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31771);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31803 = state_31771;
state_31771 = G__31803;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31771){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31791 = f__5522__auto__.call(null);(statearr_31791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31791;
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
cljs.core.async.Mux = (function (){var obj31805 = {};return obj31805;
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
cljs.core.async.Mult = (function (){var obj31807 = {};return obj31807;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32031 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32031 = (function (cs,ch,mult,meta32032){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32032 = meta32032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32031.cljs$lang$type = true;
cljs.core.async.t32031.cljs$lang$ctorStr = "cljs.core.async/t32031";
cljs.core.async.t32031.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32031");
});})(cs))
;
cljs.core.async.t32031.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32031.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32031.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32031.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32031.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32033){var self__ = this;
var _32033__$1 = this;return self__.meta32032;
});})(cs))
;
cljs.core.async.t32031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32033,meta32032__$1){var self__ = this;
var _32033__$1 = this;return (new cljs.core.async.t32031(self__.cs,self__.ch,self__.mult,meta32032__$1));
});})(cs))
;
cljs.core.async.__GT_t32031 = ((function (cs){
return (function __GT_t32031(cs__$1,ch__$1,mult__$1,meta32032){return (new cljs.core.async.t32031(cs__$1,ch__$1,mult__$1,meta32032));
});})(cs))
;
}
return (new cljs.core.async.t32031(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___32254 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32168){var state_val_32169 = (state_32168[1]);if((state_val_32169 === 32))
{var inst_32036 = (state_32168[7]);var inst_32112 = (state_32168[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32168,31,Object,null,30);var inst_32119 = cljs.core.async.put_BANG_.call(null,inst_32112,inst_32036,done);var state_32168__$1 = state_32168;var statearr_32170_32255 = state_32168__$1;(statearr_32170_32255[2] = inst_32119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 1))
{var state_32168__$1 = state_32168;var statearr_32171_32256 = state_32168__$1;(statearr_32171_32256[2] = null);
(statearr_32171_32256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 33))
{var inst_32125 = (state_32168[9]);var inst_32127 = cljs.core.chunked_seq_QMARK_.call(null,inst_32125);var state_32168__$1 = state_32168;if(inst_32127)
{var statearr_32172_32257 = state_32168__$1;(statearr_32172_32257[1] = 36);
} else
{var statearr_32173_32258 = state_32168__$1;(statearr_32173_32258[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 2))
{var state_32168__$1 = state_32168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32168__$1,4,ch);
} else
{if((state_val_32169 === 34))
{var state_32168__$1 = state_32168;var statearr_32174_32259 = state_32168__$1;(statearr_32174_32259[2] = null);
(statearr_32174_32259[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 3))
{var inst_32166 = (state_32168[2]);var state_32168__$1 = state_32168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32168__$1,inst_32166);
} else
{if((state_val_32169 === 35))
{var inst_32150 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32175_32260 = state_32168__$1;(statearr_32175_32260[2] = inst_32150);
(statearr_32175_32260[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 4))
{var inst_32036 = (state_32168[7]);var inst_32036__$1 = (state_32168[2]);var inst_32037 = (inst_32036__$1 == null);var state_32168__$1 = (function (){var statearr_32176 = state_32168;(statearr_32176[7] = inst_32036__$1);
return statearr_32176;
})();if(cljs.core.truth_(inst_32037))
{var statearr_32177_32261 = state_32168__$1;(statearr_32177_32261[1] = 5);
} else
{var statearr_32178_32262 = state_32168__$1;(statearr_32178_32262[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 36))
{var inst_32125 = (state_32168[9]);var inst_32129 = cljs.core.chunk_first.call(null,inst_32125);var inst_32130 = cljs.core.chunk_rest.call(null,inst_32125);var inst_32131 = cljs.core.count.call(null,inst_32129);var inst_32104 = inst_32130;var inst_32105 = inst_32129;var inst_32106 = inst_32131;var inst_32107 = 0;var state_32168__$1 = (function (){var statearr_32179 = state_32168;(statearr_32179[10] = inst_32104);
(statearr_32179[11] = inst_32105);
(statearr_32179[12] = inst_32106);
(statearr_32179[13] = inst_32107);
return statearr_32179;
})();var statearr_32180_32263 = state_32168__$1;(statearr_32180_32263[2] = null);
(statearr_32180_32263[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 5))
{var inst_32043 = cljs.core.deref.call(null,cs);var inst_32044 = cljs.core.seq.call(null,inst_32043);var inst_32045 = inst_32044;var inst_32046 = null;var inst_32047 = 0;var inst_32048 = 0;var state_32168__$1 = (function (){var statearr_32181 = state_32168;(statearr_32181[14] = inst_32048);
(statearr_32181[15] = inst_32047);
(statearr_32181[16] = inst_32046);
(statearr_32181[17] = inst_32045);
return statearr_32181;
})();var statearr_32182_32264 = state_32168__$1;(statearr_32182_32264[2] = null);
(statearr_32182_32264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 37))
{var inst_32125 = (state_32168[9]);var inst_32134 = cljs.core.first.call(null,inst_32125);var state_32168__$1 = (function (){var statearr_32183 = state_32168;(statearr_32183[18] = inst_32134);
return statearr_32183;
})();var statearr_32184_32265 = state_32168__$1;(statearr_32184_32265[2] = null);
(statearr_32184_32265[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 6))
{var inst_32096 = (state_32168[19]);var inst_32095 = cljs.core.deref.call(null,cs);var inst_32096__$1 = cljs.core.keys.call(null,inst_32095);var inst_32097 = cljs.core.count.call(null,inst_32096__$1);var inst_32098 = cljs.core.reset_BANG_.call(null,dctr,inst_32097);var inst_32103 = cljs.core.seq.call(null,inst_32096__$1);var inst_32104 = inst_32103;var inst_32105 = null;var inst_32106 = 0;var inst_32107 = 0;var state_32168__$1 = (function (){var statearr_32185 = state_32168;(statearr_32185[10] = inst_32104);
(statearr_32185[11] = inst_32105);
(statearr_32185[12] = inst_32106);
(statearr_32185[20] = inst_32098);
(statearr_32185[13] = inst_32107);
(statearr_32185[19] = inst_32096__$1);
return statearr_32185;
})();var statearr_32186_32266 = state_32168__$1;(statearr_32186_32266[2] = null);
(statearr_32186_32266[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 38))
{var inst_32147 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32187_32267 = state_32168__$1;(statearr_32187_32267[2] = inst_32147);
(statearr_32187_32267[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 7))
{var inst_32164 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32188_32268 = state_32168__$1;(statearr_32188_32268[2] = inst_32164);
(statearr_32188_32268[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 39))
{var inst_32125 = (state_32168[9]);var inst_32143 = (state_32168[2]);var inst_32144 = cljs.core.next.call(null,inst_32125);var inst_32104 = inst_32144;var inst_32105 = null;var inst_32106 = 0;var inst_32107 = 0;var state_32168__$1 = (function (){var statearr_32189 = state_32168;(statearr_32189[10] = inst_32104);
(statearr_32189[11] = inst_32105);
(statearr_32189[12] = inst_32106);
(statearr_32189[21] = inst_32143);
(statearr_32189[13] = inst_32107);
return statearr_32189;
})();var statearr_32190_32269 = state_32168__$1;(statearr_32190_32269[2] = null);
(statearr_32190_32269[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 8))
{var inst_32048 = (state_32168[14]);var inst_32047 = (state_32168[15]);var inst_32050 = (inst_32048 < inst_32047);var inst_32051 = inst_32050;var state_32168__$1 = state_32168;if(cljs.core.truth_(inst_32051))
{var statearr_32191_32270 = state_32168__$1;(statearr_32191_32270[1] = 10);
} else
{var statearr_32192_32271 = state_32168__$1;(statearr_32192_32271[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 40))
{var inst_32134 = (state_32168[18]);var inst_32135 = (state_32168[2]);var inst_32136 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32137 = cljs.core.async.untap_STAR_.call(null,m,inst_32134);var state_32168__$1 = (function (){var statearr_32193 = state_32168;(statearr_32193[22] = inst_32136);
(statearr_32193[23] = inst_32135);
return statearr_32193;
})();var statearr_32194_32272 = state_32168__$1;(statearr_32194_32272[2] = inst_32137);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 9))
{var inst_32093 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32195_32273 = state_32168__$1;(statearr_32195_32273[2] = inst_32093);
(statearr_32195_32273[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 41))
{var inst_32036 = (state_32168[7]);var inst_32134 = (state_32168[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32168,40,Object,null,39);var inst_32141 = cljs.core.async.put_BANG_.call(null,inst_32134,inst_32036,done);var state_32168__$1 = state_32168;var statearr_32196_32274 = state_32168__$1;(statearr_32196_32274[2] = inst_32141);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 10))
{var inst_32048 = (state_32168[14]);var inst_32046 = (state_32168[16]);var inst_32054 = cljs.core._nth.call(null,inst_32046,inst_32048);var inst_32055 = cljs.core.nth.call(null,inst_32054,0,null);var inst_32056 = cljs.core.nth.call(null,inst_32054,1,null);var state_32168__$1 = (function (){var statearr_32197 = state_32168;(statearr_32197[24] = inst_32055);
return statearr_32197;
})();if(cljs.core.truth_(inst_32056))
{var statearr_32198_32275 = state_32168__$1;(statearr_32198_32275[1] = 13);
} else
{var statearr_32199_32276 = state_32168__$1;(statearr_32199_32276[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 42))
{var state_32168__$1 = state_32168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32168__$1,45,dchan);
} else
{if((state_val_32169 === 11))
{var inst_32065 = (state_32168[25]);var inst_32045 = (state_32168[17]);var inst_32065__$1 = cljs.core.seq.call(null,inst_32045);var state_32168__$1 = (function (){var statearr_32200 = state_32168;(statearr_32200[25] = inst_32065__$1);
return statearr_32200;
})();if(inst_32065__$1)
{var statearr_32201_32277 = state_32168__$1;(statearr_32201_32277[1] = 16);
} else
{var statearr_32202_32278 = state_32168__$1;(statearr_32202_32278[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 43))
{var state_32168__$1 = state_32168;var statearr_32203_32279 = state_32168__$1;(statearr_32203_32279[2] = null);
(statearr_32203_32279[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 12))
{var inst_32091 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32204_32280 = state_32168__$1;(statearr_32204_32280[2] = inst_32091);
(statearr_32204_32280[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 44))
{var inst_32161 = (state_32168[2]);var state_32168__$1 = (function (){var statearr_32205 = state_32168;(statearr_32205[26] = inst_32161);
return statearr_32205;
})();var statearr_32206_32281 = state_32168__$1;(statearr_32206_32281[2] = null);
(statearr_32206_32281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 13))
{var inst_32055 = (state_32168[24]);var inst_32058 = cljs.core.async.close_BANG_.call(null,inst_32055);var state_32168__$1 = state_32168;var statearr_32207_32282 = state_32168__$1;(statearr_32207_32282[2] = inst_32058);
(statearr_32207_32282[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 45))
{var inst_32158 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32211_32283 = state_32168__$1;(statearr_32211_32283[2] = inst_32158);
(statearr_32211_32283[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 14))
{var state_32168__$1 = state_32168;var statearr_32212_32284 = state_32168__$1;(statearr_32212_32284[2] = null);
(statearr_32212_32284[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 15))
{var inst_32048 = (state_32168[14]);var inst_32047 = (state_32168[15]);var inst_32046 = (state_32168[16]);var inst_32045 = (state_32168[17]);var inst_32061 = (state_32168[2]);var inst_32062 = (inst_32048 + 1);var tmp32208 = inst_32047;var tmp32209 = inst_32046;var tmp32210 = inst_32045;var inst_32045__$1 = tmp32210;var inst_32046__$1 = tmp32209;var inst_32047__$1 = tmp32208;var inst_32048__$1 = inst_32062;var state_32168__$1 = (function (){var statearr_32213 = state_32168;(statearr_32213[27] = inst_32061);
(statearr_32213[14] = inst_32048__$1);
(statearr_32213[15] = inst_32047__$1);
(statearr_32213[16] = inst_32046__$1);
(statearr_32213[17] = inst_32045__$1);
return statearr_32213;
})();var statearr_32214_32285 = state_32168__$1;(statearr_32214_32285[2] = null);
(statearr_32214_32285[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 16))
{var inst_32065 = (state_32168[25]);var inst_32067 = cljs.core.chunked_seq_QMARK_.call(null,inst_32065);var state_32168__$1 = state_32168;if(inst_32067)
{var statearr_32215_32286 = state_32168__$1;(statearr_32215_32286[1] = 19);
} else
{var statearr_32216_32287 = state_32168__$1;(statearr_32216_32287[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 17))
{var state_32168__$1 = state_32168;var statearr_32217_32288 = state_32168__$1;(statearr_32217_32288[2] = null);
(statearr_32217_32288[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 18))
{var inst_32089 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32218_32289 = state_32168__$1;(statearr_32218_32289[2] = inst_32089);
(statearr_32218_32289[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 19))
{var inst_32065 = (state_32168[25]);var inst_32069 = cljs.core.chunk_first.call(null,inst_32065);var inst_32070 = cljs.core.chunk_rest.call(null,inst_32065);var inst_32071 = cljs.core.count.call(null,inst_32069);var inst_32045 = inst_32070;var inst_32046 = inst_32069;var inst_32047 = inst_32071;var inst_32048 = 0;var state_32168__$1 = (function (){var statearr_32219 = state_32168;(statearr_32219[14] = inst_32048);
(statearr_32219[15] = inst_32047);
(statearr_32219[16] = inst_32046);
(statearr_32219[17] = inst_32045);
return statearr_32219;
})();var statearr_32220_32290 = state_32168__$1;(statearr_32220_32290[2] = null);
(statearr_32220_32290[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 20))
{var inst_32065 = (state_32168[25]);var inst_32075 = cljs.core.first.call(null,inst_32065);var inst_32076 = cljs.core.nth.call(null,inst_32075,0,null);var inst_32077 = cljs.core.nth.call(null,inst_32075,1,null);var state_32168__$1 = (function (){var statearr_32221 = state_32168;(statearr_32221[28] = inst_32076);
return statearr_32221;
})();if(cljs.core.truth_(inst_32077))
{var statearr_32222_32291 = state_32168__$1;(statearr_32222_32291[1] = 22);
} else
{var statearr_32223_32292 = state_32168__$1;(statearr_32223_32292[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 21))
{var inst_32086 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32224_32293 = state_32168__$1;(statearr_32224_32293[2] = inst_32086);
(statearr_32224_32293[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 22))
{var inst_32076 = (state_32168[28]);var inst_32079 = cljs.core.async.close_BANG_.call(null,inst_32076);var state_32168__$1 = state_32168;var statearr_32225_32294 = state_32168__$1;(statearr_32225_32294[2] = inst_32079);
(statearr_32225_32294[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 23))
{var state_32168__$1 = state_32168;var statearr_32226_32295 = state_32168__$1;(statearr_32226_32295[2] = null);
(statearr_32226_32295[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 24))
{var inst_32065 = (state_32168[25]);var inst_32082 = (state_32168[2]);var inst_32083 = cljs.core.next.call(null,inst_32065);var inst_32045 = inst_32083;var inst_32046 = null;var inst_32047 = 0;var inst_32048 = 0;var state_32168__$1 = (function (){var statearr_32227 = state_32168;(statearr_32227[14] = inst_32048);
(statearr_32227[29] = inst_32082);
(statearr_32227[15] = inst_32047);
(statearr_32227[16] = inst_32046);
(statearr_32227[17] = inst_32045);
return statearr_32227;
})();var statearr_32228_32296 = state_32168__$1;(statearr_32228_32296[2] = null);
(statearr_32228_32296[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 25))
{var inst_32106 = (state_32168[12]);var inst_32107 = (state_32168[13]);var inst_32109 = (inst_32107 < inst_32106);var inst_32110 = inst_32109;var state_32168__$1 = state_32168;if(cljs.core.truth_(inst_32110))
{var statearr_32229_32297 = state_32168__$1;(statearr_32229_32297[1] = 27);
} else
{var statearr_32230_32298 = state_32168__$1;(statearr_32230_32298[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 26))
{var inst_32096 = (state_32168[19]);var inst_32154 = (state_32168[2]);var inst_32155 = cljs.core.seq.call(null,inst_32096);var state_32168__$1 = (function (){var statearr_32231 = state_32168;(statearr_32231[30] = inst_32154);
return statearr_32231;
})();if(inst_32155)
{var statearr_32232_32299 = state_32168__$1;(statearr_32232_32299[1] = 42);
} else
{var statearr_32233_32300 = state_32168__$1;(statearr_32233_32300[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 27))
{var inst_32105 = (state_32168[11]);var inst_32107 = (state_32168[13]);var inst_32112 = cljs.core._nth.call(null,inst_32105,inst_32107);var state_32168__$1 = (function (){var statearr_32234 = state_32168;(statearr_32234[8] = inst_32112);
return statearr_32234;
})();var statearr_32235_32301 = state_32168__$1;(statearr_32235_32301[2] = null);
(statearr_32235_32301[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 28))
{var inst_32104 = (state_32168[10]);var inst_32125 = (state_32168[9]);var inst_32125__$1 = cljs.core.seq.call(null,inst_32104);var state_32168__$1 = (function (){var statearr_32239 = state_32168;(statearr_32239[9] = inst_32125__$1);
return statearr_32239;
})();if(inst_32125__$1)
{var statearr_32240_32302 = state_32168__$1;(statearr_32240_32302[1] = 33);
} else
{var statearr_32241_32303 = state_32168__$1;(statearr_32241_32303[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 29))
{var inst_32152 = (state_32168[2]);var state_32168__$1 = state_32168;var statearr_32242_32304 = state_32168__$1;(statearr_32242_32304[2] = inst_32152);
(statearr_32242_32304[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 30))
{var inst_32104 = (state_32168[10]);var inst_32105 = (state_32168[11]);var inst_32106 = (state_32168[12]);var inst_32107 = (state_32168[13]);var inst_32121 = (state_32168[2]);var inst_32122 = (inst_32107 + 1);var tmp32236 = inst_32104;var tmp32237 = inst_32105;var tmp32238 = inst_32106;var inst_32104__$1 = tmp32236;var inst_32105__$1 = tmp32237;var inst_32106__$1 = tmp32238;var inst_32107__$1 = inst_32122;var state_32168__$1 = (function (){var statearr_32243 = state_32168;(statearr_32243[10] = inst_32104__$1);
(statearr_32243[11] = inst_32105__$1);
(statearr_32243[12] = inst_32106__$1);
(statearr_32243[13] = inst_32107__$1);
(statearr_32243[31] = inst_32121);
return statearr_32243;
})();var statearr_32244_32305 = state_32168__$1;(statearr_32244_32305[2] = null);
(statearr_32244_32305[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32169 === 31))
{var inst_32112 = (state_32168[8]);var inst_32113 = (state_32168[2]);var inst_32114 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32115 = cljs.core.async.untap_STAR_.call(null,m,inst_32112);var state_32168__$1 = (function (){var statearr_32245 = state_32168;(statearr_32245[32] = inst_32113);
(statearr_32245[33] = inst_32114);
return statearr_32245;
})();var statearr_32246_32306 = state_32168__$1;(statearr_32246_32306[2] = inst_32115);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_32250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32250[0] = state_machine__5507__auto__);
(statearr_32250[1] = 1);
return statearr_32250;
});
var state_machine__5507__auto____1 = (function (state_32168){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32168);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32251){if((e32251 instanceof Object))
{var ex__5510__auto__ = e32251;var statearr_32252_32307 = state_32168;(statearr_32252_32307[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32308 = state_32168;
state_32168 = G__32308;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32168){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32253 = f__5522__auto__.call(null);(statearr_32253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32254);
return statearr_32253;
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
cljs.core.async.Mix = (function (){var obj32310 = {};return obj32310;
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
;var m = (function (){if(typeof cljs.core.async.t32420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32420 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta32421){
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
this.meta32421 = meta32421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32420.cljs$lang$type = true;
cljs.core.async.t32420.cljs$lang$ctorStr = "cljs.core.async/t32420";
cljs.core.async.t32420.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32420");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32420.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32420.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32420.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32420.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32420.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32420.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32420.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32422){var self__ = this;
var _32422__$1 = this;return self__.meta32421;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32422,meta32421__$1){var self__ = this;
var _32422__$1 = this;return (new cljs.core.async.t32420(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta32421__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32420 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32420(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32421){return (new cljs.core.async.t32420(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32421));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32420(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___32529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32487){var state_val_32488 = (state_32487[1]);if((state_val_32488 === 1))
{var inst_32426 = (state_32487[7]);var inst_32426__$1 = calc_state.call(null);var inst_32427 = cljs.core.seq_QMARK_.call(null,inst_32426__$1);var state_32487__$1 = (function (){var statearr_32489 = state_32487;(statearr_32489[7] = inst_32426__$1);
return statearr_32489;
})();if(inst_32427)
{var statearr_32490_32530 = state_32487__$1;(statearr_32490_32530[1] = 2);
} else
{var statearr_32491_32531 = state_32487__$1;(statearr_32491_32531[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 2))
{var inst_32426 = (state_32487[7]);var inst_32429 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32426);var state_32487__$1 = state_32487;var statearr_32492_32532 = state_32487__$1;(statearr_32492_32532[2] = inst_32429);
(statearr_32492_32532[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 3))
{var inst_32426 = (state_32487[7]);var state_32487__$1 = state_32487;var statearr_32493_32533 = state_32487__$1;(statearr_32493_32533[2] = inst_32426);
(statearr_32493_32533[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 4))
{var inst_32426 = (state_32487[7]);var inst_32432 = (state_32487[2]);var inst_32433 = cljs.core.get.call(null,inst_32432,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32434 = cljs.core.get.call(null,inst_32432,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32435 = cljs.core.get.call(null,inst_32432,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32436 = inst_32426;var state_32487__$1 = (function (){var statearr_32494 = state_32487;(statearr_32494[8] = inst_32433);
(statearr_32494[9] = inst_32434);
(statearr_32494[10] = inst_32435);
(statearr_32494[11] = inst_32436);
return statearr_32494;
})();var statearr_32495_32534 = state_32487__$1;(statearr_32495_32534[2] = null);
(statearr_32495_32534[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 5))
{var inst_32436 = (state_32487[11]);var inst_32439 = cljs.core.seq_QMARK_.call(null,inst_32436);var state_32487__$1 = state_32487;if(inst_32439)
{var statearr_32496_32535 = state_32487__$1;(statearr_32496_32535[1] = 7);
} else
{var statearr_32497_32536 = state_32487__$1;(statearr_32497_32536[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 6))
{var inst_32485 = (state_32487[2]);var state_32487__$1 = state_32487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32487__$1,inst_32485);
} else
{if((state_val_32488 === 7))
{var inst_32436 = (state_32487[11]);var inst_32441 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32436);var state_32487__$1 = state_32487;var statearr_32498_32537 = state_32487__$1;(statearr_32498_32537[2] = inst_32441);
(statearr_32498_32537[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 8))
{var inst_32436 = (state_32487[11]);var state_32487__$1 = state_32487;var statearr_32499_32538 = state_32487__$1;(statearr_32499_32538[2] = inst_32436);
(statearr_32499_32538[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 9))
{var inst_32444 = (state_32487[12]);var inst_32444__$1 = (state_32487[2]);var inst_32445 = cljs.core.get.call(null,inst_32444__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32446 = cljs.core.get.call(null,inst_32444__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32447 = cljs.core.get.call(null,inst_32444__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_32487__$1 = (function (){var statearr_32500 = state_32487;(statearr_32500[12] = inst_32444__$1);
(statearr_32500[13] = inst_32446);
(statearr_32500[14] = inst_32447);
return statearr_32500;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32487__$1,10,inst_32445);
} else
{if((state_val_32488 === 10))
{var inst_32452 = (state_32487[15]);var inst_32451 = (state_32487[16]);var inst_32450 = (state_32487[2]);var inst_32451__$1 = cljs.core.nth.call(null,inst_32450,0,null);var inst_32452__$1 = cljs.core.nth.call(null,inst_32450,1,null);var inst_32453 = (inst_32451__$1 == null);var inst_32454 = cljs.core._EQ_.call(null,inst_32452__$1,change);var inst_32455 = (inst_32453) || (inst_32454);var state_32487__$1 = (function (){var statearr_32501 = state_32487;(statearr_32501[15] = inst_32452__$1);
(statearr_32501[16] = inst_32451__$1);
return statearr_32501;
})();if(cljs.core.truth_(inst_32455))
{var statearr_32502_32539 = state_32487__$1;(statearr_32502_32539[1] = 11);
} else
{var statearr_32503_32540 = state_32487__$1;(statearr_32503_32540[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 11))
{var inst_32451 = (state_32487[16]);var inst_32457 = (inst_32451 == null);var state_32487__$1 = state_32487;if(cljs.core.truth_(inst_32457))
{var statearr_32504_32541 = state_32487__$1;(statearr_32504_32541[1] = 14);
} else
{var statearr_32505_32542 = state_32487__$1;(statearr_32505_32542[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 12))
{var inst_32466 = (state_32487[17]);var inst_32452 = (state_32487[15]);var inst_32447 = (state_32487[14]);var inst_32466__$1 = inst_32447.call(null,inst_32452);var state_32487__$1 = (function (){var statearr_32506 = state_32487;(statearr_32506[17] = inst_32466__$1);
return statearr_32506;
})();if(cljs.core.truth_(inst_32466__$1))
{var statearr_32507_32543 = state_32487__$1;(statearr_32507_32543[1] = 17);
} else
{var statearr_32508_32544 = state_32487__$1;(statearr_32508_32544[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 13))
{var inst_32483 = (state_32487[2]);var state_32487__$1 = state_32487;var statearr_32509_32545 = state_32487__$1;(statearr_32509_32545[2] = inst_32483);
(statearr_32509_32545[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 14))
{var inst_32452 = (state_32487[15]);var inst_32459 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32452);var state_32487__$1 = state_32487;var statearr_32510_32546 = state_32487__$1;(statearr_32510_32546[2] = inst_32459);
(statearr_32510_32546[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 15))
{var state_32487__$1 = state_32487;var statearr_32511_32547 = state_32487__$1;(statearr_32511_32547[2] = null);
(statearr_32511_32547[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 16))
{var inst_32462 = (state_32487[2]);var inst_32463 = calc_state.call(null);var inst_32436 = inst_32463;var state_32487__$1 = (function (){var statearr_32512 = state_32487;(statearr_32512[18] = inst_32462);
(statearr_32512[11] = inst_32436);
return statearr_32512;
})();var statearr_32513_32548 = state_32487__$1;(statearr_32513_32548[2] = null);
(statearr_32513_32548[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 17))
{var inst_32466 = (state_32487[17]);var state_32487__$1 = state_32487;var statearr_32514_32549 = state_32487__$1;(statearr_32514_32549[2] = inst_32466);
(statearr_32514_32549[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 18))
{var inst_32452 = (state_32487[15]);var inst_32446 = (state_32487[13]);var inst_32447 = (state_32487[14]);var inst_32469 = cljs.core.empty_QMARK_.call(null,inst_32447);var inst_32470 = inst_32446.call(null,inst_32452);var inst_32471 = cljs.core.not.call(null,inst_32470);var inst_32472 = (inst_32469) && (inst_32471);var state_32487__$1 = state_32487;var statearr_32515_32550 = state_32487__$1;(statearr_32515_32550[2] = inst_32472);
(statearr_32515_32550[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 19))
{var inst_32474 = (state_32487[2]);var state_32487__$1 = state_32487;if(cljs.core.truth_(inst_32474))
{var statearr_32516_32551 = state_32487__$1;(statearr_32516_32551[1] = 20);
} else
{var statearr_32517_32552 = state_32487__$1;(statearr_32517_32552[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 20))
{var inst_32451 = (state_32487[16]);var state_32487__$1 = state_32487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32487__$1,23,out,inst_32451);
} else
{if((state_val_32488 === 21))
{var state_32487__$1 = state_32487;var statearr_32518_32553 = state_32487__$1;(statearr_32518_32553[2] = null);
(statearr_32518_32553[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 22))
{var inst_32444 = (state_32487[12]);var inst_32480 = (state_32487[2]);var inst_32436 = inst_32444;var state_32487__$1 = (function (){var statearr_32519 = state_32487;(statearr_32519[19] = inst_32480);
(statearr_32519[11] = inst_32436);
return statearr_32519;
})();var statearr_32520_32554 = state_32487__$1;(statearr_32520_32554[2] = null);
(statearr_32520_32554[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32488 === 23))
{var inst_32477 = (state_32487[2]);var state_32487__$1 = state_32487;var statearr_32521_32555 = state_32487__$1;(statearr_32521_32555[2] = inst_32477);
(statearr_32521_32555[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_32525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32525[0] = state_machine__5507__auto__);
(statearr_32525[1] = 1);
return statearr_32525;
});
var state_machine__5507__auto____1 = (function (state_32487){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32487);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32526){if((e32526 instanceof Object))
{var ex__5510__auto__ = e32526;var statearr_32527_32556 = state_32487;(statearr_32527_32556[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32557 = state_32487;
state_32487 = G__32557;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32487){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32528 = f__5522__auto__.call(null);(statearr_32528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32529);
return statearr_32528;
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
cljs.core.async.Pub = (function (){var obj32559 = {};return obj32559;
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
return (function (p1__32560_SHARP_){if(cljs.core.truth_(p1__32560_SHARP_.call(null,topic)))
{return p1__32560_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__32560_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t32685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32685 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32686){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32686 = meta32686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32685.cljs$lang$type = true;
cljs.core.async.t32685.cljs$lang$ctorStr = "cljs.core.async/t32685";
cljs.core.async.t32685.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32685");
});})(mults,ensure_mult))
;
cljs.core.async.t32685.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t32685.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t32685.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t32685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t32685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t32685.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t32685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32687){var self__ = this;
var _32687__$1 = this;return self__.meta32686;
});})(mults,ensure_mult))
;
cljs.core.async.t32685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32687,meta32686__$1){var self__ = this;
var _32687__$1 = this;return (new cljs.core.async.t32685(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32686__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t32685 = ((function (mults,ensure_mult){
return (function __GT_t32685(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32686){return (new cljs.core.async.t32685(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32686));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t32685(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___32809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32761){var state_val_32762 = (state_32761[1]);if((state_val_32762 === 1))
{var state_32761__$1 = state_32761;var statearr_32763_32810 = state_32761__$1;(statearr_32763_32810[2] = null);
(statearr_32763_32810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 2))
{var state_32761__$1 = state_32761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32761__$1,4,ch);
} else
{if((state_val_32762 === 3))
{var inst_32759 = (state_32761[2]);var state_32761__$1 = state_32761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32761__$1,inst_32759);
} else
{if((state_val_32762 === 4))
{var inst_32690 = (state_32761[7]);var inst_32690__$1 = (state_32761[2]);var inst_32691 = (inst_32690__$1 == null);var state_32761__$1 = (function (){var statearr_32764 = state_32761;(statearr_32764[7] = inst_32690__$1);
return statearr_32764;
})();if(cljs.core.truth_(inst_32691))
{var statearr_32765_32811 = state_32761__$1;(statearr_32765_32811[1] = 5);
} else
{var statearr_32766_32812 = state_32761__$1;(statearr_32766_32812[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 5))
{var inst_32697 = cljs.core.deref.call(null,mults);var inst_32698 = cljs.core.vals.call(null,inst_32697);var inst_32699 = cljs.core.seq.call(null,inst_32698);var inst_32700 = inst_32699;var inst_32701 = null;var inst_32702 = 0;var inst_32703 = 0;var state_32761__$1 = (function (){var statearr_32767 = state_32761;(statearr_32767[8] = inst_32700);
(statearr_32767[9] = inst_32702);
(statearr_32767[10] = inst_32701);
(statearr_32767[11] = inst_32703);
return statearr_32767;
})();var statearr_32768_32813 = state_32761__$1;(statearr_32768_32813[2] = null);
(statearr_32768_32813[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 6))
{var inst_32740 = (state_32761[12]);var inst_32738 = (state_32761[13]);var inst_32690 = (state_32761[7]);var inst_32738__$1 = topic_fn.call(null,inst_32690);var inst_32739 = cljs.core.deref.call(null,mults);var inst_32740__$1 = cljs.core.get.call(null,inst_32739,inst_32738__$1);var state_32761__$1 = (function (){var statearr_32769 = state_32761;(statearr_32769[12] = inst_32740__$1);
(statearr_32769[13] = inst_32738__$1);
return statearr_32769;
})();if(cljs.core.truth_(inst_32740__$1))
{var statearr_32770_32814 = state_32761__$1;(statearr_32770_32814[1] = 19);
} else
{var statearr_32771_32815 = state_32761__$1;(statearr_32771_32815[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 7))
{var inst_32757 = (state_32761[2]);var state_32761__$1 = state_32761;var statearr_32772_32816 = state_32761__$1;(statearr_32772_32816[2] = inst_32757);
(statearr_32772_32816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 8))
{var inst_32702 = (state_32761[9]);var inst_32703 = (state_32761[11]);var inst_32705 = (inst_32703 < inst_32702);var inst_32706 = inst_32705;var state_32761__$1 = state_32761;if(cljs.core.truth_(inst_32706))
{var statearr_32776_32817 = state_32761__$1;(statearr_32776_32817[1] = 10);
} else
{var statearr_32777_32818 = state_32761__$1;(statearr_32777_32818[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 9))
{var inst_32736 = (state_32761[2]);var state_32761__$1 = state_32761;var statearr_32778_32819 = state_32761__$1;(statearr_32778_32819[2] = inst_32736);
(statearr_32778_32819[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 10))
{var inst_32700 = (state_32761[8]);var inst_32702 = (state_32761[9]);var inst_32701 = (state_32761[10]);var inst_32703 = (state_32761[11]);var inst_32708 = cljs.core._nth.call(null,inst_32701,inst_32703);var inst_32709 = cljs.core.async.muxch_STAR_.call(null,inst_32708);var inst_32710 = cljs.core.async.close_BANG_.call(null,inst_32709);var inst_32711 = (inst_32703 + 1);var tmp32773 = inst_32700;var tmp32774 = inst_32702;var tmp32775 = inst_32701;var inst_32700__$1 = tmp32773;var inst_32701__$1 = tmp32775;var inst_32702__$1 = tmp32774;var inst_32703__$1 = inst_32711;var state_32761__$1 = (function (){var statearr_32779 = state_32761;(statearr_32779[8] = inst_32700__$1);
(statearr_32779[9] = inst_32702__$1);
(statearr_32779[10] = inst_32701__$1);
(statearr_32779[11] = inst_32703__$1);
(statearr_32779[14] = inst_32710);
return statearr_32779;
})();var statearr_32780_32820 = state_32761__$1;(statearr_32780_32820[2] = null);
(statearr_32780_32820[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 11))
{var inst_32714 = (state_32761[15]);var inst_32700 = (state_32761[8]);var inst_32714__$1 = cljs.core.seq.call(null,inst_32700);var state_32761__$1 = (function (){var statearr_32781 = state_32761;(statearr_32781[15] = inst_32714__$1);
return statearr_32781;
})();if(inst_32714__$1)
{var statearr_32782_32821 = state_32761__$1;(statearr_32782_32821[1] = 13);
} else
{var statearr_32783_32822 = state_32761__$1;(statearr_32783_32822[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 12))
{var inst_32734 = (state_32761[2]);var state_32761__$1 = state_32761;var statearr_32784_32823 = state_32761__$1;(statearr_32784_32823[2] = inst_32734);
(statearr_32784_32823[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 13))
{var inst_32714 = (state_32761[15]);var inst_32716 = cljs.core.chunked_seq_QMARK_.call(null,inst_32714);var state_32761__$1 = state_32761;if(inst_32716)
{var statearr_32785_32824 = state_32761__$1;(statearr_32785_32824[1] = 16);
} else
{var statearr_32786_32825 = state_32761__$1;(statearr_32786_32825[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 14))
{var state_32761__$1 = state_32761;var statearr_32787_32826 = state_32761__$1;(statearr_32787_32826[2] = null);
(statearr_32787_32826[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 15))
{var inst_32732 = (state_32761[2]);var state_32761__$1 = state_32761;var statearr_32788_32827 = state_32761__$1;(statearr_32788_32827[2] = inst_32732);
(statearr_32788_32827[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 16))
{var inst_32714 = (state_32761[15]);var inst_32718 = cljs.core.chunk_first.call(null,inst_32714);var inst_32719 = cljs.core.chunk_rest.call(null,inst_32714);var inst_32720 = cljs.core.count.call(null,inst_32718);var inst_32700 = inst_32719;var inst_32701 = inst_32718;var inst_32702 = inst_32720;var inst_32703 = 0;var state_32761__$1 = (function (){var statearr_32789 = state_32761;(statearr_32789[8] = inst_32700);
(statearr_32789[9] = inst_32702);
(statearr_32789[10] = inst_32701);
(statearr_32789[11] = inst_32703);
return statearr_32789;
})();var statearr_32790_32828 = state_32761__$1;(statearr_32790_32828[2] = null);
(statearr_32790_32828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 17))
{var inst_32714 = (state_32761[15]);var inst_32723 = cljs.core.first.call(null,inst_32714);var inst_32724 = cljs.core.async.muxch_STAR_.call(null,inst_32723);var inst_32725 = cljs.core.async.close_BANG_.call(null,inst_32724);var inst_32726 = cljs.core.next.call(null,inst_32714);var inst_32700 = inst_32726;var inst_32701 = null;var inst_32702 = 0;var inst_32703 = 0;var state_32761__$1 = (function (){var statearr_32791 = state_32761;(statearr_32791[8] = inst_32700);
(statearr_32791[16] = inst_32725);
(statearr_32791[9] = inst_32702);
(statearr_32791[10] = inst_32701);
(statearr_32791[11] = inst_32703);
return statearr_32791;
})();var statearr_32792_32829 = state_32761__$1;(statearr_32792_32829[2] = null);
(statearr_32792_32829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 18))
{var inst_32729 = (state_32761[2]);var state_32761__$1 = state_32761;var statearr_32793_32830 = state_32761__$1;(statearr_32793_32830[2] = inst_32729);
(statearr_32793_32830[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 19))
{var state_32761__$1 = state_32761;var statearr_32794_32831 = state_32761__$1;(statearr_32794_32831[2] = null);
(statearr_32794_32831[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 20))
{var state_32761__$1 = state_32761;var statearr_32795_32832 = state_32761__$1;(statearr_32795_32832[2] = null);
(statearr_32795_32832[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 21))
{var inst_32754 = (state_32761[2]);var state_32761__$1 = (function (){var statearr_32796 = state_32761;(statearr_32796[17] = inst_32754);
return statearr_32796;
})();var statearr_32797_32833 = state_32761__$1;(statearr_32797_32833[2] = null);
(statearr_32797_32833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 22))
{var inst_32751 = (state_32761[2]);var state_32761__$1 = state_32761;var statearr_32798_32834 = state_32761__$1;(statearr_32798_32834[2] = inst_32751);
(statearr_32798_32834[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 23))
{var inst_32738 = (state_32761[13]);var inst_32742 = (state_32761[2]);var inst_32743 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32738);var state_32761__$1 = (function (){var statearr_32799 = state_32761;(statearr_32799[18] = inst_32742);
return statearr_32799;
})();var statearr_32800_32835 = state_32761__$1;(statearr_32800_32835[2] = inst_32743);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32761__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32762 === 24))
{var inst_32740 = (state_32761[12]);var inst_32690 = (state_32761[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32761,23,Object,null,22);var inst_32747 = cljs.core.async.muxch_STAR_.call(null,inst_32740);var state_32761__$1 = state_32761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32761__$1,25,inst_32747,inst_32690);
} else
{if((state_val_32762 === 25))
{var inst_32749 = (state_32761[2]);var state_32761__$1 = state_32761;var statearr_32801_32836 = state_32761__$1;(statearr_32801_32836[2] = inst_32749);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32761__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_32805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32805[0] = state_machine__5507__auto__);
(statearr_32805[1] = 1);
return statearr_32805;
});
var state_machine__5507__auto____1 = (function (state_32761){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32761);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32806){if((e32806 instanceof Object))
{var ex__5510__auto__ = e32806;var statearr_32807_32837 = state_32761;(statearr_32807_32837[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32838 = state_32761;
state_32761 = G__32838;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32761){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32808 = f__5522__auto__.call(null);(statearr_32808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32809);
return statearr_32808;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___32975 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32945){var state_val_32946 = (state_32945[1]);if((state_val_32946 === 1))
{var state_32945__$1 = state_32945;var statearr_32947_32976 = state_32945__$1;(statearr_32947_32976[2] = null);
(statearr_32947_32976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 2))
{var inst_32908 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_32909 = 0;var state_32945__$1 = (function (){var statearr_32948 = state_32945;(statearr_32948[7] = inst_32909);
(statearr_32948[8] = inst_32908);
return statearr_32948;
})();var statearr_32949_32977 = state_32945__$1;(statearr_32949_32977[2] = null);
(statearr_32949_32977[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 3))
{var inst_32943 = (state_32945[2]);var state_32945__$1 = state_32945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32945__$1,inst_32943);
} else
{if((state_val_32946 === 4))
{var inst_32909 = (state_32945[7]);var inst_32911 = (inst_32909 < cnt);var state_32945__$1 = state_32945;if(cljs.core.truth_(inst_32911))
{var statearr_32950_32978 = state_32945__$1;(statearr_32950_32978[1] = 6);
} else
{var statearr_32951_32979 = state_32945__$1;(statearr_32951_32979[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 5))
{var inst_32929 = (state_32945[2]);var state_32945__$1 = (function (){var statearr_32952 = state_32945;(statearr_32952[9] = inst_32929);
return statearr_32952;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32945__$1,12,dchan);
} else
{if((state_val_32946 === 6))
{var state_32945__$1 = state_32945;var statearr_32953_32980 = state_32945__$1;(statearr_32953_32980[2] = null);
(statearr_32953_32980[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 7))
{var state_32945__$1 = state_32945;var statearr_32954_32981 = state_32945__$1;(statearr_32954_32981[2] = null);
(statearr_32954_32981[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 8))
{var inst_32927 = (state_32945[2]);var state_32945__$1 = state_32945;var statearr_32955_32982 = state_32945__$1;(statearr_32955_32982[2] = inst_32927);
(statearr_32955_32982[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 9))
{var inst_32909 = (state_32945[7]);var inst_32922 = (state_32945[2]);var inst_32923 = (inst_32909 + 1);var inst_32909__$1 = inst_32923;var state_32945__$1 = (function (){var statearr_32956 = state_32945;(statearr_32956[10] = inst_32922);
(statearr_32956[7] = inst_32909__$1);
return statearr_32956;
})();var statearr_32957_32983 = state_32945__$1;(statearr_32957_32983[2] = null);
(statearr_32957_32983[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 10))
{var inst_32913 = (state_32945[2]);var inst_32914 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_32945__$1 = (function (){var statearr_32958 = state_32945;(statearr_32958[11] = inst_32913);
return statearr_32958;
})();var statearr_32959_32984 = state_32945__$1;(statearr_32959_32984[2] = inst_32914);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32945__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 11))
{var inst_32909 = (state_32945[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32945,10,Object,null,9);var inst_32918 = chs__$1.call(null,inst_32909);var inst_32919 = done.call(null,inst_32909);var inst_32920 = cljs.core.async.take_BANG_.call(null,inst_32918,inst_32919);var state_32945__$1 = state_32945;var statearr_32960_32985 = state_32945__$1;(statearr_32960_32985[2] = inst_32920);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32945__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 12))
{var inst_32931 = (state_32945[12]);var inst_32931__$1 = (state_32945[2]);var inst_32932 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32931__$1);var state_32945__$1 = (function (){var statearr_32961 = state_32945;(statearr_32961[12] = inst_32931__$1);
return statearr_32961;
})();if(cljs.core.truth_(inst_32932))
{var statearr_32962_32986 = state_32945__$1;(statearr_32962_32986[1] = 13);
} else
{var statearr_32963_32987 = state_32945__$1;(statearr_32963_32987[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 13))
{var inst_32934 = cljs.core.async.close_BANG_.call(null,out);var state_32945__$1 = state_32945;var statearr_32964_32988 = state_32945__$1;(statearr_32964_32988[2] = inst_32934);
(statearr_32964_32988[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 14))
{var inst_32931 = (state_32945[12]);var inst_32936 = cljs.core.apply.call(null,f,inst_32931);var state_32945__$1 = state_32945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32945__$1,16,out,inst_32936);
} else
{if((state_val_32946 === 15))
{var inst_32941 = (state_32945[2]);var state_32945__$1 = state_32945;var statearr_32965_32989 = state_32945__$1;(statearr_32965_32989[2] = inst_32941);
(statearr_32965_32989[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32946 === 16))
{var inst_32938 = (state_32945[2]);var state_32945__$1 = (function (){var statearr_32966 = state_32945;(statearr_32966[13] = inst_32938);
return statearr_32966;
})();var statearr_32967_32990 = state_32945__$1;(statearr_32967_32990[2] = null);
(statearr_32967_32990[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32971[0] = state_machine__5507__auto__);
(statearr_32971[1] = 1);
return statearr_32971;
});
var state_machine__5507__auto____1 = (function (state_32945){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32945);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32972){if((e32972 instanceof Object))
{var ex__5510__auto__ = e32972;var statearr_32973_32991 = state_32945;(statearr_32973_32991[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32992 = state_32945;
state_32945 = G__32992;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32945){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32974 = f__5522__auto__.call(null);(statearr_32974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32975);
return statearr_32974;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33076){var state_val_33077 = (state_33076[1]);if((state_val_33077 === 1))
{var inst_33047 = cljs.core.vec.call(null,chs);var inst_33048 = inst_33047;var state_33076__$1 = (function (){var statearr_33078 = state_33076;(statearr_33078[7] = inst_33048);
return statearr_33078;
})();var statearr_33079_33101 = state_33076__$1;(statearr_33079_33101[2] = null);
(statearr_33079_33101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33077 === 2))
{var inst_33048 = (state_33076[7]);var inst_33050 = cljs.core.count.call(null,inst_33048);var inst_33051 = (inst_33050 > 0);var state_33076__$1 = state_33076;if(cljs.core.truth_(inst_33051))
{var statearr_33080_33102 = state_33076__$1;(statearr_33080_33102[1] = 4);
} else
{var statearr_33081_33103 = state_33076__$1;(statearr_33081_33103[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33077 === 3))
{var inst_33074 = (state_33076[2]);var state_33076__$1 = state_33076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33076__$1,inst_33074);
} else
{if((state_val_33077 === 4))
{var inst_33048 = (state_33076[7]);var state_33076__$1 = state_33076;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33076__$1,7,inst_33048);
} else
{if((state_val_33077 === 5))
{var inst_33070 = cljs.core.async.close_BANG_.call(null,out);var state_33076__$1 = state_33076;var statearr_33082_33104 = state_33076__$1;(statearr_33082_33104[2] = inst_33070);
(statearr_33082_33104[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33077 === 6))
{var inst_33072 = (state_33076[2]);var state_33076__$1 = state_33076;var statearr_33083_33105 = state_33076__$1;(statearr_33083_33105[2] = inst_33072);
(statearr_33083_33105[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33077 === 7))
{var inst_33055 = (state_33076[8]);var inst_33056 = (state_33076[9]);var inst_33055__$1 = (state_33076[2]);var inst_33056__$1 = cljs.core.nth.call(null,inst_33055__$1,0,null);var inst_33057 = cljs.core.nth.call(null,inst_33055__$1,1,null);var inst_33058 = (inst_33056__$1 == null);var state_33076__$1 = (function (){var statearr_33084 = state_33076;(statearr_33084[8] = inst_33055__$1);
(statearr_33084[10] = inst_33057);
(statearr_33084[9] = inst_33056__$1);
return statearr_33084;
})();if(cljs.core.truth_(inst_33058))
{var statearr_33085_33106 = state_33076__$1;(statearr_33085_33106[1] = 8);
} else
{var statearr_33086_33107 = state_33076__$1;(statearr_33086_33107[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33077 === 8))
{var inst_33048 = (state_33076[7]);var inst_33055 = (state_33076[8]);var inst_33057 = (state_33076[10]);var inst_33056 = (state_33076[9]);var inst_33060 = (function (){var c = inst_33057;var v = inst_33056;var vec__33053 = inst_33055;var cs = inst_33048;return ((function (c,v,vec__33053,cs,inst_33048,inst_33055,inst_33057,inst_33056,state_val_33077){
return (function (p1__32993_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__32993_SHARP_);
});
;})(c,v,vec__33053,cs,inst_33048,inst_33055,inst_33057,inst_33056,state_val_33077))
})();var inst_33061 = cljs.core.filterv.call(null,inst_33060,inst_33048);var inst_33048__$1 = inst_33061;var state_33076__$1 = (function (){var statearr_33087 = state_33076;(statearr_33087[7] = inst_33048__$1);
return statearr_33087;
})();var statearr_33088_33108 = state_33076__$1;(statearr_33088_33108[2] = null);
(statearr_33088_33108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33077 === 9))
{var inst_33056 = (state_33076[9]);var state_33076__$1 = state_33076;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33076__$1,11,out,inst_33056);
} else
{if((state_val_33077 === 10))
{var inst_33068 = (state_33076[2]);var state_33076__$1 = state_33076;var statearr_33090_33109 = state_33076__$1;(statearr_33090_33109[2] = inst_33068);
(statearr_33090_33109[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33077 === 11))
{var inst_33048 = (state_33076[7]);var inst_33065 = (state_33076[2]);var tmp33089 = inst_33048;var inst_33048__$1 = tmp33089;var state_33076__$1 = (function (){var statearr_33091 = state_33076;(statearr_33091[7] = inst_33048__$1);
(statearr_33091[11] = inst_33065);
return statearr_33091;
})();var statearr_33092_33110 = state_33076__$1;(statearr_33092_33110[2] = null);
(statearr_33092_33110[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33096 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33096[0] = state_machine__5507__auto__);
(statearr_33096[1] = 1);
return statearr_33096;
});
var state_machine__5507__auto____1 = (function (state_33076){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33076);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33097){if((e33097 instanceof Object))
{var ex__5510__auto__ = e33097;var statearr_33098_33111 = state_33076;(statearr_33098_33111[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33076);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33112 = state_33076;
state_33076 = G__33112;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33076){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33099 = f__5522__auto__.call(null);(statearr_33099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33100);
return statearr_33099;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33205 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33182){var state_val_33183 = (state_33182[1]);if((state_val_33183 === 1))
{var inst_33159 = 0;var state_33182__$1 = (function (){var statearr_33184 = state_33182;(statearr_33184[7] = inst_33159);
return statearr_33184;
})();var statearr_33185_33206 = state_33182__$1;(statearr_33185_33206[2] = null);
(statearr_33185_33206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33183 === 2))
{var inst_33159 = (state_33182[7]);var inst_33161 = (inst_33159 < n);var state_33182__$1 = state_33182;if(cljs.core.truth_(inst_33161))
{var statearr_33186_33207 = state_33182__$1;(statearr_33186_33207[1] = 4);
} else
{var statearr_33187_33208 = state_33182__$1;(statearr_33187_33208[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33183 === 3))
{var inst_33179 = (state_33182[2]);var inst_33180 = cljs.core.async.close_BANG_.call(null,out);var state_33182__$1 = (function (){var statearr_33188 = state_33182;(statearr_33188[8] = inst_33179);
return statearr_33188;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33182__$1,inst_33180);
} else
{if((state_val_33183 === 4))
{var state_33182__$1 = state_33182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33182__$1,7,ch);
} else
{if((state_val_33183 === 5))
{var state_33182__$1 = state_33182;var statearr_33189_33209 = state_33182__$1;(statearr_33189_33209[2] = null);
(statearr_33189_33209[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33183 === 6))
{var inst_33177 = (state_33182[2]);var state_33182__$1 = state_33182;var statearr_33190_33210 = state_33182__$1;(statearr_33190_33210[2] = inst_33177);
(statearr_33190_33210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33183 === 7))
{var inst_33164 = (state_33182[9]);var inst_33164__$1 = (state_33182[2]);var inst_33165 = (inst_33164__$1 == null);var inst_33166 = cljs.core.not.call(null,inst_33165);var state_33182__$1 = (function (){var statearr_33191 = state_33182;(statearr_33191[9] = inst_33164__$1);
return statearr_33191;
})();if(inst_33166)
{var statearr_33192_33211 = state_33182__$1;(statearr_33192_33211[1] = 8);
} else
{var statearr_33193_33212 = state_33182__$1;(statearr_33193_33212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33183 === 8))
{var inst_33164 = (state_33182[9]);var state_33182__$1 = state_33182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33182__$1,11,out,inst_33164);
} else
{if((state_val_33183 === 9))
{var state_33182__$1 = state_33182;var statearr_33194_33213 = state_33182__$1;(statearr_33194_33213[2] = null);
(statearr_33194_33213[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33183 === 10))
{var inst_33174 = (state_33182[2]);var state_33182__$1 = state_33182;var statearr_33195_33214 = state_33182__$1;(statearr_33195_33214[2] = inst_33174);
(statearr_33195_33214[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33183 === 11))
{var inst_33159 = (state_33182[7]);var inst_33169 = (state_33182[2]);var inst_33170 = (inst_33159 + 1);var inst_33159__$1 = inst_33170;var state_33182__$1 = (function (){var statearr_33196 = state_33182;(statearr_33196[7] = inst_33159__$1);
(statearr_33196[10] = inst_33169);
return statearr_33196;
})();var statearr_33197_33215 = state_33182__$1;(statearr_33197_33215[2] = null);
(statearr_33197_33215[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33201 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33201[0] = state_machine__5507__auto__);
(statearr_33201[1] = 1);
return statearr_33201;
});
var state_machine__5507__auto____1 = (function (state_33182){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33182);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33202){if((e33202 instanceof Object))
{var ex__5510__auto__ = e33202;var statearr_33203_33216 = state_33182;(statearr_33203_33216[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33217 = state_33182;
state_33182 = G__33217;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33182){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33204 = f__5522__auto__.call(null);(statearr_33204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33205);
return statearr_33204;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33314 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33289){var state_val_33290 = (state_33289[1]);if((state_val_33290 === 1))
{var inst_33266 = null;var state_33289__$1 = (function (){var statearr_33291 = state_33289;(statearr_33291[7] = inst_33266);
return statearr_33291;
})();var statearr_33292_33315 = state_33289__$1;(statearr_33292_33315[2] = null);
(statearr_33292_33315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33290 === 2))
{var state_33289__$1 = state_33289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33289__$1,4,ch);
} else
{if((state_val_33290 === 3))
{var inst_33286 = (state_33289[2]);var inst_33287 = cljs.core.async.close_BANG_.call(null,out);var state_33289__$1 = (function (){var statearr_33293 = state_33289;(statearr_33293[8] = inst_33286);
return statearr_33293;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33289__$1,inst_33287);
} else
{if((state_val_33290 === 4))
{var inst_33269 = (state_33289[9]);var inst_33269__$1 = (state_33289[2]);var inst_33270 = (inst_33269__$1 == null);var inst_33271 = cljs.core.not.call(null,inst_33270);var state_33289__$1 = (function (){var statearr_33294 = state_33289;(statearr_33294[9] = inst_33269__$1);
return statearr_33294;
})();if(inst_33271)
{var statearr_33295_33316 = state_33289__$1;(statearr_33295_33316[1] = 5);
} else
{var statearr_33296_33317 = state_33289__$1;(statearr_33296_33317[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33290 === 5))
{var inst_33269 = (state_33289[9]);var inst_33266 = (state_33289[7]);var inst_33273 = cljs.core._EQ_.call(null,inst_33269,inst_33266);var state_33289__$1 = state_33289;if(inst_33273)
{var statearr_33297_33318 = state_33289__$1;(statearr_33297_33318[1] = 8);
} else
{var statearr_33298_33319 = state_33289__$1;(statearr_33298_33319[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33290 === 6))
{var state_33289__$1 = state_33289;var statearr_33300_33320 = state_33289__$1;(statearr_33300_33320[2] = null);
(statearr_33300_33320[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33290 === 7))
{var inst_33284 = (state_33289[2]);var state_33289__$1 = state_33289;var statearr_33301_33321 = state_33289__$1;(statearr_33301_33321[2] = inst_33284);
(statearr_33301_33321[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33290 === 8))
{var inst_33266 = (state_33289[7]);var tmp33299 = inst_33266;var inst_33266__$1 = tmp33299;var state_33289__$1 = (function (){var statearr_33302 = state_33289;(statearr_33302[7] = inst_33266__$1);
return statearr_33302;
})();var statearr_33303_33322 = state_33289__$1;(statearr_33303_33322[2] = null);
(statearr_33303_33322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33290 === 9))
{var inst_33269 = (state_33289[9]);var state_33289__$1 = state_33289;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33289__$1,11,out,inst_33269);
} else
{if((state_val_33290 === 10))
{var inst_33281 = (state_33289[2]);var state_33289__$1 = state_33289;var statearr_33304_33323 = state_33289__$1;(statearr_33304_33323[2] = inst_33281);
(statearr_33304_33323[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33290 === 11))
{var inst_33269 = (state_33289[9]);var inst_33278 = (state_33289[2]);var inst_33266 = inst_33269;var state_33289__$1 = (function (){var statearr_33305 = state_33289;(statearr_33305[10] = inst_33278);
(statearr_33305[7] = inst_33266);
return statearr_33305;
})();var statearr_33306_33324 = state_33289__$1;(statearr_33306_33324[2] = null);
(statearr_33306_33324[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33310 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33310[0] = state_machine__5507__auto__);
(statearr_33310[1] = 1);
return statearr_33310;
});
var state_machine__5507__auto____1 = (function (state_33289){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33289);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33311){if((e33311 instanceof Object))
{var ex__5510__auto__ = e33311;var statearr_33312_33325 = state_33289;(statearr_33312_33325[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33289);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33326 = state_33289;
state_33289 = G__33326;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33289){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33313 = f__5522__auto__.call(null);(statearr_33313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33314);
return statearr_33313;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33461 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33431){var state_val_33432 = (state_33431[1]);if((state_val_33432 === 1))
{var inst_33394 = (new Array(n));var inst_33395 = inst_33394;var inst_33396 = 0;var state_33431__$1 = (function (){var statearr_33433 = state_33431;(statearr_33433[7] = inst_33395);
(statearr_33433[8] = inst_33396);
return statearr_33433;
})();var statearr_33434_33462 = state_33431__$1;(statearr_33434_33462[2] = null);
(statearr_33434_33462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 2))
{var state_33431__$1 = state_33431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33431__$1,4,ch);
} else
{if((state_val_33432 === 3))
{var inst_33429 = (state_33431[2]);var state_33431__$1 = state_33431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33431__$1,inst_33429);
} else
{if((state_val_33432 === 4))
{var inst_33399 = (state_33431[9]);var inst_33399__$1 = (state_33431[2]);var inst_33400 = (inst_33399__$1 == null);var inst_33401 = cljs.core.not.call(null,inst_33400);var state_33431__$1 = (function (){var statearr_33435 = state_33431;(statearr_33435[9] = inst_33399__$1);
return statearr_33435;
})();if(inst_33401)
{var statearr_33436_33463 = state_33431__$1;(statearr_33436_33463[1] = 5);
} else
{var statearr_33437_33464 = state_33431__$1;(statearr_33437_33464[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 5))
{var inst_33395 = (state_33431[7]);var inst_33396 = (state_33431[8]);var inst_33399 = (state_33431[9]);var inst_33404 = (state_33431[10]);var inst_33403 = (inst_33395[inst_33396] = inst_33399);var inst_33404__$1 = (inst_33396 + 1);var inst_33405 = (inst_33404__$1 < n);var state_33431__$1 = (function (){var statearr_33438 = state_33431;(statearr_33438[11] = inst_33403);
(statearr_33438[10] = inst_33404__$1);
return statearr_33438;
})();if(cljs.core.truth_(inst_33405))
{var statearr_33439_33465 = state_33431__$1;(statearr_33439_33465[1] = 8);
} else
{var statearr_33440_33466 = state_33431__$1;(statearr_33440_33466[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 6))
{var inst_33396 = (state_33431[8]);var inst_33417 = (inst_33396 > 0);var state_33431__$1 = state_33431;if(cljs.core.truth_(inst_33417))
{var statearr_33442_33467 = state_33431__$1;(statearr_33442_33467[1] = 12);
} else
{var statearr_33443_33468 = state_33431__$1;(statearr_33443_33468[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 7))
{var inst_33427 = (state_33431[2]);var state_33431__$1 = state_33431;var statearr_33444_33469 = state_33431__$1;(statearr_33444_33469[2] = inst_33427);
(statearr_33444_33469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 8))
{var inst_33395 = (state_33431[7]);var inst_33404 = (state_33431[10]);var tmp33441 = inst_33395;var inst_33395__$1 = tmp33441;var inst_33396 = inst_33404;var state_33431__$1 = (function (){var statearr_33445 = state_33431;(statearr_33445[7] = inst_33395__$1);
(statearr_33445[8] = inst_33396);
return statearr_33445;
})();var statearr_33446_33470 = state_33431__$1;(statearr_33446_33470[2] = null);
(statearr_33446_33470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 9))
{var inst_33395 = (state_33431[7]);var inst_33409 = cljs.core.vec.call(null,inst_33395);var state_33431__$1 = state_33431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33431__$1,11,out,inst_33409);
} else
{if((state_val_33432 === 10))
{var inst_33415 = (state_33431[2]);var state_33431__$1 = state_33431;var statearr_33447_33471 = state_33431__$1;(statearr_33447_33471[2] = inst_33415);
(statearr_33447_33471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 11))
{var inst_33411 = (state_33431[2]);var inst_33412 = (new Array(n));var inst_33395 = inst_33412;var inst_33396 = 0;var state_33431__$1 = (function (){var statearr_33448 = state_33431;(statearr_33448[7] = inst_33395);
(statearr_33448[8] = inst_33396);
(statearr_33448[12] = inst_33411);
return statearr_33448;
})();var statearr_33449_33472 = state_33431__$1;(statearr_33449_33472[2] = null);
(statearr_33449_33472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 12))
{var inst_33395 = (state_33431[7]);var inst_33419 = cljs.core.vec.call(null,inst_33395);var state_33431__$1 = state_33431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33431__$1,15,out,inst_33419);
} else
{if((state_val_33432 === 13))
{var state_33431__$1 = state_33431;var statearr_33450_33473 = state_33431__$1;(statearr_33450_33473[2] = null);
(statearr_33450_33473[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 14))
{var inst_33424 = (state_33431[2]);var inst_33425 = cljs.core.async.close_BANG_.call(null,out);var state_33431__$1 = (function (){var statearr_33451 = state_33431;(statearr_33451[13] = inst_33424);
return statearr_33451;
})();var statearr_33452_33474 = state_33431__$1;(statearr_33452_33474[2] = inst_33425);
(statearr_33452_33474[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33432 === 15))
{var inst_33421 = (state_33431[2]);var state_33431__$1 = state_33431;var statearr_33453_33475 = state_33431__$1;(statearr_33453_33475[2] = inst_33421);
(statearr_33453_33475[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_33457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33457[0] = state_machine__5507__auto__);
(statearr_33457[1] = 1);
return statearr_33457;
});
var state_machine__5507__auto____1 = (function (state_33431){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33431);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33458){if((e33458 instanceof Object))
{var ex__5510__auto__ = e33458;var statearr_33459_33476 = state_33431;(statearr_33459_33476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33477 = state_33431;
state_33431 = G__33477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33431){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33460 = f__5522__auto__.call(null);(statearr_33460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33461);
return statearr_33460;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33620 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33590){var state_val_33591 = (state_33590[1]);if((state_val_33591 === 1))
{var inst_33549 = [];var inst_33550 = inst_33549;var inst_33551 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_33590__$1 = (function (){var statearr_33592 = state_33590;(statearr_33592[7] = inst_33550);
(statearr_33592[8] = inst_33551);
return statearr_33592;
})();var statearr_33593_33621 = state_33590__$1;(statearr_33593_33621[2] = null);
(statearr_33593_33621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 2))
{var state_33590__$1 = state_33590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33590__$1,4,ch);
} else
{if((state_val_33591 === 3))
{var inst_33588 = (state_33590[2]);var state_33590__$1 = state_33590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33590__$1,inst_33588);
} else
{if((state_val_33591 === 4))
{var inst_33554 = (state_33590[9]);var inst_33554__$1 = (state_33590[2]);var inst_33555 = (inst_33554__$1 == null);var inst_33556 = cljs.core.not.call(null,inst_33555);var state_33590__$1 = (function (){var statearr_33594 = state_33590;(statearr_33594[9] = inst_33554__$1);
return statearr_33594;
})();if(inst_33556)
{var statearr_33595_33622 = state_33590__$1;(statearr_33595_33622[1] = 5);
} else
{var statearr_33596_33623 = state_33590__$1;(statearr_33596_33623[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 5))
{var inst_33558 = (state_33590[10]);var inst_33554 = (state_33590[9]);var inst_33551 = (state_33590[8]);var inst_33558__$1 = f.call(null,inst_33554);var inst_33559 = cljs.core._EQ_.call(null,inst_33558__$1,inst_33551);var inst_33560 = cljs.core.keyword_identical_QMARK_.call(null,inst_33551,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_33561 = (inst_33559) || (inst_33560);var state_33590__$1 = (function (){var statearr_33597 = state_33590;(statearr_33597[10] = inst_33558__$1);
return statearr_33597;
})();if(cljs.core.truth_(inst_33561))
{var statearr_33598_33624 = state_33590__$1;(statearr_33598_33624[1] = 8);
} else
{var statearr_33599_33625 = state_33590__$1;(statearr_33599_33625[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 6))
{var inst_33550 = (state_33590[7]);var inst_33575 = inst_33550.length;var inst_33576 = (inst_33575 > 0);var state_33590__$1 = state_33590;if(cljs.core.truth_(inst_33576))
{var statearr_33601_33626 = state_33590__$1;(statearr_33601_33626[1] = 12);
} else
{var statearr_33602_33627 = state_33590__$1;(statearr_33602_33627[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 7))
{var inst_33586 = (state_33590[2]);var state_33590__$1 = state_33590;var statearr_33603_33628 = state_33590__$1;(statearr_33603_33628[2] = inst_33586);
(statearr_33603_33628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 8))
{var inst_33550 = (state_33590[7]);var inst_33558 = (state_33590[10]);var inst_33554 = (state_33590[9]);var inst_33563 = inst_33550.push(inst_33554);var tmp33600 = inst_33550;var inst_33550__$1 = tmp33600;var inst_33551 = inst_33558;var state_33590__$1 = (function (){var statearr_33604 = state_33590;(statearr_33604[7] = inst_33550__$1);
(statearr_33604[11] = inst_33563);
(statearr_33604[8] = inst_33551);
return statearr_33604;
})();var statearr_33605_33629 = state_33590__$1;(statearr_33605_33629[2] = null);
(statearr_33605_33629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 9))
{var inst_33550 = (state_33590[7]);var inst_33566 = cljs.core.vec.call(null,inst_33550);var state_33590__$1 = state_33590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33590__$1,11,out,inst_33566);
} else
{if((state_val_33591 === 10))
{var inst_33573 = (state_33590[2]);var state_33590__$1 = state_33590;var statearr_33606_33630 = state_33590__$1;(statearr_33606_33630[2] = inst_33573);
(statearr_33606_33630[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 11))
{var inst_33558 = (state_33590[10]);var inst_33554 = (state_33590[9]);var inst_33568 = (state_33590[2]);var inst_33569 = [];var inst_33570 = inst_33569.push(inst_33554);var inst_33550 = inst_33569;var inst_33551 = inst_33558;var state_33590__$1 = (function (){var statearr_33607 = state_33590;(statearr_33607[7] = inst_33550);
(statearr_33607[8] = inst_33551);
(statearr_33607[12] = inst_33570);
(statearr_33607[13] = inst_33568);
return statearr_33607;
})();var statearr_33608_33631 = state_33590__$1;(statearr_33608_33631[2] = null);
(statearr_33608_33631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 12))
{var inst_33550 = (state_33590[7]);var inst_33578 = cljs.core.vec.call(null,inst_33550);var state_33590__$1 = state_33590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33590__$1,15,out,inst_33578);
} else
{if((state_val_33591 === 13))
{var state_33590__$1 = state_33590;var statearr_33609_33632 = state_33590__$1;(statearr_33609_33632[2] = null);
(statearr_33609_33632[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 14))
{var inst_33583 = (state_33590[2]);var inst_33584 = cljs.core.async.close_BANG_.call(null,out);var state_33590__$1 = (function (){var statearr_33610 = state_33590;(statearr_33610[14] = inst_33583);
return statearr_33610;
})();var statearr_33611_33633 = state_33590__$1;(statearr_33611_33633[2] = inst_33584);
(statearr_33611_33633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33591 === 15))
{var inst_33580 = (state_33590[2]);var state_33590__$1 = state_33590;var statearr_33612_33634 = state_33590__$1;(statearr_33612_33634[2] = inst_33580);
(statearr_33612_33634[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_33616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33616[0] = state_machine__5507__auto__);
(statearr_33616[1] = 1);
return statearr_33616;
});
var state_machine__5507__auto____1 = (function (state_33590){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33617){if((e33617 instanceof Object))
{var ex__5510__auto__ = e33617;var statearr_33618_33635 = state_33590;(statearr_33618_33635[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33636 = state_33590;
state_33590 = G__33636;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33590){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33619 = f__5522__auto__.call(null);(statearr_33619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33620);
return statearr_33619;
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
