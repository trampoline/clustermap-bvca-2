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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t27783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27783 = (function (f,fn_handler,meta27784){
this.f = f;
this.fn_handler = fn_handler;
this.meta27784 = meta27784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27783.cljs$lang$type = true;
cljs.core.async.t27783.cljs$lang$ctorStr = "cljs.core.async/t27783";
cljs.core.async.t27783.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t27783");
});
cljs.core.async.t27783.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t27783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t27783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27785){var self__ = this;
var _27785__$1 = this;return self__.meta27784;
});
cljs.core.async.t27783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27785,meta27784__$1){var self__ = this;
var _27785__$1 = this;return (new cljs.core.async.t27783(self__.f,self__.fn_handler,meta27784__$1));
});
cljs.core.async.__GT_t27783 = (function __GT_t27783(f__$1,fn_handler__$1,meta27784){return (new cljs.core.async.t27783(f__$1,fn_handler__$1,meta27784));
});
}
return (new cljs.core.async.t27783(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27787 = buff;if(G__27787)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__27787.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27787.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27787);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27787);
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
{var val_27788 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27788);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_27788,ret){
return (function (){return fn1.call(null,val_27788);
});})(val_27788,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___27789 = n;var x_27790 = (0);while(true){
if((x_27790 < n__4397__auto___27789))
{(a[x_27790] = (0));
{
var G__27791 = (x_27790 + (1));
x_27790 = G__27791;
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
var G__27792 = (i + (1));
i = G__27792;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27796 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27796 = (function (flag,alt_flag,meta27797){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27797 = meta27797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27796.cljs$lang$type = true;
cljs.core.async.t27796.cljs$lang$ctorStr = "cljs.core.async/t27796";
cljs.core.async.t27796.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t27796");
});})(flag))
;
cljs.core.async.t27796.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t27796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t27796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27798){var self__ = this;
var _27798__$1 = this;return self__.meta27797;
});})(flag))
;
cljs.core.async.t27796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27798,meta27797__$1){var self__ = this;
var _27798__$1 = this;return (new cljs.core.async.t27796(self__.flag,self__.alt_flag,meta27797__$1));
});})(flag))
;
cljs.core.async.__GT_t27796 = ((function (flag){
return (function __GT_t27796(flag__$1,alt_flag__$1,meta27797){return (new cljs.core.async.t27796(flag__$1,alt_flag__$1,meta27797));
});})(flag))
;
}
return (new cljs.core.async.t27796(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27802 = (function (cb,flag,alt_handler,meta27803){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27803 = meta27803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27802.cljs$lang$type = true;
cljs.core.async.t27802.cljs$lang$ctorStr = "cljs.core.async/t27802";
cljs.core.async.t27802.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t27802");
});
cljs.core.async.t27802.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27804){var self__ = this;
var _27804__$1 = this;return self__.meta27803;
});
cljs.core.async.t27802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27804,meta27803__$1){var self__ = this;
var _27804__$1 = this;return (new cljs.core.async.t27802(self__.cb,self__.flag,self__.alt_handler,meta27803__$1));
});
cljs.core.async.__GT_t27802 = (function __GT_t27802(cb__$1,flag__$1,alt_handler__$1,meta27803){return (new cljs.core.async.t27802(cb__$1,flag__$1,alt_handler__$1,meta27803));
});
}
return (new cljs.core.async.t27802(cb,flag,alt_handler,null));
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
return (function (p1__27805_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27805_SHARP_,port], null));
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
var G__27806 = (i + (1));
i = G__27806;
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
var alts_BANG___delegate = function (ports,p__27807){var map__27809 = p__27807;var map__27809__$1 = ((cljs.core.seq_QMARK_.call(null,map__27809))?cljs.core.apply.call(null,cljs.core.hash_map,map__27809):map__27809);var opts = map__27809__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__27807 = null;if (arguments.length > 1) {
  p__27807 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27807);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27810){
var ports = cljs.core.first(arglist__27810);
var p__27807 = cljs.core.rest(arglist__27810);
return alts_BANG___delegate(ports,p__27807);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27818 = (function (ch,f,map_LT_,meta27819){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27819 = meta27819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27818.cljs$lang$type = true;
cljs.core.async.t27818.cljs$lang$ctorStr = "cljs.core.async/t27818";
cljs.core.async.t27818.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t27818");
});
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27821 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27821 = (function (fn1,_,meta27819,ch,f,map_LT_,meta27822){
this.fn1 = fn1;
this._ = _;
this.meta27819 = meta27819;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27822 = meta27822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27821.cljs$lang$type = true;
cljs.core.async.t27821.cljs$lang$ctorStr = "cljs.core.async/t27821";
cljs.core.async.t27821.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t27821");
});})(___$1))
;
cljs.core.async.t27821.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27821.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27811_SHARP_){return f1.call(null,(((p1__27811_SHARP_ == null))?null:self__.f.call(null,p1__27811_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27823){var self__ = this;
var _27823__$1 = this;return self__.meta27822;
});})(___$1))
;
cljs.core.async.t27821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27823,meta27822__$1){var self__ = this;
var _27823__$1 = this;return (new cljs.core.async.t27821(self__.fn1,self__._,self__.meta27819,self__.ch,self__.f,self__.map_LT_,meta27822__$1));
});})(___$1))
;
cljs.core.async.__GT_t27821 = ((function (___$1){
return (function __GT_t27821(fn1__$1,___$2,meta27819__$1,ch__$2,f__$2,map_LT___$2,meta27822){return (new cljs.core.async.t27821(fn1__$1,___$2,meta27819__$1,ch__$2,f__$2,map_LT___$2,meta27822));
});})(___$1))
;
}
return (new cljs.core.async.t27821(fn1,___$1,self__.meta27819,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27820){var self__ = this;
var _27820__$1 = this;return self__.meta27819;
});
cljs.core.async.t27818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27820,meta27819__$1){var self__ = this;
var _27820__$1 = this;return (new cljs.core.async.t27818(self__.ch,self__.f,self__.map_LT_,meta27819__$1));
});
cljs.core.async.__GT_t27818 = (function __GT_t27818(ch__$1,f__$1,map_LT___$1,meta27819){return (new cljs.core.async.t27818(ch__$1,f__$1,map_LT___$1,meta27819));
});
}
return (new cljs.core.async.t27818(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27827 = (function (ch,f,map_GT_,meta27828){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27828 = meta27828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27827.cljs$lang$type = true;
cljs.core.async.t27827.cljs$lang$ctorStr = "cljs.core.async/t27827";
cljs.core.async.t27827.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t27827");
});
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27829){var self__ = this;
var _27829__$1 = this;return self__.meta27828;
});
cljs.core.async.t27827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27829,meta27828__$1){var self__ = this;
var _27829__$1 = this;return (new cljs.core.async.t27827(self__.ch,self__.f,self__.map_GT_,meta27828__$1));
});
cljs.core.async.__GT_t27827 = (function __GT_t27827(ch__$1,f__$1,map_GT___$1,meta27828){return (new cljs.core.async.t27827(ch__$1,f__$1,map_GT___$1,meta27828));
});
}
return (new cljs.core.async.t27827(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27833 = (function (ch,p,filter_GT_,meta27834){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27834 = meta27834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27833.cljs$lang$type = true;
cljs.core.async.t27833.cljs$lang$ctorStr = "cljs.core.async/t27833";
cljs.core.async.t27833.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t27833");
});
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27835){var self__ = this;
var _27835__$1 = this;return self__.meta27834;
});
cljs.core.async.t27833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27835,meta27834__$1){var self__ = this;
var _27835__$1 = this;return (new cljs.core.async.t27833(self__.ch,self__.p,self__.filter_GT_,meta27834__$1));
});
cljs.core.async.__GT_t27833 = (function __GT_t27833(ch__$1,p__$1,filter_GT___$1,meta27834){return (new cljs.core.async.t27833(ch__$1,p__$1,filter_GT___$1,meta27834));
});
}
return (new cljs.core.async.t27833(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___27918 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___27918,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___27918,out){
return (function (state_27897){var state_val_27898 = (state_27897[(1)]);if((state_val_27898 === (7)))
{var inst_27893 = (state_27897[(2)]);var state_27897__$1 = state_27897;var statearr_27899_27919 = state_27897__$1;(statearr_27899_27919[(2)] = inst_27893);
(statearr_27899_27919[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27898 === (1)))
{var state_27897__$1 = state_27897;var statearr_27900_27920 = state_27897__$1;(statearr_27900_27920[(2)] = null);
(statearr_27900_27920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27898 === (4)))
{var inst_27879 = (state_27897[(7)]);var inst_27879__$1 = (state_27897[(2)]);var inst_27880 = (inst_27879__$1 == null);var state_27897__$1 = (function (){var statearr_27901 = state_27897;(statearr_27901[(7)] = inst_27879__$1);
return statearr_27901;
})();if(cljs.core.truth_(inst_27880))
{var statearr_27902_27921 = state_27897__$1;(statearr_27902_27921[(1)] = (5));
} else
{var statearr_27903_27922 = state_27897__$1;(statearr_27903_27922[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27898 === (6)))
{var inst_27879 = (state_27897[(7)]);var inst_27884 = p.call(null,inst_27879);var state_27897__$1 = state_27897;if(cljs.core.truth_(inst_27884))
{var statearr_27904_27923 = state_27897__$1;(statearr_27904_27923[(1)] = (8));
} else
{var statearr_27905_27924 = state_27897__$1;(statearr_27905_27924[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27898 === (3)))
{var inst_27895 = (state_27897[(2)]);var state_27897__$1 = state_27897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27897__$1,inst_27895);
} else
{if((state_val_27898 === (2)))
{var state_27897__$1 = state_27897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27897__$1,(4),ch);
} else
{if((state_val_27898 === (11)))
{var inst_27887 = (state_27897[(2)]);var state_27897__$1 = state_27897;var statearr_27906_27925 = state_27897__$1;(statearr_27906_27925[(2)] = inst_27887);
(statearr_27906_27925[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27898 === (9)))
{var state_27897__$1 = state_27897;var statearr_27907_27926 = state_27897__$1;(statearr_27907_27926[(2)] = null);
(statearr_27907_27926[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27898 === (5)))
{var inst_27882 = cljs.core.async.close_BANG_.call(null,out);var state_27897__$1 = state_27897;var statearr_27908_27927 = state_27897__$1;(statearr_27908_27927[(2)] = inst_27882);
(statearr_27908_27927[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27898 === (10)))
{var inst_27890 = (state_27897[(2)]);var state_27897__$1 = (function (){var statearr_27909 = state_27897;(statearr_27909[(8)] = inst_27890);
return statearr_27909;
})();var statearr_27910_27928 = state_27897__$1;(statearr_27910_27928[(2)] = null);
(statearr_27910_27928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27898 === (8)))
{var inst_27879 = (state_27897[(7)]);var state_27897__$1 = state_27897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27897__$1,(11),out,inst_27879);
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
});})(c__5691__auto___27918,out))
;return ((function (switch__5676__auto__,c__5691__auto___27918,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_27914 = [null,null,null,null,null,null,null,null,null];(statearr_27914[(0)] = state_machine__5677__auto__);
(statearr_27914[(1)] = (1));
return statearr_27914;
});
var state_machine__5677__auto____1 = (function (state_27897){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_27897);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e27915){if((e27915 instanceof Object))
{var ex__5680__auto__ = e27915;var statearr_27916_27929 = state_27897;(statearr_27916_27929[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27897);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27930 = state_27897;
state_27897 = G__27930;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_27897){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_27897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___27918,out))
})();var state__5693__auto__ = (function (){var statearr_27917 = f__5692__auto__.call(null);(statearr_27917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___27918);
return statearr_27917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___27918,out))
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
return (function (state_28082){var state_val_28083 = (state_28082[(1)]);if((state_val_28083 === (7)))
{var inst_28078 = (state_28082[(2)]);var state_28082__$1 = state_28082;var statearr_28084_28121 = state_28082__$1;(statearr_28084_28121[(2)] = inst_28078);
(statearr_28084_28121[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (20)))
{var inst_28053 = (state_28082[(7)]);var inst_28064 = (state_28082[(2)]);var inst_28065 = cljs.core.next.call(null,inst_28053);var inst_28039 = inst_28065;var inst_28040 = null;var inst_28041 = (0);var inst_28042 = (0);var state_28082__$1 = (function (){var statearr_28085 = state_28082;(statearr_28085[(8)] = inst_28041);
(statearr_28085[(9)] = inst_28042);
(statearr_28085[(10)] = inst_28040);
(statearr_28085[(11)] = inst_28039);
(statearr_28085[(12)] = inst_28064);
return statearr_28085;
})();var statearr_28086_28122 = state_28082__$1;(statearr_28086_28122[(2)] = null);
(statearr_28086_28122[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (1)))
{var state_28082__$1 = state_28082;var statearr_28087_28123 = state_28082__$1;(statearr_28087_28123[(2)] = null);
(statearr_28087_28123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (4)))
{var inst_28028 = (state_28082[(13)]);var inst_28028__$1 = (state_28082[(2)]);var inst_28029 = (inst_28028__$1 == null);var state_28082__$1 = (function (){var statearr_28091 = state_28082;(statearr_28091[(13)] = inst_28028__$1);
return statearr_28091;
})();if(cljs.core.truth_(inst_28029))
{var statearr_28092_28124 = state_28082__$1;(statearr_28092_28124[(1)] = (5));
} else
{var statearr_28093_28125 = state_28082__$1;(statearr_28093_28125[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (15)))
{var state_28082__$1 = state_28082;var statearr_28094_28126 = state_28082__$1;(statearr_28094_28126[(2)] = null);
(statearr_28094_28126[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (13)))
{var inst_28041 = (state_28082[(8)]);var inst_28042 = (state_28082[(9)]);var inst_28040 = (state_28082[(10)]);var inst_28039 = (state_28082[(11)]);var inst_28049 = (state_28082[(2)]);var inst_28050 = (inst_28042 + (1));var tmp28088 = inst_28041;var tmp28089 = inst_28040;var tmp28090 = inst_28039;var inst_28039__$1 = tmp28090;var inst_28040__$1 = tmp28089;var inst_28041__$1 = tmp28088;var inst_28042__$1 = inst_28050;var state_28082__$1 = (function (){var statearr_28095 = state_28082;(statearr_28095[(8)] = inst_28041__$1);
(statearr_28095[(9)] = inst_28042__$1);
(statearr_28095[(10)] = inst_28040__$1);
(statearr_28095[(11)] = inst_28039__$1);
(statearr_28095[(14)] = inst_28049);
return statearr_28095;
})();var statearr_28096_28127 = state_28082__$1;(statearr_28096_28127[(2)] = null);
(statearr_28096_28127[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (6)))
{var inst_28028 = (state_28082[(13)]);var inst_28033 = f.call(null,inst_28028);var inst_28038 = cljs.core.seq.call(null,inst_28033);var inst_28039 = inst_28038;var inst_28040 = null;var inst_28041 = (0);var inst_28042 = (0);var state_28082__$1 = (function (){var statearr_28097 = state_28082;(statearr_28097[(8)] = inst_28041);
(statearr_28097[(9)] = inst_28042);
(statearr_28097[(10)] = inst_28040);
(statearr_28097[(11)] = inst_28039);
return statearr_28097;
})();var statearr_28098_28128 = state_28082__$1;(statearr_28098_28128[(2)] = null);
(statearr_28098_28128[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (17)))
{var inst_28053 = (state_28082[(7)]);var inst_28057 = cljs.core.chunk_first.call(null,inst_28053);var inst_28058 = cljs.core.chunk_rest.call(null,inst_28053);var inst_28059 = cljs.core.count.call(null,inst_28057);var inst_28039 = inst_28058;var inst_28040 = inst_28057;var inst_28041 = inst_28059;var inst_28042 = (0);var state_28082__$1 = (function (){var statearr_28099 = state_28082;(statearr_28099[(8)] = inst_28041);
(statearr_28099[(9)] = inst_28042);
(statearr_28099[(10)] = inst_28040);
(statearr_28099[(11)] = inst_28039);
return statearr_28099;
})();var statearr_28100_28129 = state_28082__$1;(statearr_28100_28129[(2)] = null);
(statearr_28100_28129[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (3)))
{var inst_28080 = (state_28082[(2)]);var state_28082__$1 = state_28082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28082__$1,inst_28080);
} else
{if((state_val_28083 === (12)))
{var inst_28073 = (state_28082[(2)]);var state_28082__$1 = state_28082;var statearr_28101_28130 = state_28082__$1;(statearr_28101_28130[(2)] = inst_28073);
(statearr_28101_28130[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (2)))
{var state_28082__$1 = state_28082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28082__$1,(4),in$);
} else
{if((state_val_28083 === (19)))
{var inst_28068 = (state_28082[(2)]);var state_28082__$1 = state_28082;var statearr_28102_28131 = state_28082__$1;(statearr_28102_28131[(2)] = inst_28068);
(statearr_28102_28131[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (11)))
{var inst_28053 = (state_28082[(7)]);var inst_28039 = (state_28082[(11)]);var inst_28053__$1 = cljs.core.seq.call(null,inst_28039);var state_28082__$1 = (function (){var statearr_28103 = state_28082;(statearr_28103[(7)] = inst_28053__$1);
return statearr_28103;
})();if(inst_28053__$1)
{var statearr_28104_28132 = state_28082__$1;(statearr_28104_28132[(1)] = (14));
} else
{var statearr_28105_28133 = state_28082__$1;(statearr_28105_28133[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (9)))
{var inst_28075 = (state_28082[(2)]);var state_28082__$1 = (function (){var statearr_28106 = state_28082;(statearr_28106[(15)] = inst_28075);
return statearr_28106;
})();var statearr_28107_28134 = state_28082__$1;(statearr_28107_28134[(2)] = null);
(statearr_28107_28134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (5)))
{var inst_28031 = cljs.core.async.close_BANG_.call(null,out);var state_28082__$1 = state_28082;var statearr_28108_28135 = state_28082__$1;(statearr_28108_28135[(2)] = inst_28031);
(statearr_28108_28135[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (14)))
{var inst_28053 = (state_28082[(7)]);var inst_28055 = cljs.core.chunked_seq_QMARK_.call(null,inst_28053);var state_28082__$1 = state_28082;if(inst_28055)
{var statearr_28109_28136 = state_28082__$1;(statearr_28109_28136[(1)] = (17));
} else
{var statearr_28110_28137 = state_28082__$1;(statearr_28110_28137[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (16)))
{var inst_28071 = (state_28082[(2)]);var state_28082__$1 = state_28082;var statearr_28111_28138 = state_28082__$1;(statearr_28111_28138[(2)] = inst_28071);
(statearr_28111_28138[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28083 === (10)))
{var inst_28042 = (state_28082[(9)]);var inst_28040 = (state_28082[(10)]);var inst_28047 = cljs.core._nth.call(null,inst_28040,inst_28042);var state_28082__$1 = state_28082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28082__$1,(13),out,inst_28047);
} else
{if((state_val_28083 === (18)))
{var inst_28053 = (state_28082[(7)]);var inst_28062 = cljs.core.first.call(null,inst_28053);var state_28082__$1 = state_28082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28082__$1,(20),out,inst_28062);
} else
{if((state_val_28083 === (8)))
{var inst_28041 = (state_28082[(8)]);var inst_28042 = (state_28082[(9)]);var inst_28044 = (inst_28042 < inst_28041);var inst_28045 = inst_28044;var state_28082__$1 = state_28082;if(cljs.core.truth_(inst_28045))
{var statearr_28112_28139 = state_28082__$1;(statearr_28112_28139[(1)] = (10));
} else
{var statearr_28113_28140 = state_28082__$1;(statearr_28113_28140[(1)] = (11));
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
var state_machine__5677__auto____0 = (function (){var statearr_28117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28117[(0)] = state_machine__5677__auto__);
(statearr_28117[(1)] = (1));
return statearr_28117;
});
var state_machine__5677__auto____1 = (function (state_28082){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_28082);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e28118){if((e28118 instanceof Object))
{var ex__5680__auto__ = e28118;var statearr_28119_28141 = state_28082;(statearr_28119_28141[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28142 = state_28082;
state_28082 = G__28142;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_28082){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_28082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_28120 = f__5692__auto__.call(null);(statearr_28120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_28120;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5691__auto___28223 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___28223){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___28223){
return (function (state_28202){var state_val_28203 = (state_28202[(1)]);if((state_val_28203 === (7)))
{var inst_28198 = (state_28202[(2)]);var state_28202__$1 = state_28202;var statearr_28204_28224 = state_28202__$1;(statearr_28204_28224[(2)] = inst_28198);
(statearr_28204_28224[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28203 === (1)))
{var state_28202__$1 = state_28202;var statearr_28205_28225 = state_28202__$1;(statearr_28205_28225[(2)] = null);
(statearr_28205_28225[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28203 === (4)))
{var inst_28185 = (state_28202[(7)]);var inst_28185__$1 = (state_28202[(2)]);var inst_28186 = (inst_28185__$1 == null);var state_28202__$1 = (function (){var statearr_28206 = state_28202;(statearr_28206[(7)] = inst_28185__$1);
return statearr_28206;
})();if(cljs.core.truth_(inst_28186))
{var statearr_28207_28226 = state_28202__$1;(statearr_28207_28226[(1)] = (5));
} else
{var statearr_28208_28227 = state_28202__$1;(statearr_28208_28227[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28203 === (6)))
{var inst_28185 = (state_28202[(7)]);var state_28202__$1 = state_28202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28202__$1,(11),to,inst_28185);
} else
{if((state_val_28203 === (3)))
{var inst_28200 = (state_28202[(2)]);var state_28202__$1 = state_28202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28202__$1,inst_28200);
} else
{if((state_val_28203 === (2)))
{var state_28202__$1 = state_28202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28202__$1,(4),from);
} else
{if((state_val_28203 === (11)))
{var inst_28195 = (state_28202[(2)]);var state_28202__$1 = (function (){var statearr_28209 = state_28202;(statearr_28209[(8)] = inst_28195);
return statearr_28209;
})();var statearr_28210_28228 = state_28202__$1;(statearr_28210_28228[(2)] = null);
(statearr_28210_28228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28203 === (9)))
{var state_28202__$1 = state_28202;var statearr_28211_28229 = state_28202__$1;(statearr_28211_28229[(2)] = null);
(statearr_28211_28229[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28203 === (5)))
{var state_28202__$1 = state_28202;if(cljs.core.truth_(close_QMARK_))
{var statearr_28212_28230 = state_28202__$1;(statearr_28212_28230[(1)] = (8));
} else
{var statearr_28213_28231 = state_28202__$1;(statearr_28213_28231[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28203 === (10)))
{var inst_28192 = (state_28202[(2)]);var state_28202__$1 = state_28202;var statearr_28214_28232 = state_28202__$1;(statearr_28214_28232[(2)] = inst_28192);
(statearr_28214_28232[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28203 === (8)))
{var inst_28189 = cljs.core.async.close_BANG_.call(null,to);var state_28202__$1 = state_28202;var statearr_28215_28233 = state_28202__$1;(statearr_28215_28233[(2)] = inst_28189);
(statearr_28215_28233[(1)] = (10));
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
});})(c__5691__auto___28223))
;return ((function (switch__5676__auto__,c__5691__auto___28223){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_28219 = [null,null,null,null,null,null,null,null,null];(statearr_28219[(0)] = state_machine__5677__auto__);
(statearr_28219[(1)] = (1));
return statearr_28219;
});
var state_machine__5677__auto____1 = (function (state_28202){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_28202);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e28220){if((e28220 instanceof Object))
{var ex__5680__auto__ = e28220;var statearr_28221_28234 = state_28202;(statearr_28221_28234[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28235 = state_28202;
state_28202 = G__28235;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_28202){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_28202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___28223))
})();var state__5693__auto__ = (function (){var statearr_28222 = f__5692__auto__.call(null);(statearr_28222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___28223);
return statearr_28222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___28223))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5691__auto___28322 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___28322,tc,fc){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___28322,tc,fc){
return (function (state_28300){var state_val_28301 = (state_28300[(1)]);if((state_val_28301 === (7)))
{var inst_28296 = (state_28300[(2)]);var state_28300__$1 = state_28300;var statearr_28302_28323 = state_28300__$1;(statearr_28302_28323[(2)] = inst_28296);
(statearr_28302_28323[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28301 === (1)))
{var state_28300__$1 = state_28300;var statearr_28303_28324 = state_28300__$1;(statearr_28303_28324[(2)] = null);
(statearr_28303_28324[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28301 === (4)))
{var inst_28281 = (state_28300[(7)]);var inst_28281__$1 = (state_28300[(2)]);var inst_28282 = (inst_28281__$1 == null);var state_28300__$1 = (function (){var statearr_28304 = state_28300;(statearr_28304[(7)] = inst_28281__$1);
return statearr_28304;
})();if(cljs.core.truth_(inst_28282))
{var statearr_28305_28325 = state_28300__$1;(statearr_28305_28325[(1)] = (5));
} else
{var statearr_28306_28326 = state_28300__$1;(statearr_28306_28326[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28301 === (6)))
{var inst_28281 = (state_28300[(7)]);var inst_28287 = p.call(null,inst_28281);var state_28300__$1 = state_28300;if(cljs.core.truth_(inst_28287))
{var statearr_28307_28327 = state_28300__$1;(statearr_28307_28327[(1)] = (9));
} else
{var statearr_28308_28328 = state_28300__$1;(statearr_28308_28328[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28301 === (3)))
{var inst_28298 = (state_28300[(2)]);var state_28300__$1 = state_28300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28300__$1,inst_28298);
} else
{if((state_val_28301 === (2)))
{var state_28300__$1 = state_28300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28300__$1,(4),ch);
} else
{if((state_val_28301 === (11)))
{var inst_28281 = (state_28300[(7)]);var inst_28291 = (state_28300[(2)]);var state_28300__$1 = state_28300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28300__$1,(8),inst_28291,inst_28281);
} else
{if((state_val_28301 === (9)))
{var state_28300__$1 = state_28300;var statearr_28309_28329 = state_28300__$1;(statearr_28309_28329[(2)] = tc);
(statearr_28309_28329[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28301 === (5)))
{var inst_28284 = cljs.core.async.close_BANG_.call(null,tc);var inst_28285 = cljs.core.async.close_BANG_.call(null,fc);var state_28300__$1 = (function (){var statearr_28310 = state_28300;(statearr_28310[(8)] = inst_28284);
return statearr_28310;
})();var statearr_28311_28330 = state_28300__$1;(statearr_28311_28330[(2)] = inst_28285);
(statearr_28311_28330[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28301 === (10)))
{var state_28300__$1 = state_28300;var statearr_28312_28331 = state_28300__$1;(statearr_28312_28331[(2)] = fc);
(statearr_28312_28331[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28301 === (8)))
{var inst_28293 = (state_28300[(2)]);var state_28300__$1 = (function (){var statearr_28313 = state_28300;(statearr_28313[(9)] = inst_28293);
return statearr_28313;
})();var statearr_28314_28332 = state_28300__$1;(statearr_28314_28332[(2)] = null);
(statearr_28314_28332[(1)] = (2));
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
});})(c__5691__auto___28322,tc,fc))
;return ((function (switch__5676__auto__,c__5691__auto___28322,tc,fc){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_28318 = [null,null,null,null,null,null,null,null,null,null];(statearr_28318[(0)] = state_machine__5677__auto__);
(statearr_28318[(1)] = (1));
return statearr_28318;
});
var state_machine__5677__auto____1 = (function (state_28300){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_28300);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e28319){if((e28319 instanceof Object))
{var ex__5680__auto__ = e28319;var statearr_28320_28333 = state_28300;(statearr_28320_28333[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28334 = state_28300;
state_28300 = G__28334;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___28322,tc,fc))
})();var state__5693__auto__ = (function (){var statearr_28321 = f__5692__auto__.call(null);(statearr_28321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___28322);
return statearr_28321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___28322,tc,fc))
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
return (function (state_28381){var state_val_28382 = (state_28381[(1)]);if((state_val_28382 === (7)))
{var inst_28377 = (state_28381[(2)]);var state_28381__$1 = state_28381;var statearr_28383_28399 = state_28381__$1;(statearr_28383_28399[(2)] = inst_28377);
(statearr_28383_28399[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28382 === (6)))
{var inst_28367 = (state_28381[(7)]);var inst_28370 = (state_28381[(8)]);var inst_28374 = f.call(null,inst_28367,inst_28370);var inst_28367__$1 = inst_28374;var state_28381__$1 = (function (){var statearr_28384 = state_28381;(statearr_28384[(7)] = inst_28367__$1);
return statearr_28384;
})();var statearr_28385_28400 = state_28381__$1;(statearr_28385_28400[(2)] = null);
(statearr_28385_28400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28382 === (5)))
{var inst_28367 = (state_28381[(7)]);var state_28381__$1 = state_28381;var statearr_28386_28401 = state_28381__$1;(statearr_28386_28401[(2)] = inst_28367);
(statearr_28386_28401[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28382 === (4)))
{var inst_28370 = (state_28381[(8)]);var inst_28370__$1 = (state_28381[(2)]);var inst_28371 = (inst_28370__$1 == null);var state_28381__$1 = (function (){var statearr_28387 = state_28381;(statearr_28387[(8)] = inst_28370__$1);
return statearr_28387;
})();if(cljs.core.truth_(inst_28371))
{var statearr_28388_28402 = state_28381__$1;(statearr_28388_28402[(1)] = (5));
} else
{var statearr_28389_28403 = state_28381__$1;(statearr_28389_28403[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28382 === (3)))
{var inst_28379 = (state_28381[(2)]);var state_28381__$1 = state_28381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28381__$1,inst_28379);
} else
{if((state_val_28382 === (2)))
{var state_28381__$1 = state_28381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28381__$1,(4),ch);
} else
{if((state_val_28382 === (1)))
{var inst_28367 = init;var state_28381__$1 = (function (){var statearr_28390 = state_28381;(statearr_28390[(7)] = inst_28367);
return statearr_28390;
})();var statearr_28391_28404 = state_28381__$1;(statearr_28391_28404[(2)] = null);
(statearr_28391_28404[(1)] = (2));
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
var state_machine__5677__auto____0 = (function (){var statearr_28395 = [null,null,null,null,null,null,null,null,null];(statearr_28395[(0)] = state_machine__5677__auto__);
(statearr_28395[(1)] = (1));
return statearr_28395;
});
var state_machine__5677__auto____1 = (function (state_28381){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_28381);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e28396){if((e28396 instanceof Object))
{var ex__5680__auto__ = e28396;var statearr_28397_28405 = state_28381;(statearr_28397_28405[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28406 = state_28381;
state_28381 = G__28406;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_28381){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_28381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_28398 = f__5692__auto__.call(null);(statearr_28398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_28398;
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
return (function (state_28468){var state_val_28469 = (state_28468[(1)]);if((state_val_28469 === (7)))
{var inst_28449 = (state_28468[(7)]);var inst_28454 = (state_28468[(2)]);var inst_28455 = cljs.core.next.call(null,inst_28449);var inst_28449__$1 = inst_28455;var state_28468__$1 = (function (){var statearr_28470 = state_28468;(statearr_28470[(8)] = inst_28454);
(statearr_28470[(7)] = inst_28449__$1);
return statearr_28470;
})();var statearr_28471_28489 = state_28468__$1;(statearr_28471_28489[(2)] = null);
(statearr_28471_28489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (1)))
{var inst_28448 = cljs.core.seq.call(null,coll);var inst_28449 = inst_28448;var state_28468__$1 = (function (){var statearr_28472 = state_28468;(statearr_28472[(7)] = inst_28449);
return statearr_28472;
})();var statearr_28473_28490 = state_28468__$1;(statearr_28473_28490[(2)] = null);
(statearr_28473_28490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (4)))
{var inst_28449 = (state_28468[(7)]);var inst_28452 = cljs.core.first.call(null,inst_28449);var state_28468__$1 = state_28468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28468__$1,(7),ch,inst_28452);
} else
{if((state_val_28469 === (6)))
{var inst_28464 = (state_28468[(2)]);var state_28468__$1 = state_28468;var statearr_28474_28491 = state_28468__$1;(statearr_28474_28491[(2)] = inst_28464);
(statearr_28474_28491[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (3)))
{var inst_28466 = (state_28468[(2)]);var state_28468__$1 = state_28468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28468__$1,inst_28466);
} else
{if((state_val_28469 === (2)))
{var inst_28449 = (state_28468[(7)]);var state_28468__$1 = state_28468;if(cljs.core.truth_(inst_28449))
{var statearr_28475_28492 = state_28468__$1;(statearr_28475_28492[(1)] = (4));
} else
{var statearr_28476_28493 = state_28468__$1;(statearr_28476_28493[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (9)))
{var state_28468__$1 = state_28468;var statearr_28477_28494 = state_28468__$1;(statearr_28477_28494[(2)] = null);
(statearr_28477_28494[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (5)))
{var state_28468__$1 = state_28468;if(cljs.core.truth_(close_QMARK_))
{var statearr_28478_28495 = state_28468__$1;(statearr_28478_28495[(1)] = (8));
} else
{var statearr_28479_28496 = state_28468__$1;(statearr_28479_28496[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (10)))
{var inst_28462 = (state_28468[(2)]);var state_28468__$1 = state_28468;var statearr_28480_28497 = state_28468__$1;(statearr_28480_28497[(2)] = inst_28462);
(statearr_28480_28497[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (8)))
{var inst_28459 = cljs.core.async.close_BANG_.call(null,ch);var state_28468__$1 = state_28468;var statearr_28481_28498 = state_28468__$1;(statearr_28481_28498[(2)] = inst_28459);
(statearr_28481_28498[(1)] = (10));
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
var state_machine__5677__auto____0 = (function (){var statearr_28485 = [null,null,null,null,null,null,null,null,null];(statearr_28485[(0)] = state_machine__5677__auto__);
(statearr_28485[(1)] = (1));
return statearr_28485;
});
var state_machine__5677__auto____1 = (function (state_28468){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_28468);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e28486){if((e28486 instanceof Object))
{var ex__5680__auto__ = e28486;var statearr_28487_28499 = state_28468;(statearr_28487_28499[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28486;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28500 = state_28468;
state_28468 = G__28500;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_28468){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_28468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_28488 = f__5692__auto__.call(null);(statearr_28488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_28488;
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
cljs.core.async.Mux = (function (){var obj28502 = {};return obj28502;
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
cljs.core.async.Mult = (function (){var obj28504 = {};return obj28504;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28728 = (function (cs,ch,mult,meta28729){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28729 = meta28729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28728.cljs$lang$type = true;
cljs.core.async.t28728.cljs$lang$ctorStr = "cljs.core.async/t28728";
cljs.core.async.t28728.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t28728");
});})(cs))
;
cljs.core.async.t28728.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28728.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28728.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28728.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28728.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28730){var self__ = this;
var _28730__$1 = this;return self__.meta28729;
});})(cs))
;
cljs.core.async.t28728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28730,meta28729__$1){var self__ = this;
var _28730__$1 = this;return (new cljs.core.async.t28728(self__.cs,self__.ch,self__.mult,meta28729__$1));
});})(cs))
;
cljs.core.async.__GT_t28728 = ((function (cs){
return (function __GT_t28728(cs__$1,ch__$1,mult__$1,meta28729){return (new cljs.core.async.t28728(cs__$1,ch__$1,mult__$1,meta28729));
});})(cs))
;
}
return (new cljs.core.async.t28728(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5691__auto___28951 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___28951,cs,m,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___28951,cs,m,dchan,dctr,done){
return (function (state_28865){var state_val_28866 = (state_28865[(1)]);if((state_val_28866 === (7)))
{var inst_28861 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28867_28952 = state_28865__$1;(statearr_28867_28952[(2)] = inst_28861);
(statearr_28867_28952[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (20)))
{var inst_28762 = (state_28865[(7)]);var inst_28772 = cljs.core.first.call(null,inst_28762);var inst_28773 = cljs.core.nth.call(null,inst_28772,(0),null);var inst_28774 = cljs.core.nth.call(null,inst_28772,(1),null);var state_28865__$1 = (function (){var statearr_28868 = state_28865;(statearr_28868[(8)] = inst_28773);
return statearr_28868;
})();if(cljs.core.truth_(inst_28774))
{var statearr_28869_28953 = state_28865__$1;(statearr_28869_28953[(1)] = (22));
} else
{var statearr_28870_28954 = state_28865__$1;(statearr_28870_28954[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (27)))
{var inst_28804 = (state_28865[(9)]);var inst_28802 = (state_28865[(10)]);var inst_28809 = cljs.core._nth.call(null,inst_28802,inst_28804);var state_28865__$1 = (function (){var statearr_28871 = state_28865;(statearr_28871[(11)] = inst_28809);
return statearr_28871;
})();var statearr_28872_28955 = state_28865__$1;(statearr_28872_28955[(2)] = null);
(statearr_28872_28955[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (1)))
{var state_28865__$1 = state_28865;var statearr_28873_28956 = state_28865__$1;(statearr_28873_28956[(2)] = null);
(statearr_28873_28956[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (24)))
{var inst_28762 = (state_28865[(7)]);var inst_28779 = (state_28865[(2)]);var inst_28780 = cljs.core.next.call(null,inst_28762);var inst_28742 = inst_28780;var inst_28743 = null;var inst_28744 = (0);var inst_28745 = (0);var state_28865__$1 = (function (){var statearr_28874 = state_28865;(statearr_28874[(12)] = inst_28742);
(statearr_28874[(13)] = inst_28779);
(statearr_28874[(14)] = inst_28743);
(statearr_28874[(15)] = inst_28744);
(statearr_28874[(16)] = inst_28745);
return statearr_28874;
})();var statearr_28875_28957 = state_28865__$1;(statearr_28875_28957[(2)] = null);
(statearr_28875_28957[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (39)))
{var inst_28822 = (state_28865[(17)]);var inst_28840 = (state_28865[(2)]);var inst_28841 = cljs.core.next.call(null,inst_28822);var inst_28801 = inst_28841;var inst_28802 = null;var inst_28803 = (0);var inst_28804 = (0);var state_28865__$1 = (function (){var statearr_28879 = state_28865;(statearr_28879[(9)] = inst_28804);
(statearr_28879[(18)] = inst_28801);
(statearr_28879[(19)] = inst_28840);
(statearr_28879[(20)] = inst_28803);
(statearr_28879[(10)] = inst_28802);
return statearr_28879;
})();var statearr_28880_28958 = state_28865__$1;(statearr_28880_28958[(2)] = null);
(statearr_28880_28958[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (4)))
{var inst_28733 = (state_28865[(21)]);var inst_28733__$1 = (state_28865[(2)]);var inst_28734 = (inst_28733__$1 == null);var state_28865__$1 = (function (){var statearr_28881 = state_28865;(statearr_28881[(21)] = inst_28733__$1);
return statearr_28881;
})();if(cljs.core.truth_(inst_28734))
{var statearr_28882_28959 = state_28865__$1;(statearr_28882_28959[(1)] = (5));
} else
{var statearr_28883_28960 = state_28865__$1;(statearr_28883_28960[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (15)))
{var inst_28742 = (state_28865[(12)]);var inst_28743 = (state_28865[(14)]);var inst_28744 = (state_28865[(15)]);var inst_28745 = (state_28865[(16)]);var inst_28758 = (state_28865[(2)]);var inst_28759 = (inst_28745 + (1));var tmp28876 = inst_28742;var tmp28877 = inst_28743;var tmp28878 = inst_28744;var inst_28742__$1 = tmp28876;var inst_28743__$1 = tmp28877;var inst_28744__$1 = tmp28878;var inst_28745__$1 = inst_28759;var state_28865__$1 = (function (){var statearr_28884 = state_28865;(statearr_28884[(12)] = inst_28742__$1);
(statearr_28884[(22)] = inst_28758);
(statearr_28884[(14)] = inst_28743__$1);
(statearr_28884[(15)] = inst_28744__$1);
(statearr_28884[(16)] = inst_28745__$1);
return statearr_28884;
})();var statearr_28885_28961 = state_28865__$1;(statearr_28885_28961[(2)] = null);
(statearr_28885_28961[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (21)))
{var inst_28783 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28886_28962 = state_28865__$1;(statearr_28886_28962[(2)] = inst_28783);
(statearr_28886_28962[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (31)))
{var inst_28809 = (state_28865[(11)]);var inst_28810 = (state_28865[(2)]);var inst_28811 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28812 = cljs.core.async.untap_STAR_.call(null,m,inst_28809);var state_28865__$1 = (function (){var statearr_28887 = state_28865;(statearr_28887[(23)] = inst_28811);
(statearr_28887[(24)] = inst_28810);
return statearr_28887;
})();var statearr_28888_28963 = state_28865__$1;(statearr_28888_28963[(2)] = inst_28812);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28865__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (32)))
{var inst_28809 = (state_28865[(11)]);var inst_28733 = (state_28865[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28865,(31),Object,null,(30));var inst_28816 = cljs.core.async.put_BANG_.call(null,inst_28809,inst_28733,done);var state_28865__$1 = state_28865;var statearr_28889_28964 = state_28865__$1;(statearr_28889_28964[(2)] = inst_28816);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28865__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (40)))
{var inst_28831 = (state_28865[(25)]);var inst_28832 = (state_28865[(2)]);var inst_28833 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28834 = cljs.core.async.untap_STAR_.call(null,m,inst_28831);var state_28865__$1 = (function (){var statearr_28890 = state_28865;(statearr_28890[(26)] = inst_28832);
(statearr_28890[(27)] = inst_28833);
return statearr_28890;
})();var statearr_28891_28965 = state_28865__$1;(statearr_28891_28965[(2)] = inst_28834);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28865__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (33)))
{var inst_28822 = (state_28865[(17)]);var inst_28824 = cljs.core.chunked_seq_QMARK_.call(null,inst_28822);var state_28865__$1 = state_28865;if(inst_28824)
{var statearr_28892_28966 = state_28865__$1;(statearr_28892_28966[(1)] = (36));
} else
{var statearr_28893_28967 = state_28865__$1;(statearr_28893_28967[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (13)))
{var inst_28752 = (state_28865[(28)]);var inst_28755 = cljs.core.async.close_BANG_.call(null,inst_28752);var state_28865__$1 = state_28865;var statearr_28894_28968 = state_28865__$1;(statearr_28894_28968[(2)] = inst_28755);
(statearr_28894_28968[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (22)))
{var inst_28773 = (state_28865[(8)]);var inst_28776 = cljs.core.async.close_BANG_.call(null,inst_28773);var state_28865__$1 = state_28865;var statearr_28895_28969 = state_28865__$1;(statearr_28895_28969[(2)] = inst_28776);
(statearr_28895_28969[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (36)))
{var inst_28822 = (state_28865[(17)]);var inst_28826 = cljs.core.chunk_first.call(null,inst_28822);var inst_28827 = cljs.core.chunk_rest.call(null,inst_28822);var inst_28828 = cljs.core.count.call(null,inst_28826);var inst_28801 = inst_28827;var inst_28802 = inst_28826;var inst_28803 = inst_28828;var inst_28804 = (0);var state_28865__$1 = (function (){var statearr_28896 = state_28865;(statearr_28896[(9)] = inst_28804);
(statearr_28896[(18)] = inst_28801);
(statearr_28896[(20)] = inst_28803);
(statearr_28896[(10)] = inst_28802);
return statearr_28896;
})();var statearr_28897_28970 = state_28865__$1;(statearr_28897_28970[(2)] = null);
(statearr_28897_28970[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (41)))
{var inst_28831 = (state_28865[(25)]);var inst_28733 = (state_28865[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28865,(40),Object,null,(39));var inst_28838 = cljs.core.async.put_BANG_.call(null,inst_28831,inst_28733,done);var state_28865__$1 = state_28865;var statearr_28898_28971 = state_28865__$1;(statearr_28898_28971[(2)] = inst_28838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28865__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (43)))
{var state_28865__$1 = state_28865;var statearr_28899_28972 = state_28865__$1;(statearr_28899_28972[(2)] = null);
(statearr_28899_28972[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (29)))
{var inst_28849 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28900_28973 = state_28865__$1;(statearr_28900_28973[(2)] = inst_28849);
(statearr_28900_28973[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (44)))
{var inst_28858 = (state_28865[(2)]);var state_28865__$1 = (function (){var statearr_28901 = state_28865;(statearr_28901[(29)] = inst_28858);
return statearr_28901;
})();var statearr_28902_28974 = state_28865__$1;(statearr_28902_28974[(2)] = null);
(statearr_28902_28974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (6)))
{var inst_28793 = (state_28865[(30)]);var inst_28792 = cljs.core.deref.call(null,cs);var inst_28793__$1 = cljs.core.keys.call(null,inst_28792);var inst_28794 = cljs.core.count.call(null,inst_28793__$1);var inst_28795 = cljs.core.reset_BANG_.call(null,dctr,inst_28794);var inst_28800 = cljs.core.seq.call(null,inst_28793__$1);var inst_28801 = inst_28800;var inst_28802 = null;var inst_28803 = (0);var inst_28804 = (0);var state_28865__$1 = (function (){var statearr_28903 = state_28865;(statearr_28903[(30)] = inst_28793__$1);
(statearr_28903[(9)] = inst_28804);
(statearr_28903[(18)] = inst_28801);
(statearr_28903[(31)] = inst_28795);
(statearr_28903[(20)] = inst_28803);
(statearr_28903[(10)] = inst_28802);
return statearr_28903;
})();var statearr_28904_28975 = state_28865__$1;(statearr_28904_28975[(2)] = null);
(statearr_28904_28975[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (28)))
{var inst_28801 = (state_28865[(18)]);var inst_28822 = (state_28865[(17)]);var inst_28822__$1 = cljs.core.seq.call(null,inst_28801);var state_28865__$1 = (function (){var statearr_28905 = state_28865;(statearr_28905[(17)] = inst_28822__$1);
return statearr_28905;
})();if(inst_28822__$1)
{var statearr_28906_28976 = state_28865__$1;(statearr_28906_28976[(1)] = (33));
} else
{var statearr_28907_28977 = state_28865__$1;(statearr_28907_28977[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (25)))
{var inst_28804 = (state_28865[(9)]);var inst_28803 = (state_28865[(20)]);var inst_28806 = (inst_28804 < inst_28803);var inst_28807 = inst_28806;var state_28865__$1 = state_28865;if(cljs.core.truth_(inst_28807))
{var statearr_28908_28978 = state_28865__$1;(statearr_28908_28978[(1)] = (27));
} else
{var statearr_28909_28979 = state_28865__$1;(statearr_28909_28979[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (34)))
{var state_28865__$1 = state_28865;var statearr_28910_28980 = state_28865__$1;(statearr_28910_28980[(2)] = null);
(statearr_28910_28980[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (17)))
{var state_28865__$1 = state_28865;var statearr_28911_28981 = state_28865__$1;(statearr_28911_28981[(2)] = null);
(statearr_28911_28981[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (3)))
{var inst_28863 = (state_28865[(2)]);var state_28865__$1 = state_28865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28865__$1,inst_28863);
} else
{if((state_val_28866 === (12)))
{var inst_28788 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28912_28982 = state_28865__$1;(statearr_28912_28982[(2)] = inst_28788);
(statearr_28912_28982[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (2)))
{var state_28865__$1 = state_28865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28865__$1,(4),ch);
} else
{if((state_val_28866 === (23)))
{var state_28865__$1 = state_28865;var statearr_28913_28983 = state_28865__$1;(statearr_28913_28983[(2)] = null);
(statearr_28913_28983[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (35)))
{var inst_28847 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28914_28984 = state_28865__$1;(statearr_28914_28984[(2)] = inst_28847);
(statearr_28914_28984[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (19)))
{var inst_28762 = (state_28865[(7)]);var inst_28766 = cljs.core.chunk_first.call(null,inst_28762);var inst_28767 = cljs.core.chunk_rest.call(null,inst_28762);var inst_28768 = cljs.core.count.call(null,inst_28766);var inst_28742 = inst_28767;var inst_28743 = inst_28766;var inst_28744 = inst_28768;var inst_28745 = (0);var state_28865__$1 = (function (){var statearr_28915 = state_28865;(statearr_28915[(12)] = inst_28742);
(statearr_28915[(14)] = inst_28743);
(statearr_28915[(15)] = inst_28744);
(statearr_28915[(16)] = inst_28745);
return statearr_28915;
})();var statearr_28916_28985 = state_28865__$1;(statearr_28916_28985[(2)] = null);
(statearr_28916_28985[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (11)))
{var inst_28762 = (state_28865[(7)]);var inst_28742 = (state_28865[(12)]);var inst_28762__$1 = cljs.core.seq.call(null,inst_28742);var state_28865__$1 = (function (){var statearr_28917 = state_28865;(statearr_28917[(7)] = inst_28762__$1);
return statearr_28917;
})();if(inst_28762__$1)
{var statearr_28918_28986 = state_28865__$1;(statearr_28918_28986[(1)] = (16));
} else
{var statearr_28919_28987 = state_28865__$1;(statearr_28919_28987[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (9)))
{var inst_28790 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28920_28988 = state_28865__$1;(statearr_28920_28988[(2)] = inst_28790);
(statearr_28920_28988[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (5)))
{var inst_28740 = cljs.core.deref.call(null,cs);var inst_28741 = cljs.core.seq.call(null,inst_28740);var inst_28742 = inst_28741;var inst_28743 = null;var inst_28744 = (0);var inst_28745 = (0);var state_28865__$1 = (function (){var statearr_28921 = state_28865;(statearr_28921[(12)] = inst_28742);
(statearr_28921[(14)] = inst_28743);
(statearr_28921[(15)] = inst_28744);
(statearr_28921[(16)] = inst_28745);
return statearr_28921;
})();var statearr_28922_28989 = state_28865__$1;(statearr_28922_28989[(2)] = null);
(statearr_28922_28989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (14)))
{var state_28865__$1 = state_28865;var statearr_28923_28990 = state_28865__$1;(statearr_28923_28990[(2)] = null);
(statearr_28923_28990[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (45)))
{var inst_28855 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28924_28991 = state_28865__$1;(statearr_28924_28991[(2)] = inst_28855);
(statearr_28924_28991[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (26)))
{var inst_28793 = (state_28865[(30)]);var inst_28851 = (state_28865[(2)]);var inst_28852 = cljs.core.seq.call(null,inst_28793);var state_28865__$1 = (function (){var statearr_28925 = state_28865;(statearr_28925[(32)] = inst_28851);
return statearr_28925;
})();if(inst_28852)
{var statearr_28926_28992 = state_28865__$1;(statearr_28926_28992[(1)] = (42));
} else
{var statearr_28927_28993 = state_28865__$1;(statearr_28927_28993[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (16)))
{var inst_28762 = (state_28865[(7)]);var inst_28764 = cljs.core.chunked_seq_QMARK_.call(null,inst_28762);var state_28865__$1 = state_28865;if(inst_28764)
{var statearr_28931_28994 = state_28865__$1;(statearr_28931_28994[(1)] = (19));
} else
{var statearr_28932_28995 = state_28865__$1;(statearr_28932_28995[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (38)))
{var inst_28844 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28933_28996 = state_28865__$1;(statearr_28933_28996[(2)] = inst_28844);
(statearr_28933_28996[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (30)))
{var inst_28804 = (state_28865[(9)]);var inst_28801 = (state_28865[(18)]);var inst_28803 = (state_28865[(20)]);var inst_28802 = (state_28865[(10)]);var inst_28818 = (state_28865[(2)]);var inst_28819 = (inst_28804 + (1));var tmp28928 = inst_28801;var tmp28929 = inst_28803;var tmp28930 = inst_28802;var inst_28801__$1 = tmp28928;var inst_28802__$1 = tmp28930;var inst_28803__$1 = tmp28929;var inst_28804__$1 = inst_28819;var state_28865__$1 = (function (){var statearr_28934 = state_28865;(statearr_28934[(9)] = inst_28804__$1);
(statearr_28934[(33)] = inst_28818);
(statearr_28934[(18)] = inst_28801__$1);
(statearr_28934[(20)] = inst_28803__$1);
(statearr_28934[(10)] = inst_28802__$1);
return statearr_28934;
})();var statearr_28935_28997 = state_28865__$1;(statearr_28935_28997[(2)] = null);
(statearr_28935_28997[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (10)))
{var inst_28743 = (state_28865[(14)]);var inst_28745 = (state_28865[(16)]);var inst_28751 = cljs.core._nth.call(null,inst_28743,inst_28745);var inst_28752 = cljs.core.nth.call(null,inst_28751,(0),null);var inst_28753 = cljs.core.nth.call(null,inst_28751,(1),null);var state_28865__$1 = (function (){var statearr_28936 = state_28865;(statearr_28936[(28)] = inst_28752);
return statearr_28936;
})();if(cljs.core.truth_(inst_28753))
{var statearr_28937_28998 = state_28865__$1;(statearr_28937_28998[(1)] = (13));
} else
{var statearr_28938_28999 = state_28865__$1;(statearr_28938_28999[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (18)))
{var inst_28786 = (state_28865[(2)]);var state_28865__$1 = state_28865;var statearr_28939_29000 = state_28865__$1;(statearr_28939_29000[(2)] = inst_28786);
(statearr_28939_29000[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (42)))
{var state_28865__$1 = state_28865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28865__$1,(45),dchan);
} else
{if((state_val_28866 === (37)))
{var inst_28822 = (state_28865[(17)]);var inst_28831 = cljs.core.first.call(null,inst_28822);var state_28865__$1 = (function (){var statearr_28940 = state_28865;(statearr_28940[(25)] = inst_28831);
return statearr_28940;
})();var statearr_28941_29001 = state_28865__$1;(statearr_28941_29001[(2)] = null);
(statearr_28941_29001[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28866 === (8)))
{var inst_28744 = (state_28865[(15)]);var inst_28745 = (state_28865[(16)]);var inst_28747 = (inst_28745 < inst_28744);var inst_28748 = inst_28747;var state_28865__$1 = state_28865;if(cljs.core.truth_(inst_28748))
{var statearr_28942_29002 = state_28865__$1;(statearr_28942_29002[(1)] = (10));
} else
{var statearr_28943_29003 = state_28865__$1;(statearr_28943_29003[(1)] = (11));
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
});})(c__5691__auto___28951,cs,m,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___28951,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_28947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28947[(0)] = state_machine__5677__auto__);
(statearr_28947[(1)] = (1));
return statearr_28947;
});
var state_machine__5677__auto____1 = (function (state_28865){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_28865);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e28948){if((e28948 instanceof Object))
{var ex__5680__auto__ = e28948;var statearr_28949_29004 = state_28865;(statearr_28949_29004[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28865);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29005 = state_28865;
state_28865 = G__29005;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_28865){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_28865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___28951,cs,m,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_28950 = f__5692__auto__.call(null);(statearr_28950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___28951);
return statearr_28950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___28951,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj29007 = {};return obj29007;
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
;var m = (function (){if(typeof cljs.core.async.t29117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29117 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29118){
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
this.meta29118 = meta29118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29117.cljs$lang$type = true;
cljs.core.async.t29117.cljs$lang$ctorStr = "cljs.core.async/t29117";
cljs.core.async.t29117.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t29117");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29117.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29117.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29119){var self__ = this;
var _29119__$1 = this;return self__.meta29118;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29119,meta29118__$1){var self__ = this;
var _29119__$1 = this;return (new cljs.core.async.t29117(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29118__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29117 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29117(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29118){return (new cljs.core.async.t29117(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29118));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29117(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5691__auto___29226 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___29226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___29226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29184){var state_val_29185 = (state_29184[(1)]);if((state_val_29185 === (7)))
{var inst_29133 = (state_29184[(7)]);var inst_29138 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29133);var state_29184__$1 = state_29184;var statearr_29186_29227 = state_29184__$1;(statearr_29186_29227[(2)] = inst_29138);
(statearr_29186_29227[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (20)))
{var inst_29148 = (state_29184[(8)]);var state_29184__$1 = state_29184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29184__$1,(23),out,inst_29148);
} else
{if((state_val_29185 === (1)))
{var inst_29123 = (state_29184[(9)]);var inst_29123__$1 = calc_state.call(null);var inst_29124 = cljs.core.seq_QMARK_.call(null,inst_29123__$1);var state_29184__$1 = (function (){var statearr_29187 = state_29184;(statearr_29187[(9)] = inst_29123__$1);
return statearr_29187;
})();if(inst_29124)
{var statearr_29188_29228 = state_29184__$1;(statearr_29188_29228[(1)] = (2));
} else
{var statearr_29189_29229 = state_29184__$1;(statearr_29189_29229[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (4)))
{var inst_29123 = (state_29184[(9)]);var inst_29129 = (state_29184[(2)]);var inst_29130 = cljs.core.get.call(null,inst_29129,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29131 = cljs.core.get.call(null,inst_29129,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29132 = cljs.core.get.call(null,inst_29129,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_29133 = inst_29123;var state_29184__$1 = (function (){var statearr_29190 = state_29184;(statearr_29190[(10)] = inst_29130);
(statearr_29190[(11)] = inst_29131);
(statearr_29190[(12)] = inst_29132);
(statearr_29190[(7)] = inst_29133);
return statearr_29190;
})();var statearr_29191_29230 = state_29184__$1;(statearr_29191_29230[(2)] = null);
(statearr_29191_29230[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (15)))
{var state_29184__$1 = state_29184;var statearr_29192_29231 = state_29184__$1;(statearr_29192_29231[(2)] = null);
(statearr_29192_29231[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (21)))
{var state_29184__$1 = state_29184;var statearr_29193_29232 = state_29184__$1;(statearr_29193_29232[(2)] = null);
(statearr_29193_29232[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (13)))
{var inst_29180 = (state_29184[(2)]);var state_29184__$1 = state_29184;var statearr_29194_29233 = state_29184__$1;(statearr_29194_29233[(2)] = inst_29180);
(statearr_29194_29233[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (22)))
{var inst_29141 = (state_29184[(13)]);var inst_29177 = (state_29184[(2)]);var inst_29133 = inst_29141;var state_29184__$1 = (function (){var statearr_29195 = state_29184;(statearr_29195[(14)] = inst_29177);
(statearr_29195[(7)] = inst_29133);
return statearr_29195;
})();var statearr_29196_29234 = state_29184__$1;(statearr_29196_29234[(2)] = null);
(statearr_29196_29234[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (6)))
{var inst_29182 = (state_29184[(2)]);var state_29184__$1 = state_29184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29184__$1,inst_29182);
} else
{if((state_val_29185 === (17)))
{var inst_29163 = (state_29184[(15)]);var state_29184__$1 = state_29184;var statearr_29197_29235 = state_29184__$1;(statearr_29197_29235[(2)] = inst_29163);
(statearr_29197_29235[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (3)))
{var inst_29123 = (state_29184[(9)]);var state_29184__$1 = state_29184;var statearr_29198_29236 = state_29184__$1;(statearr_29198_29236[(2)] = inst_29123);
(statearr_29198_29236[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (12)))
{var inst_29149 = (state_29184[(16)]);var inst_29144 = (state_29184[(17)]);var inst_29163 = (state_29184[(15)]);var inst_29163__$1 = inst_29144.call(null,inst_29149);var state_29184__$1 = (function (){var statearr_29199 = state_29184;(statearr_29199[(15)] = inst_29163__$1);
return statearr_29199;
})();if(cljs.core.truth_(inst_29163__$1))
{var statearr_29200_29237 = state_29184__$1;(statearr_29200_29237[(1)] = (17));
} else
{var statearr_29201_29238 = state_29184__$1;(statearr_29201_29238[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (2)))
{var inst_29123 = (state_29184[(9)]);var inst_29126 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29123);var state_29184__$1 = state_29184;var statearr_29202_29239 = state_29184__$1;(statearr_29202_29239[(2)] = inst_29126);
(statearr_29202_29239[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (23)))
{var inst_29174 = (state_29184[(2)]);var state_29184__$1 = state_29184;var statearr_29203_29240 = state_29184__$1;(statearr_29203_29240[(2)] = inst_29174);
(statearr_29203_29240[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (19)))
{var inst_29171 = (state_29184[(2)]);var state_29184__$1 = state_29184;if(cljs.core.truth_(inst_29171))
{var statearr_29204_29241 = state_29184__$1;(statearr_29204_29241[(1)] = (20));
} else
{var statearr_29205_29242 = state_29184__$1;(statearr_29205_29242[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (11)))
{var inst_29148 = (state_29184[(8)]);var inst_29154 = (inst_29148 == null);var state_29184__$1 = state_29184;if(cljs.core.truth_(inst_29154))
{var statearr_29206_29243 = state_29184__$1;(statearr_29206_29243[(1)] = (14));
} else
{var statearr_29207_29244 = state_29184__$1;(statearr_29207_29244[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (9)))
{var inst_29141 = (state_29184[(13)]);var inst_29141__$1 = (state_29184[(2)]);var inst_29142 = cljs.core.get.call(null,inst_29141__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29143 = cljs.core.get.call(null,inst_29141__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29144 = cljs.core.get.call(null,inst_29141__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_29184__$1 = (function (){var statearr_29208 = state_29184;(statearr_29208[(13)] = inst_29141__$1);
(statearr_29208[(18)] = inst_29143);
(statearr_29208[(17)] = inst_29144);
return statearr_29208;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29184__$1,(10),inst_29142);
} else
{if((state_val_29185 === (5)))
{var inst_29133 = (state_29184[(7)]);var inst_29136 = cljs.core.seq_QMARK_.call(null,inst_29133);var state_29184__$1 = state_29184;if(inst_29136)
{var statearr_29209_29245 = state_29184__$1;(statearr_29209_29245[(1)] = (7));
} else
{var statearr_29210_29246 = state_29184__$1;(statearr_29210_29246[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (14)))
{var inst_29149 = (state_29184[(16)]);var inst_29156 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29149);var state_29184__$1 = state_29184;var statearr_29211_29247 = state_29184__$1;(statearr_29211_29247[(2)] = inst_29156);
(statearr_29211_29247[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (16)))
{var inst_29159 = (state_29184[(2)]);var inst_29160 = calc_state.call(null);var inst_29133 = inst_29160;var state_29184__$1 = (function (){var statearr_29212 = state_29184;(statearr_29212[(7)] = inst_29133);
(statearr_29212[(19)] = inst_29159);
return statearr_29212;
})();var statearr_29213_29248 = state_29184__$1;(statearr_29213_29248[(2)] = null);
(statearr_29213_29248[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (10)))
{var inst_29148 = (state_29184[(8)]);var inst_29149 = (state_29184[(16)]);var inst_29147 = (state_29184[(2)]);var inst_29148__$1 = cljs.core.nth.call(null,inst_29147,(0),null);var inst_29149__$1 = cljs.core.nth.call(null,inst_29147,(1),null);var inst_29150 = (inst_29148__$1 == null);var inst_29151 = cljs.core._EQ_.call(null,inst_29149__$1,change);var inst_29152 = (inst_29150) || (inst_29151);var state_29184__$1 = (function (){var statearr_29214 = state_29184;(statearr_29214[(8)] = inst_29148__$1);
(statearr_29214[(16)] = inst_29149__$1);
return statearr_29214;
})();if(cljs.core.truth_(inst_29152))
{var statearr_29215_29249 = state_29184__$1;(statearr_29215_29249[(1)] = (11));
} else
{var statearr_29216_29250 = state_29184__$1;(statearr_29216_29250[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (18)))
{var inst_29149 = (state_29184[(16)]);var inst_29143 = (state_29184[(18)]);var inst_29144 = (state_29184[(17)]);var inst_29166 = cljs.core.empty_QMARK_.call(null,inst_29144);var inst_29167 = inst_29143.call(null,inst_29149);var inst_29168 = cljs.core.not.call(null,inst_29167);var inst_29169 = (inst_29166) && (inst_29168);var state_29184__$1 = state_29184;var statearr_29217_29251 = state_29184__$1;(statearr_29217_29251[(2)] = inst_29169);
(statearr_29217_29251[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29185 === (8)))
{var inst_29133 = (state_29184[(7)]);var state_29184__$1 = state_29184;var statearr_29218_29252 = state_29184__$1;(statearr_29218_29252[(2)] = inst_29133);
(statearr_29218_29252[(1)] = (9));
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
});})(c__5691__auto___29226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5676__auto__,c__5691__auto___29226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_29222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29222[(0)] = state_machine__5677__auto__);
(statearr_29222[(1)] = (1));
return statearr_29222;
});
var state_machine__5677__auto____1 = (function (state_29184){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_29184);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e29223){if((e29223 instanceof Object))
{var ex__5680__auto__ = e29223;var statearr_29224_29253 = state_29184;(statearr_29224_29253[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29254 = state_29184;
state_29184 = G__29254;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_29184){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_29184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___29226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5693__auto__ = (function (){var statearr_29225 = f__5692__auto__.call(null);(statearr_29225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___29226);
return statearr_29225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___29226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj29256 = {};return obj29256;
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
return (function (p1__29257_SHARP_){if(cljs.core.truth_(p1__29257_SHARP_.call(null,topic)))
{return p1__29257_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29257_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29382 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29383){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29383 = meta29383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29382.cljs$lang$type = true;
cljs.core.async.t29382.cljs$lang$ctorStr = "cljs.core.async/t29382";
cljs.core.async.t29382.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t29382");
});})(mults,ensure_mult))
;
cljs.core.async.t29382.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29382.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29382.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29382.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29384){var self__ = this;
var _29384__$1 = this;return self__.meta29383;
});})(mults,ensure_mult))
;
cljs.core.async.t29382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29384,meta29383__$1){var self__ = this;
var _29384__$1 = this;return (new cljs.core.async.t29382(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29383__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29382 = ((function (mults,ensure_mult){
return (function __GT_t29382(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29383){return (new cljs.core.async.t29382(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29383));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29382(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5691__auto___29506 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___29506,mults,ensure_mult,p){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___29506,mults,ensure_mult,p){
return (function (state_29458){var state_val_29459 = (state_29458[(1)]);if((state_val_29459 === (7)))
{var inst_29454 = (state_29458[(2)]);var state_29458__$1 = state_29458;var statearr_29460_29507 = state_29458__$1;(statearr_29460_29507[(2)] = inst_29454);
(statearr_29460_29507[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (20)))
{var state_29458__$1 = state_29458;var statearr_29461_29508 = state_29458__$1;(statearr_29461_29508[(2)] = null);
(statearr_29461_29508[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (1)))
{var state_29458__$1 = state_29458;var statearr_29462_29509 = state_29458__$1;(statearr_29462_29509[(2)] = null);
(statearr_29462_29509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (24)))
{var inst_29387 = (state_29458[(7)]);var inst_29437 = (state_29458[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29458,(23),Object,null,(22));var inst_29444 = cljs.core.async.muxch_STAR_.call(null,inst_29437);var state_29458__$1 = state_29458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29458__$1,(25),inst_29444,inst_29387);
} else
{if((state_val_29459 === (4)))
{var inst_29387 = (state_29458[(7)]);var inst_29387__$1 = (state_29458[(2)]);var inst_29388 = (inst_29387__$1 == null);var state_29458__$1 = (function (){var statearr_29463 = state_29458;(statearr_29463[(7)] = inst_29387__$1);
return statearr_29463;
})();if(cljs.core.truth_(inst_29388))
{var statearr_29464_29510 = state_29458__$1;(statearr_29464_29510[(1)] = (5));
} else
{var statearr_29465_29511 = state_29458__$1;(statearr_29465_29511[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (15)))
{var inst_29429 = (state_29458[(2)]);var state_29458__$1 = state_29458;var statearr_29466_29512 = state_29458__$1;(statearr_29466_29512[(2)] = inst_29429);
(statearr_29466_29512[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (21)))
{var inst_29451 = (state_29458[(2)]);var state_29458__$1 = (function (){var statearr_29467 = state_29458;(statearr_29467[(9)] = inst_29451);
return statearr_29467;
})();var statearr_29468_29513 = state_29458__$1;(statearr_29468_29513[(2)] = null);
(statearr_29468_29513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (13)))
{var inst_29411 = (state_29458[(10)]);var inst_29413 = cljs.core.chunked_seq_QMARK_.call(null,inst_29411);var state_29458__$1 = state_29458;if(inst_29413)
{var statearr_29469_29514 = state_29458__$1;(statearr_29469_29514[(1)] = (16));
} else
{var statearr_29470_29515 = state_29458__$1;(statearr_29470_29515[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (22)))
{var inst_29448 = (state_29458[(2)]);var state_29458__$1 = state_29458;var statearr_29471_29516 = state_29458__$1;(statearr_29471_29516[(2)] = inst_29448);
(statearr_29471_29516[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (6)))
{var inst_29387 = (state_29458[(7)]);var inst_29435 = (state_29458[(11)]);var inst_29437 = (state_29458[(8)]);var inst_29435__$1 = topic_fn.call(null,inst_29387);var inst_29436 = cljs.core.deref.call(null,mults);var inst_29437__$1 = cljs.core.get.call(null,inst_29436,inst_29435__$1);var state_29458__$1 = (function (){var statearr_29472 = state_29458;(statearr_29472[(11)] = inst_29435__$1);
(statearr_29472[(8)] = inst_29437__$1);
return statearr_29472;
})();if(cljs.core.truth_(inst_29437__$1))
{var statearr_29473_29517 = state_29458__$1;(statearr_29473_29517[(1)] = (19));
} else
{var statearr_29474_29518 = state_29458__$1;(statearr_29474_29518[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (25)))
{var inst_29446 = (state_29458[(2)]);var state_29458__$1 = state_29458;var statearr_29475_29519 = state_29458__$1;(statearr_29475_29519[(2)] = inst_29446);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (17)))
{var inst_29411 = (state_29458[(10)]);var inst_29420 = cljs.core.first.call(null,inst_29411);var inst_29421 = cljs.core.async.muxch_STAR_.call(null,inst_29420);var inst_29422 = cljs.core.async.close_BANG_.call(null,inst_29421);var inst_29423 = cljs.core.next.call(null,inst_29411);var inst_29397 = inst_29423;var inst_29398 = null;var inst_29399 = (0);var inst_29400 = (0);var state_29458__$1 = (function (){var statearr_29476 = state_29458;(statearr_29476[(12)] = inst_29397);
(statearr_29476[(13)] = inst_29400);
(statearr_29476[(14)] = inst_29398);
(statearr_29476[(15)] = inst_29399);
(statearr_29476[(16)] = inst_29422);
return statearr_29476;
})();var statearr_29477_29520 = state_29458__$1;(statearr_29477_29520[(2)] = null);
(statearr_29477_29520[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (3)))
{var inst_29456 = (state_29458[(2)]);var state_29458__$1 = state_29458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29458__$1,inst_29456);
} else
{if((state_val_29459 === (12)))
{var inst_29431 = (state_29458[(2)]);var state_29458__$1 = state_29458;var statearr_29478_29521 = state_29458__$1;(statearr_29478_29521[(2)] = inst_29431);
(statearr_29478_29521[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (2)))
{var state_29458__$1 = state_29458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29458__$1,(4),ch);
} else
{if((state_val_29459 === (23)))
{var inst_29435 = (state_29458[(11)]);var inst_29439 = (state_29458[(2)]);var inst_29440 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29435);var state_29458__$1 = (function (){var statearr_29479 = state_29458;(statearr_29479[(17)] = inst_29439);
return statearr_29479;
})();var statearr_29480_29522 = state_29458__$1;(statearr_29480_29522[(2)] = inst_29440);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (19)))
{var state_29458__$1 = state_29458;var statearr_29481_29523 = state_29458__$1;(statearr_29481_29523[(2)] = null);
(statearr_29481_29523[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (11)))
{var inst_29397 = (state_29458[(12)]);var inst_29411 = (state_29458[(10)]);var inst_29411__$1 = cljs.core.seq.call(null,inst_29397);var state_29458__$1 = (function (){var statearr_29482 = state_29458;(statearr_29482[(10)] = inst_29411__$1);
return statearr_29482;
})();if(inst_29411__$1)
{var statearr_29483_29524 = state_29458__$1;(statearr_29483_29524[(1)] = (13));
} else
{var statearr_29484_29525 = state_29458__$1;(statearr_29484_29525[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (9)))
{var inst_29433 = (state_29458[(2)]);var state_29458__$1 = state_29458;var statearr_29485_29526 = state_29458__$1;(statearr_29485_29526[(2)] = inst_29433);
(statearr_29485_29526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (5)))
{var inst_29394 = cljs.core.deref.call(null,mults);var inst_29395 = cljs.core.vals.call(null,inst_29394);var inst_29396 = cljs.core.seq.call(null,inst_29395);var inst_29397 = inst_29396;var inst_29398 = null;var inst_29399 = (0);var inst_29400 = (0);var state_29458__$1 = (function (){var statearr_29486 = state_29458;(statearr_29486[(12)] = inst_29397);
(statearr_29486[(13)] = inst_29400);
(statearr_29486[(14)] = inst_29398);
(statearr_29486[(15)] = inst_29399);
return statearr_29486;
})();var statearr_29487_29527 = state_29458__$1;(statearr_29487_29527[(2)] = null);
(statearr_29487_29527[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (14)))
{var state_29458__$1 = state_29458;var statearr_29491_29528 = state_29458__$1;(statearr_29491_29528[(2)] = null);
(statearr_29491_29528[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (16)))
{var inst_29411 = (state_29458[(10)]);var inst_29415 = cljs.core.chunk_first.call(null,inst_29411);var inst_29416 = cljs.core.chunk_rest.call(null,inst_29411);var inst_29417 = cljs.core.count.call(null,inst_29415);var inst_29397 = inst_29416;var inst_29398 = inst_29415;var inst_29399 = inst_29417;var inst_29400 = (0);var state_29458__$1 = (function (){var statearr_29492 = state_29458;(statearr_29492[(12)] = inst_29397);
(statearr_29492[(13)] = inst_29400);
(statearr_29492[(14)] = inst_29398);
(statearr_29492[(15)] = inst_29399);
return statearr_29492;
})();var statearr_29493_29529 = state_29458__$1;(statearr_29493_29529[(2)] = null);
(statearr_29493_29529[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (10)))
{var inst_29397 = (state_29458[(12)]);var inst_29400 = (state_29458[(13)]);var inst_29398 = (state_29458[(14)]);var inst_29399 = (state_29458[(15)]);var inst_29405 = cljs.core._nth.call(null,inst_29398,inst_29400);var inst_29406 = cljs.core.async.muxch_STAR_.call(null,inst_29405);var inst_29407 = cljs.core.async.close_BANG_.call(null,inst_29406);var inst_29408 = (inst_29400 + (1));var tmp29488 = inst_29397;var tmp29489 = inst_29398;var tmp29490 = inst_29399;var inst_29397__$1 = tmp29488;var inst_29398__$1 = tmp29489;var inst_29399__$1 = tmp29490;var inst_29400__$1 = inst_29408;var state_29458__$1 = (function (){var statearr_29494 = state_29458;(statearr_29494[(18)] = inst_29407);
(statearr_29494[(12)] = inst_29397__$1);
(statearr_29494[(13)] = inst_29400__$1);
(statearr_29494[(14)] = inst_29398__$1);
(statearr_29494[(15)] = inst_29399__$1);
return statearr_29494;
})();var statearr_29495_29530 = state_29458__$1;(statearr_29495_29530[(2)] = null);
(statearr_29495_29530[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (18)))
{var inst_29426 = (state_29458[(2)]);var state_29458__$1 = state_29458;var statearr_29496_29531 = state_29458__$1;(statearr_29496_29531[(2)] = inst_29426);
(statearr_29496_29531[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29459 === (8)))
{var inst_29400 = (state_29458[(13)]);var inst_29399 = (state_29458[(15)]);var inst_29402 = (inst_29400 < inst_29399);var inst_29403 = inst_29402;var state_29458__$1 = state_29458;if(cljs.core.truth_(inst_29403))
{var statearr_29497_29532 = state_29458__$1;(statearr_29497_29532[(1)] = (10));
} else
{var statearr_29498_29533 = state_29458__$1;(statearr_29498_29533[(1)] = (11));
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
});})(c__5691__auto___29506,mults,ensure_mult,p))
;return ((function (switch__5676__auto__,c__5691__auto___29506,mults,ensure_mult,p){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_29502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29502[(0)] = state_machine__5677__auto__);
(statearr_29502[(1)] = (1));
return statearr_29502;
});
var state_machine__5677__auto____1 = (function (state_29458){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_29458);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e29503){if((e29503 instanceof Object))
{var ex__5680__auto__ = e29503;var statearr_29504_29534 = state_29458;(statearr_29504_29534[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29535 = state_29458;
state_29458 = G__29535;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_29458){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_29458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___29506,mults,ensure_mult,p))
})();var state__5693__auto__ = (function (){var statearr_29505 = f__5692__auto__.call(null);(statearr_29505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___29506);
return statearr_29505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___29506,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5691__auto___29672 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___29672,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___29672,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29642){var state_val_29643 = (state_29642[(1)]);if((state_val_29643 === (7)))
{var state_29642__$1 = state_29642;var statearr_29644_29673 = state_29642__$1;(statearr_29644_29673[(2)] = null);
(statearr_29644_29673[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (1)))
{var state_29642__$1 = state_29642;var statearr_29645_29674 = state_29642__$1;(statearr_29645_29674[(2)] = null);
(statearr_29645_29674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (4)))
{var inst_29606 = (state_29642[(7)]);var inst_29608 = (inst_29606 < cnt);var state_29642__$1 = state_29642;if(cljs.core.truth_(inst_29608))
{var statearr_29646_29675 = state_29642__$1;(statearr_29646_29675[(1)] = (6));
} else
{var statearr_29647_29676 = state_29642__$1;(statearr_29647_29676[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (15)))
{var inst_29638 = (state_29642[(2)]);var state_29642__$1 = state_29642;var statearr_29648_29677 = state_29642__$1;(statearr_29648_29677[(2)] = inst_29638);
(statearr_29648_29677[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (13)))
{var inst_29631 = cljs.core.async.close_BANG_.call(null,out);var state_29642__$1 = state_29642;var statearr_29649_29678 = state_29642__$1;(statearr_29649_29678[(2)] = inst_29631);
(statearr_29649_29678[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (6)))
{var state_29642__$1 = state_29642;var statearr_29650_29679 = state_29642__$1;(statearr_29650_29679[(2)] = null);
(statearr_29650_29679[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (3)))
{var inst_29640 = (state_29642[(2)]);var state_29642__$1 = state_29642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29642__$1,inst_29640);
} else
{if((state_val_29643 === (12)))
{var inst_29628 = (state_29642[(8)]);var inst_29628__$1 = (state_29642[(2)]);var inst_29629 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29628__$1);var state_29642__$1 = (function (){var statearr_29651 = state_29642;(statearr_29651[(8)] = inst_29628__$1);
return statearr_29651;
})();if(cljs.core.truth_(inst_29629))
{var statearr_29652_29680 = state_29642__$1;(statearr_29652_29680[(1)] = (13));
} else
{var statearr_29653_29681 = state_29642__$1;(statearr_29653_29681[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (2)))
{var inst_29605 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29606 = (0);var state_29642__$1 = (function (){var statearr_29654 = state_29642;(statearr_29654[(9)] = inst_29605);
(statearr_29654[(7)] = inst_29606);
return statearr_29654;
})();var statearr_29655_29682 = state_29642__$1;(statearr_29655_29682[(2)] = null);
(statearr_29655_29682[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (11)))
{var inst_29606 = (state_29642[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29642,(10),Object,null,(9));var inst_29615 = chs__$1.call(null,inst_29606);var inst_29616 = done.call(null,inst_29606);var inst_29617 = cljs.core.async.take_BANG_.call(null,inst_29615,inst_29616);var state_29642__$1 = state_29642;var statearr_29656_29683 = state_29642__$1;(statearr_29656_29683[(2)] = inst_29617);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29642__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (9)))
{var inst_29606 = (state_29642[(7)]);var inst_29619 = (state_29642[(2)]);var inst_29620 = (inst_29606 + (1));var inst_29606__$1 = inst_29620;var state_29642__$1 = (function (){var statearr_29657 = state_29642;(statearr_29657[(7)] = inst_29606__$1);
(statearr_29657[(10)] = inst_29619);
return statearr_29657;
})();var statearr_29658_29684 = state_29642__$1;(statearr_29658_29684[(2)] = null);
(statearr_29658_29684[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (5)))
{var inst_29626 = (state_29642[(2)]);var state_29642__$1 = (function (){var statearr_29659 = state_29642;(statearr_29659[(11)] = inst_29626);
return statearr_29659;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29642__$1,(12),dchan);
} else
{if((state_val_29643 === (14)))
{var inst_29628 = (state_29642[(8)]);var inst_29633 = cljs.core.apply.call(null,f,inst_29628);var state_29642__$1 = state_29642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29642__$1,(16),out,inst_29633);
} else
{if((state_val_29643 === (16)))
{var inst_29635 = (state_29642[(2)]);var state_29642__$1 = (function (){var statearr_29660 = state_29642;(statearr_29660[(12)] = inst_29635);
return statearr_29660;
})();var statearr_29661_29685 = state_29642__$1;(statearr_29661_29685[(2)] = null);
(statearr_29661_29685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (10)))
{var inst_29610 = (state_29642[(2)]);var inst_29611 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29642__$1 = (function (){var statearr_29662 = state_29642;(statearr_29662[(13)] = inst_29610);
return statearr_29662;
})();var statearr_29663_29686 = state_29642__$1;(statearr_29663_29686[(2)] = inst_29611);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29642__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29643 === (8)))
{var inst_29624 = (state_29642[(2)]);var state_29642__$1 = state_29642;var statearr_29664_29687 = state_29642__$1;(statearr_29664_29687[(2)] = inst_29624);
(statearr_29664_29687[(1)] = (5));
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
});})(c__5691__auto___29672,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___29672,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_29668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29668[(0)] = state_machine__5677__auto__);
(statearr_29668[(1)] = (1));
return statearr_29668;
});
var state_machine__5677__auto____1 = (function (state_29642){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_29642);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e29669){if((e29669 instanceof Object))
{var ex__5680__auto__ = e29669;var statearr_29670_29688 = state_29642;(statearr_29670_29688[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29642);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29689 = state_29642;
state_29642 = G__29689;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_29642){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_29642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___29672,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_29671 = f__5692__auto__.call(null);(statearr_29671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___29672);
return statearr_29671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___29672,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___29797 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___29797,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___29797,out){
return (function (state_29773){var state_val_29774 = (state_29773[(1)]);if((state_val_29774 === (7)))
{var inst_29752 = (state_29773[(7)]);var inst_29753 = (state_29773[(8)]);var inst_29752__$1 = (state_29773[(2)]);var inst_29753__$1 = cljs.core.nth.call(null,inst_29752__$1,(0),null);var inst_29754 = cljs.core.nth.call(null,inst_29752__$1,(1),null);var inst_29755 = (inst_29753__$1 == null);var state_29773__$1 = (function (){var statearr_29775 = state_29773;(statearr_29775[(7)] = inst_29752__$1);
(statearr_29775[(9)] = inst_29754);
(statearr_29775[(8)] = inst_29753__$1);
return statearr_29775;
})();if(cljs.core.truth_(inst_29755))
{var statearr_29776_29798 = state_29773__$1;(statearr_29776_29798[(1)] = (8));
} else
{var statearr_29777_29799 = state_29773__$1;(statearr_29777_29799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29774 === (1)))
{var inst_29744 = cljs.core.vec.call(null,chs);var inst_29745 = inst_29744;var state_29773__$1 = (function (){var statearr_29778 = state_29773;(statearr_29778[(10)] = inst_29745);
return statearr_29778;
})();var statearr_29779_29800 = state_29773__$1;(statearr_29779_29800[(2)] = null);
(statearr_29779_29800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29774 === (4)))
{var inst_29745 = (state_29773[(10)]);var state_29773__$1 = state_29773;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29773__$1,(7),inst_29745);
} else
{if((state_val_29774 === (6)))
{var inst_29769 = (state_29773[(2)]);var state_29773__$1 = state_29773;var statearr_29780_29801 = state_29773__$1;(statearr_29780_29801[(2)] = inst_29769);
(statearr_29780_29801[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29774 === (3)))
{var inst_29771 = (state_29773[(2)]);var state_29773__$1 = state_29773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29773__$1,inst_29771);
} else
{if((state_val_29774 === (2)))
{var inst_29745 = (state_29773[(10)]);var inst_29747 = cljs.core.count.call(null,inst_29745);var inst_29748 = (inst_29747 > (0));var state_29773__$1 = state_29773;if(cljs.core.truth_(inst_29748))
{var statearr_29782_29802 = state_29773__$1;(statearr_29782_29802[(1)] = (4));
} else
{var statearr_29783_29803 = state_29773__$1;(statearr_29783_29803[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29774 === (11)))
{var inst_29745 = (state_29773[(10)]);var inst_29762 = (state_29773[(2)]);var tmp29781 = inst_29745;var inst_29745__$1 = tmp29781;var state_29773__$1 = (function (){var statearr_29784 = state_29773;(statearr_29784[(11)] = inst_29762);
(statearr_29784[(10)] = inst_29745__$1);
return statearr_29784;
})();var statearr_29785_29804 = state_29773__$1;(statearr_29785_29804[(2)] = null);
(statearr_29785_29804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29774 === (9)))
{var inst_29753 = (state_29773[(8)]);var state_29773__$1 = state_29773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29773__$1,(11),out,inst_29753);
} else
{if((state_val_29774 === (5)))
{var inst_29767 = cljs.core.async.close_BANG_.call(null,out);var state_29773__$1 = state_29773;var statearr_29786_29805 = state_29773__$1;(statearr_29786_29805[(2)] = inst_29767);
(statearr_29786_29805[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29774 === (10)))
{var inst_29765 = (state_29773[(2)]);var state_29773__$1 = state_29773;var statearr_29787_29806 = state_29773__$1;(statearr_29787_29806[(2)] = inst_29765);
(statearr_29787_29806[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29774 === (8)))
{var inst_29752 = (state_29773[(7)]);var inst_29754 = (state_29773[(9)]);var inst_29745 = (state_29773[(10)]);var inst_29753 = (state_29773[(8)]);var inst_29757 = (function (){var c = inst_29754;var v = inst_29753;var vec__29750 = inst_29752;var cs = inst_29745;return ((function (c,v,vec__29750,cs,inst_29752,inst_29754,inst_29745,inst_29753,state_val_29774,c__5691__auto___29797,out){
return (function (p1__29690_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29690_SHARP_);
});
;})(c,v,vec__29750,cs,inst_29752,inst_29754,inst_29745,inst_29753,state_val_29774,c__5691__auto___29797,out))
})();var inst_29758 = cljs.core.filterv.call(null,inst_29757,inst_29745);var inst_29745__$1 = inst_29758;var state_29773__$1 = (function (){var statearr_29788 = state_29773;(statearr_29788[(10)] = inst_29745__$1);
return statearr_29788;
})();var statearr_29789_29807 = state_29773__$1;(statearr_29789_29807[(2)] = null);
(statearr_29789_29807[(1)] = (2));
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
});})(c__5691__auto___29797,out))
;return ((function (switch__5676__auto__,c__5691__auto___29797,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_29793 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29793[(0)] = state_machine__5677__auto__);
(statearr_29793[(1)] = (1));
return statearr_29793;
});
var state_machine__5677__auto____1 = (function (state_29773){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_29773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e29794){if((e29794 instanceof Object))
{var ex__5680__auto__ = e29794;var statearr_29795_29808 = state_29773;(statearr_29795_29808[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29773);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29809 = state_29773;
state_29773 = G__29809;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_29773){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_29773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___29797,out))
})();var state__5693__auto__ = (function (){var statearr_29796 = f__5692__auto__.call(null);(statearr_29796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___29797);
return statearr_29796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___29797,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___29902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___29902,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___29902,out){
return (function (state_29879){var state_val_29880 = (state_29879[(1)]);if((state_val_29880 === (7)))
{var inst_29861 = (state_29879[(7)]);var inst_29861__$1 = (state_29879[(2)]);var inst_29862 = (inst_29861__$1 == null);var inst_29863 = cljs.core.not.call(null,inst_29862);var state_29879__$1 = (function (){var statearr_29881 = state_29879;(statearr_29881[(7)] = inst_29861__$1);
return statearr_29881;
})();if(inst_29863)
{var statearr_29882_29903 = state_29879__$1;(statearr_29882_29903[(1)] = (8));
} else
{var statearr_29883_29904 = state_29879__$1;(statearr_29883_29904[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29880 === (1)))
{var inst_29856 = (0);var state_29879__$1 = (function (){var statearr_29884 = state_29879;(statearr_29884[(8)] = inst_29856);
return statearr_29884;
})();var statearr_29885_29905 = state_29879__$1;(statearr_29885_29905[(2)] = null);
(statearr_29885_29905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29880 === (4)))
{var state_29879__$1 = state_29879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29879__$1,(7),ch);
} else
{if((state_val_29880 === (6)))
{var inst_29874 = (state_29879[(2)]);var state_29879__$1 = state_29879;var statearr_29886_29906 = state_29879__$1;(statearr_29886_29906[(2)] = inst_29874);
(statearr_29886_29906[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29880 === (3)))
{var inst_29876 = (state_29879[(2)]);var inst_29877 = cljs.core.async.close_BANG_.call(null,out);var state_29879__$1 = (function (){var statearr_29887 = state_29879;(statearr_29887[(9)] = inst_29876);
return statearr_29887;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29879__$1,inst_29877);
} else
{if((state_val_29880 === (2)))
{var inst_29856 = (state_29879[(8)]);var inst_29858 = (inst_29856 < n);var state_29879__$1 = state_29879;if(cljs.core.truth_(inst_29858))
{var statearr_29888_29907 = state_29879__$1;(statearr_29888_29907[(1)] = (4));
} else
{var statearr_29889_29908 = state_29879__$1;(statearr_29889_29908[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29880 === (11)))
{var inst_29856 = (state_29879[(8)]);var inst_29866 = (state_29879[(2)]);var inst_29867 = (inst_29856 + (1));var inst_29856__$1 = inst_29867;var state_29879__$1 = (function (){var statearr_29890 = state_29879;(statearr_29890[(10)] = inst_29866);
(statearr_29890[(8)] = inst_29856__$1);
return statearr_29890;
})();var statearr_29891_29909 = state_29879__$1;(statearr_29891_29909[(2)] = null);
(statearr_29891_29909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29880 === (9)))
{var state_29879__$1 = state_29879;var statearr_29892_29910 = state_29879__$1;(statearr_29892_29910[(2)] = null);
(statearr_29892_29910[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29880 === (5)))
{var state_29879__$1 = state_29879;var statearr_29893_29911 = state_29879__$1;(statearr_29893_29911[(2)] = null);
(statearr_29893_29911[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29880 === (10)))
{var inst_29871 = (state_29879[(2)]);var state_29879__$1 = state_29879;var statearr_29894_29912 = state_29879__$1;(statearr_29894_29912[(2)] = inst_29871);
(statearr_29894_29912[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29880 === (8)))
{var inst_29861 = (state_29879[(7)]);var state_29879__$1 = state_29879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29879__$1,(11),out,inst_29861);
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
});})(c__5691__auto___29902,out))
;return ((function (switch__5676__auto__,c__5691__auto___29902,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_29898 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29898[(0)] = state_machine__5677__auto__);
(statearr_29898[(1)] = (1));
return statearr_29898;
});
var state_machine__5677__auto____1 = (function (state_29879){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_29879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e29899){if((e29899 instanceof Object))
{var ex__5680__auto__ = e29899;var statearr_29900_29913 = state_29879;(statearr_29900_29913[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29914 = state_29879;
state_29879 = G__29914;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_29879){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_29879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___29902,out))
})();var state__5693__auto__ = (function (){var statearr_29901 = f__5692__auto__.call(null);(statearr_29901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___29902);
return statearr_29901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___29902,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___30011 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___30011,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___30011,out){
return (function (state_29986){var state_val_29987 = (state_29986[(1)]);if((state_val_29987 === (7)))
{var inst_29981 = (state_29986[(2)]);var state_29986__$1 = state_29986;var statearr_29988_30012 = state_29986__$1;(statearr_29988_30012[(2)] = inst_29981);
(statearr_29988_30012[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (1)))
{var inst_29963 = null;var state_29986__$1 = (function (){var statearr_29989 = state_29986;(statearr_29989[(7)] = inst_29963);
return statearr_29989;
})();var statearr_29990_30013 = state_29986__$1;(statearr_29990_30013[(2)] = null);
(statearr_29990_30013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (4)))
{var inst_29966 = (state_29986[(8)]);var inst_29966__$1 = (state_29986[(2)]);var inst_29967 = (inst_29966__$1 == null);var inst_29968 = cljs.core.not.call(null,inst_29967);var state_29986__$1 = (function (){var statearr_29991 = state_29986;(statearr_29991[(8)] = inst_29966__$1);
return statearr_29991;
})();if(inst_29968)
{var statearr_29992_30014 = state_29986__$1;(statearr_29992_30014[(1)] = (5));
} else
{var statearr_29993_30015 = state_29986__$1;(statearr_29993_30015[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (6)))
{var state_29986__$1 = state_29986;var statearr_29994_30016 = state_29986__$1;(statearr_29994_30016[(2)] = null);
(statearr_29994_30016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (3)))
{var inst_29983 = (state_29986[(2)]);var inst_29984 = cljs.core.async.close_BANG_.call(null,out);var state_29986__$1 = (function (){var statearr_29995 = state_29986;(statearr_29995[(9)] = inst_29983);
return statearr_29995;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29986__$1,inst_29984);
} else
{if((state_val_29987 === (2)))
{var state_29986__$1 = state_29986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29986__$1,(4),ch);
} else
{if((state_val_29987 === (11)))
{var inst_29966 = (state_29986[(8)]);var inst_29975 = (state_29986[(2)]);var inst_29963 = inst_29966;var state_29986__$1 = (function (){var statearr_29996 = state_29986;(statearr_29996[(10)] = inst_29975);
(statearr_29996[(7)] = inst_29963);
return statearr_29996;
})();var statearr_29997_30017 = state_29986__$1;(statearr_29997_30017[(2)] = null);
(statearr_29997_30017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (9)))
{var inst_29966 = (state_29986[(8)]);var state_29986__$1 = state_29986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29986__$1,(11),out,inst_29966);
} else
{if((state_val_29987 === (5)))
{var inst_29966 = (state_29986[(8)]);var inst_29963 = (state_29986[(7)]);var inst_29970 = cljs.core._EQ_.call(null,inst_29966,inst_29963);var state_29986__$1 = state_29986;if(inst_29970)
{var statearr_29999_30018 = state_29986__$1;(statearr_29999_30018[(1)] = (8));
} else
{var statearr_30000_30019 = state_29986__$1;(statearr_30000_30019[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (10)))
{var inst_29978 = (state_29986[(2)]);var state_29986__$1 = state_29986;var statearr_30001_30020 = state_29986__$1;(statearr_30001_30020[(2)] = inst_29978);
(statearr_30001_30020[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (8)))
{var inst_29963 = (state_29986[(7)]);var tmp29998 = inst_29963;var inst_29963__$1 = tmp29998;var state_29986__$1 = (function (){var statearr_30002 = state_29986;(statearr_30002[(7)] = inst_29963__$1);
return statearr_30002;
})();var statearr_30003_30021 = state_29986__$1;(statearr_30003_30021[(2)] = null);
(statearr_30003_30021[(1)] = (2));
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
});})(c__5691__auto___30011,out))
;return ((function (switch__5676__auto__,c__5691__auto___30011,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_30007 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30007[(0)] = state_machine__5677__auto__);
(statearr_30007[(1)] = (1));
return statearr_30007;
});
var state_machine__5677__auto____1 = (function (state_29986){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_29986);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e30008){if((e30008 instanceof Object))
{var ex__5680__auto__ = e30008;var statearr_30009_30022 = state_29986;(statearr_30009_30022[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30023 = state_29986;
state_29986 = G__30023;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_29986){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_29986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___30011,out))
})();var state__5693__auto__ = (function (){var statearr_30010 = f__5692__auto__.call(null);(statearr_30010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___30011);
return statearr_30010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___30011,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___30158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___30158,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___30158,out){
return (function (state_30128){var state_val_30129 = (state_30128[(1)]);if((state_val_30129 === (7)))
{var inst_30124 = (state_30128[(2)]);var state_30128__$1 = state_30128;var statearr_30130_30159 = state_30128__$1;(statearr_30130_30159[(2)] = inst_30124);
(statearr_30130_30159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (1)))
{var inst_30091 = (new Array(n));var inst_30092 = inst_30091;var inst_30093 = (0);var state_30128__$1 = (function (){var statearr_30131 = state_30128;(statearr_30131[(7)] = inst_30093);
(statearr_30131[(8)] = inst_30092);
return statearr_30131;
})();var statearr_30132_30160 = state_30128__$1;(statearr_30132_30160[(2)] = null);
(statearr_30132_30160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (4)))
{var inst_30096 = (state_30128[(9)]);var inst_30096__$1 = (state_30128[(2)]);var inst_30097 = (inst_30096__$1 == null);var inst_30098 = cljs.core.not.call(null,inst_30097);var state_30128__$1 = (function (){var statearr_30133 = state_30128;(statearr_30133[(9)] = inst_30096__$1);
return statearr_30133;
})();if(inst_30098)
{var statearr_30134_30161 = state_30128__$1;(statearr_30134_30161[(1)] = (5));
} else
{var statearr_30135_30162 = state_30128__$1;(statearr_30135_30162[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (15)))
{var inst_30118 = (state_30128[(2)]);var state_30128__$1 = state_30128;var statearr_30136_30163 = state_30128__$1;(statearr_30136_30163[(2)] = inst_30118);
(statearr_30136_30163[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (13)))
{var state_30128__$1 = state_30128;var statearr_30137_30164 = state_30128__$1;(statearr_30137_30164[(2)] = null);
(statearr_30137_30164[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (6)))
{var inst_30093 = (state_30128[(7)]);var inst_30114 = (inst_30093 > (0));var state_30128__$1 = state_30128;if(cljs.core.truth_(inst_30114))
{var statearr_30138_30165 = state_30128__$1;(statearr_30138_30165[(1)] = (12));
} else
{var statearr_30139_30166 = state_30128__$1;(statearr_30139_30166[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (3)))
{var inst_30126 = (state_30128[(2)]);var state_30128__$1 = state_30128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30128__$1,inst_30126);
} else
{if((state_val_30129 === (12)))
{var inst_30092 = (state_30128[(8)]);var inst_30116 = cljs.core.vec.call(null,inst_30092);var state_30128__$1 = state_30128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30128__$1,(15),out,inst_30116);
} else
{if((state_val_30129 === (2)))
{var state_30128__$1 = state_30128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30128__$1,(4),ch);
} else
{if((state_val_30129 === (11)))
{var inst_30108 = (state_30128[(2)]);var inst_30109 = (new Array(n));var inst_30092 = inst_30109;var inst_30093 = (0);var state_30128__$1 = (function (){var statearr_30140 = state_30128;(statearr_30140[(7)] = inst_30093);
(statearr_30140[(10)] = inst_30108);
(statearr_30140[(8)] = inst_30092);
return statearr_30140;
})();var statearr_30141_30167 = state_30128__$1;(statearr_30141_30167[(2)] = null);
(statearr_30141_30167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (9)))
{var inst_30092 = (state_30128[(8)]);var inst_30106 = cljs.core.vec.call(null,inst_30092);var state_30128__$1 = state_30128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30128__$1,(11),out,inst_30106);
} else
{if((state_val_30129 === (5)))
{var inst_30093 = (state_30128[(7)]);var inst_30096 = (state_30128[(9)]);var inst_30092 = (state_30128[(8)]);var inst_30101 = (state_30128[(11)]);var inst_30100 = (inst_30092[inst_30093] = inst_30096);var inst_30101__$1 = (inst_30093 + (1));var inst_30102 = (inst_30101__$1 < n);var state_30128__$1 = (function (){var statearr_30142 = state_30128;(statearr_30142[(12)] = inst_30100);
(statearr_30142[(11)] = inst_30101__$1);
return statearr_30142;
})();if(cljs.core.truth_(inst_30102))
{var statearr_30143_30168 = state_30128__$1;(statearr_30143_30168[(1)] = (8));
} else
{var statearr_30144_30169 = state_30128__$1;(statearr_30144_30169[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (14)))
{var inst_30121 = (state_30128[(2)]);var inst_30122 = cljs.core.async.close_BANG_.call(null,out);var state_30128__$1 = (function (){var statearr_30146 = state_30128;(statearr_30146[(13)] = inst_30121);
return statearr_30146;
})();var statearr_30147_30170 = state_30128__$1;(statearr_30147_30170[(2)] = inst_30122);
(statearr_30147_30170[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (10)))
{var inst_30112 = (state_30128[(2)]);var state_30128__$1 = state_30128;var statearr_30148_30171 = state_30128__$1;(statearr_30148_30171[(2)] = inst_30112);
(statearr_30148_30171[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30129 === (8)))
{var inst_30092 = (state_30128[(8)]);var inst_30101 = (state_30128[(11)]);var tmp30145 = inst_30092;var inst_30092__$1 = tmp30145;var inst_30093 = inst_30101;var state_30128__$1 = (function (){var statearr_30149 = state_30128;(statearr_30149[(7)] = inst_30093);
(statearr_30149[(8)] = inst_30092__$1);
return statearr_30149;
})();var statearr_30150_30172 = state_30128__$1;(statearr_30150_30172[(2)] = null);
(statearr_30150_30172[(1)] = (2));
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
});})(c__5691__auto___30158,out))
;return ((function (switch__5676__auto__,c__5691__auto___30158,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_30154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30154[(0)] = state_machine__5677__auto__);
(statearr_30154[(1)] = (1));
return statearr_30154;
});
var state_machine__5677__auto____1 = (function (state_30128){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_30128);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e30155){if((e30155 instanceof Object))
{var ex__5680__auto__ = e30155;var statearr_30156_30173 = state_30128;(statearr_30156_30173[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30174 = state_30128;
state_30128 = G__30174;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_30128){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_30128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___30158,out))
})();var state__5693__auto__ = (function (){var statearr_30157 = f__5692__auto__.call(null);(statearr_30157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___30158);
return statearr_30157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___30158,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___30317 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___30317,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___30317,out){
return (function (state_30287){var state_val_30288 = (state_30287[(1)]);if((state_val_30288 === (7)))
{var inst_30283 = (state_30287[(2)]);var state_30287__$1 = state_30287;var statearr_30289_30318 = state_30287__$1;(statearr_30289_30318[(2)] = inst_30283);
(statearr_30289_30318[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (1)))
{var inst_30246 = [];var inst_30247 = inst_30246;var inst_30248 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30287__$1 = (function (){var statearr_30290 = state_30287;(statearr_30290[(7)] = inst_30247);
(statearr_30290[(8)] = inst_30248);
return statearr_30290;
})();var statearr_30291_30319 = state_30287__$1;(statearr_30291_30319[(2)] = null);
(statearr_30291_30319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (4)))
{var inst_30251 = (state_30287[(9)]);var inst_30251__$1 = (state_30287[(2)]);var inst_30252 = (inst_30251__$1 == null);var inst_30253 = cljs.core.not.call(null,inst_30252);var state_30287__$1 = (function (){var statearr_30292 = state_30287;(statearr_30292[(9)] = inst_30251__$1);
return statearr_30292;
})();if(inst_30253)
{var statearr_30293_30320 = state_30287__$1;(statearr_30293_30320[(1)] = (5));
} else
{var statearr_30294_30321 = state_30287__$1;(statearr_30294_30321[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (15)))
{var inst_30277 = (state_30287[(2)]);var state_30287__$1 = state_30287;var statearr_30295_30322 = state_30287__$1;(statearr_30295_30322[(2)] = inst_30277);
(statearr_30295_30322[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (13)))
{var state_30287__$1 = state_30287;var statearr_30296_30323 = state_30287__$1;(statearr_30296_30323[(2)] = null);
(statearr_30296_30323[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (6)))
{var inst_30247 = (state_30287[(7)]);var inst_30272 = inst_30247.length;var inst_30273 = (inst_30272 > (0));var state_30287__$1 = state_30287;if(cljs.core.truth_(inst_30273))
{var statearr_30297_30324 = state_30287__$1;(statearr_30297_30324[(1)] = (12));
} else
{var statearr_30298_30325 = state_30287__$1;(statearr_30298_30325[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (3)))
{var inst_30285 = (state_30287[(2)]);var state_30287__$1 = state_30287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30287__$1,inst_30285);
} else
{if((state_val_30288 === (12)))
{var inst_30247 = (state_30287[(7)]);var inst_30275 = cljs.core.vec.call(null,inst_30247);var state_30287__$1 = state_30287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30287__$1,(15),out,inst_30275);
} else
{if((state_val_30288 === (2)))
{var state_30287__$1 = state_30287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30287__$1,(4),ch);
} else
{if((state_val_30288 === (11)))
{var inst_30255 = (state_30287[(10)]);var inst_30251 = (state_30287[(9)]);var inst_30265 = (state_30287[(2)]);var inst_30266 = [];var inst_30267 = inst_30266.push(inst_30251);var inst_30247 = inst_30266;var inst_30248 = inst_30255;var state_30287__$1 = (function (){var statearr_30299 = state_30287;(statearr_30299[(7)] = inst_30247);
(statearr_30299[(11)] = inst_30265);
(statearr_30299[(8)] = inst_30248);
(statearr_30299[(12)] = inst_30267);
return statearr_30299;
})();var statearr_30300_30326 = state_30287__$1;(statearr_30300_30326[(2)] = null);
(statearr_30300_30326[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (9)))
{var inst_30247 = (state_30287[(7)]);var inst_30263 = cljs.core.vec.call(null,inst_30247);var state_30287__$1 = state_30287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30287__$1,(11),out,inst_30263);
} else
{if((state_val_30288 === (5)))
{var inst_30255 = (state_30287[(10)]);var inst_30251 = (state_30287[(9)]);var inst_30248 = (state_30287[(8)]);var inst_30255__$1 = f.call(null,inst_30251);var inst_30256 = cljs.core._EQ_.call(null,inst_30255__$1,inst_30248);var inst_30257 = cljs.core.keyword_identical_QMARK_.call(null,inst_30248,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_30258 = (inst_30256) || (inst_30257);var state_30287__$1 = (function (){var statearr_30301 = state_30287;(statearr_30301[(10)] = inst_30255__$1);
return statearr_30301;
})();if(cljs.core.truth_(inst_30258))
{var statearr_30302_30327 = state_30287__$1;(statearr_30302_30327[(1)] = (8));
} else
{var statearr_30303_30328 = state_30287__$1;(statearr_30303_30328[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (14)))
{var inst_30280 = (state_30287[(2)]);var inst_30281 = cljs.core.async.close_BANG_.call(null,out);var state_30287__$1 = (function (){var statearr_30305 = state_30287;(statearr_30305[(13)] = inst_30280);
return statearr_30305;
})();var statearr_30306_30329 = state_30287__$1;(statearr_30306_30329[(2)] = inst_30281);
(statearr_30306_30329[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (10)))
{var inst_30270 = (state_30287[(2)]);var state_30287__$1 = state_30287;var statearr_30307_30330 = state_30287__$1;(statearr_30307_30330[(2)] = inst_30270);
(statearr_30307_30330[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (8)))
{var inst_30255 = (state_30287[(10)]);var inst_30251 = (state_30287[(9)]);var inst_30247 = (state_30287[(7)]);var inst_30260 = inst_30247.push(inst_30251);var tmp30304 = inst_30247;var inst_30247__$1 = tmp30304;var inst_30248 = inst_30255;var state_30287__$1 = (function (){var statearr_30308 = state_30287;(statearr_30308[(7)] = inst_30247__$1);
(statearr_30308[(14)] = inst_30260);
(statearr_30308[(8)] = inst_30248);
return statearr_30308;
})();var statearr_30309_30331 = state_30287__$1;(statearr_30309_30331[(2)] = null);
(statearr_30309_30331[(1)] = (2));
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
});})(c__5691__auto___30317,out))
;return ((function (switch__5676__auto__,c__5691__auto___30317,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_30313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30313[(0)] = state_machine__5677__auto__);
(statearr_30313[(1)] = (1));
return statearr_30313;
});
var state_machine__5677__auto____1 = (function (state_30287){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_30287);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e30314){if((e30314 instanceof Object))
{var ex__5680__auto__ = e30314;var statearr_30315_30332 = state_30287;(statearr_30315_30332[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30333 = state_30287;
state_30287 = G__30333;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_30287){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_30287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___30317,out))
})();var state__5693__auto__ = (function (){var statearr_30316 = f__5692__auto__.call(null);(statearr_30316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___30317);
return statearr_30316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___30317,out))
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
