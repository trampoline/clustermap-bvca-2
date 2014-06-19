// Compiled by ClojureScript 0.0-2227
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t47646 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47646 = (function (f,fn_handler,meta47647){
this.f = f;
this.fn_handler = fn_handler;
this.meta47647 = meta47647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47646.cljs$lang$type = true;
cljs.core.async.t47646.cljs$lang$ctorStr = "cljs.core.async/t47646";
cljs.core.async.t47646.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47646");
});
cljs.core.async.t47646.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t47646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t47646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47648){var self__ = this;
var _47648__$1 = this;return self__.meta47647;
});
cljs.core.async.t47646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47648,meta47647__$1){var self__ = this;
var _47648__$1 = this;return (new cljs.core.async.t47646(self__.f,self__.fn_handler,meta47647__$1));
});
cljs.core.async.__GT_t47646 = (function __GT_t47646(f__$1,fn_handler__$1,meta47647){return (new cljs.core.async.t47646(f__$1,fn_handler__$1,meta47647));
});
}
return (new cljs.core.async.t47646(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__47650 = buff;if(G__47650)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__47650.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__47650.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47650);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47650);
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
{var val_47651 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_47651);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_47651,ret){
return (function (){return fn1.call(null,val_47651);
});})(val_47651,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3527__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___47652 = n;var x_47653 = 0;while(true){
if((x_47653 < n__4395__auto___47652))
{(a[x_47653] = 0);
{
var G__47654 = (x_47653 + 1);
x_47653 = G__47654;
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
var G__47655 = (i + 1);
i = G__47655;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t47659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47659 = (function (flag,alt_flag,meta47660){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta47660 = meta47660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47659.cljs$lang$type = true;
cljs.core.async.t47659.cljs$lang$ctorStr = "cljs.core.async/t47659";
cljs.core.async.t47659.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47659");
});})(flag))
;
cljs.core.async.t47659.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t47659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t47659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47661){var self__ = this;
var _47661__$1 = this;return self__.meta47660;
});})(flag))
;
cljs.core.async.t47659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47661,meta47660__$1){var self__ = this;
var _47661__$1 = this;return (new cljs.core.async.t47659(self__.flag,self__.alt_flag,meta47660__$1));
});})(flag))
;
cljs.core.async.__GT_t47659 = ((function (flag){
return (function __GT_t47659(flag__$1,alt_flag__$1,meta47660){return (new cljs.core.async.t47659(flag__$1,alt_flag__$1,meta47660));
});})(flag))
;
}
return (new cljs.core.async.t47659(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t47665 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47665 = (function (cb,flag,alt_handler,meta47666){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta47666 = meta47666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47665.cljs$lang$type = true;
cljs.core.async.t47665.cljs$lang$ctorStr = "cljs.core.async/t47665";
cljs.core.async.t47665.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47665");
});
cljs.core.async.t47665.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t47665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t47665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47667){var self__ = this;
var _47667__$1 = this;return self__.meta47666;
});
cljs.core.async.t47665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47667,meta47666__$1){var self__ = this;
var _47667__$1 = this;return (new cljs.core.async.t47665(self__.cb,self__.flag,self__.alt_handler,meta47666__$1));
});
cljs.core.async.__GT_t47665 = (function __GT_t47665(cb__$1,flag__$1,alt_handler__$1,meta47666){return (new cljs.core.async.t47665(cb__$1,flag__$1,alt_handler__$1,meta47666));
});
}
return (new cljs.core.async.t47665(cb,flag,alt_handler,null));
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
return (function (p1__47668_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47668_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3539__auto__ = wport;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__47669 = (i + 1);
i = G__47669;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3539__auto__ = ret;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3527__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3527__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__47670){var map__47672 = p__47670;var map__47672__$1 = ((cljs.core.seq_QMARK_.call(null,map__47672))?cljs.core.apply.call(null,cljs.core.hash_map,map__47672):map__47672);var opts = map__47672__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__47670 = null;if (arguments.length > 1) {
  p__47670 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__47670);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__47673){
var ports = cljs.core.first(arglist__47673);
var p__47670 = cljs.core.rest(arglist__47673);
return alts_BANG___delegate(ports,p__47670);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t47681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47681 = (function (ch,f,map_LT_,meta47682){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47682 = meta47682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47681.cljs$lang$type = true;
cljs.core.async.t47681.cljs$lang$ctorStr = "cljs.core.async/t47681";
cljs.core.async.t47681.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47681");
});
cljs.core.async.t47681.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t47681.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t47684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47684 = (function (fn1,_,meta47682,ch,f,map_LT_,meta47685){
this.fn1 = fn1;
this._ = _;
this.meta47682 = meta47682;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47685 = meta47685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47684.cljs$lang$type = true;
cljs.core.async.t47684.cljs$lang$ctorStr = "cljs.core.async/t47684";
cljs.core.async.t47684.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47684");
});})(___$1))
;
cljs.core.async.t47684.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47684.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t47684.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t47684.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__47674_SHARP_){return f1.call(null,(((p1__47674_SHARP_ == null))?null:self__.f.call(null,p1__47674_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t47684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47686){var self__ = this;
var _47686__$1 = this;return self__.meta47685;
});})(___$1))
;
cljs.core.async.t47684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47686,meta47685__$1){var self__ = this;
var _47686__$1 = this;return (new cljs.core.async.t47684(self__.fn1,self__._,self__.meta47682,self__.ch,self__.f,self__.map_LT_,meta47685__$1));
});})(___$1))
;
cljs.core.async.__GT_t47684 = ((function (___$1){
return (function __GT_t47684(fn1__$1,___$2,meta47682__$1,ch__$2,f__$2,map_LT___$2,meta47685){return (new cljs.core.async.t47684(fn1__$1,___$2,meta47682__$1,ch__$2,f__$2,map_LT___$2,meta47685));
});})(___$1))
;
}
return (new cljs.core.async.t47684(fn1,___$1,self__.meta47682,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t47681.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47683){var self__ = this;
var _47683__$1 = this;return self__.meta47682;
});
cljs.core.async.t47681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47683,meta47682__$1){var self__ = this;
var _47683__$1 = this;return (new cljs.core.async.t47681(self__.ch,self__.f,self__.map_LT_,meta47682__$1));
});
cljs.core.async.__GT_t47681 = (function __GT_t47681(ch__$1,f__$1,map_LT___$1,meta47682){return (new cljs.core.async.t47681(ch__$1,f__$1,map_LT___$1,meta47682));
});
}
return (new cljs.core.async.t47681(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t47690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47690 = (function (ch,f,map_GT_,meta47691){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta47691 = meta47691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47690.cljs$lang$type = true;
cljs.core.async.t47690.cljs$lang$ctorStr = "cljs.core.async/t47690";
cljs.core.async.t47690.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47690");
});
cljs.core.async.t47690.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t47690.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47690.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47692){var self__ = this;
var _47692__$1 = this;return self__.meta47691;
});
cljs.core.async.t47690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47692,meta47691__$1){var self__ = this;
var _47692__$1 = this;return (new cljs.core.async.t47690(self__.ch,self__.f,self__.map_GT_,meta47691__$1));
});
cljs.core.async.__GT_t47690 = (function __GT_t47690(ch__$1,f__$1,map_GT___$1,meta47691){return (new cljs.core.async.t47690(ch__$1,f__$1,map_GT___$1,meta47691));
});
}
return (new cljs.core.async.t47690(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t47696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47696 = (function (ch,p,filter_GT_,meta47697){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta47697 = meta47697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47696.cljs$lang$type = true;
cljs.core.async.t47696.cljs$lang$ctorStr = "cljs.core.async/t47696";
cljs.core.async.t47696.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47696");
});
cljs.core.async.t47696.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47696.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t47696.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47696.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47696.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47696.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47698){var self__ = this;
var _47698__$1 = this;return self__.meta47697;
});
cljs.core.async.t47696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47698,meta47697__$1){var self__ = this;
var _47698__$1 = this;return (new cljs.core.async.t47696(self__.ch,self__.p,self__.filter_GT_,meta47697__$1));
});
cljs.core.async.__GT_t47696 = (function __GT_t47696(ch__$1,p__$1,filter_GT___$1,meta47697){return (new cljs.core.async.t47696(ch__$1,p__$1,filter_GT___$1,meta47697));
});
}
return (new cljs.core.async.t47696(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___47781 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___47781,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___47781,out){
return (function (state_47760){var state_val_47761 = (state_47760[1]);if((state_val_47761 === 7))
{var inst_47756 = (state_47760[2]);var state_47760__$1 = state_47760;var statearr_47762_47782 = state_47760__$1;(statearr_47762_47782[2] = inst_47756);
(statearr_47762_47782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47761 === 1))
{var state_47760__$1 = state_47760;var statearr_47763_47783 = state_47760__$1;(statearr_47763_47783[2] = null);
(statearr_47763_47783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47761 === 4))
{var inst_47742 = (state_47760[7]);var inst_47742__$1 = (state_47760[2]);var inst_47743 = (inst_47742__$1 == null);var state_47760__$1 = (function (){var statearr_47764 = state_47760;(statearr_47764[7] = inst_47742__$1);
return statearr_47764;
})();if(cljs.core.truth_(inst_47743))
{var statearr_47765_47784 = state_47760__$1;(statearr_47765_47784[1] = 5);
} else
{var statearr_47766_47785 = state_47760__$1;(statearr_47766_47785[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47761 === 6))
{var inst_47742 = (state_47760[7]);var inst_47747 = p.call(null,inst_47742);var state_47760__$1 = state_47760;if(cljs.core.truth_(inst_47747))
{var statearr_47767_47786 = state_47760__$1;(statearr_47767_47786[1] = 8);
} else
{var statearr_47768_47787 = state_47760__$1;(statearr_47768_47787[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47761 === 3))
{var inst_47758 = (state_47760[2]);var state_47760__$1 = state_47760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47760__$1,inst_47758);
} else
{if((state_val_47761 === 2))
{var state_47760__$1 = state_47760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47760__$1,4,ch);
} else
{if((state_val_47761 === 11))
{var inst_47750 = (state_47760[2]);var state_47760__$1 = state_47760;var statearr_47769_47788 = state_47760__$1;(statearr_47769_47788[2] = inst_47750);
(statearr_47769_47788[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47761 === 9))
{var state_47760__$1 = state_47760;var statearr_47770_47789 = state_47760__$1;(statearr_47770_47789[2] = null);
(statearr_47770_47789[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47761 === 5))
{var inst_47745 = cljs.core.async.close_BANG_.call(null,out);var state_47760__$1 = state_47760;var statearr_47771_47790 = state_47760__$1;(statearr_47771_47790[2] = inst_47745);
(statearr_47771_47790[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47761 === 10))
{var inst_47753 = (state_47760[2]);var state_47760__$1 = (function (){var statearr_47772 = state_47760;(statearr_47772[8] = inst_47753);
return statearr_47772;
})();var statearr_47773_47791 = state_47760__$1;(statearr_47773_47791[2] = null);
(statearr_47773_47791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47761 === 8))
{var inst_47742 = (state_47760[7]);var state_47760__$1 = state_47760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47760__$1,11,out,inst_47742);
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
});})(c__5689__auto___47781,out))
;return ((function (switch__5674__auto__,c__5689__auto___47781,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_47777 = [null,null,null,null,null,null,null,null,null];(statearr_47777[0] = state_machine__5675__auto__);
(statearr_47777[1] = 1);
return statearr_47777;
});
var state_machine__5675__auto____1 = (function (state_47760){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_47760);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e47778){if((e47778 instanceof Object))
{var ex__5678__auto__ = e47778;var statearr_47779_47792 = state_47760;(statearr_47779_47792[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47760);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47793 = state_47760;
state_47760 = G__47793;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_47760){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_47760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___47781,out))
})();var state__5691__auto__ = (function (){var statearr_47780 = f__5690__auto__.call(null);(statearr_47780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___47781);
return statearr_47780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___47781,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_47945){var state_val_47946 = (state_47945[1]);if((state_val_47946 === 7))
{var inst_47941 = (state_47945[2]);var state_47945__$1 = state_47945;var statearr_47947_47984 = state_47945__$1;(statearr_47947_47984[2] = inst_47941);
(statearr_47947_47984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 20))
{var inst_47916 = (state_47945[7]);var inst_47927 = (state_47945[2]);var inst_47928 = cljs.core.next.call(null,inst_47916);var inst_47902 = inst_47928;var inst_47903 = null;var inst_47904 = 0;var inst_47905 = 0;var state_47945__$1 = (function (){var statearr_47948 = state_47945;(statearr_47948[8] = inst_47904);
(statearr_47948[9] = inst_47905);
(statearr_47948[10] = inst_47903);
(statearr_47948[11] = inst_47902);
(statearr_47948[12] = inst_47927);
return statearr_47948;
})();var statearr_47949_47985 = state_47945__$1;(statearr_47949_47985[2] = null);
(statearr_47949_47985[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 1))
{var state_47945__$1 = state_47945;var statearr_47950_47986 = state_47945__$1;(statearr_47950_47986[2] = null);
(statearr_47950_47986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 4))
{var inst_47891 = (state_47945[13]);var inst_47891__$1 = (state_47945[2]);var inst_47892 = (inst_47891__$1 == null);var state_47945__$1 = (function (){var statearr_47954 = state_47945;(statearr_47954[13] = inst_47891__$1);
return statearr_47954;
})();if(cljs.core.truth_(inst_47892))
{var statearr_47955_47987 = state_47945__$1;(statearr_47955_47987[1] = 5);
} else
{var statearr_47956_47988 = state_47945__$1;(statearr_47956_47988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 15))
{var state_47945__$1 = state_47945;var statearr_47957_47989 = state_47945__$1;(statearr_47957_47989[2] = null);
(statearr_47957_47989[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 13))
{var inst_47904 = (state_47945[8]);var inst_47905 = (state_47945[9]);var inst_47903 = (state_47945[10]);var inst_47902 = (state_47945[11]);var inst_47912 = (state_47945[2]);var inst_47913 = (inst_47905 + 1);var tmp47951 = inst_47904;var tmp47952 = inst_47903;var tmp47953 = inst_47902;var inst_47902__$1 = tmp47953;var inst_47903__$1 = tmp47952;var inst_47904__$1 = tmp47951;var inst_47905__$1 = inst_47913;var state_47945__$1 = (function (){var statearr_47958 = state_47945;(statearr_47958[14] = inst_47912);
(statearr_47958[8] = inst_47904__$1);
(statearr_47958[9] = inst_47905__$1);
(statearr_47958[10] = inst_47903__$1);
(statearr_47958[11] = inst_47902__$1);
return statearr_47958;
})();var statearr_47959_47990 = state_47945__$1;(statearr_47959_47990[2] = null);
(statearr_47959_47990[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 6))
{var inst_47891 = (state_47945[13]);var inst_47896 = f.call(null,inst_47891);var inst_47901 = cljs.core.seq.call(null,inst_47896);var inst_47902 = inst_47901;var inst_47903 = null;var inst_47904 = 0;var inst_47905 = 0;var state_47945__$1 = (function (){var statearr_47960 = state_47945;(statearr_47960[8] = inst_47904);
(statearr_47960[9] = inst_47905);
(statearr_47960[10] = inst_47903);
(statearr_47960[11] = inst_47902);
return statearr_47960;
})();var statearr_47961_47991 = state_47945__$1;(statearr_47961_47991[2] = null);
(statearr_47961_47991[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 17))
{var inst_47916 = (state_47945[7]);var inst_47920 = cljs.core.chunk_first.call(null,inst_47916);var inst_47921 = cljs.core.chunk_rest.call(null,inst_47916);var inst_47922 = cljs.core.count.call(null,inst_47920);var inst_47902 = inst_47921;var inst_47903 = inst_47920;var inst_47904 = inst_47922;var inst_47905 = 0;var state_47945__$1 = (function (){var statearr_47962 = state_47945;(statearr_47962[8] = inst_47904);
(statearr_47962[9] = inst_47905);
(statearr_47962[10] = inst_47903);
(statearr_47962[11] = inst_47902);
return statearr_47962;
})();var statearr_47963_47992 = state_47945__$1;(statearr_47963_47992[2] = null);
(statearr_47963_47992[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 3))
{var inst_47943 = (state_47945[2]);var state_47945__$1 = state_47945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47945__$1,inst_47943);
} else
{if((state_val_47946 === 12))
{var inst_47936 = (state_47945[2]);var state_47945__$1 = state_47945;var statearr_47964_47993 = state_47945__$1;(statearr_47964_47993[2] = inst_47936);
(statearr_47964_47993[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 2))
{var state_47945__$1 = state_47945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47945__$1,4,in$);
} else
{if((state_val_47946 === 19))
{var inst_47931 = (state_47945[2]);var state_47945__$1 = state_47945;var statearr_47965_47994 = state_47945__$1;(statearr_47965_47994[2] = inst_47931);
(statearr_47965_47994[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 11))
{var inst_47902 = (state_47945[11]);var inst_47916 = (state_47945[7]);var inst_47916__$1 = cljs.core.seq.call(null,inst_47902);var state_47945__$1 = (function (){var statearr_47966 = state_47945;(statearr_47966[7] = inst_47916__$1);
return statearr_47966;
})();if(inst_47916__$1)
{var statearr_47967_47995 = state_47945__$1;(statearr_47967_47995[1] = 14);
} else
{var statearr_47968_47996 = state_47945__$1;(statearr_47968_47996[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 9))
{var inst_47938 = (state_47945[2]);var state_47945__$1 = (function (){var statearr_47969 = state_47945;(statearr_47969[15] = inst_47938);
return statearr_47969;
})();var statearr_47970_47997 = state_47945__$1;(statearr_47970_47997[2] = null);
(statearr_47970_47997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 5))
{var inst_47894 = cljs.core.async.close_BANG_.call(null,out);var state_47945__$1 = state_47945;var statearr_47971_47998 = state_47945__$1;(statearr_47971_47998[2] = inst_47894);
(statearr_47971_47998[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 14))
{var inst_47916 = (state_47945[7]);var inst_47918 = cljs.core.chunked_seq_QMARK_.call(null,inst_47916);var state_47945__$1 = state_47945;if(inst_47918)
{var statearr_47972_47999 = state_47945__$1;(statearr_47972_47999[1] = 17);
} else
{var statearr_47973_48000 = state_47945__$1;(statearr_47973_48000[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 16))
{var inst_47934 = (state_47945[2]);var state_47945__$1 = state_47945;var statearr_47974_48001 = state_47945__$1;(statearr_47974_48001[2] = inst_47934);
(statearr_47974_48001[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47946 === 10))
{var inst_47905 = (state_47945[9]);var inst_47903 = (state_47945[10]);var inst_47910 = cljs.core._nth.call(null,inst_47903,inst_47905);var state_47945__$1 = state_47945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47945__$1,13,out,inst_47910);
} else
{if((state_val_47946 === 18))
{var inst_47916 = (state_47945[7]);var inst_47925 = cljs.core.first.call(null,inst_47916);var state_47945__$1 = state_47945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47945__$1,20,out,inst_47925);
} else
{if((state_val_47946 === 8))
{var inst_47904 = (state_47945[8]);var inst_47905 = (state_47945[9]);var inst_47907 = (inst_47905 < inst_47904);var inst_47908 = inst_47907;var state_47945__$1 = state_47945;if(cljs.core.truth_(inst_47908))
{var statearr_47975_48002 = state_47945__$1;(statearr_47975_48002[1] = 10);
} else
{var statearr_47976_48003 = state_47945__$1;(statearr_47976_48003[1] = 11);
}
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_47980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47980[0] = state_machine__5675__auto__);
(statearr_47980[1] = 1);
return statearr_47980;
});
var state_machine__5675__auto____1 = (function (state_47945){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_47945);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e47981){if((e47981 instanceof Object))
{var ex__5678__auto__ = e47981;var statearr_47982_48004 = state_47945;(statearr_47982_48004[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48005 = state_47945;
state_47945 = G__48005;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_47945){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_47945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_47983 = f__5690__auto__.call(null);(statearr_47983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_47983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5689__auto___48086 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___48086){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___48086){
return (function (state_48065){var state_val_48066 = (state_48065[1]);if((state_val_48066 === 7))
{var inst_48061 = (state_48065[2]);var state_48065__$1 = state_48065;var statearr_48067_48087 = state_48065__$1;(statearr_48067_48087[2] = inst_48061);
(statearr_48067_48087[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48066 === 1))
{var state_48065__$1 = state_48065;var statearr_48068_48088 = state_48065__$1;(statearr_48068_48088[2] = null);
(statearr_48068_48088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48066 === 4))
{var inst_48048 = (state_48065[7]);var inst_48048__$1 = (state_48065[2]);var inst_48049 = (inst_48048__$1 == null);var state_48065__$1 = (function (){var statearr_48069 = state_48065;(statearr_48069[7] = inst_48048__$1);
return statearr_48069;
})();if(cljs.core.truth_(inst_48049))
{var statearr_48070_48089 = state_48065__$1;(statearr_48070_48089[1] = 5);
} else
{var statearr_48071_48090 = state_48065__$1;(statearr_48071_48090[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48066 === 6))
{var inst_48048 = (state_48065[7]);var state_48065__$1 = state_48065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48065__$1,11,to,inst_48048);
} else
{if((state_val_48066 === 3))
{var inst_48063 = (state_48065[2]);var state_48065__$1 = state_48065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48065__$1,inst_48063);
} else
{if((state_val_48066 === 2))
{var state_48065__$1 = state_48065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48065__$1,4,from);
} else
{if((state_val_48066 === 11))
{var inst_48058 = (state_48065[2]);var state_48065__$1 = (function (){var statearr_48072 = state_48065;(statearr_48072[8] = inst_48058);
return statearr_48072;
})();var statearr_48073_48091 = state_48065__$1;(statearr_48073_48091[2] = null);
(statearr_48073_48091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48066 === 9))
{var state_48065__$1 = state_48065;var statearr_48074_48092 = state_48065__$1;(statearr_48074_48092[2] = null);
(statearr_48074_48092[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48066 === 5))
{var state_48065__$1 = state_48065;if(cljs.core.truth_(close_QMARK_))
{var statearr_48075_48093 = state_48065__$1;(statearr_48075_48093[1] = 8);
} else
{var statearr_48076_48094 = state_48065__$1;(statearr_48076_48094[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48066 === 10))
{var inst_48055 = (state_48065[2]);var state_48065__$1 = state_48065;var statearr_48077_48095 = state_48065__$1;(statearr_48077_48095[2] = inst_48055);
(statearr_48077_48095[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48066 === 8))
{var inst_48052 = cljs.core.async.close_BANG_.call(null,to);var state_48065__$1 = state_48065;var statearr_48078_48096 = state_48065__$1;(statearr_48078_48096[2] = inst_48052);
(statearr_48078_48096[1] = 10);
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
});})(c__5689__auto___48086))
;return ((function (switch__5674__auto__,c__5689__auto___48086){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48082 = [null,null,null,null,null,null,null,null,null];(statearr_48082[0] = state_machine__5675__auto__);
(statearr_48082[1] = 1);
return statearr_48082;
});
var state_machine__5675__auto____1 = (function (state_48065){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48065);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48083){if((e48083 instanceof Object))
{var ex__5678__auto__ = e48083;var statearr_48084_48097 = state_48065;(statearr_48084_48097[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48098 = state_48065;
state_48065 = G__48098;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48065){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___48086))
})();var state__5691__auto__ = (function (){var statearr_48085 = f__5690__auto__.call(null);(statearr_48085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___48086);
return statearr_48085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___48086))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5689__auto___48185 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___48185,tc,fc){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___48185,tc,fc){
return (function (state_48163){var state_val_48164 = (state_48163[1]);if((state_val_48164 === 7))
{var inst_48159 = (state_48163[2]);var state_48163__$1 = state_48163;var statearr_48165_48186 = state_48163__$1;(statearr_48165_48186[2] = inst_48159);
(statearr_48165_48186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48164 === 1))
{var state_48163__$1 = state_48163;var statearr_48166_48187 = state_48163__$1;(statearr_48166_48187[2] = null);
(statearr_48166_48187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48164 === 4))
{var inst_48144 = (state_48163[7]);var inst_48144__$1 = (state_48163[2]);var inst_48145 = (inst_48144__$1 == null);var state_48163__$1 = (function (){var statearr_48167 = state_48163;(statearr_48167[7] = inst_48144__$1);
return statearr_48167;
})();if(cljs.core.truth_(inst_48145))
{var statearr_48168_48188 = state_48163__$1;(statearr_48168_48188[1] = 5);
} else
{var statearr_48169_48189 = state_48163__$1;(statearr_48169_48189[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48164 === 6))
{var inst_48144 = (state_48163[7]);var inst_48150 = p.call(null,inst_48144);var state_48163__$1 = state_48163;if(cljs.core.truth_(inst_48150))
{var statearr_48170_48190 = state_48163__$1;(statearr_48170_48190[1] = 9);
} else
{var statearr_48171_48191 = state_48163__$1;(statearr_48171_48191[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48164 === 3))
{var inst_48161 = (state_48163[2]);var state_48163__$1 = state_48163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48163__$1,inst_48161);
} else
{if((state_val_48164 === 2))
{var state_48163__$1 = state_48163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48163__$1,4,ch);
} else
{if((state_val_48164 === 11))
{var inst_48144 = (state_48163[7]);var inst_48154 = (state_48163[2]);var state_48163__$1 = state_48163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48163__$1,8,inst_48154,inst_48144);
} else
{if((state_val_48164 === 9))
{var state_48163__$1 = state_48163;var statearr_48172_48192 = state_48163__$1;(statearr_48172_48192[2] = tc);
(statearr_48172_48192[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48164 === 5))
{var inst_48147 = cljs.core.async.close_BANG_.call(null,tc);var inst_48148 = cljs.core.async.close_BANG_.call(null,fc);var state_48163__$1 = (function (){var statearr_48173 = state_48163;(statearr_48173[8] = inst_48147);
return statearr_48173;
})();var statearr_48174_48193 = state_48163__$1;(statearr_48174_48193[2] = inst_48148);
(statearr_48174_48193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48164 === 10))
{var state_48163__$1 = state_48163;var statearr_48175_48194 = state_48163__$1;(statearr_48175_48194[2] = fc);
(statearr_48175_48194[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48164 === 8))
{var inst_48156 = (state_48163[2]);var state_48163__$1 = (function (){var statearr_48176 = state_48163;(statearr_48176[9] = inst_48156);
return statearr_48176;
})();var statearr_48177_48195 = state_48163__$1;(statearr_48177_48195[2] = null);
(statearr_48177_48195[1] = 2);
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
});})(c__5689__auto___48185,tc,fc))
;return ((function (switch__5674__auto__,c__5689__auto___48185,tc,fc){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48181 = [null,null,null,null,null,null,null,null,null,null];(statearr_48181[0] = state_machine__5675__auto__);
(statearr_48181[1] = 1);
return statearr_48181;
});
var state_machine__5675__auto____1 = (function (state_48163){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48163);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48182){if((e48182 instanceof Object))
{var ex__5678__auto__ = e48182;var statearr_48183_48196 = state_48163;(statearr_48183_48196[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48197 = state_48163;
state_48163 = G__48197;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48163){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___48185,tc,fc))
})();var state__5691__auto__ = (function (){var statearr_48184 = f__5690__auto__.call(null);(statearr_48184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___48185);
return statearr_48184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___48185,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_48244){var state_val_48245 = (state_48244[1]);if((state_val_48245 === 7))
{var inst_48240 = (state_48244[2]);var state_48244__$1 = state_48244;var statearr_48246_48262 = state_48244__$1;(statearr_48246_48262[2] = inst_48240);
(statearr_48246_48262[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48245 === 6))
{var inst_48230 = (state_48244[7]);var inst_48233 = (state_48244[8]);var inst_48237 = f.call(null,inst_48230,inst_48233);var inst_48230__$1 = inst_48237;var state_48244__$1 = (function (){var statearr_48247 = state_48244;(statearr_48247[7] = inst_48230__$1);
return statearr_48247;
})();var statearr_48248_48263 = state_48244__$1;(statearr_48248_48263[2] = null);
(statearr_48248_48263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48245 === 5))
{var inst_48230 = (state_48244[7]);var state_48244__$1 = state_48244;var statearr_48249_48264 = state_48244__$1;(statearr_48249_48264[2] = inst_48230);
(statearr_48249_48264[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48245 === 4))
{var inst_48233 = (state_48244[8]);var inst_48233__$1 = (state_48244[2]);var inst_48234 = (inst_48233__$1 == null);var state_48244__$1 = (function (){var statearr_48250 = state_48244;(statearr_48250[8] = inst_48233__$1);
return statearr_48250;
})();if(cljs.core.truth_(inst_48234))
{var statearr_48251_48265 = state_48244__$1;(statearr_48251_48265[1] = 5);
} else
{var statearr_48252_48266 = state_48244__$1;(statearr_48252_48266[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48245 === 3))
{var inst_48242 = (state_48244[2]);var state_48244__$1 = state_48244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48244__$1,inst_48242);
} else
{if((state_val_48245 === 2))
{var state_48244__$1 = state_48244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48244__$1,4,ch);
} else
{if((state_val_48245 === 1))
{var inst_48230 = init;var state_48244__$1 = (function (){var statearr_48253 = state_48244;(statearr_48253[7] = inst_48230);
return statearr_48253;
})();var statearr_48254_48267 = state_48244__$1;(statearr_48254_48267[2] = null);
(statearr_48254_48267[1] = 2);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48258 = [null,null,null,null,null,null,null,null,null];(statearr_48258[0] = state_machine__5675__auto__);
(statearr_48258[1] = 1);
return statearr_48258;
});
var state_machine__5675__auto____1 = (function (state_48244){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48244);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48259){if((e48259 instanceof Object))
{var ex__5678__auto__ = e48259;var statearr_48260_48268 = state_48244;(statearr_48260_48268[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48244);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48269 = state_48244;
state_48244 = G__48269;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48244){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_48261 = f__5690__auto__.call(null);(statearr_48261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_48261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_48331){var state_val_48332 = (state_48331[1]);if((state_val_48332 === 7))
{var inst_48312 = (state_48331[7]);var inst_48317 = (state_48331[2]);var inst_48318 = cljs.core.next.call(null,inst_48312);var inst_48312__$1 = inst_48318;var state_48331__$1 = (function (){var statearr_48333 = state_48331;(statearr_48333[7] = inst_48312__$1);
(statearr_48333[8] = inst_48317);
return statearr_48333;
})();var statearr_48334_48352 = state_48331__$1;(statearr_48334_48352[2] = null);
(statearr_48334_48352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48332 === 1))
{var inst_48311 = cljs.core.seq.call(null,coll);var inst_48312 = inst_48311;var state_48331__$1 = (function (){var statearr_48335 = state_48331;(statearr_48335[7] = inst_48312);
return statearr_48335;
})();var statearr_48336_48353 = state_48331__$1;(statearr_48336_48353[2] = null);
(statearr_48336_48353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48332 === 4))
{var inst_48312 = (state_48331[7]);var inst_48315 = cljs.core.first.call(null,inst_48312);var state_48331__$1 = state_48331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48331__$1,7,ch,inst_48315);
} else
{if((state_val_48332 === 6))
{var inst_48327 = (state_48331[2]);var state_48331__$1 = state_48331;var statearr_48337_48354 = state_48331__$1;(statearr_48337_48354[2] = inst_48327);
(statearr_48337_48354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48332 === 3))
{var inst_48329 = (state_48331[2]);var state_48331__$1 = state_48331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48331__$1,inst_48329);
} else
{if((state_val_48332 === 2))
{var inst_48312 = (state_48331[7]);var state_48331__$1 = state_48331;if(cljs.core.truth_(inst_48312))
{var statearr_48338_48355 = state_48331__$1;(statearr_48338_48355[1] = 4);
} else
{var statearr_48339_48356 = state_48331__$1;(statearr_48339_48356[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48332 === 9))
{var state_48331__$1 = state_48331;var statearr_48340_48357 = state_48331__$1;(statearr_48340_48357[2] = null);
(statearr_48340_48357[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48332 === 5))
{var state_48331__$1 = state_48331;if(cljs.core.truth_(close_QMARK_))
{var statearr_48341_48358 = state_48331__$1;(statearr_48341_48358[1] = 8);
} else
{var statearr_48342_48359 = state_48331__$1;(statearr_48342_48359[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48332 === 10))
{var inst_48325 = (state_48331[2]);var state_48331__$1 = state_48331;var statearr_48343_48360 = state_48331__$1;(statearr_48343_48360[2] = inst_48325);
(statearr_48343_48360[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48332 === 8))
{var inst_48322 = cljs.core.async.close_BANG_.call(null,ch);var state_48331__$1 = state_48331;var statearr_48344_48361 = state_48331__$1;(statearr_48344_48361[2] = inst_48322);
(statearr_48344_48361[1] = 10);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48348 = [null,null,null,null,null,null,null,null,null];(statearr_48348[0] = state_machine__5675__auto__);
(statearr_48348[1] = 1);
return statearr_48348;
});
var state_machine__5675__auto____1 = (function (state_48331){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48331);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48349){if((e48349 instanceof Object))
{var ex__5678__auto__ = e48349;var statearr_48350_48362 = state_48331;(statearr_48350_48362[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48363 = state_48331;
state_48331 = G__48363;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48331){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_48351 = f__5690__auto__.call(null);(statearr_48351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_48351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
cljs.core.async.Mux = (function (){var obj48365 = {};return obj48365;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3527__auto__ = _;if(and__3527__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4166__auto__ = (((_ == null))?null:_);return (function (){var or__3539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj48367 = {};return obj48367;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t48591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48591 = (function (cs,ch,mult,meta48592){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta48592 = meta48592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48591.cljs$lang$type = true;
cljs.core.async.t48591.cljs$lang$ctorStr = "cljs.core.async/t48591";
cljs.core.async.t48591.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t48591");
});})(cs))
;
cljs.core.async.t48591.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t48591.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t48591.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t48591.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t48591.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t48591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48593){var self__ = this;
var _48593__$1 = this;return self__.meta48592;
});})(cs))
;
cljs.core.async.t48591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48593,meta48592__$1){var self__ = this;
var _48593__$1 = this;return (new cljs.core.async.t48591(self__.cs,self__.ch,self__.mult,meta48592__$1));
});})(cs))
;
cljs.core.async.__GT_t48591 = ((function (cs){
return (function __GT_t48591(cs__$1,ch__$1,mult__$1,meta48592){return (new cljs.core.async.t48591(cs__$1,ch__$1,mult__$1,meta48592));
});})(cs))
;
}
return (new cljs.core.async.t48591(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5689__auto___48814 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___48814,cs,m,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___48814,cs,m,dchan,dctr,done){
return (function (state_48728){var state_val_48729 = (state_48728[1]);if((state_val_48729 === 7))
{var inst_48724 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48730_48815 = state_48728__$1;(statearr_48730_48815[2] = inst_48724);
(statearr_48730_48815[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 20))
{var inst_48625 = (state_48728[7]);var inst_48635 = cljs.core.first.call(null,inst_48625);var inst_48636 = cljs.core.nth.call(null,inst_48635,0,null);var inst_48637 = cljs.core.nth.call(null,inst_48635,1,null);var state_48728__$1 = (function (){var statearr_48731 = state_48728;(statearr_48731[8] = inst_48636);
return statearr_48731;
})();if(cljs.core.truth_(inst_48637))
{var statearr_48732_48816 = state_48728__$1;(statearr_48732_48816[1] = 22);
} else
{var statearr_48733_48817 = state_48728__$1;(statearr_48733_48817[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 27))
{var inst_48667 = (state_48728[9]);var inst_48665 = (state_48728[10]);var inst_48672 = cljs.core._nth.call(null,inst_48665,inst_48667);var state_48728__$1 = (function (){var statearr_48734 = state_48728;(statearr_48734[11] = inst_48672);
return statearr_48734;
})();var statearr_48735_48818 = state_48728__$1;(statearr_48735_48818[2] = null);
(statearr_48735_48818[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 1))
{var state_48728__$1 = state_48728;var statearr_48736_48819 = state_48728__$1;(statearr_48736_48819[2] = null);
(statearr_48736_48819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 24))
{var inst_48625 = (state_48728[7]);var inst_48642 = (state_48728[2]);var inst_48643 = cljs.core.next.call(null,inst_48625);var inst_48605 = inst_48643;var inst_48606 = null;var inst_48607 = 0;var inst_48608 = 0;var state_48728__$1 = (function (){var statearr_48737 = state_48728;(statearr_48737[12] = inst_48642);
(statearr_48737[13] = inst_48607);
(statearr_48737[14] = inst_48608);
(statearr_48737[15] = inst_48605);
(statearr_48737[16] = inst_48606);
return statearr_48737;
})();var statearr_48738_48820 = state_48728__$1;(statearr_48738_48820[2] = null);
(statearr_48738_48820[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 39))
{var inst_48685 = (state_48728[17]);var inst_48703 = (state_48728[2]);var inst_48704 = cljs.core.next.call(null,inst_48685);var inst_48664 = inst_48704;var inst_48665 = null;var inst_48666 = 0;var inst_48667 = 0;var state_48728__$1 = (function (){var statearr_48742 = state_48728;(statearr_48742[18] = inst_48666);
(statearr_48742[19] = inst_48664);
(statearr_48742[20] = inst_48703);
(statearr_48742[9] = inst_48667);
(statearr_48742[10] = inst_48665);
return statearr_48742;
})();var statearr_48743_48821 = state_48728__$1;(statearr_48743_48821[2] = null);
(statearr_48743_48821[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 4))
{var inst_48596 = (state_48728[21]);var inst_48596__$1 = (state_48728[2]);var inst_48597 = (inst_48596__$1 == null);var state_48728__$1 = (function (){var statearr_48744 = state_48728;(statearr_48744[21] = inst_48596__$1);
return statearr_48744;
})();if(cljs.core.truth_(inst_48597))
{var statearr_48745_48822 = state_48728__$1;(statearr_48745_48822[1] = 5);
} else
{var statearr_48746_48823 = state_48728__$1;(statearr_48746_48823[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 15))
{var inst_48607 = (state_48728[13]);var inst_48608 = (state_48728[14]);var inst_48605 = (state_48728[15]);var inst_48606 = (state_48728[16]);var inst_48621 = (state_48728[2]);var inst_48622 = (inst_48608 + 1);var tmp48739 = inst_48607;var tmp48740 = inst_48605;var tmp48741 = inst_48606;var inst_48605__$1 = tmp48740;var inst_48606__$1 = tmp48741;var inst_48607__$1 = tmp48739;var inst_48608__$1 = inst_48622;var state_48728__$1 = (function (){var statearr_48747 = state_48728;(statearr_48747[22] = inst_48621);
(statearr_48747[13] = inst_48607__$1);
(statearr_48747[14] = inst_48608__$1);
(statearr_48747[15] = inst_48605__$1);
(statearr_48747[16] = inst_48606__$1);
return statearr_48747;
})();var statearr_48748_48824 = state_48728__$1;(statearr_48748_48824[2] = null);
(statearr_48748_48824[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 21))
{var inst_48646 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48749_48825 = state_48728__$1;(statearr_48749_48825[2] = inst_48646);
(statearr_48749_48825[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 31))
{var inst_48672 = (state_48728[11]);var inst_48673 = (state_48728[2]);var inst_48674 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48675 = cljs.core.async.untap_STAR_.call(null,m,inst_48672);var state_48728__$1 = (function (){var statearr_48750 = state_48728;(statearr_48750[23] = inst_48673);
(statearr_48750[24] = inst_48674);
return statearr_48750;
})();var statearr_48751_48826 = state_48728__$1;(statearr_48751_48826[2] = inst_48675);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48728__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 32))
{var inst_48596 = (state_48728[21]);var inst_48672 = (state_48728[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48728,31,Object,null,30);var inst_48679 = cljs.core.async.put_BANG_.call(null,inst_48672,inst_48596,done);var state_48728__$1 = state_48728;var statearr_48752_48827 = state_48728__$1;(statearr_48752_48827[2] = inst_48679);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48728__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 40))
{var inst_48694 = (state_48728[25]);var inst_48695 = (state_48728[2]);var inst_48696 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48697 = cljs.core.async.untap_STAR_.call(null,m,inst_48694);var state_48728__$1 = (function (){var statearr_48753 = state_48728;(statearr_48753[26] = inst_48695);
(statearr_48753[27] = inst_48696);
return statearr_48753;
})();var statearr_48754_48828 = state_48728__$1;(statearr_48754_48828[2] = inst_48697);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48728__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 33))
{var inst_48685 = (state_48728[17]);var inst_48687 = cljs.core.chunked_seq_QMARK_.call(null,inst_48685);var state_48728__$1 = state_48728;if(inst_48687)
{var statearr_48755_48829 = state_48728__$1;(statearr_48755_48829[1] = 36);
} else
{var statearr_48756_48830 = state_48728__$1;(statearr_48756_48830[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 13))
{var inst_48615 = (state_48728[28]);var inst_48618 = cljs.core.async.close_BANG_.call(null,inst_48615);var state_48728__$1 = state_48728;var statearr_48757_48831 = state_48728__$1;(statearr_48757_48831[2] = inst_48618);
(statearr_48757_48831[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 22))
{var inst_48636 = (state_48728[8]);var inst_48639 = cljs.core.async.close_BANG_.call(null,inst_48636);var state_48728__$1 = state_48728;var statearr_48758_48832 = state_48728__$1;(statearr_48758_48832[2] = inst_48639);
(statearr_48758_48832[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 36))
{var inst_48685 = (state_48728[17]);var inst_48689 = cljs.core.chunk_first.call(null,inst_48685);var inst_48690 = cljs.core.chunk_rest.call(null,inst_48685);var inst_48691 = cljs.core.count.call(null,inst_48689);var inst_48664 = inst_48690;var inst_48665 = inst_48689;var inst_48666 = inst_48691;var inst_48667 = 0;var state_48728__$1 = (function (){var statearr_48759 = state_48728;(statearr_48759[18] = inst_48666);
(statearr_48759[19] = inst_48664);
(statearr_48759[9] = inst_48667);
(statearr_48759[10] = inst_48665);
return statearr_48759;
})();var statearr_48760_48833 = state_48728__$1;(statearr_48760_48833[2] = null);
(statearr_48760_48833[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 41))
{var inst_48596 = (state_48728[21]);var inst_48694 = (state_48728[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48728,40,Object,null,39);var inst_48701 = cljs.core.async.put_BANG_.call(null,inst_48694,inst_48596,done);var state_48728__$1 = state_48728;var statearr_48761_48834 = state_48728__$1;(statearr_48761_48834[2] = inst_48701);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48728__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 43))
{var state_48728__$1 = state_48728;var statearr_48762_48835 = state_48728__$1;(statearr_48762_48835[2] = null);
(statearr_48762_48835[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 29))
{var inst_48712 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48763_48836 = state_48728__$1;(statearr_48763_48836[2] = inst_48712);
(statearr_48763_48836[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 44))
{var inst_48721 = (state_48728[2]);var state_48728__$1 = (function (){var statearr_48764 = state_48728;(statearr_48764[29] = inst_48721);
return statearr_48764;
})();var statearr_48765_48837 = state_48728__$1;(statearr_48765_48837[2] = null);
(statearr_48765_48837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 6))
{var inst_48656 = (state_48728[30]);var inst_48655 = cljs.core.deref.call(null,cs);var inst_48656__$1 = cljs.core.keys.call(null,inst_48655);var inst_48657 = cljs.core.count.call(null,inst_48656__$1);var inst_48658 = cljs.core.reset_BANG_.call(null,dctr,inst_48657);var inst_48663 = cljs.core.seq.call(null,inst_48656__$1);var inst_48664 = inst_48663;var inst_48665 = null;var inst_48666 = 0;var inst_48667 = 0;var state_48728__$1 = (function (){var statearr_48766 = state_48728;(statearr_48766[18] = inst_48666);
(statearr_48766[30] = inst_48656__$1);
(statearr_48766[19] = inst_48664);
(statearr_48766[9] = inst_48667);
(statearr_48766[31] = inst_48658);
(statearr_48766[10] = inst_48665);
return statearr_48766;
})();var statearr_48767_48838 = state_48728__$1;(statearr_48767_48838[2] = null);
(statearr_48767_48838[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 28))
{var inst_48664 = (state_48728[19]);var inst_48685 = (state_48728[17]);var inst_48685__$1 = cljs.core.seq.call(null,inst_48664);var state_48728__$1 = (function (){var statearr_48768 = state_48728;(statearr_48768[17] = inst_48685__$1);
return statearr_48768;
})();if(inst_48685__$1)
{var statearr_48769_48839 = state_48728__$1;(statearr_48769_48839[1] = 33);
} else
{var statearr_48770_48840 = state_48728__$1;(statearr_48770_48840[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 25))
{var inst_48666 = (state_48728[18]);var inst_48667 = (state_48728[9]);var inst_48669 = (inst_48667 < inst_48666);var inst_48670 = inst_48669;var state_48728__$1 = state_48728;if(cljs.core.truth_(inst_48670))
{var statearr_48771_48841 = state_48728__$1;(statearr_48771_48841[1] = 27);
} else
{var statearr_48772_48842 = state_48728__$1;(statearr_48772_48842[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 34))
{var state_48728__$1 = state_48728;var statearr_48773_48843 = state_48728__$1;(statearr_48773_48843[2] = null);
(statearr_48773_48843[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 17))
{var state_48728__$1 = state_48728;var statearr_48774_48844 = state_48728__$1;(statearr_48774_48844[2] = null);
(statearr_48774_48844[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 3))
{var inst_48726 = (state_48728[2]);var state_48728__$1 = state_48728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48728__$1,inst_48726);
} else
{if((state_val_48729 === 12))
{var inst_48651 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48775_48845 = state_48728__$1;(statearr_48775_48845[2] = inst_48651);
(statearr_48775_48845[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 2))
{var state_48728__$1 = state_48728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48728__$1,4,ch);
} else
{if((state_val_48729 === 23))
{var state_48728__$1 = state_48728;var statearr_48776_48846 = state_48728__$1;(statearr_48776_48846[2] = null);
(statearr_48776_48846[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 35))
{var inst_48710 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48777_48847 = state_48728__$1;(statearr_48777_48847[2] = inst_48710);
(statearr_48777_48847[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 19))
{var inst_48625 = (state_48728[7]);var inst_48629 = cljs.core.chunk_first.call(null,inst_48625);var inst_48630 = cljs.core.chunk_rest.call(null,inst_48625);var inst_48631 = cljs.core.count.call(null,inst_48629);var inst_48605 = inst_48630;var inst_48606 = inst_48629;var inst_48607 = inst_48631;var inst_48608 = 0;var state_48728__$1 = (function (){var statearr_48778 = state_48728;(statearr_48778[13] = inst_48607);
(statearr_48778[14] = inst_48608);
(statearr_48778[15] = inst_48605);
(statearr_48778[16] = inst_48606);
return statearr_48778;
})();var statearr_48779_48848 = state_48728__$1;(statearr_48779_48848[2] = null);
(statearr_48779_48848[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 11))
{var inst_48625 = (state_48728[7]);var inst_48605 = (state_48728[15]);var inst_48625__$1 = cljs.core.seq.call(null,inst_48605);var state_48728__$1 = (function (){var statearr_48780 = state_48728;(statearr_48780[7] = inst_48625__$1);
return statearr_48780;
})();if(inst_48625__$1)
{var statearr_48781_48849 = state_48728__$1;(statearr_48781_48849[1] = 16);
} else
{var statearr_48782_48850 = state_48728__$1;(statearr_48782_48850[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 9))
{var inst_48653 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48783_48851 = state_48728__$1;(statearr_48783_48851[2] = inst_48653);
(statearr_48783_48851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 5))
{var inst_48603 = cljs.core.deref.call(null,cs);var inst_48604 = cljs.core.seq.call(null,inst_48603);var inst_48605 = inst_48604;var inst_48606 = null;var inst_48607 = 0;var inst_48608 = 0;var state_48728__$1 = (function (){var statearr_48784 = state_48728;(statearr_48784[13] = inst_48607);
(statearr_48784[14] = inst_48608);
(statearr_48784[15] = inst_48605);
(statearr_48784[16] = inst_48606);
return statearr_48784;
})();var statearr_48785_48852 = state_48728__$1;(statearr_48785_48852[2] = null);
(statearr_48785_48852[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 14))
{var state_48728__$1 = state_48728;var statearr_48786_48853 = state_48728__$1;(statearr_48786_48853[2] = null);
(statearr_48786_48853[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 45))
{var inst_48718 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48787_48854 = state_48728__$1;(statearr_48787_48854[2] = inst_48718);
(statearr_48787_48854[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 26))
{var inst_48656 = (state_48728[30]);var inst_48714 = (state_48728[2]);var inst_48715 = cljs.core.seq.call(null,inst_48656);var state_48728__$1 = (function (){var statearr_48788 = state_48728;(statearr_48788[32] = inst_48714);
return statearr_48788;
})();if(inst_48715)
{var statearr_48789_48855 = state_48728__$1;(statearr_48789_48855[1] = 42);
} else
{var statearr_48790_48856 = state_48728__$1;(statearr_48790_48856[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 16))
{var inst_48625 = (state_48728[7]);var inst_48627 = cljs.core.chunked_seq_QMARK_.call(null,inst_48625);var state_48728__$1 = state_48728;if(inst_48627)
{var statearr_48794_48857 = state_48728__$1;(statearr_48794_48857[1] = 19);
} else
{var statearr_48795_48858 = state_48728__$1;(statearr_48795_48858[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 38))
{var inst_48707 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48796_48859 = state_48728__$1;(statearr_48796_48859[2] = inst_48707);
(statearr_48796_48859[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 30))
{var inst_48666 = (state_48728[18]);var inst_48664 = (state_48728[19]);var inst_48667 = (state_48728[9]);var inst_48665 = (state_48728[10]);var inst_48681 = (state_48728[2]);var inst_48682 = (inst_48667 + 1);var tmp48791 = inst_48666;var tmp48792 = inst_48664;var tmp48793 = inst_48665;var inst_48664__$1 = tmp48792;var inst_48665__$1 = tmp48793;var inst_48666__$1 = tmp48791;var inst_48667__$1 = inst_48682;var state_48728__$1 = (function (){var statearr_48797 = state_48728;(statearr_48797[18] = inst_48666__$1);
(statearr_48797[19] = inst_48664__$1);
(statearr_48797[33] = inst_48681);
(statearr_48797[9] = inst_48667__$1);
(statearr_48797[10] = inst_48665__$1);
return statearr_48797;
})();var statearr_48798_48860 = state_48728__$1;(statearr_48798_48860[2] = null);
(statearr_48798_48860[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 10))
{var inst_48608 = (state_48728[14]);var inst_48606 = (state_48728[16]);var inst_48614 = cljs.core._nth.call(null,inst_48606,inst_48608);var inst_48615 = cljs.core.nth.call(null,inst_48614,0,null);var inst_48616 = cljs.core.nth.call(null,inst_48614,1,null);var state_48728__$1 = (function (){var statearr_48799 = state_48728;(statearr_48799[28] = inst_48615);
return statearr_48799;
})();if(cljs.core.truth_(inst_48616))
{var statearr_48800_48861 = state_48728__$1;(statearr_48800_48861[1] = 13);
} else
{var statearr_48801_48862 = state_48728__$1;(statearr_48801_48862[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 18))
{var inst_48649 = (state_48728[2]);var state_48728__$1 = state_48728;var statearr_48802_48863 = state_48728__$1;(statearr_48802_48863[2] = inst_48649);
(statearr_48802_48863[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 42))
{var state_48728__$1 = state_48728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48728__$1,45,dchan);
} else
{if((state_val_48729 === 37))
{var inst_48685 = (state_48728[17]);var inst_48694 = cljs.core.first.call(null,inst_48685);var state_48728__$1 = (function (){var statearr_48803 = state_48728;(statearr_48803[25] = inst_48694);
return statearr_48803;
})();var statearr_48804_48864 = state_48728__$1;(statearr_48804_48864[2] = null);
(statearr_48804_48864[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48729 === 8))
{var inst_48607 = (state_48728[13]);var inst_48608 = (state_48728[14]);var inst_48610 = (inst_48608 < inst_48607);var inst_48611 = inst_48610;var state_48728__$1 = state_48728;if(cljs.core.truth_(inst_48611))
{var statearr_48805_48865 = state_48728__$1;(statearr_48805_48865[1] = 10);
} else
{var statearr_48806_48866 = state_48728__$1;(statearr_48806_48866[1] = 11);
}
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
});})(c__5689__auto___48814,cs,m,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___48814,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48810[0] = state_machine__5675__auto__);
(statearr_48810[1] = 1);
return statearr_48810;
});
var state_machine__5675__auto____1 = (function (state_48728){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48728);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48811){if((e48811 instanceof Object))
{var ex__5678__auto__ = e48811;var statearr_48812_48867 = state_48728;(statearr_48812_48867[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48868 = state_48728;
state_48728 = G__48868;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48728){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___48814,cs,m,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_48813 = f__5690__auto__.call(null);(statearr_48813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___48814);
return statearr_48813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___48814,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj48870 = {};return obj48870;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t48980 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48980 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48981){
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
this.meta48981 = meta48981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48980.cljs$lang$type = true;
cljs.core.async.t48980.cljs$lang$ctorStr = "cljs.core.async/t48980";
cljs.core.async.t48980.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t48980");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48980.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t48980.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48980.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48980.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48980.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48980.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48980.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48982){var self__ = this;
var _48982__$1 = this;return self__.meta48981;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48982,meta48981__$1){var self__ = this;
var _48982__$1 = this;return (new cljs.core.async.t48980(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48981__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t48980 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t48980(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48981){return (new cljs.core.async.t48980(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48981));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t48980(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5689__auto___49089 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49089,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49089,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49047){var state_val_49048 = (state_49047[1]);if((state_val_49048 === 7))
{var inst_48996 = (state_49047[7]);var inst_49001 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48996);var state_49047__$1 = state_49047;var statearr_49049_49090 = state_49047__$1;(statearr_49049_49090[2] = inst_49001);
(statearr_49049_49090[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 20))
{var inst_49011 = (state_49047[8]);var state_49047__$1 = state_49047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49047__$1,23,out,inst_49011);
} else
{if((state_val_49048 === 1))
{var inst_48986 = (state_49047[9]);var inst_48986__$1 = calc_state.call(null);var inst_48987 = cljs.core.seq_QMARK_.call(null,inst_48986__$1);var state_49047__$1 = (function (){var statearr_49050 = state_49047;(statearr_49050[9] = inst_48986__$1);
return statearr_49050;
})();if(inst_48987)
{var statearr_49051_49091 = state_49047__$1;(statearr_49051_49091[1] = 2);
} else
{var statearr_49052_49092 = state_49047__$1;(statearr_49052_49092[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 4))
{var inst_48986 = (state_49047[9]);var inst_48992 = (state_49047[2]);var inst_48993 = cljs.core.get.call(null,inst_48992,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48994 = cljs.core.get.call(null,inst_48992,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48995 = cljs.core.get.call(null,inst_48992,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_48996 = inst_48986;var state_49047__$1 = (function (){var statearr_49053 = state_49047;(statearr_49053[10] = inst_48993);
(statearr_49053[11] = inst_48994);
(statearr_49053[7] = inst_48996);
(statearr_49053[12] = inst_48995);
return statearr_49053;
})();var statearr_49054_49093 = state_49047__$1;(statearr_49054_49093[2] = null);
(statearr_49054_49093[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 15))
{var state_49047__$1 = state_49047;var statearr_49055_49094 = state_49047__$1;(statearr_49055_49094[2] = null);
(statearr_49055_49094[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 21))
{var state_49047__$1 = state_49047;var statearr_49056_49095 = state_49047__$1;(statearr_49056_49095[2] = null);
(statearr_49056_49095[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 13))
{var inst_49043 = (state_49047[2]);var state_49047__$1 = state_49047;var statearr_49057_49096 = state_49047__$1;(statearr_49057_49096[2] = inst_49043);
(statearr_49057_49096[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 22))
{var inst_49004 = (state_49047[13]);var inst_49040 = (state_49047[2]);var inst_48996 = inst_49004;var state_49047__$1 = (function (){var statearr_49058 = state_49047;(statearr_49058[14] = inst_49040);
(statearr_49058[7] = inst_48996);
return statearr_49058;
})();var statearr_49059_49097 = state_49047__$1;(statearr_49059_49097[2] = null);
(statearr_49059_49097[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 6))
{var inst_49045 = (state_49047[2]);var state_49047__$1 = state_49047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49047__$1,inst_49045);
} else
{if((state_val_49048 === 17))
{var inst_49026 = (state_49047[15]);var state_49047__$1 = state_49047;var statearr_49060_49098 = state_49047__$1;(statearr_49060_49098[2] = inst_49026);
(statearr_49060_49098[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 3))
{var inst_48986 = (state_49047[9]);var state_49047__$1 = state_49047;var statearr_49061_49099 = state_49047__$1;(statearr_49061_49099[2] = inst_48986);
(statearr_49061_49099[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 12))
{var inst_49007 = (state_49047[16]);var inst_49026 = (state_49047[15]);var inst_49012 = (state_49047[17]);var inst_49026__$1 = inst_49007.call(null,inst_49012);var state_49047__$1 = (function (){var statearr_49062 = state_49047;(statearr_49062[15] = inst_49026__$1);
return statearr_49062;
})();if(cljs.core.truth_(inst_49026__$1))
{var statearr_49063_49100 = state_49047__$1;(statearr_49063_49100[1] = 17);
} else
{var statearr_49064_49101 = state_49047__$1;(statearr_49064_49101[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 2))
{var inst_48986 = (state_49047[9]);var inst_48989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48986);var state_49047__$1 = state_49047;var statearr_49065_49102 = state_49047__$1;(statearr_49065_49102[2] = inst_48989);
(statearr_49065_49102[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 23))
{var inst_49037 = (state_49047[2]);var state_49047__$1 = state_49047;var statearr_49066_49103 = state_49047__$1;(statearr_49066_49103[2] = inst_49037);
(statearr_49066_49103[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 19))
{var inst_49034 = (state_49047[2]);var state_49047__$1 = state_49047;if(cljs.core.truth_(inst_49034))
{var statearr_49067_49104 = state_49047__$1;(statearr_49067_49104[1] = 20);
} else
{var statearr_49068_49105 = state_49047__$1;(statearr_49068_49105[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 11))
{var inst_49011 = (state_49047[8]);var inst_49017 = (inst_49011 == null);var state_49047__$1 = state_49047;if(cljs.core.truth_(inst_49017))
{var statearr_49069_49106 = state_49047__$1;(statearr_49069_49106[1] = 14);
} else
{var statearr_49070_49107 = state_49047__$1;(statearr_49070_49107[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 9))
{var inst_49004 = (state_49047[13]);var inst_49004__$1 = (state_49047[2]);var inst_49005 = cljs.core.get.call(null,inst_49004__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_49006 = cljs.core.get.call(null,inst_49004__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_49007 = cljs.core.get.call(null,inst_49004__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_49047__$1 = (function (){var statearr_49071 = state_49047;(statearr_49071[16] = inst_49007);
(statearr_49071[18] = inst_49006);
(statearr_49071[13] = inst_49004__$1);
return statearr_49071;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49047__$1,10,inst_49005);
} else
{if((state_val_49048 === 5))
{var inst_48996 = (state_49047[7]);var inst_48999 = cljs.core.seq_QMARK_.call(null,inst_48996);var state_49047__$1 = state_49047;if(inst_48999)
{var statearr_49072_49108 = state_49047__$1;(statearr_49072_49108[1] = 7);
} else
{var statearr_49073_49109 = state_49047__$1;(statearr_49073_49109[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 14))
{var inst_49012 = (state_49047[17]);var inst_49019 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49012);var state_49047__$1 = state_49047;var statearr_49074_49110 = state_49047__$1;(statearr_49074_49110[2] = inst_49019);
(statearr_49074_49110[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 16))
{var inst_49022 = (state_49047[2]);var inst_49023 = calc_state.call(null);var inst_48996 = inst_49023;var state_49047__$1 = (function (){var statearr_49075 = state_49047;(statearr_49075[19] = inst_49022);
(statearr_49075[7] = inst_48996);
return statearr_49075;
})();var statearr_49076_49111 = state_49047__$1;(statearr_49076_49111[2] = null);
(statearr_49076_49111[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 10))
{var inst_49011 = (state_49047[8]);var inst_49012 = (state_49047[17]);var inst_49010 = (state_49047[2]);var inst_49011__$1 = cljs.core.nth.call(null,inst_49010,0,null);var inst_49012__$1 = cljs.core.nth.call(null,inst_49010,1,null);var inst_49013 = (inst_49011__$1 == null);var inst_49014 = cljs.core._EQ_.call(null,inst_49012__$1,change);var inst_49015 = (inst_49013) || (inst_49014);var state_49047__$1 = (function (){var statearr_49077 = state_49047;(statearr_49077[8] = inst_49011__$1);
(statearr_49077[17] = inst_49012__$1);
return statearr_49077;
})();if(cljs.core.truth_(inst_49015))
{var statearr_49078_49112 = state_49047__$1;(statearr_49078_49112[1] = 11);
} else
{var statearr_49079_49113 = state_49047__$1;(statearr_49079_49113[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 18))
{var inst_49007 = (state_49047[16]);var inst_49012 = (state_49047[17]);var inst_49006 = (state_49047[18]);var inst_49029 = cljs.core.empty_QMARK_.call(null,inst_49007);var inst_49030 = inst_49006.call(null,inst_49012);var inst_49031 = cljs.core.not.call(null,inst_49030);var inst_49032 = (inst_49029) && (inst_49031);var state_49047__$1 = state_49047;var statearr_49080_49114 = state_49047__$1;(statearr_49080_49114[2] = inst_49032);
(statearr_49080_49114[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49048 === 8))
{var inst_48996 = (state_49047[7]);var state_49047__$1 = state_49047;var statearr_49081_49115 = state_49047__$1;(statearr_49081_49115[2] = inst_48996);
(statearr_49081_49115[1] = 9);
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
});})(c__5689__auto___49089,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5674__auto__,c__5689__auto___49089,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49085[0] = state_machine__5675__auto__);
(statearr_49085[1] = 1);
return statearr_49085;
});
var state_machine__5675__auto____1 = (function (state_49047){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49047);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49086){if((e49086 instanceof Object))
{var ex__5678__auto__ = e49086;var statearr_49087_49116 = state_49047;(statearr_49087_49116[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49117 = state_49047;
state_49047 = G__49117;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49047){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49089,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5691__auto__ = (function (){var statearr_49088 = f__5690__auto__.call(null);(statearr_49088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49089);
return statearr_49088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49089,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj49119 = {};return obj49119;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
return (function (topic){var or__3539__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3539__auto__,mults){
return (function (p1__49120_SHARP_){if(cljs.core.truth_(p1__49120_SHARP_.call(null,topic)))
{return p1__49120_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__49120_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t49245 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49245 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta49246){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta49246 = meta49246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49245.cljs$lang$type = true;
cljs.core.async.t49245.cljs$lang$ctorStr = "cljs.core.async/t49245";
cljs.core.async.t49245.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t49245");
});})(mults,ensure_mult))
;
cljs.core.async.t49245.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t49245.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t49245.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t49245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t49245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t49245.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t49245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49247){var self__ = this;
var _49247__$1 = this;return self__.meta49246;
});})(mults,ensure_mult))
;
cljs.core.async.t49245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49247,meta49246__$1){var self__ = this;
var _49247__$1 = this;return (new cljs.core.async.t49245(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta49246__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t49245 = ((function (mults,ensure_mult){
return (function __GT_t49245(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49246){return (new cljs.core.async.t49245(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49246));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t49245(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5689__auto___49369 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49369,mults,ensure_mult,p){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49369,mults,ensure_mult,p){
return (function (state_49321){var state_val_49322 = (state_49321[1]);if((state_val_49322 === 7))
{var inst_49317 = (state_49321[2]);var state_49321__$1 = state_49321;var statearr_49323_49370 = state_49321__$1;(statearr_49323_49370[2] = inst_49317);
(statearr_49323_49370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 20))
{var state_49321__$1 = state_49321;var statearr_49324_49371 = state_49321__$1;(statearr_49324_49371[2] = null);
(statearr_49324_49371[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 1))
{var state_49321__$1 = state_49321;var statearr_49325_49372 = state_49321__$1;(statearr_49325_49372[2] = null);
(statearr_49325_49372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 24))
{var inst_49250 = (state_49321[7]);var inst_49300 = (state_49321[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49321,23,Object,null,22);var inst_49307 = cljs.core.async.muxch_STAR_.call(null,inst_49300);var state_49321__$1 = state_49321;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49321__$1,25,inst_49307,inst_49250);
} else
{if((state_val_49322 === 4))
{var inst_49250 = (state_49321[7]);var inst_49250__$1 = (state_49321[2]);var inst_49251 = (inst_49250__$1 == null);var state_49321__$1 = (function (){var statearr_49326 = state_49321;(statearr_49326[7] = inst_49250__$1);
return statearr_49326;
})();if(cljs.core.truth_(inst_49251))
{var statearr_49327_49373 = state_49321__$1;(statearr_49327_49373[1] = 5);
} else
{var statearr_49328_49374 = state_49321__$1;(statearr_49328_49374[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 15))
{var inst_49292 = (state_49321[2]);var state_49321__$1 = state_49321;var statearr_49329_49375 = state_49321__$1;(statearr_49329_49375[2] = inst_49292);
(statearr_49329_49375[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 21))
{var inst_49314 = (state_49321[2]);var state_49321__$1 = (function (){var statearr_49330 = state_49321;(statearr_49330[9] = inst_49314);
return statearr_49330;
})();var statearr_49331_49376 = state_49321__$1;(statearr_49331_49376[2] = null);
(statearr_49331_49376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 13))
{var inst_49274 = (state_49321[10]);var inst_49276 = cljs.core.chunked_seq_QMARK_.call(null,inst_49274);var state_49321__$1 = state_49321;if(inst_49276)
{var statearr_49332_49377 = state_49321__$1;(statearr_49332_49377[1] = 16);
} else
{var statearr_49333_49378 = state_49321__$1;(statearr_49333_49378[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 22))
{var inst_49311 = (state_49321[2]);var state_49321__$1 = state_49321;var statearr_49334_49379 = state_49321__$1;(statearr_49334_49379[2] = inst_49311);
(statearr_49334_49379[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 6))
{var inst_49298 = (state_49321[11]);var inst_49250 = (state_49321[7]);var inst_49300 = (state_49321[8]);var inst_49298__$1 = topic_fn.call(null,inst_49250);var inst_49299 = cljs.core.deref.call(null,mults);var inst_49300__$1 = cljs.core.get.call(null,inst_49299,inst_49298__$1);var state_49321__$1 = (function (){var statearr_49335 = state_49321;(statearr_49335[11] = inst_49298__$1);
(statearr_49335[8] = inst_49300__$1);
return statearr_49335;
})();if(cljs.core.truth_(inst_49300__$1))
{var statearr_49336_49380 = state_49321__$1;(statearr_49336_49380[1] = 19);
} else
{var statearr_49337_49381 = state_49321__$1;(statearr_49337_49381[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 25))
{var inst_49309 = (state_49321[2]);var state_49321__$1 = state_49321;var statearr_49338_49382 = state_49321__$1;(statearr_49338_49382[2] = inst_49309);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49321__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 17))
{var inst_49274 = (state_49321[10]);var inst_49283 = cljs.core.first.call(null,inst_49274);var inst_49284 = cljs.core.async.muxch_STAR_.call(null,inst_49283);var inst_49285 = cljs.core.async.close_BANG_.call(null,inst_49284);var inst_49286 = cljs.core.next.call(null,inst_49274);var inst_49260 = inst_49286;var inst_49261 = null;var inst_49262 = 0;var inst_49263 = 0;var state_49321__$1 = (function (){var statearr_49339 = state_49321;(statearr_49339[12] = inst_49262);
(statearr_49339[13] = inst_49285);
(statearr_49339[14] = inst_49260);
(statearr_49339[15] = inst_49263);
(statearr_49339[16] = inst_49261);
return statearr_49339;
})();var statearr_49340_49383 = state_49321__$1;(statearr_49340_49383[2] = null);
(statearr_49340_49383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 3))
{var inst_49319 = (state_49321[2]);var state_49321__$1 = state_49321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49321__$1,inst_49319);
} else
{if((state_val_49322 === 12))
{var inst_49294 = (state_49321[2]);var state_49321__$1 = state_49321;var statearr_49341_49384 = state_49321__$1;(statearr_49341_49384[2] = inst_49294);
(statearr_49341_49384[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 2))
{var state_49321__$1 = state_49321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49321__$1,4,ch);
} else
{if((state_val_49322 === 23))
{var inst_49298 = (state_49321[11]);var inst_49302 = (state_49321[2]);var inst_49303 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49298);var state_49321__$1 = (function (){var statearr_49342 = state_49321;(statearr_49342[17] = inst_49302);
return statearr_49342;
})();var statearr_49343_49385 = state_49321__$1;(statearr_49343_49385[2] = inst_49303);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49321__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 19))
{var state_49321__$1 = state_49321;var statearr_49344_49386 = state_49321__$1;(statearr_49344_49386[2] = null);
(statearr_49344_49386[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 11))
{var inst_49260 = (state_49321[14]);var inst_49274 = (state_49321[10]);var inst_49274__$1 = cljs.core.seq.call(null,inst_49260);var state_49321__$1 = (function (){var statearr_49345 = state_49321;(statearr_49345[10] = inst_49274__$1);
return statearr_49345;
})();if(inst_49274__$1)
{var statearr_49346_49387 = state_49321__$1;(statearr_49346_49387[1] = 13);
} else
{var statearr_49347_49388 = state_49321__$1;(statearr_49347_49388[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 9))
{var inst_49296 = (state_49321[2]);var state_49321__$1 = state_49321;var statearr_49348_49389 = state_49321__$1;(statearr_49348_49389[2] = inst_49296);
(statearr_49348_49389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 5))
{var inst_49257 = cljs.core.deref.call(null,mults);var inst_49258 = cljs.core.vals.call(null,inst_49257);var inst_49259 = cljs.core.seq.call(null,inst_49258);var inst_49260 = inst_49259;var inst_49261 = null;var inst_49262 = 0;var inst_49263 = 0;var state_49321__$1 = (function (){var statearr_49349 = state_49321;(statearr_49349[12] = inst_49262);
(statearr_49349[14] = inst_49260);
(statearr_49349[15] = inst_49263);
(statearr_49349[16] = inst_49261);
return statearr_49349;
})();var statearr_49350_49390 = state_49321__$1;(statearr_49350_49390[2] = null);
(statearr_49350_49390[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 14))
{var state_49321__$1 = state_49321;var statearr_49354_49391 = state_49321__$1;(statearr_49354_49391[2] = null);
(statearr_49354_49391[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 16))
{var inst_49274 = (state_49321[10]);var inst_49278 = cljs.core.chunk_first.call(null,inst_49274);var inst_49279 = cljs.core.chunk_rest.call(null,inst_49274);var inst_49280 = cljs.core.count.call(null,inst_49278);var inst_49260 = inst_49279;var inst_49261 = inst_49278;var inst_49262 = inst_49280;var inst_49263 = 0;var state_49321__$1 = (function (){var statearr_49355 = state_49321;(statearr_49355[12] = inst_49262);
(statearr_49355[14] = inst_49260);
(statearr_49355[15] = inst_49263);
(statearr_49355[16] = inst_49261);
return statearr_49355;
})();var statearr_49356_49392 = state_49321__$1;(statearr_49356_49392[2] = null);
(statearr_49356_49392[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 10))
{var inst_49262 = (state_49321[12]);var inst_49260 = (state_49321[14]);var inst_49263 = (state_49321[15]);var inst_49261 = (state_49321[16]);var inst_49268 = cljs.core._nth.call(null,inst_49261,inst_49263);var inst_49269 = cljs.core.async.muxch_STAR_.call(null,inst_49268);var inst_49270 = cljs.core.async.close_BANG_.call(null,inst_49269);var inst_49271 = (inst_49263 + 1);var tmp49351 = inst_49262;var tmp49352 = inst_49260;var tmp49353 = inst_49261;var inst_49260__$1 = tmp49352;var inst_49261__$1 = tmp49353;var inst_49262__$1 = tmp49351;var inst_49263__$1 = inst_49271;var state_49321__$1 = (function (){var statearr_49357 = state_49321;(statearr_49357[18] = inst_49270);
(statearr_49357[12] = inst_49262__$1);
(statearr_49357[14] = inst_49260__$1);
(statearr_49357[15] = inst_49263__$1);
(statearr_49357[16] = inst_49261__$1);
return statearr_49357;
})();var statearr_49358_49393 = state_49321__$1;(statearr_49358_49393[2] = null);
(statearr_49358_49393[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 18))
{var inst_49289 = (state_49321[2]);var state_49321__$1 = state_49321;var statearr_49359_49394 = state_49321__$1;(statearr_49359_49394[2] = inst_49289);
(statearr_49359_49394[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49322 === 8))
{var inst_49262 = (state_49321[12]);var inst_49263 = (state_49321[15]);var inst_49265 = (inst_49263 < inst_49262);var inst_49266 = inst_49265;var state_49321__$1 = state_49321;if(cljs.core.truth_(inst_49266))
{var statearr_49360_49395 = state_49321__$1;(statearr_49360_49395[1] = 10);
} else
{var statearr_49361_49396 = state_49321__$1;(statearr_49361_49396[1] = 11);
}
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
});})(c__5689__auto___49369,mults,ensure_mult,p))
;return ((function (switch__5674__auto__,c__5689__auto___49369,mults,ensure_mult,p){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49365[0] = state_machine__5675__auto__);
(statearr_49365[1] = 1);
return statearr_49365;
});
var state_machine__5675__auto____1 = (function (state_49321){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49321);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49366){if((e49366 instanceof Object))
{var ex__5678__auto__ = e49366;var statearr_49367_49397 = state_49321;(statearr_49367_49397[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49321);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49398 = state_49321;
state_49321 = G__49398;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49321){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49369,mults,ensure_mult,p))
})();var state__5691__auto__ = (function (){var statearr_49368 = f__5690__auto__.call(null);(statearr_49368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49369);
return statearr_49368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49369,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5689__auto___49535 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49535,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49535,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49505){var state_val_49506 = (state_49505[1]);if((state_val_49506 === 7))
{var state_49505__$1 = state_49505;var statearr_49507_49536 = state_49505__$1;(statearr_49507_49536[2] = null);
(statearr_49507_49536[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 1))
{var state_49505__$1 = state_49505;var statearr_49508_49537 = state_49505__$1;(statearr_49508_49537[2] = null);
(statearr_49508_49537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 4))
{var inst_49469 = (state_49505[7]);var inst_49471 = (inst_49469 < cnt);var state_49505__$1 = state_49505;if(cljs.core.truth_(inst_49471))
{var statearr_49509_49538 = state_49505__$1;(statearr_49509_49538[1] = 6);
} else
{var statearr_49510_49539 = state_49505__$1;(statearr_49510_49539[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 15))
{var inst_49501 = (state_49505[2]);var state_49505__$1 = state_49505;var statearr_49511_49540 = state_49505__$1;(statearr_49511_49540[2] = inst_49501);
(statearr_49511_49540[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 13))
{var inst_49494 = cljs.core.async.close_BANG_.call(null,out);var state_49505__$1 = state_49505;var statearr_49512_49541 = state_49505__$1;(statearr_49512_49541[2] = inst_49494);
(statearr_49512_49541[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 6))
{var state_49505__$1 = state_49505;var statearr_49513_49542 = state_49505__$1;(statearr_49513_49542[2] = null);
(statearr_49513_49542[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 3))
{var inst_49503 = (state_49505[2]);var state_49505__$1 = state_49505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49505__$1,inst_49503);
} else
{if((state_val_49506 === 12))
{var inst_49491 = (state_49505[8]);var inst_49491__$1 = (state_49505[2]);var inst_49492 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49491__$1);var state_49505__$1 = (function (){var statearr_49514 = state_49505;(statearr_49514[8] = inst_49491__$1);
return statearr_49514;
})();if(cljs.core.truth_(inst_49492))
{var statearr_49515_49543 = state_49505__$1;(statearr_49515_49543[1] = 13);
} else
{var statearr_49516_49544 = state_49505__$1;(statearr_49516_49544[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 2))
{var inst_49468 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_49469 = 0;var state_49505__$1 = (function (){var statearr_49517 = state_49505;(statearr_49517[9] = inst_49468);
(statearr_49517[7] = inst_49469);
return statearr_49517;
})();var statearr_49518_49545 = state_49505__$1;(statearr_49518_49545[2] = null);
(statearr_49518_49545[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 11))
{var inst_49469 = (state_49505[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49505,10,Object,null,9);var inst_49478 = chs__$1.call(null,inst_49469);var inst_49479 = done.call(null,inst_49469);var inst_49480 = cljs.core.async.take_BANG_.call(null,inst_49478,inst_49479);var state_49505__$1 = state_49505;var statearr_49519_49546 = state_49505__$1;(statearr_49519_49546[2] = inst_49480);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49505__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 9))
{var inst_49469 = (state_49505[7]);var inst_49482 = (state_49505[2]);var inst_49483 = (inst_49469 + 1);var inst_49469__$1 = inst_49483;var state_49505__$1 = (function (){var statearr_49520 = state_49505;(statearr_49520[7] = inst_49469__$1);
(statearr_49520[10] = inst_49482);
return statearr_49520;
})();var statearr_49521_49547 = state_49505__$1;(statearr_49521_49547[2] = null);
(statearr_49521_49547[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 5))
{var inst_49489 = (state_49505[2]);var state_49505__$1 = (function (){var statearr_49522 = state_49505;(statearr_49522[11] = inst_49489);
return statearr_49522;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49505__$1,12,dchan);
} else
{if((state_val_49506 === 14))
{var inst_49491 = (state_49505[8]);var inst_49496 = cljs.core.apply.call(null,f,inst_49491);var state_49505__$1 = state_49505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49505__$1,16,out,inst_49496);
} else
{if((state_val_49506 === 16))
{var inst_49498 = (state_49505[2]);var state_49505__$1 = (function (){var statearr_49523 = state_49505;(statearr_49523[12] = inst_49498);
return statearr_49523;
})();var statearr_49524_49548 = state_49505__$1;(statearr_49524_49548[2] = null);
(statearr_49524_49548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 10))
{var inst_49473 = (state_49505[2]);var inst_49474 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_49505__$1 = (function (){var statearr_49525 = state_49505;(statearr_49525[13] = inst_49473);
return statearr_49525;
})();var statearr_49526_49549 = state_49505__$1;(statearr_49526_49549[2] = inst_49474);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49505__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49506 === 8))
{var inst_49487 = (state_49505[2]);var state_49505__$1 = state_49505;var statearr_49527_49550 = state_49505__$1;(statearr_49527_49550[2] = inst_49487);
(statearr_49527_49550[1] = 5);
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
});})(c__5689__auto___49535,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___49535,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49531[0] = state_machine__5675__auto__);
(statearr_49531[1] = 1);
return statearr_49531;
});
var state_machine__5675__auto____1 = (function (state_49505){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49505);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49532){if((e49532 instanceof Object))
{var ex__5678__auto__ = e49532;var statearr_49533_49551 = state_49505;(statearr_49533_49551[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49505);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49552 = state_49505;
state_49505 = G__49552;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49505){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49535,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_49534 = f__5690__auto__.call(null);(statearr_49534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49535);
return statearr_49534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49535,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___49660 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49660,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49660,out){
return (function (state_49636){var state_val_49637 = (state_49636[1]);if((state_val_49637 === 7))
{var inst_49616 = (state_49636[7]);var inst_49615 = (state_49636[8]);var inst_49615__$1 = (state_49636[2]);var inst_49616__$1 = cljs.core.nth.call(null,inst_49615__$1,0,null);var inst_49617 = cljs.core.nth.call(null,inst_49615__$1,1,null);var inst_49618 = (inst_49616__$1 == null);var state_49636__$1 = (function (){var statearr_49638 = state_49636;(statearr_49638[7] = inst_49616__$1);
(statearr_49638[9] = inst_49617);
(statearr_49638[8] = inst_49615__$1);
return statearr_49638;
})();if(cljs.core.truth_(inst_49618))
{var statearr_49639_49661 = state_49636__$1;(statearr_49639_49661[1] = 8);
} else
{var statearr_49640_49662 = state_49636__$1;(statearr_49640_49662[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49637 === 1))
{var inst_49607 = cljs.core.vec.call(null,chs);var inst_49608 = inst_49607;var state_49636__$1 = (function (){var statearr_49641 = state_49636;(statearr_49641[10] = inst_49608);
return statearr_49641;
})();var statearr_49642_49663 = state_49636__$1;(statearr_49642_49663[2] = null);
(statearr_49642_49663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49637 === 4))
{var inst_49608 = (state_49636[10]);var state_49636__$1 = state_49636;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49636__$1,7,inst_49608);
} else
{if((state_val_49637 === 6))
{var inst_49632 = (state_49636[2]);var state_49636__$1 = state_49636;var statearr_49643_49664 = state_49636__$1;(statearr_49643_49664[2] = inst_49632);
(statearr_49643_49664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49637 === 3))
{var inst_49634 = (state_49636[2]);var state_49636__$1 = state_49636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49636__$1,inst_49634);
} else
{if((state_val_49637 === 2))
{var inst_49608 = (state_49636[10]);var inst_49610 = cljs.core.count.call(null,inst_49608);var inst_49611 = (inst_49610 > 0);var state_49636__$1 = state_49636;if(cljs.core.truth_(inst_49611))
{var statearr_49645_49665 = state_49636__$1;(statearr_49645_49665[1] = 4);
} else
{var statearr_49646_49666 = state_49636__$1;(statearr_49646_49666[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49637 === 11))
{var inst_49608 = (state_49636[10]);var inst_49625 = (state_49636[2]);var tmp49644 = inst_49608;var inst_49608__$1 = tmp49644;var state_49636__$1 = (function (){var statearr_49647 = state_49636;(statearr_49647[11] = inst_49625);
(statearr_49647[10] = inst_49608__$1);
return statearr_49647;
})();var statearr_49648_49667 = state_49636__$1;(statearr_49648_49667[2] = null);
(statearr_49648_49667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49637 === 9))
{var inst_49616 = (state_49636[7]);var state_49636__$1 = state_49636;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49636__$1,11,out,inst_49616);
} else
{if((state_val_49637 === 5))
{var inst_49630 = cljs.core.async.close_BANG_.call(null,out);var state_49636__$1 = state_49636;var statearr_49649_49668 = state_49636__$1;(statearr_49649_49668[2] = inst_49630);
(statearr_49649_49668[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49637 === 10))
{var inst_49628 = (state_49636[2]);var state_49636__$1 = state_49636;var statearr_49650_49669 = state_49636__$1;(statearr_49650_49669[2] = inst_49628);
(statearr_49650_49669[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49637 === 8))
{var inst_49616 = (state_49636[7]);var inst_49617 = (state_49636[9]);var inst_49608 = (state_49636[10]);var inst_49615 = (state_49636[8]);var inst_49620 = (function (){var c = inst_49617;var v = inst_49616;var vec__49613 = inst_49615;var cs = inst_49608;return ((function (c,v,vec__49613,cs,inst_49616,inst_49617,inst_49608,inst_49615,state_val_49637,c__5689__auto___49660,out){
return (function (p1__49553_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__49553_SHARP_);
});
;})(c,v,vec__49613,cs,inst_49616,inst_49617,inst_49608,inst_49615,state_val_49637,c__5689__auto___49660,out))
})();var inst_49621 = cljs.core.filterv.call(null,inst_49620,inst_49608);var inst_49608__$1 = inst_49621;var state_49636__$1 = (function (){var statearr_49651 = state_49636;(statearr_49651[10] = inst_49608__$1);
return statearr_49651;
})();var statearr_49652_49670 = state_49636__$1;(statearr_49652_49670[2] = null);
(statearr_49652_49670[1] = 2);
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
});})(c__5689__auto___49660,out))
;return ((function (switch__5674__auto__,c__5689__auto___49660,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49656 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49656[0] = state_machine__5675__auto__);
(statearr_49656[1] = 1);
return statearr_49656;
});
var state_machine__5675__auto____1 = (function (state_49636){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49636);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49657){if((e49657 instanceof Object))
{var ex__5678__auto__ = e49657;var statearr_49658_49671 = state_49636;(statearr_49658_49671[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49636);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49672 = state_49636;
state_49636 = G__49672;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49636){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49660,out))
})();var state__5691__auto__ = (function (){var statearr_49659 = f__5690__auto__.call(null);(statearr_49659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49660);
return statearr_49659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49660,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___49765 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49765,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49765,out){
return (function (state_49742){var state_val_49743 = (state_49742[1]);if((state_val_49743 === 7))
{var inst_49724 = (state_49742[7]);var inst_49724__$1 = (state_49742[2]);var inst_49725 = (inst_49724__$1 == null);var inst_49726 = cljs.core.not.call(null,inst_49725);var state_49742__$1 = (function (){var statearr_49744 = state_49742;(statearr_49744[7] = inst_49724__$1);
return statearr_49744;
})();if(inst_49726)
{var statearr_49745_49766 = state_49742__$1;(statearr_49745_49766[1] = 8);
} else
{var statearr_49746_49767 = state_49742__$1;(statearr_49746_49767[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49743 === 1))
{var inst_49719 = 0;var state_49742__$1 = (function (){var statearr_49747 = state_49742;(statearr_49747[8] = inst_49719);
return statearr_49747;
})();var statearr_49748_49768 = state_49742__$1;(statearr_49748_49768[2] = null);
(statearr_49748_49768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49743 === 4))
{var state_49742__$1 = state_49742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49742__$1,7,ch);
} else
{if((state_val_49743 === 6))
{var inst_49737 = (state_49742[2]);var state_49742__$1 = state_49742;var statearr_49749_49769 = state_49742__$1;(statearr_49749_49769[2] = inst_49737);
(statearr_49749_49769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49743 === 3))
{var inst_49739 = (state_49742[2]);var inst_49740 = cljs.core.async.close_BANG_.call(null,out);var state_49742__$1 = (function (){var statearr_49750 = state_49742;(statearr_49750[9] = inst_49739);
return statearr_49750;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49742__$1,inst_49740);
} else
{if((state_val_49743 === 2))
{var inst_49719 = (state_49742[8]);var inst_49721 = (inst_49719 < n);var state_49742__$1 = state_49742;if(cljs.core.truth_(inst_49721))
{var statearr_49751_49770 = state_49742__$1;(statearr_49751_49770[1] = 4);
} else
{var statearr_49752_49771 = state_49742__$1;(statearr_49752_49771[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49743 === 11))
{var inst_49719 = (state_49742[8]);var inst_49729 = (state_49742[2]);var inst_49730 = (inst_49719 + 1);var inst_49719__$1 = inst_49730;var state_49742__$1 = (function (){var statearr_49753 = state_49742;(statearr_49753[8] = inst_49719__$1);
(statearr_49753[10] = inst_49729);
return statearr_49753;
})();var statearr_49754_49772 = state_49742__$1;(statearr_49754_49772[2] = null);
(statearr_49754_49772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49743 === 9))
{var state_49742__$1 = state_49742;var statearr_49755_49773 = state_49742__$1;(statearr_49755_49773[2] = null);
(statearr_49755_49773[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49743 === 5))
{var state_49742__$1 = state_49742;var statearr_49756_49774 = state_49742__$1;(statearr_49756_49774[2] = null);
(statearr_49756_49774[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49743 === 10))
{var inst_49734 = (state_49742[2]);var state_49742__$1 = state_49742;var statearr_49757_49775 = state_49742__$1;(statearr_49757_49775[2] = inst_49734);
(statearr_49757_49775[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49743 === 8))
{var inst_49724 = (state_49742[7]);var state_49742__$1 = state_49742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49742__$1,11,out,inst_49724);
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
});})(c__5689__auto___49765,out))
;return ((function (switch__5674__auto__,c__5689__auto___49765,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49761 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49761[0] = state_machine__5675__auto__);
(statearr_49761[1] = 1);
return statearr_49761;
});
var state_machine__5675__auto____1 = (function (state_49742){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49742);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49762){if((e49762 instanceof Object))
{var ex__5678__auto__ = e49762;var statearr_49763_49776 = state_49742;(statearr_49763_49776[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49742);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49777 = state_49742;
state_49742 = G__49777;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49742){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49765,out))
})();var state__5691__auto__ = (function (){var statearr_49764 = f__5690__auto__.call(null);(statearr_49764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49765);
return statearr_49764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49765,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___49874 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49874,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49874,out){
return (function (state_49849){var state_val_49850 = (state_49849[1]);if((state_val_49850 === 7))
{var inst_49844 = (state_49849[2]);var state_49849__$1 = state_49849;var statearr_49851_49875 = state_49849__$1;(statearr_49851_49875[2] = inst_49844);
(statearr_49851_49875[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49850 === 1))
{var inst_49826 = null;var state_49849__$1 = (function (){var statearr_49852 = state_49849;(statearr_49852[7] = inst_49826);
return statearr_49852;
})();var statearr_49853_49876 = state_49849__$1;(statearr_49853_49876[2] = null);
(statearr_49853_49876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49850 === 4))
{var inst_49829 = (state_49849[8]);var inst_49829__$1 = (state_49849[2]);var inst_49830 = (inst_49829__$1 == null);var inst_49831 = cljs.core.not.call(null,inst_49830);var state_49849__$1 = (function (){var statearr_49854 = state_49849;(statearr_49854[8] = inst_49829__$1);
return statearr_49854;
})();if(inst_49831)
{var statearr_49855_49877 = state_49849__$1;(statearr_49855_49877[1] = 5);
} else
{var statearr_49856_49878 = state_49849__$1;(statearr_49856_49878[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49850 === 6))
{var state_49849__$1 = state_49849;var statearr_49857_49879 = state_49849__$1;(statearr_49857_49879[2] = null);
(statearr_49857_49879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49850 === 3))
{var inst_49846 = (state_49849[2]);var inst_49847 = cljs.core.async.close_BANG_.call(null,out);var state_49849__$1 = (function (){var statearr_49858 = state_49849;(statearr_49858[9] = inst_49846);
return statearr_49858;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49849__$1,inst_49847);
} else
{if((state_val_49850 === 2))
{var state_49849__$1 = state_49849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49849__$1,4,ch);
} else
{if((state_val_49850 === 11))
{var inst_49829 = (state_49849[8]);var inst_49838 = (state_49849[2]);var inst_49826 = inst_49829;var state_49849__$1 = (function (){var statearr_49859 = state_49849;(statearr_49859[7] = inst_49826);
(statearr_49859[10] = inst_49838);
return statearr_49859;
})();var statearr_49860_49880 = state_49849__$1;(statearr_49860_49880[2] = null);
(statearr_49860_49880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49850 === 9))
{var inst_49829 = (state_49849[8]);var state_49849__$1 = state_49849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49849__$1,11,out,inst_49829);
} else
{if((state_val_49850 === 5))
{var inst_49826 = (state_49849[7]);var inst_49829 = (state_49849[8]);var inst_49833 = cljs.core._EQ_.call(null,inst_49829,inst_49826);var state_49849__$1 = state_49849;if(inst_49833)
{var statearr_49862_49881 = state_49849__$1;(statearr_49862_49881[1] = 8);
} else
{var statearr_49863_49882 = state_49849__$1;(statearr_49863_49882[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49850 === 10))
{var inst_49841 = (state_49849[2]);var state_49849__$1 = state_49849;var statearr_49864_49883 = state_49849__$1;(statearr_49864_49883[2] = inst_49841);
(statearr_49864_49883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49850 === 8))
{var inst_49826 = (state_49849[7]);var tmp49861 = inst_49826;var inst_49826__$1 = tmp49861;var state_49849__$1 = (function (){var statearr_49865 = state_49849;(statearr_49865[7] = inst_49826__$1);
return statearr_49865;
})();var statearr_49866_49884 = state_49849__$1;(statearr_49866_49884[2] = null);
(statearr_49866_49884[1] = 2);
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
});})(c__5689__auto___49874,out))
;return ((function (switch__5674__auto__,c__5689__auto___49874,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49870 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49870[0] = state_machine__5675__auto__);
(statearr_49870[1] = 1);
return statearr_49870;
});
var state_machine__5675__auto____1 = (function (state_49849){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49849);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49871){if((e49871 instanceof Object))
{var ex__5678__auto__ = e49871;var statearr_49872_49885 = state_49849;(statearr_49872_49885[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49886 = state_49849;
state_49849 = G__49886;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49849){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49874,out))
})();var state__5691__auto__ = (function (){var statearr_49873 = f__5690__auto__.call(null);(statearr_49873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49874);
return statearr_49873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49874,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___50021 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___50021,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___50021,out){
return (function (state_49991){var state_val_49992 = (state_49991[1]);if((state_val_49992 === 7))
{var inst_49987 = (state_49991[2]);var state_49991__$1 = state_49991;var statearr_49993_50022 = state_49991__$1;(statearr_49993_50022[2] = inst_49987);
(statearr_49993_50022[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 1))
{var inst_49954 = (new Array(n));var inst_49955 = inst_49954;var inst_49956 = 0;var state_49991__$1 = (function (){var statearr_49994 = state_49991;(statearr_49994[7] = inst_49956);
(statearr_49994[8] = inst_49955);
return statearr_49994;
})();var statearr_49995_50023 = state_49991__$1;(statearr_49995_50023[2] = null);
(statearr_49995_50023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 4))
{var inst_49959 = (state_49991[9]);var inst_49959__$1 = (state_49991[2]);var inst_49960 = (inst_49959__$1 == null);var inst_49961 = cljs.core.not.call(null,inst_49960);var state_49991__$1 = (function (){var statearr_49996 = state_49991;(statearr_49996[9] = inst_49959__$1);
return statearr_49996;
})();if(inst_49961)
{var statearr_49997_50024 = state_49991__$1;(statearr_49997_50024[1] = 5);
} else
{var statearr_49998_50025 = state_49991__$1;(statearr_49998_50025[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 15))
{var inst_49981 = (state_49991[2]);var state_49991__$1 = state_49991;var statearr_49999_50026 = state_49991__$1;(statearr_49999_50026[2] = inst_49981);
(statearr_49999_50026[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 13))
{var state_49991__$1 = state_49991;var statearr_50000_50027 = state_49991__$1;(statearr_50000_50027[2] = null);
(statearr_50000_50027[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 6))
{var inst_49956 = (state_49991[7]);var inst_49977 = (inst_49956 > 0);var state_49991__$1 = state_49991;if(cljs.core.truth_(inst_49977))
{var statearr_50001_50028 = state_49991__$1;(statearr_50001_50028[1] = 12);
} else
{var statearr_50002_50029 = state_49991__$1;(statearr_50002_50029[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 3))
{var inst_49989 = (state_49991[2]);var state_49991__$1 = state_49991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49991__$1,inst_49989);
} else
{if((state_val_49992 === 12))
{var inst_49955 = (state_49991[8]);var inst_49979 = cljs.core.vec.call(null,inst_49955);var state_49991__$1 = state_49991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49991__$1,15,out,inst_49979);
} else
{if((state_val_49992 === 2))
{var state_49991__$1 = state_49991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49991__$1,4,ch);
} else
{if((state_val_49992 === 11))
{var inst_49971 = (state_49991[2]);var inst_49972 = (new Array(n));var inst_49955 = inst_49972;var inst_49956 = 0;var state_49991__$1 = (function (){var statearr_50003 = state_49991;(statearr_50003[7] = inst_49956);
(statearr_50003[8] = inst_49955);
(statearr_50003[10] = inst_49971);
return statearr_50003;
})();var statearr_50004_50030 = state_49991__$1;(statearr_50004_50030[2] = null);
(statearr_50004_50030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 9))
{var inst_49955 = (state_49991[8]);var inst_49969 = cljs.core.vec.call(null,inst_49955);var state_49991__$1 = state_49991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49991__$1,11,out,inst_49969);
} else
{if((state_val_49992 === 5))
{var inst_49959 = (state_49991[9]);var inst_49956 = (state_49991[7]);var inst_49964 = (state_49991[11]);var inst_49955 = (state_49991[8]);var inst_49963 = (inst_49955[inst_49956] = inst_49959);var inst_49964__$1 = (inst_49956 + 1);var inst_49965 = (inst_49964__$1 < n);var state_49991__$1 = (function (){var statearr_50005 = state_49991;(statearr_50005[11] = inst_49964__$1);
(statearr_50005[12] = inst_49963);
return statearr_50005;
})();if(cljs.core.truth_(inst_49965))
{var statearr_50006_50031 = state_49991__$1;(statearr_50006_50031[1] = 8);
} else
{var statearr_50007_50032 = state_49991__$1;(statearr_50007_50032[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 14))
{var inst_49984 = (state_49991[2]);var inst_49985 = cljs.core.async.close_BANG_.call(null,out);var state_49991__$1 = (function (){var statearr_50009 = state_49991;(statearr_50009[13] = inst_49984);
return statearr_50009;
})();var statearr_50010_50033 = state_49991__$1;(statearr_50010_50033[2] = inst_49985);
(statearr_50010_50033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 10))
{var inst_49975 = (state_49991[2]);var state_49991__$1 = state_49991;var statearr_50011_50034 = state_49991__$1;(statearr_50011_50034[2] = inst_49975);
(statearr_50011_50034[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49992 === 8))
{var inst_49964 = (state_49991[11]);var inst_49955 = (state_49991[8]);var tmp50008 = inst_49955;var inst_49955__$1 = tmp50008;var inst_49956 = inst_49964;var state_49991__$1 = (function (){var statearr_50012 = state_49991;(statearr_50012[7] = inst_49956);
(statearr_50012[8] = inst_49955__$1);
return statearr_50012;
})();var statearr_50013_50035 = state_49991__$1;(statearr_50013_50035[2] = null);
(statearr_50013_50035[1] = 2);
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
});})(c__5689__auto___50021,out))
;return ((function (switch__5674__auto__,c__5689__auto___50021,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_50017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50017[0] = state_machine__5675__auto__);
(statearr_50017[1] = 1);
return statearr_50017;
});
var state_machine__5675__auto____1 = (function (state_49991){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e50018){if((e50018 instanceof Object))
{var ex__5678__auto__ = e50018;var statearr_50019_50036 = state_49991;(statearr_50019_50036[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50018;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50037 = state_49991;
state_49991 = G__50037;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49991){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___50021,out))
})();var state__5691__auto__ = (function (){var statearr_50020 = f__5690__auto__.call(null);(statearr_50020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___50021);
return statearr_50020;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___50021,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___50180 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___50180,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___50180,out){
return (function (state_50150){var state_val_50151 = (state_50150[1]);if((state_val_50151 === 7))
{var inst_50146 = (state_50150[2]);var state_50150__$1 = state_50150;var statearr_50152_50181 = state_50150__$1;(statearr_50152_50181[2] = inst_50146);
(statearr_50152_50181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 1))
{var inst_50109 = [];var inst_50110 = inst_50109;var inst_50111 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_50150__$1 = (function (){var statearr_50153 = state_50150;(statearr_50153[7] = inst_50110);
(statearr_50153[8] = inst_50111);
return statearr_50153;
})();var statearr_50154_50182 = state_50150__$1;(statearr_50154_50182[2] = null);
(statearr_50154_50182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 4))
{var inst_50114 = (state_50150[9]);var inst_50114__$1 = (state_50150[2]);var inst_50115 = (inst_50114__$1 == null);var inst_50116 = cljs.core.not.call(null,inst_50115);var state_50150__$1 = (function (){var statearr_50155 = state_50150;(statearr_50155[9] = inst_50114__$1);
return statearr_50155;
})();if(inst_50116)
{var statearr_50156_50183 = state_50150__$1;(statearr_50156_50183[1] = 5);
} else
{var statearr_50157_50184 = state_50150__$1;(statearr_50157_50184[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 15))
{var inst_50140 = (state_50150[2]);var state_50150__$1 = state_50150;var statearr_50158_50185 = state_50150__$1;(statearr_50158_50185[2] = inst_50140);
(statearr_50158_50185[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 13))
{var state_50150__$1 = state_50150;var statearr_50159_50186 = state_50150__$1;(statearr_50159_50186[2] = null);
(statearr_50159_50186[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 6))
{var inst_50110 = (state_50150[7]);var inst_50135 = inst_50110.length;var inst_50136 = (inst_50135 > 0);var state_50150__$1 = state_50150;if(cljs.core.truth_(inst_50136))
{var statearr_50160_50187 = state_50150__$1;(statearr_50160_50187[1] = 12);
} else
{var statearr_50161_50188 = state_50150__$1;(statearr_50161_50188[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 3))
{var inst_50148 = (state_50150[2]);var state_50150__$1 = state_50150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50150__$1,inst_50148);
} else
{if((state_val_50151 === 12))
{var inst_50110 = (state_50150[7]);var inst_50138 = cljs.core.vec.call(null,inst_50110);var state_50150__$1 = state_50150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50150__$1,15,out,inst_50138);
} else
{if((state_val_50151 === 2))
{var state_50150__$1 = state_50150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50150__$1,4,ch);
} else
{if((state_val_50151 === 11))
{var inst_50114 = (state_50150[9]);var inst_50118 = (state_50150[10]);var inst_50128 = (state_50150[2]);var inst_50129 = [];var inst_50130 = inst_50129.push(inst_50114);var inst_50110 = inst_50129;var inst_50111 = inst_50118;var state_50150__$1 = (function (){var statearr_50162 = state_50150;(statearr_50162[7] = inst_50110);
(statearr_50162[11] = inst_50130);
(statearr_50162[8] = inst_50111);
(statearr_50162[12] = inst_50128);
return statearr_50162;
})();var statearr_50163_50189 = state_50150__$1;(statearr_50163_50189[2] = null);
(statearr_50163_50189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 9))
{var inst_50110 = (state_50150[7]);var inst_50126 = cljs.core.vec.call(null,inst_50110);var state_50150__$1 = state_50150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50150__$1,11,out,inst_50126);
} else
{if((state_val_50151 === 5))
{var inst_50114 = (state_50150[9]);var inst_50118 = (state_50150[10]);var inst_50111 = (state_50150[8]);var inst_50118__$1 = f.call(null,inst_50114);var inst_50119 = cljs.core._EQ_.call(null,inst_50118__$1,inst_50111);var inst_50120 = cljs.core.keyword_identical_QMARK_.call(null,inst_50111,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_50121 = (inst_50119) || (inst_50120);var state_50150__$1 = (function (){var statearr_50164 = state_50150;(statearr_50164[10] = inst_50118__$1);
return statearr_50164;
})();if(cljs.core.truth_(inst_50121))
{var statearr_50165_50190 = state_50150__$1;(statearr_50165_50190[1] = 8);
} else
{var statearr_50166_50191 = state_50150__$1;(statearr_50166_50191[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 14))
{var inst_50143 = (state_50150[2]);var inst_50144 = cljs.core.async.close_BANG_.call(null,out);var state_50150__$1 = (function (){var statearr_50168 = state_50150;(statearr_50168[13] = inst_50143);
return statearr_50168;
})();var statearr_50169_50192 = state_50150__$1;(statearr_50169_50192[2] = inst_50144);
(statearr_50169_50192[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 10))
{var inst_50133 = (state_50150[2]);var state_50150__$1 = state_50150;var statearr_50170_50193 = state_50150__$1;(statearr_50170_50193[2] = inst_50133);
(statearr_50170_50193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50151 === 8))
{var inst_50114 = (state_50150[9]);var inst_50110 = (state_50150[7]);var inst_50118 = (state_50150[10]);var inst_50123 = inst_50110.push(inst_50114);var tmp50167 = inst_50110;var inst_50110__$1 = tmp50167;var inst_50111 = inst_50118;var state_50150__$1 = (function (){var statearr_50171 = state_50150;(statearr_50171[7] = inst_50110__$1);
(statearr_50171[14] = inst_50123);
(statearr_50171[8] = inst_50111);
return statearr_50171;
})();var statearr_50172_50194 = state_50150__$1;(statearr_50172_50194[2] = null);
(statearr_50172_50194[1] = 2);
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
});})(c__5689__auto___50180,out))
;return ((function (switch__5674__auto__,c__5689__auto___50180,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_50176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50176[0] = state_machine__5675__auto__);
(statearr_50176[1] = 1);
return statearr_50176;
});
var state_machine__5675__auto____1 = (function (state_50150){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_50150);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e50177){if((e50177 instanceof Object))
{var ex__5678__auto__ = e50177;var statearr_50178_50195 = state_50150;(statearr_50178_50195[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50196 = state_50150;
state_50150 = G__50196;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_50150){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_50150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___50180,out))
})();var state__5691__auto__ = (function (){var statearr_50179 = f__5690__auto__.call(null);(statearr_50179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___50180);
return statearr_50179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___50180,out))
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
