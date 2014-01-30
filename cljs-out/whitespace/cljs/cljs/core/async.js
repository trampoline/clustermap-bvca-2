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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33094 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33094 = (function (f,fn_handler,meta33095){
this.f = f;
this.fn_handler = fn_handler;
this.meta33095 = meta33095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33094.cljs$lang$type = true;
cljs.core.async.t33094.cljs$lang$ctorStr = "cljs.core.async/t33094";
cljs.core.async.t33094.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33094");
});
cljs.core.async.t33094.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33096){var self__ = this;
var _33096__$1 = this;return self__.meta33095;
});
cljs.core.async.t33094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33096,meta33095__$1){var self__ = this;
var _33096__$1 = this;return (new cljs.core.async.t33094(self__.f,self__.fn_handler,meta33095__$1));
});
cljs.core.async.__GT_t33094 = (function __GT_t33094(f__$1,fn_handler__$1,meta33095){return (new cljs.core.async.t33094(f__$1,fn_handler__$1,meta33095));
});
}
return (new cljs.core.async.t33094(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33098 = buff;if(G__33098)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33098.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33098.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33098);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33098);
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
{var val_33099 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33099);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33099);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33100 = n;var x_33101 = 0;while(true){
if((x_33101 < n__4248__auto___33100))
{(a[x_33101] = 0);
{
var G__33102 = (x_33101 + 1);
x_33101 = G__33102;
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
var G__33103 = (i + 1);
i = G__33103;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33107 = (function (flag,alt_flag,meta33108){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33108 = meta33108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33107.cljs$lang$type = true;
cljs.core.async.t33107.cljs$lang$ctorStr = "cljs.core.async/t33107";
cljs.core.async.t33107.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33107");
});
cljs.core.async.t33107.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33109){var self__ = this;
var _33109__$1 = this;return self__.meta33108;
});
cljs.core.async.t33107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33109,meta33108__$1){var self__ = this;
var _33109__$1 = this;return (new cljs.core.async.t33107(self__.flag,self__.alt_flag,meta33108__$1));
});
cljs.core.async.__GT_t33107 = (function __GT_t33107(flag__$1,alt_flag__$1,meta33108){return (new cljs.core.async.t33107(flag__$1,alt_flag__$1,meta33108));
});
}
return (new cljs.core.async.t33107(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33113 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33113 = (function (cb,flag,alt_handler,meta33114){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33114 = meta33114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33113.cljs$lang$type = true;
cljs.core.async.t33113.cljs$lang$ctorStr = "cljs.core.async/t33113";
cljs.core.async.t33113.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33113");
});
cljs.core.async.t33113.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33115){var self__ = this;
var _33115__$1 = this;return self__.meta33114;
});
cljs.core.async.t33113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33115,meta33114__$1){var self__ = this;
var _33115__$1 = this;return (new cljs.core.async.t33113(self__.cb,self__.flag,self__.alt_handler,meta33114__$1));
});
cljs.core.async.__GT_t33113 = (function __GT_t33113(cb__$1,flag__$1,alt_handler__$1,meta33114){return (new cljs.core.async.t33113(cb__$1,flag__$1,alt_handler__$1,meta33114));
});
}
return (new cljs.core.async.t33113(cb,flag,alt_handler,null));
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
return (function (p1__33116_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33116_SHARP_,port], null));
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
var G__33117 = (i + 1);
i = G__33117;
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
var alts_BANG___delegate = function (ports,p__33118){var map__33120 = p__33118;var map__33120__$1 = ((cljs.core.seq_QMARK_.call(null,map__33120))?cljs.core.apply.call(null,cljs.core.hash_map,map__33120):map__33120);var opts = map__33120__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33118 = null;if (arguments.length > 1) {
  p__33118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33118);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33121){
var ports = cljs.core.first(arglist__33121);
var p__33118 = cljs.core.rest(arglist__33121);
return alts_BANG___delegate(ports,p__33118);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33129 = (function (ch,f,map_LT_,meta33130){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33130 = meta33130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33129.cljs$lang$type = true;
cljs.core.async.t33129.cljs$lang$ctorStr = "cljs.core.async/t33129";
cljs.core.async.t33129.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33129");
});
cljs.core.async.t33129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33132 = (function (fn1,_,meta33130,ch,f,map_LT_,meta33133){
this.fn1 = fn1;
this._ = _;
this.meta33130 = meta33130;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33133 = meta33133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33132.cljs$lang$type = true;
cljs.core.async.t33132.cljs$lang$ctorStr = "cljs.core.async/t33132";
cljs.core.async.t33132.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33132");
});
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33122_SHARP_){return f1.call(null,(((p1__33122_SHARP_ == null))?null:self__.f.call(null,p1__33122_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33134){var self__ = this;
var _33134__$1 = this;return self__.meta33133;
});
cljs.core.async.t33132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33134,meta33133__$1){var self__ = this;
var _33134__$1 = this;return (new cljs.core.async.t33132(self__.fn1,self__._,self__.meta33130,self__.ch,self__.f,self__.map_LT_,meta33133__$1));
});
cljs.core.async.__GT_t33132 = (function __GT_t33132(fn1__$1,___$2,meta33130__$1,ch__$2,f__$2,map_LT___$2,meta33133){return (new cljs.core.async.t33132(fn1__$1,___$2,meta33130__$1,ch__$2,f__$2,map_LT___$2,meta33133));
});
}
return (new cljs.core.async.t33132(fn1,___$1,self__.meta33130,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t33129.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33131){var self__ = this;
var _33131__$1 = this;return self__.meta33130;
});
cljs.core.async.t33129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33131,meta33130__$1){var self__ = this;
var _33131__$1 = this;return (new cljs.core.async.t33129(self__.ch,self__.f,self__.map_LT_,meta33130__$1));
});
cljs.core.async.__GT_t33129 = (function __GT_t33129(ch__$1,f__$1,map_LT___$1,meta33130){return (new cljs.core.async.t33129(ch__$1,f__$1,map_LT___$1,meta33130));
});
}
return (new cljs.core.async.t33129(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33138 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33138 = (function (ch,f,map_GT_,meta33139){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33139 = meta33139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33138.cljs$lang$type = true;
cljs.core.async.t33138.cljs$lang$ctorStr = "cljs.core.async/t33138";
cljs.core.async.t33138.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33138");
});
cljs.core.async.t33138.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33138.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33138.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33140){var self__ = this;
var _33140__$1 = this;return self__.meta33139;
});
cljs.core.async.t33138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33140,meta33139__$1){var self__ = this;
var _33140__$1 = this;return (new cljs.core.async.t33138(self__.ch,self__.f,self__.map_GT_,meta33139__$1));
});
cljs.core.async.__GT_t33138 = (function __GT_t33138(ch__$1,f__$1,map_GT___$1,meta33139){return (new cljs.core.async.t33138(ch__$1,f__$1,map_GT___$1,meta33139));
});
}
return (new cljs.core.async.t33138(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33144 = (function (ch,p,filter_GT_,meta33145){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33145 = meta33145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33144.cljs$lang$type = true;
cljs.core.async.t33144.cljs$lang$ctorStr = "cljs.core.async/t33144";
cljs.core.async.t33144.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33144");
});
cljs.core.async.t33144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33144.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33146){var self__ = this;
var _33146__$1 = this;return self__.meta33145;
});
cljs.core.async.t33144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33146,meta33145__$1){var self__ = this;
var _33146__$1 = this;return (new cljs.core.async.t33144(self__.ch,self__.p,self__.filter_GT_,meta33145__$1));
});
cljs.core.async.__GT_t33144 = (function __GT_t33144(ch__$1,p__$1,filter_GT___$1,meta33145){return (new cljs.core.async.t33144(ch__$1,p__$1,filter_GT___$1,meta33145));
});
}
return (new cljs.core.async.t33144(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33208){var state_val_33209 = (state_33208[1]);if((state_val_33209 === 1))
{var state_33208__$1 = state_33208;var statearr_33210_33230 = state_33208__$1;(statearr_33210_33230[2] = null);
(statearr_33210_33230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33209 === 2))
{var state_33208__$1 = state_33208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33208__$1,4,ch);
} else
{if((state_val_33209 === 3))
{var inst_33206 = (state_33208[2]);var state_33208__$1 = state_33208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33208__$1,inst_33206);
} else
{if((state_val_33209 === 4))
{var inst_33190 = (state_33208[7]);var inst_33190__$1 = (state_33208[2]);var inst_33191 = (inst_33190__$1 == null);var state_33208__$1 = (function (){var statearr_33211 = state_33208;(statearr_33211[7] = inst_33190__$1);
return statearr_33211;
})();if(cljs.core.truth_(inst_33191))
{var statearr_33212_33231 = state_33208__$1;(statearr_33212_33231[1] = 5);
} else
{var statearr_33213_33232 = state_33208__$1;(statearr_33213_33232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33209 === 5))
{var inst_33193 = cljs.core.async.close_BANG_.call(null,out);var state_33208__$1 = state_33208;var statearr_33214_33233 = state_33208__$1;(statearr_33214_33233[2] = inst_33193);
(statearr_33214_33233[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33209 === 6))
{var inst_33190 = (state_33208[7]);var inst_33195 = p.call(null,inst_33190);var state_33208__$1 = state_33208;if(cljs.core.truth_(inst_33195))
{var statearr_33215_33234 = state_33208__$1;(statearr_33215_33234[1] = 8);
} else
{var statearr_33216_33235 = state_33208__$1;(statearr_33216_33235[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33209 === 7))
{var inst_33204 = (state_33208[2]);var state_33208__$1 = state_33208;var statearr_33217_33236 = state_33208__$1;(statearr_33217_33236[2] = inst_33204);
(statearr_33217_33236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33209 === 8))
{var inst_33190 = (state_33208[7]);var state_33208__$1 = state_33208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33208__$1,11,out,inst_33190);
} else
{if((state_val_33209 === 9))
{var state_33208__$1 = state_33208;var statearr_33218_33237 = state_33208__$1;(statearr_33218_33237[2] = null);
(statearr_33218_33237[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33209 === 10))
{var inst_33201 = (state_33208[2]);var state_33208__$1 = (function (){var statearr_33219 = state_33208;(statearr_33219[8] = inst_33201);
return statearr_33219;
})();var statearr_33220_33238 = state_33208__$1;(statearr_33220_33238[2] = null);
(statearr_33220_33238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33209 === 11))
{var inst_33198 = (state_33208[2]);var state_33208__$1 = state_33208;var statearr_33221_33239 = state_33208__$1;(statearr_33221_33239[2] = inst_33198);
(statearr_33221_33239[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_33225 = [null,null,null,null,null,null,null,null,null];(statearr_33225[0] = state_machine__5507__auto__);
(statearr_33225[1] = 1);
return statearr_33225;
});
var state_machine__5507__auto____1 = (function (state_33208){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33208);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33226){if((e33226 instanceof Object))
{var ex__5510__auto__ = e33226;var statearr_33227_33240 = state_33208;(statearr_33227_33240[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33241 = state_33208;
state_33208 = G__33241;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33208){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33228 = f__5522__auto__.call(null);(statearr_33228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33229);
return statearr_33228;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33393){var state_val_33394 = (state_33393[1]);if((state_val_33394 === 1))
{var state_33393__$1 = state_33393;var statearr_33395_33432 = state_33393__$1;(statearr_33395_33432[2] = null);
(statearr_33395_33432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 2))
{var state_33393__$1 = state_33393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33393__$1,4,in$);
} else
{if((state_val_33394 === 3))
{var inst_33391 = (state_33393[2]);var state_33393__$1 = state_33393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33393__$1,inst_33391);
} else
{if((state_val_33394 === 4))
{var inst_33339 = (state_33393[7]);var inst_33339__$1 = (state_33393[2]);var inst_33340 = (inst_33339__$1 == null);var state_33393__$1 = (function (){var statearr_33396 = state_33393;(statearr_33396[7] = inst_33339__$1);
return statearr_33396;
})();if(cljs.core.truth_(inst_33340))
{var statearr_33397_33433 = state_33393__$1;(statearr_33397_33433[1] = 5);
} else
{var statearr_33398_33434 = state_33393__$1;(statearr_33398_33434[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 5))
{var inst_33342 = cljs.core.async.close_BANG_.call(null,out);var state_33393__$1 = state_33393;var statearr_33399_33435 = state_33393__$1;(statearr_33399_33435[2] = inst_33342);
(statearr_33399_33435[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 6))
{var inst_33339 = (state_33393[7]);var inst_33344 = f.call(null,inst_33339);var inst_33349 = cljs.core.seq.call(null,inst_33344);var inst_33350 = inst_33349;var inst_33351 = null;var inst_33352 = 0;var inst_33353 = 0;var state_33393__$1 = (function (){var statearr_33400 = state_33393;(statearr_33400[8] = inst_33351);
(statearr_33400[9] = inst_33352);
(statearr_33400[10] = inst_33350);
(statearr_33400[11] = inst_33353);
return statearr_33400;
})();var statearr_33401_33436 = state_33393__$1;(statearr_33401_33436[2] = null);
(statearr_33401_33436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 7))
{var inst_33389 = (state_33393[2]);var state_33393__$1 = state_33393;var statearr_33402_33437 = state_33393__$1;(statearr_33402_33437[2] = inst_33389);
(statearr_33402_33437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 8))
{var inst_33352 = (state_33393[9]);var inst_33353 = (state_33393[11]);var inst_33355 = (inst_33353 < inst_33352);var inst_33356 = inst_33355;var state_33393__$1 = state_33393;if(cljs.core.truth_(inst_33356))
{var statearr_33403_33438 = state_33393__$1;(statearr_33403_33438[1] = 10);
} else
{var statearr_33404_33439 = state_33393__$1;(statearr_33404_33439[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 9))
{var inst_33386 = (state_33393[2]);var state_33393__$1 = (function (){var statearr_33405 = state_33393;(statearr_33405[12] = inst_33386);
return statearr_33405;
})();var statearr_33406_33440 = state_33393__$1;(statearr_33406_33440[2] = null);
(statearr_33406_33440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 10))
{var inst_33351 = (state_33393[8]);var inst_33353 = (state_33393[11]);var inst_33358 = cljs.core._nth.call(null,inst_33351,inst_33353);var state_33393__$1 = state_33393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33393__$1,13,out,inst_33358);
} else
{if((state_val_33394 === 11))
{var inst_33350 = (state_33393[10]);var inst_33364 = (state_33393[13]);var inst_33364__$1 = cljs.core.seq.call(null,inst_33350);var state_33393__$1 = (function (){var statearr_33410 = state_33393;(statearr_33410[13] = inst_33364__$1);
return statearr_33410;
})();if(inst_33364__$1)
{var statearr_33411_33441 = state_33393__$1;(statearr_33411_33441[1] = 14);
} else
{var statearr_33412_33442 = state_33393__$1;(statearr_33412_33442[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 12))
{var inst_33384 = (state_33393[2]);var state_33393__$1 = state_33393;var statearr_33413_33443 = state_33393__$1;(statearr_33413_33443[2] = inst_33384);
(statearr_33413_33443[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 13))
{var inst_33351 = (state_33393[8]);var inst_33352 = (state_33393[9]);var inst_33350 = (state_33393[10]);var inst_33353 = (state_33393[11]);var inst_33360 = (state_33393[2]);var inst_33361 = (inst_33353 + 1);var tmp33407 = inst_33351;var tmp33408 = inst_33352;var tmp33409 = inst_33350;var inst_33350__$1 = tmp33409;var inst_33351__$1 = tmp33407;var inst_33352__$1 = tmp33408;var inst_33353__$1 = inst_33361;var state_33393__$1 = (function (){var statearr_33414 = state_33393;(statearr_33414[8] = inst_33351__$1);
(statearr_33414[9] = inst_33352__$1);
(statearr_33414[10] = inst_33350__$1);
(statearr_33414[14] = inst_33360);
(statearr_33414[11] = inst_33353__$1);
return statearr_33414;
})();var statearr_33415_33444 = state_33393__$1;(statearr_33415_33444[2] = null);
(statearr_33415_33444[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 14))
{var inst_33364 = (state_33393[13]);var inst_33366 = cljs.core.chunked_seq_QMARK_.call(null,inst_33364);var state_33393__$1 = state_33393;if(inst_33366)
{var statearr_33416_33445 = state_33393__$1;(statearr_33416_33445[1] = 17);
} else
{var statearr_33417_33446 = state_33393__$1;(statearr_33417_33446[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 15))
{var state_33393__$1 = state_33393;var statearr_33418_33447 = state_33393__$1;(statearr_33418_33447[2] = null);
(statearr_33418_33447[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 16))
{var inst_33382 = (state_33393[2]);var state_33393__$1 = state_33393;var statearr_33419_33448 = state_33393__$1;(statearr_33419_33448[2] = inst_33382);
(statearr_33419_33448[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 17))
{var inst_33364 = (state_33393[13]);var inst_33368 = cljs.core.chunk_first.call(null,inst_33364);var inst_33369 = cljs.core.chunk_rest.call(null,inst_33364);var inst_33370 = cljs.core.count.call(null,inst_33368);var inst_33350 = inst_33369;var inst_33351 = inst_33368;var inst_33352 = inst_33370;var inst_33353 = 0;var state_33393__$1 = (function (){var statearr_33420 = state_33393;(statearr_33420[8] = inst_33351);
(statearr_33420[9] = inst_33352);
(statearr_33420[10] = inst_33350);
(statearr_33420[11] = inst_33353);
return statearr_33420;
})();var statearr_33421_33449 = state_33393__$1;(statearr_33421_33449[2] = null);
(statearr_33421_33449[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 18))
{var inst_33364 = (state_33393[13]);var inst_33373 = cljs.core.first.call(null,inst_33364);var state_33393__$1 = state_33393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33393__$1,20,out,inst_33373);
} else
{if((state_val_33394 === 19))
{var inst_33379 = (state_33393[2]);var state_33393__$1 = state_33393;var statearr_33422_33450 = state_33393__$1;(statearr_33422_33450[2] = inst_33379);
(statearr_33422_33450[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33394 === 20))
{var inst_33364 = (state_33393[13]);var inst_33375 = (state_33393[2]);var inst_33376 = cljs.core.next.call(null,inst_33364);var inst_33350 = inst_33376;var inst_33351 = null;var inst_33352 = 0;var inst_33353 = 0;var state_33393__$1 = (function (){var statearr_33423 = state_33393;(statearr_33423[8] = inst_33351);
(statearr_33423[9] = inst_33352);
(statearr_33423[10] = inst_33350);
(statearr_33423[11] = inst_33353);
(statearr_33423[15] = inst_33375);
return statearr_33423;
})();var statearr_33424_33451 = state_33393__$1;(statearr_33424_33451[2] = null);
(statearr_33424_33451[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33428[0] = state_machine__5507__auto__);
(statearr_33428[1] = 1);
return statearr_33428;
});
var state_machine__5507__auto____1 = (function (state_33393){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33393);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33429){if((e33429 instanceof Object))
{var ex__5510__auto__ = e33429;var statearr_33430_33452 = state_33393;(statearr_33430_33452[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33393);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33453 = state_33393;
state_33393 = G__33453;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33393){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33431 = f__5522__auto__.call(null);(statearr_33431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33431;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33534 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33513){var state_val_33514 = (state_33513[1]);if((state_val_33514 === 1))
{var state_33513__$1 = state_33513;var statearr_33515_33535 = state_33513__$1;(statearr_33515_33535[2] = null);
(statearr_33515_33535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33514 === 2))
{var state_33513__$1 = state_33513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33513__$1,4,from);
} else
{if((state_val_33514 === 3))
{var inst_33511 = (state_33513[2]);var state_33513__$1 = state_33513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33513__$1,inst_33511);
} else
{if((state_val_33514 === 4))
{var inst_33496 = (state_33513[7]);var inst_33496__$1 = (state_33513[2]);var inst_33497 = (inst_33496__$1 == null);var state_33513__$1 = (function (){var statearr_33516 = state_33513;(statearr_33516[7] = inst_33496__$1);
return statearr_33516;
})();if(cljs.core.truth_(inst_33497))
{var statearr_33517_33536 = state_33513__$1;(statearr_33517_33536[1] = 5);
} else
{var statearr_33518_33537 = state_33513__$1;(statearr_33518_33537[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33514 === 5))
{var state_33513__$1 = state_33513;if(cljs.core.truth_(close_QMARK_))
{var statearr_33519_33538 = state_33513__$1;(statearr_33519_33538[1] = 8);
} else
{var statearr_33520_33539 = state_33513__$1;(statearr_33520_33539[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33514 === 6))
{var inst_33496 = (state_33513[7]);var state_33513__$1 = state_33513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33513__$1,11,to,inst_33496);
} else
{if((state_val_33514 === 7))
{var inst_33509 = (state_33513[2]);var state_33513__$1 = state_33513;var statearr_33521_33540 = state_33513__$1;(statearr_33521_33540[2] = inst_33509);
(statearr_33521_33540[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33514 === 8))
{var inst_33500 = cljs.core.async.close_BANG_.call(null,to);var state_33513__$1 = state_33513;var statearr_33522_33541 = state_33513__$1;(statearr_33522_33541[2] = inst_33500);
(statearr_33522_33541[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33514 === 9))
{var state_33513__$1 = state_33513;var statearr_33523_33542 = state_33513__$1;(statearr_33523_33542[2] = null);
(statearr_33523_33542[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33514 === 10))
{var inst_33503 = (state_33513[2]);var state_33513__$1 = state_33513;var statearr_33524_33543 = state_33513__$1;(statearr_33524_33543[2] = inst_33503);
(statearr_33524_33543[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33514 === 11))
{var inst_33506 = (state_33513[2]);var state_33513__$1 = (function (){var statearr_33525 = state_33513;(statearr_33525[8] = inst_33506);
return statearr_33525;
})();var statearr_33526_33544 = state_33513__$1;(statearr_33526_33544[2] = null);
(statearr_33526_33544[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33530 = [null,null,null,null,null,null,null,null,null];(statearr_33530[0] = state_machine__5507__auto__);
(statearr_33530[1] = 1);
return statearr_33530;
});
var state_machine__5507__auto____1 = (function (state_33513){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33513);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33531){if((e33531 instanceof Object))
{var ex__5510__auto__ = e33531;var statearr_33532_33545 = state_33513;(statearr_33532_33545[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33546 = state_33513;
state_33513 = G__33546;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33513){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33533 = f__5522__auto__.call(null);(statearr_33533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33534);
return statearr_33533;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33633 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33611){var state_val_33612 = (state_33611[1]);if((state_val_33612 === 1))
{var state_33611__$1 = state_33611;var statearr_33613_33634 = state_33611__$1;(statearr_33613_33634[2] = null);
(statearr_33613_33634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33612 === 2))
{var state_33611__$1 = state_33611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33611__$1,4,ch);
} else
{if((state_val_33612 === 3))
{var inst_33609 = (state_33611[2]);var state_33611__$1 = state_33611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33611__$1,inst_33609);
} else
{if((state_val_33612 === 4))
{var inst_33592 = (state_33611[7]);var inst_33592__$1 = (state_33611[2]);var inst_33593 = (inst_33592__$1 == null);var state_33611__$1 = (function (){var statearr_33614 = state_33611;(statearr_33614[7] = inst_33592__$1);
return statearr_33614;
})();if(cljs.core.truth_(inst_33593))
{var statearr_33615_33635 = state_33611__$1;(statearr_33615_33635[1] = 5);
} else
{var statearr_33616_33636 = state_33611__$1;(statearr_33616_33636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33612 === 5))
{var inst_33595 = cljs.core.async.close_BANG_.call(null,tc);var inst_33596 = cljs.core.async.close_BANG_.call(null,fc);var state_33611__$1 = (function (){var statearr_33617 = state_33611;(statearr_33617[8] = inst_33595);
return statearr_33617;
})();var statearr_33618_33637 = state_33611__$1;(statearr_33618_33637[2] = inst_33596);
(statearr_33618_33637[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33612 === 6))
{var inst_33592 = (state_33611[7]);var inst_33598 = p.call(null,inst_33592);var state_33611__$1 = state_33611;if(cljs.core.truth_(inst_33598))
{var statearr_33619_33638 = state_33611__$1;(statearr_33619_33638[1] = 9);
} else
{var statearr_33620_33639 = state_33611__$1;(statearr_33620_33639[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33612 === 7))
{var inst_33607 = (state_33611[2]);var state_33611__$1 = state_33611;var statearr_33621_33640 = state_33611__$1;(statearr_33621_33640[2] = inst_33607);
(statearr_33621_33640[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33612 === 8))
{var inst_33604 = (state_33611[2]);var state_33611__$1 = (function (){var statearr_33622 = state_33611;(statearr_33622[9] = inst_33604);
return statearr_33622;
})();var statearr_33623_33641 = state_33611__$1;(statearr_33623_33641[2] = null);
(statearr_33623_33641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33612 === 9))
{var state_33611__$1 = state_33611;var statearr_33624_33642 = state_33611__$1;(statearr_33624_33642[2] = tc);
(statearr_33624_33642[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33612 === 10))
{var state_33611__$1 = state_33611;var statearr_33625_33643 = state_33611__$1;(statearr_33625_33643[2] = fc);
(statearr_33625_33643[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33612 === 11))
{var inst_33592 = (state_33611[7]);var inst_33602 = (state_33611[2]);var state_33611__$1 = state_33611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33611__$1,8,inst_33602,inst_33592);
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
var state_machine__5507__auto____0 = (function (){var statearr_33629 = [null,null,null,null,null,null,null,null,null,null];(statearr_33629[0] = state_machine__5507__auto__);
(statearr_33629[1] = 1);
return statearr_33629;
});
var state_machine__5507__auto____1 = (function (state_33611){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33611);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33630){if((e33630 instanceof Object))
{var ex__5510__auto__ = e33630;var statearr_33631_33644 = state_33611;(statearr_33631_33644[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33611);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33645 = state_33611;
state_33611 = G__33645;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33611){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33632 = f__5522__auto__.call(null);(statearr_33632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33633);
return statearr_33632;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33692){var state_val_33693 = (state_33692[1]);if((state_val_33693 === 7))
{var inst_33688 = (state_33692[2]);var state_33692__$1 = state_33692;var statearr_33694_33710 = state_33692__$1;(statearr_33694_33710[2] = inst_33688);
(statearr_33694_33710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33693 === 6))
{var inst_33678 = (state_33692[7]);var inst_33681 = (state_33692[8]);var inst_33685 = f.call(null,inst_33678,inst_33681);var inst_33678__$1 = inst_33685;var state_33692__$1 = (function (){var statearr_33695 = state_33692;(statearr_33695[7] = inst_33678__$1);
return statearr_33695;
})();var statearr_33696_33711 = state_33692__$1;(statearr_33696_33711[2] = null);
(statearr_33696_33711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33693 === 5))
{var inst_33678 = (state_33692[7]);var state_33692__$1 = state_33692;var statearr_33697_33712 = state_33692__$1;(statearr_33697_33712[2] = inst_33678);
(statearr_33697_33712[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33693 === 4))
{var inst_33681 = (state_33692[8]);var inst_33681__$1 = (state_33692[2]);var inst_33682 = (inst_33681__$1 == null);var state_33692__$1 = (function (){var statearr_33698 = state_33692;(statearr_33698[8] = inst_33681__$1);
return statearr_33698;
})();if(cljs.core.truth_(inst_33682))
{var statearr_33699_33713 = state_33692__$1;(statearr_33699_33713[1] = 5);
} else
{var statearr_33700_33714 = state_33692__$1;(statearr_33700_33714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33693 === 3))
{var inst_33690 = (state_33692[2]);var state_33692__$1 = state_33692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33692__$1,inst_33690);
} else
{if((state_val_33693 === 2))
{var state_33692__$1 = state_33692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33692__$1,4,ch);
} else
{if((state_val_33693 === 1))
{var inst_33678 = init;var state_33692__$1 = (function (){var statearr_33701 = state_33692;(statearr_33701[7] = inst_33678);
return statearr_33701;
})();var statearr_33702_33715 = state_33692__$1;(statearr_33702_33715[2] = null);
(statearr_33702_33715[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33706 = [null,null,null,null,null,null,null,null,null];(statearr_33706[0] = state_machine__5507__auto__);
(statearr_33706[1] = 1);
return statearr_33706;
});
var state_machine__5507__auto____1 = (function (state_33692){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33692);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33707){if((e33707 instanceof Object))
{var ex__5510__auto__ = e33707;var statearr_33708_33716 = state_33692;(statearr_33708_33716[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33717 = state_33692;
state_33692 = G__33717;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33692){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33709 = f__5522__auto__.call(null);(statearr_33709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33709;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33779){var state_val_33780 = (state_33779[1]);if((state_val_33780 === 1))
{var inst_33759 = cljs.core.seq.call(null,coll);var inst_33760 = inst_33759;var state_33779__$1 = (function (){var statearr_33781 = state_33779;(statearr_33781[7] = inst_33760);
return statearr_33781;
})();var statearr_33782_33800 = state_33779__$1;(statearr_33782_33800[2] = null);
(statearr_33782_33800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33780 === 2))
{var inst_33760 = (state_33779[7]);var state_33779__$1 = state_33779;if(cljs.core.truth_(inst_33760))
{var statearr_33783_33801 = state_33779__$1;(statearr_33783_33801[1] = 4);
} else
{var statearr_33784_33802 = state_33779__$1;(statearr_33784_33802[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33780 === 3))
{var inst_33777 = (state_33779[2]);var state_33779__$1 = state_33779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33779__$1,inst_33777);
} else
{if((state_val_33780 === 4))
{var inst_33760 = (state_33779[7]);var inst_33763 = cljs.core.first.call(null,inst_33760);var state_33779__$1 = state_33779;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33779__$1,7,ch,inst_33763);
} else
{if((state_val_33780 === 5))
{var state_33779__$1 = state_33779;if(cljs.core.truth_(close_QMARK_))
{var statearr_33785_33803 = state_33779__$1;(statearr_33785_33803[1] = 8);
} else
{var statearr_33786_33804 = state_33779__$1;(statearr_33786_33804[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33780 === 6))
{var inst_33775 = (state_33779[2]);var state_33779__$1 = state_33779;var statearr_33787_33805 = state_33779__$1;(statearr_33787_33805[2] = inst_33775);
(statearr_33787_33805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33780 === 7))
{var inst_33760 = (state_33779[7]);var inst_33765 = (state_33779[2]);var inst_33766 = cljs.core.next.call(null,inst_33760);var inst_33760__$1 = inst_33766;var state_33779__$1 = (function (){var statearr_33788 = state_33779;(statearr_33788[7] = inst_33760__$1);
(statearr_33788[8] = inst_33765);
return statearr_33788;
})();var statearr_33789_33806 = state_33779__$1;(statearr_33789_33806[2] = null);
(statearr_33789_33806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33780 === 8))
{var inst_33770 = cljs.core.async.close_BANG_.call(null,ch);var state_33779__$1 = state_33779;var statearr_33790_33807 = state_33779__$1;(statearr_33790_33807[2] = inst_33770);
(statearr_33790_33807[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33780 === 9))
{var state_33779__$1 = state_33779;var statearr_33791_33808 = state_33779__$1;(statearr_33791_33808[2] = null);
(statearr_33791_33808[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33780 === 10))
{var inst_33773 = (state_33779[2]);var state_33779__$1 = state_33779;var statearr_33792_33809 = state_33779__$1;(statearr_33792_33809[2] = inst_33773);
(statearr_33792_33809[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33796 = [null,null,null,null,null,null,null,null,null];(statearr_33796[0] = state_machine__5507__auto__);
(statearr_33796[1] = 1);
return statearr_33796;
});
var state_machine__5507__auto____1 = (function (state_33779){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33779);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33797){if((e33797 instanceof Object))
{var ex__5510__auto__ = e33797;var statearr_33798_33810 = state_33779;(statearr_33798_33810[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33779);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33811 = state_33779;
state_33779 = G__33811;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33779){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33799 = f__5522__auto__.call(null);(statearr_33799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33799;
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
cljs.core.async.Mux = (function (){var obj33813 = {};return obj33813;
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
cljs.core.async.Mult = (function (){var obj33815 = {};return obj33815;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34039 = (function (cs,ch,mult,meta34040){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34040 = meta34040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34039.cljs$lang$type = true;
cljs.core.async.t34039.cljs$lang$ctorStr = "cljs.core.async/t34039";
cljs.core.async.t34039.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34039");
});})(cs))
;
cljs.core.async.t34039.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34039.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34039.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34039.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34039.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34041){var self__ = this;
var _34041__$1 = this;return self__.meta34040;
});})(cs))
;
cljs.core.async.t34039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34041,meta34040__$1){var self__ = this;
var _34041__$1 = this;return (new cljs.core.async.t34039(self__.cs,self__.ch,self__.mult,meta34040__$1));
});})(cs))
;
cljs.core.async.__GT_t34039 = ((function (cs){
return (function __GT_t34039(cs__$1,ch__$1,mult__$1,meta34040){return (new cljs.core.async.t34039(cs__$1,ch__$1,mult__$1,meta34040));
});})(cs))
;
}
return (new cljs.core.async.t34039(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34262 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34176){var state_val_34177 = (state_34176[1]);if((state_val_34177 === 32))
{var inst_34044 = (state_34176[7]);var inst_34120 = (state_34176[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34176,31,Object,null,30);var inst_34127 = cljs.core.async.put_BANG_.call(null,inst_34120,inst_34044,done);var state_34176__$1 = state_34176;var statearr_34178_34263 = state_34176__$1;(statearr_34178_34263[2] = inst_34127);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34176__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 1))
{var state_34176__$1 = state_34176;var statearr_34179_34264 = state_34176__$1;(statearr_34179_34264[2] = null);
(statearr_34179_34264[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 33))
{var inst_34133 = (state_34176[9]);var inst_34135 = cljs.core.chunked_seq_QMARK_.call(null,inst_34133);var state_34176__$1 = state_34176;if(inst_34135)
{var statearr_34180_34265 = state_34176__$1;(statearr_34180_34265[1] = 36);
} else
{var statearr_34181_34266 = state_34176__$1;(statearr_34181_34266[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 2))
{var state_34176__$1 = state_34176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34176__$1,4,ch);
} else
{if((state_val_34177 === 34))
{var state_34176__$1 = state_34176;var statearr_34182_34267 = state_34176__$1;(statearr_34182_34267[2] = null);
(statearr_34182_34267[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 3))
{var inst_34174 = (state_34176[2]);var state_34176__$1 = state_34176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34176__$1,inst_34174);
} else
{if((state_val_34177 === 35))
{var inst_34158 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34183_34268 = state_34176__$1;(statearr_34183_34268[2] = inst_34158);
(statearr_34183_34268[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 4))
{var inst_34044 = (state_34176[7]);var inst_34044__$1 = (state_34176[2]);var inst_34045 = (inst_34044__$1 == null);var state_34176__$1 = (function (){var statearr_34184 = state_34176;(statearr_34184[7] = inst_34044__$1);
return statearr_34184;
})();if(cljs.core.truth_(inst_34045))
{var statearr_34185_34269 = state_34176__$1;(statearr_34185_34269[1] = 5);
} else
{var statearr_34186_34270 = state_34176__$1;(statearr_34186_34270[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 36))
{var inst_34133 = (state_34176[9]);var inst_34137 = cljs.core.chunk_first.call(null,inst_34133);var inst_34138 = cljs.core.chunk_rest.call(null,inst_34133);var inst_34139 = cljs.core.count.call(null,inst_34137);var inst_34112 = inst_34138;var inst_34113 = inst_34137;var inst_34114 = inst_34139;var inst_34115 = 0;var state_34176__$1 = (function (){var statearr_34187 = state_34176;(statearr_34187[10] = inst_34115);
(statearr_34187[11] = inst_34114);
(statearr_34187[12] = inst_34113);
(statearr_34187[13] = inst_34112);
return statearr_34187;
})();var statearr_34188_34271 = state_34176__$1;(statearr_34188_34271[2] = null);
(statearr_34188_34271[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 5))
{var inst_34051 = cljs.core.deref.call(null,cs);var inst_34052 = cljs.core.seq.call(null,inst_34051);var inst_34053 = inst_34052;var inst_34054 = null;var inst_34055 = 0;var inst_34056 = 0;var state_34176__$1 = (function (){var statearr_34189 = state_34176;(statearr_34189[14] = inst_34055);
(statearr_34189[15] = inst_34056);
(statearr_34189[16] = inst_34053);
(statearr_34189[17] = inst_34054);
return statearr_34189;
})();var statearr_34190_34272 = state_34176__$1;(statearr_34190_34272[2] = null);
(statearr_34190_34272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 37))
{var inst_34133 = (state_34176[9]);var inst_34142 = cljs.core.first.call(null,inst_34133);var state_34176__$1 = (function (){var statearr_34191 = state_34176;(statearr_34191[18] = inst_34142);
return statearr_34191;
})();var statearr_34192_34273 = state_34176__$1;(statearr_34192_34273[2] = null);
(statearr_34192_34273[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 6))
{var inst_34104 = (state_34176[19]);var inst_34103 = cljs.core.deref.call(null,cs);var inst_34104__$1 = cljs.core.keys.call(null,inst_34103);var inst_34105 = cljs.core.count.call(null,inst_34104__$1);var inst_34106 = cljs.core.reset_BANG_.call(null,dctr,inst_34105);var inst_34111 = cljs.core.seq.call(null,inst_34104__$1);var inst_34112 = inst_34111;var inst_34113 = null;var inst_34114 = 0;var inst_34115 = 0;var state_34176__$1 = (function (){var statearr_34193 = state_34176;(statearr_34193[10] = inst_34115);
(statearr_34193[20] = inst_34106);
(statearr_34193[11] = inst_34114);
(statearr_34193[12] = inst_34113);
(statearr_34193[13] = inst_34112);
(statearr_34193[19] = inst_34104__$1);
return statearr_34193;
})();var statearr_34194_34274 = state_34176__$1;(statearr_34194_34274[2] = null);
(statearr_34194_34274[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 38))
{var inst_34155 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34195_34275 = state_34176__$1;(statearr_34195_34275[2] = inst_34155);
(statearr_34195_34275[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 7))
{var inst_34172 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34196_34276 = state_34176__$1;(statearr_34196_34276[2] = inst_34172);
(statearr_34196_34276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 39))
{var inst_34133 = (state_34176[9]);var inst_34151 = (state_34176[2]);var inst_34152 = cljs.core.next.call(null,inst_34133);var inst_34112 = inst_34152;var inst_34113 = null;var inst_34114 = 0;var inst_34115 = 0;var state_34176__$1 = (function (){var statearr_34197 = state_34176;(statearr_34197[10] = inst_34115);
(statearr_34197[11] = inst_34114);
(statearr_34197[12] = inst_34113);
(statearr_34197[13] = inst_34112);
(statearr_34197[21] = inst_34151);
return statearr_34197;
})();var statearr_34198_34277 = state_34176__$1;(statearr_34198_34277[2] = null);
(statearr_34198_34277[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 8))
{var inst_34055 = (state_34176[14]);var inst_34056 = (state_34176[15]);var inst_34058 = (inst_34056 < inst_34055);var inst_34059 = inst_34058;var state_34176__$1 = state_34176;if(cljs.core.truth_(inst_34059))
{var statearr_34199_34278 = state_34176__$1;(statearr_34199_34278[1] = 10);
} else
{var statearr_34200_34279 = state_34176__$1;(statearr_34200_34279[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 40))
{var inst_34142 = (state_34176[18]);var inst_34143 = (state_34176[2]);var inst_34144 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34145 = cljs.core.async.untap_STAR_.call(null,m,inst_34142);var state_34176__$1 = (function (){var statearr_34201 = state_34176;(statearr_34201[22] = inst_34143);
(statearr_34201[23] = inst_34144);
return statearr_34201;
})();var statearr_34202_34280 = state_34176__$1;(statearr_34202_34280[2] = inst_34145);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34176__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 9))
{var inst_34101 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34203_34281 = state_34176__$1;(statearr_34203_34281[2] = inst_34101);
(statearr_34203_34281[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 41))
{var inst_34044 = (state_34176[7]);var inst_34142 = (state_34176[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34176,40,Object,null,39);var inst_34149 = cljs.core.async.put_BANG_.call(null,inst_34142,inst_34044,done);var state_34176__$1 = state_34176;var statearr_34204_34282 = state_34176__$1;(statearr_34204_34282[2] = inst_34149);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34176__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 10))
{var inst_34056 = (state_34176[15]);var inst_34054 = (state_34176[17]);var inst_34062 = cljs.core._nth.call(null,inst_34054,inst_34056);var inst_34063 = cljs.core.nth.call(null,inst_34062,0,null);var inst_34064 = cljs.core.nth.call(null,inst_34062,1,null);var state_34176__$1 = (function (){var statearr_34205 = state_34176;(statearr_34205[24] = inst_34063);
return statearr_34205;
})();if(cljs.core.truth_(inst_34064))
{var statearr_34206_34283 = state_34176__$1;(statearr_34206_34283[1] = 13);
} else
{var statearr_34207_34284 = state_34176__$1;(statearr_34207_34284[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 42))
{var state_34176__$1 = state_34176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34176__$1,45,dchan);
} else
{if((state_val_34177 === 11))
{var inst_34053 = (state_34176[16]);var inst_34073 = (state_34176[25]);var inst_34073__$1 = cljs.core.seq.call(null,inst_34053);var state_34176__$1 = (function (){var statearr_34208 = state_34176;(statearr_34208[25] = inst_34073__$1);
return statearr_34208;
})();if(inst_34073__$1)
{var statearr_34209_34285 = state_34176__$1;(statearr_34209_34285[1] = 16);
} else
{var statearr_34210_34286 = state_34176__$1;(statearr_34210_34286[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 43))
{var state_34176__$1 = state_34176;var statearr_34211_34287 = state_34176__$1;(statearr_34211_34287[2] = null);
(statearr_34211_34287[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 12))
{var inst_34099 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34212_34288 = state_34176__$1;(statearr_34212_34288[2] = inst_34099);
(statearr_34212_34288[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 44))
{var inst_34169 = (state_34176[2]);var state_34176__$1 = (function (){var statearr_34213 = state_34176;(statearr_34213[26] = inst_34169);
return statearr_34213;
})();var statearr_34214_34289 = state_34176__$1;(statearr_34214_34289[2] = null);
(statearr_34214_34289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 13))
{var inst_34063 = (state_34176[24]);var inst_34066 = cljs.core.async.close_BANG_.call(null,inst_34063);var state_34176__$1 = state_34176;var statearr_34215_34290 = state_34176__$1;(statearr_34215_34290[2] = inst_34066);
(statearr_34215_34290[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 45))
{var inst_34166 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34219_34291 = state_34176__$1;(statearr_34219_34291[2] = inst_34166);
(statearr_34219_34291[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 14))
{var state_34176__$1 = state_34176;var statearr_34220_34292 = state_34176__$1;(statearr_34220_34292[2] = null);
(statearr_34220_34292[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 15))
{var inst_34055 = (state_34176[14]);var inst_34056 = (state_34176[15]);var inst_34053 = (state_34176[16]);var inst_34054 = (state_34176[17]);var inst_34069 = (state_34176[2]);var inst_34070 = (inst_34056 + 1);var tmp34216 = inst_34055;var tmp34217 = inst_34053;var tmp34218 = inst_34054;var inst_34053__$1 = tmp34217;var inst_34054__$1 = tmp34218;var inst_34055__$1 = tmp34216;var inst_34056__$1 = inst_34070;var state_34176__$1 = (function (){var statearr_34221 = state_34176;(statearr_34221[14] = inst_34055__$1);
(statearr_34221[15] = inst_34056__$1);
(statearr_34221[16] = inst_34053__$1);
(statearr_34221[17] = inst_34054__$1);
(statearr_34221[27] = inst_34069);
return statearr_34221;
})();var statearr_34222_34293 = state_34176__$1;(statearr_34222_34293[2] = null);
(statearr_34222_34293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 16))
{var inst_34073 = (state_34176[25]);var inst_34075 = cljs.core.chunked_seq_QMARK_.call(null,inst_34073);var state_34176__$1 = state_34176;if(inst_34075)
{var statearr_34223_34294 = state_34176__$1;(statearr_34223_34294[1] = 19);
} else
{var statearr_34224_34295 = state_34176__$1;(statearr_34224_34295[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 17))
{var state_34176__$1 = state_34176;var statearr_34225_34296 = state_34176__$1;(statearr_34225_34296[2] = null);
(statearr_34225_34296[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 18))
{var inst_34097 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34226_34297 = state_34176__$1;(statearr_34226_34297[2] = inst_34097);
(statearr_34226_34297[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 19))
{var inst_34073 = (state_34176[25]);var inst_34077 = cljs.core.chunk_first.call(null,inst_34073);var inst_34078 = cljs.core.chunk_rest.call(null,inst_34073);var inst_34079 = cljs.core.count.call(null,inst_34077);var inst_34053 = inst_34078;var inst_34054 = inst_34077;var inst_34055 = inst_34079;var inst_34056 = 0;var state_34176__$1 = (function (){var statearr_34227 = state_34176;(statearr_34227[14] = inst_34055);
(statearr_34227[15] = inst_34056);
(statearr_34227[16] = inst_34053);
(statearr_34227[17] = inst_34054);
return statearr_34227;
})();var statearr_34228_34298 = state_34176__$1;(statearr_34228_34298[2] = null);
(statearr_34228_34298[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 20))
{var inst_34073 = (state_34176[25]);var inst_34083 = cljs.core.first.call(null,inst_34073);var inst_34084 = cljs.core.nth.call(null,inst_34083,0,null);var inst_34085 = cljs.core.nth.call(null,inst_34083,1,null);var state_34176__$1 = (function (){var statearr_34229 = state_34176;(statearr_34229[28] = inst_34084);
return statearr_34229;
})();if(cljs.core.truth_(inst_34085))
{var statearr_34230_34299 = state_34176__$1;(statearr_34230_34299[1] = 22);
} else
{var statearr_34231_34300 = state_34176__$1;(statearr_34231_34300[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 21))
{var inst_34094 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34232_34301 = state_34176__$1;(statearr_34232_34301[2] = inst_34094);
(statearr_34232_34301[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 22))
{var inst_34084 = (state_34176[28]);var inst_34087 = cljs.core.async.close_BANG_.call(null,inst_34084);var state_34176__$1 = state_34176;var statearr_34233_34302 = state_34176__$1;(statearr_34233_34302[2] = inst_34087);
(statearr_34233_34302[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 23))
{var state_34176__$1 = state_34176;var statearr_34234_34303 = state_34176__$1;(statearr_34234_34303[2] = null);
(statearr_34234_34303[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 24))
{var inst_34073 = (state_34176[25]);var inst_34090 = (state_34176[2]);var inst_34091 = cljs.core.next.call(null,inst_34073);var inst_34053 = inst_34091;var inst_34054 = null;var inst_34055 = 0;var inst_34056 = 0;var state_34176__$1 = (function (){var statearr_34235 = state_34176;(statearr_34235[14] = inst_34055);
(statearr_34235[15] = inst_34056);
(statearr_34235[16] = inst_34053);
(statearr_34235[17] = inst_34054);
(statearr_34235[29] = inst_34090);
return statearr_34235;
})();var statearr_34236_34304 = state_34176__$1;(statearr_34236_34304[2] = null);
(statearr_34236_34304[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 25))
{var inst_34115 = (state_34176[10]);var inst_34114 = (state_34176[11]);var inst_34117 = (inst_34115 < inst_34114);var inst_34118 = inst_34117;var state_34176__$1 = state_34176;if(cljs.core.truth_(inst_34118))
{var statearr_34237_34305 = state_34176__$1;(statearr_34237_34305[1] = 27);
} else
{var statearr_34238_34306 = state_34176__$1;(statearr_34238_34306[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 26))
{var inst_34104 = (state_34176[19]);var inst_34162 = (state_34176[2]);var inst_34163 = cljs.core.seq.call(null,inst_34104);var state_34176__$1 = (function (){var statearr_34239 = state_34176;(statearr_34239[30] = inst_34162);
return statearr_34239;
})();if(inst_34163)
{var statearr_34240_34307 = state_34176__$1;(statearr_34240_34307[1] = 42);
} else
{var statearr_34241_34308 = state_34176__$1;(statearr_34241_34308[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 27))
{var inst_34115 = (state_34176[10]);var inst_34113 = (state_34176[12]);var inst_34120 = cljs.core._nth.call(null,inst_34113,inst_34115);var state_34176__$1 = (function (){var statearr_34242 = state_34176;(statearr_34242[8] = inst_34120);
return statearr_34242;
})();var statearr_34243_34309 = state_34176__$1;(statearr_34243_34309[2] = null);
(statearr_34243_34309[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 28))
{var inst_34133 = (state_34176[9]);var inst_34112 = (state_34176[13]);var inst_34133__$1 = cljs.core.seq.call(null,inst_34112);var state_34176__$1 = (function (){var statearr_34247 = state_34176;(statearr_34247[9] = inst_34133__$1);
return statearr_34247;
})();if(inst_34133__$1)
{var statearr_34248_34310 = state_34176__$1;(statearr_34248_34310[1] = 33);
} else
{var statearr_34249_34311 = state_34176__$1;(statearr_34249_34311[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 29))
{var inst_34160 = (state_34176[2]);var state_34176__$1 = state_34176;var statearr_34250_34312 = state_34176__$1;(statearr_34250_34312[2] = inst_34160);
(statearr_34250_34312[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 30))
{var inst_34115 = (state_34176[10]);var inst_34114 = (state_34176[11]);var inst_34113 = (state_34176[12]);var inst_34112 = (state_34176[13]);var inst_34129 = (state_34176[2]);var inst_34130 = (inst_34115 + 1);var tmp34244 = inst_34114;var tmp34245 = inst_34113;var tmp34246 = inst_34112;var inst_34112__$1 = tmp34246;var inst_34113__$1 = tmp34245;var inst_34114__$1 = tmp34244;var inst_34115__$1 = inst_34130;var state_34176__$1 = (function (){var statearr_34251 = state_34176;(statearr_34251[31] = inst_34129);
(statearr_34251[10] = inst_34115__$1);
(statearr_34251[11] = inst_34114__$1);
(statearr_34251[12] = inst_34113__$1);
(statearr_34251[13] = inst_34112__$1);
return statearr_34251;
})();var statearr_34252_34313 = state_34176__$1;(statearr_34252_34313[2] = null);
(statearr_34252_34313[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34177 === 31))
{var inst_34120 = (state_34176[8]);var inst_34121 = (state_34176[2]);var inst_34122 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34123 = cljs.core.async.untap_STAR_.call(null,m,inst_34120);var state_34176__$1 = (function (){var statearr_34253 = state_34176;(statearr_34253[32] = inst_34121);
(statearr_34253[33] = inst_34122);
return statearr_34253;
})();var statearr_34254_34314 = state_34176__$1;(statearr_34254_34314[2] = inst_34123);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34176__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34258[0] = state_machine__5507__auto__);
(statearr_34258[1] = 1);
return statearr_34258;
});
var state_machine__5507__auto____1 = (function (state_34176){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34176);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34259){if((e34259 instanceof Object))
{var ex__5510__auto__ = e34259;var statearr_34260_34315 = state_34176;(statearr_34260_34315[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34316 = state_34176;
state_34176 = G__34316;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34176){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34261 = f__5522__auto__.call(null);(statearr_34261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34262);
return statearr_34261;
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
cljs.core.async.Mix = (function (){var obj34318 = {};return obj34318;
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
;var m = (function (){if(typeof cljs.core.async.t34428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34428 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34429){
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
this.meta34429 = meta34429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34428.cljs$lang$type = true;
cljs.core.async.t34428.cljs$lang$ctorStr = "cljs.core.async/t34428";
cljs.core.async.t34428.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34428");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34428.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34428.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34428.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34428.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34428.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34428.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34428.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34430){var self__ = this;
var _34430__$1 = this;return self__.meta34429;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34430,meta34429__$1){var self__ = this;
var _34430__$1 = this;return (new cljs.core.async.t34428(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34429__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34428 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34428(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34429){return (new cljs.core.async.t34428(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34429));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34428(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34537 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34495){var state_val_34496 = (state_34495[1]);if((state_val_34496 === 1))
{var inst_34434 = (state_34495[7]);var inst_34434__$1 = calc_state.call(null);var inst_34435 = cljs.core.seq_QMARK_.call(null,inst_34434__$1);var state_34495__$1 = (function (){var statearr_34497 = state_34495;(statearr_34497[7] = inst_34434__$1);
return statearr_34497;
})();if(inst_34435)
{var statearr_34498_34538 = state_34495__$1;(statearr_34498_34538[1] = 2);
} else
{var statearr_34499_34539 = state_34495__$1;(statearr_34499_34539[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 2))
{var inst_34434 = (state_34495[7]);var inst_34437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34434);var state_34495__$1 = state_34495;var statearr_34500_34540 = state_34495__$1;(statearr_34500_34540[2] = inst_34437);
(statearr_34500_34540[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 3))
{var inst_34434 = (state_34495[7]);var state_34495__$1 = state_34495;var statearr_34501_34541 = state_34495__$1;(statearr_34501_34541[2] = inst_34434);
(statearr_34501_34541[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 4))
{var inst_34434 = (state_34495[7]);var inst_34440 = (state_34495[2]);var inst_34441 = cljs.core.get.call(null,inst_34440,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34442 = cljs.core.get.call(null,inst_34440,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34443 = cljs.core.get.call(null,inst_34440,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34444 = inst_34434;var state_34495__$1 = (function (){var statearr_34502 = state_34495;(statearr_34502[8] = inst_34441);
(statearr_34502[9] = inst_34444);
(statearr_34502[10] = inst_34443);
(statearr_34502[11] = inst_34442);
return statearr_34502;
})();var statearr_34503_34542 = state_34495__$1;(statearr_34503_34542[2] = null);
(statearr_34503_34542[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 5))
{var inst_34444 = (state_34495[9]);var inst_34447 = cljs.core.seq_QMARK_.call(null,inst_34444);var state_34495__$1 = state_34495;if(inst_34447)
{var statearr_34504_34543 = state_34495__$1;(statearr_34504_34543[1] = 7);
} else
{var statearr_34505_34544 = state_34495__$1;(statearr_34505_34544[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 6))
{var inst_34493 = (state_34495[2]);var state_34495__$1 = state_34495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34495__$1,inst_34493);
} else
{if((state_val_34496 === 7))
{var inst_34444 = (state_34495[9]);var inst_34449 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34444);var state_34495__$1 = state_34495;var statearr_34506_34545 = state_34495__$1;(statearr_34506_34545[2] = inst_34449);
(statearr_34506_34545[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 8))
{var inst_34444 = (state_34495[9]);var state_34495__$1 = state_34495;var statearr_34507_34546 = state_34495__$1;(statearr_34507_34546[2] = inst_34444);
(statearr_34507_34546[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 9))
{var inst_34452 = (state_34495[12]);var inst_34452__$1 = (state_34495[2]);var inst_34453 = cljs.core.get.call(null,inst_34452__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34454 = cljs.core.get.call(null,inst_34452__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34455 = cljs.core.get.call(null,inst_34452__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34495__$1 = (function (){var statearr_34508 = state_34495;(statearr_34508[13] = inst_34455);
(statearr_34508[14] = inst_34454);
(statearr_34508[12] = inst_34452__$1);
return statearr_34508;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34495__$1,10,inst_34453);
} else
{if((state_val_34496 === 10))
{var inst_34460 = (state_34495[15]);var inst_34459 = (state_34495[16]);var inst_34458 = (state_34495[2]);var inst_34459__$1 = cljs.core.nth.call(null,inst_34458,0,null);var inst_34460__$1 = cljs.core.nth.call(null,inst_34458,1,null);var inst_34461 = (inst_34459__$1 == null);var inst_34462 = cljs.core._EQ_.call(null,inst_34460__$1,change);var inst_34463 = (inst_34461) || (inst_34462);var state_34495__$1 = (function (){var statearr_34509 = state_34495;(statearr_34509[15] = inst_34460__$1);
(statearr_34509[16] = inst_34459__$1);
return statearr_34509;
})();if(cljs.core.truth_(inst_34463))
{var statearr_34510_34547 = state_34495__$1;(statearr_34510_34547[1] = 11);
} else
{var statearr_34511_34548 = state_34495__$1;(statearr_34511_34548[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 11))
{var inst_34459 = (state_34495[16]);var inst_34465 = (inst_34459 == null);var state_34495__$1 = state_34495;if(cljs.core.truth_(inst_34465))
{var statearr_34512_34549 = state_34495__$1;(statearr_34512_34549[1] = 14);
} else
{var statearr_34513_34550 = state_34495__$1;(statearr_34513_34550[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 12))
{var inst_34455 = (state_34495[13]);var inst_34460 = (state_34495[15]);var inst_34474 = (state_34495[17]);var inst_34474__$1 = inst_34455.call(null,inst_34460);var state_34495__$1 = (function (){var statearr_34514 = state_34495;(statearr_34514[17] = inst_34474__$1);
return statearr_34514;
})();if(cljs.core.truth_(inst_34474__$1))
{var statearr_34515_34551 = state_34495__$1;(statearr_34515_34551[1] = 17);
} else
{var statearr_34516_34552 = state_34495__$1;(statearr_34516_34552[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 13))
{var inst_34491 = (state_34495[2]);var state_34495__$1 = state_34495;var statearr_34517_34553 = state_34495__$1;(statearr_34517_34553[2] = inst_34491);
(statearr_34517_34553[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 14))
{var inst_34460 = (state_34495[15]);var inst_34467 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34460);var state_34495__$1 = state_34495;var statearr_34518_34554 = state_34495__$1;(statearr_34518_34554[2] = inst_34467);
(statearr_34518_34554[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 15))
{var state_34495__$1 = state_34495;var statearr_34519_34555 = state_34495__$1;(statearr_34519_34555[2] = null);
(statearr_34519_34555[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 16))
{var inst_34470 = (state_34495[2]);var inst_34471 = calc_state.call(null);var inst_34444 = inst_34471;var state_34495__$1 = (function (){var statearr_34520 = state_34495;(statearr_34520[9] = inst_34444);
(statearr_34520[18] = inst_34470);
return statearr_34520;
})();var statearr_34521_34556 = state_34495__$1;(statearr_34521_34556[2] = null);
(statearr_34521_34556[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 17))
{var inst_34474 = (state_34495[17]);var state_34495__$1 = state_34495;var statearr_34522_34557 = state_34495__$1;(statearr_34522_34557[2] = inst_34474);
(statearr_34522_34557[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 18))
{var inst_34455 = (state_34495[13]);var inst_34454 = (state_34495[14]);var inst_34460 = (state_34495[15]);var inst_34477 = cljs.core.empty_QMARK_.call(null,inst_34455);var inst_34478 = inst_34454.call(null,inst_34460);var inst_34479 = cljs.core.not.call(null,inst_34478);var inst_34480 = (inst_34477) && (inst_34479);var state_34495__$1 = state_34495;var statearr_34523_34558 = state_34495__$1;(statearr_34523_34558[2] = inst_34480);
(statearr_34523_34558[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 19))
{var inst_34482 = (state_34495[2]);var state_34495__$1 = state_34495;if(cljs.core.truth_(inst_34482))
{var statearr_34524_34559 = state_34495__$1;(statearr_34524_34559[1] = 20);
} else
{var statearr_34525_34560 = state_34495__$1;(statearr_34525_34560[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 20))
{var inst_34459 = (state_34495[16]);var state_34495__$1 = state_34495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34495__$1,23,out,inst_34459);
} else
{if((state_val_34496 === 21))
{var state_34495__$1 = state_34495;var statearr_34526_34561 = state_34495__$1;(statearr_34526_34561[2] = null);
(statearr_34526_34561[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 22))
{var inst_34452 = (state_34495[12]);var inst_34488 = (state_34495[2]);var inst_34444 = inst_34452;var state_34495__$1 = (function (){var statearr_34527 = state_34495;(statearr_34527[9] = inst_34444);
(statearr_34527[19] = inst_34488);
return statearr_34527;
})();var statearr_34528_34562 = state_34495__$1;(statearr_34528_34562[2] = null);
(statearr_34528_34562[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34496 === 23))
{var inst_34485 = (state_34495[2]);var state_34495__$1 = state_34495;var statearr_34529_34563 = state_34495__$1;(statearr_34529_34563[2] = inst_34485);
(statearr_34529_34563[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34533[0] = state_machine__5507__auto__);
(statearr_34533[1] = 1);
return statearr_34533;
});
var state_machine__5507__auto____1 = (function (state_34495){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34495);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34534){if((e34534 instanceof Object))
{var ex__5510__auto__ = e34534;var statearr_34535_34564 = state_34495;(statearr_34535_34564[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34565 = state_34495;
state_34495 = G__34565;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34495){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34536 = f__5522__auto__.call(null);(statearr_34536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34537);
return statearr_34536;
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
cljs.core.async.Pub = (function (){var obj34567 = {};return obj34567;
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
return (function (p1__34568_SHARP_){if(cljs.core.truth_(p1__34568_SHARP_.call(null,topic)))
{return p1__34568_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34568_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34693 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34694){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34694 = meta34694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34693.cljs$lang$type = true;
cljs.core.async.t34693.cljs$lang$ctorStr = "cljs.core.async/t34693";
cljs.core.async.t34693.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34693");
});})(mults,ensure_mult))
;
cljs.core.async.t34693.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34693.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34693.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34693.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34695){var self__ = this;
var _34695__$1 = this;return self__.meta34694;
});})(mults,ensure_mult))
;
cljs.core.async.t34693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34695,meta34694__$1){var self__ = this;
var _34695__$1 = this;return (new cljs.core.async.t34693(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34694__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34693 = ((function (mults,ensure_mult){
return (function __GT_t34693(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34694){return (new cljs.core.async.t34693(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34694));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34693(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34817 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34769){var state_val_34770 = (state_34769[1]);if((state_val_34770 === 1))
{var state_34769__$1 = state_34769;var statearr_34771_34818 = state_34769__$1;(statearr_34771_34818[2] = null);
(statearr_34771_34818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 2))
{var state_34769__$1 = state_34769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34769__$1,4,ch);
} else
{if((state_val_34770 === 3))
{var inst_34767 = (state_34769[2]);var state_34769__$1 = state_34769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34769__$1,inst_34767);
} else
{if((state_val_34770 === 4))
{var inst_34698 = (state_34769[7]);var inst_34698__$1 = (state_34769[2]);var inst_34699 = (inst_34698__$1 == null);var state_34769__$1 = (function (){var statearr_34772 = state_34769;(statearr_34772[7] = inst_34698__$1);
return statearr_34772;
})();if(cljs.core.truth_(inst_34699))
{var statearr_34773_34819 = state_34769__$1;(statearr_34773_34819[1] = 5);
} else
{var statearr_34774_34820 = state_34769__$1;(statearr_34774_34820[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 5))
{var inst_34705 = cljs.core.deref.call(null,mults);var inst_34706 = cljs.core.vals.call(null,inst_34705);var inst_34707 = cljs.core.seq.call(null,inst_34706);var inst_34708 = inst_34707;var inst_34709 = null;var inst_34710 = 0;var inst_34711 = 0;var state_34769__$1 = (function (){var statearr_34775 = state_34769;(statearr_34775[8] = inst_34710);
(statearr_34775[9] = inst_34709);
(statearr_34775[10] = inst_34711);
(statearr_34775[11] = inst_34708);
return statearr_34775;
})();var statearr_34776_34821 = state_34769__$1;(statearr_34776_34821[2] = null);
(statearr_34776_34821[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 6))
{var inst_34698 = (state_34769[7]);var inst_34748 = (state_34769[12]);var inst_34746 = (state_34769[13]);var inst_34746__$1 = topic_fn.call(null,inst_34698);var inst_34747 = cljs.core.deref.call(null,mults);var inst_34748__$1 = cljs.core.get.call(null,inst_34747,inst_34746__$1);var state_34769__$1 = (function (){var statearr_34777 = state_34769;(statearr_34777[12] = inst_34748__$1);
(statearr_34777[13] = inst_34746__$1);
return statearr_34777;
})();if(cljs.core.truth_(inst_34748__$1))
{var statearr_34778_34822 = state_34769__$1;(statearr_34778_34822[1] = 19);
} else
{var statearr_34779_34823 = state_34769__$1;(statearr_34779_34823[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 7))
{var inst_34765 = (state_34769[2]);var state_34769__$1 = state_34769;var statearr_34780_34824 = state_34769__$1;(statearr_34780_34824[2] = inst_34765);
(statearr_34780_34824[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 8))
{var inst_34710 = (state_34769[8]);var inst_34711 = (state_34769[10]);var inst_34713 = (inst_34711 < inst_34710);var inst_34714 = inst_34713;var state_34769__$1 = state_34769;if(cljs.core.truth_(inst_34714))
{var statearr_34784_34825 = state_34769__$1;(statearr_34784_34825[1] = 10);
} else
{var statearr_34785_34826 = state_34769__$1;(statearr_34785_34826[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 9))
{var inst_34744 = (state_34769[2]);var state_34769__$1 = state_34769;var statearr_34786_34827 = state_34769__$1;(statearr_34786_34827[2] = inst_34744);
(statearr_34786_34827[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 10))
{var inst_34710 = (state_34769[8]);var inst_34709 = (state_34769[9]);var inst_34711 = (state_34769[10]);var inst_34708 = (state_34769[11]);var inst_34716 = cljs.core._nth.call(null,inst_34709,inst_34711);var inst_34717 = cljs.core.async.muxch_STAR_.call(null,inst_34716);var inst_34718 = cljs.core.async.close_BANG_.call(null,inst_34717);var inst_34719 = (inst_34711 + 1);var tmp34781 = inst_34710;var tmp34782 = inst_34709;var tmp34783 = inst_34708;var inst_34708__$1 = tmp34783;var inst_34709__$1 = tmp34782;var inst_34710__$1 = tmp34781;var inst_34711__$1 = inst_34719;var state_34769__$1 = (function (){var statearr_34787 = state_34769;(statearr_34787[8] = inst_34710__$1);
(statearr_34787[9] = inst_34709__$1);
(statearr_34787[10] = inst_34711__$1);
(statearr_34787[11] = inst_34708__$1);
(statearr_34787[14] = inst_34718);
return statearr_34787;
})();var statearr_34788_34828 = state_34769__$1;(statearr_34788_34828[2] = null);
(statearr_34788_34828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 11))
{var inst_34722 = (state_34769[15]);var inst_34708 = (state_34769[11]);var inst_34722__$1 = cljs.core.seq.call(null,inst_34708);var state_34769__$1 = (function (){var statearr_34789 = state_34769;(statearr_34789[15] = inst_34722__$1);
return statearr_34789;
})();if(inst_34722__$1)
{var statearr_34790_34829 = state_34769__$1;(statearr_34790_34829[1] = 13);
} else
{var statearr_34791_34830 = state_34769__$1;(statearr_34791_34830[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 12))
{var inst_34742 = (state_34769[2]);var state_34769__$1 = state_34769;var statearr_34792_34831 = state_34769__$1;(statearr_34792_34831[2] = inst_34742);
(statearr_34792_34831[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 13))
{var inst_34722 = (state_34769[15]);var inst_34724 = cljs.core.chunked_seq_QMARK_.call(null,inst_34722);var state_34769__$1 = state_34769;if(inst_34724)
{var statearr_34793_34832 = state_34769__$1;(statearr_34793_34832[1] = 16);
} else
{var statearr_34794_34833 = state_34769__$1;(statearr_34794_34833[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 14))
{var state_34769__$1 = state_34769;var statearr_34795_34834 = state_34769__$1;(statearr_34795_34834[2] = null);
(statearr_34795_34834[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 15))
{var inst_34740 = (state_34769[2]);var state_34769__$1 = state_34769;var statearr_34796_34835 = state_34769__$1;(statearr_34796_34835[2] = inst_34740);
(statearr_34796_34835[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 16))
{var inst_34722 = (state_34769[15]);var inst_34726 = cljs.core.chunk_first.call(null,inst_34722);var inst_34727 = cljs.core.chunk_rest.call(null,inst_34722);var inst_34728 = cljs.core.count.call(null,inst_34726);var inst_34708 = inst_34727;var inst_34709 = inst_34726;var inst_34710 = inst_34728;var inst_34711 = 0;var state_34769__$1 = (function (){var statearr_34797 = state_34769;(statearr_34797[8] = inst_34710);
(statearr_34797[9] = inst_34709);
(statearr_34797[10] = inst_34711);
(statearr_34797[11] = inst_34708);
return statearr_34797;
})();var statearr_34798_34836 = state_34769__$1;(statearr_34798_34836[2] = null);
(statearr_34798_34836[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 17))
{var inst_34722 = (state_34769[15]);var inst_34731 = cljs.core.first.call(null,inst_34722);var inst_34732 = cljs.core.async.muxch_STAR_.call(null,inst_34731);var inst_34733 = cljs.core.async.close_BANG_.call(null,inst_34732);var inst_34734 = cljs.core.next.call(null,inst_34722);var inst_34708 = inst_34734;var inst_34709 = null;var inst_34710 = 0;var inst_34711 = 0;var state_34769__$1 = (function (){var statearr_34799 = state_34769;(statearr_34799[8] = inst_34710);
(statearr_34799[9] = inst_34709);
(statearr_34799[10] = inst_34711);
(statearr_34799[11] = inst_34708);
(statearr_34799[16] = inst_34733);
return statearr_34799;
})();var statearr_34800_34837 = state_34769__$1;(statearr_34800_34837[2] = null);
(statearr_34800_34837[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 18))
{var inst_34737 = (state_34769[2]);var state_34769__$1 = state_34769;var statearr_34801_34838 = state_34769__$1;(statearr_34801_34838[2] = inst_34737);
(statearr_34801_34838[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 19))
{var state_34769__$1 = state_34769;var statearr_34802_34839 = state_34769__$1;(statearr_34802_34839[2] = null);
(statearr_34802_34839[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 20))
{var state_34769__$1 = state_34769;var statearr_34803_34840 = state_34769__$1;(statearr_34803_34840[2] = null);
(statearr_34803_34840[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 21))
{var inst_34762 = (state_34769[2]);var state_34769__$1 = (function (){var statearr_34804 = state_34769;(statearr_34804[17] = inst_34762);
return statearr_34804;
})();var statearr_34805_34841 = state_34769__$1;(statearr_34805_34841[2] = null);
(statearr_34805_34841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 22))
{var inst_34759 = (state_34769[2]);var state_34769__$1 = state_34769;var statearr_34806_34842 = state_34769__$1;(statearr_34806_34842[2] = inst_34759);
(statearr_34806_34842[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 23))
{var inst_34746 = (state_34769[13]);var inst_34750 = (state_34769[2]);var inst_34751 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34746);var state_34769__$1 = (function (){var statearr_34807 = state_34769;(statearr_34807[18] = inst_34750);
return statearr_34807;
})();var statearr_34808_34843 = state_34769__$1;(statearr_34808_34843[2] = inst_34751);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34769__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34770 === 24))
{var inst_34698 = (state_34769[7]);var inst_34748 = (state_34769[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34769,23,Object,null,22);var inst_34755 = cljs.core.async.muxch_STAR_.call(null,inst_34748);var state_34769__$1 = state_34769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34769__$1,25,inst_34755,inst_34698);
} else
{if((state_val_34770 === 25))
{var inst_34757 = (state_34769[2]);var state_34769__$1 = state_34769;var statearr_34809_34844 = state_34769__$1;(statearr_34809_34844[2] = inst_34757);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34769__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34813[0] = state_machine__5507__auto__);
(statearr_34813[1] = 1);
return statearr_34813;
});
var state_machine__5507__auto____1 = (function (state_34769){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34769);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34814){if((e34814 instanceof Object))
{var ex__5510__auto__ = e34814;var statearr_34815_34845 = state_34769;(statearr_34815_34845[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34769);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34846 = state_34769;
state_34769 = G__34846;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34769){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34816 = f__5522__auto__.call(null);(statearr_34816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34817);
return statearr_34816;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34983 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34953){var state_val_34954 = (state_34953[1]);if((state_val_34954 === 1))
{var state_34953__$1 = state_34953;var statearr_34955_34984 = state_34953__$1;(statearr_34955_34984[2] = null);
(statearr_34955_34984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 2))
{var inst_34916 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34917 = 0;var state_34953__$1 = (function (){var statearr_34956 = state_34953;(statearr_34956[7] = inst_34916);
(statearr_34956[8] = inst_34917);
return statearr_34956;
})();var statearr_34957_34985 = state_34953__$1;(statearr_34957_34985[2] = null);
(statearr_34957_34985[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 3))
{var inst_34951 = (state_34953[2]);var state_34953__$1 = state_34953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34953__$1,inst_34951);
} else
{if((state_val_34954 === 4))
{var inst_34917 = (state_34953[8]);var inst_34919 = (inst_34917 < cnt);var state_34953__$1 = state_34953;if(cljs.core.truth_(inst_34919))
{var statearr_34958_34986 = state_34953__$1;(statearr_34958_34986[1] = 6);
} else
{var statearr_34959_34987 = state_34953__$1;(statearr_34959_34987[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 5))
{var inst_34937 = (state_34953[2]);var state_34953__$1 = (function (){var statearr_34960 = state_34953;(statearr_34960[9] = inst_34937);
return statearr_34960;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,12,dchan);
} else
{if((state_val_34954 === 6))
{var state_34953__$1 = state_34953;var statearr_34961_34988 = state_34953__$1;(statearr_34961_34988[2] = null);
(statearr_34961_34988[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 7))
{var state_34953__$1 = state_34953;var statearr_34962_34989 = state_34953__$1;(statearr_34962_34989[2] = null);
(statearr_34962_34989[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 8))
{var inst_34935 = (state_34953[2]);var state_34953__$1 = state_34953;var statearr_34963_34990 = state_34953__$1;(statearr_34963_34990[2] = inst_34935);
(statearr_34963_34990[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 9))
{var inst_34917 = (state_34953[8]);var inst_34930 = (state_34953[2]);var inst_34931 = (inst_34917 + 1);var inst_34917__$1 = inst_34931;var state_34953__$1 = (function (){var statearr_34964 = state_34953;(statearr_34964[8] = inst_34917__$1);
(statearr_34964[10] = inst_34930);
return statearr_34964;
})();var statearr_34965_34991 = state_34953__$1;(statearr_34965_34991[2] = null);
(statearr_34965_34991[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 10))
{var inst_34921 = (state_34953[2]);var inst_34922 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34953__$1 = (function (){var statearr_34966 = state_34953;(statearr_34966[11] = inst_34921);
return statearr_34966;
})();var statearr_34967_34992 = state_34953__$1;(statearr_34967_34992[2] = inst_34922);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34953__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 11))
{var inst_34917 = (state_34953[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34953,10,Object,null,9);var inst_34926 = chs__$1.call(null,inst_34917);var inst_34927 = done.call(null,inst_34917);var inst_34928 = cljs.core.async.take_BANG_.call(null,inst_34926,inst_34927);var state_34953__$1 = state_34953;var statearr_34968_34993 = state_34953__$1;(statearr_34968_34993[2] = inst_34928);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34953__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 12))
{var inst_34939 = (state_34953[12]);var inst_34939__$1 = (state_34953[2]);var inst_34940 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34939__$1);var state_34953__$1 = (function (){var statearr_34969 = state_34953;(statearr_34969[12] = inst_34939__$1);
return statearr_34969;
})();if(cljs.core.truth_(inst_34940))
{var statearr_34970_34994 = state_34953__$1;(statearr_34970_34994[1] = 13);
} else
{var statearr_34971_34995 = state_34953__$1;(statearr_34971_34995[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 13))
{var inst_34942 = cljs.core.async.close_BANG_.call(null,out);var state_34953__$1 = state_34953;var statearr_34972_34996 = state_34953__$1;(statearr_34972_34996[2] = inst_34942);
(statearr_34972_34996[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 14))
{var inst_34939 = (state_34953[12]);var inst_34944 = cljs.core.apply.call(null,f,inst_34939);var state_34953__$1 = state_34953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34953__$1,16,out,inst_34944);
} else
{if((state_val_34954 === 15))
{var inst_34949 = (state_34953[2]);var state_34953__$1 = state_34953;var statearr_34973_34997 = state_34953__$1;(statearr_34973_34997[2] = inst_34949);
(statearr_34973_34997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34954 === 16))
{var inst_34946 = (state_34953[2]);var state_34953__$1 = (function (){var statearr_34974 = state_34953;(statearr_34974[13] = inst_34946);
return statearr_34974;
})();var statearr_34975_34998 = state_34953__$1;(statearr_34975_34998[2] = null);
(statearr_34975_34998[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34979[0] = state_machine__5507__auto__);
(statearr_34979[1] = 1);
return statearr_34979;
});
var state_machine__5507__auto____1 = (function (state_34953){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34953);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34980){if((e34980 instanceof Object))
{var ex__5510__auto__ = e34980;var statearr_34981_34999 = state_34953;(statearr_34981_34999[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35000 = state_34953;
state_34953 = G__35000;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34953){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34982 = f__5522__auto__.call(null);(statearr_34982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34983);
return statearr_34982;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35108 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35084){var state_val_35085 = (state_35084[1]);if((state_val_35085 === 1))
{var inst_35055 = cljs.core.vec.call(null,chs);var inst_35056 = inst_35055;var state_35084__$1 = (function (){var statearr_35086 = state_35084;(statearr_35086[7] = inst_35056);
return statearr_35086;
})();var statearr_35087_35109 = state_35084__$1;(statearr_35087_35109[2] = null);
(statearr_35087_35109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35085 === 2))
{var inst_35056 = (state_35084[7]);var inst_35058 = cljs.core.count.call(null,inst_35056);var inst_35059 = (inst_35058 > 0);var state_35084__$1 = state_35084;if(cljs.core.truth_(inst_35059))
{var statearr_35088_35110 = state_35084__$1;(statearr_35088_35110[1] = 4);
} else
{var statearr_35089_35111 = state_35084__$1;(statearr_35089_35111[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35085 === 3))
{var inst_35082 = (state_35084[2]);var state_35084__$1 = state_35084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35084__$1,inst_35082);
} else
{if((state_val_35085 === 4))
{var inst_35056 = (state_35084[7]);var state_35084__$1 = state_35084;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35084__$1,7,inst_35056);
} else
{if((state_val_35085 === 5))
{var inst_35078 = cljs.core.async.close_BANG_.call(null,out);var state_35084__$1 = state_35084;var statearr_35090_35112 = state_35084__$1;(statearr_35090_35112[2] = inst_35078);
(statearr_35090_35112[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35085 === 6))
{var inst_35080 = (state_35084[2]);var state_35084__$1 = state_35084;var statearr_35091_35113 = state_35084__$1;(statearr_35091_35113[2] = inst_35080);
(statearr_35091_35113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35085 === 7))
{var inst_35064 = (state_35084[8]);var inst_35063 = (state_35084[9]);var inst_35063__$1 = (state_35084[2]);var inst_35064__$1 = cljs.core.nth.call(null,inst_35063__$1,0,null);var inst_35065 = cljs.core.nth.call(null,inst_35063__$1,1,null);var inst_35066 = (inst_35064__$1 == null);var state_35084__$1 = (function (){var statearr_35092 = state_35084;(statearr_35092[10] = inst_35065);
(statearr_35092[8] = inst_35064__$1);
(statearr_35092[9] = inst_35063__$1);
return statearr_35092;
})();if(cljs.core.truth_(inst_35066))
{var statearr_35093_35114 = state_35084__$1;(statearr_35093_35114[1] = 8);
} else
{var statearr_35094_35115 = state_35084__$1;(statearr_35094_35115[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35085 === 8))
{var inst_35056 = (state_35084[7]);var inst_35065 = (state_35084[10]);var inst_35064 = (state_35084[8]);var inst_35063 = (state_35084[9]);var inst_35068 = (function (){var c = inst_35065;var v = inst_35064;var vec__35061 = inst_35063;var cs = inst_35056;return ((function (c,v,vec__35061,cs,inst_35056,inst_35065,inst_35064,inst_35063,state_val_35085){
return (function (p1__35001_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35001_SHARP_);
});
;})(c,v,vec__35061,cs,inst_35056,inst_35065,inst_35064,inst_35063,state_val_35085))
})();var inst_35069 = cljs.core.filterv.call(null,inst_35068,inst_35056);var inst_35056__$1 = inst_35069;var state_35084__$1 = (function (){var statearr_35095 = state_35084;(statearr_35095[7] = inst_35056__$1);
return statearr_35095;
})();var statearr_35096_35116 = state_35084__$1;(statearr_35096_35116[2] = null);
(statearr_35096_35116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35085 === 9))
{var inst_35064 = (state_35084[8]);var state_35084__$1 = state_35084;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35084__$1,11,out,inst_35064);
} else
{if((state_val_35085 === 10))
{var inst_35076 = (state_35084[2]);var state_35084__$1 = state_35084;var statearr_35098_35117 = state_35084__$1;(statearr_35098_35117[2] = inst_35076);
(statearr_35098_35117[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35085 === 11))
{var inst_35056 = (state_35084[7]);var inst_35073 = (state_35084[2]);var tmp35097 = inst_35056;var inst_35056__$1 = tmp35097;var state_35084__$1 = (function (){var statearr_35099 = state_35084;(statearr_35099[7] = inst_35056__$1);
(statearr_35099[11] = inst_35073);
return statearr_35099;
})();var statearr_35100_35118 = state_35084__$1;(statearr_35100_35118[2] = null);
(statearr_35100_35118[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35104 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35104[0] = state_machine__5507__auto__);
(statearr_35104[1] = 1);
return statearr_35104;
});
var state_machine__5507__auto____1 = (function (state_35084){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35084);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35105){if((e35105 instanceof Object))
{var ex__5510__auto__ = e35105;var statearr_35106_35119 = state_35084;(statearr_35106_35119[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35084);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35120 = state_35084;
state_35084 = G__35120;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35084){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35107 = f__5522__auto__.call(null);(statearr_35107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35108);
return statearr_35107;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35213 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35190){var state_val_35191 = (state_35190[1]);if((state_val_35191 === 1))
{var inst_35167 = 0;var state_35190__$1 = (function (){var statearr_35192 = state_35190;(statearr_35192[7] = inst_35167);
return statearr_35192;
})();var statearr_35193_35214 = state_35190__$1;(statearr_35193_35214[2] = null);
(statearr_35193_35214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35191 === 2))
{var inst_35167 = (state_35190[7]);var inst_35169 = (inst_35167 < n);var state_35190__$1 = state_35190;if(cljs.core.truth_(inst_35169))
{var statearr_35194_35215 = state_35190__$1;(statearr_35194_35215[1] = 4);
} else
{var statearr_35195_35216 = state_35190__$1;(statearr_35195_35216[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35191 === 3))
{var inst_35187 = (state_35190[2]);var inst_35188 = cljs.core.async.close_BANG_.call(null,out);var state_35190__$1 = (function (){var statearr_35196 = state_35190;(statearr_35196[8] = inst_35187);
return statearr_35196;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35190__$1,inst_35188);
} else
{if((state_val_35191 === 4))
{var state_35190__$1 = state_35190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35190__$1,7,ch);
} else
{if((state_val_35191 === 5))
{var state_35190__$1 = state_35190;var statearr_35197_35217 = state_35190__$1;(statearr_35197_35217[2] = null);
(statearr_35197_35217[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35191 === 6))
{var inst_35185 = (state_35190[2]);var state_35190__$1 = state_35190;var statearr_35198_35218 = state_35190__$1;(statearr_35198_35218[2] = inst_35185);
(statearr_35198_35218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35191 === 7))
{var inst_35172 = (state_35190[9]);var inst_35172__$1 = (state_35190[2]);var inst_35173 = (inst_35172__$1 == null);var inst_35174 = cljs.core.not.call(null,inst_35173);var state_35190__$1 = (function (){var statearr_35199 = state_35190;(statearr_35199[9] = inst_35172__$1);
return statearr_35199;
})();if(inst_35174)
{var statearr_35200_35219 = state_35190__$1;(statearr_35200_35219[1] = 8);
} else
{var statearr_35201_35220 = state_35190__$1;(statearr_35201_35220[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35191 === 8))
{var inst_35172 = (state_35190[9]);var state_35190__$1 = state_35190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35190__$1,11,out,inst_35172);
} else
{if((state_val_35191 === 9))
{var state_35190__$1 = state_35190;var statearr_35202_35221 = state_35190__$1;(statearr_35202_35221[2] = null);
(statearr_35202_35221[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35191 === 10))
{var inst_35182 = (state_35190[2]);var state_35190__$1 = state_35190;var statearr_35203_35222 = state_35190__$1;(statearr_35203_35222[2] = inst_35182);
(statearr_35203_35222[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35191 === 11))
{var inst_35167 = (state_35190[7]);var inst_35177 = (state_35190[2]);var inst_35178 = (inst_35167 + 1);var inst_35167__$1 = inst_35178;var state_35190__$1 = (function (){var statearr_35204 = state_35190;(statearr_35204[10] = inst_35177);
(statearr_35204[7] = inst_35167__$1);
return statearr_35204;
})();var statearr_35205_35223 = state_35190__$1;(statearr_35205_35223[2] = null);
(statearr_35205_35223[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35209 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35209[0] = state_machine__5507__auto__);
(statearr_35209[1] = 1);
return statearr_35209;
});
var state_machine__5507__auto____1 = (function (state_35190){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35190);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35210){if((e35210 instanceof Object))
{var ex__5510__auto__ = e35210;var statearr_35211_35224 = state_35190;(statearr_35211_35224[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35225 = state_35190;
state_35190 = G__35225;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35190){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35212 = f__5522__auto__.call(null);(statearr_35212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35213);
return statearr_35212;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35322 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35297){var state_val_35298 = (state_35297[1]);if((state_val_35298 === 1))
{var inst_35274 = null;var state_35297__$1 = (function (){var statearr_35299 = state_35297;(statearr_35299[7] = inst_35274);
return statearr_35299;
})();var statearr_35300_35323 = state_35297__$1;(statearr_35300_35323[2] = null);
(statearr_35300_35323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35298 === 2))
{var state_35297__$1 = state_35297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35297__$1,4,ch);
} else
{if((state_val_35298 === 3))
{var inst_35294 = (state_35297[2]);var inst_35295 = cljs.core.async.close_BANG_.call(null,out);var state_35297__$1 = (function (){var statearr_35301 = state_35297;(statearr_35301[8] = inst_35294);
return statearr_35301;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35297__$1,inst_35295);
} else
{if((state_val_35298 === 4))
{var inst_35277 = (state_35297[9]);var inst_35277__$1 = (state_35297[2]);var inst_35278 = (inst_35277__$1 == null);var inst_35279 = cljs.core.not.call(null,inst_35278);var state_35297__$1 = (function (){var statearr_35302 = state_35297;(statearr_35302[9] = inst_35277__$1);
return statearr_35302;
})();if(inst_35279)
{var statearr_35303_35324 = state_35297__$1;(statearr_35303_35324[1] = 5);
} else
{var statearr_35304_35325 = state_35297__$1;(statearr_35304_35325[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35298 === 5))
{var inst_35277 = (state_35297[9]);var inst_35274 = (state_35297[7]);var inst_35281 = cljs.core._EQ_.call(null,inst_35277,inst_35274);var state_35297__$1 = state_35297;if(inst_35281)
{var statearr_35305_35326 = state_35297__$1;(statearr_35305_35326[1] = 8);
} else
{var statearr_35306_35327 = state_35297__$1;(statearr_35306_35327[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35298 === 6))
{var state_35297__$1 = state_35297;var statearr_35308_35328 = state_35297__$1;(statearr_35308_35328[2] = null);
(statearr_35308_35328[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35298 === 7))
{var inst_35292 = (state_35297[2]);var state_35297__$1 = state_35297;var statearr_35309_35329 = state_35297__$1;(statearr_35309_35329[2] = inst_35292);
(statearr_35309_35329[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35298 === 8))
{var inst_35274 = (state_35297[7]);var tmp35307 = inst_35274;var inst_35274__$1 = tmp35307;var state_35297__$1 = (function (){var statearr_35310 = state_35297;(statearr_35310[7] = inst_35274__$1);
return statearr_35310;
})();var statearr_35311_35330 = state_35297__$1;(statearr_35311_35330[2] = null);
(statearr_35311_35330[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35298 === 9))
{var inst_35277 = (state_35297[9]);var state_35297__$1 = state_35297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35297__$1,11,out,inst_35277);
} else
{if((state_val_35298 === 10))
{var inst_35289 = (state_35297[2]);var state_35297__$1 = state_35297;var statearr_35312_35331 = state_35297__$1;(statearr_35312_35331[2] = inst_35289);
(statearr_35312_35331[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35298 === 11))
{var inst_35277 = (state_35297[9]);var inst_35286 = (state_35297[2]);var inst_35274 = inst_35277;var state_35297__$1 = (function (){var statearr_35313 = state_35297;(statearr_35313[7] = inst_35274);
(statearr_35313[10] = inst_35286);
return statearr_35313;
})();var statearr_35314_35332 = state_35297__$1;(statearr_35314_35332[2] = null);
(statearr_35314_35332[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35318 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35318[0] = state_machine__5507__auto__);
(statearr_35318[1] = 1);
return statearr_35318;
});
var state_machine__5507__auto____1 = (function (state_35297){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35297);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35319){if((e35319 instanceof Object))
{var ex__5510__auto__ = e35319;var statearr_35320_35333 = state_35297;(statearr_35320_35333[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35297);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35334 = state_35297;
state_35297 = G__35334;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35297){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35321 = f__5522__auto__.call(null);(statearr_35321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35322);
return statearr_35321;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35439){var state_val_35440 = (state_35439[1]);if((state_val_35440 === 1))
{var inst_35402 = (new Array(n));var inst_35403 = inst_35402;var inst_35404 = 0;var state_35439__$1 = (function (){var statearr_35441 = state_35439;(statearr_35441[7] = inst_35403);
(statearr_35441[8] = inst_35404);
return statearr_35441;
})();var statearr_35442_35470 = state_35439__$1;(statearr_35442_35470[2] = null);
(statearr_35442_35470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 2))
{var state_35439__$1 = state_35439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35439__$1,4,ch);
} else
{if((state_val_35440 === 3))
{var inst_35437 = (state_35439[2]);var state_35439__$1 = state_35439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35439__$1,inst_35437);
} else
{if((state_val_35440 === 4))
{var inst_35407 = (state_35439[9]);var inst_35407__$1 = (state_35439[2]);var inst_35408 = (inst_35407__$1 == null);var inst_35409 = cljs.core.not.call(null,inst_35408);var state_35439__$1 = (function (){var statearr_35443 = state_35439;(statearr_35443[9] = inst_35407__$1);
return statearr_35443;
})();if(inst_35409)
{var statearr_35444_35471 = state_35439__$1;(statearr_35444_35471[1] = 5);
} else
{var statearr_35445_35472 = state_35439__$1;(statearr_35445_35472[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 5))
{var inst_35403 = (state_35439[7]);var inst_35404 = (state_35439[8]);var inst_35412 = (state_35439[10]);var inst_35407 = (state_35439[9]);var inst_35411 = (inst_35403[inst_35404] = inst_35407);var inst_35412__$1 = (inst_35404 + 1);var inst_35413 = (inst_35412__$1 < n);var state_35439__$1 = (function (){var statearr_35446 = state_35439;(statearr_35446[10] = inst_35412__$1);
(statearr_35446[11] = inst_35411);
return statearr_35446;
})();if(cljs.core.truth_(inst_35413))
{var statearr_35447_35473 = state_35439__$1;(statearr_35447_35473[1] = 8);
} else
{var statearr_35448_35474 = state_35439__$1;(statearr_35448_35474[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 6))
{var inst_35404 = (state_35439[8]);var inst_35425 = (inst_35404 > 0);var state_35439__$1 = state_35439;if(cljs.core.truth_(inst_35425))
{var statearr_35450_35475 = state_35439__$1;(statearr_35450_35475[1] = 12);
} else
{var statearr_35451_35476 = state_35439__$1;(statearr_35451_35476[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 7))
{var inst_35435 = (state_35439[2]);var state_35439__$1 = state_35439;var statearr_35452_35477 = state_35439__$1;(statearr_35452_35477[2] = inst_35435);
(statearr_35452_35477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 8))
{var inst_35403 = (state_35439[7]);var inst_35412 = (state_35439[10]);var tmp35449 = inst_35403;var inst_35403__$1 = tmp35449;var inst_35404 = inst_35412;var state_35439__$1 = (function (){var statearr_35453 = state_35439;(statearr_35453[7] = inst_35403__$1);
(statearr_35453[8] = inst_35404);
return statearr_35453;
})();var statearr_35454_35478 = state_35439__$1;(statearr_35454_35478[2] = null);
(statearr_35454_35478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 9))
{var inst_35403 = (state_35439[7]);var inst_35417 = cljs.core.vec.call(null,inst_35403);var state_35439__$1 = state_35439;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35439__$1,11,out,inst_35417);
} else
{if((state_val_35440 === 10))
{var inst_35423 = (state_35439[2]);var state_35439__$1 = state_35439;var statearr_35455_35479 = state_35439__$1;(statearr_35455_35479[2] = inst_35423);
(statearr_35455_35479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 11))
{var inst_35419 = (state_35439[2]);var inst_35420 = (new Array(n));var inst_35403 = inst_35420;var inst_35404 = 0;var state_35439__$1 = (function (){var statearr_35456 = state_35439;(statearr_35456[7] = inst_35403);
(statearr_35456[8] = inst_35404);
(statearr_35456[12] = inst_35419);
return statearr_35456;
})();var statearr_35457_35480 = state_35439__$1;(statearr_35457_35480[2] = null);
(statearr_35457_35480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 12))
{var inst_35403 = (state_35439[7]);var inst_35427 = cljs.core.vec.call(null,inst_35403);var state_35439__$1 = state_35439;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35439__$1,15,out,inst_35427);
} else
{if((state_val_35440 === 13))
{var state_35439__$1 = state_35439;var statearr_35458_35481 = state_35439__$1;(statearr_35458_35481[2] = null);
(statearr_35458_35481[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 14))
{var inst_35432 = (state_35439[2]);var inst_35433 = cljs.core.async.close_BANG_.call(null,out);var state_35439__$1 = (function (){var statearr_35459 = state_35439;(statearr_35459[13] = inst_35432);
return statearr_35459;
})();var statearr_35460_35482 = state_35439__$1;(statearr_35460_35482[2] = inst_35433);
(statearr_35460_35482[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35440 === 15))
{var inst_35429 = (state_35439[2]);var state_35439__$1 = state_35439;var statearr_35461_35483 = state_35439__$1;(statearr_35461_35483[2] = inst_35429);
(statearr_35461_35483[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35465[0] = state_machine__5507__auto__);
(statearr_35465[1] = 1);
return statearr_35465;
});
var state_machine__5507__auto____1 = (function (state_35439){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35439);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35466){if((e35466 instanceof Object))
{var ex__5510__auto__ = e35466;var statearr_35467_35484 = state_35439;(statearr_35467_35484[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35439);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35485 = state_35439;
state_35439 = G__35485;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35439){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35468 = f__5522__auto__.call(null);(statearr_35468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35469);
return statearr_35468;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35598){var state_val_35599 = (state_35598[1]);if((state_val_35599 === 1))
{var inst_35557 = [];var inst_35558 = inst_35557;var inst_35559 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35598__$1 = (function (){var statearr_35600 = state_35598;(statearr_35600[7] = inst_35558);
(statearr_35600[8] = inst_35559);
return statearr_35600;
})();var statearr_35601_35629 = state_35598__$1;(statearr_35601_35629[2] = null);
(statearr_35601_35629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 2))
{var state_35598__$1 = state_35598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,4,ch);
} else
{if((state_val_35599 === 3))
{var inst_35596 = (state_35598[2]);var state_35598__$1 = state_35598;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35598__$1,inst_35596);
} else
{if((state_val_35599 === 4))
{var inst_35562 = (state_35598[9]);var inst_35562__$1 = (state_35598[2]);var inst_35563 = (inst_35562__$1 == null);var inst_35564 = cljs.core.not.call(null,inst_35563);var state_35598__$1 = (function (){var statearr_35602 = state_35598;(statearr_35602[9] = inst_35562__$1);
return statearr_35602;
})();if(inst_35564)
{var statearr_35603_35630 = state_35598__$1;(statearr_35603_35630[1] = 5);
} else
{var statearr_35604_35631 = state_35598__$1;(statearr_35604_35631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 5))
{var inst_35566 = (state_35598[10]);var inst_35559 = (state_35598[8]);var inst_35562 = (state_35598[9]);var inst_35566__$1 = f.call(null,inst_35562);var inst_35567 = cljs.core._EQ_.call(null,inst_35566__$1,inst_35559);var inst_35568 = cljs.core.keyword_identical_QMARK_.call(null,inst_35559,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35569 = (inst_35567) || (inst_35568);var state_35598__$1 = (function (){var statearr_35605 = state_35598;(statearr_35605[10] = inst_35566__$1);
return statearr_35605;
})();if(cljs.core.truth_(inst_35569))
{var statearr_35606_35632 = state_35598__$1;(statearr_35606_35632[1] = 8);
} else
{var statearr_35607_35633 = state_35598__$1;(statearr_35607_35633[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 6))
{var inst_35558 = (state_35598[7]);var inst_35583 = inst_35558.length;var inst_35584 = (inst_35583 > 0);var state_35598__$1 = state_35598;if(cljs.core.truth_(inst_35584))
{var statearr_35609_35634 = state_35598__$1;(statearr_35609_35634[1] = 12);
} else
{var statearr_35610_35635 = state_35598__$1;(statearr_35610_35635[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 7))
{var inst_35594 = (state_35598[2]);var state_35598__$1 = state_35598;var statearr_35611_35636 = state_35598__$1;(statearr_35611_35636[2] = inst_35594);
(statearr_35611_35636[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 8))
{var inst_35566 = (state_35598[10]);var inst_35558 = (state_35598[7]);var inst_35562 = (state_35598[9]);var inst_35571 = inst_35558.push(inst_35562);var tmp35608 = inst_35558;var inst_35558__$1 = tmp35608;var inst_35559 = inst_35566;var state_35598__$1 = (function (){var statearr_35612 = state_35598;(statearr_35612[11] = inst_35571);
(statearr_35612[7] = inst_35558__$1);
(statearr_35612[8] = inst_35559);
return statearr_35612;
})();var statearr_35613_35637 = state_35598__$1;(statearr_35613_35637[2] = null);
(statearr_35613_35637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 9))
{var inst_35558 = (state_35598[7]);var inst_35574 = cljs.core.vec.call(null,inst_35558);var state_35598__$1 = state_35598;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35598__$1,11,out,inst_35574);
} else
{if((state_val_35599 === 10))
{var inst_35581 = (state_35598[2]);var state_35598__$1 = state_35598;var statearr_35614_35638 = state_35598__$1;(statearr_35614_35638[2] = inst_35581);
(statearr_35614_35638[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 11))
{var inst_35566 = (state_35598[10]);var inst_35562 = (state_35598[9]);var inst_35576 = (state_35598[2]);var inst_35577 = [];var inst_35578 = inst_35577.push(inst_35562);var inst_35558 = inst_35577;var inst_35559 = inst_35566;var state_35598__$1 = (function (){var statearr_35615 = state_35598;(statearr_35615[12] = inst_35578);
(statearr_35615[13] = inst_35576);
(statearr_35615[7] = inst_35558);
(statearr_35615[8] = inst_35559);
return statearr_35615;
})();var statearr_35616_35639 = state_35598__$1;(statearr_35616_35639[2] = null);
(statearr_35616_35639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 12))
{var inst_35558 = (state_35598[7]);var inst_35586 = cljs.core.vec.call(null,inst_35558);var state_35598__$1 = state_35598;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35598__$1,15,out,inst_35586);
} else
{if((state_val_35599 === 13))
{var state_35598__$1 = state_35598;var statearr_35617_35640 = state_35598__$1;(statearr_35617_35640[2] = null);
(statearr_35617_35640[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 14))
{var inst_35591 = (state_35598[2]);var inst_35592 = cljs.core.async.close_BANG_.call(null,out);var state_35598__$1 = (function (){var statearr_35618 = state_35598;(statearr_35618[14] = inst_35591);
return statearr_35618;
})();var statearr_35619_35641 = state_35598__$1;(statearr_35619_35641[2] = inst_35592);
(statearr_35619_35641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35599 === 15))
{var inst_35588 = (state_35598[2]);var state_35598__$1 = state_35598;var statearr_35620_35642 = state_35598__$1;(statearr_35620_35642[2] = inst_35588);
(statearr_35620_35642[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35624[0] = state_machine__5507__auto__);
(statearr_35624[1] = 1);
return statearr_35624;
});
var state_machine__5507__auto____1 = (function (state_35598){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35598);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35625){if((e35625 instanceof Object))
{var ex__5510__auto__ = e35625;var statearr_35626_35643 = state_35598;(statearr_35626_35643[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35598);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35644 = state_35598;
state_35598 = G__35644;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35598){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35627 = f__5522__auto__.call(null);(statearr_35627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35628);
return statearr_35627;
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
