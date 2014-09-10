// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t52439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52439 = (function (f,fn_handler,meta52440){
this.f = f;
this.fn_handler = fn_handler;
this.meta52440 = meta52440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52439.cljs$lang$type = true;
cljs.core.async.t52439.cljs$lang$ctorStr = "cljs.core.async/t52439";
cljs.core.async.t52439.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t52439");
});
cljs.core.async.t52439.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t52439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t52439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52441){var self__ = this;
var _52441__$1 = this;return self__.meta52440;
});
cljs.core.async.t52439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52441,meta52440__$1){var self__ = this;
var _52441__$1 = this;return (new cljs.core.async.t52439(self__.f,self__.fn_handler,meta52440__$1));
});
cljs.core.async.__GT_t52439 = (function __GT_t52439(f__$1,fn_handler__$1,meta52440){return (new cljs.core.async.t52439(f__$1,fn_handler__$1,meta52440));
});
}
return (new cljs.core.async.t52439(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__52443 = buff;if(G__52443)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__52443.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__52443.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__52443);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__52443);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
{var val_52444 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_52444);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_52444,ret){
return (function (){return fn1.call(null,val_52444);
});})(val_52444,ret))
);
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
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3529__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___52445 = n;var x_52446 = (0);while(true){
if((x_52446 < n__4397__auto___52445))
{(a[x_52446] = (0));
{
var G__52447 = (x_52446 + (1));
x_52446 = G__52447;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__52448 = (i + (1));
i = G__52448;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t52452 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52452 = (function (flag,alt_flag,meta52453){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta52453 = meta52453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52452.cljs$lang$type = true;
cljs.core.async.t52452.cljs$lang$ctorStr = "cljs.core.async/t52452";
cljs.core.async.t52452.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t52452");
});})(flag))
;
cljs.core.async.t52452.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t52452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t52452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52454){var self__ = this;
var _52454__$1 = this;return self__.meta52453;
});})(flag))
;
cljs.core.async.t52452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52454,meta52453__$1){var self__ = this;
var _52454__$1 = this;return (new cljs.core.async.t52452(self__.flag,self__.alt_flag,meta52453__$1));
});})(flag))
;
cljs.core.async.__GT_t52452 = ((function (flag){
return (function __GT_t52452(flag__$1,alt_flag__$1,meta52453){return (new cljs.core.async.t52452(flag__$1,alt_flag__$1,meta52453));
});})(flag))
;
}
return (new cljs.core.async.t52452(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t52458 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52458 = (function (cb,flag,alt_handler,meta52459){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta52459 = meta52459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52458.cljs$lang$type = true;
cljs.core.async.t52458.cljs$lang$ctorStr = "cljs.core.async/t52458";
cljs.core.async.t52458.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t52458");
});
cljs.core.async.t52458.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t52458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t52458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52460){var self__ = this;
var _52460__$1 = this;return self__.meta52459;
});
cljs.core.async.t52458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52460,meta52459__$1){var self__ = this;
var _52460__$1 = this;return (new cljs.core.async.t52458(self__.cb,self__.flag,self__.alt_handler,meta52459__$1));
});
cljs.core.async.__GT_t52458 = (function __GT_t52458(cb__$1,flag__$1,alt_handler__$1,meta52459){return (new cljs.core.async.t52458(cb__$1,flag__$1,alt_handler__$1,meta52459));
});
}
return (new cljs.core.async.t52458(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52461_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52461_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__52462 = (i + (1));
i = G__52462;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3529__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__52463){var map__52465 = p__52463;var map__52465__$1 = ((cljs.core.seq_QMARK_.call(null,map__52465))?cljs.core.apply.call(null,cljs.core.hash_map,map__52465):map__52465);var opts = map__52465__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__52463 = null;if (arguments.length > 1) {
  p__52463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__52463);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__52466){
var ports = cljs.core.first(arglist__52466);
var p__52463 = cljs.core.rest(arglist__52466);
return alts_BANG___delegate(ports,p__52463);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t52474 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52474 = (function (ch,f,map_LT_,meta52475){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta52475 = meta52475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52474.cljs$lang$type = true;
cljs.core.async.t52474.cljs$lang$ctorStr = "cljs.core.async/t52474";
cljs.core.async.t52474.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t52474");
});
cljs.core.async.t52474.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t52474.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t52477 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52477 = (function (fn1,_,meta52475,ch,f,map_LT_,meta52478){
this.fn1 = fn1;
this._ = _;
this.meta52475 = meta52475;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta52478 = meta52478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52477.cljs$lang$type = true;
cljs.core.async.t52477.cljs$lang$ctorStr = "cljs.core.async/t52477";
cljs.core.async.t52477.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t52477");
});})(___$1))
;
cljs.core.async.t52477.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t52477.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t52477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__52467_SHARP_){return f1.call(null,(((p1__52467_SHARP_ == null))?null:self__.f.call(null,p1__52467_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t52477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52479){var self__ = this;
var _52479__$1 = this;return self__.meta52478;
});})(___$1))
;
cljs.core.async.t52477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52479,meta52478__$1){var self__ = this;
var _52479__$1 = this;return (new cljs.core.async.t52477(self__.fn1,self__._,self__.meta52475,self__.ch,self__.f,self__.map_LT_,meta52478__$1));
});})(___$1))
;
cljs.core.async.__GT_t52477 = ((function (___$1){
return (function __GT_t52477(fn1__$1,___$2,meta52475__$1,ch__$2,f__$2,map_LT___$2,meta52478){return (new cljs.core.async.t52477(fn1__$1,___$2,meta52475__$1,ch__$2,f__$2,map_LT___$2,meta52478));
});})(___$1))
;
}
return (new cljs.core.async.t52477(fn1,___$1,self__.meta52475,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t52474.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52476){var self__ = this;
var _52476__$1 = this;return self__.meta52475;
});
cljs.core.async.t52474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52476,meta52475__$1){var self__ = this;
var _52476__$1 = this;return (new cljs.core.async.t52474(self__.ch,self__.f,self__.map_LT_,meta52475__$1));
});
cljs.core.async.__GT_t52474 = (function __GT_t52474(ch__$1,f__$1,map_LT___$1,meta52475){return (new cljs.core.async.t52474(ch__$1,f__$1,map_LT___$1,meta52475));
});
}
return (new cljs.core.async.t52474(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t52483 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52483 = (function (ch,f,map_GT_,meta52484){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta52484 = meta52484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52483.cljs$lang$type = true;
cljs.core.async.t52483.cljs$lang$ctorStr = "cljs.core.async/t52483";
cljs.core.async.t52483.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t52483");
});
cljs.core.async.t52483.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t52483.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t52483.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52485){var self__ = this;
var _52485__$1 = this;return self__.meta52484;
});
cljs.core.async.t52483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52485,meta52484__$1){var self__ = this;
var _52485__$1 = this;return (new cljs.core.async.t52483(self__.ch,self__.f,self__.map_GT_,meta52484__$1));
});
cljs.core.async.__GT_t52483 = (function __GT_t52483(ch__$1,f__$1,map_GT___$1,meta52484){return (new cljs.core.async.t52483(ch__$1,f__$1,map_GT___$1,meta52484));
});
}
return (new cljs.core.async.t52483(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t52489 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52489 = (function (ch,p,filter_GT_,meta52490){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta52490 = meta52490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52489.cljs$lang$type = true;
cljs.core.async.t52489.cljs$lang$ctorStr = "cljs.core.async/t52489";
cljs.core.async.t52489.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t52489");
});
cljs.core.async.t52489.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t52489.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t52489.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52491){var self__ = this;
var _52491__$1 = this;return self__.meta52490;
});
cljs.core.async.t52489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52491,meta52490__$1){var self__ = this;
var _52491__$1 = this;return (new cljs.core.async.t52489(self__.ch,self__.p,self__.filter_GT_,meta52490__$1));
});
cljs.core.async.__GT_t52489 = (function __GT_t52489(ch__$1,p__$1,filter_GT___$1,meta52490){return (new cljs.core.async.t52489(ch__$1,p__$1,filter_GT___$1,meta52490));
});
}
return (new cljs.core.async.t52489(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___52574 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___52574,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___52574,out){
return (function (state_52553){var state_val_52554 = (state_52553[(1)]);if((state_val_52554 === (7)))
{var inst_52549 = (state_52553[(2)]);var state_52553__$1 = state_52553;var statearr_52555_52575 = state_52553__$1;(statearr_52555_52575[(2)] = inst_52549);
(statearr_52555_52575[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52554 === (1)))
{var state_52553__$1 = state_52553;var statearr_52556_52576 = state_52553__$1;(statearr_52556_52576[(2)] = null);
(statearr_52556_52576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52554 === (4)))
{var inst_52535 = (state_52553[(7)]);var inst_52535__$1 = (state_52553[(2)]);var inst_52536 = (inst_52535__$1 == null);var state_52553__$1 = (function (){var statearr_52557 = state_52553;(statearr_52557[(7)] = inst_52535__$1);
return statearr_52557;
})();if(cljs.core.truth_(inst_52536))
{var statearr_52558_52577 = state_52553__$1;(statearr_52558_52577[(1)] = (5));
} else
{var statearr_52559_52578 = state_52553__$1;(statearr_52559_52578[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52554 === (6)))
{var inst_52535 = (state_52553[(7)]);var inst_52540 = p.call(null,inst_52535);var state_52553__$1 = state_52553;if(cljs.core.truth_(inst_52540))
{var statearr_52560_52579 = state_52553__$1;(statearr_52560_52579[(1)] = (8));
} else
{var statearr_52561_52580 = state_52553__$1;(statearr_52561_52580[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52554 === (3)))
{var inst_52551 = (state_52553[(2)]);var state_52553__$1 = state_52553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52553__$1,inst_52551);
} else
{if((state_val_52554 === (2)))
{var state_52553__$1 = state_52553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52553__$1,(4),ch);
} else
{if((state_val_52554 === (11)))
{var inst_52543 = (state_52553[(2)]);var state_52553__$1 = state_52553;var statearr_52562_52581 = state_52553__$1;(statearr_52562_52581[(2)] = inst_52543);
(statearr_52562_52581[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52554 === (9)))
{var state_52553__$1 = state_52553;var statearr_52563_52582 = state_52553__$1;(statearr_52563_52582[(2)] = null);
(statearr_52563_52582[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52554 === (5)))
{var inst_52538 = cljs.core.async.close_BANG_.call(null,out);var state_52553__$1 = state_52553;var statearr_52564_52583 = state_52553__$1;(statearr_52564_52583[(2)] = inst_52538);
(statearr_52564_52583[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52554 === (10)))
{var inst_52546 = (state_52553[(2)]);var state_52553__$1 = (function (){var statearr_52565 = state_52553;(statearr_52565[(8)] = inst_52546);
return statearr_52565;
})();var statearr_52566_52584 = state_52553__$1;(statearr_52566_52584[(2)] = null);
(statearr_52566_52584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52554 === (8)))
{var inst_52535 = (state_52553[(7)]);var state_52553__$1 = state_52553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52553__$1,(11),out,inst_52535);
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
});})(c__5691__auto___52574,out))
;return ((function (switch__5676__auto__,c__5691__auto___52574,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_52570 = [null,null,null,null,null,null,null,null,null];(statearr_52570[(0)] = state_machine__5677__auto__);
(statearr_52570[(1)] = (1));
return statearr_52570;
});
var state_machine__5677__auto____1 = (function (state_52553){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_52553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e52571){if((e52571 instanceof Object))
{var ex__5680__auto__ = e52571;var statearr_52572_52585 = state_52553;(statearr_52572_52585[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52586 = state_52553;
state_52553 = G__52586;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_52553){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_52553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___52574,out))
})();var state__5693__auto__ = (function (){var statearr_52573 = f__5692__auto__.call(null);(statearr_52573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___52574);
return statearr_52573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___52574,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_52738){var state_val_52739 = (state_52738[(1)]);if((state_val_52739 === (7)))
{var inst_52734 = (state_52738[(2)]);var state_52738__$1 = state_52738;var statearr_52740_52777 = state_52738__$1;(statearr_52740_52777[(2)] = inst_52734);
(statearr_52740_52777[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (20)))
{var inst_52709 = (state_52738[(7)]);var inst_52720 = (state_52738[(2)]);var inst_52721 = cljs.core.next.call(null,inst_52709);var inst_52695 = inst_52721;var inst_52696 = null;var inst_52697 = (0);var inst_52698 = (0);var state_52738__$1 = (function (){var statearr_52741 = state_52738;(statearr_52741[(8)] = inst_52696);
(statearr_52741[(9)] = inst_52697);
(statearr_52741[(10)] = inst_52698);
(statearr_52741[(11)] = inst_52695);
(statearr_52741[(12)] = inst_52720);
return statearr_52741;
})();var statearr_52742_52778 = state_52738__$1;(statearr_52742_52778[(2)] = null);
(statearr_52742_52778[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (1)))
{var state_52738__$1 = state_52738;var statearr_52743_52779 = state_52738__$1;(statearr_52743_52779[(2)] = null);
(statearr_52743_52779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (4)))
{var inst_52684 = (state_52738[(13)]);var inst_52684__$1 = (state_52738[(2)]);var inst_52685 = (inst_52684__$1 == null);var state_52738__$1 = (function (){var statearr_52747 = state_52738;(statearr_52747[(13)] = inst_52684__$1);
return statearr_52747;
})();if(cljs.core.truth_(inst_52685))
{var statearr_52748_52780 = state_52738__$1;(statearr_52748_52780[(1)] = (5));
} else
{var statearr_52749_52781 = state_52738__$1;(statearr_52749_52781[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (15)))
{var state_52738__$1 = state_52738;var statearr_52750_52782 = state_52738__$1;(statearr_52750_52782[(2)] = null);
(statearr_52750_52782[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (13)))
{var inst_52696 = (state_52738[(8)]);var inst_52697 = (state_52738[(9)]);var inst_52698 = (state_52738[(10)]);var inst_52695 = (state_52738[(11)]);var inst_52705 = (state_52738[(2)]);var inst_52706 = (inst_52698 + (1));var tmp52744 = inst_52696;var tmp52745 = inst_52697;var tmp52746 = inst_52695;var inst_52695__$1 = tmp52746;var inst_52696__$1 = tmp52744;var inst_52697__$1 = tmp52745;var inst_52698__$1 = inst_52706;var state_52738__$1 = (function (){var statearr_52751 = state_52738;(statearr_52751[(8)] = inst_52696__$1);
(statearr_52751[(9)] = inst_52697__$1);
(statearr_52751[(10)] = inst_52698__$1);
(statearr_52751[(11)] = inst_52695__$1);
(statearr_52751[(14)] = inst_52705);
return statearr_52751;
})();var statearr_52752_52783 = state_52738__$1;(statearr_52752_52783[(2)] = null);
(statearr_52752_52783[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (6)))
{var inst_52684 = (state_52738[(13)]);var inst_52689 = f.call(null,inst_52684);var inst_52694 = cljs.core.seq.call(null,inst_52689);var inst_52695 = inst_52694;var inst_52696 = null;var inst_52697 = (0);var inst_52698 = (0);var state_52738__$1 = (function (){var statearr_52753 = state_52738;(statearr_52753[(8)] = inst_52696);
(statearr_52753[(9)] = inst_52697);
(statearr_52753[(10)] = inst_52698);
(statearr_52753[(11)] = inst_52695);
return statearr_52753;
})();var statearr_52754_52784 = state_52738__$1;(statearr_52754_52784[(2)] = null);
(statearr_52754_52784[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (17)))
{var inst_52709 = (state_52738[(7)]);var inst_52713 = cljs.core.chunk_first.call(null,inst_52709);var inst_52714 = cljs.core.chunk_rest.call(null,inst_52709);var inst_52715 = cljs.core.count.call(null,inst_52713);var inst_52695 = inst_52714;var inst_52696 = inst_52713;var inst_52697 = inst_52715;var inst_52698 = (0);var state_52738__$1 = (function (){var statearr_52755 = state_52738;(statearr_52755[(8)] = inst_52696);
(statearr_52755[(9)] = inst_52697);
(statearr_52755[(10)] = inst_52698);
(statearr_52755[(11)] = inst_52695);
return statearr_52755;
})();var statearr_52756_52785 = state_52738__$1;(statearr_52756_52785[(2)] = null);
(statearr_52756_52785[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (3)))
{var inst_52736 = (state_52738[(2)]);var state_52738__$1 = state_52738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52738__$1,inst_52736);
} else
{if((state_val_52739 === (12)))
{var inst_52729 = (state_52738[(2)]);var state_52738__$1 = state_52738;var statearr_52757_52786 = state_52738__$1;(statearr_52757_52786[(2)] = inst_52729);
(statearr_52757_52786[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (2)))
{var state_52738__$1 = state_52738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52738__$1,(4),in$);
} else
{if((state_val_52739 === (19)))
{var inst_52724 = (state_52738[(2)]);var state_52738__$1 = state_52738;var statearr_52758_52787 = state_52738__$1;(statearr_52758_52787[(2)] = inst_52724);
(statearr_52758_52787[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (11)))
{var inst_52695 = (state_52738[(11)]);var inst_52709 = (state_52738[(7)]);var inst_52709__$1 = cljs.core.seq.call(null,inst_52695);var state_52738__$1 = (function (){var statearr_52759 = state_52738;(statearr_52759[(7)] = inst_52709__$1);
return statearr_52759;
})();if(inst_52709__$1)
{var statearr_52760_52788 = state_52738__$1;(statearr_52760_52788[(1)] = (14));
} else
{var statearr_52761_52789 = state_52738__$1;(statearr_52761_52789[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (9)))
{var inst_52731 = (state_52738[(2)]);var state_52738__$1 = (function (){var statearr_52762 = state_52738;(statearr_52762[(15)] = inst_52731);
return statearr_52762;
})();var statearr_52763_52790 = state_52738__$1;(statearr_52763_52790[(2)] = null);
(statearr_52763_52790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (5)))
{var inst_52687 = cljs.core.async.close_BANG_.call(null,out);var state_52738__$1 = state_52738;var statearr_52764_52791 = state_52738__$1;(statearr_52764_52791[(2)] = inst_52687);
(statearr_52764_52791[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (14)))
{var inst_52709 = (state_52738[(7)]);var inst_52711 = cljs.core.chunked_seq_QMARK_.call(null,inst_52709);var state_52738__$1 = state_52738;if(inst_52711)
{var statearr_52765_52792 = state_52738__$1;(statearr_52765_52792[(1)] = (17));
} else
{var statearr_52766_52793 = state_52738__$1;(statearr_52766_52793[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (16)))
{var inst_52727 = (state_52738[(2)]);var state_52738__$1 = state_52738;var statearr_52767_52794 = state_52738__$1;(statearr_52767_52794[(2)] = inst_52727);
(statearr_52767_52794[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52739 === (10)))
{var inst_52696 = (state_52738[(8)]);var inst_52698 = (state_52738[(10)]);var inst_52703 = cljs.core._nth.call(null,inst_52696,inst_52698);var state_52738__$1 = state_52738;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52738__$1,(13),out,inst_52703);
} else
{if((state_val_52739 === (18)))
{var inst_52709 = (state_52738[(7)]);var inst_52718 = cljs.core.first.call(null,inst_52709);var state_52738__$1 = state_52738;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52738__$1,(20),out,inst_52718);
} else
{if((state_val_52739 === (8)))
{var inst_52697 = (state_52738[(9)]);var inst_52698 = (state_52738[(10)]);var inst_52700 = (inst_52698 < inst_52697);var inst_52701 = inst_52700;var state_52738__$1 = state_52738;if(cljs.core.truth_(inst_52701))
{var statearr_52768_52795 = state_52738__$1;(statearr_52768_52795[(1)] = (10));
} else
{var statearr_52769_52796 = state_52738__$1;(statearr_52769_52796[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_52773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52773[(0)] = state_machine__5677__auto__);
(statearr_52773[(1)] = (1));
return statearr_52773;
});
var state_machine__5677__auto____1 = (function (state_52738){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_52738);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e52774){if((e52774 instanceof Object))
{var ex__5680__auto__ = e52774;var statearr_52775_52797 = state_52738;(statearr_52775_52797[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52738);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52798 = state_52738;
state_52738 = G__52798;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_52738){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_52738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_52776 = f__5692__auto__.call(null);(statearr_52776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_52776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5691__auto___52879 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___52879){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___52879){
return (function (state_52858){var state_val_52859 = (state_52858[(1)]);if((state_val_52859 === (7)))
{var inst_52854 = (state_52858[(2)]);var state_52858__$1 = state_52858;var statearr_52860_52880 = state_52858__$1;(statearr_52860_52880[(2)] = inst_52854);
(statearr_52860_52880[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52859 === (1)))
{var state_52858__$1 = state_52858;var statearr_52861_52881 = state_52858__$1;(statearr_52861_52881[(2)] = null);
(statearr_52861_52881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52859 === (4)))
{var inst_52841 = (state_52858[(7)]);var inst_52841__$1 = (state_52858[(2)]);var inst_52842 = (inst_52841__$1 == null);var state_52858__$1 = (function (){var statearr_52862 = state_52858;(statearr_52862[(7)] = inst_52841__$1);
return statearr_52862;
})();if(cljs.core.truth_(inst_52842))
{var statearr_52863_52882 = state_52858__$1;(statearr_52863_52882[(1)] = (5));
} else
{var statearr_52864_52883 = state_52858__$1;(statearr_52864_52883[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52859 === (6)))
{var inst_52841 = (state_52858[(7)]);var state_52858__$1 = state_52858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52858__$1,(11),to,inst_52841);
} else
{if((state_val_52859 === (3)))
{var inst_52856 = (state_52858[(2)]);var state_52858__$1 = state_52858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52858__$1,inst_52856);
} else
{if((state_val_52859 === (2)))
{var state_52858__$1 = state_52858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52858__$1,(4),from);
} else
{if((state_val_52859 === (11)))
{var inst_52851 = (state_52858[(2)]);var state_52858__$1 = (function (){var statearr_52865 = state_52858;(statearr_52865[(8)] = inst_52851);
return statearr_52865;
})();var statearr_52866_52884 = state_52858__$1;(statearr_52866_52884[(2)] = null);
(statearr_52866_52884[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52859 === (9)))
{var state_52858__$1 = state_52858;var statearr_52867_52885 = state_52858__$1;(statearr_52867_52885[(2)] = null);
(statearr_52867_52885[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52859 === (5)))
{var state_52858__$1 = state_52858;if(cljs.core.truth_(close_QMARK_))
{var statearr_52868_52886 = state_52858__$1;(statearr_52868_52886[(1)] = (8));
} else
{var statearr_52869_52887 = state_52858__$1;(statearr_52869_52887[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52859 === (10)))
{var inst_52848 = (state_52858[(2)]);var state_52858__$1 = state_52858;var statearr_52870_52888 = state_52858__$1;(statearr_52870_52888[(2)] = inst_52848);
(statearr_52870_52888[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52859 === (8)))
{var inst_52845 = cljs.core.async.close_BANG_.call(null,to);var state_52858__$1 = state_52858;var statearr_52871_52889 = state_52858__$1;(statearr_52871_52889[(2)] = inst_52845);
(statearr_52871_52889[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___52879))
;return ((function (switch__5676__auto__,c__5691__auto___52879){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_52875 = [null,null,null,null,null,null,null,null,null];(statearr_52875[(0)] = state_machine__5677__auto__);
(statearr_52875[(1)] = (1));
return statearr_52875;
});
var state_machine__5677__auto____1 = (function (state_52858){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_52858);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e52876){if((e52876 instanceof Object))
{var ex__5680__auto__ = e52876;var statearr_52877_52890 = state_52858;(statearr_52877_52890[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52891 = state_52858;
state_52858 = G__52891;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_52858){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_52858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___52879))
})();var state__5693__auto__ = (function (){var statearr_52878 = f__5692__auto__.call(null);(statearr_52878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___52879);
return statearr_52878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___52879))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5691__auto___52978 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___52978,tc,fc){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___52978,tc,fc){
return (function (state_52956){var state_val_52957 = (state_52956[(1)]);if((state_val_52957 === (7)))
{var inst_52952 = (state_52956[(2)]);var state_52956__$1 = state_52956;var statearr_52958_52979 = state_52956__$1;(statearr_52958_52979[(2)] = inst_52952);
(statearr_52958_52979[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52957 === (1)))
{var state_52956__$1 = state_52956;var statearr_52959_52980 = state_52956__$1;(statearr_52959_52980[(2)] = null);
(statearr_52959_52980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52957 === (4)))
{var inst_52937 = (state_52956[(7)]);var inst_52937__$1 = (state_52956[(2)]);var inst_52938 = (inst_52937__$1 == null);var state_52956__$1 = (function (){var statearr_52960 = state_52956;(statearr_52960[(7)] = inst_52937__$1);
return statearr_52960;
})();if(cljs.core.truth_(inst_52938))
{var statearr_52961_52981 = state_52956__$1;(statearr_52961_52981[(1)] = (5));
} else
{var statearr_52962_52982 = state_52956__$1;(statearr_52962_52982[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52957 === (6)))
{var inst_52937 = (state_52956[(7)]);var inst_52943 = p.call(null,inst_52937);var state_52956__$1 = state_52956;if(cljs.core.truth_(inst_52943))
{var statearr_52963_52983 = state_52956__$1;(statearr_52963_52983[(1)] = (9));
} else
{var statearr_52964_52984 = state_52956__$1;(statearr_52964_52984[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52957 === (3)))
{var inst_52954 = (state_52956[(2)]);var state_52956__$1 = state_52956;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52956__$1,inst_52954);
} else
{if((state_val_52957 === (2)))
{var state_52956__$1 = state_52956;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52956__$1,(4),ch);
} else
{if((state_val_52957 === (11)))
{var inst_52937 = (state_52956[(7)]);var inst_52947 = (state_52956[(2)]);var state_52956__$1 = state_52956;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52956__$1,(8),inst_52947,inst_52937);
} else
{if((state_val_52957 === (9)))
{var state_52956__$1 = state_52956;var statearr_52965_52985 = state_52956__$1;(statearr_52965_52985[(2)] = tc);
(statearr_52965_52985[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52957 === (5)))
{var inst_52940 = cljs.core.async.close_BANG_.call(null,tc);var inst_52941 = cljs.core.async.close_BANG_.call(null,fc);var state_52956__$1 = (function (){var statearr_52966 = state_52956;(statearr_52966[(8)] = inst_52940);
return statearr_52966;
})();var statearr_52967_52986 = state_52956__$1;(statearr_52967_52986[(2)] = inst_52941);
(statearr_52967_52986[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52957 === (10)))
{var state_52956__$1 = state_52956;var statearr_52968_52987 = state_52956__$1;(statearr_52968_52987[(2)] = fc);
(statearr_52968_52987[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52957 === (8)))
{var inst_52949 = (state_52956[(2)]);var state_52956__$1 = (function (){var statearr_52969 = state_52956;(statearr_52969[(9)] = inst_52949);
return statearr_52969;
})();var statearr_52970_52988 = state_52956__$1;(statearr_52970_52988[(2)] = null);
(statearr_52970_52988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___52978,tc,fc))
;return ((function (switch__5676__auto__,c__5691__auto___52978,tc,fc){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_52974 = [null,null,null,null,null,null,null,null,null,null];(statearr_52974[(0)] = state_machine__5677__auto__);
(statearr_52974[(1)] = (1));
return statearr_52974;
});
var state_machine__5677__auto____1 = (function (state_52956){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_52956);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e52975){if((e52975 instanceof Object))
{var ex__5680__auto__ = e52975;var statearr_52976_52989 = state_52956;(statearr_52976_52989[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52956);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52990 = state_52956;
state_52956 = G__52990;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_52956){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_52956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___52978,tc,fc))
})();var state__5693__auto__ = (function (){var statearr_52977 = f__5692__auto__.call(null);(statearr_52977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___52978);
return statearr_52977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___52978,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_53037){var state_val_53038 = (state_53037[(1)]);if((state_val_53038 === (7)))
{var inst_53033 = (state_53037[(2)]);var state_53037__$1 = state_53037;var statearr_53039_53055 = state_53037__$1;(statearr_53039_53055[(2)] = inst_53033);
(statearr_53039_53055[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53038 === (6)))
{var inst_53023 = (state_53037[(7)]);var inst_53026 = (state_53037[(8)]);var inst_53030 = f.call(null,inst_53023,inst_53026);var inst_53023__$1 = inst_53030;var state_53037__$1 = (function (){var statearr_53040 = state_53037;(statearr_53040[(7)] = inst_53023__$1);
return statearr_53040;
})();var statearr_53041_53056 = state_53037__$1;(statearr_53041_53056[(2)] = null);
(statearr_53041_53056[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53038 === (5)))
{var inst_53023 = (state_53037[(7)]);var state_53037__$1 = state_53037;var statearr_53042_53057 = state_53037__$1;(statearr_53042_53057[(2)] = inst_53023);
(statearr_53042_53057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53038 === (4)))
{var inst_53026 = (state_53037[(8)]);var inst_53026__$1 = (state_53037[(2)]);var inst_53027 = (inst_53026__$1 == null);var state_53037__$1 = (function (){var statearr_53043 = state_53037;(statearr_53043[(8)] = inst_53026__$1);
return statearr_53043;
})();if(cljs.core.truth_(inst_53027))
{var statearr_53044_53058 = state_53037__$1;(statearr_53044_53058[(1)] = (5));
} else
{var statearr_53045_53059 = state_53037__$1;(statearr_53045_53059[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53038 === (3)))
{var inst_53035 = (state_53037[(2)]);var state_53037__$1 = state_53037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53037__$1,inst_53035);
} else
{if((state_val_53038 === (2)))
{var state_53037__$1 = state_53037;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53037__$1,(4),ch);
} else
{if((state_val_53038 === (1)))
{var inst_53023 = init;var state_53037__$1 = (function (){var statearr_53046 = state_53037;(statearr_53046[(7)] = inst_53023);
return statearr_53046;
})();var statearr_53047_53060 = state_53037__$1;(statearr_53047_53060[(2)] = null);
(statearr_53047_53060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_53051 = [null,null,null,null,null,null,null,null,null];(statearr_53051[(0)] = state_machine__5677__auto__);
(statearr_53051[(1)] = (1));
return statearr_53051;
});
var state_machine__5677__auto____1 = (function (state_53037){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_53037);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e53052){if((e53052 instanceof Object))
{var ex__5680__auto__ = e53052;var statearr_53053_53061 = state_53037;(statearr_53053_53061[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53037);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53062 = state_53037;
state_53037 = G__53062;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_53037){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_53037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_53054 = f__5692__auto__.call(null);(statearr_53054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_53054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_53124){var state_val_53125 = (state_53124[(1)]);if((state_val_53125 === (7)))
{var inst_53105 = (state_53124[(7)]);var inst_53110 = (state_53124[(2)]);var inst_53111 = cljs.core.next.call(null,inst_53105);var inst_53105__$1 = inst_53111;var state_53124__$1 = (function (){var statearr_53126 = state_53124;(statearr_53126[(7)] = inst_53105__$1);
(statearr_53126[(8)] = inst_53110);
return statearr_53126;
})();var statearr_53127_53145 = state_53124__$1;(statearr_53127_53145[(2)] = null);
(statearr_53127_53145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53125 === (1)))
{var inst_53104 = cljs.core.seq.call(null,coll);var inst_53105 = inst_53104;var state_53124__$1 = (function (){var statearr_53128 = state_53124;(statearr_53128[(7)] = inst_53105);
return statearr_53128;
})();var statearr_53129_53146 = state_53124__$1;(statearr_53129_53146[(2)] = null);
(statearr_53129_53146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53125 === (4)))
{var inst_53105 = (state_53124[(7)]);var inst_53108 = cljs.core.first.call(null,inst_53105);var state_53124__$1 = state_53124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53124__$1,(7),ch,inst_53108);
} else
{if((state_val_53125 === (6)))
{var inst_53120 = (state_53124[(2)]);var state_53124__$1 = state_53124;var statearr_53130_53147 = state_53124__$1;(statearr_53130_53147[(2)] = inst_53120);
(statearr_53130_53147[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53125 === (3)))
{var inst_53122 = (state_53124[(2)]);var state_53124__$1 = state_53124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53124__$1,inst_53122);
} else
{if((state_val_53125 === (2)))
{var inst_53105 = (state_53124[(7)]);var state_53124__$1 = state_53124;if(cljs.core.truth_(inst_53105))
{var statearr_53131_53148 = state_53124__$1;(statearr_53131_53148[(1)] = (4));
} else
{var statearr_53132_53149 = state_53124__$1;(statearr_53132_53149[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53125 === (9)))
{var state_53124__$1 = state_53124;var statearr_53133_53150 = state_53124__$1;(statearr_53133_53150[(2)] = null);
(statearr_53133_53150[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53125 === (5)))
{var state_53124__$1 = state_53124;if(cljs.core.truth_(close_QMARK_))
{var statearr_53134_53151 = state_53124__$1;(statearr_53134_53151[(1)] = (8));
} else
{var statearr_53135_53152 = state_53124__$1;(statearr_53135_53152[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53125 === (10)))
{var inst_53118 = (state_53124[(2)]);var state_53124__$1 = state_53124;var statearr_53136_53153 = state_53124__$1;(statearr_53136_53153[(2)] = inst_53118);
(statearr_53136_53153[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53125 === (8)))
{var inst_53115 = cljs.core.async.close_BANG_.call(null,ch);var state_53124__$1 = state_53124;var statearr_53137_53154 = state_53124__$1;(statearr_53137_53154[(2)] = inst_53115);
(statearr_53137_53154[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_53141 = [null,null,null,null,null,null,null,null,null];(statearr_53141[(0)] = state_machine__5677__auto__);
(statearr_53141[(1)] = (1));
return statearr_53141;
});
var state_machine__5677__auto____1 = (function (state_53124){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_53124);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e53142){if((e53142 instanceof Object))
{var ex__5680__auto__ = e53142;var statearr_53143_53155 = state_53124;(statearr_53143_53155[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53124);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53156 = state_53124;
state_53124 = G__53156;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_53124){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_53124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_53144 = f__5692__auto__.call(null);(statearr_53144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_53144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj53158 = {};return obj53158;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj53160 = {};return obj53160;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t53384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53384 = (function (cs,ch,mult,meta53385){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta53385 = meta53385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53384.cljs$lang$type = true;
cljs.core.async.t53384.cljs$lang$ctorStr = "cljs.core.async/t53384";
cljs.core.async.t53384.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t53384");
});})(cs))
;
cljs.core.async.t53384.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t53384.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t53384.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t53384.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t53384.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t53384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t53384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_53386){var self__ = this;
var _53386__$1 = this;return self__.meta53385;
});})(cs))
;
cljs.core.async.t53384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_53386,meta53385__$1){var self__ = this;
var _53386__$1 = this;return (new cljs.core.async.t53384(self__.cs,self__.ch,self__.mult,meta53385__$1));
});})(cs))
;
cljs.core.async.__GT_t53384 = ((function (cs){
return (function __GT_t53384(cs__$1,ch__$1,mult__$1,meta53385){return (new cljs.core.async.t53384(cs__$1,ch__$1,mult__$1,meta53385));
});})(cs))
;
}
return (new cljs.core.async.t53384(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5691__auto___53607 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___53607,cs,m,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___53607,cs,m,dchan,dctr,done){
return (function (state_53521){var state_val_53522 = (state_53521[(1)]);if((state_val_53522 === (7)))
{var inst_53517 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53523_53608 = state_53521__$1;(statearr_53523_53608[(2)] = inst_53517);
(statearr_53523_53608[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (20)))
{var inst_53418 = (state_53521[(7)]);var inst_53428 = cljs.core.first.call(null,inst_53418);var inst_53429 = cljs.core.nth.call(null,inst_53428,(0),null);var inst_53430 = cljs.core.nth.call(null,inst_53428,(1),null);var state_53521__$1 = (function (){var statearr_53524 = state_53521;(statearr_53524[(8)] = inst_53429);
return statearr_53524;
})();if(cljs.core.truth_(inst_53430))
{var statearr_53525_53609 = state_53521__$1;(statearr_53525_53609[(1)] = (22));
} else
{var statearr_53526_53610 = state_53521__$1;(statearr_53526_53610[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (27)))
{var inst_53460 = (state_53521[(9)]);var inst_53458 = (state_53521[(10)]);var inst_53465 = cljs.core._nth.call(null,inst_53458,inst_53460);var state_53521__$1 = (function (){var statearr_53527 = state_53521;(statearr_53527[(11)] = inst_53465);
return statearr_53527;
})();var statearr_53528_53611 = state_53521__$1;(statearr_53528_53611[(2)] = null);
(statearr_53528_53611[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (1)))
{var state_53521__$1 = state_53521;var statearr_53529_53612 = state_53521__$1;(statearr_53529_53612[(2)] = null);
(statearr_53529_53612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (24)))
{var inst_53418 = (state_53521[(7)]);var inst_53435 = (state_53521[(2)]);var inst_53436 = cljs.core.next.call(null,inst_53418);var inst_53398 = inst_53436;var inst_53399 = null;var inst_53400 = (0);var inst_53401 = (0);var state_53521__$1 = (function (){var statearr_53530 = state_53521;(statearr_53530[(12)] = inst_53400);
(statearr_53530[(13)] = inst_53399);
(statearr_53530[(14)] = inst_53435);
(statearr_53530[(15)] = inst_53398);
(statearr_53530[(16)] = inst_53401);
return statearr_53530;
})();var statearr_53531_53613 = state_53521__$1;(statearr_53531_53613[(2)] = null);
(statearr_53531_53613[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (39)))
{var inst_53478 = (state_53521[(17)]);var inst_53496 = (state_53521[(2)]);var inst_53497 = cljs.core.next.call(null,inst_53478);var inst_53457 = inst_53497;var inst_53458 = null;var inst_53459 = (0);var inst_53460 = (0);var state_53521__$1 = (function (){var statearr_53535 = state_53521;(statearr_53535[(18)] = inst_53457);
(statearr_53535[(19)] = inst_53459);
(statearr_53535[(9)] = inst_53460);
(statearr_53535[(20)] = inst_53496);
(statearr_53535[(10)] = inst_53458);
return statearr_53535;
})();var statearr_53536_53614 = state_53521__$1;(statearr_53536_53614[(2)] = null);
(statearr_53536_53614[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (4)))
{var inst_53389 = (state_53521[(21)]);var inst_53389__$1 = (state_53521[(2)]);var inst_53390 = (inst_53389__$1 == null);var state_53521__$1 = (function (){var statearr_53537 = state_53521;(statearr_53537[(21)] = inst_53389__$1);
return statearr_53537;
})();if(cljs.core.truth_(inst_53390))
{var statearr_53538_53615 = state_53521__$1;(statearr_53538_53615[(1)] = (5));
} else
{var statearr_53539_53616 = state_53521__$1;(statearr_53539_53616[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (15)))
{var inst_53400 = (state_53521[(12)]);var inst_53399 = (state_53521[(13)]);var inst_53398 = (state_53521[(15)]);var inst_53401 = (state_53521[(16)]);var inst_53414 = (state_53521[(2)]);var inst_53415 = (inst_53401 + (1));var tmp53532 = inst_53400;var tmp53533 = inst_53399;var tmp53534 = inst_53398;var inst_53398__$1 = tmp53534;var inst_53399__$1 = tmp53533;var inst_53400__$1 = tmp53532;var inst_53401__$1 = inst_53415;var state_53521__$1 = (function (){var statearr_53540 = state_53521;(statearr_53540[(12)] = inst_53400__$1);
(statearr_53540[(13)] = inst_53399__$1);
(statearr_53540[(15)] = inst_53398__$1);
(statearr_53540[(22)] = inst_53414);
(statearr_53540[(16)] = inst_53401__$1);
return statearr_53540;
})();var statearr_53541_53617 = state_53521__$1;(statearr_53541_53617[(2)] = null);
(statearr_53541_53617[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (21)))
{var inst_53439 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53542_53618 = state_53521__$1;(statearr_53542_53618[(2)] = inst_53439);
(statearr_53542_53618[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (31)))
{var inst_53465 = (state_53521[(11)]);var inst_53466 = (state_53521[(2)]);var inst_53467 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_53468 = cljs.core.async.untap_STAR_.call(null,m,inst_53465);var state_53521__$1 = (function (){var statearr_53543 = state_53521;(statearr_53543[(23)] = inst_53467);
(statearr_53543[(24)] = inst_53466);
return statearr_53543;
})();var statearr_53544_53619 = state_53521__$1;(statearr_53544_53619[(2)] = inst_53468);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53521__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (32)))
{var inst_53389 = (state_53521[(21)]);var inst_53465 = (state_53521[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53521,(31),Object,null,(30));var inst_53472 = cljs.core.async.put_BANG_.call(null,inst_53465,inst_53389,done);var state_53521__$1 = state_53521;var statearr_53545_53620 = state_53521__$1;(statearr_53545_53620[(2)] = inst_53472);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53521__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (40)))
{var inst_53487 = (state_53521[(25)]);var inst_53488 = (state_53521[(2)]);var inst_53489 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_53490 = cljs.core.async.untap_STAR_.call(null,m,inst_53487);var state_53521__$1 = (function (){var statearr_53546 = state_53521;(statearr_53546[(26)] = inst_53488);
(statearr_53546[(27)] = inst_53489);
return statearr_53546;
})();var statearr_53547_53621 = state_53521__$1;(statearr_53547_53621[(2)] = inst_53490);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53521__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (33)))
{var inst_53478 = (state_53521[(17)]);var inst_53480 = cljs.core.chunked_seq_QMARK_.call(null,inst_53478);var state_53521__$1 = state_53521;if(inst_53480)
{var statearr_53548_53622 = state_53521__$1;(statearr_53548_53622[(1)] = (36));
} else
{var statearr_53549_53623 = state_53521__$1;(statearr_53549_53623[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (13)))
{var inst_53408 = (state_53521[(28)]);var inst_53411 = cljs.core.async.close_BANG_.call(null,inst_53408);var state_53521__$1 = state_53521;var statearr_53550_53624 = state_53521__$1;(statearr_53550_53624[(2)] = inst_53411);
(statearr_53550_53624[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (22)))
{var inst_53429 = (state_53521[(8)]);var inst_53432 = cljs.core.async.close_BANG_.call(null,inst_53429);var state_53521__$1 = state_53521;var statearr_53551_53625 = state_53521__$1;(statearr_53551_53625[(2)] = inst_53432);
(statearr_53551_53625[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (36)))
{var inst_53478 = (state_53521[(17)]);var inst_53482 = cljs.core.chunk_first.call(null,inst_53478);var inst_53483 = cljs.core.chunk_rest.call(null,inst_53478);var inst_53484 = cljs.core.count.call(null,inst_53482);var inst_53457 = inst_53483;var inst_53458 = inst_53482;var inst_53459 = inst_53484;var inst_53460 = (0);var state_53521__$1 = (function (){var statearr_53552 = state_53521;(statearr_53552[(18)] = inst_53457);
(statearr_53552[(19)] = inst_53459);
(statearr_53552[(9)] = inst_53460);
(statearr_53552[(10)] = inst_53458);
return statearr_53552;
})();var statearr_53553_53626 = state_53521__$1;(statearr_53553_53626[(2)] = null);
(statearr_53553_53626[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (41)))
{var inst_53389 = (state_53521[(21)]);var inst_53487 = (state_53521[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53521,(40),Object,null,(39));var inst_53494 = cljs.core.async.put_BANG_.call(null,inst_53487,inst_53389,done);var state_53521__$1 = state_53521;var statearr_53554_53627 = state_53521__$1;(statearr_53554_53627[(2)] = inst_53494);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53521__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (43)))
{var state_53521__$1 = state_53521;var statearr_53555_53628 = state_53521__$1;(statearr_53555_53628[(2)] = null);
(statearr_53555_53628[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (29)))
{var inst_53505 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53556_53629 = state_53521__$1;(statearr_53556_53629[(2)] = inst_53505);
(statearr_53556_53629[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (44)))
{var inst_53514 = (state_53521[(2)]);var state_53521__$1 = (function (){var statearr_53557 = state_53521;(statearr_53557[(29)] = inst_53514);
return statearr_53557;
})();var statearr_53558_53630 = state_53521__$1;(statearr_53558_53630[(2)] = null);
(statearr_53558_53630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (6)))
{var inst_53449 = (state_53521[(30)]);var inst_53448 = cljs.core.deref.call(null,cs);var inst_53449__$1 = cljs.core.keys.call(null,inst_53448);var inst_53450 = cljs.core.count.call(null,inst_53449__$1);var inst_53451 = cljs.core.reset_BANG_.call(null,dctr,inst_53450);var inst_53456 = cljs.core.seq.call(null,inst_53449__$1);var inst_53457 = inst_53456;var inst_53458 = null;var inst_53459 = (0);var inst_53460 = (0);var state_53521__$1 = (function (){var statearr_53559 = state_53521;(statearr_53559[(31)] = inst_53451);
(statearr_53559[(18)] = inst_53457);
(statearr_53559[(30)] = inst_53449__$1);
(statearr_53559[(19)] = inst_53459);
(statearr_53559[(9)] = inst_53460);
(statearr_53559[(10)] = inst_53458);
return statearr_53559;
})();var statearr_53560_53631 = state_53521__$1;(statearr_53560_53631[(2)] = null);
(statearr_53560_53631[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (28)))
{var inst_53478 = (state_53521[(17)]);var inst_53457 = (state_53521[(18)]);var inst_53478__$1 = cljs.core.seq.call(null,inst_53457);var state_53521__$1 = (function (){var statearr_53561 = state_53521;(statearr_53561[(17)] = inst_53478__$1);
return statearr_53561;
})();if(inst_53478__$1)
{var statearr_53562_53632 = state_53521__$1;(statearr_53562_53632[(1)] = (33));
} else
{var statearr_53563_53633 = state_53521__$1;(statearr_53563_53633[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (25)))
{var inst_53459 = (state_53521[(19)]);var inst_53460 = (state_53521[(9)]);var inst_53462 = (inst_53460 < inst_53459);var inst_53463 = inst_53462;var state_53521__$1 = state_53521;if(cljs.core.truth_(inst_53463))
{var statearr_53564_53634 = state_53521__$1;(statearr_53564_53634[(1)] = (27));
} else
{var statearr_53565_53635 = state_53521__$1;(statearr_53565_53635[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (34)))
{var state_53521__$1 = state_53521;var statearr_53566_53636 = state_53521__$1;(statearr_53566_53636[(2)] = null);
(statearr_53566_53636[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (17)))
{var state_53521__$1 = state_53521;var statearr_53567_53637 = state_53521__$1;(statearr_53567_53637[(2)] = null);
(statearr_53567_53637[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (3)))
{var inst_53519 = (state_53521[(2)]);var state_53521__$1 = state_53521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53521__$1,inst_53519);
} else
{if((state_val_53522 === (12)))
{var inst_53444 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53568_53638 = state_53521__$1;(statearr_53568_53638[(2)] = inst_53444);
(statearr_53568_53638[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (2)))
{var state_53521__$1 = state_53521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53521__$1,(4),ch);
} else
{if((state_val_53522 === (23)))
{var state_53521__$1 = state_53521;var statearr_53569_53639 = state_53521__$1;(statearr_53569_53639[(2)] = null);
(statearr_53569_53639[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (35)))
{var inst_53503 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53570_53640 = state_53521__$1;(statearr_53570_53640[(2)] = inst_53503);
(statearr_53570_53640[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (19)))
{var inst_53418 = (state_53521[(7)]);var inst_53422 = cljs.core.chunk_first.call(null,inst_53418);var inst_53423 = cljs.core.chunk_rest.call(null,inst_53418);var inst_53424 = cljs.core.count.call(null,inst_53422);var inst_53398 = inst_53423;var inst_53399 = inst_53422;var inst_53400 = inst_53424;var inst_53401 = (0);var state_53521__$1 = (function (){var statearr_53571 = state_53521;(statearr_53571[(12)] = inst_53400);
(statearr_53571[(13)] = inst_53399);
(statearr_53571[(15)] = inst_53398);
(statearr_53571[(16)] = inst_53401);
return statearr_53571;
})();var statearr_53572_53641 = state_53521__$1;(statearr_53572_53641[(2)] = null);
(statearr_53572_53641[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (11)))
{var inst_53418 = (state_53521[(7)]);var inst_53398 = (state_53521[(15)]);var inst_53418__$1 = cljs.core.seq.call(null,inst_53398);var state_53521__$1 = (function (){var statearr_53573 = state_53521;(statearr_53573[(7)] = inst_53418__$1);
return statearr_53573;
})();if(inst_53418__$1)
{var statearr_53574_53642 = state_53521__$1;(statearr_53574_53642[(1)] = (16));
} else
{var statearr_53575_53643 = state_53521__$1;(statearr_53575_53643[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (9)))
{var inst_53446 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53576_53644 = state_53521__$1;(statearr_53576_53644[(2)] = inst_53446);
(statearr_53576_53644[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (5)))
{var inst_53396 = cljs.core.deref.call(null,cs);var inst_53397 = cljs.core.seq.call(null,inst_53396);var inst_53398 = inst_53397;var inst_53399 = null;var inst_53400 = (0);var inst_53401 = (0);var state_53521__$1 = (function (){var statearr_53577 = state_53521;(statearr_53577[(12)] = inst_53400);
(statearr_53577[(13)] = inst_53399);
(statearr_53577[(15)] = inst_53398);
(statearr_53577[(16)] = inst_53401);
return statearr_53577;
})();var statearr_53578_53645 = state_53521__$1;(statearr_53578_53645[(2)] = null);
(statearr_53578_53645[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (14)))
{var state_53521__$1 = state_53521;var statearr_53579_53646 = state_53521__$1;(statearr_53579_53646[(2)] = null);
(statearr_53579_53646[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (45)))
{var inst_53511 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53580_53647 = state_53521__$1;(statearr_53580_53647[(2)] = inst_53511);
(statearr_53580_53647[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (26)))
{var inst_53449 = (state_53521[(30)]);var inst_53507 = (state_53521[(2)]);var inst_53508 = cljs.core.seq.call(null,inst_53449);var state_53521__$1 = (function (){var statearr_53581 = state_53521;(statearr_53581[(32)] = inst_53507);
return statearr_53581;
})();if(inst_53508)
{var statearr_53582_53648 = state_53521__$1;(statearr_53582_53648[(1)] = (42));
} else
{var statearr_53583_53649 = state_53521__$1;(statearr_53583_53649[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (16)))
{var inst_53418 = (state_53521[(7)]);var inst_53420 = cljs.core.chunked_seq_QMARK_.call(null,inst_53418);var state_53521__$1 = state_53521;if(inst_53420)
{var statearr_53587_53650 = state_53521__$1;(statearr_53587_53650[(1)] = (19));
} else
{var statearr_53588_53651 = state_53521__$1;(statearr_53588_53651[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (38)))
{var inst_53500 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53589_53652 = state_53521__$1;(statearr_53589_53652[(2)] = inst_53500);
(statearr_53589_53652[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (30)))
{var inst_53457 = (state_53521[(18)]);var inst_53459 = (state_53521[(19)]);var inst_53460 = (state_53521[(9)]);var inst_53458 = (state_53521[(10)]);var inst_53474 = (state_53521[(2)]);var inst_53475 = (inst_53460 + (1));var tmp53584 = inst_53457;var tmp53585 = inst_53459;var tmp53586 = inst_53458;var inst_53457__$1 = tmp53584;var inst_53458__$1 = tmp53586;var inst_53459__$1 = tmp53585;var inst_53460__$1 = inst_53475;var state_53521__$1 = (function (){var statearr_53590 = state_53521;(statearr_53590[(33)] = inst_53474);
(statearr_53590[(18)] = inst_53457__$1);
(statearr_53590[(19)] = inst_53459__$1);
(statearr_53590[(9)] = inst_53460__$1);
(statearr_53590[(10)] = inst_53458__$1);
return statearr_53590;
})();var statearr_53591_53653 = state_53521__$1;(statearr_53591_53653[(2)] = null);
(statearr_53591_53653[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (10)))
{var inst_53399 = (state_53521[(13)]);var inst_53401 = (state_53521[(16)]);var inst_53407 = cljs.core._nth.call(null,inst_53399,inst_53401);var inst_53408 = cljs.core.nth.call(null,inst_53407,(0),null);var inst_53409 = cljs.core.nth.call(null,inst_53407,(1),null);var state_53521__$1 = (function (){var statearr_53592 = state_53521;(statearr_53592[(28)] = inst_53408);
return statearr_53592;
})();if(cljs.core.truth_(inst_53409))
{var statearr_53593_53654 = state_53521__$1;(statearr_53593_53654[(1)] = (13));
} else
{var statearr_53594_53655 = state_53521__$1;(statearr_53594_53655[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (18)))
{var inst_53442 = (state_53521[(2)]);var state_53521__$1 = state_53521;var statearr_53595_53656 = state_53521__$1;(statearr_53595_53656[(2)] = inst_53442);
(statearr_53595_53656[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (42)))
{var state_53521__$1 = state_53521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53521__$1,(45),dchan);
} else
{if((state_val_53522 === (37)))
{var inst_53478 = (state_53521[(17)]);var inst_53487 = cljs.core.first.call(null,inst_53478);var state_53521__$1 = (function (){var statearr_53596 = state_53521;(statearr_53596[(25)] = inst_53487);
return statearr_53596;
})();var statearr_53597_53657 = state_53521__$1;(statearr_53597_53657[(2)] = null);
(statearr_53597_53657[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53522 === (8)))
{var inst_53400 = (state_53521[(12)]);var inst_53401 = (state_53521[(16)]);var inst_53403 = (inst_53401 < inst_53400);var inst_53404 = inst_53403;var state_53521__$1 = state_53521;if(cljs.core.truth_(inst_53404))
{var statearr_53598_53658 = state_53521__$1;(statearr_53598_53658[(1)] = (10));
} else
{var statearr_53599_53659 = state_53521__$1;(statearr_53599_53659[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___53607,cs,m,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___53607,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_53603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53603[(0)] = state_machine__5677__auto__);
(statearr_53603[(1)] = (1));
return statearr_53603;
});
var state_machine__5677__auto____1 = (function (state_53521){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_53521);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e53604){if((e53604 instanceof Object))
{var ex__5680__auto__ = e53604;var statearr_53605_53660 = state_53521;(statearr_53605_53660[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53661 = state_53521;
state_53521 = G__53661;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_53521){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_53521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___53607,cs,m,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_53606 = f__5692__auto__.call(null);(statearr_53606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___53607);
return statearr_53606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___53607,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj53663 = {};return obj53663;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t53773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53773 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53774){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta53774 = meta53774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53773.cljs$lang$type = true;
cljs.core.async.t53773.cljs$lang$ctorStr = "cljs.core.async/t53773";
cljs.core.async.t53773.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t53773");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53773.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t53773.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53773.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53773.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53773.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53773.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53773.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t53773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53775){var self__ = this;
var _53775__$1 = this;return self__.meta53774;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53775,meta53774__$1){var self__ = this;
var _53775__$1 = this;return (new cljs.core.async.t53773(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53774__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t53773 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t53773(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53774){return (new cljs.core.async.t53773(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53774));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t53773(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5691__auto___53882 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___53882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___53882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53840){var state_val_53841 = (state_53840[(1)]);if((state_val_53841 === (7)))
{var inst_53789 = (state_53840[(7)]);var inst_53794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53789);var state_53840__$1 = state_53840;var statearr_53842_53883 = state_53840__$1;(statearr_53842_53883[(2)] = inst_53794);
(statearr_53842_53883[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (20)))
{var inst_53804 = (state_53840[(8)]);var state_53840__$1 = state_53840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53840__$1,(23),out,inst_53804);
} else
{if((state_val_53841 === (1)))
{var inst_53779 = (state_53840[(9)]);var inst_53779__$1 = calc_state.call(null);var inst_53780 = cljs.core.seq_QMARK_.call(null,inst_53779__$1);var state_53840__$1 = (function (){var statearr_53843 = state_53840;(statearr_53843[(9)] = inst_53779__$1);
return statearr_53843;
})();if(inst_53780)
{var statearr_53844_53884 = state_53840__$1;(statearr_53844_53884[(1)] = (2));
} else
{var statearr_53845_53885 = state_53840__$1;(statearr_53845_53885[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (4)))
{var inst_53779 = (state_53840[(9)]);var inst_53785 = (state_53840[(2)]);var inst_53786 = cljs.core.get.call(null,inst_53785,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_53787 = cljs.core.get.call(null,inst_53785,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_53788 = cljs.core.get.call(null,inst_53785,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_53789 = inst_53779;var state_53840__$1 = (function (){var statearr_53846 = state_53840;(statearr_53846[(10)] = inst_53787);
(statearr_53846[(11)] = inst_53786);
(statearr_53846[(7)] = inst_53789);
(statearr_53846[(12)] = inst_53788);
return statearr_53846;
})();var statearr_53847_53886 = state_53840__$1;(statearr_53847_53886[(2)] = null);
(statearr_53847_53886[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (15)))
{var state_53840__$1 = state_53840;var statearr_53848_53887 = state_53840__$1;(statearr_53848_53887[(2)] = null);
(statearr_53848_53887[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (21)))
{var state_53840__$1 = state_53840;var statearr_53849_53888 = state_53840__$1;(statearr_53849_53888[(2)] = null);
(statearr_53849_53888[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (13)))
{var inst_53836 = (state_53840[(2)]);var state_53840__$1 = state_53840;var statearr_53850_53889 = state_53840__$1;(statearr_53850_53889[(2)] = inst_53836);
(statearr_53850_53889[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (22)))
{var inst_53797 = (state_53840[(13)]);var inst_53833 = (state_53840[(2)]);var inst_53789 = inst_53797;var state_53840__$1 = (function (){var statearr_53851 = state_53840;(statearr_53851[(14)] = inst_53833);
(statearr_53851[(7)] = inst_53789);
return statearr_53851;
})();var statearr_53852_53890 = state_53840__$1;(statearr_53852_53890[(2)] = null);
(statearr_53852_53890[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (6)))
{var inst_53838 = (state_53840[(2)]);var state_53840__$1 = state_53840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53840__$1,inst_53838);
} else
{if((state_val_53841 === (17)))
{var inst_53819 = (state_53840[(15)]);var state_53840__$1 = state_53840;var statearr_53853_53891 = state_53840__$1;(statearr_53853_53891[(2)] = inst_53819);
(statearr_53853_53891[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (3)))
{var inst_53779 = (state_53840[(9)]);var state_53840__$1 = state_53840;var statearr_53854_53892 = state_53840__$1;(statearr_53854_53892[(2)] = inst_53779);
(statearr_53854_53892[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (12)))
{var inst_53800 = (state_53840[(16)]);var inst_53819 = (state_53840[(15)]);var inst_53805 = (state_53840[(17)]);var inst_53819__$1 = inst_53800.call(null,inst_53805);var state_53840__$1 = (function (){var statearr_53855 = state_53840;(statearr_53855[(15)] = inst_53819__$1);
return statearr_53855;
})();if(cljs.core.truth_(inst_53819__$1))
{var statearr_53856_53893 = state_53840__$1;(statearr_53856_53893[(1)] = (17));
} else
{var statearr_53857_53894 = state_53840__$1;(statearr_53857_53894[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (2)))
{var inst_53779 = (state_53840[(9)]);var inst_53782 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53779);var state_53840__$1 = state_53840;var statearr_53858_53895 = state_53840__$1;(statearr_53858_53895[(2)] = inst_53782);
(statearr_53858_53895[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (23)))
{var inst_53830 = (state_53840[(2)]);var state_53840__$1 = state_53840;var statearr_53859_53896 = state_53840__$1;(statearr_53859_53896[(2)] = inst_53830);
(statearr_53859_53896[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (19)))
{var inst_53827 = (state_53840[(2)]);var state_53840__$1 = state_53840;if(cljs.core.truth_(inst_53827))
{var statearr_53860_53897 = state_53840__$1;(statearr_53860_53897[(1)] = (20));
} else
{var statearr_53861_53898 = state_53840__$1;(statearr_53861_53898[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (11)))
{var inst_53804 = (state_53840[(8)]);var inst_53810 = (inst_53804 == null);var state_53840__$1 = state_53840;if(cljs.core.truth_(inst_53810))
{var statearr_53862_53899 = state_53840__$1;(statearr_53862_53899[(1)] = (14));
} else
{var statearr_53863_53900 = state_53840__$1;(statearr_53863_53900[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (9)))
{var inst_53797 = (state_53840[(13)]);var inst_53797__$1 = (state_53840[(2)]);var inst_53798 = cljs.core.get.call(null,inst_53797__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_53799 = cljs.core.get.call(null,inst_53797__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_53800 = cljs.core.get.call(null,inst_53797__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_53840__$1 = (function (){var statearr_53864 = state_53840;(statearr_53864[(16)] = inst_53800);
(statearr_53864[(18)] = inst_53799);
(statearr_53864[(13)] = inst_53797__$1);
return statearr_53864;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_53840__$1,(10),inst_53798);
} else
{if((state_val_53841 === (5)))
{var inst_53789 = (state_53840[(7)]);var inst_53792 = cljs.core.seq_QMARK_.call(null,inst_53789);var state_53840__$1 = state_53840;if(inst_53792)
{var statearr_53865_53901 = state_53840__$1;(statearr_53865_53901[(1)] = (7));
} else
{var statearr_53866_53902 = state_53840__$1;(statearr_53866_53902[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (14)))
{var inst_53805 = (state_53840[(17)]);var inst_53812 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53805);var state_53840__$1 = state_53840;var statearr_53867_53903 = state_53840__$1;(statearr_53867_53903[(2)] = inst_53812);
(statearr_53867_53903[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (16)))
{var inst_53815 = (state_53840[(2)]);var inst_53816 = calc_state.call(null);var inst_53789 = inst_53816;var state_53840__$1 = (function (){var statearr_53868 = state_53840;(statearr_53868[(19)] = inst_53815);
(statearr_53868[(7)] = inst_53789);
return statearr_53868;
})();var statearr_53869_53904 = state_53840__$1;(statearr_53869_53904[(2)] = null);
(statearr_53869_53904[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (10)))
{var inst_53804 = (state_53840[(8)]);var inst_53805 = (state_53840[(17)]);var inst_53803 = (state_53840[(2)]);var inst_53804__$1 = cljs.core.nth.call(null,inst_53803,(0),null);var inst_53805__$1 = cljs.core.nth.call(null,inst_53803,(1),null);var inst_53806 = (inst_53804__$1 == null);var inst_53807 = cljs.core._EQ_.call(null,inst_53805__$1,change);var inst_53808 = (inst_53806) || (inst_53807);var state_53840__$1 = (function (){var statearr_53870 = state_53840;(statearr_53870[(8)] = inst_53804__$1);
(statearr_53870[(17)] = inst_53805__$1);
return statearr_53870;
})();if(cljs.core.truth_(inst_53808))
{var statearr_53871_53905 = state_53840__$1;(statearr_53871_53905[(1)] = (11));
} else
{var statearr_53872_53906 = state_53840__$1;(statearr_53872_53906[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (18)))
{var inst_53800 = (state_53840[(16)]);var inst_53799 = (state_53840[(18)]);var inst_53805 = (state_53840[(17)]);var inst_53822 = cljs.core.empty_QMARK_.call(null,inst_53800);var inst_53823 = inst_53799.call(null,inst_53805);var inst_53824 = cljs.core.not.call(null,inst_53823);var inst_53825 = (inst_53822) && (inst_53824);var state_53840__$1 = state_53840;var statearr_53873_53907 = state_53840__$1;(statearr_53873_53907[(2)] = inst_53825);
(statearr_53873_53907[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (8)))
{var inst_53789 = (state_53840[(7)]);var state_53840__$1 = state_53840;var statearr_53874_53908 = state_53840__$1;(statearr_53874_53908[(2)] = inst_53789);
(statearr_53874_53908[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___53882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5676__auto__,c__5691__auto___53882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_53878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53878[(0)] = state_machine__5677__auto__);
(statearr_53878[(1)] = (1));
return statearr_53878;
});
var state_machine__5677__auto____1 = (function (state_53840){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_53840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e53879){if((e53879 instanceof Object))
{var ex__5680__auto__ = e53879;var statearr_53880_53909 = state_53840;(statearr_53880_53909[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53910 = state_53840;
state_53840 = G__53910;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_53840){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_53840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___53882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5693__auto__ = (function (){var statearr_53881 = f__5692__auto__.call(null);(statearr_53881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___53882);
return statearr_53881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___53882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj53912 = {};return obj53912;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
return (function (topic){var or__3541__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3541__auto__,mults){
return (function (p1__53913_SHARP_){if(cljs.core.truth_(p1__53913_SHARP_.call(null,topic)))
{return p1__53913_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__53913_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t54038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54038 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta54039){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta54039 = meta54039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54038.cljs$lang$type = true;
cljs.core.async.t54038.cljs$lang$ctorStr = "cljs.core.async/t54038";
cljs.core.async.t54038.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t54038");
});})(mults,ensure_mult))
;
cljs.core.async.t54038.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t54038.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t54038.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t54038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t54038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t54038.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t54038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_54040){var self__ = this;
var _54040__$1 = this;return self__.meta54039;
});})(mults,ensure_mult))
;
cljs.core.async.t54038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_54040,meta54039__$1){var self__ = this;
var _54040__$1 = this;return (new cljs.core.async.t54038(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta54039__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t54038 = ((function (mults,ensure_mult){
return (function __GT_t54038(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta54039){return (new cljs.core.async.t54038(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta54039));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t54038(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5691__auto___54162 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___54162,mults,ensure_mult,p){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___54162,mults,ensure_mult,p){
return (function (state_54114){var state_val_54115 = (state_54114[(1)]);if((state_val_54115 === (7)))
{var inst_54110 = (state_54114[(2)]);var state_54114__$1 = state_54114;var statearr_54116_54163 = state_54114__$1;(statearr_54116_54163[(2)] = inst_54110);
(statearr_54116_54163[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (20)))
{var state_54114__$1 = state_54114;var statearr_54117_54164 = state_54114__$1;(statearr_54117_54164[(2)] = null);
(statearr_54117_54164[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (1)))
{var state_54114__$1 = state_54114;var statearr_54118_54165 = state_54114__$1;(statearr_54118_54165[(2)] = null);
(statearr_54118_54165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (24)))
{var inst_54093 = (state_54114[(7)]);var inst_54043 = (state_54114[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54114,(23),Object,null,(22));var inst_54100 = cljs.core.async.muxch_STAR_.call(null,inst_54093);var state_54114__$1 = state_54114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54114__$1,(25),inst_54100,inst_54043);
} else
{if((state_val_54115 === (4)))
{var inst_54043 = (state_54114[(8)]);var inst_54043__$1 = (state_54114[(2)]);var inst_54044 = (inst_54043__$1 == null);var state_54114__$1 = (function (){var statearr_54119 = state_54114;(statearr_54119[(8)] = inst_54043__$1);
return statearr_54119;
})();if(cljs.core.truth_(inst_54044))
{var statearr_54120_54166 = state_54114__$1;(statearr_54120_54166[(1)] = (5));
} else
{var statearr_54121_54167 = state_54114__$1;(statearr_54121_54167[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (15)))
{var inst_54085 = (state_54114[(2)]);var state_54114__$1 = state_54114;var statearr_54122_54168 = state_54114__$1;(statearr_54122_54168[(2)] = inst_54085);
(statearr_54122_54168[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (21)))
{var inst_54107 = (state_54114[(2)]);var state_54114__$1 = (function (){var statearr_54123 = state_54114;(statearr_54123[(9)] = inst_54107);
return statearr_54123;
})();var statearr_54124_54169 = state_54114__$1;(statearr_54124_54169[(2)] = null);
(statearr_54124_54169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (13)))
{var inst_54067 = (state_54114[(10)]);var inst_54069 = cljs.core.chunked_seq_QMARK_.call(null,inst_54067);var state_54114__$1 = state_54114;if(inst_54069)
{var statearr_54125_54170 = state_54114__$1;(statearr_54125_54170[(1)] = (16));
} else
{var statearr_54126_54171 = state_54114__$1;(statearr_54126_54171[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (22)))
{var inst_54104 = (state_54114[(2)]);var state_54114__$1 = state_54114;var statearr_54127_54172 = state_54114__$1;(statearr_54127_54172[(2)] = inst_54104);
(statearr_54127_54172[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (6)))
{var inst_54091 = (state_54114[(11)]);var inst_54093 = (state_54114[(7)]);var inst_54043 = (state_54114[(8)]);var inst_54091__$1 = topic_fn.call(null,inst_54043);var inst_54092 = cljs.core.deref.call(null,mults);var inst_54093__$1 = cljs.core.get.call(null,inst_54092,inst_54091__$1);var state_54114__$1 = (function (){var statearr_54128 = state_54114;(statearr_54128[(11)] = inst_54091__$1);
(statearr_54128[(7)] = inst_54093__$1);
return statearr_54128;
})();if(cljs.core.truth_(inst_54093__$1))
{var statearr_54129_54173 = state_54114__$1;(statearr_54129_54173[(1)] = (19));
} else
{var statearr_54130_54174 = state_54114__$1;(statearr_54130_54174[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (25)))
{var inst_54102 = (state_54114[(2)]);var state_54114__$1 = state_54114;var statearr_54131_54175 = state_54114__$1;(statearr_54131_54175[(2)] = inst_54102);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54114__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (17)))
{var inst_54067 = (state_54114[(10)]);var inst_54076 = cljs.core.first.call(null,inst_54067);var inst_54077 = cljs.core.async.muxch_STAR_.call(null,inst_54076);var inst_54078 = cljs.core.async.close_BANG_.call(null,inst_54077);var inst_54079 = cljs.core.next.call(null,inst_54067);var inst_54053 = inst_54079;var inst_54054 = null;var inst_54055 = (0);var inst_54056 = (0);var state_54114__$1 = (function (){var statearr_54132 = state_54114;(statearr_54132[(12)] = inst_54078);
(statearr_54132[(13)] = inst_54053);
(statearr_54132[(14)] = inst_54055);
(statearr_54132[(15)] = inst_54054);
(statearr_54132[(16)] = inst_54056);
return statearr_54132;
})();var statearr_54133_54176 = state_54114__$1;(statearr_54133_54176[(2)] = null);
(statearr_54133_54176[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (3)))
{var inst_54112 = (state_54114[(2)]);var state_54114__$1 = state_54114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54114__$1,inst_54112);
} else
{if((state_val_54115 === (12)))
{var inst_54087 = (state_54114[(2)]);var state_54114__$1 = state_54114;var statearr_54134_54177 = state_54114__$1;(statearr_54134_54177[(2)] = inst_54087);
(statearr_54134_54177[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (2)))
{var state_54114__$1 = state_54114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54114__$1,(4),ch);
} else
{if((state_val_54115 === (23)))
{var inst_54091 = (state_54114[(11)]);var inst_54095 = (state_54114[(2)]);var inst_54096 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_54091);var state_54114__$1 = (function (){var statearr_54135 = state_54114;(statearr_54135[(17)] = inst_54095);
return statearr_54135;
})();var statearr_54136_54178 = state_54114__$1;(statearr_54136_54178[(2)] = inst_54096);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54114__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (19)))
{var state_54114__$1 = state_54114;var statearr_54137_54179 = state_54114__$1;(statearr_54137_54179[(2)] = null);
(statearr_54137_54179[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (11)))
{var inst_54067 = (state_54114[(10)]);var inst_54053 = (state_54114[(13)]);var inst_54067__$1 = cljs.core.seq.call(null,inst_54053);var state_54114__$1 = (function (){var statearr_54138 = state_54114;(statearr_54138[(10)] = inst_54067__$1);
return statearr_54138;
})();if(inst_54067__$1)
{var statearr_54139_54180 = state_54114__$1;(statearr_54139_54180[(1)] = (13));
} else
{var statearr_54140_54181 = state_54114__$1;(statearr_54140_54181[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (9)))
{var inst_54089 = (state_54114[(2)]);var state_54114__$1 = state_54114;var statearr_54141_54182 = state_54114__$1;(statearr_54141_54182[(2)] = inst_54089);
(statearr_54141_54182[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (5)))
{var inst_54050 = cljs.core.deref.call(null,mults);var inst_54051 = cljs.core.vals.call(null,inst_54050);var inst_54052 = cljs.core.seq.call(null,inst_54051);var inst_54053 = inst_54052;var inst_54054 = null;var inst_54055 = (0);var inst_54056 = (0);var state_54114__$1 = (function (){var statearr_54142 = state_54114;(statearr_54142[(13)] = inst_54053);
(statearr_54142[(14)] = inst_54055);
(statearr_54142[(15)] = inst_54054);
(statearr_54142[(16)] = inst_54056);
return statearr_54142;
})();var statearr_54143_54183 = state_54114__$1;(statearr_54143_54183[(2)] = null);
(statearr_54143_54183[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (14)))
{var state_54114__$1 = state_54114;var statearr_54147_54184 = state_54114__$1;(statearr_54147_54184[(2)] = null);
(statearr_54147_54184[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (16)))
{var inst_54067 = (state_54114[(10)]);var inst_54071 = cljs.core.chunk_first.call(null,inst_54067);var inst_54072 = cljs.core.chunk_rest.call(null,inst_54067);var inst_54073 = cljs.core.count.call(null,inst_54071);var inst_54053 = inst_54072;var inst_54054 = inst_54071;var inst_54055 = inst_54073;var inst_54056 = (0);var state_54114__$1 = (function (){var statearr_54148 = state_54114;(statearr_54148[(13)] = inst_54053);
(statearr_54148[(14)] = inst_54055);
(statearr_54148[(15)] = inst_54054);
(statearr_54148[(16)] = inst_54056);
return statearr_54148;
})();var statearr_54149_54185 = state_54114__$1;(statearr_54149_54185[(2)] = null);
(statearr_54149_54185[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (10)))
{var inst_54053 = (state_54114[(13)]);var inst_54055 = (state_54114[(14)]);var inst_54054 = (state_54114[(15)]);var inst_54056 = (state_54114[(16)]);var inst_54061 = cljs.core._nth.call(null,inst_54054,inst_54056);var inst_54062 = cljs.core.async.muxch_STAR_.call(null,inst_54061);var inst_54063 = cljs.core.async.close_BANG_.call(null,inst_54062);var inst_54064 = (inst_54056 + (1));var tmp54144 = inst_54053;var tmp54145 = inst_54055;var tmp54146 = inst_54054;var inst_54053__$1 = tmp54144;var inst_54054__$1 = tmp54146;var inst_54055__$1 = tmp54145;var inst_54056__$1 = inst_54064;var state_54114__$1 = (function (){var statearr_54150 = state_54114;(statearr_54150[(18)] = inst_54063);
(statearr_54150[(13)] = inst_54053__$1);
(statearr_54150[(14)] = inst_54055__$1);
(statearr_54150[(15)] = inst_54054__$1);
(statearr_54150[(16)] = inst_54056__$1);
return statearr_54150;
})();var statearr_54151_54186 = state_54114__$1;(statearr_54151_54186[(2)] = null);
(statearr_54151_54186[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (18)))
{var inst_54082 = (state_54114[(2)]);var state_54114__$1 = state_54114;var statearr_54152_54187 = state_54114__$1;(statearr_54152_54187[(2)] = inst_54082);
(statearr_54152_54187[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54115 === (8)))
{var inst_54055 = (state_54114[(14)]);var inst_54056 = (state_54114[(16)]);var inst_54058 = (inst_54056 < inst_54055);var inst_54059 = inst_54058;var state_54114__$1 = state_54114;if(cljs.core.truth_(inst_54059))
{var statearr_54153_54188 = state_54114__$1;(statearr_54153_54188[(1)] = (10));
} else
{var statearr_54154_54189 = state_54114__$1;(statearr_54154_54189[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___54162,mults,ensure_mult,p))
;return ((function (switch__5676__auto__,c__5691__auto___54162,mults,ensure_mult,p){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_54158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54158[(0)] = state_machine__5677__auto__);
(statearr_54158[(1)] = (1));
return statearr_54158;
});
var state_machine__5677__auto____1 = (function (state_54114){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_54114);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e54159){if((e54159 instanceof Object))
{var ex__5680__auto__ = e54159;var statearr_54160_54190 = state_54114;(statearr_54160_54190[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54191 = state_54114;
state_54114 = G__54191;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_54114){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_54114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___54162,mults,ensure_mult,p))
})();var state__5693__auto__ = (function (){var statearr_54161 = f__5692__auto__.call(null);(statearr_54161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___54162);
return statearr_54161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___54162,mults,ensure_mult,p))
);
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5691__auto___54328 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___54328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___54328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_54298){var state_val_54299 = (state_54298[(1)]);if((state_val_54299 === (7)))
{var state_54298__$1 = state_54298;var statearr_54300_54329 = state_54298__$1;(statearr_54300_54329[(2)] = null);
(statearr_54300_54329[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (1)))
{var state_54298__$1 = state_54298;var statearr_54301_54330 = state_54298__$1;(statearr_54301_54330[(2)] = null);
(statearr_54301_54330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (4)))
{var inst_54262 = (state_54298[(7)]);var inst_54264 = (inst_54262 < cnt);var state_54298__$1 = state_54298;if(cljs.core.truth_(inst_54264))
{var statearr_54302_54331 = state_54298__$1;(statearr_54302_54331[(1)] = (6));
} else
{var statearr_54303_54332 = state_54298__$1;(statearr_54303_54332[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (15)))
{var inst_54294 = (state_54298[(2)]);var state_54298__$1 = state_54298;var statearr_54304_54333 = state_54298__$1;(statearr_54304_54333[(2)] = inst_54294);
(statearr_54304_54333[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (13)))
{var inst_54287 = cljs.core.async.close_BANG_.call(null,out);var state_54298__$1 = state_54298;var statearr_54305_54334 = state_54298__$1;(statearr_54305_54334[(2)] = inst_54287);
(statearr_54305_54334[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (6)))
{var state_54298__$1 = state_54298;var statearr_54306_54335 = state_54298__$1;(statearr_54306_54335[(2)] = null);
(statearr_54306_54335[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (3)))
{var inst_54296 = (state_54298[(2)]);var state_54298__$1 = state_54298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54298__$1,inst_54296);
} else
{if((state_val_54299 === (12)))
{var inst_54284 = (state_54298[(8)]);var inst_54284__$1 = (state_54298[(2)]);var inst_54285 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_54284__$1);var state_54298__$1 = (function (){var statearr_54307 = state_54298;(statearr_54307[(8)] = inst_54284__$1);
return statearr_54307;
})();if(cljs.core.truth_(inst_54285))
{var statearr_54308_54336 = state_54298__$1;(statearr_54308_54336[(1)] = (13));
} else
{var statearr_54309_54337 = state_54298__$1;(statearr_54309_54337[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (2)))
{var inst_54261 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_54262 = (0);var state_54298__$1 = (function (){var statearr_54310 = state_54298;(statearr_54310[(7)] = inst_54262);
(statearr_54310[(9)] = inst_54261);
return statearr_54310;
})();var statearr_54311_54338 = state_54298__$1;(statearr_54311_54338[(2)] = null);
(statearr_54311_54338[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (11)))
{var inst_54262 = (state_54298[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54298,(10),Object,null,(9));var inst_54271 = chs__$1.call(null,inst_54262);var inst_54272 = done.call(null,inst_54262);var inst_54273 = cljs.core.async.take_BANG_.call(null,inst_54271,inst_54272);var state_54298__$1 = state_54298;var statearr_54312_54339 = state_54298__$1;(statearr_54312_54339[(2)] = inst_54273);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54298__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (9)))
{var inst_54262 = (state_54298[(7)]);var inst_54275 = (state_54298[(2)]);var inst_54276 = (inst_54262 + (1));var inst_54262__$1 = inst_54276;var state_54298__$1 = (function (){var statearr_54313 = state_54298;(statearr_54313[(7)] = inst_54262__$1);
(statearr_54313[(10)] = inst_54275);
return statearr_54313;
})();var statearr_54314_54340 = state_54298__$1;(statearr_54314_54340[(2)] = null);
(statearr_54314_54340[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (5)))
{var inst_54282 = (state_54298[(2)]);var state_54298__$1 = (function (){var statearr_54315 = state_54298;(statearr_54315[(11)] = inst_54282);
return statearr_54315;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54298__$1,(12),dchan);
} else
{if((state_val_54299 === (14)))
{var inst_54284 = (state_54298[(8)]);var inst_54289 = cljs.core.apply.call(null,f,inst_54284);var state_54298__$1 = state_54298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54298__$1,(16),out,inst_54289);
} else
{if((state_val_54299 === (16)))
{var inst_54291 = (state_54298[(2)]);var state_54298__$1 = (function (){var statearr_54316 = state_54298;(statearr_54316[(12)] = inst_54291);
return statearr_54316;
})();var statearr_54317_54341 = state_54298__$1;(statearr_54317_54341[(2)] = null);
(statearr_54317_54341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (10)))
{var inst_54266 = (state_54298[(2)]);var inst_54267 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_54298__$1 = (function (){var statearr_54318 = state_54298;(statearr_54318[(13)] = inst_54266);
return statearr_54318;
})();var statearr_54319_54342 = state_54298__$1;(statearr_54319_54342[(2)] = inst_54267);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54298__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54299 === (8)))
{var inst_54280 = (state_54298[(2)]);var state_54298__$1 = state_54298;var statearr_54320_54343 = state_54298__$1;(statearr_54320_54343[(2)] = inst_54280);
(statearr_54320_54343[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___54328,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___54328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_54324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54324[(0)] = state_machine__5677__auto__);
(statearr_54324[(1)] = (1));
return statearr_54324;
});
var state_machine__5677__auto____1 = (function (state_54298){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_54298);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e54325){if((e54325 instanceof Object))
{var ex__5680__auto__ = e54325;var statearr_54326_54344 = state_54298;(statearr_54326_54344[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54298);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54345 = state_54298;
state_54298 = G__54345;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_54298){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_54298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___54328,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_54327 = f__5692__auto__.call(null);(statearr_54327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___54328);
return statearr_54327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___54328,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___54453 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___54453,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___54453,out){
return (function (state_54429){var state_val_54430 = (state_54429[(1)]);if((state_val_54430 === (7)))
{var inst_54409 = (state_54429[(7)]);var inst_54408 = (state_54429[(8)]);var inst_54408__$1 = (state_54429[(2)]);var inst_54409__$1 = cljs.core.nth.call(null,inst_54408__$1,(0),null);var inst_54410 = cljs.core.nth.call(null,inst_54408__$1,(1),null);var inst_54411 = (inst_54409__$1 == null);var state_54429__$1 = (function (){var statearr_54431 = state_54429;(statearr_54431[(7)] = inst_54409__$1);
(statearr_54431[(9)] = inst_54410);
(statearr_54431[(8)] = inst_54408__$1);
return statearr_54431;
})();if(cljs.core.truth_(inst_54411))
{var statearr_54432_54454 = state_54429__$1;(statearr_54432_54454[(1)] = (8));
} else
{var statearr_54433_54455 = state_54429__$1;(statearr_54433_54455[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54430 === (1)))
{var inst_54400 = cljs.core.vec.call(null,chs);var inst_54401 = inst_54400;var state_54429__$1 = (function (){var statearr_54434 = state_54429;(statearr_54434[(10)] = inst_54401);
return statearr_54434;
})();var statearr_54435_54456 = state_54429__$1;(statearr_54435_54456[(2)] = null);
(statearr_54435_54456[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54430 === (4)))
{var inst_54401 = (state_54429[(10)]);var state_54429__$1 = state_54429;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_54429__$1,(7),inst_54401);
} else
{if((state_val_54430 === (6)))
{var inst_54425 = (state_54429[(2)]);var state_54429__$1 = state_54429;var statearr_54436_54457 = state_54429__$1;(statearr_54436_54457[(2)] = inst_54425);
(statearr_54436_54457[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54430 === (3)))
{var inst_54427 = (state_54429[(2)]);var state_54429__$1 = state_54429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54429__$1,inst_54427);
} else
{if((state_val_54430 === (2)))
{var inst_54401 = (state_54429[(10)]);var inst_54403 = cljs.core.count.call(null,inst_54401);var inst_54404 = (inst_54403 > (0));var state_54429__$1 = state_54429;if(cljs.core.truth_(inst_54404))
{var statearr_54438_54458 = state_54429__$1;(statearr_54438_54458[(1)] = (4));
} else
{var statearr_54439_54459 = state_54429__$1;(statearr_54439_54459[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54430 === (11)))
{var inst_54401 = (state_54429[(10)]);var inst_54418 = (state_54429[(2)]);var tmp54437 = inst_54401;var inst_54401__$1 = tmp54437;var state_54429__$1 = (function (){var statearr_54440 = state_54429;(statearr_54440[(11)] = inst_54418);
(statearr_54440[(10)] = inst_54401__$1);
return statearr_54440;
})();var statearr_54441_54460 = state_54429__$1;(statearr_54441_54460[(2)] = null);
(statearr_54441_54460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54430 === (9)))
{var inst_54409 = (state_54429[(7)]);var state_54429__$1 = state_54429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54429__$1,(11),out,inst_54409);
} else
{if((state_val_54430 === (5)))
{var inst_54423 = cljs.core.async.close_BANG_.call(null,out);var state_54429__$1 = state_54429;var statearr_54442_54461 = state_54429__$1;(statearr_54442_54461[(2)] = inst_54423);
(statearr_54442_54461[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54430 === (10)))
{var inst_54421 = (state_54429[(2)]);var state_54429__$1 = state_54429;var statearr_54443_54462 = state_54429__$1;(statearr_54443_54462[(2)] = inst_54421);
(statearr_54443_54462[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54430 === (8)))
{var inst_54409 = (state_54429[(7)]);var inst_54410 = (state_54429[(9)]);var inst_54401 = (state_54429[(10)]);var inst_54408 = (state_54429[(8)]);var inst_54413 = (function (){var c = inst_54410;var v = inst_54409;var vec__54406 = inst_54408;var cs = inst_54401;return ((function (c,v,vec__54406,cs,inst_54409,inst_54410,inst_54401,inst_54408,state_val_54430,c__5691__auto___54453,out){
return (function (p1__54346_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__54346_SHARP_);
});
;})(c,v,vec__54406,cs,inst_54409,inst_54410,inst_54401,inst_54408,state_val_54430,c__5691__auto___54453,out))
})();var inst_54414 = cljs.core.filterv.call(null,inst_54413,inst_54401);var inst_54401__$1 = inst_54414;var state_54429__$1 = (function (){var statearr_54444 = state_54429;(statearr_54444[(10)] = inst_54401__$1);
return statearr_54444;
})();var statearr_54445_54463 = state_54429__$1;(statearr_54445_54463[(2)] = null);
(statearr_54445_54463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___54453,out))
;return ((function (switch__5676__auto__,c__5691__auto___54453,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_54449 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54449[(0)] = state_machine__5677__auto__);
(statearr_54449[(1)] = (1));
return statearr_54449;
});
var state_machine__5677__auto____1 = (function (state_54429){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_54429);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e54450){if((e54450 instanceof Object))
{var ex__5680__auto__ = e54450;var statearr_54451_54464 = state_54429;(statearr_54451_54464[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54465 = state_54429;
state_54429 = G__54465;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_54429){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_54429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___54453,out))
})();var state__5693__auto__ = (function (){var statearr_54452 = f__5692__auto__.call(null);(statearr_54452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___54453);
return statearr_54452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___54453,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___54558 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___54558,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___54558,out){
return (function (state_54535){var state_val_54536 = (state_54535[(1)]);if((state_val_54536 === (7)))
{var inst_54517 = (state_54535[(7)]);var inst_54517__$1 = (state_54535[(2)]);var inst_54518 = (inst_54517__$1 == null);var inst_54519 = cljs.core.not.call(null,inst_54518);var state_54535__$1 = (function (){var statearr_54537 = state_54535;(statearr_54537[(7)] = inst_54517__$1);
return statearr_54537;
})();if(inst_54519)
{var statearr_54538_54559 = state_54535__$1;(statearr_54538_54559[(1)] = (8));
} else
{var statearr_54539_54560 = state_54535__$1;(statearr_54539_54560[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54536 === (1)))
{var inst_54512 = (0);var state_54535__$1 = (function (){var statearr_54540 = state_54535;(statearr_54540[(8)] = inst_54512);
return statearr_54540;
})();var statearr_54541_54561 = state_54535__$1;(statearr_54541_54561[(2)] = null);
(statearr_54541_54561[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54536 === (4)))
{var state_54535__$1 = state_54535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54535__$1,(7),ch);
} else
{if((state_val_54536 === (6)))
{var inst_54530 = (state_54535[(2)]);var state_54535__$1 = state_54535;var statearr_54542_54562 = state_54535__$1;(statearr_54542_54562[(2)] = inst_54530);
(statearr_54542_54562[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54536 === (3)))
{var inst_54532 = (state_54535[(2)]);var inst_54533 = cljs.core.async.close_BANG_.call(null,out);var state_54535__$1 = (function (){var statearr_54543 = state_54535;(statearr_54543[(9)] = inst_54532);
return statearr_54543;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54535__$1,inst_54533);
} else
{if((state_val_54536 === (2)))
{var inst_54512 = (state_54535[(8)]);var inst_54514 = (inst_54512 < n);var state_54535__$1 = state_54535;if(cljs.core.truth_(inst_54514))
{var statearr_54544_54563 = state_54535__$1;(statearr_54544_54563[(1)] = (4));
} else
{var statearr_54545_54564 = state_54535__$1;(statearr_54545_54564[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54536 === (11)))
{var inst_54512 = (state_54535[(8)]);var inst_54522 = (state_54535[(2)]);var inst_54523 = (inst_54512 + (1));var inst_54512__$1 = inst_54523;var state_54535__$1 = (function (){var statearr_54546 = state_54535;(statearr_54546[(10)] = inst_54522);
(statearr_54546[(8)] = inst_54512__$1);
return statearr_54546;
})();var statearr_54547_54565 = state_54535__$1;(statearr_54547_54565[(2)] = null);
(statearr_54547_54565[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54536 === (9)))
{var state_54535__$1 = state_54535;var statearr_54548_54566 = state_54535__$1;(statearr_54548_54566[(2)] = null);
(statearr_54548_54566[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54536 === (5)))
{var state_54535__$1 = state_54535;var statearr_54549_54567 = state_54535__$1;(statearr_54549_54567[(2)] = null);
(statearr_54549_54567[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54536 === (10)))
{var inst_54527 = (state_54535[(2)]);var state_54535__$1 = state_54535;var statearr_54550_54568 = state_54535__$1;(statearr_54550_54568[(2)] = inst_54527);
(statearr_54550_54568[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54536 === (8)))
{var inst_54517 = (state_54535[(7)]);var state_54535__$1 = state_54535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54535__$1,(11),out,inst_54517);
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
});})(c__5691__auto___54558,out))
;return ((function (switch__5676__auto__,c__5691__auto___54558,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_54554 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_54554[(0)] = state_machine__5677__auto__);
(statearr_54554[(1)] = (1));
return statearr_54554;
});
var state_machine__5677__auto____1 = (function (state_54535){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_54535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e54555){if((e54555 instanceof Object))
{var ex__5680__auto__ = e54555;var statearr_54556_54569 = state_54535;(statearr_54556_54569[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54570 = state_54535;
state_54535 = G__54570;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_54535){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_54535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___54558,out))
})();var state__5693__auto__ = (function (){var statearr_54557 = f__5692__auto__.call(null);(statearr_54557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___54558);
return statearr_54557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___54558,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___54667 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___54667,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___54667,out){
return (function (state_54642){var state_val_54643 = (state_54642[(1)]);if((state_val_54643 === (7)))
{var inst_54637 = (state_54642[(2)]);var state_54642__$1 = state_54642;var statearr_54644_54668 = state_54642__$1;(statearr_54644_54668[(2)] = inst_54637);
(statearr_54644_54668[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54643 === (1)))
{var inst_54619 = null;var state_54642__$1 = (function (){var statearr_54645 = state_54642;(statearr_54645[(7)] = inst_54619);
return statearr_54645;
})();var statearr_54646_54669 = state_54642__$1;(statearr_54646_54669[(2)] = null);
(statearr_54646_54669[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54643 === (4)))
{var inst_54622 = (state_54642[(8)]);var inst_54622__$1 = (state_54642[(2)]);var inst_54623 = (inst_54622__$1 == null);var inst_54624 = cljs.core.not.call(null,inst_54623);var state_54642__$1 = (function (){var statearr_54647 = state_54642;(statearr_54647[(8)] = inst_54622__$1);
return statearr_54647;
})();if(inst_54624)
{var statearr_54648_54670 = state_54642__$1;(statearr_54648_54670[(1)] = (5));
} else
{var statearr_54649_54671 = state_54642__$1;(statearr_54649_54671[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54643 === (6)))
{var state_54642__$1 = state_54642;var statearr_54650_54672 = state_54642__$1;(statearr_54650_54672[(2)] = null);
(statearr_54650_54672[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54643 === (3)))
{var inst_54639 = (state_54642[(2)]);var inst_54640 = cljs.core.async.close_BANG_.call(null,out);var state_54642__$1 = (function (){var statearr_54651 = state_54642;(statearr_54651[(9)] = inst_54639);
return statearr_54651;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54642__$1,inst_54640);
} else
{if((state_val_54643 === (2)))
{var state_54642__$1 = state_54642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54642__$1,(4),ch);
} else
{if((state_val_54643 === (11)))
{var inst_54622 = (state_54642[(8)]);var inst_54631 = (state_54642[(2)]);var inst_54619 = inst_54622;var state_54642__$1 = (function (){var statearr_54652 = state_54642;(statearr_54652[(7)] = inst_54619);
(statearr_54652[(10)] = inst_54631);
return statearr_54652;
})();var statearr_54653_54673 = state_54642__$1;(statearr_54653_54673[(2)] = null);
(statearr_54653_54673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54643 === (9)))
{var inst_54622 = (state_54642[(8)]);var state_54642__$1 = state_54642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54642__$1,(11),out,inst_54622);
} else
{if((state_val_54643 === (5)))
{var inst_54619 = (state_54642[(7)]);var inst_54622 = (state_54642[(8)]);var inst_54626 = cljs.core._EQ_.call(null,inst_54622,inst_54619);var state_54642__$1 = state_54642;if(inst_54626)
{var statearr_54655_54674 = state_54642__$1;(statearr_54655_54674[(1)] = (8));
} else
{var statearr_54656_54675 = state_54642__$1;(statearr_54656_54675[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54643 === (10)))
{var inst_54634 = (state_54642[(2)]);var state_54642__$1 = state_54642;var statearr_54657_54676 = state_54642__$1;(statearr_54657_54676[(2)] = inst_54634);
(statearr_54657_54676[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54643 === (8)))
{var inst_54619 = (state_54642[(7)]);var tmp54654 = inst_54619;var inst_54619__$1 = tmp54654;var state_54642__$1 = (function (){var statearr_54658 = state_54642;(statearr_54658[(7)] = inst_54619__$1);
return statearr_54658;
})();var statearr_54659_54677 = state_54642__$1;(statearr_54659_54677[(2)] = null);
(statearr_54659_54677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___54667,out))
;return ((function (switch__5676__auto__,c__5691__auto___54667,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_54663 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_54663[(0)] = state_machine__5677__auto__);
(statearr_54663[(1)] = (1));
return statearr_54663;
});
var state_machine__5677__auto____1 = (function (state_54642){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_54642);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e54664){if((e54664 instanceof Object))
{var ex__5680__auto__ = e54664;var statearr_54665_54678 = state_54642;(statearr_54665_54678[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54642);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54664;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54679 = state_54642;
state_54642 = G__54679;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_54642){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_54642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___54667,out))
})();var state__5693__auto__ = (function (){var statearr_54666 = f__5692__auto__.call(null);(statearr_54666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___54667);
return statearr_54666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___54667,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___54814 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___54814,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___54814,out){
return (function (state_54784){var state_val_54785 = (state_54784[(1)]);if((state_val_54785 === (7)))
{var inst_54780 = (state_54784[(2)]);var state_54784__$1 = state_54784;var statearr_54786_54815 = state_54784__$1;(statearr_54786_54815[(2)] = inst_54780);
(statearr_54786_54815[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (1)))
{var inst_54747 = (new Array(n));var inst_54748 = inst_54747;var inst_54749 = (0);var state_54784__$1 = (function (){var statearr_54787 = state_54784;(statearr_54787[(7)] = inst_54748);
(statearr_54787[(8)] = inst_54749);
return statearr_54787;
})();var statearr_54788_54816 = state_54784__$1;(statearr_54788_54816[(2)] = null);
(statearr_54788_54816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (4)))
{var inst_54752 = (state_54784[(9)]);var inst_54752__$1 = (state_54784[(2)]);var inst_54753 = (inst_54752__$1 == null);var inst_54754 = cljs.core.not.call(null,inst_54753);var state_54784__$1 = (function (){var statearr_54789 = state_54784;(statearr_54789[(9)] = inst_54752__$1);
return statearr_54789;
})();if(inst_54754)
{var statearr_54790_54817 = state_54784__$1;(statearr_54790_54817[(1)] = (5));
} else
{var statearr_54791_54818 = state_54784__$1;(statearr_54791_54818[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (15)))
{var inst_54774 = (state_54784[(2)]);var state_54784__$1 = state_54784;var statearr_54792_54819 = state_54784__$1;(statearr_54792_54819[(2)] = inst_54774);
(statearr_54792_54819[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (13)))
{var state_54784__$1 = state_54784;var statearr_54793_54820 = state_54784__$1;(statearr_54793_54820[(2)] = null);
(statearr_54793_54820[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (6)))
{var inst_54749 = (state_54784[(8)]);var inst_54770 = (inst_54749 > (0));var state_54784__$1 = state_54784;if(cljs.core.truth_(inst_54770))
{var statearr_54794_54821 = state_54784__$1;(statearr_54794_54821[(1)] = (12));
} else
{var statearr_54795_54822 = state_54784__$1;(statearr_54795_54822[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (3)))
{var inst_54782 = (state_54784[(2)]);var state_54784__$1 = state_54784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54784__$1,inst_54782);
} else
{if((state_val_54785 === (12)))
{var inst_54748 = (state_54784[(7)]);var inst_54772 = cljs.core.vec.call(null,inst_54748);var state_54784__$1 = state_54784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54784__$1,(15),out,inst_54772);
} else
{if((state_val_54785 === (2)))
{var state_54784__$1 = state_54784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54784__$1,(4),ch);
} else
{if((state_val_54785 === (11)))
{var inst_54764 = (state_54784[(2)]);var inst_54765 = (new Array(n));var inst_54748 = inst_54765;var inst_54749 = (0);var state_54784__$1 = (function (){var statearr_54796 = state_54784;(statearr_54796[(10)] = inst_54764);
(statearr_54796[(7)] = inst_54748);
(statearr_54796[(8)] = inst_54749);
return statearr_54796;
})();var statearr_54797_54823 = state_54784__$1;(statearr_54797_54823[(2)] = null);
(statearr_54797_54823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (9)))
{var inst_54748 = (state_54784[(7)]);var inst_54762 = cljs.core.vec.call(null,inst_54748);var state_54784__$1 = state_54784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54784__$1,(11),out,inst_54762);
} else
{if((state_val_54785 === (5)))
{var inst_54752 = (state_54784[(9)]);var inst_54757 = (state_54784[(11)]);var inst_54748 = (state_54784[(7)]);var inst_54749 = (state_54784[(8)]);var inst_54756 = (inst_54748[inst_54749] = inst_54752);var inst_54757__$1 = (inst_54749 + (1));var inst_54758 = (inst_54757__$1 < n);var state_54784__$1 = (function (){var statearr_54798 = state_54784;(statearr_54798[(12)] = inst_54756);
(statearr_54798[(11)] = inst_54757__$1);
return statearr_54798;
})();if(cljs.core.truth_(inst_54758))
{var statearr_54799_54824 = state_54784__$1;(statearr_54799_54824[(1)] = (8));
} else
{var statearr_54800_54825 = state_54784__$1;(statearr_54800_54825[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (14)))
{var inst_54777 = (state_54784[(2)]);var inst_54778 = cljs.core.async.close_BANG_.call(null,out);var state_54784__$1 = (function (){var statearr_54802 = state_54784;(statearr_54802[(13)] = inst_54777);
return statearr_54802;
})();var statearr_54803_54826 = state_54784__$1;(statearr_54803_54826[(2)] = inst_54778);
(statearr_54803_54826[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (10)))
{var inst_54768 = (state_54784[(2)]);var state_54784__$1 = state_54784;var statearr_54804_54827 = state_54784__$1;(statearr_54804_54827[(2)] = inst_54768);
(statearr_54804_54827[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54785 === (8)))
{var inst_54757 = (state_54784[(11)]);var inst_54748 = (state_54784[(7)]);var tmp54801 = inst_54748;var inst_54748__$1 = tmp54801;var inst_54749 = inst_54757;var state_54784__$1 = (function (){var statearr_54805 = state_54784;(statearr_54805[(7)] = inst_54748__$1);
(statearr_54805[(8)] = inst_54749);
return statearr_54805;
})();var statearr_54806_54828 = state_54784__$1;(statearr_54806_54828[(2)] = null);
(statearr_54806_54828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___54814,out))
;return ((function (switch__5676__auto__,c__5691__auto___54814,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_54810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54810[(0)] = state_machine__5677__auto__);
(statearr_54810[(1)] = (1));
return statearr_54810;
});
var state_machine__5677__auto____1 = (function (state_54784){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_54784);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e54811){if((e54811 instanceof Object))
{var ex__5680__auto__ = e54811;var statearr_54812_54829 = state_54784;(statearr_54812_54829[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54830 = state_54784;
state_54784 = G__54830;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_54784){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_54784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___54814,out))
})();var state__5693__auto__ = (function (){var statearr_54813 = f__5692__auto__.call(null);(statearr_54813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___54814);
return statearr_54813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___54814,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___54973 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___54973,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___54973,out){
return (function (state_54943){var state_val_54944 = (state_54943[(1)]);if((state_val_54944 === (7)))
{var inst_54939 = (state_54943[(2)]);var state_54943__$1 = state_54943;var statearr_54945_54974 = state_54943__$1;(statearr_54945_54974[(2)] = inst_54939);
(statearr_54945_54974[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (1)))
{var inst_54902 = [];var inst_54903 = inst_54902;var inst_54904 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_54943__$1 = (function (){var statearr_54946 = state_54943;(statearr_54946[(7)] = inst_54903);
(statearr_54946[(8)] = inst_54904);
return statearr_54946;
})();var statearr_54947_54975 = state_54943__$1;(statearr_54947_54975[(2)] = null);
(statearr_54947_54975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (4)))
{var inst_54907 = (state_54943[(9)]);var inst_54907__$1 = (state_54943[(2)]);var inst_54908 = (inst_54907__$1 == null);var inst_54909 = cljs.core.not.call(null,inst_54908);var state_54943__$1 = (function (){var statearr_54948 = state_54943;(statearr_54948[(9)] = inst_54907__$1);
return statearr_54948;
})();if(inst_54909)
{var statearr_54949_54976 = state_54943__$1;(statearr_54949_54976[(1)] = (5));
} else
{var statearr_54950_54977 = state_54943__$1;(statearr_54950_54977[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (15)))
{var inst_54933 = (state_54943[(2)]);var state_54943__$1 = state_54943;var statearr_54951_54978 = state_54943__$1;(statearr_54951_54978[(2)] = inst_54933);
(statearr_54951_54978[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (13)))
{var state_54943__$1 = state_54943;var statearr_54952_54979 = state_54943__$1;(statearr_54952_54979[(2)] = null);
(statearr_54952_54979[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (6)))
{var inst_54903 = (state_54943[(7)]);var inst_54928 = inst_54903.length;var inst_54929 = (inst_54928 > (0));var state_54943__$1 = state_54943;if(cljs.core.truth_(inst_54929))
{var statearr_54953_54980 = state_54943__$1;(statearr_54953_54980[(1)] = (12));
} else
{var statearr_54954_54981 = state_54943__$1;(statearr_54954_54981[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (3)))
{var inst_54941 = (state_54943[(2)]);var state_54943__$1 = state_54943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54943__$1,inst_54941);
} else
{if((state_val_54944 === (12)))
{var inst_54903 = (state_54943[(7)]);var inst_54931 = cljs.core.vec.call(null,inst_54903);var state_54943__$1 = state_54943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54943__$1,(15),out,inst_54931);
} else
{if((state_val_54944 === (2)))
{var state_54943__$1 = state_54943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54943__$1,(4),ch);
} else
{if((state_val_54944 === (11)))
{var inst_54907 = (state_54943[(9)]);var inst_54911 = (state_54943[(10)]);var inst_54921 = (state_54943[(2)]);var inst_54922 = [];var inst_54923 = inst_54922.push(inst_54907);var inst_54903 = inst_54922;var inst_54904 = inst_54911;var state_54943__$1 = (function (){var statearr_54955 = state_54943;(statearr_54955[(7)] = inst_54903);
(statearr_54955[(11)] = inst_54921);
(statearr_54955[(8)] = inst_54904);
(statearr_54955[(12)] = inst_54923);
return statearr_54955;
})();var statearr_54956_54982 = state_54943__$1;(statearr_54956_54982[(2)] = null);
(statearr_54956_54982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (9)))
{var inst_54903 = (state_54943[(7)]);var inst_54919 = cljs.core.vec.call(null,inst_54903);var state_54943__$1 = state_54943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54943__$1,(11),out,inst_54919);
} else
{if((state_val_54944 === (5)))
{var inst_54907 = (state_54943[(9)]);var inst_54911 = (state_54943[(10)]);var inst_54904 = (state_54943[(8)]);var inst_54911__$1 = f.call(null,inst_54907);var inst_54912 = cljs.core._EQ_.call(null,inst_54911__$1,inst_54904);var inst_54913 = cljs.core.keyword_identical_QMARK_.call(null,inst_54904,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_54914 = (inst_54912) || (inst_54913);var state_54943__$1 = (function (){var statearr_54957 = state_54943;(statearr_54957[(10)] = inst_54911__$1);
return statearr_54957;
})();if(cljs.core.truth_(inst_54914))
{var statearr_54958_54983 = state_54943__$1;(statearr_54958_54983[(1)] = (8));
} else
{var statearr_54959_54984 = state_54943__$1;(statearr_54959_54984[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (14)))
{var inst_54936 = (state_54943[(2)]);var inst_54937 = cljs.core.async.close_BANG_.call(null,out);var state_54943__$1 = (function (){var statearr_54961 = state_54943;(statearr_54961[(13)] = inst_54936);
return statearr_54961;
})();var statearr_54962_54985 = state_54943__$1;(statearr_54962_54985[(2)] = inst_54937);
(statearr_54962_54985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (10)))
{var inst_54926 = (state_54943[(2)]);var state_54943__$1 = state_54943;var statearr_54963_54986 = state_54943__$1;(statearr_54963_54986[(2)] = inst_54926);
(statearr_54963_54986[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54944 === (8)))
{var inst_54903 = (state_54943[(7)]);var inst_54907 = (state_54943[(9)]);var inst_54911 = (state_54943[(10)]);var inst_54916 = inst_54903.push(inst_54907);var tmp54960 = inst_54903;var inst_54903__$1 = tmp54960;var inst_54904 = inst_54911;var state_54943__$1 = (function (){var statearr_54964 = state_54943;(statearr_54964[(7)] = inst_54903__$1);
(statearr_54964[(14)] = inst_54916);
(statearr_54964[(8)] = inst_54904);
return statearr_54964;
})();var statearr_54965_54987 = state_54943__$1;(statearr_54965_54987[(2)] = null);
(statearr_54965_54987[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto___54973,out))
;return ((function (switch__5676__auto__,c__5691__auto___54973,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_54969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54969[(0)] = state_machine__5677__auto__);
(statearr_54969[(1)] = (1));
return statearr_54969;
});
var state_machine__5677__auto____1 = (function (state_54943){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_54943);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e54970){if((e54970 instanceof Object))
{var ex__5680__auto__ = e54970;var statearr_54971_54988 = state_54943;(statearr_54971_54988[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54989 = state_54943;
state_54943 = G__54989;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_54943){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_54943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___54973,out))
})();var state__5693__auto__ = (function (){var statearr_54972 = f__5692__auto__.call(null);(statearr_54972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___54973);
return statearr_54972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___54973,out))
);
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