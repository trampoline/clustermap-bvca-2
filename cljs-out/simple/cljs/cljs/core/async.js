// Compiled by ClojureScript 0.0-2356
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t35142 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35142 = (function (f,fn_handler,meta35143){
this.f = f;
this.fn_handler = fn_handler;
this.meta35143 = meta35143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35142.cljs$lang$type = true;
cljs.core.async.t35142.cljs$lang$ctorStr = "cljs.core.async/t35142";
cljs.core.async.t35142.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t35142");
});
cljs.core.async.t35142.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t35142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t35142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35144){var self__ = this;
var _35144__$1 = this;return self__.meta35143;
});
cljs.core.async.t35142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35144,meta35143__$1){var self__ = this;
var _35144__$1 = this;return (new cljs.core.async.t35142(self__.f,self__.fn_handler,meta35143__$1));
});
cljs.core.async.__GT_t35142 = (function __GT_t35142(f__$1,fn_handler__$1,meta35143){return (new cljs.core.async.t35142(f__$1,fn_handler__$1,meta35143));
});
}
return (new cljs.core.async.t35142(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__35146 = buff;if(G__35146)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__35146.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__35146.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35146);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35146);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
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
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
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
{var val_35147 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_35147);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_35147,ret){
return (function (){return fn1.call(null,val_35147);
});})(val_35147,ret))
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
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___35148 = n;var x_35149 = (0);while(true){
if((x_35149 < n__4506__auto___35148))
{(a[x_35149] = (0));
{
var G__35150 = (x_35149 + (1));
x_35149 = G__35150;
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
var G__35151 = (i + (1));
i = G__35151;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t35155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35155 = (function (flag,alt_flag,meta35156){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35156 = meta35156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35155.cljs$lang$type = true;
cljs.core.async.t35155.cljs$lang$ctorStr = "cljs.core.async/t35155";
cljs.core.async.t35155.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t35155");
});})(flag))
;
cljs.core.async.t35155.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t35155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t35155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35157){var self__ = this;
var _35157__$1 = this;return self__.meta35156;
});})(flag))
;
cljs.core.async.t35155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35157,meta35156__$1){var self__ = this;
var _35157__$1 = this;return (new cljs.core.async.t35155(self__.flag,self__.alt_flag,meta35156__$1));
});})(flag))
;
cljs.core.async.__GT_t35155 = ((function (flag){
return (function __GT_t35155(flag__$1,alt_flag__$1,meta35156){return (new cljs.core.async.t35155(flag__$1,alt_flag__$1,meta35156));
});})(flag))
;
}
return (new cljs.core.async.t35155(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t35161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35161 = (function (cb,flag,alt_handler,meta35162){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35162 = meta35162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35161.cljs$lang$type = true;
cljs.core.async.t35161.cljs$lang$ctorStr = "cljs.core.async/t35161";
cljs.core.async.t35161.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t35161");
});
cljs.core.async.t35161.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t35161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t35161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35163){var self__ = this;
var _35163__$1 = this;return self__.meta35162;
});
cljs.core.async.t35161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35163,meta35162__$1){var self__ = this;
var _35163__$1 = this;return (new cljs.core.async.t35161(self__.cb,self__.flag,self__.alt_handler,meta35162__$1));
});
cljs.core.async.__GT_t35161 = (function __GT_t35161(cb__$1,flag__$1,alt_handler__$1,meta35162){return (new cljs.core.async.t35161(cb__$1,flag__$1,alt_handler__$1,meta35162));
});
}
return (new cljs.core.async.t35161(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35164_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35164_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35165_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35165_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3637__auto__ = wport;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__35166 = (i + (1));
i = G__35166;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3637__auto__ = ret;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3625__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3625__auto__;
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
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
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
var alts_BANG___delegate = function (ports,p__35167){var map__35169 = p__35167;var map__35169__$1 = ((cljs.core.seq_QMARK_.call(null,map__35169))?cljs.core.apply.call(null,cljs.core.hash_map,map__35169):map__35169);var opts = map__35169__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__35167 = null;if (arguments.length > 1) {
  p__35167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__35167);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__35170){
var ports = cljs.core.first(arglist__35170);
var p__35167 = cljs.core.rest(arglist__35170);
return alts_BANG___delegate(ports,p__35167);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5819__auto___35265 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___35265){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___35265){
return (function (state_35241){var state_val_35242 = (state_35241[(1)]);if((state_val_35242 === (7)))
{var inst_35237 = (state_35241[(2)]);var state_35241__$1 = state_35241;var statearr_35243_35266 = state_35241__$1;(statearr_35243_35266[(2)] = inst_35237);
(statearr_35243_35266[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (1)))
{var state_35241__$1 = state_35241;var statearr_35244_35267 = state_35241__$1;(statearr_35244_35267[(2)] = null);
(statearr_35244_35267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (4)))
{var inst_35220 = (state_35241[(7)]);var inst_35220__$1 = (state_35241[(2)]);var inst_35221 = (inst_35220__$1 == null);var state_35241__$1 = (function (){var statearr_35245 = state_35241;(statearr_35245[(7)] = inst_35220__$1);
return statearr_35245;
})();if(cljs.core.truth_(inst_35221))
{var statearr_35246_35268 = state_35241__$1;(statearr_35246_35268[(1)] = (5));
} else
{var statearr_35247_35269 = state_35241__$1;(statearr_35247_35269[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (13)))
{var state_35241__$1 = state_35241;var statearr_35248_35270 = state_35241__$1;(statearr_35248_35270[(2)] = null);
(statearr_35248_35270[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (6)))
{var inst_35220 = (state_35241[(7)]);var state_35241__$1 = state_35241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35241__$1,(11),to,inst_35220);
} else
{if((state_val_35242 === (3)))
{var inst_35239 = (state_35241[(2)]);var state_35241__$1 = state_35241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35241__$1,inst_35239);
} else
{if((state_val_35242 === (12)))
{var state_35241__$1 = state_35241;var statearr_35249_35271 = state_35241__$1;(statearr_35249_35271[(2)] = null);
(statearr_35249_35271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (2)))
{var state_35241__$1 = state_35241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35241__$1,(4),from);
} else
{if((state_val_35242 === (11)))
{var inst_35230 = (state_35241[(2)]);var state_35241__$1 = state_35241;if(cljs.core.truth_(inst_35230))
{var statearr_35250_35272 = state_35241__$1;(statearr_35250_35272[(1)] = (12));
} else
{var statearr_35251_35273 = state_35241__$1;(statearr_35251_35273[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (9)))
{var state_35241__$1 = state_35241;var statearr_35252_35274 = state_35241__$1;(statearr_35252_35274[(2)] = null);
(statearr_35252_35274[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (5)))
{var state_35241__$1 = state_35241;if(cljs.core.truth_(close_QMARK_))
{var statearr_35253_35275 = state_35241__$1;(statearr_35253_35275[(1)] = (8));
} else
{var statearr_35254_35276 = state_35241__$1;(statearr_35254_35276[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (14)))
{var inst_35235 = (state_35241[(2)]);var state_35241__$1 = state_35241;var statearr_35255_35277 = state_35241__$1;(statearr_35255_35277[(2)] = inst_35235);
(statearr_35255_35277[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (10)))
{var inst_35227 = (state_35241[(2)]);var state_35241__$1 = state_35241;var statearr_35256_35278 = state_35241__$1;(statearr_35256_35278[(2)] = inst_35227);
(statearr_35256_35278[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35242 === (8)))
{var inst_35224 = cljs.core.async.close_BANG_.call(null,to);var state_35241__$1 = state_35241;var statearr_35257_35279 = state_35241__$1;(statearr_35257_35279[(2)] = inst_35224);
(statearr_35257_35279[(1)] = (10));
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
});})(c__5819__auto___35265))
;return ((function (switch__5804__auto__,c__5819__auto___35265){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35261 = [null,null,null,null,null,null,null,null];(statearr_35261[(0)] = state_machine__5805__auto__);
(statearr_35261[(1)] = (1));
return statearr_35261;
});
var state_machine__5805__auto____1 = (function (state_35241){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35241);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35262){if((e35262 instanceof Object))
{var ex__5808__auto__ = e35262;var statearr_35263_35280 = state_35241;(statearr_35263_35280[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35241);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35262;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35281 = state_35241;
state_35241 = G__35281;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35241){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___35265))
})();var state__5821__auto__ = (function (){var statearr_35264 = f__5820__auto__.call(null);(statearr_35264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35265);
return statearr_35264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___35265))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__35465){var vec__35466 = p__35465;var v = cljs.core.nth.call(null,vec__35466,(0),null);var p = cljs.core.nth.call(null,vec__35466,(1),null);var job = vec__35466;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5819__auto___35648 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___35648,res,vec__35466,v,p,job,jobs,results){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___35648,res,vec__35466,v,p,job,jobs,results){
return (function (state_35471){var state_val_35472 = (state_35471[(1)]);if((state_val_35472 === (2)))
{var inst_35468 = (state_35471[(2)]);var inst_35469 = cljs.core.async.close_BANG_.call(null,res);var state_35471__$1 = (function (){var statearr_35473 = state_35471;(statearr_35473[(7)] = inst_35468);
return statearr_35473;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35471__$1,inst_35469);
} else
{if((state_val_35472 === (1)))
{var state_35471__$1 = state_35471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35471__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5819__auto___35648,res,vec__35466,v,p,job,jobs,results))
;return ((function (switch__5804__auto__,c__5819__auto___35648,res,vec__35466,v,p,job,jobs,results){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35477 = [null,null,null,null,null,null,null,null];(statearr_35477[(0)] = state_machine__5805__auto__);
(statearr_35477[(1)] = (1));
return statearr_35477;
});
var state_machine__5805__auto____1 = (function (state_35471){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35471);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35478){if((e35478 instanceof Object))
{var ex__5808__auto__ = e35478;var statearr_35479_35649 = state_35471;(statearr_35479_35649[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35471);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35478;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35650 = state_35471;
state_35471 = G__35650;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35471){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___35648,res,vec__35466,v,p,job,jobs,results))
})();var state__5821__auto__ = (function (){var statearr_35480 = f__5820__auto__.call(null);(statearr_35480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35648);
return statearr_35480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___35648,res,vec__35466,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__35481){var vec__35482 = p__35481;var v = cljs.core.nth.call(null,vec__35482,(0),null);var p = cljs.core.nth.call(null,vec__35482,(1),null);var job = vec__35482;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4506__auto___35651 = n;var __35652 = (0);while(true){
if((__35652 < n__4506__auto___35651))
{var G__35483_35653 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__35483_35653) {
case "async":
var c__5819__auto___35655 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__35652,c__5819__auto___35655,G__35483_35653,n__4506__auto___35651,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__35652,c__5819__auto___35655,G__35483_35653,n__4506__auto___35651,jobs,results,process,async){
return (function (state_35496){var state_val_35497 = (state_35496[(1)]);if((state_val_35497 === (7)))
{var inst_35492 = (state_35496[(2)]);var state_35496__$1 = state_35496;var statearr_35498_35656 = state_35496__$1;(statearr_35498_35656[(2)] = inst_35492);
(statearr_35498_35656[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (6)))
{var state_35496__$1 = state_35496;var statearr_35499_35657 = state_35496__$1;(statearr_35499_35657[(2)] = null);
(statearr_35499_35657[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (5)))
{var state_35496__$1 = state_35496;var statearr_35500_35658 = state_35496__$1;(statearr_35500_35658[(2)] = null);
(statearr_35500_35658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (4)))
{var inst_35486 = (state_35496[(2)]);var inst_35487 = async.call(null,inst_35486);var state_35496__$1 = state_35496;if(cljs.core.truth_(inst_35487))
{var statearr_35501_35659 = state_35496__$1;(statearr_35501_35659[(1)] = (5));
} else
{var statearr_35502_35660 = state_35496__$1;(statearr_35502_35660[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (3)))
{var inst_35494 = (state_35496[(2)]);var state_35496__$1 = state_35496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35496__$1,inst_35494);
} else
{if((state_val_35497 === (2)))
{var state_35496__$1 = state_35496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35496__$1,(4),jobs);
} else
{if((state_val_35497 === (1)))
{var state_35496__$1 = state_35496;var statearr_35503_35661 = state_35496__$1;(statearr_35503_35661[(2)] = null);
(statearr_35503_35661[(1)] = (2));
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
});})(__35652,c__5819__auto___35655,G__35483_35653,n__4506__auto___35651,jobs,results,process,async))
;return ((function (__35652,switch__5804__auto__,c__5819__auto___35655,G__35483_35653,n__4506__auto___35651,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35507 = [null,null,null,null,null,null,null];(statearr_35507[(0)] = state_machine__5805__auto__);
(statearr_35507[(1)] = (1));
return statearr_35507;
});
var state_machine__5805__auto____1 = (function (state_35496){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35496);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35508){if((e35508 instanceof Object))
{var ex__5808__auto__ = e35508;var statearr_35509_35662 = state_35496;(statearr_35509_35662[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35508;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35663 = state_35496;
state_35496 = G__35663;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35496){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__35652,switch__5804__auto__,c__5819__auto___35655,G__35483_35653,n__4506__auto___35651,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_35510 = f__5820__auto__.call(null);(statearr_35510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35655);
return statearr_35510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__35652,c__5819__auto___35655,G__35483_35653,n__4506__auto___35651,jobs,results,process,async))
);

break;
case "compute":
var c__5819__auto___35664 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__35652,c__5819__auto___35664,G__35483_35653,n__4506__auto___35651,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__35652,c__5819__auto___35664,G__35483_35653,n__4506__auto___35651,jobs,results,process,async){
return (function (state_35523){var state_val_35524 = (state_35523[(1)]);if((state_val_35524 === (7)))
{var inst_35519 = (state_35523[(2)]);var state_35523__$1 = state_35523;var statearr_35525_35665 = state_35523__$1;(statearr_35525_35665[(2)] = inst_35519);
(statearr_35525_35665[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35524 === (6)))
{var state_35523__$1 = state_35523;var statearr_35526_35666 = state_35523__$1;(statearr_35526_35666[(2)] = null);
(statearr_35526_35666[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35524 === (5)))
{var state_35523__$1 = state_35523;var statearr_35527_35667 = state_35523__$1;(statearr_35527_35667[(2)] = null);
(statearr_35527_35667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35524 === (4)))
{var inst_35513 = (state_35523[(2)]);var inst_35514 = process.call(null,inst_35513);var state_35523__$1 = state_35523;if(cljs.core.truth_(inst_35514))
{var statearr_35528_35668 = state_35523__$1;(statearr_35528_35668[(1)] = (5));
} else
{var statearr_35529_35669 = state_35523__$1;(statearr_35529_35669[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35524 === (3)))
{var inst_35521 = (state_35523[(2)]);var state_35523__$1 = state_35523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35523__$1,inst_35521);
} else
{if((state_val_35524 === (2)))
{var state_35523__$1 = state_35523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35523__$1,(4),jobs);
} else
{if((state_val_35524 === (1)))
{var state_35523__$1 = state_35523;var statearr_35530_35670 = state_35523__$1;(statearr_35530_35670[(2)] = null);
(statearr_35530_35670[(1)] = (2));
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
});})(__35652,c__5819__auto___35664,G__35483_35653,n__4506__auto___35651,jobs,results,process,async))
;return ((function (__35652,switch__5804__auto__,c__5819__auto___35664,G__35483_35653,n__4506__auto___35651,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35534 = [null,null,null,null,null,null,null];(statearr_35534[(0)] = state_machine__5805__auto__);
(statearr_35534[(1)] = (1));
return statearr_35534;
});
var state_machine__5805__auto____1 = (function (state_35523){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35523);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35535){if((e35535 instanceof Object))
{var ex__5808__auto__ = e35535;var statearr_35536_35671 = state_35523;(statearr_35536_35671[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35535;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35672 = state_35523;
state_35523 = G__35672;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35523){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__35652,switch__5804__auto__,c__5819__auto___35664,G__35483_35653,n__4506__auto___35651,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_35537 = f__5820__auto__.call(null);(statearr_35537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35664);
return statearr_35537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__35652,c__5819__auto___35664,G__35483_35653,n__4506__auto___35651,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__35673 = (__35652 + (1));
__35652 = G__35673;
continue;
}
} else
{}
break;
}
var c__5819__auto___35674 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___35674,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___35674,jobs,results,process,async){
return (function (state_35559){var state_val_35560 = (state_35559[(1)]);if((state_val_35560 === (9)))
{var inst_35552 = (state_35559[(2)]);var state_35559__$1 = (function (){var statearr_35561 = state_35559;(statearr_35561[(7)] = inst_35552);
return statearr_35561;
})();var statearr_35562_35675 = state_35559__$1;(statearr_35562_35675[(2)] = null);
(statearr_35562_35675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35560 === (8)))
{var inst_35545 = (state_35559[(8)]);var inst_35550 = (state_35559[(2)]);var state_35559__$1 = (function (){var statearr_35563 = state_35559;(statearr_35563[(9)] = inst_35550);
return statearr_35563;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35559__$1,(9),results,inst_35545);
} else
{if((state_val_35560 === (7)))
{var inst_35555 = (state_35559[(2)]);var state_35559__$1 = state_35559;var statearr_35564_35676 = state_35559__$1;(statearr_35564_35676[(2)] = inst_35555);
(statearr_35564_35676[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35560 === (6)))
{var inst_35545 = (state_35559[(8)]);var inst_35540 = (state_35559[(10)]);var inst_35545__$1 = cljs.core.async.chan.call(null,(1));var inst_35546 = cljs.core.PersistentVector.EMPTY_NODE;var inst_35547 = [inst_35540,inst_35545__$1];var inst_35548 = (new cljs.core.PersistentVector(null,2,(5),inst_35546,inst_35547,null));var state_35559__$1 = (function (){var statearr_35565 = state_35559;(statearr_35565[(8)] = inst_35545__$1);
return statearr_35565;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35559__$1,(8),jobs,inst_35548);
} else
{if((state_val_35560 === (5)))
{var inst_35543 = cljs.core.async.close_BANG_.call(null,jobs);var state_35559__$1 = state_35559;var statearr_35566_35677 = state_35559__$1;(statearr_35566_35677[(2)] = inst_35543);
(statearr_35566_35677[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35560 === (4)))
{var inst_35540 = (state_35559[(10)]);var inst_35540__$1 = (state_35559[(2)]);var inst_35541 = (inst_35540__$1 == null);var state_35559__$1 = (function (){var statearr_35567 = state_35559;(statearr_35567[(10)] = inst_35540__$1);
return statearr_35567;
})();if(cljs.core.truth_(inst_35541))
{var statearr_35568_35678 = state_35559__$1;(statearr_35568_35678[(1)] = (5));
} else
{var statearr_35569_35679 = state_35559__$1;(statearr_35569_35679[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35560 === (3)))
{var inst_35557 = (state_35559[(2)]);var state_35559__$1 = state_35559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35559__$1,inst_35557);
} else
{if((state_val_35560 === (2)))
{var state_35559__$1 = state_35559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35559__$1,(4),from);
} else
{if((state_val_35560 === (1)))
{var state_35559__$1 = state_35559;var statearr_35570_35680 = state_35559__$1;(statearr_35570_35680[(2)] = null);
(statearr_35570_35680[(1)] = (2));
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
});})(c__5819__auto___35674,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto___35674,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35574 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35574[(0)] = state_machine__5805__auto__);
(statearr_35574[(1)] = (1));
return statearr_35574;
});
var state_machine__5805__auto____1 = (function (state_35559){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35559);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35575){if((e35575 instanceof Object))
{var ex__5808__auto__ = e35575;var statearr_35576_35681 = state_35559;(statearr_35576_35681[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35559);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35575;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35682 = state_35559;
state_35559 = G__35682;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35559){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___35674,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_35577 = f__5820__auto__.call(null);(statearr_35577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35674);
return statearr_35577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___35674,jobs,results,process,async))
);
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,jobs,results,process,async){
return (function (state_35615){var state_val_35616 = (state_35615[(1)]);if((state_val_35616 === (7)))
{var inst_35611 = (state_35615[(2)]);var state_35615__$1 = state_35615;var statearr_35617_35683 = state_35615__$1;(statearr_35617_35683[(2)] = inst_35611);
(statearr_35617_35683[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (20)))
{var state_35615__$1 = state_35615;var statearr_35618_35684 = state_35615__$1;(statearr_35618_35684[(2)] = null);
(statearr_35618_35684[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (1)))
{var state_35615__$1 = state_35615;var statearr_35619_35685 = state_35615__$1;(statearr_35619_35685[(2)] = null);
(statearr_35619_35685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (4)))
{var inst_35580 = (state_35615[(7)]);var inst_35580__$1 = (state_35615[(2)]);var inst_35581 = (inst_35580__$1 == null);var state_35615__$1 = (function (){var statearr_35620 = state_35615;(statearr_35620[(7)] = inst_35580__$1);
return statearr_35620;
})();if(cljs.core.truth_(inst_35581))
{var statearr_35621_35686 = state_35615__$1;(statearr_35621_35686[(1)] = (5));
} else
{var statearr_35622_35687 = state_35615__$1;(statearr_35622_35687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (15)))
{var inst_35593 = (state_35615[(8)]);var state_35615__$1 = state_35615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35615__$1,(18),to,inst_35593);
} else
{if((state_val_35616 === (21)))
{var inst_35606 = (state_35615[(2)]);var state_35615__$1 = state_35615;var statearr_35623_35688 = state_35615__$1;(statearr_35623_35688[(2)] = inst_35606);
(statearr_35623_35688[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (13)))
{var inst_35608 = (state_35615[(2)]);var state_35615__$1 = (function (){var statearr_35624 = state_35615;(statearr_35624[(9)] = inst_35608);
return statearr_35624;
})();var statearr_35625_35689 = state_35615__$1;(statearr_35625_35689[(2)] = null);
(statearr_35625_35689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (6)))
{var inst_35580 = (state_35615[(7)]);var state_35615__$1 = state_35615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35615__$1,(11),inst_35580);
} else
{if((state_val_35616 === (17)))
{var inst_35601 = (state_35615[(2)]);var state_35615__$1 = state_35615;if(cljs.core.truth_(inst_35601))
{var statearr_35626_35690 = state_35615__$1;(statearr_35626_35690[(1)] = (19));
} else
{var statearr_35627_35691 = state_35615__$1;(statearr_35627_35691[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (3)))
{var inst_35613 = (state_35615[(2)]);var state_35615__$1 = state_35615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35615__$1,inst_35613);
} else
{if((state_val_35616 === (12)))
{var inst_35590 = (state_35615[(10)]);var state_35615__$1 = state_35615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35615__$1,(14),inst_35590);
} else
{if((state_val_35616 === (2)))
{var state_35615__$1 = state_35615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35615__$1,(4),results);
} else
{if((state_val_35616 === (19)))
{var state_35615__$1 = state_35615;var statearr_35628_35692 = state_35615__$1;(statearr_35628_35692[(2)] = null);
(statearr_35628_35692[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (11)))
{var inst_35590 = (state_35615[(2)]);var state_35615__$1 = (function (){var statearr_35629 = state_35615;(statearr_35629[(10)] = inst_35590);
return statearr_35629;
})();var statearr_35630_35693 = state_35615__$1;(statearr_35630_35693[(2)] = null);
(statearr_35630_35693[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (9)))
{var state_35615__$1 = state_35615;var statearr_35631_35694 = state_35615__$1;(statearr_35631_35694[(2)] = null);
(statearr_35631_35694[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (5)))
{var state_35615__$1 = state_35615;if(cljs.core.truth_(close_QMARK_))
{var statearr_35632_35695 = state_35615__$1;(statearr_35632_35695[(1)] = (8));
} else
{var statearr_35633_35696 = state_35615__$1;(statearr_35633_35696[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (14)))
{var inst_35593 = (state_35615[(8)]);var inst_35595 = (state_35615[(11)]);var inst_35593__$1 = (state_35615[(2)]);var inst_35594 = (inst_35593__$1 == null);var inst_35595__$1 = cljs.core.not.call(null,inst_35594);var state_35615__$1 = (function (){var statearr_35634 = state_35615;(statearr_35634[(8)] = inst_35593__$1);
(statearr_35634[(11)] = inst_35595__$1);
return statearr_35634;
})();if(inst_35595__$1)
{var statearr_35635_35697 = state_35615__$1;(statearr_35635_35697[(1)] = (15));
} else
{var statearr_35636_35698 = state_35615__$1;(statearr_35636_35698[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (16)))
{var inst_35595 = (state_35615[(11)]);var state_35615__$1 = state_35615;var statearr_35637_35699 = state_35615__$1;(statearr_35637_35699[(2)] = inst_35595);
(statearr_35637_35699[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (10)))
{var inst_35587 = (state_35615[(2)]);var state_35615__$1 = state_35615;var statearr_35638_35700 = state_35615__$1;(statearr_35638_35700[(2)] = inst_35587);
(statearr_35638_35700[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (18)))
{var inst_35598 = (state_35615[(2)]);var state_35615__$1 = state_35615;var statearr_35639_35701 = state_35615__$1;(statearr_35639_35701[(2)] = inst_35598);
(statearr_35639_35701[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35616 === (8)))
{var inst_35584 = cljs.core.async.close_BANG_.call(null,to);var state_35615__$1 = state_35615;var statearr_35640_35702 = state_35615__$1;(statearr_35640_35702[(2)] = inst_35584);
(statearr_35640_35702[(1)] = (10));
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
});})(c__5819__auto__,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto__,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35644 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35644[(0)] = state_machine__5805__auto__);
(statearr_35644[(1)] = (1));
return statearr_35644;
});
var state_machine__5805__auto____1 = (function (state_35615){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35615);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35645){if((e35645 instanceof Object))
{var ex__5808__auto__ = e35645;var statearr_35646_35703 = state_35615;(statearr_35646_35703[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35704 = state_35615;
state_35615 = G__35704;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35615){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_35647 = f__5820__auto__.call(null);(statearr_35647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_35647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,jobs,results,process,async))
);
return c__5819__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5819__auto___35805 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___35805,tc,fc){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___35805,tc,fc){
return (function (state_35780){var state_val_35781 = (state_35780[(1)]);if((state_val_35781 === (7)))
{var inst_35776 = (state_35780[(2)]);var state_35780__$1 = state_35780;var statearr_35782_35806 = state_35780__$1;(statearr_35782_35806[(2)] = inst_35776);
(statearr_35782_35806[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (1)))
{var state_35780__$1 = state_35780;var statearr_35783_35807 = state_35780__$1;(statearr_35783_35807[(2)] = null);
(statearr_35783_35807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (4)))
{var inst_35757 = (state_35780[(7)]);var inst_35757__$1 = (state_35780[(2)]);var inst_35758 = (inst_35757__$1 == null);var state_35780__$1 = (function (){var statearr_35784 = state_35780;(statearr_35784[(7)] = inst_35757__$1);
return statearr_35784;
})();if(cljs.core.truth_(inst_35758))
{var statearr_35785_35808 = state_35780__$1;(statearr_35785_35808[(1)] = (5));
} else
{var statearr_35786_35809 = state_35780__$1;(statearr_35786_35809[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (13)))
{var state_35780__$1 = state_35780;var statearr_35787_35810 = state_35780__$1;(statearr_35787_35810[(2)] = null);
(statearr_35787_35810[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (6)))
{var inst_35757 = (state_35780[(7)]);var inst_35763 = p.call(null,inst_35757);var state_35780__$1 = state_35780;if(cljs.core.truth_(inst_35763))
{var statearr_35788_35811 = state_35780__$1;(statearr_35788_35811[(1)] = (9));
} else
{var statearr_35789_35812 = state_35780__$1;(statearr_35789_35812[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (3)))
{var inst_35778 = (state_35780[(2)]);var state_35780__$1 = state_35780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35780__$1,inst_35778);
} else
{if((state_val_35781 === (12)))
{var state_35780__$1 = state_35780;var statearr_35790_35813 = state_35780__$1;(statearr_35790_35813[(2)] = null);
(statearr_35790_35813[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (2)))
{var state_35780__$1 = state_35780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35780__$1,(4),ch);
} else
{if((state_val_35781 === (11)))
{var inst_35757 = (state_35780[(7)]);var inst_35767 = (state_35780[(2)]);var state_35780__$1 = state_35780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35780__$1,(8),inst_35767,inst_35757);
} else
{if((state_val_35781 === (9)))
{var state_35780__$1 = state_35780;var statearr_35791_35814 = state_35780__$1;(statearr_35791_35814[(2)] = tc);
(statearr_35791_35814[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (5)))
{var inst_35760 = cljs.core.async.close_BANG_.call(null,tc);var inst_35761 = cljs.core.async.close_BANG_.call(null,fc);var state_35780__$1 = (function (){var statearr_35792 = state_35780;(statearr_35792[(8)] = inst_35760);
return statearr_35792;
})();var statearr_35793_35815 = state_35780__$1;(statearr_35793_35815[(2)] = inst_35761);
(statearr_35793_35815[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (14)))
{var inst_35774 = (state_35780[(2)]);var state_35780__$1 = state_35780;var statearr_35794_35816 = state_35780__$1;(statearr_35794_35816[(2)] = inst_35774);
(statearr_35794_35816[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (10)))
{var state_35780__$1 = state_35780;var statearr_35795_35817 = state_35780__$1;(statearr_35795_35817[(2)] = fc);
(statearr_35795_35817[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35781 === (8)))
{var inst_35769 = (state_35780[(2)]);var state_35780__$1 = state_35780;if(cljs.core.truth_(inst_35769))
{var statearr_35796_35818 = state_35780__$1;(statearr_35796_35818[(1)] = (12));
} else
{var statearr_35797_35819 = state_35780__$1;(statearr_35797_35819[(1)] = (13));
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
});})(c__5819__auto___35805,tc,fc))
;return ((function (switch__5804__auto__,c__5819__auto___35805,tc,fc){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35801 = [null,null,null,null,null,null,null,null,null];(statearr_35801[(0)] = state_machine__5805__auto__);
(statearr_35801[(1)] = (1));
return statearr_35801;
});
var state_machine__5805__auto____1 = (function (state_35780){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35780);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35802){if((e35802 instanceof Object))
{var ex__5808__auto__ = e35802;var statearr_35803_35820 = state_35780;(statearr_35803_35820[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35780);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35802;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35821 = state_35780;
state_35780 = G__35821;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35780){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___35805,tc,fc))
})();var state__5821__auto__ = (function (){var statearr_35804 = f__5820__auto__.call(null);(statearr_35804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35805);
return statearr_35804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___35805,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_35868){var state_val_35869 = (state_35868[(1)]);if((state_val_35869 === (7)))
{var inst_35864 = (state_35868[(2)]);var state_35868__$1 = state_35868;var statearr_35870_35886 = state_35868__$1;(statearr_35870_35886[(2)] = inst_35864);
(statearr_35870_35886[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35869 === (6)))
{var inst_35857 = (state_35868[(7)]);var inst_35854 = (state_35868[(8)]);var inst_35861 = f.call(null,inst_35854,inst_35857);var inst_35854__$1 = inst_35861;var state_35868__$1 = (function (){var statearr_35871 = state_35868;(statearr_35871[(8)] = inst_35854__$1);
return statearr_35871;
})();var statearr_35872_35887 = state_35868__$1;(statearr_35872_35887[(2)] = null);
(statearr_35872_35887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35869 === (5)))
{var inst_35854 = (state_35868[(8)]);var state_35868__$1 = state_35868;var statearr_35873_35888 = state_35868__$1;(statearr_35873_35888[(2)] = inst_35854);
(statearr_35873_35888[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35869 === (4)))
{var inst_35857 = (state_35868[(7)]);var inst_35857__$1 = (state_35868[(2)]);var inst_35858 = (inst_35857__$1 == null);var state_35868__$1 = (function (){var statearr_35874 = state_35868;(statearr_35874[(7)] = inst_35857__$1);
return statearr_35874;
})();if(cljs.core.truth_(inst_35858))
{var statearr_35875_35889 = state_35868__$1;(statearr_35875_35889[(1)] = (5));
} else
{var statearr_35876_35890 = state_35868__$1;(statearr_35876_35890[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35869 === (3)))
{var inst_35866 = (state_35868[(2)]);var state_35868__$1 = state_35868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35868__$1,inst_35866);
} else
{if((state_val_35869 === (2)))
{var state_35868__$1 = state_35868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35868__$1,(4),ch);
} else
{if((state_val_35869 === (1)))
{var inst_35854 = init;var state_35868__$1 = (function (){var statearr_35877 = state_35868;(statearr_35877[(8)] = inst_35854);
return statearr_35877;
})();var statearr_35878_35891 = state_35868__$1;(statearr_35878_35891[(2)] = null);
(statearr_35878_35891[(1)] = (2));
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35882 = [null,null,null,null,null,null,null,null,null];(statearr_35882[(0)] = state_machine__5805__auto__);
(statearr_35882[(1)] = (1));
return statearr_35882;
});
var state_machine__5805__auto____1 = (function (state_35868){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35868);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35883){if((e35883 instanceof Object))
{var ex__5808__auto__ = e35883;var statearr_35884_35892 = state_35868;(statearr_35884_35892[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35868);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35883;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35893 = state_35868;
state_35868 = G__35893;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35868){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_35885 = f__5820__auto__.call(null);(statearr_35885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_35885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_35967){var state_val_35968 = (state_35967[(1)]);if((state_val_35968 === (7)))
{var inst_35949 = (state_35967[(2)]);var state_35967__$1 = state_35967;var statearr_35969_35992 = state_35967__$1;(statearr_35969_35992[(2)] = inst_35949);
(statearr_35969_35992[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (1)))
{var inst_35943 = cljs.core.seq.call(null,coll);var inst_35944 = inst_35943;var state_35967__$1 = (function (){var statearr_35970 = state_35967;(statearr_35970[(7)] = inst_35944);
return statearr_35970;
})();var statearr_35971_35993 = state_35967__$1;(statearr_35971_35993[(2)] = null);
(statearr_35971_35993[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (4)))
{var inst_35944 = (state_35967[(7)]);var inst_35947 = cljs.core.first.call(null,inst_35944);var state_35967__$1 = state_35967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35967__$1,(7),ch,inst_35947);
} else
{if((state_val_35968 === (13)))
{var inst_35961 = (state_35967[(2)]);var state_35967__$1 = state_35967;var statearr_35972_35994 = state_35967__$1;(statearr_35972_35994[(2)] = inst_35961);
(statearr_35972_35994[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (6)))
{var inst_35952 = (state_35967[(2)]);var state_35967__$1 = state_35967;if(cljs.core.truth_(inst_35952))
{var statearr_35973_35995 = state_35967__$1;(statearr_35973_35995[(1)] = (8));
} else
{var statearr_35974_35996 = state_35967__$1;(statearr_35974_35996[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (3)))
{var inst_35965 = (state_35967[(2)]);var state_35967__$1 = state_35967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35967__$1,inst_35965);
} else
{if((state_val_35968 === (12)))
{var state_35967__$1 = state_35967;var statearr_35975_35997 = state_35967__$1;(statearr_35975_35997[(2)] = null);
(statearr_35975_35997[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (2)))
{var inst_35944 = (state_35967[(7)]);var state_35967__$1 = state_35967;if(cljs.core.truth_(inst_35944))
{var statearr_35976_35998 = state_35967__$1;(statearr_35976_35998[(1)] = (4));
} else
{var statearr_35977_35999 = state_35967__$1;(statearr_35977_35999[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (11)))
{var inst_35958 = cljs.core.async.close_BANG_.call(null,ch);var state_35967__$1 = state_35967;var statearr_35978_36000 = state_35967__$1;(statearr_35978_36000[(2)] = inst_35958);
(statearr_35978_36000[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (9)))
{var state_35967__$1 = state_35967;if(cljs.core.truth_(close_QMARK_))
{var statearr_35979_36001 = state_35967__$1;(statearr_35979_36001[(1)] = (11));
} else
{var statearr_35980_36002 = state_35967__$1;(statearr_35980_36002[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (5)))
{var inst_35944 = (state_35967[(7)]);var state_35967__$1 = state_35967;var statearr_35981_36003 = state_35967__$1;(statearr_35981_36003[(2)] = inst_35944);
(statearr_35981_36003[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (10)))
{var inst_35963 = (state_35967[(2)]);var state_35967__$1 = state_35967;var statearr_35982_36004 = state_35967__$1;(statearr_35982_36004[(2)] = inst_35963);
(statearr_35982_36004[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35968 === (8)))
{var inst_35944 = (state_35967[(7)]);var inst_35954 = cljs.core.next.call(null,inst_35944);var inst_35944__$1 = inst_35954;var state_35967__$1 = (function (){var statearr_35983 = state_35967;(statearr_35983[(7)] = inst_35944__$1);
return statearr_35983;
})();var statearr_35984_36005 = state_35967__$1;(statearr_35984_36005[(2)] = null);
(statearr_35984_36005[(1)] = (2));
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35988 = [null,null,null,null,null,null,null,null];(statearr_35988[(0)] = state_machine__5805__auto__);
(statearr_35988[(1)] = (1));
return statearr_35988;
});
var state_machine__5805__auto____1 = (function (state_35967){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35967);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35989){if((e35989 instanceof Object))
{var ex__5808__auto__ = e35989;var statearr_35990_36006 = state_35967;(statearr_35990_36006[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35989;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36007 = state_35967;
state_35967 = G__36007;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35967){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_35991 = f__5820__auto__.call(null);(statearr_35991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_35991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
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
cljs.core.async.Mux = (function (){var obj36009 = {};return obj36009;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3625__auto__ = _;if(and__3625__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4273__auto__ = (((_ == null))?null:_);return (function (){var or__3637__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj36011 = {};return obj36011;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36233 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36233 = (function (cs,ch,mult,meta36234){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36234 = meta36234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36233.cljs$lang$type = true;
cljs.core.async.t36233.cljs$lang$ctorStr = "cljs.core.async/t36233";
cljs.core.async.t36233.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36233");
});})(cs))
;
cljs.core.async.t36233.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36233.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36233.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36233.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36233.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36235){var self__ = this;
var _36235__$1 = this;return self__.meta36234;
});})(cs))
;
cljs.core.async.t36233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36235,meta36234__$1){var self__ = this;
var _36235__$1 = this;return (new cljs.core.async.t36233(self__.cs,self__.ch,self__.mult,meta36234__$1));
});})(cs))
;
cljs.core.async.__GT_t36233 = ((function (cs){
return (function __GT_t36233(cs__$1,ch__$1,mult__$1,meta36234){return (new cljs.core.async.t36233(cs__$1,ch__$1,mult__$1,meta36234));
});})(cs))
;
}
return (new cljs.core.async.t36233(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5819__auto___36454 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___36454,cs,m,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___36454,cs,m,dchan,dctr,done){
return (function (state_36366){var state_val_36367 = (state_36366[(1)]);if((state_val_36367 === (7)))
{var inst_36362 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36368_36455 = state_36366__$1;(statearr_36368_36455[(2)] = inst_36362);
(statearr_36368_36455[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (20)))
{var inst_36267 = (state_36366[(7)]);var inst_36277 = cljs.core.first.call(null,inst_36267);var inst_36278 = cljs.core.nth.call(null,inst_36277,(0),null);var inst_36279 = cljs.core.nth.call(null,inst_36277,(1),null);var state_36366__$1 = (function (){var statearr_36369 = state_36366;(statearr_36369[(8)] = inst_36278);
return statearr_36369;
})();if(cljs.core.truth_(inst_36279))
{var statearr_36370_36456 = state_36366__$1;(statearr_36370_36456[(1)] = (22));
} else
{var statearr_36371_36457 = state_36366__$1;(statearr_36371_36457[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (27)))
{var inst_36307 = (state_36366[(9)]);var inst_36309 = (state_36366[(10)]);var inst_36238 = (state_36366[(11)]);var inst_36314 = (state_36366[(12)]);var inst_36314__$1 = cljs.core._nth.call(null,inst_36307,inst_36309);var inst_36315 = cljs.core.async.put_BANG_.call(null,inst_36314__$1,inst_36238,done);var state_36366__$1 = (function (){var statearr_36372 = state_36366;(statearr_36372[(12)] = inst_36314__$1);
return statearr_36372;
})();if(cljs.core.truth_(inst_36315))
{var statearr_36373_36458 = state_36366__$1;(statearr_36373_36458[(1)] = (30));
} else
{var statearr_36374_36459 = state_36366__$1;(statearr_36374_36459[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (1)))
{var state_36366__$1 = state_36366;var statearr_36375_36460 = state_36366__$1;(statearr_36375_36460[(2)] = null);
(statearr_36375_36460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (24)))
{var inst_36267 = (state_36366[(7)]);var inst_36284 = (state_36366[(2)]);var inst_36285 = cljs.core.next.call(null,inst_36267);var inst_36247 = inst_36285;var inst_36248 = null;var inst_36249 = (0);var inst_36250 = (0);var state_36366__$1 = (function (){var statearr_36376 = state_36366;(statearr_36376[(13)] = inst_36249);
(statearr_36376[(14)] = inst_36247);
(statearr_36376[(15)] = inst_36248);
(statearr_36376[(16)] = inst_36250);
(statearr_36376[(17)] = inst_36284);
return statearr_36376;
})();var statearr_36377_36461 = state_36366__$1;(statearr_36377_36461[(2)] = null);
(statearr_36377_36461[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (39)))
{var state_36366__$1 = state_36366;var statearr_36381_36462 = state_36366__$1;(statearr_36381_36462[(2)] = null);
(statearr_36381_36462[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (4)))
{var inst_36238 = (state_36366[(11)]);var inst_36238__$1 = (state_36366[(2)]);var inst_36239 = (inst_36238__$1 == null);var state_36366__$1 = (function (){var statearr_36382 = state_36366;(statearr_36382[(11)] = inst_36238__$1);
return statearr_36382;
})();if(cljs.core.truth_(inst_36239))
{var statearr_36383_36463 = state_36366__$1;(statearr_36383_36463[(1)] = (5));
} else
{var statearr_36384_36464 = state_36366__$1;(statearr_36384_36464[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (15)))
{var inst_36249 = (state_36366[(13)]);var inst_36247 = (state_36366[(14)]);var inst_36248 = (state_36366[(15)]);var inst_36250 = (state_36366[(16)]);var inst_36263 = (state_36366[(2)]);var inst_36264 = (inst_36250 + (1));var tmp36378 = inst_36249;var tmp36379 = inst_36247;var tmp36380 = inst_36248;var inst_36247__$1 = tmp36379;var inst_36248__$1 = tmp36380;var inst_36249__$1 = tmp36378;var inst_36250__$1 = inst_36264;var state_36366__$1 = (function (){var statearr_36385 = state_36366;(statearr_36385[(18)] = inst_36263);
(statearr_36385[(13)] = inst_36249__$1);
(statearr_36385[(14)] = inst_36247__$1);
(statearr_36385[(15)] = inst_36248__$1);
(statearr_36385[(16)] = inst_36250__$1);
return statearr_36385;
})();var statearr_36386_36465 = state_36366__$1;(statearr_36386_36465[(2)] = null);
(statearr_36386_36465[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (21)))
{var inst_36288 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36390_36466 = state_36366__$1;(statearr_36390_36466[(2)] = inst_36288);
(statearr_36390_36466[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (31)))
{var inst_36314 = (state_36366[(12)]);var inst_36318 = done.call(null,null);var inst_36319 = cljs.core.async.untap_STAR_.call(null,m,inst_36314);var state_36366__$1 = (function (){var statearr_36391 = state_36366;(statearr_36391[(19)] = inst_36318);
return statearr_36391;
})();var statearr_36392_36467 = state_36366__$1;(statearr_36392_36467[(2)] = inst_36319);
(statearr_36392_36467[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (32)))
{var inst_36307 = (state_36366[(9)]);var inst_36306 = (state_36366[(20)]);var inst_36309 = (state_36366[(10)]);var inst_36308 = (state_36366[(21)]);var inst_36321 = (state_36366[(2)]);var inst_36322 = (inst_36309 + (1));var tmp36387 = inst_36307;var tmp36388 = inst_36306;var tmp36389 = inst_36308;var inst_36306__$1 = tmp36388;var inst_36307__$1 = tmp36387;var inst_36308__$1 = tmp36389;var inst_36309__$1 = inst_36322;var state_36366__$1 = (function (){var statearr_36393 = state_36366;(statearr_36393[(9)] = inst_36307__$1);
(statearr_36393[(20)] = inst_36306__$1);
(statearr_36393[(10)] = inst_36309__$1);
(statearr_36393[(21)] = inst_36308__$1);
(statearr_36393[(22)] = inst_36321);
return statearr_36393;
})();var statearr_36394_36468 = state_36366__$1;(statearr_36394_36468[(2)] = null);
(statearr_36394_36468[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (40)))
{var inst_36334 = (state_36366[(23)]);var inst_36338 = done.call(null,null);var inst_36339 = cljs.core.async.untap_STAR_.call(null,m,inst_36334);var state_36366__$1 = (function (){var statearr_36395 = state_36366;(statearr_36395[(24)] = inst_36338);
return statearr_36395;
})();var statearr_36396_36469 = state_36366__$1;(statearr_36396_36469[(2)] = inst_36339);
(statearr_36396_36469[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (33)))
{var inst_36325 = (state_36366[(25)]);var inst_36327 = cljs.core.chunked_seq_QMARK_.call(null,inst_36325);var state_36366__$1 = state_36366;if(inst_36327)
{var statearr_36397_36470 = state_36366__$1;(statearr_36397_36470[(1)] = (36));
} else
{var statearr_36398_36471 = state_36366__$1;(statearr_36398_36471[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (13)))
{var inst_36257 = (state_36366[(26)]);var inst_36260 = cljs.core.async.close_BANG_.call(null,inst_36257);var state_36366__$1 = state_36366;var statearr_36399_36472 = state_36366__$1;(statearr_36399_36472[(2)] = inst_36260);
(statearr_36399_36472[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (22)))
{var inst_36278 = (state_36366[(8)]);var inst_36281 = cljs.core.async.close_BANG_.call(null,inst_36278);var state_36366__$1 = state_36366;var statearr_36400_36473 = state_36366__$1;(statearr_36400_36473[(2)] = inst_36281);
(statearr_36400_36473[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (36)))
{var inst_36325 = (state_36366[(25)]);var inst_36329 = cljs.core.chunk_first.call(null,inst_36325);var inst_36330 = cljs.core.chunk_rest.call(null,inst_36325);var inst_36331 = cljs.core.count.call(null,inst_36329);var inst_36306 = inst_36330;var inst_36307 = inst_36329;var inst_36308 = inst_36331;var inst_36309 = (0);var state_36366__$1 = (function (){var statearr_36401 = state_36366;(statearr_36401[(9)] = inst_36307);
(statearr_36401[(20)] = inst_36306);
(statearr_36401[(10)] = inst_36309);
(statearr_36401[(21)] = inst_36308);
return statearr_36401;
})();var statearr_36402_36474 = state_36366__$1;(statearr_36402_36474[(2)] = null);
(statearr_36402_36474[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (41)))
{var inst_36325 = (state_36366[(25)]);var inst_36341 = (state_36366[(2)]);var inst_36342 = cljs.core.next.call(null,inst_36325);var inst_36306 = inst_36342;var inst_36307 = null;var inst_36308 = (0);var inst_36309 = (0);var state_36366__$1 = (function (){var statearr_36403 = state_36366;(statearr_36403[(27)] = inst_36341);
(statearr_36403[(9)] = inst_36307);
(statearr_36403[(20)] = inst_36306);
(statearr_36403[(10)] = inst_36309);
(statearr_36403[(21)] = inst_36308);
return statearr_36403;
})();var statearr_36404_36475 = state_36366__$1;(statearr_36404_36475[(2)] = null);
(statearr_36404_36475[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (43)))
{var state_36366__$1 = state_36366;var statearr_36405_36476 = state_36366__$1;(statearr_36405_36476[(2)] = null);
(statearr_36405_36476[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (29)))
{var inst_36350 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36406_36477 = state_36366__$1;(statearr_36406_36477[(2)] = inst_36350);
(statearr_36406_36477[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (44)))
{var inst_36359 = (state_36366[(2)]);var state_36366__$1 = (function (){var statearr_36407 = state_36366;(statearr_36407[(28)] = inst_36359);
return statearr_36407;
})();var statearr_36408_36478 = state_36366__$1;(statearr_36408_36478[(2)] = null);
(statearr_36408_36478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (6)))
{var inst_36298 = (state_36366[(29)]);var inst_36297 = cljs.core.deref.call(null,cs);var inst_36298__$1 = cljs.core.keys.call(null,inst_36297);var inst_36299 = cljs.core.count.call(null,inst_36298__$1);var inst_36300 = cljs.core.reset_BANG_.call(null,dctr,inst_36299);var inst_36305 = cljs.core.seq.call(null,inst_36298__$1);var inst_36306 = inst_36305;var inst_36307 = null;var inst_36308 = (0);var inst_36309 = (0);var state_36366__$1 = (function (){var statearr_36409 = state_36366;(statearr_36409[(9)] = inst_36307);
(statearr_36409[(29)] = inst_36298__$1);
(statearr_36409[(20)] = inst_36306);
(statearr_36409[(10)] = inst_36309);
(statearr_36409[(21)] = inst_36308);
(statearr_36409[(30)] = inst_36300);
return statearr_36409;
})();var statearr_36410_36479 = state_36366__$1;(statearr_36410_36479[(2)] = null);
(statearr_36410_36479[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (28)))
{var inst_36325 = (state_36366[(25)]);var inst_36306 = (state_36366[(20)]);var inst_36325__$1 = cljs.core.seq.call(null,inst_36306);var state_36366__$1 = (function (){var statearr_36411 = state_36366;(statearr_36411[(25)] = inst_36325__$1);
return statearr_36411;
})();if(inst_36325__$1)
{var statearr_36412_36480 = state_36366__$1;(statearr_36412_36480[(1)] = (33));
} else
{var statearr_36413_36481 = state_36366__$1;(statearr_36413_36481[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (25)))
{var inst_36309 = (state_36366[(10)]);var inst_36308 = (state_36366[(21)]);var inst_36311 = (inst_36309 < inst_36308);var inst_36312 = inst_36311;var state_36366__$1 = state_36366;if(cljs.core.truth_(inst_36312))
{var statearr_36414_36482 = state_36366__$1;(statearr_36414_36482[(1)] = (27));
} else
{var statearr_36415_36483 = state_36366__$1;(statearr_36415_36483[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (34)))
{var state_36366__$1 = state_36366;var statearr_36416_36484 = state_36366__$1;(statearr_36416_36484[(2)] = null);
(statearr_36416_36484[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (17)))
{var state_36366__$1 = state_36366;var statearr_36417_36485 = state_36366__$1;(statearr_36417_36485[(2)] = null);
(statearr_36417_36485[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (3)))
{var inst_36364 = (state_36366[(2)]);var state_36366__$1 = state_36366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36366__$1,inst_36364);
} else
{if((state_val_36367 === (12)))
{var inst_36293 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36418_36486 = state_36366__$1;(statearr_36418_36486[(2)] = inst_36293);
(statearr_36418_36486[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (2)))
{var state_36366__$1 = state_36366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(4),ch);
} else
{if((state_val_36367 === (23)))
{var state_36366__$1 = state_36366;var statearr_36419_36487 = state_36366__$1;(statearr_36419_36487[(2)] = null);
(statearr_36419_36487[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (35)))
{var inst_36348 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36420_36488 = state_36366__$1;(statearr_36420_36488[(2)] = inst_36348);
(statearr_36420_36488[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (19)))
{var inst_36267 = (state_36366[(7)]);var inst_36271 = cljs.core.chunk_first.call(null,inst_36267);var inst_36272 = cljs.core.chunk_rest.call(null,inst_36267);var inst_36273 = cljs.core.count.call(null,inst_36271);var inst_36247 = inst_36272;var inst_36248 = inst_36271;var inst_36249 = inst_36273;var inst_36250 = (0);var state_36366__$1 = (function (){var statearr_36421 = state_36366;(statearr_36421[(13)] = inst_36249);
(statearr_36421[(14)] = inst_36247);
(statearr_36421[(15)] = inst_36248);
(statearr_36421[(16)] = inst_36250);
return statearr_36421;
})();var statearr_36422_36489 = state_36366__$1;(statearr_36422_36489[(2)] = null);
(statearr_36422_36489[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (11)))
{var inst_36247 = (state_36366[(14)]);var inst_36267 = (state_36366[(7)]);var inst_36267__$1 = cljs.core.seq.call(null,inst_36247);var state_36366__$1 = (function (){var statearr_36423 = state_36366;(statearr_36423[(7)] = inst_36267__$1);
return statearr_36423;
})();if(inst_36267__$1)
{var statearr_36424_36490 = state_36366__$1;(statearr_36424_36490[(1)] = (16));
} else
{var statearr_36425_36491 = state_36366__$1;(statearr_36425_36491[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (9)))
{var inst_36295 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36426_36492 = state_36366__$1;(statearr_36426_36492[(2)] = inst_36295);
(statearr_36426_36492[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (5)))
{var inst_36245 = cljs.core.deref.call(null,cs);var inst_36246 = cljs.core.seq.call(null,inst_36245);var inst_36247 = inst_36246;var inst_36248 = null;var inst_36249 = (0);var inst_36250 = (0);var state_36366__$1 = (function (){var statearr_36427 = state_36366;(statearr_36427[(13)] = inst_36249);
(statearr_36427[(14)] = inst_36247);
(statearr_36427[(15)] = inst_36248);
(statearr_36427[(16)] = inst_36250);
return statearr_36427;
})();var statearr_36428_36493 = state_36366__$1;(statearr_36428_36493[(2)] = null);
(statearr_36428_36493[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (14)))
{var state_36366__$1 = state_36366;var statearr_36429_36494 = state_36366__$1;(statearr_36429_36494[(2)] = null);
(statearr_36429_36494[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (45)))
{var inst_36356 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36430_36495 = state_36366__$1;(statearr_36430_36495[(2)] = inst_36356);
(statearr_36430_36495[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (26)))
{var inst_36298 = (state_36366[(29)]);var inst_36352 = (state_36366[(2)]);var inst_36353 = cljs.core.seq.call(null,inst_36298);var state_36366__$1 = (function (){var statearr_36431 = state_36366;(statearr_36431[(31)] = inst_36352);
return statearr_36431;
})();if(inst_36353)
{var statearr_36432_36496 = state_36366__$1;(statearr_36432_36496[(1)] = (42));
} else
{var statearr_36433_36497 = state_36366__$1;(statearr_36433_36497[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (16)))
{var inst_36267 = (state_36366[(7)]);var inst_36269 = cljs.core.chunked_seq_QMARK_.call(null,inst_36267);var state_36366__$1 = state_36366;if(inst_36269)
{var statearr_36434_36498 = state_36366__$1;(statearr_36434_36498[(1)] = (19));
} else
{var statearr_36435_36499 = state_36366__$1;(statearr_36435_36499[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (38)))
{var inst_36345 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36436_36500 = state_36366__$1;(statearr_36436_36500[(2)] = inst_36345);
(statearr_36436_36500[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (30)))
{var state_36366__$1 = state_36366;var statearr_36437_36501 = state_36366__$1;(statearr_36437_36501[(2)] = null);
(statearr_36437_36501[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (10)))
{var inst_36248 = (state_36366[(15)]);var inst_36250 = (state_36366[(16)]);var inst_36256 = cljs.core._nth.call(null,inst_36248,inst_36250);var inst_36257 = cljs.core.nth.call(null,inst_36256,(0),null);var inst_36258 = cljs.core.nth.call(null,inst_36256,(1),null);var state_36366__$1 = (function (){var statearr_36438 = state_36366;(statearr_36438[(26)] = inst_36257);
return statearr_36438;
})();if(cljs.core.truth_(inst_36258))
{var statearr_36439_36502 = state_36366__$1;(statearr_36439_36502[(1)] = (13));
} else
{var statearr_36440_36503 = state_36366__$1;(statearr_36440_36503[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (18)))
{var inst_36291 = (state_36366[(2)]);var state_36366__$1 = state_36366;var statearr_36441_36504 = state_36366__$1;(statearr_36441_36504[(2)] = inst_36291);
(statearr_36441_36504[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (42)))
{var state_36366__$1 = state_36366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(45),dchan);
} else
{if((state_val_36367 === (37)))
{var inst_36325 = (state_36366[(25)]);var inst_36334 = (state_36366[(23)]);var inst_36238 = (state_36366[(11)]);var inst_36334__$1 = cljs.core.first.call(null,inst_36325);var inst_36335 = cljs.core.async.put_BANG_.call(null,inst_36334__$1,inst_36238,done);var state_36366__$1 = (function (){var statearr_36442 = state_36366;(statearr_36442[(23)] = inst_36334__$1);
return statearr_36442;
})();if(cljs.core.truth_(inst_36335))
{var statearr_36443_36505 = state_36366__$1;(statearr_36443_36505[(1)] = (39));
} else
{var statearr_36444_36506 = state_36366__$1;(statearr_36444_36506[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36367 === (8)))
{var inst_36249 = (state_36366[(13)]);var inst_36250 = (state_36366[(16)]);var inst_36252 = (inst_36250 < inst_36249);var inst_36253 = inst_36252;var state_36366__$1 = state_36366;if(cljs.core.truth_(inst_36253))
{var statearr_36445_36507 = state_36366__$1;(statearr_36445_36507[(1)] = (10));
} else
{var statearr_36446_36508 = state_36366__$1;(statearr_36446_36508[(1)] = (11));
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
});})(c__5819__auto___36454,cs,m,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___36454,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_36450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36450[(0)] = state_machine__5805__auto__);
(statearr_36450[(1)] = (1));
return statearr_36450;
});
var state_machine__5805__auto____1 = (function (state_36366){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_36366);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e36451){if((e36451 instanceof Object))
{var ex__5808__auto__ = e36451;var statearr_36452_36509 = state_36366;(statearr_36452_36509[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36451;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36510 = state_36366;
state_36366 = G__36510;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_36366){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_36366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___36454,cs,m,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_36453 = f__5820__auto__.call(null);(statearr_36453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___36454);
return statearr_36453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___36454,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj36512 = {};return obj36512;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__36513){var map__36518 = p__36513;var map__36518__$1 = ((cljs.core.seq_QMARK_.call(null,map__36518))?cljs.core.apply.call(null,cljs.core.hash_map,map__36518):map__36518);var opts = map__36518__$1;var statearr_36519_36522 = state;(statearr_36519_36522[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__36518,map__36518__$1,opts){
return (function (val){var statearr_36520_36523 = state;(statearr_36520_36523[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36518,map__36518__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_36521_36524 = state;(statearr_36521_36524[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__36513 = null;if (arguments.length > 3) {
  p__36513 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__36513);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__36525){
var state = cljs.core.first(arglist__36525);
arglist__36525 = cljs.core.next(arglist__36525);
var cont_block = cljs.core.first(arglist__36525);
arglist__36525 = cljs.core.next(arglist__36525);
var ports = cljs.core.first(arglist__36525);
var p__36513 = cljs.core.rest(arglist__36525);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__36513);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
;var m = (function (){if(typeof cljs.core.async.t36645 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36645 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36646){
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
this.meta36646 = meta36646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36645.cljs$lang$type = true;
cljs.core.async.t36645.cljs$lang$ctorStr = "cljs.core.async/t36645";
cljs.core.async.t36645.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36645");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36645.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36645.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36645.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36645.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36645.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36645.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36645.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36645.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36647){var self__ = this;
var _36647__$1 = this;return self__.meta36646;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36647,meta36646__$1){var self__ = this;
var _36647__$1 = this;return (new cljs.core.async.t36645(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36646__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36645 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36645(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36646){return (new cljs.core.async.t36645(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36646));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36645(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5819__auto___36764 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___36764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___36764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36717){var state_val_36718 = (state_36717[(1)]);if((state_val_36718 === (7)))
{var inst_36661 = (state_36717[(7)]);var inst_36666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36661);var state_36717__$1 = state_36717;var statearr_36719_36765 = state_36717__$1;(statearr_36719_36765[(2)] = inst_36666);
(statearr_36719_36765[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (20)))
{var inst_36676 = (state_36717[(8)]);var state_36717__$1 = state_36717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36717__$1,(23),out,inst_36676);
} else
{if((state_val_36718 === (1)))
{var inst_36651 = (state_36717[(9)]);var inst_36651__$1 = calc_state.call(null);var inst_36652 = cljs.core.seq_QMARK_.call(null,inst_36651__$1);var state_36717__$1 = (function (){var statearr_36720 = state_36717;(statearr_36720[(9)] = inst_36651__$1);
return statearr_36720;
})();if(inst_36652)
{var statearr_36721_36766 = state_36717__$1;(statearr_36721_36766[(1)] = (2));
} else
{var statearr_36722_36767 = state_36717__$1;(statearr_36722_36767[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (24)))
{var inst_36669 = (state_36717[(10)]);var inst_36661 = inst_36669;var state_36717__$1 = (function (){var statearr_36723 = state_36717;(statearr_36723[(7)] = inst_36661);
return statearr_36723;
})();var statearr_36724_36768 = state_36717__$1;(statearr_36724_36768[(2)] = null);
(statearr_36724_36768[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (4)))
{var inst_36651 = (state_36717[(9)]);var inst_36657 = (state_36717[(2)]);var inst_36658 = cljs.core.get.call(null,inst_36657,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_36659 = cljs.core.get.call(null,inst_36657,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_36660 = cljs.core.get.call(null,inst_36657,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_36661 = inst_36651;var state_36717__$1 = (function (){var statearr_36725 = state_36717;(statearr_36725[(7)] = inst_36661);
(statearr_36725[(11)] = inst_36659);
(statearr_36725[(12)] = inst_36658);
(statearr_36725[(13)] = inst_36660);
return statearr_36725;
})();var statearr_36726_36769 = state_36717__$1;(statearr_36726_36769[(2)] = null);
(statearr_36726_36769[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (15)))
{var state_36717__$1 = state_36717;var statearr_36727_36770 = state_36717__$1;(statearr_36727_36770[(2)] = null);
(statearr_36727_36770[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (21)))
{var inst_36669 = (state_36717[(10)]);var inst_36661 = inst_36669;var state_36717__$1 = (function (){var statearr_36728 = state_36717;(statearr_36728[(7)] = inst_36661);
return statearr_36728;
})();var statearr_36729_36771 = state_36717__$1;(statearr_36729_36771[(2)] = null);
(statearr_36729_36771[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (13)))
{var inst_36713 = (state_36717[(2)]);var state_36717__$1 = state_36717;var statearr_36730_36772 = state_36717__$1;(statearr_36730_36772[(2)] = inst_36713);
(statearr_36730_36772[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (22)))
{var inst_36711 = (state_36717[(2)]);var state_36717__$1 = state_36717;var statearr_36731_36773 = state_36717__$1;(statearr_36731_36773[(2)] = inst_36711);
(statearr_36731_36773[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (6)))
{var inst_36715 = (state_36717[(2)]);var state_36717__$1 = state_36717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36717__$1,inst_36715);
} else
{if((state_val_36718 === (25)))
{var state_36717__$1 = state_36717;var statearr_36732_36774 = state_36717__$1;(statearr_36732_36774[(2)] = null);
(statearr_36732_36774[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (17)))
{var inst_36691 = (state_36717[(14)]);var state_36717__$1 = state_36717;var statearr_36733_36775 = state_36717__$1;(statearr_36733_36775[(2)] = inst_36691);
(statearr_36733_36775[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (3)))
{var inst_36651 = (state_36717[(9)]);var state_36717__$1 = state_36717;var statearr_36734_36776 = state_36717__$1;(statearr_36734_36776[(2)] = inst_36651);
(statearr_36734_36776[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (12)))
{var inst_36691 = (state_36717[(14)]);var inst_36677 = (state_36717[(15)]);var inst_36672 = (state_36717[(16)]);var inst_36691__$1 = inst_36672.call(null,inst_36677);var state_36717__$1 = (function (){var statearr_36735 = state_36717;(statearr_36735[(14)] = inst_36691__$1);
return statearr_36735;
})();if(cljs.core.truth_(inst_36691__$1))
{var statearr_36736_36777 = state_36717__$1;(statearr_36736_36777[(1)] = (17));
} else
{var statearr_36737_36778 = state_36717__$1;(statearr_36737_36778[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (2)))
{var inst_36651 = (state_36717[(9)]);var inst_36654 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36651);var state_36717__$1 = state_36717;var statearr_36738_36779 = state_36717__$1;(statearr_36738_36779[(2)] = inst_36654);
(statearr_36738_36779[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (23)))
{var inst_36702 = (state_36717[(2)]);var state_36717__$1 = state_36717;if(cljs.core.truth_(inst_36702))
{var statearr_36739_36780 = state_36717__$1;(statearr_36739_36780[(1)] = (24));
} else
{var statearr_36740_36781 = state_36717__$1;(statearr_36740_36781[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (19)))
{var inst_36699 = (state_36717[(2)]);var state_36717__$1 = state_36717;if(cljs.core.truth_(inst_36699))
{var statearr_36741_36782 = state_36717__$1;(statearr_36741_36782[(1)] = (20));
} else
{var statearr_36742_36783 = state_36717__$1;(statearr_36742_36783[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (11)))
{var inst_36676 = (state_36717[(8)]);var inst_36682 = (inst_36676 == null);var state_36717__$1 = state_36717;if(cljs.core.truth_(inst_36682))
{var statearr_36743_36784 = state_36717__$1;(statearr_36743_36784[(1)] = (14));
} else
{var statearr_36744_36785 = state_36717__$1;(statearr_36744_36785[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (9)))
{var inst_36669 = (state_36717[(10)]);var inst_36669__$1 = (state_36717[(2)]);var inst_36670 = cljs.core.get.call(null,inst_36669__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_36671 = cljs.core.get.call(null,inst_36669__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_36672 = cljs.core.get.call(null,inst_36669__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_36717__$1 = (function (){var statearr_36745 = state_36717;(statearr_36745[(10)] = inst_36669__$1);
(statearr_36745[(17)] = inst_36671);
(statearr_36745[(16)] = inst_36672);
return statearr_36745;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_36717__$1,(10),inst_36670);
} else
{if((state_val_36718 === (5)))
{var inst_36661 = (state_36717[(7)]);var inst_36664 = cljs.core.seq_QMARK_.call(null,inst_36661);var state_36717__$1 = state_36717;if(inst_36664)
{var statearr_36746_36786 = state_36717__$1;(statearr_36746_36786[(1)] = (7));
} else
{var statearr_36747_36787 = state_36717__$1;(statearr_36747_36787[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (14)))
{var inst_36677 = (state_36717[(15)]);var inst_36684 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36677);var state_36717__$1 = state_36717;var statearr_36748_36788 = state_36717__$1;(statearr_36748_36788[(2)] = inst_36684);
(statearr_36748_36788[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (26)))
{var inst_36707 = (state_36717[(2)]);var state_36717__$1 = state_36717;var statearr_36749_36789 = state_36717__$1;(statearr_36749_36789[(2)] = inst_36707);
(statearr_36749_36789[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (16)))
{var inst_36687 = (state_36717[(2)]);var inst_36688 = calc_state.call(null);var inst_36661 = inst_36688;var state_36717__$1 = (function (){var statearr_36750 = state_36717;(statearr_36750[(7)] = inst_36661);
(statearr_36750[(18)] = inst_36687);
return statearr_36750;
})();var statearr_36751_36790 = state_36717__$1;(statearr_36751_36790[(2)] = null);
(statearr_36751_36790[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (10)))
{var inst_36676 = (state_36717[(8)]);var inst_36677 = (state_36717[(15)]);var inst_36675 = (state_36717[(2)]);var inst_36676__$1 = cljs.core.nth.call(null,inst_36675,(0),null);var inst_36677__$1 = cljs.core.nth.call(null,inst_36675,(1),null);var inst_36678 = (inst_36676__$1 == null);var inst_36679 = cljs.core._EQ_.call(null,inst_36677__$1,change);var inst_36680 = (inst_36678) || (inst_36679);var state_36717__$1 = (function (){var statearr_36752 = state_36717;(statearr_36752[(8)] = inst_36676__$1);
(statearr_36752[(15)] = inst_36677__$1);
return statearr_36752;
})();if(cljs.core.truth_(inst_36680))
{var statearr_36753_36791 = state_36717__$1;(statearr_36753_36791[(1)] = (11));
} else
{var statearr_36754_36792 = state_36717__$1;(statearr_36754_36792[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (18)))
{var inst_36671 = (state_36717[(17)]);var inst_36677 = (state_36717[(15)]);var inst_36672 = (state_36717[(16)]);var inst_36694 = cljs.core.empty_QMARK_.call(null,inst_36672);var inst_36695 = inst_36671.call(null,inst_36677);var inst_36696 = cljs.core.not.call(null,inst_36695);var inst_36697 = (inst_36694) && (inst_36696);var state_36717__$1 = state_36717;var statearr_36755_36793 = state_36717__$1;(statearr_36755_36793[(2)] = inst_36697);
(statearr_36755_36793[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36718 === (8)))
{var inst_36661 = (state_36717[(7)]);var state_36717__$1 = state_36717;var statearr_36756_36794 = state_36717__$1;(statearr_36756_36794[(2)] = inst_36661);
(statearr_36756_36794[(1)] = (9));
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
});})(c__5819__auto___36764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5804__auto__,c__5819__auto___36764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_36760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36760[(0)] = state_machine__5805__auto__);
(statearr_36760[(1)] = (1));
return statearr_36760;
});
var state_machine__5805__auto____1 = (function (state_36717){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_36717);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e36761){if((e36761 instanceof Object))
{var ex__5808__auto__ = e36761;var statearr_36762_36795 = state_36717;(statearr_36762_36795[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36717);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36761;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36796 = state_36717;
state_36717 = G__36796;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_36717){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_36717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___36764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5821__auto__ = (function (){var statearr_36763 = f__5820__auto__.call(null);(statearr_36763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___36764);
return statearr_36763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___36764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj36798 = {};return obj36798;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
return (function (topic){var or__3637__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3637__auto__,mults){
return (function (p1__36799_SHARP_){if(cljs.core.truth_(p1__36799_SHARP_.call(null,topic)))
{return p1__36799_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36799_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36922 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36923){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36923 = meta36923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36922.cljs$lang$type = true;
cljs.core.async.t36922.cljs$lang$ctorStr = "cljs.core.async/t36922";
cljs.core.async.t36922.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36922");
});})(mults,ensure_mult))
;
cljs.core.async.t36922.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36922.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36924){var self__ = this;
var _36924__$1 = this;return self__.meta36923;
});})(mults,ensure_mult))
;
cljs.core.async.t36922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36924,meta36923__$1){var self__ = this;
var _36924__$1 = this;return (new cljs.core.async.t36922(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36923__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36922 = ((function (mults,ensure_mult){
return (function __GT_t36922(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36923){return (new cljs.core.async.t36922(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36923));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36922(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5819__auto___37044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37044,mults,ensure_mult,p){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37044,mults,ensure_mult,p){
return (function (state_36996){var state_val_36997 = (state_36996[(1)]);if((state_val_36997 === (7)))
{var inst_36992 = (state_36996[(2)]);var state_36996__$1 = state_36996;var statearr_36998_37045 = state_36996__$1;(statearr_36998_37045[(2)] = inst_36992);
(statearr_36998_37045[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (20)))
{var state_36996__$1 = state_36996;var statearr_36999_37046 = state_36996__$1;(statearr_36999_37046[(2)] = null);
(statearr_36999_37046[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (1)))
{var state_36996__$1 = state_36996;var statearr_37000_37047 = state_36996__$1;(statearr_37000_37047[(2)] = null);
(statearr_37000_37047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (24)))
{var inst_36975 = (state_36996[(7)]);var inst_36984 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36975);var state_36996__$1 = state_36996;var statearr_37001_37048 = state_36996__$1;(statearr_37001_37048[(2)] = inst_36984);
(statearr_37001_37048[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (4)))
{var inst_36927 = (state_36996[(8)]);var inst_36927__$1 = (state_36996[(2)]);var inst_36928 = (inst_36927__$1 == null);var state_36996__$1 = (function (){var statearr_37002 = state_36996;(statearr_37002[(8)] = inst_36927__$1);
return statearr_37002;
})();if(cljs.core.truth_(inst_36928))
{var statearr_37003_37049 = state_36996__$1;(statearr_37003_37049[(1)] = (5));
} else
{var statearr_37004_37050 = state_36996__$1;(statearr_37004_37050[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (15)))
{var inst_36969 = (state_36996[(2)]);var state_36996__$1 = state_36996;var statearr_37005_37051 = state_36996__$1;(statearr_37005_37051[(2)] = inst_36969);
(statearr_37005_37051[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (21)))
{var inst_36989 = (state_36996[(2)]);var state_36996__$1 = (function (){var statearr_37006 = state_36996;(statearr_37006[(9)] = inst_36989);
return statearr_37006;
})();var statearr_37007_37052 = state_36996__$1;(statearr_37007_37052[(2)] = null);
(statearr_37007_37052[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (13)))
{var inst_36951 = (state_36996[(10)]);var inst_36953 = cljs.core.chunked_seq_QMARK_.call(null,inst_36951);var state_36996__$1 = state_36996;if(inst_36953)
{var statearr_37008_37053 = state_36996__$1;(statearr_37008_37053[(1)] = (16));
} else
{var statearr_37009_37054 = state_36996__$1;(statearr_37009_37054[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (22)))
{var inst_36981 = (state_36996[(2)]);var state_36996__$1 = state_36996;if(cljs.core.truth_(inst_36981))
{var statearr_37010_37055 = state_36996__$1;(statearr_37010_37055[(1)] = (23));
} else
{var statearr_37011_37056 = state_36996__$1;(statearr_37011_37056[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (6)))
{var inst_36977 = (state_36996[(11)]);var inst_36975 = (state_36996[(7)]);var inst_36927 = (state_36996[(8)]);var inst_36975__$1 = topic_fn.call(null,inst_36927);var inst_36976 = cljs.core.deref.call(null,mults);var inst_36977__$1 = cljs.core.get.call(null,inst_36976,inst_36975__$1);var state_36996__$1 = (function (){var statearr_37012 = state_36996;(statearr_37012[(11)] = inst_36977__$1);
(statearr_37012[(7)] = inst_36975__$1);
return statearr_37012;
})();if(cljs.core.truth_(inst_36977__$1))
{var statearr_37013_37057 = state_36996__$1;(statearr_37013_37057[(1)] = (19));
} else
{var statearr_37014_37058 = state_36996__$1;(statearr_37014_37058[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (25)))
{var inst_36986 = (state_36996[(2)]);var state_36996__$1 = state_36996;var statearr_37015_37059 = state_36996__$1;(statearr_37015_37059[(2)] = inst_36986);
(statearr_37015_37059[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (17)))
{var inst_36951 = (state_36996[(10)]);var inst_36960 = cljs.core.first.call(null,inst_36951);var inst_36961 = cljs.core.async.muxch_STAR_.call(null,inst_36960);var inst_36962 = cljs.core.async.close_BANG_.call(null,inst_36961);var inst_36963 = cljs.core.next.call(null,inst_36951);var inst_36937 = inst_36963;var inst_36938 = null;var inst_36939 = (0);var inst_36940 = (0);var state_36996__$1 = (function (){var statearr_37016 = state_36996;(statearr_37016[(12)] = inst_36962);
(statearr_37016[(13)] = inst_36937);
(statearr_37016[(14)] = inst_36940);
(statearr_37016[(15)] = inst_36938);
(statearr_37016[(16)] = inst_36939);
return statearr_37016;
})();var statearr_37017_37060 = state_36996__$1;(statearr_37017_37060[(2)] = null);
(statearr_37017_37060[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (3)))
{var inst_36994 = (state_36996[(2)]);var state_36996__$1 = state_36996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36996__$1,inst_36994);
} else
{if((state_val_36997 === (12)))
{var inst_36971 = (state_36996[(2)]);var state_36996__$1 = state_36996;var statearr_37018_37061 = state_36996__$1;(statearr_37018_37061[(2)] = inst_36971);
(statearr_37018_37061[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (2)))
{var state_36996__$1 = state_36996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36996__$1,(4),ch);
} else
{if((state_val_36997 === (23)))
{var state_36996__$1 = state_36996;var statearr_37019_37062 = state_36996__$1;(statearr_37019_37062[(2)] = null);
(statearr_37019_37062[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (19)))
{var inst_36977 = (state_36996[(11)]);var inst_36927 = (state_36996[(8)]);var inst_36979 = cljs.core.async.muxch_STAR_.call(null,inst_36977);var state_36996__$1 = state_36996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36996__$1,(22),inst_36979,inst_36927);
} else
{if((state_val_36997 === (11)))
{var inst_36937 = (state_36996[(13)]);var inst_36951 = (state_36996[(10)]);var inst_36951__$1 = cljs.core.seq.call(null,inst_36937);var state_36996__$1 = (function (){var statearr_37020 = state_36996;(statearr_37020[(10)] = inst_36951__$1);
return statearr_37020;
})();if(inst_36951__$1)
{var statearr_37021_37063 = state_36996__$1;(statearr_37021_37063[(1)] = (13));
} else
{var statearr_37022_37064 = state_36996__$1;(statearr_37022_37064[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (9)))
{var inst_36973 = (state_36996[(2)]);var state_36996__$1 = state_36996;var statearr_37023_37065 = state_36996__$1;(statearr_37023_37065[(2)] = inst_36973);
(statearr_37023_37065[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (5)))
{var inst_36934 = cljs.core.deref.call(null,mults);var inst_36935 = cljs.core.vals.call(null,inst_36934);var inst_36936 = cljs.core.seq.call(null,inst_36935);var inst_36937 = inst_36936;var inst_36938 = null;var inst_36939 = (0);var inst_36940 = (0);var state_36996__$1 = (function (){var statearr_37024 = state_36996;(statearr_37024[(13)] = inst_36937);
(statearr_37024[(14)] = inst_36940);
(statearr_37024[(15)] = inst_36938);
(statearr_37024[(16)] = inst_36939);
return statearr_37024;
})();var statearr_37025_37066 = state_36996__$1;(statearr_37025_37066[(2)] = null);
(statearr_37025_37066[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (14)))
{var state_36996__$1 = state_36996;var statearr_37029_37067 = state_36996__$1;(statearr_37029_37067[(2)] = null);
(statearr_37029_37067[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (16)))
{var inst_36951 = (state_36996[(10)]);var inst_36955 = cljs.core.chunk_first.call(null,inst_36951);var inst_36956 = cljs.core.chunk_rest.call(null,inst_36951);var inst_36957 = cljs.core.count.call(null,inst_36955);var inst_36937 = inst_36956;var inst_36938 = inst_36955;var inst_36939 = inst_36957;var inst_36940 = (0);var state_36996__$1 = (function (){var statearr_37030 = state_36996;(statearr_37030[(13)] = inst_36937);
(statearr_37030[(14)] = inst_36940);
(statearr_37030[(15)] = inst_36938);
(statearr_37030[(16)] = inst_36939);
return statearr_37030;
})();var statearr_37031_37068 = state_36996__$1;(statearr_37031_37068[(2)] = null);
(statearr_37031_37068[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (10)))
{var inst_36937 = (state_36996[(13)]);var inst_36940 = (state_36996[(14)]);var inst_36938 = (state_36996[(15)]);var inst_36939 = (state_36996[(16)]);var inst_36945 = cljs.core._nth.call(null,inst_36938,inst_36940);var inst_36946 = cljs.core.async.muxch_STAR_.call(null,inst_36945);var inst_36947 = cljs.core.async.close_BANG_.call(null,inst_36946);var inst_36948 = (inst_36940 + (1));var tmp37026 = inst_36937;var tmp37027 = inst_36938;var tmp37028 = inst_36939;var inst_36937__$1 = tmp37026;var inst_36938__$1 = tmp37027;var inst_36939__$1 = tmp37028;var inst_36940__$1 = inst_36948;var state_36996__$1 = (function (){var statearr_37032 = state_36996;(statearr_37032[(13)] = inst_36937__$1);
(statearr_37032[(14)] = inst_36940__$1);
(statearr_37032[(15)] = inst_36938__$1);
(statearr_37032[(16)] = inst_36939__$1);
(statearr_37032[(17)] = inst_36947);
return statearr_37032;
})();var statearr_37033_37069 = state_36996__$1;(statearr_37033_37069[(2)] = null);
(statearr_37033_37069[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (18)))
{var inst_36966 = (state_36996[(2)]);var state_36996__$1 = state_36996;var statearr_37034_37070 = state_36996__$1;(statearr_37034_37070[(2)] = inst_36966);
(statearr_37034_37070[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36997 === (8)))
{var inst_36940 = (state_36996[(14)]);var inst_36939 = (state_36996[(16)]);var inst_36942 = (inst_36940 < inst_36939);var inst_36943 = inst_36942;var state_36996__$1 = state_36996;if(cljs.core.truth_(inst_36943))
{var statearr_37035_37071 = state_36996__$1;(statearr_37035_37071[(1)] = (10));
} else
{var statearr_37036_37072 = state_36996__$1;(statearr_37036_37072[(1)] = (11));
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
});})(c__5819__auto___37044,mults,ensure_mult,p))
;return ((function (switch__5804__auto__,c__5819__auto___37044,mults,ensure_mult,p){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37040[(0)] = state_machine__5805__auto__);
(statearr_37040[(1)] = (1));
return statearr_37040;
});
var state_machine__5805__auto____1 = (function (state_36996){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_36996);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37041){if((e37041 instanceof Object))
{var ex__5808__auto__ = e37041;var statearr_37042_37073 = state_36996;(statearr_37042_37073[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36996);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37074 = state_36996;
state_36996 = G__37074;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_36996){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_36996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37044,mults,ensure_mult,p))
})();var state__5821__auto__ = (function (){var statearr_37043 = f__5820__auto__.call(null);(statearr_37043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37044);
return statearr_37043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37044,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5819__auto___37211 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37211,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37211,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37181){var state_val_37182 = (state_37181[(1)]);if((state_val_37182 === (7)))
{var state_37181__$1 = state_37181;var statearr_37183_37212 = state_37181__$1;(statearr_37183_37212[(2)] = null);
(statearr_37183_37212[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (1)))
{var state_37181__$1 = state_37181;var statearr_37184_37213 = state_37181__$1;(statearr_37184_37213[(2)] = null);
(statearr_37184_37213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (4)))
{var inst_37145 = (state_37181[(7)]);var inst_37147 = (inst_37145 < cnt);var state_37181__$1 = state_37181;if(cljs.core.truth_(inst_37147))
{var statearr_37185_37214 = state_37181__$1;(statearr_37185_37214[(1)] = (6));
} else
{var statearr_37186_37215 = state_37181__$1;(statearr_37186_37215[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (15)))
{var inst_37177 = (state_37181[(2)]);var state_37181__$1 = state_37181;var statearr_37187_37216 = state_37181__$1;(statearr_37187_37216[(2)] = inst_37177);
(statearr_37187_37216[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (13)))
{var inst_37170 = cljs.core.async.close_BANG_.call(null,out);var state_37181__$1 = state_37181;var statearr_37188_37217 = state_37181__$1;(statearr_37188_37217[(2)] = inst_37170);
(statearr_37188_37217[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (6)))
{var state_37181__$1 = state_37181;var statearr_37189_37218 = state_37181__$1;(statearr_37189_37218[(2)] = null);
(statearr_37189_37218[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (3)))
{var inst_37179 = (state_37181[(2)]);var state_37181__$1 = state_37181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37181__$1,inst_37179);
} else
{if((state_val_37182 === (12)))
{var inst_37167 = (state_37181[(8)]);var inst_37167__$1 = (state_37181[(2)]);var inst_37168 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37167__$1);var state_37181__$1 = (function (){var statearr_37190 = state_37181;(statearr_37190[(8)] = inst_37167__$1);
return statearr_37190;
})();if(cljs.core.truth_(inst_37168))
{var statearr_37191_37219 = state_37181__$1;(statearr_37191_37219[(1)] = (13));
} else
{var statearr_37192_37220 = state_37181__$1;(statearr_37192_37220[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (2)))
{var inst_37144 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_37145 = (0);var state_37181__$1 = (function (){var statearr_37193 = state_37181;(statearr_37193[(9)] = inst_37144);
(statearr_37193[(7)] = inst_37145);
return statearr_37193;
})();var statearr_37194_37221 = state_37181__$1;(statearr_37194_37221[(2)] = null);
(statearr_37194_37221[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (11)))
{var inst_37145 = (state_37181[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37181,(10),Object,null,(9));var inst_37154 = chs__$1.call(null,inst_37145);var inst_37155 = done.call(null,inst_37145);var inst_37156 = cljs.core.async.take_BANG_.call(null,inst_37154,inst_37155);var state_37181__$1 = state_37181;var statearr_37195_37222 = state_37181__$1;(statearr_37195_37222[(2)] = inst_37156);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37181__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (9)))
{var inst_37145 = (state_37181[(7)]);var inst_37158 = (state_37181[(2)]);var inst_37159 = (inst_37145 + (1));var inst_37145__$1 = inst_37159;var state_37181__$1 = (function (){var statearr_37196 = state_37181;(statearr_37196[(10)] = inst_37158);
(statearr_37196[(7)] = inst_37145__$1);
return statearr_37196;
})();var statearr_37197_37223 = state_37181__$1;(statearr_37197_37223[(2)] = null);
(statearr_37197_37223[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (5)))
{var inst_37165 = (state_37181[(2)]);var state_37181__$1 = (function (){var statearr_37198 = state_37181;(statearr_37198[(11)] = inst_37165);
return statearr_37198;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37181__$1,(12),dchan);
} else
{if((state_val_37182 === (14)))
{var inst_37167 = (state_37181[(8)]);var inst_37172 = cljs.core.apply.call(null,f,inst_37167);var state_37181__$1 = state_37181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37181__$1,(16),out,inst_37172);
} else
{if((state_val_37182 === (16)))
{var inst_37174 = (state_37181[(2)]);var state_37181__$1 = (function (){var statearr_37199 = state_37181;(statearr_37199[(12)] = inst_37174);
return statearr_37199;
})();var statearr_37200_37224 = state_37181__$1;(statearr_37200_37224[(2)] = null);
(statearr_37200_37224[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (10)))
{var inst_37149 = (state_37181[(2)]);var inst_37150 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_37181__$1 = (function (){var statearr_37201 = state_37181;(statearr_37201[(13)] = inst_37149);
return statearr_37201;
})();var statearr_37202_37225 = state_37181__$1;(statearr_37202_37225[(2)] = inst_37150);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37181__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37182 === (8)))
{var inst_37163 = (state_37181[(2)]);var state_37181__$1 = state_37181;var statearr_37203_37226 = state_37181__$1;(statearr_37203_37226[(2)] = inst_37163);
(statearr_37203_37226[(1)] = (5));
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
});})(c__5819__auto___37211,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___37211,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37207[(0)] = state_machine__5805__auto__);
(statearr_37207[(1)] = (1));
return statearr_37207;
});
var state_machine__5805__auto____1 = (function (state_37181){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37181);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37208){if((e37208 instanceof Object))
{var ex__5808__auto__ = e37208;var statearr_37209_37227 = state_37181;(statearr_37209_37227[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37181);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37208;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37228 = state_37181;
state_37181 = G__37228;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37181){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37211,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_37210 = f__5820__auto__.call(null);(statearr_37210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37211);
return statearr_37210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37211,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___37336 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37336,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37336,out){
return (function (state_37312){var state_val_37313 = (state_37312[(1)]);if((state_val_37313 === (7)))
{var inst_37292 = (state_37312[(7)]);var inst_37291 = (state_37312[(8)]);var inst_37291__$1 = (state_37312[(2)]);var inst_37292__$1 = cljs.core.nth.call(null,inst_37291__$1,(0),null);var inst_37293 = cljs.core.nth.call(null,inst_37291__$1,(1),null);var inst_37294 = (inst_37292__$1 == null);var state_37312__$1 = (function (){var statearr_37314 = state_37312;(statearr_37314[(7)] = inst_37292__$1);
(statearr_37314[(9)] = inst_37293);
(statearr_37314[(8)] = inst_37291__$1);
return statearr_37314;
})();if(cljs.core.truth_(inst_37294))
{var statearr_37315_37337 = state_37312__$1;(statearr_37315_37337[(1)] = (8));
} else
{var statearr_37316_37338 = state_37312__$1;(statearr_37316_37338[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37313 === (1)))
{var inst_37283 = cljs.core.vec.call(null,chs);var inst_37284 = inst_37283;var state_37312__$1 = (function (){var statearr_37317 = state_37312;(statearr_37317[(10)] = inst_37284);
return statearr_37317;
})();var statearr_37318_37339 = state_37312__$1;(statearr_37318_37339[(2)] = null);
(statearr_37318_37339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37313 === (4)))
{var inst_37284 = (state_37312[(10)]);var state_37312__$1 = state_37312;return cljs.core.async.ioc_alts_BANG_.call(null,state_37312__$1,(7),inst_37284);
} else
{if((state_val_37313 === (6)))
{var inst_37308 = (state_37312[(2)]);var state_37312__$1 = state_37312;var statearr_37319_37340 = state_37312__$1;(statearr_37319_37340[(2)] = inst_37308);
(statearr_37319_37340[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37313 === (3)))
{var inst_37310 = (state_37312[(2)]);var state_37312__$1 = state_37312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37312__$1,inst_37310);
} else
{if((state_val_37313 === (2)))
{var inst_37284 = (state_37312[(10)]);var inst_37286 = cljs.core.count.call(null,inst_37284);var inst_37287 = (inst_37286 > (0));var state_37312__$1 = state_37312;if(cljs.core.truth_(inst_37287))
{var statearr_37321_37341 = state_37312__$1;(statearr_37321_37341[(1)] = (4));
} else
{var statearr_37322_37342 = state_37312__$1;(statearr_37322_37342[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37313 === (11)))
{var inst_37284 = (state_37312[(10)]);var inst_37301 = (state_37312[(2)]);var tmp37320 = inst_37284;var inst_37284__$1 = tmp37320;var state_37312__$1 = (function (){var statearr_37323 = state_37312;(statearr_37323[(11)] = inst_37301);
(statearr_37323[(10)] = inst_37284__$1);
return statearr_37323;
})();var statearr_37324_37343 = state_37312__$1;(statearr_37324_37343[(2)] = null);
(statearr_37324_37343[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37313 === (9)))
{var inst_37292 = (state_37312[(7)]);var state_37312__$1 = state_37312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37312__$1,(11),out,inst_37292);
} else
{if((state_val_37313 === (5)))
{var inst_37306 = cljs.core.async.close_BANG_.call(null,out);var state_37312__$1 = state_37312;var statearr_37325_37344 = state_37312__$1;(statearr_37325_37344[(2)] = inst_37306);
(statearr_37325_37344[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37313 === (10)))
{var inst_37304 = (state_37312[(2)]);var state_37312__$1 = state_37312;var statearr_37326_37345 = state_37312__$1;(statearr_37326_37345[(2)] = inst_37304);
(statearr_37326_37345[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37313 === (8)))
{var inst_37292 = (state_37312[(7)]);var inst_37293 = (state_37312[(9)]);var inst_37291 = (state_37312[(8)]);var inst_37284 = (state_37312[(10)]);var inst_37296 = (function (){var c = inst_37293;var v = inst_37292;var vec__37289 = inst_37291;var cs = inst_37284;return ((function (c,v,vec__37289,cs,inst_37292,inst_37293,inst_37291,inst_37284,state_val_37313,c__5819__auto___37336,out){
return (function (p1__37229_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__37229_SHARP_);
});
;})(c,v,vec__37289,cs,inst_37292,inst_37293,inst_37291,inst_37284,state_val_37313,c__5819__auto___37336,out))
})();var inst_37297 = cljs.core.filterv.call(null,inst_37296,inst_37284);var inst_37284__$1 = inst_37297;var state_37312__$1 = (function (){var statearr_37327 = state_37312;(statearr_37327[(10)] = inst_37284__$1);
return statearr_37327;
})();var statearr_37328_37346 = state_37312__$1;(statearr_37328_37346[(2)] = null);
(statearr_37328_37346[(1)] = (2));
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
});})(c__5819__auto___37336,out))
;return ((function (switch__5804__auto__,c__5819__auto___37336,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37332 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37332[(0)] = state_machine__5805__auto__);
(statearr_37332[(1)] = (1));
return statearr_37332;
});
var state_machine__5805__auto____1 = (function (state_37312){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37312);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37333){if((e37333 instanceof Object))
{var ex__5808__auto__ = e37333;var statearr_37334_37347 = state_37312;(statearr_37334_37347[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37333;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37348 = state_37312;
state_37312 = G__37348;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37312){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37336,out))
})();var state__5821__auto__ = (function (){var statearr_37335 = f__5820__auto__.call(null);(statearr_37335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37336);
return statearr_37335;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37336,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___37441 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37441,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37441,out){
return (function (state_37418){var state_val_37419 = (state_37418[(1)]);if((state_val_37419 === (7)))
{var inst_37400 = (state_37418[(7)]);var inst_37400__$1 = (state_37418[(2)]);var inst_37401 = (inst_37400__$1 == null);var inst_37402 = cljs.core.not.call(null,inst_37401);var state_37418__$1 = (function (){var statearr_37420 = state_37418;(statearr_37420[(7)] = inst_37400__$1);
return statearr_37420;
})();if(inst_37402)
{var statearr_37421_37442 = state_37418__$1;(statearr_37421_37442[(1)] = (8));
} else
{var statearr_37422_37443 = state_37418__$1;(statearr_37422_37443[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37419 === (1)))
{var inst_37395 = (0);var state_37418__$1 = (function (){var statearr_37423 = state_37418;(statearr_37423[(8)] = inst_37395);
return statearr_37423;
})();var statearr_37424_37444 = state_37418__$1;(statearr_37424_37444[(2)] = null);
(statearr_37424_37444[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37419 === (4)))
{var state_37418__$1 = state_37418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37418__$1,(7),ch);
} else
{if((state_val_37419 === (6)))
{var inst_37413 = (state_37418[(2)]);var state_37418__$1 = state_37418;var statearr_37425_37445 = state_37418__$1;(statearr_37425_37445[(2)] = inst_37413);
(statearr_37425_37445[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37419 === (3)))
{var inst_37415 = (state_37418[(2)]);var inst_37416 = cljs.core.async.close_BANG_.call(null,out);var state_37418__$1 = (function (){var statearr_37426 = state_37418;(statearr_37426[(9)] = inst_37415);
return statearr_37426;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37418__$1,inst_37416);
} else
{if((state_val_37419 === (2)))
{var inst_37395 = (state_37418[(8)]);var inst_37397 = (inst_37395 < n);var state_37418__$1 = state_37418;if(cljs.core.truth_(inst_37397))
{var statearr_37427_37446 = state_37418__$1;(statearr_37427_37446[(1)] = (4));
} else
{var statearr_37428_37447 = state_37418__$1;(statearr_37428_37447[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37419 === (11)))
{var inst_37395 = (state_37418[(8)]);var inst_37405 = (state_37418[(2)]);var inst_37406 = (inst_37395 + (1));var inst_37395__$1 = inst_37406;var state_37418__$1 = (function (){var statearr_37429 = state_37418;(statearr_37429[(8)] = inst_37395__$1);
(statearr_37429[(10)] = inst_37405);
return statearr_37429;
})();var statearr_37430_37448 = state_37418__$1;(statearr_37430_37448[(2)] = null);
(statearr_37430_37448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37419 === (9)))
{var state_37418__$1 = state_37418;var statearr_37431_37449 = state_37418__$1;(statearr_37431_37449[(2)] = null);
(statearr_37431_37449[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37419 === (5)))
{var state_37418__$1 = state_37418;var statearr_37432_37450 = state_37418__$1;(statearr_37432_37450[(2)] = null);
(statearr_37432_37450[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37419 === (10)))
{var inst_37410 = (state_37418[(2)]);var state_37418__$1 = state_37418;var statearr_37433_37451 = state_37418__$1;(statearr_37433_37451[(2)] = inst_37410);
(statearr_37433_37451[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37419 === (8)))
{var inst_37400 = (state_37418[(7)]);var state_37418__$1 = state_37418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37418__$1,(11),out,inst_37400);
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
});})(c__5819__auto___37441,out))
;return ((function (switch__5804__auto__,c__5819__auto___37441,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37437 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37437[(0)] = state_machine__5805__auto__);
(statearr_37437[(1)] = (1));
return statearr_37437;
});
var state_machine__5805__auto____1 = (function (state_37418){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37438){if((e37438 instanceof Object))
{var ex__5808__auto__ = e37438;var statearr_37439_37452 = state_37418;(statearr_37439_37452[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37438;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37453 = state_37418;
state_37418 = G__37453;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37418){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37441,out))
})();var state__5821__auto__ = (function (){var statearr_37440 = f__5820__auto__.call(null);(statearr_37440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37441);
return statearr_37440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37441,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37461 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37461 = (function (ch,f,map_LT_,meta37462){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37462 = meta37462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37461.cljs$lang$type = true;
cljs.core.async.t37461.cljs$lang$ctorStr = "cljs.core.async/t37461";
cljs.core.async.t37461.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t37461");
});
cljs.core.async.t37461.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t37461.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t37464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37464 = (function (fn1,_,meta37462,ch,f,map_LT_,meta37465){
this.fn1 = fn1;
this._ = _;
this.meta37462 = meta37462;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37465 = meta37465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37464.cljs$lang$type = true;
cljs.core.async.t37464.cljs$lang$ctorStr = "cljs.core.async/t37464";
cljs.core.async.t37464.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t37464");
});})(___$1))
;
cljs.core.async.t37464.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t37464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__37454_SHARP_){return f1.call(null,(((p1__37454_SHARP_ == null))?null:self__.f.call(null,p1__37454_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t37464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37466){var self__ = this;
var _37466__$1 = this;return self__.meta37465;
});})(___$1))
;
cljs.core.async.t37464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37466,meta37465__$1){var self__ = this;
var _37466__$1 = this;return (new cljs.core.async.t37464(self__.fn1,self__._,self__.meta37462,self__.ch,self__.f,self__.map_LT_,meta37465__$1));
});})(___$1))
;
cljs.core.async.__GT_t37464 = ((function (___$1){
return (function __GT_t37464(fn1__$1,___$2,meta37462__$1,ch__$2,f__$2,map_LT___$2,meta37465){return (new cljs.core.async.t37464(fn1__$1,___$2,meta37462__$1,ch__$2,f__$2,map_LT___$2,meta37465));
});})(___$1))
;
}
return (new cljs.core.async.t37464(fn1,___$1,self__.meta37462,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3625__auto__ = ret;if(cljs.core.truth_(and__3625__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3625__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t37461.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37461.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t37461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37463){var self__ = this;
var _37463__$1 = this;return self__.meta37462;
});
cljs.core.async.t37461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37463,meta37462__$1){var self__ = this;
var _37463__$1 = this;return (new cljs.core.async.t37461(self__.ch,self__.f,self__.map_LT_,meta37462__$1));
});
cljs.core.async.__GT_t37461 = (function __GT_t37461(ch__$1,f__$1,map_LT___$1,meta37462){return (new cljs.core.async.t37461(ch__$1,f__$1,map_LT___$1,meta37462));
});
}
return (new cljs.core.async.t37461(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37470 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37470 = (function (ch,f,map_GT_,meta37471){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37471 = meta37471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37470.cljs$lang$type = true;
cljs.core.async.t37470.cljs$lang$ctorStr = "cljs.core.async/t37470";
cljs.core.async.t37470.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t37470");
});
cljs.core.async.t37470.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t37470.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37470.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37472){var self__ = this;
var _37472__$1 = this;return self__.meta37471;
});
cljs.core.async.t37470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37472,meta37471__$1){var self__ = this;
var _37472__$1 = this;return (new cljs.core.async.t37470(self__.ch,self__.f,self__.map_GT_,meta37471__$1));
});
cljs.core.async.__GT_t37470 = (function __GT_t37470(ch__$1,f__$1,map_GT___$1,meta37471){return (new cljs.core.async.t37470(ch__$1,f__$1,map_GT___$1,meta37471));
});
}
return (new cljs.core.async.t37470(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37476 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37476 = (function (ch,p,filter_GT_,meta37477){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37477 = meta37477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37476.cljs$lang$type = true;
cljs.core.async.t37476.cljs$lang$ctorStr = "cljs.core.async/t37476";
cljs.core.async.t37476.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t37476");
});
cljs.core.async.t37476.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t37476.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37476.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37476.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t37476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37478){var self__ = this;
var _37478__$1 = this;return self__.meta37477;
});
cljs.core.async.t37476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37478,meta37477__$1){var self__ = this;
var _37478__$1 = this;return (new cljs.core.async.t37476(self__.ch,self__.p,self__.filter_GT_,meta37477__$1));
});
cljs.core.async.__GT_t37476 = (function __GT_t37476(ch__$1,p__$1,filter_GT___$1,meta37477){return (new cljs.core.async.t37476(ch__$1,p__$1,filter_GT___$1,meta37477));
});
}
return (new cljs.core.async.t37476(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___37561 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37561,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37561,out){
return (function (state_37540){var state_val_37541 = (state_37540[(1)]);if((state_val_37541 === (7)))
{var inst_37536 = (state_37540[(2)]);var state_37540__$1 = state_37540;var statearr_37542_37562 = state_37540__$1;(statearr_37542_37562[(2)] = inst_37536);
(statearr_37542_37562[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37541 === (1)))
{var state_37540__$1 = state_37540;var statearr_37543_37563 = state_37540__$1;(statearr_37543_37563[(2)] = null);
(statearr_37543_37563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37541 === (4)))
{var inst_37522 = (state_37540[(7)]);var inst_37522__$1 = (state_37540[(2)]);var inst_37523 = (inst_37522__$1 == null);var state_37540__$1 = (function (){var statearr_37544 = state_37540;(statearr_37544[(7)] = inst_37522__$1);
return statearr_37544;
})();if(cljs.core.truth_(inst_37523))
{var statearr_37545_37564 = state_37540__$1;(statearr_37545_37564[(1)] = (5));
} else
{var statearr_37546_37565 = state_37540__$1;(statearr_37546_37565[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37541 === (6)))
{var inst_37522 = (state_37540[(7)]);var inst_37527 = p.call(null,inst_37522);var state_37540__$1 = state_37540;if(cljs.core.truth_(inst_37527))
{var statearr_37547_37566 = state_37540__$1;(statearr_37547_37566[(1)] = (8));
} else
{var statearr_37548_37567 = state_37540__$1;(statearr_37548_37567[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37541 === (3)))
{var inst_37538 = (state_37540[(2)]);var state_37540__$1 = state_37540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37540__$1,inst_37538);
} else
{if((state_val_37541 === (2)))
{var state_37540__$1 = state_37540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37540__$1,(4),ch);
} else
{if((state_val_37541 === (11)))
{var inst_37530 = (state_37540[(2)]);var state_37540__$1 = state_37540;var statearr_37549_37568 = state_37540__$1;(statearr_37549_37568[(2)] = inst_37530);
(statearr_37549_37568[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37541 === (9)))
{var state_37540__$1 = state_37540;var statearr_37550_37569 = state_37540__$1;(statearr_37550_37569[(2)] = null);
(statearr_37550_37569[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37541 === (5)))
{var inst_37525 = cljs.core.async.close_BANG_.call(null,out);var state_37540__$1 = state_37540;var statearr_37551_37570 = state_37540__$1;(statearr_37551_37570[(2)] = inst_37525);
(statearr_37551_37570[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37541 === (10)))
{var inst_37533 = (state_37540[(2)]);var state_37540__$1 = (function (){var statearr_37552 = state_37540;(statearr_37552[(8)] = inst_37533);
return statearr_37552;
})();var statearr_37553_37571 = state_37540__$1;(statearr_37553_37571[(2)] = null);
(statearr_37553_37571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37541 === (8)))
{var inst_37522 = (state_37540[(7)]);var state_37540__$1 = state_37540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37540__$1,(11),out,inst_37522);
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
});})(c__5819__auto___37561,out))
;return ((function (switch__5804__auto__,c__5819__auto___37561,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37557 = [null,null,null,null,null,null,null,null,null];(statearr_37557[(0)] = state_machine__5805__auto__);
(statearr_37557[(1)] = (1));
return statearr_37557;
});
var state_machine__5805__auto____1 = (function (state_37540){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37540);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37558){if((e37558 instanceof Object))
{var ex__5808__auto__ = e37558;var statearr_37559_37572 = state_37540;(statearr_37559_37572[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37558;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37573 = state_37540;
state_37540 = G__37573;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37540){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37561,out))
})();var state__5821__auto__ = (function (){var statearr_37560 = f__5820__auto__.call(null);(statearr_37560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37561);
return statearr_37560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37561,out))
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
* Deprecated - this function will be removed. Use transducer instead
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_37739){var state_val_37740 = (state_37739[(1)]);if((state_val_37740 === (7)))
{var inst_37735 = (state_37739[(2)]);var state_37739__$1 = state_37739;var statearr_37741_37782 = state_37739__$1;(statearr_37741_37782[(2)] = inst_37735);
(statearr_37741_37782[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (20)))
{var inst_37705 = (state_37739[(7)]);var inst_37716 = (state_37739[(2)]);var inst_37717 = cljs.core.next.call(null,inst_37705);var inst_37691 = inst_37717;var inst_37692 = null;var inst_37693 = (0);var inst_37694 = (0);var state_37739__$1 = (function (){var statearr_37742 = state_37739;(statearr_37742[(8)] = inst_37716);
(statearr_37742[(9)] = inst_37692);
(statearr_37742[(10)] = inst_37693);
(statearr_37742[(11)] = inst_37691);
(statearr_37742[(12)] = inst_37694);
return statearr_37742;
})();var statearr_37743_37783 = state_37739__$1;(statearr_37743_37783[(2)] = null);
(statearr_37743_37783[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (1)))
{var state_37739__$1 = state_37739;var statearr_37744_37784 = state_37739__$1;(statearr_37744_37784[(2)] = null);
(statearr_37744_37784[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (4)))
{var inst_37680 = (state_37739[(13)]);var inst_37680__$1 = (state_37739[(2)]);var inst_37681 = (inst_37680__$1 == null);var state_37739__$1 = (function (){var statearr_37745 = state_37739;(statearr_37745[(13)] = inst_37680__$1);
return statearr_37745;
})();if(cljs.core.truth_(inst_37681))
{var statearr_37746_37785 = state_37739__$1;(statearr_37746_37785[(1)] = (5));
} else
{var statearr_37747_37786 = state_37739__$1;(statearr_37747_37786[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (15)))
{var state_37739__$1 = state_37739;var statearr_37751_37787 = state_37739__$1;(statearr_37751_37787[(2)] = null);
(statearr_37751_37787[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (21)))
{var state_37739__$1 = state_37739;var statearr_37752_37788 = state_37739__$1;(statearr_37752_37788[(2)] = null);
(statearr_37752_37788[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (13)))
{var inst_37692 = (state_37739[(9)]);var inst_37693 = (state_37739[(10)]);var inst_37691 = (state_37739[(11)]);var inst_37694 = (state_37739[(12)]);var inst_37701 = (state_37739[(2)]);var inst_37702 = (inst_37694 + (1));var tmp37748 = inst_37692;var tmp37749 = inst_37693;var tmp37750 = inst_37691;var inst_37691__$1 = tmp37750;var inst_37692__$1 = tmp37748;var inst_37693__$1 = tmp37749;var inst_37694__$1 = inst_37702;var state_37739__$1 = (function (){var statearr_37753 = state_37739;(statearr_37753[(9)] = inst_37692__$1);
(statearr_37753[(10)] = inst_37693__$1);
(statearr_37753[(14)] = inst_37701);
(statearr_37753[(11)] = inst_37691__$1);
(statearr_37753[(12)] = inst_37694__$1);
return statearr_37753;
})();var statearr_37754_37789 = state_37739__$1;(statearr_37754_37789[(2)] = null);
(statearr_37754_37789[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (22)))
{var state_37739__$1 = state_37739;var statearr_37755_37790 = state_37739__$1;(statearr_37755_37790[(2)] = null);
(statearr_37755_37790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (6)))
{var inst_37680 = (state_37739[(13)]);var inst_37689 = f.call(null,inst_37680);var inst_37690 = cljs.core.seq.call(null,inst_37689);var inst_37691 = inst_37690;var inst_37692 = null;var inst_37693 = (0);var inst_37694 = (0);var state_37739__$1 = (function (){var statearr_37756 = state_37739;(statearr_37756[(9)] = inst_37692);
(statearr_37756[(10)] = inst_37693);
(statearr_37756[(11)] = inst_37691);
(statearr_37756[(12)] = inst_37694);
return statearr_37756;
})();var statearr_37757_37791 = state_37739__$1;(statearr_37757_37791[(2)] = null);
(statearr_37757_37791[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (17)))
{var inst_37705 = (state_37739[(7)]);var inst_37709 = cljs.core.chunk_first.call(null,inst_37705);var inst_37710 = cljs.core.chunk_rest.call(null,inst_37705);var inst_37711 = cljs.core.count.call(null,inst_37709);var inst_37691 = inst_37710;var inst_37692 = inst_37709;var inst_37693 = inst_37711;var inst_37694 = (0);var state_37739__$1 = (function (){var statearr_37758 = state_37739;(statearr_37758[(9)] = inst_37692);
(statearr_37758[(10)] = inst_37693);
(statearr_37758[(11)] = inst_37691);
(statearr_37758[(12)] = inst_37694);
return statearr_37758;
})();var statearr_37759_37792 = state_37739__$1;(statearr_37759_37792[(2)] = null);
(statearr_37759_37792[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (3)))
{var inst_37737 = (state_37739[(2)]);var state_37739__$1 = state_37739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37739__$1,inst_37737);
} else
{if((state_val_37740 === (12)))
{var inst_37725 = (state_37739[(2)]);var state_37739__$1 = state_37739;var statearr_37760_37793 = state_37739__$1;(statearr_37760_37793[(2)] = inst_37725);
(statearr_37760_37793[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (2)))
{var state_37739__$1 = state_37739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37739__$1,(4),in$);
} else
{if((state_val_37740 === (23)))
{var inst_37733 = (state_37739[(2)]);var state_37739__$1 = state_37739;var statearr_37761_37794 = state_37739__$1;(statearr_37761_37794[(2)] = inst_37733);
(statearr_37761_37794[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (19)))
{var inst_37720 = (state_37739[(2)]);var state_37739__$1 = state_37739;var statearr_37762_37795 = state_37739__$1;(statearr_37762_37795[(2)] = inst_37720);
(statearr_37762_37795[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (11)))
{var inst_37705 = (state_37739[(7)]);var inst_37691 = (state_37739[(11)]);var inst_37705__$1 = cljs.core.seq.call(null,inst_37691);var state_37739__$1 = (function (){var statearr_37763 = state_37739;(statearr_37763[(7)] = inst_37705__$1);
return statearr_37763;
})();if(inst_37705__$1)
{var statearr_37764_37796 = state_37739__$1;(statearr_37764_37796[(1)] = (14));
} else
{var statearr_37765_37797 = state_37739__$1;(statearr_37765_37797[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (9)))
{var inst_37727 = (state_37739[(2)]);var inst_37728 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_37739__$1 = (function (){var statearr_37766 = state_37739;(statearr_37766[(15)] = inst_37727);
return statearr_37766;
})();if(cljs.core.truth_(inst_37728))
{var statearr_37767_37798 = state_37739__$1;(statearr_37767_37798[(1)] = (21));
} else
{var statearr_37768_37799 = state_37739__$1;(statearr_37768_37799[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (5)))
{var inst_37683 = cljs.core.async.close_BANG_.call(null,out);var state_37739__$1 = state_37739;var statearr_37769_37800 = state_37739__$1;(statearr_37769_37800[(2)] = inst_37683);
(statearr_37769_37800[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (14)))
{var inst_37705 = (state_37739[(7)]);var inst_37707 = cljs.core.chunked_seq_QMARK_.call(null,inst_37705);var state_37739__$1 = state_37739;if(inst_37707)
{var statearr_37770_37801 = state_37739__$1;(statearr_37770_37801[(1)] = (17));
} else
{var statearr_37771_37802 = state_37739__$1;(statearr_37771_37802[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (16)))
{var inst_37723 = (state_37739[(2)]);var state_37739__$1 = state_37739;var statearr_37772_37803 = state_37739__$1;(statearr_37772_37803[(2)] = inst_37723);
(statearr_37772_37803[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37740 === (10)))
{var inst_37692 = (state_37739[(9)]);var inst_37694 = (state_37739[(12)]);var inst_37699 = cljs.core._nth.call(null,inst_37692,inst_37694);var state_37739__$1 = state_37739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37739__$1,(13),out,inst_37699);
} else
{if((state_val_37740 === (18)))
{var inst_37705 = (state_37739[(7)]);var inst_37714 = cljs.core.first.call(null,inst_37705);var state_37739__$1 = state_37739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37739__$1,(20),out,inst_37714);
} else
{if((state_val_37740 === (8)))
{var inst_37693 = (state_37739[(10)]);var inst_37694 = (state_37739[(12)]);var inst_37696 = (inst_37694 < inst_37693);var inst_37697 = inst_37696;var state_37739__$1 = state_37739;if(cljs.core.truth_(inst_37697))
{var statearr_37773_37804 = state_37739__$1;(statearr_37773_37804[(1)] = (10));
} else
{var statearr_37774_37805 = state_37739__$1;(statearr_37774_37805[(1)] = (11));
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37778[(0)] = state_machine__5805__auto__);
(statearr_37778[(1)] = (1));
return statearr_37778;
});
var state_machine__5805__auto____1 = (function (state_37739){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37739);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37779){if((e37779 instanceof Object))
{var ex__5808__auto__ = e37779;var statearr_37780_37806 = state_37739;(statearr_37780_37806[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37739);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37779;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37807 = state_37739;
state_37739 = G__37807;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37739){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_37781 = f__5820__auto__.call(null);(statearr_37781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_37781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
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
* Deprecated - this function will be removed. Use transducer instead
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___37904 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37904,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37904,out){
return (function (state_37879){var state_val_37880 = (state_37879[(1)]);if((state_val_37880 === (7)))
{var inst_37874 = (state_37879[(2)]);var state_37879__$1 = state_37879;var statearr_37881_37905 = state_37879__$1;(statearr_37881_37905[(2)] = inst_37874);
(statearr_37881_37905[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37880 === (1)))
{var inst_37856 = null;var state_37879__$1 = (function (){var statearr_37882 = state_37879;(statearr_37882[(7)] = inst_37856);
return statearr_37882;
})();var statearr_37883_37906 = state_37879__$1;(statearr_37883_37906[(2)] = null);
(statearr_37883_37906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37880 === (4)))
{var inst_37859 = (state_37879[(8)]);var inst_37859__$1 = (state_37879[(2)]);var inst_37860 = (inst_37859__$1 == null);var inst_37861 = cljs.core.not.call(null,inst_37860);var state_37879__$1 = (function (){var statearr_37884 = state_37879;(statearr_37884[(8)] = inst_37859__$1);
return statearr_37884;
})();if(inst_37861)
{var statearr_37885_37907 = state_37879__$1;(statearr_37885_37907[(1)] = (5));
} else
{var statearr_37886_37908 = state_37879__$1;(statearr_37886_37908[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37880 === (6)))
{var state_37879__$1 = state_37879;var statearr_37887_37909 = state_37879__$1;(statearr_37887_37909[(2)] = null);
(statearr_37887_37909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37880 === (3)))
{var inst_37876 = (state_37879[(2)]);var inst_37877 = cljs.core.async.close_BANG_.call(null,out);var state_37879__$1 = (function (){var statearr_37888 = state_37879;(statearr_37888[(9)] = inst_37876);
return statearr_37888;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37879__$1,inst_37877);
} else
{if((state_val_37880 === (2)))
{var state_37879__$1 = state_37879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37879__$1,(4),ch);
} else
{if((state_val_37880 === (11)))
{var inst_37859 = (state_37879[(8)]);var inst_37868 = (state_37879[(2)]);var inst_37856 = inst_37859;var state_37879__$1 = (function (){var statearr_37889 = state_37879;(statearr_37889[(10)] = inst_37868);
(statearr_37889[(7)] = inst_37856);
return statearr_37889;
})();var statearr_37890_37910 = state_37879__$1;(statearr_37890_37910[(2)] = null);
(statearr_37890_37910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37880 === (9)))
{var inst_37859 = (state_37879[(8)]);var state_37879__$1 = state_37879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37879__$1,(11),out,inst_37859);
} else
{if((state_val_37880 === (5)))
{var inst_37859 = (state_37879[(8)]);var inst_37856 = (state_37879[(7)]);var inst_37863 = cljs.core._EQ_.call(null,inst_37859,inst_37856);var state_37879__$1 = state_37879;if(inst_37863)
{var statearr_37892_37911 = state_37879__$1;(statearr_37892_37911[(1)] = (8));
} else
{var statearr_37893_37912 = state_37879__$1;(statearr_37893_37912[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37880 === (10)))
{var inst_37871 = (state_37879[(2)]);var state_37879__$1 = state_37879;var statearr_37894_37913 = state_37879__$1;(statearr_37894_37913[(2)] = inst_37871);
(statearr_37894_37913[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37880 === (8)))
{var inst_37856 = (state_37879[(7)]);var tmp37891 = inst_37856;var inst_37856__$1 = tmp37891;var state_37879__$1 = (function (){var statearr_37895 = state_37879;(statearr_37895[(7)] = inst_37856__$1);
return statearr_37895;
})();var statearr_37896_37914 = state_37879__$1;(statearr_37896_37914[(2)] = null);
(statearr_37896_37914[(1)] = (2));
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
});})(c__5819__auto___37904,out))
;return ((function (switch__5804__auto__,c__5819__auto___37904,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37900 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37900[(0)] = state_machine__5805__auto__);
(statearr_37900[(1)] = (1));
return statearr_37900;
});
var state_machine__5805__auto____1 = (function (state_37879){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37901){if((e37901 instanceof Object))
{var ex__5808__auto__ = e37901;var statearr_37902_37915 = state_37879;(statearr_37902_37915[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37901;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37916 = state_37879;
state_37879 = G__37916;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37879){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37904,out))
})();var state__5821__auto__ = (function (){var statearr_37903 = f__5820__auto__.call(null);(statearr_37903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37904);
return statearr_37903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37904,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___38051 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___38051,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___38051,out){
return (function (state_38021){var state_val_38022 = (state_38021[(1)]);if((state_val_38022 === (7)))
{var inst_38017 = (state_38021[(2)]);var state_38021__$1 = state_38021;var statearr_38023_38052 = state_38021__$1;(statearr_38023_38052[(2)] = inst_38017);
(statearr_38023_38052[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (1)))
{var inst_37984 = (new Array(n));var inst_37985 = inst_37984;var inst_37986 = (0);var state_38021__$1 = (function (){var statearr_38024 = state_38021;(statearr_38024[(7)] = inst_37986);
(statearr_38024[(8)] = inst_37985);
return statearr_38024;
})();var statearr_38025_38053 = state_38021__$1;(statearr_38025_38053[(2)] = null);
(statearr_38025_38053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (4)))
{var inst_37989 = (state_38021[(9)]);var inst_37989__$1 = (state_38021[(2)]);var inst_37990 = (inst_37989__$1 == null);var inst_37991 = cljs.core.not.call(null,inst_37990);var state_38021__$1 = (function (){var statearr_38026 = state_38021;(statearr_38026[(9)] = inst_37989__$1);
return statearr_38026;
})();if(inst_37991)
{var statearr_38027_38054 = state_38021__$1;(statearr_38027_38054[(1)] = (5));
} else
{var statearr_38028_38055 = state_38021__$1;(statearr_38028_38055[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (15)))
{var inst_38011 = (state_38021[(2)]);var state_38021__$1 = state_38021;var statearr_38029_38056 = state_38021__$1;(statearr_38029_38056[(2)] = inst_38011);
(statearr_38029_38056[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (13)))
{var state_38021__$1 = state_38021;var statearr_38030_38057 = state_38021__$1;(statearr_38030_38057[(2)] = null);
(statearr_38030_38057[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (6)))
{var inst_37986 = (state_38021[(7)]);var inst_38007 = (inst_37986 > (0));var state_38021__$1 = state_38021;if(cljs.core.truth_(inst_38007))
{var statearr_38031_38058 = state_38021__$1;(statearr_38031_38058[(1)] = (12));
} else
{var statearr_38032_38059 = state_38021__$1;(statearr_38032_38059[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (3)))
{var inst_38019 = (state_38021[(2)]);var state_38021__$1 = state_38021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38021__$1,inst_38019);
} else
{if((state_val_38022 === (12)))
{var inst_37985 = (state_38021[(8)]);var inst_38009 = cljs.core.vec.call(null,inst_37985);var state_38021__$1 = state_38021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38021__$1,(15),out,inst_38009);
} else
{if((state_val_38022 === (2)))
{var state_38021__$1 = state_38021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38021__$1,(4),ch);
} else
{if((state_val_38022 === (11)))
{var inst_38001 = (state_38021[(2)]);var inst_38002 = (new Array(n));var inst_37985 = inst_38002;var inst_37986 = (0);var state_38021__$1 = (function (){var statearr_38033 = state_38021;(statearr_38033[(7)] = inst_37986);
(statearr_38033[(10)] = inst_38001);
(statearr_38033[(8)] = inst_37985);
return statearr_38033;
})();var statearr_38034_38060 = state_38021__$1;(statearr_38034_38060[(2)] = null);
(statearr_38034_38060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (9)))
{var inst_37985 = (state_38021[(8)]);var inst_37999 = cljs.core.vec.call(null,inst_37985);var state_38021__$1 = state_38021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38021__$1,(11),out,inst_37999);
} else
{if((state_val_38022 === (5)))
{var inst_37986 = (state_38021[(7)]);var inst_37985 = (state_38021[(8)]);var inst_37989 = (state_38021[(9)]);var inst_37994 = (state_38021[(11)]);var inst_37993 = (inst_37985[inst_37986] = inst_37989);var inst_37994__$1 = (inst_37986 + (1));var inst_37995 = (inst_37994__$1 < n);var state_38021__$1 = (function (){var statearr_38035 = state_38021;(statearr_38035[(12)] = inst_37993);
(statearr_38035[(11)] = inst_37994__$1);
return statearr_38035;
})();if(cljs.core.truth_(inst_37995))
{var statearr_38036_38061 = state_38021__$1;(statearr_38036_38061[(1)] = (8));
} else
{var statearr_38037_38062 = state_38021__$1;(statearr_38037_38062[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (14)))
{var inst_38014 = (state_38021[(2)]);var inst_38015 = cljs.core.async.close_BANG_.call(null,out);var state_38021__$1 = (function (){var statearr_38039 = state_38021;(statearr_38039[(13)] = inst_38014);
return statearr_38039;
})();var statearr_38040_38063 = state_38021__$1;(statearr_38040_38063[(2)] = inst_38015);
(statearr_38040_38063[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (10)))
{var inst_38005 = (state_38021[(2)]);var state_38021__$1 = state_38021;var statearr_38041_38064 = state_38021__$1;(statearr_38041_38064[(2)] = inst_38005);
(statearr_38041_38064[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38022 === (8)))
{var inst_37985 = (state_38021[(8)]);var inst_37994 = (state_38021[(11)]);var tmp38038 = inst_37985;var inst_37985__$1 = tmp38038;var inst_37986 = inst_37994;var state_38021__$1 = (function (){var statearr_38042 = state_38021;(statearr_38042[(7)] = inst_37986);
(statearr_38042[(8)] = inst_37985__$1);
return statearr_38042;
})();var statearr_38043_38065 = state_38021__$1;(statearr_38043_38065[(2)] = null);
(statearr_38043_38065[(1)] = (2));
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
});})(c__5819__auto___38051,out))
;return ((function (switch__5804__auto__,c__5819__auto___38051,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_38047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38047[(0)] = state_machine__5805__auto__);
(statearr_38047[(1)] = (1));
return statearr_38047;
});
var state_machine__5805__auto____1 = (function (state_38021){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_38021);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e38048){if((e38048 instanceof Object))
{var ex__5808__auto__ = e38048;var statearr_38049_38066 = state_38021;(statearr_38049_38066[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38048;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38067 = state_38021;
state_38021 = G__38067;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_38021){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_38021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___38051,out))
})();var state__5821__auto__ = (function (){var statearr_38050 = f__5820__auto__.call(null);(statearr_38050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___38051);
return statearr_38050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___38051,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___38210 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___38210,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___38210,out){
return (function (state_38180){var state_val_38181 = (state_38180[(1)]);if((state_val_38181 === (7)))
{var inst_38176 = (state_38180[(2)]);var state_38180__$1 = state_38180;var statearr_38182_38211 = state_38180__$1;(statearr_38182_38211[(2)] = inst_38176);
(statearr_38182_38211[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (1)))
{var inst_38139 = [];var inst_38140 = inst_38139;var inst_38141 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_38180__$1 = (function (){var statearr_38183 = state_38180;(statearr_38183[(7)] = inst_38141);
(statearr_38183[(8)] = inst_38140);
return statearr_38183;
})();var statearr_38184_38212 = state_38180__$1;(statearr_38184_38212[(2)] = null);
(statearr_38184_38212[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (4)))
{var inst_38144 = (state_38180[(9)]);var inst_38144__$1 = (state_38180[(2)]);var inst_38145 = (inst_38144__$1 == null);var inst_38146 = cljs.core.not.call(null,inst_38145);var state_38180__$1 = (function (){var statearr_38185 = state_38180;(statearr_38185[(9)] = inst_38144__$1);
return statearr_38185;
})();if(inst_38146)
{var statearr_38186_38213 = state_38180__$1;(statearr_38186_38213[(1)] = (5));
} else
{var statearr_38187_38214 = state_38180__$1;(statearr_38187_38214[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (15)))
{var inst_38170 = (state_38180[(2)]);var state_38180__$1 = state_38180;var statearr_38188_38215 = state_38180__$1;(statearr_38188_38215[(2)] = inst_38170);
(statearr_38188_38215[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (13)))
{var state_38180__$1 = state_38180;var statearr_38189_38216 = state_38180__$1;(statearr_38189_38216[(2)] = null);
(statearr_38189_38216[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (6)))
{var inst_38140 = (state_38180[(8)]);var inst_38165 = inst_38140.length;var inst_38166 = (inst_38165 > (0));var state_38180__$1 = state_38180;if(cljs.core.truth_(inst_38166))
{var statearr_38190_38217 = state_38180__$1;(statearr_38190_38217[(1)] = (12));
} else
{var statearr_38191_38218 = state_38180__$1;(statearr_38191_38218[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (3)))
{var inst_38178 = (state_38180[(2)]);var state_38180__$1 = state_38180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38180__$1,inst_38178);
} else
{if((state_val_38181 === (12)))
{var inst_38140 = (state_38180[(8)]);var inst_38168 = cljs.core.vec.call(null,inst_38140);var state_38180__$1 = state_38180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38180__$1,(15),out,inst_38168);
} else
{if((state_val_38181 === (2)))
{var state_38180__$1 = state_38180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38180__$1,(4),ch);
} else
{if((state_val_38181 === (11)))
{var inst_38144 = (state_38180[(9)]);var inst_38148 = (state_38180[(10)]);var inst_38158 = (state_38180[(2)]);var inst_38159 = [];var inst_38160 = inst_38159.push(inst_38144);var inst_38140 = inst_38159;var inst_38141 = inst_38148;var state_38180__$1 = (function (){var statearr_38192 = state_38180;(statearr_38192[(11)] = inst_38158);
(statearr_38192[(12)] = inst_38160);
(statearr_38192[(7)] = inst_38141);
(statearr_38192[(8)] = inst_38140);
return statearr_38192;
})();var statearr_38193_38219 = state_38180__$1;(statearr_38193_38219[(2)] = null);
(statearr_38193_38219[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (9)))
{var inst_38140 = (state_38180[(8)]);var inst_38156 = cljs.core.vec.call(null,inst_38140);var state_38180__$1 = state_38180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38180__$1,(11),out,inst_38156);
} else
{if((state_val_38181 === (5)))
{var inst_38144 = (state_38180[(9)]);var inst_38141 = (state_38180[(7)]);var inst_38148 = (state_38180[(10)]);var inst_38148__$1 = f.call(null,inst_38144);var inst_38149 = cljs.core._EQ_.call(null,inst_38148__$1,inst_38141);var inst_38150 = cljs.core.keyword_identical_QMARK_.call(null,inst_38141,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_38151 = (inst_38149) || (inst_38150);var state_38180__$1 = (function (){var statearr_38194 = state_38180;(statearr_38194[(10)] = inst_38148__$1);
return statearr_38194;
})();if(cljs.core.truth_(inst_38151))
{var statearr_38195_38220 = state_38180__$1;(statearr_38195_38220[(1)] = (8));
} else
{var statearr_38196_38221 = state_38180__$1;(statearr_38196_38221[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (14)))
{var inst_38173 = (state_38180[(2)]);var inst_38174 = cljs.core.async.close_BANG_.call(null,out);var state_38180__$1 = (function (){var statearr_38198 = state_38180;(statearr_38198[(13)] = inst_38173);
return statearr_38198;
})();var statearr_38199_38222 = state_38180__$1;(statearr_38199_38222[(2)] = inst_38174);
(statearr_38199_38222[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (10)))
{var inst_38163 = (state_38180[(2)]);var state_38180__$1 = state_38180;var statearr_38200_38223 = state_38180__$1;(statearr_38200_38223[(2)] = inst_38163);
(statearr_38200_38223[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38181 === (8)))
{var inst_38144 = (state_38180[(9)]);var inst_38140 = (state_38180[(8)]);var inst_38148 = (state_38180[(10)]);var inst_38153 = inst_38140.push(inst_38144);var tmp38197 = inst_38140;var inst_38140__$1 = tmp38197;var inst_38141 = inst_38148;var state_38180__$1 = (function (){var statearr_38201 = state_38180;(statearr_38201[(14)] = inst_38153);
(statearr_38201[(7)] = inst_38141);
(statearr_38201[(8)] = inst_38140__$1);
return statearr_38201;
})();var statearr_38202_38224 = state_38180__$1;(statearr_38202_38224[(2)] = null);
(statearr_38202_38224[(1)] = (2));
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
});})(c__5819__auto___38210,out))
;return ((function (switch__5804__auto__,c__5819__auto___38210,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_38206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38206[(0)] = state_machine__5805__auto__);
(statearr_38206[(1)] = (1));
return statearr_38206;
});
var state_machine__5805__auto____1 = (function (state_38180){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_38180);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e38207){if((e38207 instanceof Object))
{var ex__5808__auto__ = e38207;var statearr_38208_38225 = state_38180;(statearr_38208_38225[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38207;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38226 = state_38180;
state_38180 = G__38226;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_38180){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_38180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___38210,out))
})();var state__5821__auto__ = (function (){var statearr_38209 = f__5820__auto__.call(null);(statearr_38209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___38210);
return statearr_38209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___38210,out))
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
