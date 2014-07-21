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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15743 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15743 = (function (f,fn_handler,meta15744){
this.f = f;
this.fn_handler = fn_handler;
this.meta15744 = meta15744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15743.cljs$lang$type = true;
cljs.core.async.t15743.cljs$lang$ctorStr = "cljs.core.async/t15743";
cljs.core.async.t15743.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15743");
});
cljs.core.async.t15743.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15745){var self__ = this;
var _15745__$1 = this;return self__.meta15744;
});
cljs.core.async.t15743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15745,meta15744__$1){var self__ = this;
var _15745__$1 = this;return (new cljs.core.async.t15743(self__.f,self__.fn_handler,meta15744__$1));
});
cljs.core.async.__GT_t15743 = (function __GT_t15743(f__$1,fn_handler__$1,meta15744){return (new cljs.core.async.t15743(f__$1,fn_handler__$1,meta15744));
});
}
return (new cljs.core.async.t15743(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15747 = buff;if(G__15747)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15747.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15747.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15747);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15747);
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
{var val_15748 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15748);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15748,ret){
return (function (){return fn1.call(null,val_15748);
});})(val_15748,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___15749 = n;var x_15750 = (0);while(true){
if((x_15750 < n__4399__auto___15749))
{(a[x_15750] = (0));
{
var G__15751 = (x_15750 + (1));
x_15750 = G__15751;
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
var G__15752 = (i + (1));
i = G__15752;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15756 = (function (flag,alt_flag,meta15757){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15757 = meta15757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15756.cljs$lang$type = true;
cljs.core.async.t15756.cljs$lang$ctorStr = "cljs.core.async/t15756";
cljs.core.async.t15756.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15756");
});})(flag))
;
cljs.core.async.t15756.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15758){var self__ = this;
var _15758__$1 = this;return self__.meta15757;
});})(flag))
;
cljs.core.async.t15756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15758,meta15757__$1){var self__ = this;
var _15758__$1 = this;return (new cljs.core.async.t15756(self__.flag,self__.alt_flag,meta15757__$1));
});})(flag))
;
cljs.core.async.__GT_t15756 = ((function (flag){
return (function __GT_t15756(flag__$1,alt_flag__$1,meta15757){return (new cljs.core.async.t15756(flag__$1,alt_flag__$1,meta15757));
});})(flag))
;
}
return (new cljs.core.async.t15756(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15762 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15762 = (function (cb,flag,alt_handler,meta15763){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15763 = meta15763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15762.cljs$lang$type = true;
cljs.core.async.t15762.cljs$lang$ctorStr = "cljs.core.async/t15762";
cljs.core.async.t15762.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15762");
});
cljs.core.async.t15762.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15764){var self__ = this;
var _15764__$1 = this;return self__.meta15763;
});
cljs.core.async.t15762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15764,meta15763__$1){var self__ = this;
var _15764__$1 = this;return (new cljs.core.async.t15762(self__.cb,self__.flag,self__.alt_handler,meta15763__$1));
});
cljs.core.async.__GT_t15762 = (function __GT_t15762(cb__$1,flag__$1,alt_handler__$1,meta15763){return (new cljs.core.async.t15762(cb__$1,flag__$1,alt_handler__$1,meta15763));
});
}
return (new cljs.core.async.t15762(cb,flag,alt_handler,null));
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
return (function (p1__15765_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15765_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15766 = (i + (1));
i = G__15766;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
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
var alts_BANG___delegate = function (ports,p__15767){var map__15769 = p__15767;var map__15769__$1 = ((cljs.core.seq_QMARK_.call(null,map__15769))?cljs.core.apply.call(null,cljs.core.hash_map,map__15769):map__15769);var opts = map__15769__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15767 = null;if (arguments.length > 1) {
  p__15767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15767);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15770){
var ports = cljs.core.first(arglist__15770);
var p__15767 = cljs.core.rest(arglist__15770);
return alts_BANG___delegate(ports,p__15767);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15778 = (function (ch,f,map_LT_,meta15779){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15779 = meta15779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15778.cljs$lang$type = true;
cljs.core.async.t15778.cljs$lang$ctorStr = "cljs.core.async/t15778";
cljs.core.async.t15778.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15778");
});
cljs.core.async.t15778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15781 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15781 = (function (fn1,_,meta15779,ch,f,map_LT_,meta15782){
this.fn1 = fn1;
this._ = _;
this.meta15779 = meta15779;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15782 = meta15782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15781.cljs$lang$type = true;
cljs.core.async.t15781.cljs$lang$ctorStr = "cljs.core.async/t15781";
cljs.core.async.t15781.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15781");
});})(___$1))
;
cljs.core.async.t15781.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15781.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15771_SHARP_){return f1.call(null,(((p1__15771_SHARP_ == null))?null:self__.f.call(null,p1__15771_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15783){var self__ = this;
var _15783__$1 = this;return self__.meta15782;
});})(___$1))
;
cljs.core.async.t15781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15783,meta15782__$1){var self__ = this;
var _15783__$1 = this;return (new cljs.core.async.t15781(self__.fn1,self__._,self__.meta15779,self__.ch,self__.f,self__.map_LT_,meta15782__$1));
});})(___$1))
;
cljs.core.async.__GT_t15781 = ((function (___$1){
return (function __GT_t15781(fn1__$1,___$2,meta15779__$1,ch__$2,f__$2,map_LT___$2,meta15782){return (new cljs.core.async.t15781(fn1__$1,___$2,meta15779__$1,ch__$2,f__$2,map_LT___$2,meta15782));
});})(___$1))
;
}
return (new cljs.core.async.t15781(fn1,___$1,self__.meta15779,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15778.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15780){var self__ = this;
var _15780__$1 = this;return self__.meta15779;
});
cljs.core.async.t15778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15780,meta15779__$1){var self__ = this;
var _15780__$1 = this;return (new cljs.core.async.t15778(self__.ch,self__.f,self__.map_LT_,meta15779__$1));
});
cljs.core.async.__GT_t15778 = (function __GT_t15778(ch__$1,f__$1,map_LT___$1,meta15779){return (new cljs.core.async.t15778(ch__$1,f__$1,map_LT___$1,meta15779));
});
}
return (new cljs.core.async.t15778(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15787 = (function (ch,f,map_GT_,meta15788){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15788 = meta15788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15787.cljs$lang$type = true;
cljs.core.async.t15787.cljs$lang$ctorStr = "cljs.core.async/t15787";
cljs.core.async.t15787.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15787");
});
cljs.core.async.t15787.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15787.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15787.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15789){var self__ = this;
var _15789__$1 = this;return self__.meta15788;
});
cljs.core.async.t15787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15789,meta15788__$1){var self__ = this;
var _15789__$1 = this;return (new cljs.core.async.t15787(self__.ch,self__.f,self__.map_GT_,meta15788__$1));
});
cljs.core.async.__GT_t15787 = (function __GT_t15787(ch__$1,f__$1,map_GT___$1,meta15788){return (new cljs.core.async.t15787(ch__$1,f__$1,map_GT___$1,meta15788));
});
}
return (new cljs.core.async.t15787(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15793 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15793 = (function (ch,p,filter_GT_,meta15794){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15794 = meta15794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15793.cljs$lang$type = true;
cljs.core.async.t15793.cljs$lang$ctorStr = "cljs.core.async/t15793";
cljs.core.async.t15793.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15793");
});
cljs.core.async.t15793.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15793.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15793.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15795){var self__ = this;
var _15795__$1 = this;return self__.meta15794;
});
cljs.core.async.t15793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15795,meta15794__$1){var self__ = this;
var _15795__$1 = this;return (new cljs.core.async.t15793(self__.ch,self__.p,self__.filter_GT_,meta15794__$1));
});
cljs.core.async.__GT_t15793 = (function __GT_t15793(ch__$1,p__$1,filter_GT___$1,meta15794){return (new cljs.core.async.t15793(ch__$1,p__$1,filter_GT___$1,meta15794));
});
}
return (new cljs.core.async.t15793(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___15878 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15878,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15878,out){
return (function (state_15857){var state_val_15858 = (state_15857[(1)]);if((state_val_15858 === (7)))
{var inst_15853 = (state_15857[(2)]);var state_15857__$1 = state_15857;var statearr_15859_15879 = state_15857__$1;(statearr_15859_15879[(2)] = inst_15853);
(statearr_15859_15879[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15858 === (1)))
{var state_15857__$1 = state_15857;var statearr_15860_15880 = state_15857__$1;(statearr_15860_15880[(2)] = null);
(statearr_15860_15880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15858 === (4)))
{var inst_15839 = (state_15857[(7)]);var inst_15839__$1 = (state_15857[(2)]);var inst_15840 = (inst_15839__$1 == null);var state_15857__$1 = (function (){var statearr_15861 = state_15857;(statearr_15861[(7)] = inst_15839__$1);
return statearr_15861;
})();if(cljs.core.truth_(inst_15840))
{var statearr_15862_15881 = state_15857__$1;(statearr_15862_15881[(1)] = (5));
} else
{var statearr_15863_15882 = state_15857__$1;(statearr_15863_15882[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15858 === (6)))
{var inst_15839 = (state_15857[(7)]);var inst_15844 = p.call(null,inst_15839);var state_15857__$1 = state_15857;if(cljs.core.truth_(inst_15844))
{var statearr_15864_15883 = state_15857__$1;(statearr_15864_15883[(1)] = (8));
} else
{var statearr_15865_15884 = state_15857__$1;(statearr_15865_15884[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15858 === (3)))
{var inst_15855 = (state_15857[(2)]);var state_15857__$1 = state_15857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15857__$1,inst_15855);
} else
{if((state_val_15858 === (2)))
{var state_15857__$1 = state_15857;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15857__$1,(4),ch);
} else
{if((state_val_15858 === (11)))
{var inst_15847 = (state_15857[(2)]);var state_15857__$1 = state_15857;var statearr_15866_15885 = state_15857__$1;(statearr_15866_15885[(2)] = inst_15847);
(statearr_15866_15885[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15858 === (9)))
{var state_15857__$1 = state_15857;var statearr_15867_15886 = state_15857__$1;(statearr_15867_15886[(2)] = null);
(statearr_15867_15886[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15858 === (5)))
{var inst_15842 = cljs.core.async.close_BANG_.call(null,out);var state_15857__$1 = state_15857;var statearr_15868_15887 = state_15857__$1;(statearr_15868_15887[(2)] = inst_15842);
(statearr_15868_15887[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15858 === (10)))
{var inst_15850 = (state_15857[(2)]);var state_15857__$1 = (function (){var statearr_15869 = state_15857;(statearr_15869[(8)] = inst_15850);
return statearr_15869;
})();var statearr_15870_15888 = state_15857__$1;(statearr_15870_15888[(2)] = null);
(statearr_15870_15888[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15858 === (8)))
{var inst_15839 = (state_15857[(7)]);var state_15857__$1 = state_15857;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15857__$1,(11),out,inst_15839);
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
});})(c__5693__auto___15878,out))
;return ((function (switch__5678__auto__,c__5693__auto___15878,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15874 = [null,null,null,null,null,null,null,null,null];(statearr_15874[(0)] = state_machine__5679__auto__);
(statearr_15874[(1)] = (1));
return statearr_15874;
});
var state_machine__5679__auto____1 = (function (state_15857){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15857);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15875){if((e15875 instanceof Object))
{var ex__5682__auto__ = e15875;var statearr_15876_15889 = state_15857;(statearr_15876_15889[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15857);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15890 = state_15857;
state_15857 = G__15890;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15857){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15878,out))
})();var state__5695__auto__ = (function (){var statearr_15877 = f__5694__auto__.call(null);(statearr_15877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15878);
return statearr_15877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15878,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_16042){var state_val_16043 = (state_16042[(1)]);if((state_val_16043 === (7)))
{var inst_16038 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16044_16081 = state_16042__$1;(statearr_16044_16081[(2)] = inst_16038);
(statearr_16044_16081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (20)))
{var inst_16013 = (state_16042[(7)]);var inst_16024 = (state_16042[(2)]);var inst_16025 = cljs.core.next.call(null,inst_16013);var inst_15999 = inst_16025;var inst_16000 = null;var inst_16001 = (0);var inst_16002 = (0);var state_16042__$1 = (function (){var statearr_16045 = state_16042;(statearr_16045[(8)] = inst_15999);
(statearr_16045[(9)] = inst_16024);
(statearr_16045[(10)] = inst_16002);
(statearr_16045[(11)] = inst_16001);
(statearr_16045[(12)] = inst_16000);
return statearr_16045;
})();var statearr_16046_16082 = state_16042__$1;(statearr_16046_16082[(2)] = null);
(statearr_16046_16082[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (1)))
{var state_16042__$1 = state_16042;var statearr_16047_16083 = state_16042__$1;(statearr_16047_16083[(2)] = null);
(statearr_16047_16083[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (4)))
{var inst_15988 = (state_16042[(13)]);var inst_15988__$1 = (state_16042[(2)]);var inst_15989 = (inst_15988__$1 == null);var state_16042__$1 = (function (){var statearr_16051 = state_16042;(statearr_16051[(13)] = inst_15988__$1);
return statearr_16051;
})();if(cljs.core.truth_(inst_15989))
{var statearr_16052_16084 = state_16042__$1;(statearr_16052_16084[(1)] = (5));
} else
{var statearr_16053_16085 = state_16042__$1;(statearr_16053_16085[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (15)))
{var state_16042__$1 = state_16042;var statearr_16054_16086 = state_16042__$1;(statearr_16054_16086[(2)] = null);
(statearr_16054_16086[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (13)))
{var inst_15999 = (state_16042[(8)]);var inst_16002 = (state_16042[(10)]);var inst_16001 = (state_16042[(11)]);var inst_16000 = (state_16042[(12)]);var inst_16009 = (state_16042[(2)]);var inst_16010 = (inst_16002 + (1));var tmp16048 = inst_15999;var tmp16049 = inst_16001;var tmp16050 = inst_16000;var inst_15999__$1 = tmp16048;var inst_16000__$1 = tmp16050;var inst_16001__$1 = tmp16049;var inst_16002__$1 = inst_16010;var state_16042__$1 = (function (){var statearr_16055 = state_16042;(statearr_16055[(8)] = inst_15999__$1);
(statearr_16055[(10)] = inst_16002__$1);
(statearr_16055[(11)] = inst_16001__$1);
(statearr_16055[(12)] = inst_16000__$1);
(statearr_16055[(14)] = inst_16009);
return statearr_16055;
})();var statearr_16056_16087 = state_16042__$1;(statearr_16056_16087[(2)] = null);
(statearr_16056_16087[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (6)))
{var inst_15988 = (state_16042[(13)]);var inst_15993 = f.call(null,inst_15988);var inst_15998 = cljs.core.seq.call(null,inst_15993);var inst_15999 = inst_15998;var inst_16000 = null;var inst_16001 = (0);var inst_16002 = (0);var state_16042__$1 = (function (){var statearr_16057 = state_16042;(statearr_16057[(8)] = inst_15999);
(statearr_16057[(10)] = inst_16002);
(statearr_16057[(11)] = inst_16001);
(statearr_16057[(12)] = inst_16000);
return statearr_16057;
})();var statearr_16058_16088 = state_16042__$1;(statearr_16058_16088[(2)] = null);
(statearr_16058_16088[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (17)))
{var inst_16013 = (state_16042[(7)]);var inst_16017 = cljs.core.chunk_first.call(null,inst_16013);var inst_16018 = cljs.core.chunk_rest.call(null,inst_16013);var inst_16019 = cljs.core.count.call(null,inst_16017);var inst_15999 = inst_16018;var inst_16000 = inst_16017;var inst_16001 = inst_16019;var inst_16002 = (0);var state_16042__$1 = (function (){var statearr_16059 = state_16042;(statearr_16059[(8)] = inst_15999);
(statearr_16059[(10)] = inst_16002);
(statearr_16059[(11)] = inst_16001);
(statearr_16059[(12)] = inst_16000);
return statearr_16059;
})();var statearr_16060_16089 = state_16042__$1;(statearr_16060_16089[(2)] = null);
(statearr_16060_16089[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (3)))
{var inst_16040 = (state_16042[(2)]);var state_16042__$1 = state_16042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16042__$1,inst_16040);
} else
{if((state_val_16043 === (12)))
{var inst_16033 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16061_16090 = state_16042__$1;(statearr_16061_16090[(2)] = inst_16033);
(statearr_16061_16090[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (2)))
{var state_16042__$1 = state_16042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16042__$1,(4),in$);
} else
{if((state_val_16043 === (19)))
{var inst_16028 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16062_16091 = state_16042__$1;(statearr_16062_16091[(2)] = inst_16028);
(statearr_16062_16091[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (11)))
{var inst_15999 = (state_16042[(8)]);var inst_16013 = (state_16042[(7)]);var inst_16013__$1 = cljs.core.seq.call(null,inst_15999);var state_16042__$1 = (function (){var statearr_16063 = state_16042;(statearr_16063[(7)] = inst_16013__$1);
return statearr_16063;
})();if(inst_16013__$1)
{var statearr_16064_16092 = state_16042__$1;(statearr_16064_16092[(1)] = (14));
} else
{var statearr_16065_16093 = state_16042__$1;(statearr_16065_16093[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (9)))
{var inst_16035 = (state_16042[(2)]);var state_16042__$1 = (function (){var statearr_16066 = state_16042;(statearr_16066[(15)] = inst_16035);
return statearr_16066;
})();var statearr_16067_16094 = state_16042__$1;(statearr_16067_16094[(2)] = null);
(statearr_16067_16094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (5)))
{var inst_15991 = cljs.core.async.close_BANG_.call(null,out);var state_16042__$1 = state_16042;var statearr_16068_16095 = state_16042__$1;(statearr_16068_16095[(2)] = inst_15991);
(statearr_16068_16095[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (14)))
{var inst_16013 = (state_16042[(7)]);var inst_16015 = cljs.core.chunked_seq_QMARK_.call(null,inst_16013);var state_16042__$1 = state_16042;if(inst_16015)
{var statearr_16069_16096 = state_16042__$1;(statearr_16069_16096[(1)] = (17));
} else
{var statearr_16070_16097 = state_16042__$1;(statearr_16070_16097[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (16)))
{var inst_16031 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16071_16098 = state_16042__$1;(statearr_16071_16098[(2)] = inst_16031);
(statearr_16071_16098[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (10)))
{var inst_16002 = (state_16042[(10)]);var inst_16000 = (state_16042[(12)]);var inst_16007 = cljs.core._nth.call(null,inst_16000,inst_16002);var state_16042__$1 = state_16042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16042__$1,(13),out,inst_16007);
} else
{if((state_val_16043 === (18)))
{var inst_16013 = (state_16042[(7)]);var inst_16022 = cljs.core.first.call(null,inst_16013);var state_16042__$1 = state_16042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16042__$1,(20),out,inst_16022);
} else
{if((state_val_16043 === (8)))
{var inst_16002 = (state_16042[(10)]);var inst_16001 = (state_16042[(11)]);var inst_16004 = (inst_16002 < inst_16001);var inst_16005 = inst_16004;var state_16042__$1 = state_16042;if(cljs.core.truth_(inst_16005))
{var statearr_16072_16099 = state_16042__$1;(statearr_16072_16099[(1)] = (10));
} else
{var statearr_16073_16100 = state_16042__$1;(statearr_16073_16100[(1)] = (11));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16077[(0)] = state_machine__5679__auto__);
(statearr_16077[(1)] = (1));
return statearr_16077;
});
var state_machine__5679__auto____1 = (function (state_16042){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16078){if((e16078 instanceof Object))
{var ex__5682__auto__ = e16078;var statearr_16079_16101 = state_16042;(statearr_16079_16101[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16102 = state_16042;
state_16042 = G__16102;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16042){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_16080 = f__5694__auto__.call(null);(statearr_16080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_16080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___16183 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16183){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16183){
return (function (state_16162){var state_val_16163 = (state_16162[(1)]);if((state_val_16163 === (7)))
{var inst_16158 = (state_16162[(2)]);var state_16162__$1 = state_16162;var statearr_16164_16184 = state_16162__$1;(statearr_16164_16184[(2)] = inst_16158);
(statearr_16164_16184[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16163 === (1)))
{var state_16162__$1 = state_16162;var statearr_16165_16185 = state_16162__$1;(statearr_16165_16185[(2)] = null);
(statearr_16165_16185[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16163 === (4)))
{var inst_16145 = (state_16162[(7)]);var inst_16145__$1 = (state_16162[(2)]);var inst_16146 = (inst_16145__$1 == null);var state_16162__$1 = (function (){var statearr_16166 = state_16162;(statearr_16166[(7)] = inst_16145__$1);
return statearr_16166;
})();if(cljs.core.truth_(inst_16146))
{var statearr_16167_16186 = state_16162__$1;(statearr_16167_16186[(1)] = (5));
} else
{var statearr_16168_16187 = state_16162__$1;(statearr_16168_16187[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16163 === (6)))
{var inst_16145 = (state_16162[(7)]);var state_16162__$1 = state_16162;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16162__$1,(11),to,inst_16145);
} else
{if((state_val_16163 === (3)))
{var inst_16160 = (state_16162[(2)]);var state_16162__$1 = state_16162;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16162__$1,inst_16160);
} else
{if((state_val_16163 === (2)))
{var state_16162__$1 = state_16162;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16162__$1,(4),from);
} else
{if((state_val_16163 === (11)))
{var inst_16155 = (state_16162[(2)]);var state_16162__$1 = (function (){var statearr_16169 = state_16162;(statearr_16169[(8)] = inst_16155);
return statearr_16169;
})();var statearr_16170_16188 = state_16162__$1;(statearr_16170_16188[(2)] = null);
(statearr_16170_16188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16163 === (9)))
{var state_16162__$1 = state_16162;var statearr_16171_16189 = state_16162__$1;(statearr_16171_16189[(2)] = null);
(statearr_16171_16189[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16163 === (5)))
{var state_16162__$1 = state_16162;if(cljs.core.truth_(close_QMARK_))
{var statearr_16172_16190 = state_16162__$1;(statearr_16172_16190[(1)] = (8));
} else
{var statearr_16173_16191 = state_16162__$1;(statearr_16173_16191[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16163 === (10)))
{var inst_16152 = (state_16162[(2)]);var state_16162__$1 = state_16162;var statearr_16174_16192 = state_16162__$1;(statearr_16174_16192[(2)] = inst_16152);
(statearr_16174_16192[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16163 === (8)))
{var inst_16149 = cljs.core.async.close_BANG_.call(null,to);var state_16162__$1 = state_16162;var statearr_16175_16193 = state_16162__$1;(statearr_16175_16193[(2)] = inst_16149);
(statearr_16175_16193[(1)] = (10));
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
});})(c__5693__auto___16183))
;return ((function (switch__5678__auto__,c__5693__auto___16183){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16179 = [null,null,null,null,null,null,null,null,null];(statearr_16179[(0)] = state_machine__5679__auto__);
(statearr_16179[(1)] = (1));
return statearr_16179;
});
var state_machine__5679__auto____1 = (function (state_16162){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16162);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16180){if((e16180 instanceof Object))
{var ex__5682__auto__ = e16180;var statearr_16181_16194 = state_16162;(statearr_16181_16194[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16162);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16195 = state_16162;
state_16162 = G__16195;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16162){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16183))
})();var state__5695__auto__ = (function (){var statearr_16182 = f__5694__auto__.call(null);(statearr_16182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16183);
return statearr_16182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16183))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___16282 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16282,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16282,tc,fc){
return (function (state_16260){var state_val_16261 = (state_16260[(1)]);if((state_val_16261 === (7)))
{var inst_16256 = (state_16260[(2)]);var state_16260__$1 = state_16260;var statearr_16262_16283 = state_16260__$1;(statearr_16262_16283[(2)] = inst_16256);
(statearr_16262_16283[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16261 === (1)))
{var state_16260__$1 = state_16260;var statearr_16263_16284 = state_16260__$1;(statearr_16263_16284[(2)] = null);
(statearr_16263_16284[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16261 === (4)))
{var inst_16241 = (state_16260[(7)]);var inst_16241__$1 = (state_16260[(2)]);var inst_16242 = (inst_16241__$1 == null);var state_16260__$1 = (function (){var statearr_16264 = state_16260;(statearr_16264[(7)] = inst_16241__$1);
return statearr_16264;
})();if(cljs.core.truth_(inst_16242))
{var statearr_16265_16285 = state_16260__$1;(statearr_16265_16285[(1)] = (5));
} else
{var statearr_16266_16286 = state_16260__$1;(statearr_16266_16286[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16261 === (6)))
{var inst_16241 = (state_16260[(7)]);var inst_16247 = p.call(null,inst_16241);var state_16260__$1 = state_16260;if(cljs.core.truth_(inst_16247))
{var statearr_16267_16287 = state_16260__$1;(statearr_16267_16287[(1)] = (9));
} else
{var statearr_16268_16288 = state_16260__$1;(statearr_16268_16288[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16261 === (3)))
{var inst_16258 = (state_16260[(2)]);var state_16260__$1 = state_16260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16260__$1,inst_16258);
} else
{if((state_val_16261 === (2)))
{var state_16260__$1 = state_16260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16260__$1,(4),ch);
} else
{if((state_val_16261 === (11)))
{var inst_16241 = (state_16260[(7)]);var inst_16251 = (state_16260[(2)]);var state_16260__$1 = state_16260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16260__$1,(8),inst_16251,inst_16241);
} else
{if((state_val_16261 === (9)))
{var state_16260__$1 = state_16260;var statearr_16269_16289 = state_16260__$1;(statearr_16269_16289[(2)] = tc);
(statearr_16269_16289[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16261 === (5)))
{var inst_16244 = cljs.core.async.close_BANG_.call(null,tc);var inst_16245 = cljs.core.async.close_BANG_.call(null,fc);var state_16260__$1 = (function (){var statearr_16270 = state_16260;(statearr_16270[(8)] = inst_16244);
return statearr_16270;
})();var statearr_16271_16290 = state_16260__$1;(statearr_16271_16290[(2)] = inst_16245);
(statearr_16271_16290[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16261 === (10)))
{var state_16260__$1 = state_16260;var statearr_16272_16291 = state_16260__$1;(statearr_16272_16291[(2)] = fc);
(statearr_16272_16291[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16261 === (8)))
{var inst_16253 = (state_16260[(2)]);var state_16260__$1 = (function (){var statearr_16273 = state_16260;(statearr_16273[(9)] = inst_16253);
return statearr_16273;
})();var statearr_16274_16292 = state_16260__$1;(statearr_16274_16292[(2)] = null);
(statearr_16274_16292[(1)] = (2));
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
});})(c__5693__auto___16282,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___16282,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16278 = [null,null,null,null,null,null,null,null,null,null];(statearr_16278[(0)] = state_machine__5679__auto__);
(statearr_16278[(1)] = (1));
return statearr_16278;
});
var state_machine__5679__auto____1 = (function (state_16260){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16260);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16279){if((e16279 instanceof Object))
{var ex__5682__auto__ = e16279;var statearr_16280_16293 = state_16260;(statearr_16280_16293[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16260);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16294 = state_16260;
state_16260 = G__16294;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16260){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16282,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_16281 = f__5694__auto__.call(null);(statearr_16281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16282);
return statearr_16281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16282,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_16341){var state_val_16342 = (state_16341[(1)]);if((state_val_16342 === (7)))
{var inst_16337 = (state_16341[(2)]);var state_16341__$1 = state_16341;var statearr_16343_16359 = state_16341__$1;(statearr_16343_16359[(2)] = inst_16337);
(statearr_16343_16359[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16342 === (6)))
{var inst_16330 = (state_16341[(7)]);var inst_16327 = (state_16341[(8)]);var inst_16334 = f.call(null,inst_16327,inst_16330);var inst_16327__$1 = inst_16334;var state_16341__$1 = (function (){var statearr_16344 = state_16341;(statearr_16344[(8)] = inst_16327__$1);
return statearr_16344;
})();var statearr_16345_16360 = state_16341__$1;(statearr_16345_16360[(2)] = null);
(statearr_16345_16360[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16342 === (5)))
{var inst_16327 = (state_16341[(8)]);var state_16341__$1 = state_16341;var statearr_16346_16361 = state_16341__$1;(statearr_16346_16361[(2)] = inst_16327);
(statearr_16346_16361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16342 === (4)))
{var inst_16330 = (state_16341[(7)]);var inst_16330__$1 = (state_16341[(2)]);var inst_16331 = (inst_16330__$1 == null);var state_16341__$1 = (function (){var statearr_16347 = state_16341;(statearr_16347[(7)] = inst_16330__$1);
return statearr_16347;
})();if(cljs.core.truth_(inst_16331))
{var statearr_16348_16362 = state_16341__$1;(statearr_16348_16362[(1)] = (5));
} else
{var statearr_16349_16363 = state_16341__$1;(statearr_16349_16363[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16342 === (3)))
{var inst_16339 = (state_16341[(2)]);var state_16341__$1 = state_16341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16341__$1,inst_16339);
} else
{if((state_val_16342 === (2)))
{var state_16341__$1 = state_16341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16341__$1,(4),ch);
} else
{if((state_val_16342 === (1)))
{var inst_16327 = init;var state_16341__$1 = (function (){var statearr_16350 = state_16341;(statearr_16350[(8)] = inst_16327);
return statearr_16350;
})();var statearr_16351_16364 = state_16341__$1;(statearr_16351_16364[(2)] = null);
(statearr_16351_16364[(1)] = (2));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16355 = [null,null,null,null,null,null,null,null,null];(statearr_16355[(0)] = state_machine__5679__auto__);
(statearr_16355[(1)] = (1));
return statearr_16355;
});
var state_machine__5679__auto____1 = (function (state_16341){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16341);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16356){if((e16356 instanceof Object))
{var ex__5682__auto__ = e16356;var statearr_16357_16365 = state_16341;(statearr_16357_16365[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16366 = state_16341;
state_16341 = G__16366;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16341){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_16358 = f__5694__auto__.call(null);(statearr_16358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_16358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_16428){var state_val_16429 = (state_16428[(1)]);if((state_val_16429 === (7)))
{var inst_16409 = (state_16428[(7)]);var inst_16414 = (state_16428[(2)]);var inst_16415 = cljs.core.next.call(null,inst_16409);var inst_16409__$1 = inst_16415;var state_16428__$1 = (function (){var statearr_16430 = state_16428;(statearr_16430[(7)] = inst_16409__$1);
(statearr_16430[(8)] = inst_16414);
return statearr_16430;
})();var statearr_16431_16449 = state_16428__$1;(statearr_16431_16449[(2)] = null);
(statearr_16431_16449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16429 === (1)))
{var inst_16408 = cljs.core.seq.call(null,coll);var inst_16409 = inst_16408;var state_16428__$1 = (function (){var statearr_16432 = state_16428;(statearr_16432[(7)] = inst_16409);
return statearr_16432;
})();var statearr_16433_16450 = state_16428__$1;(statearr_16433_16450[(2)] = null);
(statearr_16433_16450[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16429 === (4)))
{var inst_16409 = (state_16428[(7)]);var inst_16412 = cljs.core.first.call(null,inst_16409);var state_16428__$1 = state_16428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16428__$1,(7),ch,inst_16412);
} else
{if((state_val_16429 === (6)))
{var inst_16424 = (state_16428[(2)]);var state_16428__$1 = state_16428;var statearr_16434_16451 = state_16428__$1;(statearr_16434_16451[(2)] = inst_16424);
(statearr_16434_16451[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16429 === (3)))
{var inst_16426 = (state_16428[(2)]);var state_16428__$1 = state_16428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16428__$1,inst_16426);
} else
{if((state_val_16429 === (2)))
{var inst_16409 = (state_16428[(7)]);var state_16428__$1 = state_16428;if(cljs.core.truth_(inst_16409))
{var statearr_16435_16452 = state_16428__$1;(statearr_16435_16452[(1)] = (4));
} else
{var statearr_16436_16453 = state_16428__$1;(statearr_16436_16453[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16429 === (9)))
{var state_16428__$1 = state_16428;var statearr_16437_16454 = state_16428__$1;(statearr_16437_16454[(2)] = null);
(statearr_16437_16454[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16429 === (5)))
{var state_16428__$1 = state_16428;if(cljs.core.truth_(close_QMARK_))
{var statearr_16438_16455 = state_16428__$1;(statearr_16438_16455[(1)] = (8));
} else
{var statearr_16439_16456 = state_16428__$1;(statearr_16439_16456[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16429 === (10)))
{var inst_16422 = (state_16428[(2)]);var state_16428__$1 = state_16428;var statearr_16440_16457 = state_16428__$1;(statearr_16440_16457[(2)] = inst_16422);
(statearr_16440_16457[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16429 === (8)))
{var inst_16419 = cljs.core.async.close_BANG_.call(null,ch);var state_16428__$1 = state_16428;var statearr_16441_16458 = state_16428__$1;(statearr_16441_16458[(2)] = inst_16419);
(statearr_16441_16458[(1)] = (10));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16445 = [null,null,null,null,null,null,null,null,null];(statearr_16445[(0)] = state_machine__5679__auto__);
(statearr_16445[(1)] = (1));
return statearr_16445;
});
var state_machine__5679__auto____1 = (function (state_16428){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16428);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16446){if((e16446 instanceof Object))
{var ex__5682__auto__ = e16446;var statearr_16447_16459 = state_16428;(statearr_16447_16459[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16428);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16460 = state_16428;
state_16428 = G__16460;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16428){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_16448 = f__5694__auto__.call(null);(statearr_16448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_16448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.Mux = (function (){var obj16462 = {};return obj16462;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16464 = {};return obj16464;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16688 = (function (cs,ch,mult,meta16689){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16689 = meta16689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16688.cljs$lang$type = true;
cljs.core.async.t16688.cljs$lang$ctorStr = "cljs.core.async/t16688";
cljs.core.async.t16688.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16688");
});})(cs))
;
cljs.core.async.t16688.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16688.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16688.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16688.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16688.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16690){var self__ = this;
var _16690__$1 = this;return self__.meta16689;
});})(cs))
;
cljs.core.async.t16688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16690,meta16689__$1){var self__ = this;
var _16690__$1 = this;return (new cljs.core.async.t16688(self__.cs,self__.ch,self__.mult,meta16689__$1));
});})(cs))
;
cljs.core.async.__GT_t16688 = ((function (cs){
return (function __GT_t16688(cs__$1,ch__$1,mult__$1,meta16689){return (new cljs.core.async.t16688(cs__$1,ch__$1,mult__$1,meta16689));
});})(cs))
;
}
return (new cljs.core.async.t16688(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___16911 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16911,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16911,cs,m,dchan,dctr,done){
return (function (state_16825){var state_val_16826 = (state_16825[(1)]);if((state_val_16826 === (7)))
{var inst_16821 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16827_16912 = state_16825__$1;(statearr_16827_16912[(2)] = inst_16821);
(statearr_16827_16912[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (20)))
{var inst_16722 = (state_16825[(7)]);var inst_16732 = cljs.core.first.call(null,inst_16722);var inst_16733 = cljs.core.nth.call(null,inst_16732,(0),null);var inst_16734 = cljs.core.nth.call(null,inst_16732,(1),null);var state_16825__$1 = (function (){var statearr_16828 = state_16825;(statearr_16828[(8)] = inst_16733);
return statearr_16828;
})();if(cljs.core.truth_(inst_16734))
{var statearr_16829_16913 = state_16825__$1;(statearr_16829_16913[(1)] = (22));
} else
{var statearr_16830_16914 = state_16825__$1;(statearr_16830_16914[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (27)))
{var inst_16762 = (state_16825[(9)]);var inst_16764 = (state_16825[(10)]);var inst_16769 = cljs.core._nth.call(null,inst_16762,inst_16764);var state_16825__$1 = (function (){var statearr_16831 = state_16825;(statearr_16831[(11)] = inst_16769);
return statearr_16831;
})();var statearr_16832_16915 = state_16825__$1;(statearr_16832_16915[(2)] = null);
(statearr_16832_16915[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (1)))
{var state_16825__$1 = state_16825;var statearr_16833_16916 = state_16825__$1;(statearr_16833_16916[(2)] = null);
(statearr_16833_16916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (24)))
{var inst_16722 = (state_16825[(7)]);var inst_16739 = (state_16825[(2)]);var inst_16740 = cljs.core.next.call(null,inst_16722);var inst_16702 = inst_16740;var inst_16703 = null;var inst_16704 = (0);var inst_16705 = (0);var state_16825__$1 = (function (){var statearr_16834 = state_16825;(statearr_16834[(12)] = inst_16703);
(statearr_16834[(13)] = inst_16705);
(statearr_16834[(14)] = inst_16739);
(statearr_16834[(15)] = inst_16704);
(statearr_16834[(16)] = inst_16702);
return statearr_16834;
})();var statearr_16835_16917 = state_16825__$1;(statearr_16835_16917[(2)] = null);
(statearr_16835_16917[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (39)))
{var inst_16782 = (state_16825[(17)]);var inst_16800 = (state_16825[(2)]);var inst_16801 = cljs.core.next.call(null,inst_16782);var inst_16761 = inst_16801;var inst_16762 = null;var inst_16763 = (0);var inst_16764 = (0);var state_16825__$1 = (function (){var statearr_16839 = state_16825;(statearr_16839[(9)] = inst_16762);
(statearr_16839[(18)] = inst_16761);
(statearr_16839[(10)] = inst_16764);
(statearr_16839[(19)] = inst_16800);
(statearr_16839[(20)] = inst_16763);
return statearr_16839;
})();var statearr_16840_16918 = state_16825__$1;(statearr_16840_16918[(2)] = null);
(statearr_16840_16918[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (4)))
{var inst_16693 = (state_16825[(21)]);var inst_16693__$1 = (state_16825[(2)]);var inst_16694 = (inst_16693__$1 == null);var state_16825__$1 = (function (){var statearr_16841 = state_16825;(statearr_16841[(21)] = inst_16693__$1);
return statearr_16841;
})();if(cljs.core.truth_(inst_16694))
{var statearr_16842_16919 = state_16825__$1;(statearr_16842_16919[(1)] = (5));
} else
{var statearr_16843_16920 = state_16825__$1;(statearr_16843_16920[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (15)))
{var inst_16703 = (state_16825[(12)]);var inst_16705 = (state_16825[(13)]);var inst_16704 = (state_16825[(15)]);var inst_16702 = (state_16825[(16)]);var inst_16718 = (state_16825[(2)]);var inst_16719 = (inst_16705 + (1));var tmp16836 = inst_16703;var tmp16837 = inst_16704;var tmp16838 = inst_16702;var inst_16702__$1 = tmp16838;var inst_16703__$1 = tmp16836;var inst_16704__$1 = tmp16837;var inst_16705__$1 = inst_16719;var state_16825__$1 = (function (){var statearr_16844 = state_16825;(statearr_16844[(12)] = inst_16703__$1);
(statearr_16844[(13)] = inst_16705__$1);
(statearr_16844[(15)] = inst_16704__$1);
(statearr_16844[(22)] = inst_16718);
(statearr_16844[(16)] = inst_16702__$1);
return statearr_16844;
})();var statearr_16845_16921 = state_16825__$1;(statearr_16845_16921[(2)] = null);
(statearr_16845_16921[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (21)))
{var inst_16743 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16846_16922 = state_16825__$1;(statearr_16846_16922[(2)] = inst_16743);
(statearr_16846_16922[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (31)))
{var inst_16769 = (state_16825[(11)]);var inst_16770 = (state_16825[(2)]);var inst_16771 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16772 = cljs.core.async.untap_STAR_.call(null,m,inst_16769);var state_16825__$1 = (function (){var statearr_16847 = state_16825;(statearr_16847[(23)] = inst_16771);
(statearr_16847[(24)] = inst_16770);
return statearr_16847;
})();var statearr_16848_16923 = state_16825__$1;(statearr_16848_16923[(2)] = inst_16772);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16825__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (32)))
{var inst_16693 = (state_16825[(21)]);var inst_16769 = (state_16825[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16825,(31),Object,null,(30));var inst_16776 = cljs.core.async.put_BANG_.call(null,inst_16769,inst_16693,done);var state_16825__$1 = state_16825;var statearr_16849_16924 = state_16825__$1;(statearr_16849_16924[(2)] = inst_16776);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16825__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (40)))
{var inst_16791 = (state_16825[(25)]);var inst_16792 = (state_16825[(2)]);var inst_16793 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16794 = cljs.core.async.untap_STAR_.call(null,m,inst_16791);var state_16825__$1 = (function (){var statearr_16850 = state_16825;(statearr_16850[(26)] = inst_16793);
(statearr_16850[(27)] = inst_16792);
return statearr_16850;
})();var statearr_16851_16925 = state_16825__$1;(statearr_16851_16925[(2)] = inst_16794);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16825__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (33)))
{var inst_16782 = (state_16825[(17)]);var inst_16784 = cljs.core.chunked_seq_QMARK_.call(null,inst_16782);var state_16825__$1 = state_16825;if(inst_16784)
{var statearr_16852_16926 = state_16825__$1;(statearr_16852_16926[(1)] = (36));
} else
{var statearr_16853_16927 = state_16825__$1;(statearr_16853_16927[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (13)))
{var inst_16712 = (state_16825[(28)]);var inst_16715 = cljs.core.async.close_BANG_.call(null,inst_16712);var state_16825__$1 = state_16825;var statearr_16854_16928 = state_16825__$1;(statearr_16854_16928[(2)] = inst_16715);
(statearr_16854_16928[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (22)))
{var inst_16733 = (state_16825[(8)]);var inst_16736 = cljs.core.async.close_BANG_.call(null,inst_16733);var state_16825__$1 = state_16825;var statearr_16855_16929 = state_16825__$1;(statearr_16855_16929[(2)] = inst_16736);
(statearr_16855_16929[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (36)))
{var inst_16782 = (state_16825[(17)]);var inst_16786 = cljs.core.chunk_first.call(null,inst_16782);var inst_16787 = cljs.core.chunk_rest.call(null,inst_16782);var inst_16788 = cljs.core.count.call(null,inst_16786);var inst_16761 = inst_16787;var inst_16762 = inst_16786;var inst_16763 = inst_16788;var inst_16764 = (0);var state_16825__$1 = (function (){var statearr_16856 = state_16825;(statearr_16856[(9)] = inst_16762);
(statearr_16856[(18)] = inst_16761);
(statearr_16856[(10)] = inst_16764);
(statearr_16856[(20)] = inst_16763);
return statearr_16856;
})();var statearr_16857_16930 = state_16825__$1;(statearr_16857_16930[(2)] = null);
(statearr_16857_16930[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (41)))
{var inst_16693 = (state_16825[(21)]);var inst_16791 = (state_16825[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16825,(40),Object,null,(39));var inst_16798 = cljs.core.async.put_BANG_.call(null,inst_16791,inst_16693,done);var state_16825__$1 = state_16825;var statearr_16858_16931 = state_16825__$1;(statearr_16858_16931[(2)] = inst_16798);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16825__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (43)))
{var state_16825__$1 = state_16825;var statearr_16859_16932 = state_16825__$1;(statearr_16859_16932[(2)] = null);
(statearr_16859_16932[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (29)))
{var inst_16809 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16860_16933 = state_16825__$1;(statearr_16860_16933[(2)] = inst_16809);
(statearr_16860_16933[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (44)))
{var inst_16818 = (state_16825[(2)]);var state_16825__$1 = (function (){var statearr_16861 = state_16825;(statearr_16861[(29)] = inst_16818);
return statearr_16861;
})();var statearr_16862_16934 = state_16825__$1;(statearr_16862_16934[(2)] = null);
(statearr_16862_16934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (6)))
{var inst_16753 = (state_16825[(30)]);var inst_16752 = cljs.core.deref.call(null,cs);var inst_16753__$1 = cljs.core.keys.call(null,inst_16752);var inst_16754 = cljs.core.count.call(null,inst_16753__$1);var inst_16755 = cljs.core.reset_BANG_.call(null,dctr,inst_16754);var inst_16760 = cljs.core.seq.call(null,inst_16753__$1);var inst_16761 = inst_16760;var inst_16762 = null;var inst_16763 = (0);var inst_16764 = (0);var state_16825__$1 = (function (){var statearr_16863 = state_16825;(statearr_16863[(9)] = inst_16762);
(statearr_16863[(18)] = inst_16761);
(statearr_16863[(10)] = inst_16764);
(statearr_16863[(30)] = inst_16753__$1);
(statearr_16863[(31)] = inst_16755);
(statearr_16863[(20)] = inst_16763);
return statearr_16863;
})();var statearr_16864_16935 = state_16825__$1;(statearr_16864_16935[(2)] = null);
(statearr_16864_16935[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (28)))
{var inst_16761 = (state_16825[(18)]);var inst_16782 = (state_16825[(17)]);var inst_16782__$1 = cljs.core.seq.call(null,inst_16761);var state_16825__$1 = (function (){var statearr_16865 = state_16825;(statearr_16865[(17)] = inst_16782__$1);
return statearr_16865;
})();if(inst_16782__$1)
{var statearr_16866_16936 = state_16825__$1;(statearr_16866_16936[(1)] = (33));
} else
{var statearr_16867_16937 = state_16825__$1;(statearr_16867_16937[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (25)))
{var inst_16764 = (state_16825[(10)]);var inst_16763 = (state_16825[(20)]);var inst_16766 = (inst_16764 < inst_16763);var inst_16767 = inst_16766;var state_16825__$1 = state_16825;if(cljs.core.truth_(inst_16767))
{var statearr_16868_16938 = state_16825__$1;(statearr_16868_16938[(1)] = (27));
} else
{var statearr_16869_16939 = state_16825__$1;(statearr_16869_16939[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (34)))
{var state_16825__$1 = state_16825;var statearr_16870_16940 = state_16825__$1;(statearr_16870_16940[(2)] = null);
(statearr_16870_16940[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (17)))
{var state_16825__$1 = state_16825;var statearr_16871_16941 = state_16825__$1;(statearr_16871_16941[(2)] = null);
(statearr_16871_16941[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (3)))
{var inst_16823 = (state_16825[(2)]);var state_16825__$1 = state_16825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16825__$1,inst_16823);
} else
{if((state_val_16826 === (12)))
{var inst_16748 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16872_16942 = state_16825__$1;(statearr_16872_16942[(2)] = inst_16748);
(statearr_16872_16942[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (2)))
{var state_16825__$1 = state_16825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16825__$1,(4),ch);
} else
{if((state_val_16826 === (23)))
{var state_16825__$1 = state_16825;var statearr_16873_16943 = state_16825__$1;(statearr_16873_16943[(2)] = null);
(statearr_16873_16943[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (35)))
{var inst_16807 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16874_16944 = state_16825__$1;(statearr_16874_16944[(2)] = inst_16807);
(statearr_16874_16944[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (19)))
{var inst_16722 = (state_16825[(7)]);var inst_16726 = cljs.core.chunk_first.call(null,inst_16722);var inst_16727 = cljs.core.chunk_rest.call(null,inst_16722);var inst_16728 = cljs.core.count.call(null,inst_16726);var inst_16702 = inst_16727;var inst_16703 = inst_16726;var inst_16704 = inst_16728;var inst_16705 = (0);var state_16825__$1 = (function (){var statearr_16875 = state_16825;(statearr_16875[(12)] = inst_16703);
(statearr_16875[(13)] = inst_16705);
(statearr_16875[(15)] = inst_16704);
(statearr_16875[(16)] = inst_16702);
return statearr_16875;
})();var statearr_16876_16945 = state_16825__$1;(statearr_16876_16945[(2)] = null);
(statearr_16876_16945[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (11)))
{var inst_16722 = (state_16825[(7)]);var inst_16702 = (state_16825[(16)]);var inst_16722__$1 = cljs.core.seq.call(null,inst_16702);var state_16825__$1 = (function (){var statearr_16877 = state_16825;(statearr_16877[(7)] = inst_16722__$1);
return statearr_16877;
})();if(inst_16722__$1)
{var statearr_16878_16946 = state_16825__$1;(statearr_16878_16946[(1)] = (16));
} else
{var statearr_16879_16947 = state_16825__$1;(statearr_16879_16947[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (9)))
{var inst_16750 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16880_16948 = state_16825__$1;(statearr_16880_16948[(2)] = inst_16750);
(statearr_16880_16948[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (5)))
{var inst_16700 = cljs.core.deref.call(null,cs);var inst_16701 = cljs.core.seq.call(null,inst_16700);var inst_16702 = inst_16701;var inst_16703 = null;var inst_16704 = (0);var inst_16705 = (0);var state_16825__$1 = (function (){var statearr_16881 = state_16825;(statearr_16881[(12)] = inst_16703);
(statearr_16881[(13)] = inst_16705);
(statearr_16881[(15)] = inst_16704);
(statearr_16881[(16)] = inst_16702);
return statearr_16881;
})();var statearr_16882_16949 = state_16825__$1;(statearr_16882_16949[(2)] = null);
(statearr_16882_16949[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (14)))
{var state_16825__$1 = state_16825;var statearr_16883_16950 = state_16825__$1;(statearr_16883_16950[(2)] = null);
(statearr_16883_16950[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (45)))
{var inst_16815 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16884_16951 = state_16825__$1;(statearr_16884_16951[(2)] = inst_16815);
(statearr_16884_16951[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (26)))
{var inst_16753 = (state_16825[(30)]);var inst_16811 = (state_16825[(2)]);var inst_16812 = cljs.core.seq.call(null,inst_16753);var state_16825__$1 = (function (){var statearr_16885 = state_16825;(statearr_16885[(32)] = inst_16811);
return statearr_16885;
})();if(inst_16812)
{var statearr_16886_16952 = state_16825__$1;(statearr_16886_16952[(1)] = (42));
} else
{var statearr_16887_16953 = state_16825__$1;(statearr_16887_16953[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (16)))
{var inst_16722 = (state_16825[(7)]);var inst_16724 = cljs.core.chunked_seq_QMARK_.call(null,inst_16722);var state_16825__$1 = state_16825;if(inst_16724)
{var statearr_16891_16954 = state_16825__$1;(statearr_16891_16954[(1)] = (19));
} else
{var statearr_16892_16955 = state_16825__$1;(statearr_16892_16955[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (38)))
{var inst_16804 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16893_16956 = state_16825__$1;(statearr_16893_16956[(2)] = inst_16804);
(statearr_16893_16956[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (30)))
{var inst_16762 = (state_16825[(9)]);var inst_16761 = (state_16825[(18)]);var inst_16764 = (state_16825[(10)]);var inst_16763 = (state_16825[(20)]);var inst_16778 = (state_16825[(2)]);var inst_16779 = (inst_16764 + (1));var tmp16888 = inst_16762;var tmp16889 = inst_16761;var tmp16890 = inst_16763;var inst_16761__$1 = tmp16889;var inst_16762__$1 = tmp16888;var inst_16763__$1 = tmp16890;var inst_16764__$1 = inst_16779;var state_16825__$1 = (function (){var statearr_16894 = state_16825;(statearr_16894[(9)] = inst_16762__$1);
(statearr_16894[(18)] = inst_16761__$1);
(statearr_16894[(33)] = inst_16778);
(statearr_16894[(10)] = inst_16764__$1);
(statearr_16894[(20)] = inst_16763__$1);
return statearr_16894;
})();var statearr_16895_16957 = state_16825__$1;(statearr_16895_16957[(2)] = null);
(statearr_16895_16957[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (10)))
{var inst_16703 = (state_16825[(12)]);var inst_16705 = (state_16825[(13)]);var inst_16711 = cljs.core._nth.call(null,inst_16703,inst_16705);var inst_16712 = cljs.core.nth.call(null,inst_16711,(0),null);var inst_16713 = cljs.core.nth.call(null,inst_16711,(1),null);var state_16825__$1 = (function (){var statearr_16896 = state_16825;(statearr_16896[(28)] = inst_16712);
return statearr_16896;
})();if(cljs.core.truth_(inst_16713))
{var statearr_16897_16958 = state_16825__$1;(statearr_16897_16958[(1)] = (13));
} else
{var statearr_16898_16959 = state_16825__$1;(statearr_16898_16959[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (18)))
{var inst_16746 = (state_16825[(2)]);var state_16825__$1 = state_16825;var statearr_16899_16960 = state_16825__$1;(statearr_16899_16960[(2)] = inst_16746);
(statearr_16899_16960[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (42)))
{var state_16825__$1 = state_16825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16825__$1,(45),dchan);
} else
{if((state_val_16826 === (37)))
{var inst_16782 = (state_16825[(17)]);var inst_16791 = cljs.core.first.call(null,inst_16782);var state_16825__$1 = (function (){var statearr_16900 = state_16825;(statearr_16900[(25)] = inst_16791);
return statearr_16900;
})();var statearr_16901_16961 = state_16825__$1;(statearr_16901_16961[(2)] = null);
(statearr_16901_16961[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16826 === (8)))
{var inst_16705 = (state_16825[(13)]);var inst_16704 = (state_16825[(15)]);var inst_16707 = (inst_16705 < inst_16704);var inst_16708 = inst_16707;var state_16825__$1 = state_16825;if(cljs.core.truth_(inst_16708))
{var statearr_16902_16962 = state_16825__$1;(statearr_16902_16962[(1)] = (10));
} else
{var statearr_16903_16963 = state_16825__$1;(statearr_16903_16963[(1)] = (11));
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
});})(c__5693__auto___16911,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16911,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16907[(0)] = state_machine__5679__auto__);
(statearr_16907[(1)] = (1));
return statearr_16907;
});
var state_machine__5679__auto____1 = (function (state_16825){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16825);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16908){if((e16908 instanceof Object))
{var ex__5682__auto__ = e16908;var statearr_16909_16964 = state_16825;(statearr_16909_16964[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16825);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16965 = state_16825;
state_16825 = G__16965;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16825){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16911,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16910 = f__5694__auto__.call(null);(statearr_16910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16911);
return statearr_16910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16911,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16967 = {};return obj16967;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t17077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17077 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17078){
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
this.meta17078 = meta17078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17077.cljs$lang$type = true;
cljs.core.async.t17077.cljs$lang$ctorStr = "cljs.core.async/t17077";
cljs.core.async.t17077.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t17077");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17079){var self__ = this;
var _17079__$1 = this;return self__.meta17078;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17079,meta17078__$1){var self__ = this;
var _17079__$1 = this;return (new cljs.core.async.t17077(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17078__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17077 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17077(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17078){return (new cljs.core.async.t17077(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17078));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17077(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___17186 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17144){var state_val_17145 = (state_17144[(1)]);if((state_val_17145 === (7)))
{var inst_17093 = (state_17144[(7)]);var inst_17098 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17093);var state_17144__$1 = state_17144;var statearr_17146_17187 = state_17144__$1;(statearr_17146_17187[(2)] = inst_17098);
(statearr_17146_17187[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (20)))
{var inst_17108 = (state_17144[(8)]);var state_17144__$1 = state_17144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17144__$1,(23),out,inst_17108);
} else
{if((state_val_17145 === (1)))
{var inst_17083 = (state_17144[(9)]);var inst_17083__$1 = calc_state.call(null);var inst_17084 = cljs.core.seq_QMARK_.call(null,inst_17083__$1);var state_17144__$1 = (function (){var statearr_17147 = state_17144;(statearr_17147[(9)] = inst_17083__$1);
return statearr_17147;
})();if(inst_17084)
{var statearr_17148_17188 = state_17144__$1;(statearr_17148_17188[(1)] = (2));
} else
{var statearr_17149_17189 = state_17144__$1;(statearr_17149_17189[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (4)))
{var inst_17083 = (state_17144[(9)]);var inst_17089 = (state_17144[(2)]);var inst_17090 = cljs.core.get.call(null,inst_17089,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17091 = cljs.core.get.call(null,inst_17089,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17092 = cljs.core.get.call(null,inst_17089,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_17093 = inst_17083;var state_17144__$1 = (function (){var statearr_17150 = state_17144;(statearr_17150[(10)] = inst_17091);
(statearr_17150[(7)] = inst_17093);
(statearr_17150[(11)] = inst_17092);
(statearr_17150[(12)] = inst_17090);
return statearr_17150;
})();var statearr_17151_17190 = state_17144__$1;(statearr_17151_17190[(2)] = null);
(statearr_17151_17190[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (15)))
{var state_17144__$1 = state_17144;var statearr_17152_17191 = state_17144__$1;(statearr_17152_17191[(2)] = null);
(statearr_17152_17191[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (21)))
{var state_17144__$1 = state_17144;var statearr_17153_17192 = state_17144__$1;(statearr_17153_17192[(2)] = null);
(statearr_17153_17192[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (13)))
{var inst_17140 = (state_17144[(2)]);var state_17144__$1 = state_17144;var statearr_17154_17193 = state_17144__$1;(statearr_17154_17193[(2)] = inst_17140);
(statearr_17154_17193[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (22)))
{var inst_17101 = (state_17144[(13)]);var inst_17137 = (state_17144[(2)]);var inst_17093 = inst_17101;var state_17144__$1 = (function (){var statearr_17155 = state_17144;(statearr_17155[(7)] = inst_17093);
(statearr_17155[(14)] = inst_17137);
return statearr_17155;
})();var statearr_17156_17194 = state_17144__$1;(statearr_17156_17194[(2)] = null);
(statearr_17156_17194[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (6)))
{var inst_17142 = (state_17144[(2)]);var state_17144__$1 = state_17144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17144__$1,inst_17142);
} else
{if((state_val_17145 === (17)))
{var inst_17123 = (state_17144[(15)]);var state_17144__$1 = state_17144;var statearr_17157_17195 = state_17144__$1;(statearr_17157_17195[(2)] = inst_17123);
(statearr_17157_17195[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (3)))
{var inst_17083 = (state_17144[(9)]);var state_17144__$1 = state_17144;var statearr_17158_17196 = state_17144__$1;(statearr_17158_17196[(2)] = inst_17083);
(statearr_17158_17196[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (12)))
{var inst_17104 = (state_17144[(16)]);var inst_17109 = (state_17144[(17)]);var inst_17123 = (state_17144[(15)]);var inst_17123__$1 = inst_17104.call(null,inst_17109);var state_17144__$1 = (function (){var statearr_17159 = state_17144;(statearr_17159[(15)] = inst_17123__$1);
return statearr_17159;
})();if(cljs.core.truth_(inst_17123__$1))
{var statearr_17160_17197 = state_17144__$1;(statearr_17160_17197[(1)] = (17));
} else
{var statearr_17161_17198 = state_17144__$1;(statearr_17161_17198[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (2)))
{var inst_17083 = (state_17144[(9)]);var inst_17086 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17083);var state_17144__$1 = state_17144;var statearr_17162_17199 = state_17144__$1;(statearr_17162_17199[(2)] = inst_17086);
(statearr_17162_17199[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (23)))
{var inst_17134 = (state_17144[(2)]);var state_17144__$1 = state_17144;var statearr_17163_17200 = state_17144__$1;(statearr_17163_17200[(2)] = inst_17134);
(statearr_17163_17200[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (19)))
{var inst_17131 = (state_17144[(2)]);var state_17144__$1 = state_17144;if(cljs.core.truth_(inst_17131))
{var statearr_17164_17201 = state_17144__$1;(statearr_17164_17201[(1)] = (20));
} else
{var statearr_17165_17202 = state_17144__$1;(statearr_17165_17202[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (11)))
{var inst_17108 = (state_17144[(8)]);var inst_17114 = (inst_17108 == null);var state_17144__$1 = state_17144;if(cljs.core.truth_(inst_17114))
{var statearr_17166_17203 = state_17144__$1;(statearr_17166_17203[(1)] = (14));
} else
{var statearr_17167_17204 = state_17144__$1;(statearr_17167_17204[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (9)))
{var inst_17101 = (state_17144[(13)]);var inst_17101__$1 = (state_17144[(2)]);var inst_17102 = cljs.core.get.call(null,inst_17101__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17103 = cljs.core.get.call(null,inst_17101__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17104 = cljs.core.get.call(null,inst_17101__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17144__$1 = (function (){var statearr_17168 = state_17144;(statearr_17168[(16)] = inst_17104);
(statearr_17168[(13)] = inst_17101__$1);
(statearr_17168[(18)] = inst_17103);
return statearr_17168;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17144__$1,(10),inst_17102);
} else
{if((state_val_17145 === (5)))
{var inst_17093 = (state_17144[(7)]);var inst_17096 = cljs.core.seq_QMARK_.call(null,inst_17093);var state_17144__$1 = state_17144;if(inst_17096)
{var statearr_17169_17205 = state_17144__$1;(statearr_17169_17205[(1)] = (7));
} else
{var statearr_17170_17206 = state_17144__$1;(statearr_17170_17206[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (14)))
{var inst_17109 = (state_17144[(17)]);var inst_17116 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17109);var state_17144__$1 = state_17144;var statearr_17171_17207 = state_17144__$1;(statearr_17171_17207[(2)] = inst_17116);
(statearr_17171_17207[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (16)))
{var inst_17119 = (state_17144[(2)]);var inst_17120 = calc_state.call(null);var inst_17093 = inst_17120;var state_17144__$1 = (function (){var statearr_17172 = state_17144;(statearr_17172[(19)] = inst_17119);
(statearr_17172[(7)] = inst_17093);
return statearr_17172;
})();var statearr_17173_17208 = state_17144__$1;(statearr_17173_17208[(2)] = null);
(statearr_17173_17208[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (10)))
{var inst_17109 = (state_17144[(17)]);var inst_17108 = (state_17144[(8)]);var inst_17107 = (state_17144[(2)]);var inst_17108__$1 = cljs.core.nth.call(null,inst_17107,(0),null);var inst_17109__$1 = cljs.core.nth.call(null,inst_17107,(1),null);var inst_17110 = (inst_17108__$1 == null);var inst_17111 = cljs.core._EQ_.call(null,inst_17109__$1,change);var inst_17112 = (inst_17110) || (inst_17111);var state_17144__$1 = (function (){var statearr_17174 = state_17144;(statearr_17174[(17)] = inst_17109__$1);
(statearr_17174[(8)] = inst_17108__$1);
return statearr_17174;
})();if(cljs.core.truth_(inst_17112))
{var statearr_17175_17209 = state_17144__$1;(statearr_17175_17209[(1)] = (11));
} else
{var statearr_17176_17210 = state_17144__$1;(statearr_17176_17210[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (18)))
{var inst_17104 = (state_17144[(16)]);var inst_17109 = (state_17144[(17)]);var inst_17103 = (state_17144[(18)]);var inst_17126 = cljs.core.empty_QMARK_.call(null,inst_17104);var inst_17127 = inst_17103.call(null,inst_17109);var inst_17128 = cljs.core.not.call(null,inst_17127);var inst_17129 = (inst_17126) && (inst_17128);var state_17144__$1 = state_17144;var statearr_17177_17211 = state_17144__$1;(statearr_17177_17211[(2)] = inst_17129);
(statearr_17177_17211[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17145 === (8)))
{var inst_17093 = (state_17144[(7)]);var state_17144__$1 = state_17144;var statearr_17178_17212 = state_17144__$1;(statearr_17178_17212[(2)] = inst_17093);
(statearr_17178_17212[(1)] = (9));
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
});})(c__5693__auto___17186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___17186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17182[(0)] = state_machine__5679__auto__);
(statearr_17182[(1)] = (1));
return statearr_17182;
});
var state_machine__5679__auto____1 = (function (state_17144){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17144);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17183){if((e17183 instanceof Object))
{var ex__5682__auto__ = e17183;var statearr_17184_17213 = state_17144;(statearr_17184_17213[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17144);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17214 = state_17144;
state_17144 = G__17214;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17144){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_17185 = f__5694__auto__.call(null);(statearr_17185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17186);
return statearr_17185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17216 = {};return obj17216;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__17217_SHARP_){if(cljs.core.truth_(p1__17217_SHARP_.call(null,topic)))
{return p1__17217_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17217_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17342 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17342 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17343){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17343 = meta17343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17342.cljs$lang$type = true;
cljs.core.async.t17342.cljs$lang$ctorStr = "cljs.core.async/t17342";
cljs.core.async.t17342.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t17342");
});})(mults,ensure_mult))
;
cljs.core.async.t17342.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17342.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17342.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17342.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17342.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17342.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17342.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17344){var self__ = this;
var _17344__$1 = this;return self__.meta17343;
});})(mults,ensure_mult))
;
cljs.core.async.t17342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17344,meta17343__$1){var self__ = this;
var _17344__$1 = this;return (new cljs.core.async.t17342(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17343__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17342 = ((function (mults,ensure_mult){
return (function __GT_t17342(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17343){return (new cljs.core.async.t17342(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17343));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17342(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___17466 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17466,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17466,mults,ensure_mult,p){
return (function (state_17418){var state_val_17419 = (state_17418[(1)]);if((state_val_17419 === (7)))
{var inst_17414 = (state_17418[(2)]);var state_17418__$1 = state_17418;var statearr_17420_17467 = state_17418__$1;(statearr_17420_17467[(2)] = inst_17414);
(statearr_17420_17467[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (20)))
{var state_17418__$1 = state_17418;var statearr_17421_17468 = state_17418__$1;(statearr_17421_17468[(2)] = null);
(statearr_17421_17468[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (1)))
{var state_17418__$1 = state_17418;var statearr_17422_17469 = state_17418__$1;(statearr_17422_17469[(2)] = null);
(statearr_17422_17469[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (24)))
{var inst_17397 = (state_17418[(7)]);var inst_17347 = (state_17418[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17418,(23),Object,null,(22));var inst_17404 = cljs.core.async.muxch_STAR_.call(null,inst_17397);var state_17418__$1 = state_17418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17418__$1,(25),inst_17404,inst_17347);
} else
{if((state_val_17419 === (4)))
{var inst_17347 = (state_17418[(8)]);var inst_17347__$1 = (state_17418[(2)]);var inst_17348 = (inst_17347__$1 == null);var state_17418__$1 = (function (){var statearr_17423 = state_17418;(statearr_17423[(8)] = inst_17347__$1);
return statearr_17423;
})();if(cljs.core.truth_(inst_17348))
{var statearr_17424_17470 = state_17418__$1;(statearr_17424_17470[(1)] = (5));
} else
{var statearr_17425_17471 = state_17418__$1;(statearr_17425_17471[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (15)))
{var inst_17389 = (state_17418[(2)]);var state_17418__$1 = state_17418;var statearr_17426_17472 = state_17418__$1;(statearr_17426_17472[(2)] = inst_17389);
(statearr_17426_17472[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (21)))
{var inst_17411 = (state_17418[(2)]);var state_17418__$1 = (function (){var statearr_17427 = state_17418;(statearr_17427[(9)] = inst_17411);
return statearr_17427;
})();var statearr_17428_17473 = state_17418__$1;(statearr_17428_17473[(2)] = null);
(statearr_17428_17473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (13)))
{var inst_17371 = (state_17418[(10)]);var inst_17373 = cljs.core.chunked_seq_QMARK_.call(null,inst_17371);var state_17418__$1 = state_17418;if(inst_17373)
{var statearr_17429_17474 = state_17418__$1;(statearr_17429_17474[(1)] = (16));
} else
{var statearr_17430_17475 = state_17418__$1;(statearr_17430_17475[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (22)))
{var inst_17408 = (state_17418[(2)]);var state_17418__$1 = state_17418;var statearr_17431_17476 = state_17418__$1;(statearr_17431_17476[(2)] = inst_17408);
(statearr_17431_17476[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (6)))
{var inst_17397 = (state_17418[(7)]);var inst_17395 = (state_17418[(11)]);var inst_17347 = (state_17418[(8)]);var inst_17395__$1 = topic_fn.call(null,inst_17347);var inst_17396 = cljs.core.deref.call(null,mults);var inst_17397__$1 = cljs.core.get.call(null,inst_17396,inst_17395__$1);var state_17418__$1 = (function (){var statearr_17432 = state_17418;(statearr_17432[(7)] = inst_17397__$1);
(statearr_17432[(11)] = inst_17395__$1);
return statearr_17432;
})();if(cljs.core.truth_(inst_17397__$1))
{var statearr_17433_17477 = state_17418__$1;(statearr_17433_17477[(1)] = (19));
} else
{var statearr_17434_17478 = state_17418__$1;(statearr_17434_17478[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (25)))
{var inst_17406 = (state_17418[(2)]);var state_17418__$1 = state_17418;var statearr_17435_17479 = state_17418__$1;(statearr_17435_17479[(2)] = inst_17406);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17418__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (17)))
{var inst_17371 = (state_17418[(10)]);var inst_17380 = cljs.core.first.call(null,inst_17371);var inst_17381 = cljs.core.async.muxch_STAR_.call(null,inst_17380);var inst_17382 = cljs.core.async.close_BANG_.call(null,inst_17381);var inst_17383 = cljs.core.next.call(null,inst_17371);var inst_17357 = inst_17383;var inst_17358 = null;var inst_17359 = (0);var inst_17360 = (0);var state_17418__$1 = (function (){var statearr_17436 = state_17418;(statearr_17436[(12)] = inst_17357);
(statearr_17436[(13)] = inst_17358);
(statearr_17436[(14)] = inst_17359);
(statearr_17436[(15)] = inst_17360);
(statearr_17436[(16)] = inst_17382);
return statearr_17436;
})();var statearr_17437_17480 = state_17418__$1;(statearr_17437_17480[(2)] = null);
(statearr_17437_17480[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (3)))
{var inst_17416 = (state_17418[(2)]);var state_17418__$1 = state_17418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17418__$1,inst_17416);
} else
{if((state_val_17419 === (12)))
{var inst_17391 = (state_17418[(2)]);var state_17418__$1 = state_17418;var statearr_17438_17481 = state_17418__$1;(statearr_17438_17481[(2)] = inst_17391);
(statearr_17438_17481[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (2)))
{var state_17418__$1 = state_17418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17418__$1,(4),ch);
} else
{if((state_val_17419 === (23)))
{var inst_17395 = (state_17418[(11)]);var inst_17399 = (state_17418[(2)]);var inst_17400 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17395);var state_17418__$1 = (function (){var statearr_17439 = state_17418;(statearr_17439[(17)] = inst_17399);
return statearr_17439;
})();var statearr_17440_17482 = state_17418__$1;(statearr_17440_17482[(2)] = inst_17400);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17418__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (19)))
{var state_17418__$1 = state_17418;var statearr_17441_17483 = state_17418__$1;(statearr_17441_17483[(2)] = null);
(statearr_17441_17483[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (11)))
{var inst_17357 = (state_17418[(12)]);var inst_17371 = (state_17418[(10)]);var inst_17371__$1 = cljs.core.seq.call(null,inst_17357);var state_17418__$1 = (function (){var statearr_17442 = state_17418;(statearr_17442[(10)] = inst_17371__$1);
return statearr_17442;
})();if(inst_17371__$1)
{var statearr_17443_17484 = state_17418__$1;(statearr_17443_17484[(1)] = (13));
} else
{var statearr_17444_17485 = state_17418__$1;(statearr_17444_17485[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (9)))
{var inst_17393 = (state_17418[(2)]);var state_17418__$1 = state_17418;var statearr_17445_17486 = state_17418__$1;(statearr_17445_17486[(2)] = inst_17393);
(statearr_17445_17486[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (5)))
{var inst_17354 = cljs.core.deref.call(null,mults);var inst_17355 = cljs.core.vals.call(null,inst_17354);var inst_17356 = cljs.core.seq.call(null,inst_17355);var inst_17357 = inst_17356;var inst_17358 = null;var inst_17359 = (0);var inst_17360 = (0);var state_17418__$1 = (function (){var statearr_17446 = state_17418;(statearr_17446[(12)] = inst_17357);
(statearr_17446[(13)] = inst_17358);
(statearr_17446[(14)] = inst_17359);
(statearr_17446[(15)] = inst_17360);
return statearr_17446;
})();var statearr_17447_17487 = state_17418__$1;(statearr_17447_17487[(2)] = null);
(statearr_17447_17487[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (14)))
{var state_17418__$1 = state_17418;var statearr_17451_17488 = state_17418__$1;(statearr_17451_17488[(2)] = null);
(statearr_17451_17488[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (16)))
{var inst_17371 = (state_17418[(10)]);var inst_17375 = cljs.core.chunk_first.call(null,inst_17371);var inst_17376 = cljs.core.chunk_rest.call(null,inst_17371);var inst_17377 = cljs.core.count.call(null,inst_17375);var inst_17357 = inst_17376;var inst_17358 = inst_17375;var inst_17359 = inst_17377;var inst_17360 = (0);var state_17418__$1 = (function (){var statearr_17452 = state_17418;(statearr_17452[(12)] = inst_17357);
(statearr_17452[(13)] = inst_17358);
(statearr_17452[(14)] = inst_17359);
(statearr_17452[(15)] = inst_17360);
return statearr_17452;
})();var statearr_17453_17489 = state_17418__$1;(statearr_17453_17489[(2)] = null);
(statearr_17453_17489[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (10)))
{var inst_17357 = (state_17418[(12)]);var inst_17358 = (state_17418[(13)]);var inst_17359 = (state_17418[(14)]);var inst_17360 = (state_17418[(15)]);var inst_17365 = cljs.core._nth.call(null,inst_17358,inst_17360);var inst_17366 = cljs.core.async.muxch_STAR_.call(null,inst_17365);var inst_17367 = cljs.core.async.close_BANG_.call(null,inst_17366);var inst_17368 = (inst_17360 + (1));var tmp17448 = inst_17357;var tmp17449 = inst_17358;var tmp17450 = inst_17359;var inst_17357__$1 = tmp17448;var inst_17358__$1 = tmp17449;var inst_17359__$1 = tmp17450;var inst_17360__$1 = inst_17368;var state_17418__$1 = (function (){var statearr_17454 = state_17418;(statearr_17454[(12)] = inst_17357__$1);
(statearr_17454[(13)] = inst_17358__$1);
(statearr_17454[(14)] = inst_17359__$1);
(statearr_17454[(18)] = inst_17367);
(statearr_17454[(15)] = inst_17360__$1);
return statearr_17454;
})();var statearr_17455_17490 = state_17418__$1;(statearr_17455_17490[(2)] = null);
(statearr_17455_17490[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (18)))
{var inst_17386 = (state_17418[(2)]);var state_17418__$1 = state_17418;var statearr_17456_17491 = state_17418__$1;(statearr_17456_17491[(2)] = inst_17386);
(statearr_17456_17491[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17419 === (8)))
{var inst_17359 = (state_17418[(14)]);var inst_17360 = (state_17418[(15)]);var inst_17362 = (inst_17360 < inst_17359);var inst_17363 = inst_17362;var state_17418__$1 = state_17418;if(cljs.core.truth_(inst_17363))
{var statearr_17457_17492 = state_17418__$1;(statearr_17457_17492[(1)] = (10));
} else
{var statearr_17458_17493 = state_17418__$1;(statearr_17458_17493[(1)] = (11));
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
});})(c__5693__auto___17466,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___17466,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17462[(0)] = state_machine__5679__auto__);
(statearr_17462[(1)] = (1));
return statearr_17462;
});
var state_machine__5679__auto____1 = (function (state_17418){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17463){if((e17463 instanceof Object))
{var ex__5682__auto__ = e17463;var statearr_17464_17494 = state_17418;(statearr_17464_17494[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17495 = state_17418;
state_17418 = G__17495;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17418){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17466,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_17465 = f__5694__auto__.call(null);(statearr_17465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17466);
return statearr_17465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17466,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___17632 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17602){var state_val_17603 = (state_17602[(1)]);if((state_val_17603 === (7)))
{var state_17602__$1 = state_17602;var statearr_17604_17633 = state_17602__$1;(statearr_17604_17633[(2)] = null);
(statearr_17604_17633[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (1)))
{var state_17602__$1 = state_17602;var statearr_17605_17634 = state_17602__$1;(statearr_17605_17634[(2)] = null);
(statearr_17605_17634[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (4)))
{var inst_17566 = (state_17602[(7)]);var inst_17568 = (inst_17566 < cnt);var state_17602__$1 = state_17602;if(cljs.core.truth_(inst_17568))
{var statearr_17606_17635 = state_17602__$1;(statearr_17606_17635[(1)] = (6));
} else
{var statearr_17607_17636 = state_17602__$1;(statearr_17607_17636[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (15)))
{var inst_17598 = (state_17602[(2)]);var state_17602__$1 = state_17602;var statearr_17608_17637 = state_17602__$1;(statearr_17608_17637[(2)] = inst_17598);
(statearr_17608_17637[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (13)))
{var inst_17591 = cljs.core.async.close_BANG_.call(null,out);var state_17602__$1 = state_17602;var statearr_17609_17638 = state_17602__$1;(statearr_17609_17638[(2)] = inst_17591);
(statearr_17609_17638[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (6)))
{var state_17602__$1 = state_17602;var statearr_17610_17639 = state_17602__$1;(statearr_17610_17639[(2)] = null);
(statearr_17610_17639[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (3)))
{var inst_17600 = (state_17602[(2)]);var state_17602__$1 = state_17602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17602__$1,inst_17600);
} else
{if((state_val_17603 === (12)))
{var inst_17588 = (state_17602[(8)]);var inst_17588__$1 = (state_17602[(2)]);var inst_17589 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17588__$1);var state_17602__$1 = (function (){var statearr_17611 = state_17602;(statearr_17611[(8)] = inst_17588__$1);
return statearr_17611;
})();if(cljs.core.truth_(inst_17589))
{var statearr_17612_17640 = state_17602__$1;(statearr_17612_17640[(1)] = (13));
} else
{var statearr_17613_17641 = state_17602__$1;(statearr_17613_17641[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (2)))
{var inst_17565 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17566 = (0);var state_17602__$1 = (function (){var statearr_17614 = state_17602;(statearr_17614[(9)] = inst_17565);
(statearr_17614[(7)] = inst_17566);
return statearr_17614;
})();var statearr_17615_17642 = state_17602__$1;(statearr_17615_17642[(2)] = null);
(statearr_17615_17642[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (11)))
{var inst_17566 = (state_17602[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17602,(10),Object,null,(9));var inst_17575 = chs__$1.call(null,inst_17566);var inst_17576 = done.call(null,inst_17566);var inst_17577 = cljs.core.async.take_BANG_.call(null,inst_17575,inst_17576);var state_17602__$1 = state_17602;var statearr_17616_17643 = state_17602__$1;(statearr_17616_17643[(2)] = inst_17577);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17602__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (9)))
{var inst_17566 = (state_17602[(7)]);var inst_17579 = (state_17602[(2)]);var inst_17580 = (inst_17566 + (1));var inst_17566__$1 = inst_17580;var state_17602__$1 = (function (){var statearr_17617 = state_17602;(statearr_17617[(10)] = inst_17579);
(statearr_17617[(7)] = inst_17566__$1);
return statearr_17617;
})();var statearr_17618_17644 = state_17602__$1;(statearr_17618_17644[(2)] = null);
(statearr_17618_17644[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (5)))
{var inst_17586 = (state_17602[(2)]);var state_17602__$1 = (function (){var statearr_17619 = state_17602;(statearr_17619[(11)] = inst_17586);
return statearr_17619;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17602__$1,(12),dchan);
} else
{if((state_val_17603 === (14)))
{var inst_17588 = (state_17602[(8)]);var inst_17593 = cljs.core.apply.call(null,f,inst_17588);var state_17602__$1 = state_17602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17602__$1,(16),out,inst_17593);
} else
{if((state_val_17603 === (16)))
{var inst_17595 = (state_17602[(2)]);var state_17602__$1 = (function (){var statearr_17620 = state_17602;(statearr_17620[(12)] = inst_17595);
return statearr_17620;
})();var statearr_17621_17645 = state_17602__$1;(statearr_17621_17645[(2)] = null);
(statearr_17621_17645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (10)))
{var inst_17570 = (state_17602[(2)]);var inst_17571 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17602__$1 = (function (){var statearr_17622 = state_17602;(statearr_17622[(13)] = inst_17570);
return statearr_17622;
})();var statearr_17623_17646 = state_17602__$1;(statearr_17623_17646[(2)] = inst_17571);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17602__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17603 === (8)))
{var inst_17584 = (state_17602[(2)]);var state_17602__$1 = state_17602;var statearr_17624_17647 = state_17602__$1;(statearr_17624_17647[(2)] = inst_17584);
(statearr_17624_17647[(1)] = (5));
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
});})(c__5693__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17628[(0)] = state_machine__5679__auto__);
(statearr_17628[(1)] = (1));
return statearr_17628;
});
var state_machine__5679__auto____1 = (function (state_17602){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17602);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17629){if((e17629 instanceof Object))
{var ex__5682__auto__ = e17629;var statearr_17630_17648 = state_17602;(statearr_17630_17648[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17602);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17649 = state_17602;
state_17602 = G__17649;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17602){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_17631 = f__5694__auto__.call(null);(statearr_17631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17632);
return statearr_17631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17757,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17757,out){
return (function (state_17733){var state_val_17734 = (state_17733[(1)]);if((state_val_17734 === (7)))
{var inst_17712 = (state_17733[(7)]);var inst_17713 = (state_17733[(8)]);var inst_17712__$1 = (state_17733[(2)]);var inst_17713__$1 = cljs.core.nth.call(null,inst_17712__$1,(0),null);var inst_17714 = cljs.core.nth.call(null,inst_17712__$1,(1),null);var inst_17715 = (inst_17713__$1 == null);var state_17733__$1 = (function (){var statearr_17735 = state_17733;(statearr_17735[(9)] = inst_17714);
(statearr_17735[(7)] = inst_17712__$1);
(statearr_17735[(8)] = inst_17713__$1);
return statearr_17735;
})();if(cljs.core.truth_(inst_17715))
{var statearr_17736_17758 = state_17733__$1;(statearr_17736_17758[(1)] = (8));
} else
{var statearr_17737_17759 = state_17733__$1;(statearr_17737_17759[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (1)))
{var inst_17704 = cljs.core.vec.call(null,chs);var inst_17705 = inst_17704;var state_17733__$1 = (function (){var statearr_17738 = state_17733;(statearr_17738[(10)] = inst_17705);
return statearr_17738;
})();var statearr_17739_17760 = state_17733__$1;(statearr_17739_17760[(2)] = null);
(statearr_17739_17760[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (4)))
{var inst_17705 = (state_17733[(10)]);var state_17733__$1 = state_17733;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17733__$1,(7),inst_17705);
} else
{if((state_val_17734 === (6)))
{var inst_17729 = (state_17733[(2)]);var state_17733__$1 = state_17733;var statearr_17740_17761 = state_17733__$1;(statearr_17740_17761[(2)] = inst_17729);
(statearr_17740_17761[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (3)))
{var inst_17731 = (state_17733[(2)]);var state_17733__$1 = state_17733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17733__$1,inst_17731);
} else
{if((state_val_17734 === (2)))
{var inst_17705 = (state_17733[(10)]);var inst_17707 = cljs.core.count.call(null,inst_17705);var inst_17708 = (inst_17707 > (0));var state_17733__$1 = state_17733;if(cljs.core.truth_(inst_17708))
{var statearr_17742_17762 = state_17733__$1;(statearr_17742_17762[(1)] = (4));
} else
{var statearr_17743_17763 = state_17733__$1;(statearr_17743_17763[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (11)))
{var inst_17705 = (state_17733[(10)]);var inst_17722 = (state_17733[(2)]);var tmp17741 = inst_17705;var inst_17705__$1 = tmp17741;var state_17733__$1 = (function (){var statearr_17744 = state_17733;(statearr_17744[(11)] = inst_17722);
(statearr_17744[(10)] = inst_17705__$1);
return statearr_17744;
})();var statearr_17745_17764 = state_17733__$1;(statearr_17745_17764[(2)] = null);
(statearr_17745_17764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (9)))
{var inst_17713 = (state_17733[(8)]);var state_17733__$1 = state_17733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17733__$1,(11),out,inst_17713);
} else
{if((state_val_17734 === (5)))
{var inst_17727 = cljs.core.async.close_BANG_.call(null,out);var state_17733__$1 = state_17733;var statearr_17746_17765 = state_17733__$1;(statearr_17746_17765[(2)] = inst_17727);
(statearr_17746_17765[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (10)))
{var inst_17725 = (state_17733[(2)]);var state_17733__$1 = state_17733;var statearr_17747_17766 = state_17733__$1;(statearr_17747_17766[(2)] = inst_17725);
(statearr_17747_17766[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17734 === (8)))
{var inst_17705 = (state_17733[(10)]);var inst_17714 = (state_17733[(9)]);var inst_17712 = (state_17733[(7)]);var inst_17713 = (state_17733[(8)]);var inst_17717 = (function (){var c = inst_17714;var v = inst_17713;var vec__17710 = inst_17712;var cs = inst_17705;return ((function (c,v,vec__17710,cs,inst_17705,inst_17714,inst_17712,inst_17713,state_val_17734,c__5693__auto___17757,out){
return (function (p1__17650_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17650_SHARP_);
});
;})(c,v,vec__17710,cs,inst_17705,inst_17714,inst_17712,inst_17713,state_val_17734,c__5693__auto___17757,out))
})();var inst_17718 = cljs.core.filterv.call(null,inst_17717,inst_17705);var inst_17705__$1 = inst_17718;var state_17733__$1 = (function (){var statearr_17748 = state_17733;(statearr_17748[(10)] = inst_17705__$1);
return statearr_17748;
})();var statearr_17749_17767 = state_17733__$1;(statearr_17749_17767[(2)] = null);
(statearr_17749_17767[(1)] = (2));
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
});})(c__5693__auto___17757,out))
;return ((function (switch__5678__auto__,c__5693__auto___17757,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17753 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17753[(0)] = state_machine__5679__auto__);
(statearr_17753[(1)] = (1));
return statearr_17753;
});
var state_machine__5679__auto____1 = (function (state_17733){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17733);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17754){if((e17754 instanceof Object))
{var ex__5682__auto__ = e17754;var statearr_17755_17768 = state_17733;(statearr_17755_17768[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17769 = state_17733;
state_17733 = G__17769;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17733){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17757,out))
})();var state__5695__auto__ = (function (){var statearr_17756 = f__5694__auto__.call(null);(statearr_17756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17757);
return statearr_17756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17757,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17862 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17862,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17862,out){
return (function (state_17839){var state_val_17840 = (state_17839[(1)]);if((state_val_17840 === (7)))
{var inst_17821 = (state_17839[(7)]);var inst_17821__$1 = (state_17839[(2)]);var inst_17822 = (inst_17821__$1 == null);var inst_17823 = cljs.core.not.call(null,inst_17822);var state_17839__$1 = (function (){var statearr_17841 = state_17839;(statearr_17841[(7)] = inst_17821__$1);
return statearr_17841;
})();if(inst_17823)
{var statearr_17842_17863 = state_17839__$1;(statearr_17842_17863[(1)] = (8));
} else
{var statearr_17843_17864 = state_17839__$1;(statearr_17843_17864[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (1)))
{var inst_17816 = (0);var state_17839__$1 = (function (){var statearr_17844 = state_17839;(statearr_17844[(8)] = inst_17816);
return statearr_17844;
})();var statearr_17845_17865 = state_17839__$1;(statearr_17845_17865[(2)] = null);
(statearr_17845_17865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (4)))
{var state_17839__$1 = state_17839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17839__$1,(7),ch);
} else
{if((state_val_17840 === (6)))
{var inst_17834 = (state_17839[(2)]);var state_17839__$1 = state_17839;var statearr_17846_17866 = state_17839__$1;(statearr_17846_17866[(2)] = inst_17834);
(statearr_17846_17866[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (3)))
{var inst_17836 = (state_17839[(2)]);var inst_17837 = cljs.core.async.close_BANG_.call(null,out);var state_17839__$1 = (function (){var statearr_17847 = state_17839;(statearr_17847[(9)] = inst_17836);
return statearr_17847;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17839__$1,inst_17837);
} else
{if((state_val_17840 === (2)))
{var inst_17816 = (state_17839[(8)]);var inst_17818 = (inst_17816 < n);var state_17839__$1 = state_17839;if(cljs.core.truth_(inst_17818))
{var statearr_17848_17867 = state_17839__$1;(statearr_17848_17867[(1)] = (4));
} else
{var statearr_17849_17868 = state_17839__$1;(statearr_17849_17868[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (11)))
{var inst_17816 = (state_17839[(8)]);var inst_17826 = (state_17839[(2)]);var inst_17827 = (inst_17816 + (1));var inst_17816__$1 = inst_17827;var state_17839__$1 = (function (){var statearr_17850 = state_17839;(statearr_17850[(10)] = inst_17826);
(statearr_17850[(8)] = inst_17816__$1);
return statearr_17850;
})();var statearr_17851_17869 = state_17839__$1;(statearr_17851_17869[(2)] = null);
(statearr_17851_17869[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (9)))
{var state_17839__$1 = state_17839;var statearr_17852_17870 = state_17839__$1;(statearr_17852_17870[(2)] = null);
(statearr_17852_17870[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (5)))
{var state_17839__$1 = state_17839;var statearr_17853_17871 = state_17839__$1;(statearr_17853_17871[(2)] = null);
(statearr_17853_17871[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (10)))
{var inst_17831 = (state_17839[(2)]);var state_17839__$1 = state_17839;var statearr_17854_17872 = state_17839__$1;(statearr_17854_17872[(2)] = inst_17831);
(statearr_17854_17872[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (8)))
{var inst_17821 = (state_17839[(7)]);var state_17839__$1 = state_17839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17839__$1,(11),out,inst_17821);
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
});})(c__5693__auto___17862,out))
;return ((function (switch__5678__auto__,c__5693__auto___17862,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17858 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17858[(0)] = state_machine__5679__auto__);
(statearr_17858[(1)] = (1));
return statearr_17858;
});
var state_machine__5679__auto____1 = (function (state_17839){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17839);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17859){if((e17859 instanceof Object))
{var ex__5682__auto__ = e17859;var statearr_17860_17873 = state_17839;(statearr_17860_17873[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17874 = state_17839;
state_17839 = G__17874;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17839){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17862,out))
})();var state__5695__auto__ = (function (){var statearr_17861 = f__5694__auto__.call(null);(statearr_17861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17862);
return statearr_17861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17862,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17971 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17971,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17971,out){
return (function (state_17946){var state_val_17947 = (state_17946[(1)]);if((state_val_17947 === (7)))
{var inst_17941 = (state_17946[(2)]);var state_17946__$1 = state_17946;var statearr_17948_17972 = state_17946__$1;(statearr_17948_17972[(2)] = inst_17941);
(statearr_17948_17972[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (1)))
{var inst_17923 = null;var state_17946__$1 = (function (){var statearr_17949 = state_17946;(statearr_17949[(7)] = inst_17923);
return statearr_17949;
})();var statearr_17950_17973 = state_17946__$1;(statearr_17950_17973[(2)] = null);
(statearr_17950_17973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (4)))
{var inst_17926 = (state_17946[(8)]);var inst_17926__$1 = (state_17946[(2)]);var inst_17927 = (inst_17926__$1 == null);var inst_17928 = cljs.core.not.call(null,inst_17927);var state_17946__$1 = (function (){var statearr_17951 = state_17946;(statearr_17951[(8)] = inst_17926__$1);
return statearr_17951;
})();if(inst_17928)
{var statearr_17952_17974 = state_17946__$1;(statearr_17952_17974[(1)] = (5));
} else
{var statearr_17953_17975 = state_17946__$1;(statearr_17953_17975[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (6)))
{var state_17946__$1 = state_17946;var statearr_17954_17976 = state_17946__$1;(statearr_17954_17976[(2)] = null);
(statearr_17954_17976[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (3)))
{var inst_17943 = (state_17946[(2)]);var inst_17944 = cljs.core.async.close_BANG_.call(null,out);var state_17946__$1 = (function (){var statearr_17955 = state_17946;(statearr_17955[(9)] = inst_17943);
return statearr_17955;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17946__$1,inst_17944);
} else
{if((state_val_17947 === (2)))
{var state_17946__$1 = state_17946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17946__$1,(4),ch);
} else
{if((state_val_17947 === (11)))
{var inst_17926 = (state_17946[(8)]);var inst_17935 = (state_17946[(2)]);var inst_17923 = inst_17926;var state_17946__$1 = (function (){var statearr_17956 = state_17946;(statearr_17956[(7)] = inst_17923);
(statearr_17956[(10)] = inst_17935);
return statearr_17956;
})();var statearr_17957_17977 = state_17946__$1;(statearr_17957_17977[(2)] = null);
(statearr_17957_17977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (9)))
{var inst_17926 = (state_17946[(8)]);var state_17946__$1 = state_17946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17946__$1,(11),out,inst_17926);
} else
{if((state_val_17947 === (5)))
{var inst_17923 = (state_17946[(7)]);var inst_17926 = (state_17946[(8)]);var inst_17930 = cljs.core._EQ_.call(null,inst_17926,inst_17923);var state_17946__$1 = state_17946;if(inst_17930)
{var statearr_17959_17978 = state_17946__$1;(statearr_17959_17978[(1)] = (8));
} else
{var statearr_17960_17979 = state_17946__$1;(statearr_17960_17979[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (10)))
{var inst_17938 = (state_17946[(2)]);var state_17946__$1 = state_17946;var statearr_17961_17980 = state_17946__$1;(statearr_17961_17980[(2)] = inst_17938);
(statearr_17961_17980[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (8)))
{var inst_17923 = (state_17946[(7)]);var tmp17958 = inst_17923;var inst_17923__$1 = tmp17958;var state_17946__$1 = (function (){var statearr_17962 = state_17946;(statearr_17962[(7)] = inst_17923__$1);
return statearr_17962;
})();var statearr_17963_17981 = state_17946__$1;(statearr_17963_17981[(2)] = null);
(statearr_17963_17981[(1)] = (2));
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
});})(c__5693__auto___17971,out))
;return ((function (switch__5678__auto__,c__5693__auto___17971,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17967 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17967[(0)] = state_machine__5679__auto__);
(statearr_17967[(1)] = (1));
return statearr_17967;
});
var state_machine__5679__auto____1 = (function (state_17946){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17946);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17968){if((e17968 instanceof Object))
{var ex__5682__auto__ = e17968;var statearr_17969_17982 = state_17946;(statearr_17969_17982[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17983 = state_17946;
state_17946 = G__17983;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17946){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17971,out))
})();var state__5695__auto__ = (function (){var statearr_17970 = f__5694__auto__.call(null);(statearr_17970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17971);
return statearr_17970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17971,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___18118 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___18118,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___18118,out){
return (function (state_18088){var state_val_18089 = (state_18088[(1)]);if((state_val_18089 === (7)))
{var inst_18084 = (state_18088[(2)]);var state_18088__$1 = state_18088;var statearr_18090_18119 = state_18088__$1;(statearr_18090_18119[(2)] = inst_18084);
(statearr_18090_18119[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (1)))
{var inst_18051 = (new Array(n));var inst_18052 = inst_18051;var inst_18053 = (0);var state_18088__$1 = (function (){var statearr_18091 = state_18088;(statearr_18091[(7)] = inst_18053);
(statearr_18091[(8)] = inst_18052);
return statearr_18091;
})();var statearr_18092_18120 = state_18088__$1;(statearr_18092_18120[(2)] = null);
(statearr_18092_18120[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (4)))
{var inst_18056 = (state_18088[(9)]);var inst_18056__$1 = (state_18088[(2)]);var inst_18057 = (inst_18056__$1 == null);var inst_18058 = cljs.core.not.call(null,inst_18057);var state_18088__$1 = (function (){var statearr_18093 = state_18088;(statearr_18093[(9)] = inst_18056__$1);
return statearr_18093;
})();if(inst_18058)
{var statearr_18094_18121 = state_18088__$1;(statearr_18094_18121[(1)] = (5));
} else
{var statearr_18095_18122 = state_18088__$1;(statearr_18095_18122[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (15)))
{var inst_18078 = (state_18088[(2)]);var state_18088__$1 = state_18088;var statearr_18096_18123 = state_18088__$1;(statearr_18096_18123[(2)] = inst_18078);
(statearr_18096_18123[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (13)))
{var state_18088__$1 = state_18088;var statearr_18097_18124 = state_18088__$1;(statearr_18097_18124[(2)] = null);
(statearr_18097_18124[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (6)))
{var inst_18053 = (state_18088[(7)]);var inst_18074 = (inst_18053 > (0));var state_18088__$1 = state_18088;if(cljs.core.truth_(inst_18074))
{var statearr_18098_18125 = state_18088__$1;(statearr_18098_18125[(1)] = (12));
} else
{var statearr_18099_18126 = state_18088__$1;(statearr_18099_18126[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (3)))
{var inst_18086 = (state_18088[(2)]);var state_18088__$1 = state_18088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18088__$1,inst_18086);
} else
{if((state_val_18089 === (12)))
{var inst_18052 = (state_18088[(8)]);var inst_18076 = cljs.core.vec.call(null,inst_18052);var state_18088__$1 = state_18088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18088__$1,(15),out,inst_18076);
} else
{if((state_val_18089 === (2)))
{var state_18088__$1 = state_18088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18088__$1,(4),ch);
} else
{if((state_val_18089 === (11)))
{var inst_18068 = (state_18088[(2)]);var inst_18069 = (new Array(n));var inst_18052 = inst_18069;var inst_18053 = (0);var state_18088__$1 = (function (){var statearr_18100 = state_18088;(statearr_18100[(7)] = inst_18053);
(statearr_18100[(10)] = inst_18068);
(statearr_18100[(8)] = inst_18052);
return statearr_18100;
})();var statearr_18101_18127 = state_18088__$1;(statearr_18101_18127[(2)] = null);
(statearr_18101_18127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (9)))
{var inst_18052 = (state_18088[(8)]);var inst_18066 = cljs.core.vec.call(null,inst_18052);var state_18088__$1 = state_18088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18088__$1,(11),out,inst_18066);
} else
{if((state_val_18089 === (5)))
{var inst_18053 = (state_18088[(7)]);var inst_18052 = (state_18088[(8)]);var inst_18061 = (state_18088[(11)]);var inst_18056 = (state_18088[(9)]);var inst_18060 = (inst_18052[inst_18053] = inst_18056);var inst_18061__$1 = (inst_18053 + (1));var inst_18062 = (inst_18061__$1 < n);var state_18088__$1 = (function (){var statearr_18102 = state_18088;(statearr_18102[(11)] = inst_18061__$1);
(statearr_18102[(12)] = inst_18060);
return statearr_18102;
})();if(cljs.core.truth_(inst_18062))
{var statearr_18103_18128 = state_18088__$1;(statearr_18103_18128[(1)] = (8));
} else
{var statearr_18104_18129 = state_18088__$1;(statearr_18104_18129[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (14)))
{var inst_18081 = (state_18088[(2)]);var inst_18082 = cljs.core.async.close_BANG_.call(null,out);var state_18088__$1 = (function (){var statearr_18106 = state_18088;(statearr_18106[(13)] = inst_18081);
return statearr_18106;
})();var statearr_18107_18130 = state_18088__$1;(statearr_18107_18130[(2)] = inst_18082);
(statearr_18107_18130[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (10)))
{var inst_18072 = (state_18088[(2)]);var state_18088__$1 = state_18088;var statearr_18108_18131 = state_18088__$1;(statearr_18108_18131[(2)] = inst_18072);
(statearr_18108_18131[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18089 === (8)))
{var inst_18052 = (state_18088[(8)]);var inst_18061 = (state_18088[(11)]);var tmp18105 = inst_18052;var inst_18052__$1 = tmp18105;var inst_18053 = inst_18061;var state_18088__$1 = (function (){var statearr_18109 = state_18088;(statearr_18109[(7)] = inst_18053);
(statearr_18109[(8)] = inst_18052__$1);
return statearr_18109;
})();var statearr_18110_18132 = state_18088__$1;(statearr_18110_18132[(2)] = null);
(statearr_18110_18132[(1)] = (2));
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
});})(c__5693__auto___18118,out))
;return ((function (switch__5678__auto__,c__5693__auto___18118,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_18114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18114[(0)] = state_machine__5679__auto__);
(statearr_18114[(1)] = (1));
return statearr_18114;
});
var state_machine__5679__auto____1 = (function (state_18088){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_18088);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e18115){if((e18115 instanceof Object))
{var ex__5682__auto__ = e18115;var statearr_18116_18133 = state_18088;(statearr_18116_18133[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18134 = state_18088;
state_18088 = G__18134;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_18088){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_18088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___18118,out))
})();var state__5695__auto__ = (function (){var statearr_18117 = f__5694__auto__.call(null);(statearr_18117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___18118);
return statearr_18117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___18118,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___18277 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___18277,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___18277,out){
return (function (state_18247){var state_val_18248 = (state_18247[(1)]);if((state_val_18248 === (7)))
{var inst_18243 = (state_18247[(2)]);var state_18247__$1 = state_18247;var statearr_18249_18278 = state_18247__$1;(statearr_18249_18278[(2)] = inst_18243);
(statearr_18249_18278[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (1)))
{var inst_18206 = [];var inst_18207 = inst_18206;var inst_18208 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18247__$1 = (function (){var statearr_18250 = state_18247;(statearr_18250[(7)] = inst_18208);
(statearr_18250[(8)] = inst_18207);
return statearr_18250;
})();var statearr_18251_18279 = state_18247__$1;(statearr_18251_18279[(2)] = null);
(statearr_18251_18279[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (4)))
{var inst_18211 = (state_18247[(9)]);var inst_18211__$1 = (state_18247[(2)]);var inst_18212 = (inst_18211__$1 == null);var inst_18213 = cljs.core.not.call(null,inst_18212);var state_18247__$1 = (function (){var statearr_18252 = state_18247;(statearr_18252[(9)] = inst_18211__$1);
return statearr_18252;
})();if(inst_18213)
{var statearr_18253_18280 = state_18247__$1;(statearr_18253_18280[(1)] = (5));
} else
{var statearr_18254_18281 = state_18247__$1;(statearr_18254_18281[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (15)))
{var inst_18237 = (state_18247[(2)]);var state_18247__$1 = state_18247;var statearr_18255_18282 = state_18247__$1;(statearr_18255_18282[(2)] = inst_18237);
(statearr_18255_18282[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (13)))
{var state_18247__$1 = state_18247;var statearr_18256_18283 = state_18247__$1;(statearr_18256_18283[(2)] = null);
(statearr_18256_18283[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (6)))
{var inst_18207 = (state_18247[(8)]);var inst_18232 = inst_18207.length;var inst_18233 = (inst_18232 > (0));var state_18247__$1 = state_18247;if(cljs.core.truth_(inst_18233))
{var statearr_18257_18284 = state_18247__$1;(statearr_18257_18284[(1)] = (12));
} else
{var statearr_18258_18285 = state_18247__$1;(statearr_18258_18285[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (3)))
{var inst_18245 = (state_18247[(2)]);var state_18247__$1 = state_18247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18247__$1,inst_18245);
} else
{if((state_val_18248 === (12)))
{var inst_18207 = (state_18247[(8)]);var inst_18235 = cljs.core.vec.call(null,inst_18207);var state_18247__$1 = state_18247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18247__$1,(15),out,inst_18235);
} else
{if((state_val_18248 === (2)))
{var state_18247__$1 = state_18247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18247__$1,(4),ch);
} else
{if((state_val_18248 === (11)))
{var inst_18211 = (state_18247[(9)]);var inst_18215 = (state_18247[(10)]);var inst_18225 = (state_18247[(2)]);var inst_18226 = [];var inst_18227 = inst_18226.push(inst_18211);var inst_18207 = inst_18226;var inst_18208 = inst_18215;var state_18247__$1 = (function (){var statearr_18259 = state_18247;(statearr_18259[(7)] = inst_18208);
(statearr_18259[(8)] = inst_18207);
(statearr_18259[(11)] = inst_18225);
(statearr_18259[(12)] = inst_18227);
return statearr_18259;
})();var statearr_18260_18286 = state_18247__$1;(statearr_18260_18286[(2)] = null);
(statearr_18260_18286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (9)))
{var inst_18207 = (state_18247[(8)]);var inst_18223 = cljs.core.vec.call(null,inst_18207);var state_18247__$1 = state_18247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18247__$1,(11),out,inst_18223);
} else
{if((state_val_18248 === (5)))
{var inst_18211 = (state_18247[(9)]);var inst_18208 = (state_18247[(7)]);var inst_18215 = (state_18247[(10)]);var inst_18215__$1 = f.call(null,inst_18211);var inst_18216 = cljs.core._EQ_.call(null,inst_18215__$1,inst_18208);var inst_18217 = cljs.core.keyword_identical_QMARK_.call(null,inst_18208,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18218 = (inst_18216) || (inst_18217);var state_18247__$1 = (function (){var statearr_18261 = state_18247;(statearr_18261[(10)] = inst_18215__$1);
return statearr_18261;
})();if(cljs.core.truth_(inst_18218))
{var statearr_18262_18287 = state_18247__$1;(statearr_18262_18287[(1)] = (8));
} else
{var statearr_18263_18288 = state_18247__$1;(statearr_18263_18288[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (14)))
{var inst_18240 = (state_18247[(2)]);var inst_18241 = cljs.core.async.close_BANG_.call(null,out);var state_18247__$1 = (function (){var statearr_18265 = state_18247;(statearr_18265[(13)] = inst_18240);
return statearr_18265;
})();var statearr_18266_18289 = state_18247__$1;(statearr_18266_18289[(2)] = inst_18241);
(statearr_18266_18289[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (10)))
{var inst_18230 = (state_18247[(2)]);var state_18247__$1 = state_18247;var statearr_18267_18290 = state_18247__$1;(statearr_18267_18290[(2)] = inst_18230);
(statearr_18267_18290[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18248 === (8)))
{var inst_18211 = (state_18247[(9)]);var inst_18207 = (state_18247[(8)]);var inst_18215 = (state_18247[(10)]);var inst_18220 = inst_18207.push(inst_18211);var tmp18264 = inst_18207;var inst_18207__$1 = tmp18264;var inst_18208 = inst_18215;var state_18247__$1 = (function (){var statearr_18268 = state_18247;(statearr_18268[(14)] = inst_18220);
(statearr_18268[(7)] = inst_18208);
(statearr_18268[(8)] = inst_18207__$1);
return statearr_18268;
})();var statearr_18269_18291 = state_18247__$1;(statearr_18269_18291[(2)] = null);
(statearr_18269_18291[(1)] = (2));
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
});})(c__5693__auto___18277,out))
;return ((function (switch__5678__auto__,c__5693__auto___18277,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_18273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18273[(0)] = state_machine__5679__auto__);
(statearr_18273[(1)] = (1));
return statearr_18273;
});
var state_machine__5679__auto____1 = (function (state_18247){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_18247);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e18274){if((e18274 instanceof Object))
{var ex__5682__auto__ = e18274;var statearr_18275_18292 = state_18247;(statearr_18275_18292[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18247);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18293 = state_18247;
state_18247 = G__18293;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_18247){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_18247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___18277,out))
})();var state__5695__auto__ = (function (){var statearr_18276 = f__5694__auto__.call(null);(statearr_18276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___18277);
return statearr_18276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___18277,out))
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
