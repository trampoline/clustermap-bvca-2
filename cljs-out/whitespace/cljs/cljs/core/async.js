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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t35678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35678 = (function (f,fn_handler,meta35679){
this.f = f;
this.fn_handler = fn_handler;
this.meta35679 = meta35679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35678.cljs$lang$type = true;
cljs.core.async.t35678.cljs$lang$ctorStr = "cljs.core.async/t35678";
cljs.core.async.t35678.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35678");
});
cljs.core.async.t35678.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t35678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t35678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35680){var self__ = this;
var _35680__$1 = this;return self__.meta35679;
});
cljs.core.async.t35678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35680,meta35679__$1){var self__ = this;
var _35680__$1 = this;return (new cljs.core.async.t35678(self__.f,self__.fn_handler,meta35679__$1));
});
cljs.core.async.__GT_t35678 = (function __GT_t35678(f__$1,fn_handler__$1,meta35679){return (new cljs.core.async.t35678(f__$1,fn_handler__$1,meta35679));
});
}
return (new cljs.core.async.t35678(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__35682 = buff;if(G__35682)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__35682.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__35682.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35682);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35682);
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
{var val_35683 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_35683);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_35683);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___35684 = n;var x_35685 = 0;while(true){
if((x_35685 < n__4248__auto___35684))
{(a[x_35685] = 0);
{
var G__35686 = (x_35685 + 1);
x_35685 = G__35686;
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
var G__35687 = (i + 1);
i = G__35687;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t35691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35691 = (function (flag,alt_flag,meta35692){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35692 = meta35692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35691.cljs$lang$type = true;
cljs.core.async.t35691.cljs$lang$ctorStr = "cljs.core.async/t35691";
cljs.core.async.t35691.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35691");
});
cljs.core.async.t35691.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t35691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t35691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35693){var self__ = this;
var _35693__$1 = this;return self__.meta35692;
});
cljs.core.async.t35691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35693,meta35692__$1){var self__ = this;
var _35693__$1 = this;return (new cljs.core.async.t35691(self__.flag,self__.alt_flag,meta35692__$1));
});
cljs.core.async.__GT_t35691 = (function __GT_t35691(flag__$1,alt_flag__$1,meta35692){return (new cljs.core.async.t35691(flag__$1,alt_flag__$1,meta35692));
});
}
return (new cljs.core.async.t35691(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t35697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35697 = (function (cb,flag,alt_handler,meta35698){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35698 = meta35698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35697.cljs$lang$type = true;
cljs.core.async.t35697.cljs$lang$ctorStr = "cljs.core.async/t35697";
cljs.core.async.t35697.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35697");
});
cljs.core.async.t35697.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t35697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t35697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35699){var self__ = this;
var _35699__$1 = this;return self__.meta35698;
});
cljs.core.async.t35697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35699,meta35698__$1){var self__ = this;
var _35699__$1 = this;return (new cljs.core.async.t35697(self__.cb,self__.flag,self__.alt_handler,meta35698__$1));
});
cljs.core.async.__GT_t35697 = (function __GT_t35697(cb__$1,flag__$1,alt_handler__$1,meta35698){return (new cljs.core.async.t35697(cb__$1,flag__$1,alt_handler__$1,meta35698));
});
}
return (new cljs.core.async.t35697(cb,flag,alt_handler,null));
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
return (function (p1__35700_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35700_SHARP_,port], null));
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
var G__35701 = (i + 1);
i = G__35701;
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
var alts_BANG___delegate = function (ports,p__35702){var map__35704 = p__35702;var map__35704__$1 = ((cljs.core.seq_QMARK_.call(null,map__35704))?cljs.core.apply.call(null,cljs.core.hash_map,map__35704):map__35704);var opts = map__35704__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__35702 = null;if (arguments.length > 1) {
  p__35702 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__35702);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__35705){
var ports = cljs.core.first(arglist__35705);
var p__35702 = cljs.core.rest(arglist__35705);
return alts_BANG___delegate(ports,p__35702);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t35713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35713 = (function (ch,f,map_LT_,meta35714){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35714 = meta35714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35713.cljs$lang$type = true;
cljs.core.async.t35713.cljs$lang$ctorStr = "cljs.core.async/t35713";
cljs.core.async.t35713.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35713");
});
cljs.core.async.t35713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t35713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t35716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35716 = (function (fn1,_,meta35714,ch,f,map_LT_,meta35717){
this.fn1 = fn1;
this._ = _;
this.meta35714 = meta35714;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35717 = meta35717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35716.cljs$lang$type = true;
cljs.core.async.t35716.cljs$lang$ctorStr = "cljs.core.async/t35716";
cljs.core.async.t35716.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35716");
});
cljs.core.async.t35716.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t35716.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t35716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__35706_SHARP_){return f1.call(null,(((p1__35706_SHARP_ == null))?null:self__.f.call(null,p1__35706_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t35716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35718){var self__ = this;
var _35718__$1 = this;return self__.meta35717;
});
cljs.core.async.t35716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35718,meta35717__$1){var self__ = this;
var _35718__$1 = this;return (new cljs.core.async.t35716(self__.fn1,self__._,self__.meta35714,self__.ch,self__.f,self__.map_LT_,meta35717__$1));
});
cljs.core.async.__GT_t35716 = (function __GT_t35716(fn1__$1,___$2,meta35714__$1,ch__$2,f__$2,map_LT___$2,meta35717){return (new cljs.core.async.t35716(fn1__$1,___$2,meta35714__$1,ch__$2,f__$2,map_LT___$2,meta35717));
});
}
return (new cljs.core.async.t35716(fn1,___$1,self__.meta35714,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t35713.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35715){var self__ = this;
var _35715__$1 = this;return self__.meta35714;
});
cljs.core.async.t35713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35715,meta35714__$1){var self__ = this;
var _35715__$1 = this;return (new cljs.core.async.t35713(self__.ch,self__.f,self__.map_LT_,meta35714__$1));
});
cljs.core.async.__GT_t35713 = (function __GT_t35713(ch__$1,f__$1,map_LT___$1,meta35714){return (new cljs.core.async.t35713(ch__$1,f__$1,map_LT___$1,meta35714));
});
}
return (new cljs.core.async.t35713(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t35722 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35722 = (function (ch,f,map_GT_,meta35723){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35723 = meta35723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35722.cljs$lang$type = true;
cljs.core.async.t35722.cljs$lang$ctorStr = "cljs.core.async/t35722";
cljs.core.async.t35722.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35722");
});
cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35724){var self__ = this;
var _35724__$1 = this;return self__.meta35723;
});
cljs.core.async.t35722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35724,meta35723__$1){var self__ = this;
var _35724__$1 = this;return (new cljs.core.async.t35722(self__.ch,self__.f,self__.map_GT_,meta35723__$1));
});
cljs.core.async.__GT_t35722 = (function __GT_t35722(ch__$1,f__$1,map_GT___$1,meta35723){return (new cljs.core.async.t35722(ch__$1,f__$1,map_GT___$1,meta35723));
});
}
return (new cljs.core.async.t35722(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t35728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35728 = (function (ch,p,filter_GT_,meta35729){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35729 = meta35729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35728.cljs$lang$type = true;
cljs.core.async.t35728.cljs$lang$ctorStr = "cljs.core.async/t35728";
cljs.core.async.t35728.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35728");
});
cljs.core.async.t35728.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t35728.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t35728.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35730){var self__ = this;
var _35730__$1 = this;return self__.meta35729;
});
cljs.core.async.t35728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35730,meta35729__$1){var self__ = this;
var _35730__$1 = this;return (new cljs.core.async.t35728(self__.ch,self__.p,self__.filter_GT_,meta35729__$1));
});
cljs.core.async.__GT_t35728 = (function __GT_t35728(ch__$1,p__$1,filter_GT___$1,meta35729){return (new cljs.core.async.t35728(ch__$1,p__$1,filter_GT___$1,meta35729));
});
}
return (new cljs.core.async.t35728(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35813 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35792){var state_val_35793 = (state_35792[1]);if((state_val_35793 === 1))
{var state_35792__$1 = state_35792;var statearr_35794_35814 = state_35792__$1;(statearr_35794_35814[2] = null);
(statearr_35794_35814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35793 === 2))
{var state_35792__$1 = state_35792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35792__$1,4,ch);
} else
{if((state_val_35793 === 3))
{var inst_35790 = (state_35792[2]);var state_35792__$1 = state_35792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35792__$1,inst_35790);
} else
{if((state_val_35793 === 4))
{var inst_35774 = (state_35792[7]);var inst_35774__$1 = (state_35792[2]);var inst_35775 = (inst_35774__$1 == null);var state_35792__$1 = (function (){var statearr_35795 = state_35792;(statearr_35795[7] = inst_35774__$1);
return statearr_35795;
})();if(cljs.core.truth_(inst_35775))
{var statearr_35796_35815 = state_35792__$1;(statearr_35796_35815[1] = 5);
} else
{var statearr_35797_35816 = state_35792__$1;(statearr_35797_35816[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35793 === 5))
{var inst_35777 = cljs.core.async.close_BANG_.call(null,out);var state_35792__$1 = state_35792;var statearr_35798_35817 = state_35792__$1;(statearr_35798_35817[2] = inst_35777);
(statearr_35798_35817[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35793 === 6))
{var inst_35774 = (state_35792[7]);var inst_35779 = p.call(null,inst_35774);var state_35792__$1 = state_35792;if(cljs.core.truth_(inst_35779))
{var statearr_35799_35818 = state_35792__$1;(statearr_35799_35818[1] = 8);
} else
{var statearr_35800_35819 = state_35792__$1;(statearr_35800_35819[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35793 === 7))
{var inst_35788 = (state_35792[2]);var state_35792__$1 = state_35792;var statearr_35801_35820 = state_35792__$1;(statearr_35801_35820[2] = inst_35788);
(statearr_35801_35820[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35793 === 8))
{var inst_35774 = (state_35792[7]);var state_35792__$1 = state_35792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35792__$1,11,out,inst_35774);
} else
{if((state_val_35793 === 9))
{var state_35792__$1 = state_35792;var statearr_35802_35821 = state_35792__$1;(statearr_35802_35821[2] = null);
(statearr_35802_35821[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35793 === 10))
{var inst_35785 = (state_35792[2]);var state_35792__$1 = (function (){var statearr_35803 = state_35792;(statearr_35803[8] = inst_35785);
return statearr_35803;
})();var statearr_35804_35822 = state_35792__$1;(statearr_35804_35822[2] = null);
(statearr_35804_35822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35793 === 11))
{var inst_35782 = (state_35792[2]);var state_35792__$1 = state_35792;var statearr_35805_35823 = state_35792__$1;(statearr_35805_35823[2] = inst_35782);
(statearr_35805_35823[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_35809 = [null,null,null,null,null,null,null,null,null];(statearr_35809[0] = state_machine__5507__auto__);
(statearr_35809[1] = 1);
return statearr_35809;
});
var state_machine__5507__auto____1 = (function (state_35792){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35792);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35810){if((e35810 instanceof Object))
{var ex__5510__auto__ = e35810;var statearr_35811_35824 = state_35792;(statearr_35811_35824[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35825 = state_35792;
state_35792 = G__35825;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35792){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35812 = f__5522__auto__.call(null);(statearr_35812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35813);
return statearr_35812;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35977){var state_val_35978 = (state_35977[1]);if((state_val_35978 === 1))
{var state_35977__$1 = state_35977;var statearr_35979_36016 = state_35977__$1;(statearr_35979_36016[2] = null);
(statearr_35979_36016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 2))
{var state_35977__$1 = state_35977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35977__$1,4,in$);
} else
{if((state_val_35978 === 3))
{var inst_35975 = (state_35977[2]);var state_35977__$1 = state_35977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35977__$1,inst_35975);
} else
{if((state_val_35978 === 4))
{var inst_35923 = (state_35977[7]);var inst_35923__$1 = (state_35977[2]);var inst_35924 = (inst_35923__$1 == null);var state_35977__$1 = (function (){var statearr_35980 = state_35977;(statearr_35980[7] = inst_35923__$1);
return statearr_35980;
})();if(cljs.core.truth_(inst_35924))
{var statearr_35981_36017 = state_35977__$1;(statearr_35981_36017[1] = 5);
} else
{var statearr_35982_36018 = state_35977__$1;(statearr_35982_36018[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 5))
{var inst_35926 = cljs.core.async.close_BANG_.call(null,out);var state_35977__$1 = state_35977;var statearr_35983_36019 = state_35977__$1;(statearr_35983_36019[2] = inst_35926);
(statearr_35983_36019[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 6))
{var inst_35923 = (state_35977[7]);var inst_35928 = f.call(null,inst_35923);var inst_35933 = cljs.core.seq.call(null,inst_35928);var inst_35934 = inst_35933;var inst_35935 = null;var inst_35936 = 0;var inst_35937 = 0;var state_35977__$1 = (function (){var statearr_35984 = state_35977;(statearr_35984[8] = inst_35934);
(statearr_35984[9] = inst_35936);
(statearr_35984[10] = inst_35935);
(statearr_35984[11] = inst_35937);
return statearr_35984;
})();var statearr_35985_36020 = state_35977__$1;(statearr_35985_36020[2] = null);
(statearr_35985_36020[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 7))
{var inst_35973 = (state_35977[2]);var state_35977__$1 = state_35977;var statearr_35986_36021 = state_35977__$1;(statearr_35986_36021[2] = inst_35973);
(statearr_35986_36021[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 8))
{var inst_35936 = (state_35977[9]);var inst_35937 = (state_35977[11]);var inst_35939 = (inst_35937 < inst_35936);var inst_35940 = inst_35939;var state_35977__$1 = state_35977;if(cljs.core.truth_(inst_35940))
{var statearr_35987_36022 = state_35977__$1;(statearr_35987_36022[1] = 10);
} else
{var statearr_35988_36023 = state_35977__$1;(statearr_35988_36023[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 9))
{var inst_35970 = (state_35977[2]);var state_35977__$1 = (function (){var statearr_35989 = state_35977;(statearr_35989[12] = inst_35970);
return statearr_35989;
})();var statearr_35990_36024 = state_35977__$1;(statearr_35990_36024[2] = null);
(statearr_35990_36024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 10))
{var inst_35935 = (state_35977[10]);var inst_35937 = (state_35977[11]);var inst_35942 = cljs.core._nth.call(null,inst_35935,inst_35937);var state_35977__$1 = state_35977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35977__$1,13,out,inst_35942);
} else
{if((state_val_35978 === 11))
{var inst_35948 = (state_35977[13]);var inst_35934 = (state_35977[8]);var inst_35948__$1 = cljs.core.seq.call(null,inst_35934);var state_35977__$1 = (function (){var statearr_35994 = state_35977;(statearr_35994[13] = inst_35948__$1);
return statearr_35994;
})();if(inst_35948__$1)
{var statearr_35995_36025 = state_35977__$1;(statearr_35995_36025[1] = 14);
} else
{var statearr_35996_36026 = state_35977__$1;(statearr_35996_36026[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 12))
{var inst_35968 = (state_35977[2]);var state_35977__$1 = state_35977;var statearr_35997_36027 = state_35977__$1;(statearr_35997_36027[2] = inst_35968);
(statearr_35997_36027[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 13))
{var inst_35934 = (state_35977[8]);var inst_35936 = (state_35977[9]);var inst_35935 = (state_35977[10]);var inst_35937 = (state_35977[11]);var inst_35944 = (state_35977[2]);var inst_35945 = (inst_35937 + 1);var tmp35991 = inst_35934;var tmp35992 = inst_35936;var tmp35993 = inst_35935;var inst_35934__$1 = tmp35991;var inst_35935__$1 = tmp35993;var inst_35936__$1 = tmp35992;var inst_35937__$1 = inst_35945;var state_35977__$1 = (function (){var statearr_35998 = state_35977;(statearr_35998[8] = inst_35934__$1);
(statearr_35998[9] = inst_35936__$1);
(statearr_35998[10] = inst_35935__$1);
(statearr_35998[11] = inst_35937__$1);
(statearr_35998[14] = inst_35944);
return statearr_35998;
})();var statearr_35999_36028 = state_35977__$1;(statearr_35999_36028[2] = null);
(statearr_35999_36028[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 14))
{var inst_35948 = (state_35977[13]);var inst_35950 = cljs.core.chunked_seq_QMARK_.call(null,inst_35948);var state_35977__$1 = state_35977;if(inst_35950)
{var statearr_36000_36029 = state_35977__$1;(statearr_36000_36029[1] = 17);
} else
{var statearr_36001_36030 = state_35977__$1;(statearr_36001_36030[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 15))
{var state_35977__$1 = state_35977;var statearr_36002_36031 = state_35977__$1;(statearr_36002_36031[2] = null);
(statearr_36002_36031[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 16))
{var inst_35966 = (state_35977[2]);var state_35977__$1 = state_35977;var statearr_36003_36032 = state_35977__$1;(statearr_36003_36032[2] = inst_35966);
(statearr_36003_36032[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 17))
{var inst_35948 = (state_35977[13]);var inst_35952 = cljs.core.chunk_first.call(null,inst_35948);var inst_35953 = cljs.core.chunk_rest.call(null,inst_35948);var inst_35954 = cljs.core.count.call(null,inst_35952);var inst_35934 = inst_35953;var inst_35935 = inst_35952;var inst_35936 = inst_35954;var inst_35937 = 0;var state_35977__$1 = (function (){var statearr_36004 = state_35977;(statearr_36004[8] = inst_35934);
(statearr_36004[9] = inst_35936);
(statearr_36004[10] = inst_35935);
(statearr_36004[11] = inst_35937);
return statearr_36004;
})();var statearr_36005_36033 = state_35977__$1;(statearr_36005_36033[2] = null);
(statearr_36005_36033[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 18))
{var inst_35948 = (state_35977[13]);var inst_35957 = cljs.core.first.call(null,inst_35948);var state_35977__$1 = state_35977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35977__$1,20,out,inst_35957);
} else
{if((state_val_35978 === 19))
{var inst_35963 = (state_35977[2]);var state_35977__$1 = state_35977;var statearr_36006_36034 = state_35977__$1;(statearr_36006_36034[2] = inst_35963);
(statearr_36006_36034[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35978 === 20))
{var inst_35948 = (state_35977[13]);var inst_35959 = (state_35977[2]);var inst_35960 = cljs.core.next.call(null,inst_35948);var inst_35934 = inst_35960;var inst_35935 = null;var inst_35936 = 0;var inst_35937 = 0;var state_35977__$1 = (function (){var statearr_36007 = state_35977;(statearr_36007[8] = inst_35934);
(statearr_36007[15] = inst_35959);
(statearr_36007[9] = inst_35936);
(statearr_36007[10] = inst_35935);
(statearr_36007[11] = inst_35937);
return statearr_36007;
})();var statearr_36008_36035 = state_35977__$1;(statearr_36008_36035[2] = null);
(statearr_36008_36035[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_36012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36012[0] = state_machine__5507__auto__);
(statearr_36012[1] = 1);
return statearr_36012;
});
var state_machine__5507__auto____1 = (function (state_35977){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35977);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36013){if((e36013 instanceof Object))
{var ex__5510__auto__ = e36013;var statearr_36014_36036 = state_35977;(statearr_36014_36036[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36037 = state_35977;
state_35977 = G__36037;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35977){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36015 = f__5522__auto__.call(null);(statearr_36015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_36015;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___36118 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36097){var state_val_36098 = (state_36097[1]);if((state_val_36098 === 1))
{var state_36097__$1 = state_36097;var statearr_36099_36119 = state_36097__$1;(statearr_36099_36119[2] = null);
(statearr_36099_36119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 2))
{var state_36097__$1 = state_36097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36097__$1,4,from);
} else
{if((state_val_36098 === 3))
{var inst_36095 = (state_36097[2]);var state_36097__$1 = state_36097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36097__$1,inst_36095);
} else
{if((state_val_36098 === 4))
{var inst_36080 = (state_36097[7]);var inst_36080__$1 = (state_36097[2]);var inst_36081 = (inst_36080__$1 == null);var state_36097__$1 = (function (){var statearr_36100 = state_36097;(statearr_36100[7] = inst_36080__$1);
return statearr_36100;
})();if(cljs.core.truth_(inst_36081))
{var statearr_36101_36120 = state_36097__$1;(statearr_36101_36120[1] = 5);
} else
{var statearr_36102_36121 = state_36097__$1;(statearr_36102_36121[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 5))
{var state_36097__$1 = state_36097;if(cljs.core.truth_(close_QMARK_))
{var statearr_36103_36122 = state_36097__$1;(statearr_36103_36122[1] = 8);
} else
{var statearr_36104_36123 = state_36097__$1;(statearr_36104_36123[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 6))
{var inst_36080 = (state_36097[7]);var state_36097__$1 = state_36097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36097__$1,11,to,inst_36080);
} else
{if((state_val_36098 === 7))
{var inst_36093 = (state_36097[2]);var state_36097__$1 = state_36097;var statearr_36105_36124 = state_36097__$1;(statearr_36105_36124[2] = inst_36093);
(statearr_36105_36124[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 8))
{var inst_36084 = cljs.core.async.close_BANG_.call(null,to);var state_36097__$1 = state_36097;var statearr_36106_36125 = state_36097__$1;(statearr_36106_36125[2] = inst_36084);
(statearr_36106_36125[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 9))
{var state_36097__$1 = state_36097;var statearr_36107_36126 = state_36097__$1;(statearr_36107_36126[2] = null);
(statearr_36107_36126[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 10))
{var inst_36087 = (state_36097[2]);var state_36097__$1 = state_36097;var statearr_36108_36127 = state_36097__$1;(statearr_36108_36127[2] = inst_36087);
(statearr_36108_36127[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 11))
{var inst_36090 = (state_36097[2]);var state_36097__$1 = (function (){var statearr_36109 = state_36097;(statearr_36109[8] = inst_36090);
return statearr_36109;
})();var statearr_36110_36128 = state_36097__$1;(statearr_36110_36128[2] = null);
(statearr_36110_36128[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36114 = [null,null,null,null,null,null,null,null,null];(statearr_36114[0] = state_machine__5507__auto__);
(statearr_36114[1] = 1);
return statearr_36114;
});
var state_machine__5507__auto____1 = (function (state_36097){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36097);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36115){if((e36115 instanceof Object))
{var ex__5510__auto__ = e36115;var statearr_36116_36129 = state_36097;(statearr_36116_36129[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36130 = state_36097;
state_36097 = G__36130;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36097){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36117 = f__5522__auto__.call(null);(statearr_36117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36118);
return statearr_36117;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___36217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36195){var state_val_36196 = (state_36195[1]);if((state_val_36196 === 1))
{var state_36195__$1 = state_36195;var statearr_36197_36218 = state_36195__$1;(statearr_36197_36218[2] = null);
(statearr_36197_36218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36196 === 2))
{var state_36195__$1 = state_36195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,4,ch);
} else
{if((state_val_36196 === 3))
{var inst_36193 = (state_36195[2]);var state_36195__$1 = state_36195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36195__$1,inst_36193);
} else
{if((state_val_36196 === 4))
{var inst_36176 = (state_36195[7]);var inst_36176__$1 = (state_36195[2]);var inst_36177 = (inst_36176__$1 == null);var state_36195__$1 = (function (){var statearr_36198 = state_36195;(statearr_36198[7] = inst_36176__$1);
return statearr_36198;
})();if(cljs.core.truth_(inst_36177))
{var statearr_36199_36219 = state_36195__$1;(statearr_36199_36219[1] = 5);
} else
{var statearr_36200_36220 = state_36195__$1;(statearr_36200_36220[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36196 === 5))
{var inst_36179 = cljs.core.async.close_BANG_.call(null,tc);var inst_36180 = cljs.core.async.close_BANG_.call(null,fc);var state_36195__$1 = (function (){var statearr_36201 = state_36195;(statearr_36201[8] = inst_36179);
return statearr_36201;
})();var statearr_36202_36221 = state_36195__$1;(statearr_36202_36221[2] = inst_36180);
(statearr_36202_36221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36196 === 6))
{var inst_36176 = (state_36195[7]);var inst_36182 = p.call(null,inst_36176);var state_36195__$1 = state_36195;if(cljs.core.truth_(inst_36182))
{var statearr_36203_36222 = state_36195__$1;(statearr_36203_36222[1] = 9);
} else
{var statearr_36204_36223 = state_36195__$1;(statearr_36204_36223[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36196 === 7))
{var inst_36191 = (state_36195[2]);var state_36195__$1 = state_36195;var statearr_36205_36224 = state_36195__$1;(statearr_36205_36224[2] = inst_36191);
(statearr_36205_36224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36196 === 8))
{var inst_36188 = (state_36195[2]);var state_36195__$1 = (function (){var statearr_36206 = state_36195;(statearr_36206[9] = inst_36188);
return statearr_36206;
})();var statearr_36207_36225 = state_36195__$1;(statearr_36207_36225[2] = null);
(statearr_36207_36225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36196 === 9))
{var state_36195__$1 = state_36195;var statearr_36208_36226 = state_36195__$1;(statearr_36208_36226[2] = tc);
(statearr_36208_36226[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36196 === 10))
{var state_36195__$1 = state_36195;var statearr_36209_36227 = state_36195__$1;(statearr_36209_36227[2] = fc);
(statearr_36209_36227[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36196 === 11))
{var inst_36176 = (state_36195[7]);var inst_36186 = (state_36195[2]);var state_36195__$1 = state_36195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36195__$1,8,inst_36186,inst_36176);
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
var state_machine__5507__auto____0 = (function (){var statearr_36213 = [null,null,null,null,null,null,null,null,null,null];(statearr_36213[0] = state_machine__5507__auto__);
(statearr_36213[1] = 1);
return statearr_36213;
});
var state_machine__5507__auto____1 = (function (state_36195){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36214){if((e36214 instanceof Object))
{var ex__5510__auto__ = e36214;var statearr_36215_36228 = state_36195;(statearr_36215_36228[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36229 = state_36195;
state_36195 = G__36229;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36195){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36216 = f__5522__auto__.call(null);(statearr_36216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36217);
return statearr_36216;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36276){var state_val_36277 = (state_36276[1]);if((state_val_36277 === 7))
{var inst_36272 = (state_36276[2]);var state_36276__$1 = state_36276;var statearr_36278_36294 = state_36276__$1;(statearr_36278_36294[2] = inst_36272);
(statearr_36278_36294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36277 === 6))
{var inst_36265 = (state_36276[7]);var inst_36262 = (state_36276[8]);var inst_36269 = f.call(null,inst_36262,inst_36265);var inst_36262__$1 = inst_36269;var state_36276__$1 = (function (){var statearr_36279 = state_36276;(statearr_36279[8] = inst_36262__$1);
return statearr_36279;
})();var statearr_36280_36295 = state_36276__$1;(statearr_36280_36295[2] = null);
(statearr_36280_36295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36277 === 5))
{var inst_36262 = (state_36276[8]);var state_36276__$1 = state_36276;var statearr_36281_36296 = state_36276__$1;(statearr_36281_36296[2] = inst_36262);
(statearr_36281_36296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36277 === 4))
{var inst_36265 = (state_36276[7]);var inst_36265__$1 = (state_36276[2]);var inst_36266 = (inst_36265__$1 == null);var state_36276__$1 = (function (){var statearr_36282 = state_36276;(statearr_36282[7] = inst_36265__$1);
return statearr_36282;
})();if(cljs.core.truth_(inst_36266))
{var statearr_36283_36297 = state_36276__$1;(statearr_36283_36297[1] = 5);
} else
{var statearr_36284_36298 = state_36276__$1;(statearr_36284_36298[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36277 === 3))
{var inst_36274 = (state_36276[2]);var state_36276__$1 = state_36276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36276__$1,inst_36274);
} else
{if((state_val_36277 === 2))
{var state_36276__$1 = state_36276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36276__$1,4,ch);
} else
{if((state_val_36277 === 1))
{var inst_36262 = init;var state_36276__$1 = (function (){var statearr_36285 = state_36276;(statearr_36285[8] = inst_36262);
return statearr_36285;
})();var statearr_36286_36299 = state_36276__$1;(statearr_36286_36299[2] = null);
(statearr_36286_36299[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36290 = [null,null,null,null,null,null,null,null,null];(statearr_36290[0] = state_machine__5507__auto__);
(statearr_36290[1] = 1);
return statearr_36290;
});
var state_machine__5507__auto____1 = (function (state_36276){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36276);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36291){if((e36291 instanceof Object))
{var ex__5510__auto__ = e36291;var statearr_36292_36300 = state_36276;(statearr_36292_36300[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36276);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36301 = state_36276;
state_36276 = G__36301;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36276){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36293 = f__5522__auto__.call(null);(statearr_36293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_36293;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36363){var state_val_36364 = (state_36363[1]);if((state_val_36364 === 1))
{var inst_36343 = cljs.core.seq.call(null,coll);var inst_36344 = inst_36343;var state_36363__$1 = (function (){var statearr_36365 = state_36363;(statearr_36365[7] = inst_36344);
return statearr_36365;
})();var statearr_36366_36384 = state_36363__$1;(statearr_36366_36384[2] = null);
(statearr_36366_36384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36364 === 2))
{var inst_36344 = (state_36363[7]);var state_36363__$1 = state_36363;if(cljs.core.truth_(inst_36344))
{var statearr_36367_36385 = state_36363__$1;(statearr_36367_36385[1] = 4);
} else
{var statearr_36368_36386 = state_36363__$1;(statearr_36368_36386[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36364 === 3))
{var inst_36361 = (state_36363[2]);var state_36363__$1 = state_36363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36363__$1,inst_36361);
} else
{if((state_val_36364 === 4))
{var inst_36344 = (state_36363[7]);var inst_36347 = cljs.core.first.call(null,inst_36344);var state_36363__$1 = state_36363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36363__$1,7,ch,inst_36347);
} else
{if((state_val_36364 === 5))
{var state_36363__$1 = state_36363;if(cljs.core.truth_(close_QMARK_))
{var statearr_36369_36387 = state_36363__$1;(statearr_36369_36387[1] = 8);
} else
{var statearr_36370_36388 = state_36363__$1;(statearr_36370_36388[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36364 === 6))
{var inst_36359 = (state_36363[2]);var state_36363__$1 = state_36363;var statearr_36371_36389 = state_36363__$1;(statearr_36371_36389[2] = inst_36359);
(statearr_36371_36389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36364 === 7))
{var inst_36344 = (state_36363[7]);var inst_36349 = (state_36363[2]);var inst_36350 = cljs.core.next.call(null,inst_36344);var inst_36344__$1 = inst_36350;var state_36363__$1 = (function (){var statearr_36372 = state_36363;(statearr_36372[7] = inst_36344__$1);
(statearr_36372[8] = inst_36349);
return statearr_36372;
})();var statearr_36373_36390 = state_36363__$1;(statearr_36373_36390[2] = null);
(statearr_36373_36390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36364 === 8))
{var inst_36354 = cljs.core.async.close_BANG_.call(null,ch);var state_36363__$1 = state_36363;var statearr_36374_36391 = state_36363__$1;(statearr_36374_36391[2] = inst_36354);
(statearr_36374_36391[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36364 === 9))
{var state_36363__$1 = state_36363;var statearr_36375_36392 = state_36363__$1;(statearr_36375_36392[2] = null);
(statearr_36375_36392[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36364 === 10))
{var inst_36357 = (state_36363[2]);var state_36363__$1 = state_36363;var statearr_36376_36393 = state_36363__$1;(statearr_36376_36393[2] = inst_36357);
(statearr_36376_36393[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_36380 = [null,null,null,null,null,null,null,null,null];(statearr_36380[0] = state_machine__5507__auto__);
(statearr_36380[1] = 1);
return statearr_36380;
});
var state_machine__5507__auto____1 = (function (state_36363){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36363);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36381){if((e36381 instanceof Object))
{var ex__5510__auto__ = e36381;var statearr_36382_36394 = state_36363;(statearr_36382_36394[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36395 = state_36363;
state_36363 = G__36395;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36363){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36383 = f__5522__auto__.call(null);(statearr_36383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_36383;
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
cljs.core.async.Mux = (function (){var obj36397 = {};return obj36397;
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
cljs.core.async.Mult = (function (){var obj36399 = {};return obj36399;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36623 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36623 = (function (cs,ch,mult,meta36624){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36624 = meta36624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36623.cljs$lang$type = true;
cljs.core.async.t36623.cljs$lang$ctorStr = "cljs.core.async/t36623";
cljs.core.async.t36623.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36623");
});})(cs))
;
cljs.core.async.t36623.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36623.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36623.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36623.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36623.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36625){var self__ = this;
var _36625__$1 = this;return self__.meta36624;
});})(cs))
;
cljs.core.async.t36623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36625,meta36624__$1){var self__ = this;
var _36625__$1 = this;return (new cljs.core.async.t36623(self__.cs,self__.ch,self__.mult,meta36624__$1));
});})(cs))
;
cljs.core.async.__GT_t36623 = ((function (cs){
return (function __GT_t36623(cs__$1,ch__$1,mult__$1,meta36624){return (new cljs.core.async.t36623(cs__$1,ch__$1,mult__$1,meta36624));
});})(cs))
;
}
return (new cljs.core.async.t36623(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___36846 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36760){var state_val_36761 = (state_36760[1]);if((state_val_36761 === 32))
{var inst_36704 = (state_36760[7]);var inst_36628 = (state_36760[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36760,31,Object,null,30);var inst_36711 = cljs.core.async.put_BANG_.call(null,inst_36704,inst_36628,done);var state_36760__$1 = state_36760;var statearr_36762_36847 = state_36760__$1;(statearr_36762_36847[2] = inst_36711);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36760__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 1))
{var state_36760__$1 = state_36760;var statearr_36763_36848 = state_36760__$1;(statearr_36763_36848[2] = null);
(statearr_36763_36848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 33))
{var inst_36717 = (state_36760[9]);var inst_36719 = cljs.core.chunked_seq_QMARK_.call(null,inst_36717);var state_36760__$1 = state_36760;if(inst_36719)
{var statearr_36764_36849 = state_36760__$1;(statearr_36764_36849[1] = 36);
} else
{var statearr_36765_36850 = state_36760__$1;(statearr_36765_36850[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 2))
{var state_36760__$1 = state_36760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,4,ch);
} else
{if((state_val_36761 === 34))
{var state_36760__$1 = state_36760;var statearr_36766_36851 = state_36760__$1;(statearr_36766_36851[2] = null);
(statearr_36766_36851[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 3))
{var inst_36758 = (state_36760[2]);var state_36760__$1 = state_36760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36760__$1,inst_36758);
} else
{if((state_val_36761 === 35))
{var inst_36742 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36767_36852 = state_36760__$1;(statearr_36767_36852[2] = inst_36742);
(statearr_36767_36852[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 4))
{var inst_36628 = (state_36760[8]);var inst_36628__$1 = (state_36760[2]);var inst_36629 = (inst_36628__$1 == null);var state_36760__$1 = (function (){var statearr_36768 = state_36760;(statearr_36768[8] = inst_36628__$1);
return statearr_36768;
})();if(cljs.core.truth_(inst_36629))
{var statearr_36769_36853 = state_36760__$1;(statearr_36769_36853[1] = 5);
} else
{var statearr_36770_36854 = state_36760__$1;(statearr_36770_36854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 36))
{var inst_36717 = (state_36760[9]);var inst_36721 = cljs.core.chunk_first.call(null,inst_36717);var inst_36722 = cljs.core.chunk_rest.call(null,inst_36717);var inst_36723 = cljs.core.count.call(null,inst_36721);var inst_36696 = inst_36722;var inst_36697 = inst_36721;var inst_36698 = inst_36723;var inst_36699 = 0;var state_36760__$1 = (function (){var statearr_36771 = state_36760;(statearr_36771[10] = inst_36699);
(statearr_36771[11] = inst_36698);
(statearr_36771[12] = inst_36697);
(statearr_36771[13] = inst_36696);
return statearr_36771;
})();var statearr_36772_36855 = state_36760__$1;(statearr_36772_36855[2] = null);
(statearr_36772_36855[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 5))
{var inst_36635 = cljs.core.deref.call(null,cs);var inst_36636 = cljs.core.seq.call(null,inst_36635);var inst_36637 = inst_36636;var inst_36638 = null;var inst_36639 = 0;var inst_36640 = 0;var state_36760__$1 = (function (){var statearr_36773 = state_36760;(statearr_36773[14] = inst_36639);
(statearr_36773[15] = inst_36640);
(statearr_36773[16] = inst_36637);
(statearr_36773[17] = inst_36638);
return statearr_36773;
})();var statearr_36774_36856 = state_36760__$1;(statearr_36774_36856[2] = null);
(statearr_36774_36856[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 37))
{var inst_36717 = (state_36760[9]);var inst_36726 = cljs.core.first.call(null,inst_36717);var state_36760__$1 = (function (){var statearr_36775 = state_36760;(statearr_36775[18] = inst_36726);
return statearr_36775;
})();var statearr_36776_36857 = state_36760__$1;(statearr_36776_36857[2] = null);
(statearr_36776_36857[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 6))
{var inst_36688 = (state_36760[19]);var inst_36687 = cljs.core.deref.call(null,cs);var inst_36688__$1 = cljs.core.keys.call(null,inst_36687);var inst_36689 = cljs.core.count.call(null,inst_36688__$1);var inst_36690 = cljs.core.reset_BANG_.call(null,dctr,inst_36689);var inst_36695 = cljs.core.seq.call(null,inst_36688__$1);var inst_36696 = inst_36695;var inst_36697 = null;var inst_36698 = 0;var inst_36699 = 0;var state_36760__$1 = (function (){var statearr_36777 = state_36760;(statearr_36777[10] = inst_36699);
(statearr_36777[11] = inst_36698);
(statearr_36777[12] = inst_36697);
(statearr_36777[13] = inst_36696);
(statearr_36777[20] = inst_36690);
(statearr_36777[19] = inst_36688__$1);
return statearr_36777;
})();var statearr_36778_36858 = state_36760__$1;(statearr_36778_36858[2] = null);
(statearr_36778_36858[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 38))
{var inst_36739 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36779_36859 = state_36760__$1;(statearr_36779_36859[2] = inst_36739);
(statearr_36779_36859[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 7))
{var inst_36756 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36780_36860 = state_36760__$1;(statearr_36780_36860[2] = inst_36756);
(statearr_36780_36860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 39))
{var inst_36717 = (state_36760[9]);var inst_36735 = (state_36760[2]);var inst_36736 = cljs.core.next.call(null,inst_36717);var inst_36696 = inst_36736;var inst_36697 = null;var inst_36698 = 0;var inst_36699 = 0;var state_36760__$1 = (function (){var statearr_36781 = state_36760;(statearr_36781[21] = inst_36735);
(statearr_36781[10] = inst_36699);
(statearr_36781[11] = inst_36698);
(statearr_36781[12] = inst_36697);
(statearr_36781[13] = inst_36696);
return statearr_36781;
})();var statearr_36782_36861 = state_36760__$1;(statearr_36782_36861[2] = null);
(statearr_36782_36861[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 8))
{var inst_36639 = (state_36760[14]);var inst_36640 = (state_36760[15]);var inst_36642 = (inst_36640 < inst_36639);var inst_36643 = inst_36642;var state_36760__$1 = state_36760;if(cljs.core.truth_(inst_36643))
{var statearr_36783_36862 = state_36760__$1;(statearr_36783_36862[1] = 10);
} else
{var statearr_36784_36863 = state_36760__$1;(statearr_36784_36863[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 40))
{var inst_36726 = (state_36760[18]);var inst_36727 = (state_36760[2]);var inst_36728 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_36729 = cljs.core.async.untap_STAR_.call(null,m,inst_36726);var state_36760__$1 = (function (){var statearr_36785 = state_36760;(statearr_36785[22] = inst_36728);
(statearr_36785[23] = inst_36727);
return statearr_36785;
})();var statearr_36786_36864 = state_36760__$1;(statearr_36786_36864[2] = inst_36729);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36760__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 9))
{var inst_36685 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36787_36865 = state_36760__$1;(statearr_36787_36865[2] = inst_36685);
(statearr_36787_36865[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 41))
{var inst_36726 = (state_36760[18]);var inst_36628 = (state_36760[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36760,40,Object,null,39);var inst_36733 = cljs.core.async.put_BANG_.call(null,inst_36726,inst_36628,done);var state_36760__$1 = state_36760;var statearr_36788_36866 = state_36760__$1;(statearr_36788_36866[2] = inst_36733);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36760__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 10))
{var inst_36640 = (state_36760[15]);var inst_36638 = (state_36760[17]);var inst_36646 = cljs.core._nth.call(null,inst_36638,inst_36640);var inst_36647 = cljs.core.nth.call(null,inst_36646,0,null);var inst_36648 = cljs.core.nth.call(null,inst_36646,1,null);var state_36760__$1 = (function (){var statearr_36789 = state_36760;(statearr_36789[24] = inst_36647);
return statearr_36789;
})();if(cljs.core.truth_(inst_36648))
{var statearr_36790_36867 = state_36760__$1;(statearr_36790_36867[1] = 13);
} else
{var statearr_36791_36868 = state_36760__$1;(statearr_36791_36868[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 42))
{var state_36760__$1 = state_36760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,45,dchan);
} else
{if((state_val_36761 === 11))
{var inst_36657 = (state_36760[25]);var inst_36637 = (state_36760[16]);var inst_36657__$1 = cljs.core.seq.call(null,inst_36637);var state_36760__$1 = (function (){var statearr_36792 = state_36760;(statearr_36792[25] = inst_36657__$1);
return statearr_36792;
})();if(inst_36657__$1)
{var statearr_36793_36869 = state_36760__$1;(statearr_36793_36869[1] = 16);
} else
{var statearr_36794_36870 = state_36760__$1;(statearr_36794_36870[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 43))
{var state_36760__$1 = state_36760;var statearr_36795_36871 = state_36760__$1;(statearr_36795_36871[2] = null);
(statearr_36795_36871[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 12))
{var inst_36683 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36796_36872 = state_36760__$1;(statearr_36796_36872[2] = inst_36683);
(statearr_36796_36872[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 44))
{var inst_36753 = (state_36760[2]);var state_36760__$1 = (function (){var statearr_36797 = state_36760;(statearr_36797[26] = inst_36753);
return statearr_36797;
})();var statearr_36798_36873 = state_36760__$1;(statearr_36798_36873[2] = null);
(statearr_36798_36873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 13))
{var inst_36647 = (state_36760[24]);var inst_36650 = cljs.core.async.close_BANG_.call(null,inst_36647);var state_36760__$1 = state_36760;var statearr_36799_36874 = state_36760__$1;(statearr_36799_36874[2] = inst_36650);
(statearr_36799_36874[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 45))
{var inst_36750 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36803_36875 = state_36760__$1;(statearr_36803_36875[2] = inst_36750);
(statearr_36803_36875[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 14))
{var state_36760__$1 = state_36760;var statearr_36804_36876 = state_36760__$1;(statearr_36804_36876[2] = null);
(statearr_36804_36876[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 15))
{var inst_36639 = (state_36760[14]);var inst_36640 = (state_36760[15]);var inst_36637 = (state_36760[16]);var inst_36638 = (state_36760[17]);var inst_36653 = (state_36760[2]);var inst_36654 = (inst_36640 + 1);var tmp36800 = inst_36639;var tmp36801 = inst_36637;var tmp36802 = inst_36638;var inst_36637__$1 = tmp36801;var inst_36638__$1 = tmp36802;var inst_36639__$1 = tmp36800;var inst_36640__$1 = inst_36654;var state_36760__$1 = (function (){var statearr_36805 = state_36760;(statearr_36805[14] = inst_36639__$1);
(statearr_36805[15] = inst_36640__$1);
(statearr_36805[27] = inst_36653);
(statearr_36805[16] = inst_36637__$1);
(statearr_36805[17] = inst_36638__$1);
return statearr_36805;
})();var statearr_36806_36877 = state_36760__$1;(statearr_36806_36877[2] = null);
(statearr_36806_36877[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 16))
{var inst_36657 = (state_36760[25]);var inst_36659 = cljs.core.chunked_seq_QMARK_.call(null,inst_36657);var state_36760__$1 = state_36760;if(inst_36659)
{var statearr_36807_36878 = state_36760__$1;(statearr_36807_36878[1] = 19);
} else
{var statearr_36808_36879 = state_36760__$1;(statearr_36808_36879[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 17))
{var state_36760__$1 = state_36760;var statearr_36809_36880 = state_36760__$1;(statearr_36809_36880[2] = null);
(statearr_36809_36880[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 18))
{var inst_36681 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36810_36881 = state_36760__$1;(statearr_36810_36881[2] = inst_36681);
(statearr_36810_36881[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 19))
{var inst_36657 = (state_36760[25]);var inst_36661 = cljs.core.chunk_first.call(null,inst_36657);var inst_36662 = cljs.core.chunk_rest.call(null,inst_36657);var inst_36663 = cljs.core.count.call(null,inst_36661);var inst_36637 = inst_36662;var inst_36638 = inst_36661;var inst_36639 = inst_36663;var inst_36640 = 0;var state_36760__$1 = (function (){var statearr_36811 = state_36760;(statearr_36811[14] = inst_36639);
(statearr_36811[15] = inst_36640);
(statearr_36811[16] = inst_36637);
(statearr_36811[17] = inst_36638);
return statearr_36811;
})();var statearr_36812_36882 = state_36760__$1;(statearr_36812_36882[2] = null);
(statearr_36812_36882[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 20))
{var inst_36657 = (state_36760[25]);var inst_36667 = cljs.core.first.call(null,inst_36657);var inst_36668 = cljs.core.nth.call(null,inst_36667,0,null);var inst_36669 = cljs.core.nth.call(null,inst_36667,1,null);var state_36760__$1 = (function (){var statearr_36813 = state_36760;(statearr_36813[28] = inst_36668);
return statearr_36813;
})();if(cljs.core.truth_(inst_36669))
{var statearr_36814_36883 = state_36760__$1;(statearr_36814_36883[1] = 22);
} else
{var statearr_36815_36884 = state_36760__$1;(statearr_36815_36884[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 21))
{var inst_36678 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36816_36885 = state_36760__$1;(statearr_36816_36885[2] = inst_36678);
(statearr_36816_36885[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 22))
{var inst_36668 = (state_36760[28]);var inst_36671 = cljs.core.async.close_BANG_.call(null,inst_36668);var state_36760__$1 = state_36760;var statearr_36817_36886 = state_36760__$1;(statearr_36817_36886[2] = inst_36671);
(statearr_36817_36886[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 23))
{var state_36760__$1 = state_36760;var statearr_36818_36887 = state_36760__$1;(statearr_36818_36887[2] = null);
(statearr_36818_36887[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 24))
{var inst_36657 = (state_36760[25]);var inst_36674 = (state_36760[2]);var inst_36675 = cljs.core.next.call(null,inst_36657);var inst_36637 = inst_36675;var inst_36638 = null;var inst_36639 = 0;var inst_36640 = 0;var state_36760__$1 = (function (){var statearr_36819 = state_36760;(statearr_36819[14] = inst_36639);
(statearr_36819[29] = inst_36674);
(statearr_36819[15] = inst_36640);
(statearr_36819[16] = inst_36637);
(statearr_36819[17] = inst_36638);
return statearr_36819;
})();var statearr_36820_36888 = state_36760__$1;(statearr_36820_36888[2] = null);
(statearr_36820_36888[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 25))
{var inst_36699 = (state_36760[10]);var inst_36698 = (state_36760[11]);var inst_36701 = (inst_36699 < inst_36698);var inst_36702 = inst_36701;var state_36760__$1 = state_36760;if(cljs.core.truth_(inst_36702))
{var statearr_36821_36889 = state_36760__$1;(statearr_36821_36889[1] = 27);
} else
{var statearr_36822_36890 = state_36760__$1;(statearr_36822_36890[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 26))
{var inst_36688 = (state_36760[19]);var inst_36746 = (state_36760[2]);var inst_36747 = cljs.core.seq.call(null,inst_36688);var state_36760__$1 = (function (){var statearr_36823 = state_36760;(statearr_36823[30] = inst_36746);
return statearr_36823;
})();if(inst_36747)
{var statearr_36824_36891 = state_36760__$1;(statearr_36824_36891[1] = 42);
} else
{var statearr_36825_36892 = state_36760__$1;(statearr_36825_36892[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 27))
{var inst_36699 = (state_36760[10]);var inst_36697 = (state_36760[12]);var inst_36704 = cljs.core._nth.call(null,inst_36697,inst_36699);var state_36760__$1 = (function (){var statearr_36826 = state_36760;(statearr_36826[7] = inst_36704);
return statearr_36826;
})();var statearr_36827_36893 = state_36760__$1;(statearr_36827_36893[2] = null);
(statearr_36827_36893[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 28))
{var inst_36717 = (state_36760[9]);var inst_36696 = (state_36760[13]);var inst_36717__$1 = cljs.core.seq.call(null,inst_36696);var state_36760__$1 = (function (){var statearr_36831 = state_36760;(statearr_36831[9] = inst_36717__$1);
return statearr_36831;
})();if(inst_36717__$1)
{var statearr_36832_36894 = state_36760__$1;(statearr_36832_36894[1] = 33);
} else
{var statearr_36833_36895 = state_36760__$1;(statearr_36833_36895[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 29))
{var inst_36744 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36834_36896 = state_36760__$1;(statearr_36834_36896[2] = inst_36744);
(statearr_36834_36896[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 30))
{var inst_36699 = (state_36760[10]);var inst_36698 = (state_36760[11]);var inst_36697 = (state_36760[12]);var inst_36696 = (state_36760[13]);var inst_36713 = (state_36760[2]);var inst_36714 = (inst_36699 + 1);var tmp36828 = inst_36698;var tmp36829 = inst_36697;var tmp36830 = inst_36696;var inst_36696__$1 = tmp36830;var inst_36697__$1 = tmp36829;var inst_36698__$1 = tmp36828;var inst_36699__$1 = inst_36714;var state_36760__$1 = (function (){var statearr_36835 = state_36760;(statearr_36835[10] = inst_36699__$1);
(statearr_36835[11] = inst_36698__$1);
(statearr_36835[12] = inst_36697__$1);
(statearr_36835[13] = inst_36696__$1);
(statearr_36835[31] = inst_36713);
return statearr_36835;
})();var statearr_36836_36897 = state_36760__$1;(statearr_36836_36897[2] = null);
(statearr_36836_36897[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36761 === 31))
{var inst_36704 = (state_36760[7]);var inst_36705 = (state_36760[2]);var inst_36706 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_36707 = cljs.core.async.untap_STAR_.call(null,m,inst_36704);var state_36760__$1 = (function (){var statearr_36837 = state_36760;(statearr_36837[32] = inst_36706);
(statearr_36837[33] = inst_36705);
return statearr_36837;
})();var statearr_36838_36898 = state_36760__$1;(statearr_36838_36898[2] = inst_36707);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36760__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36842[0] = state_machine__5507__auto__);
(statearr_36842[1] = 1);
return statearr_36842;
});
var state_machine__5507__auto____1 = (function (state_36760){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36760);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36843){if((e36843 instanceof Object))
{var ex__5510__auto__ = e36843;var statearr_36844_36899 = state_36760;(statearr_36844_36899[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36760);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36900 = state_36760;
state_36760 = G__36900;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36760){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36845 = f__5522__auto__.call(null);(statearr_36845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36846);
return statearr_36845;
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
cljs.core.async.Mix = (function (){var obj36902 = {};return obj36902;
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
;var m = (function (){if(typeof cljs.core.async.t37012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37012 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta37013){
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
this.meta37013 = meta37013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37012.cljs$lang$type = true;
cljs.core.async.t37012.cljs$lang$ctorStr = "cljs.core.async/t37012";
cljs.core.async.t37012.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t37012");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37012.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37012.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37014){var self__ = this;
var _37014__$1 = this;return self__.meta37013;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37014,meta37013__$1){var self__ = this;
var _37014__$1 = this;return (new cljs.core.async.t37012(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta37013__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37012 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37012(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37013){return (new cljs.core.async.t37012(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37013));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37012(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___37121 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37079){var state_val_37080 = (state_37079[1]);if((state_val_37080 === 1))
{var inst_37018 = (state_37079[7]);var inst_37018__$1 = calc_state.call(null);var inst_37019 = cljs.core.seq_QMARK_.call(null,inst_37018__$1);var state_37079__$1 = (function (){var statearr_37081 = state_37079;(statearr_37081[7] = inst_37018__$1);
return statearr_37081;
})();if(inst_37019)
{var statearr_37082_37122 = state_37079__$1;(statearr_37082_37122[1] = 2);
} else
{var statearr_37083_37123 = state_37079__$1;(statearr_37083_37123[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 2))
{var inst_37018 = (state_37079[7]);var inst_37021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37018);var state_37079__$1 = state_37079;var statearr_37084_37124 = state_37079__$1;(statearr_37084_37124[2] = inst_37021);
(statearr_37084_37124[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 3))
{var inst_37018 = (state_37079[7]);var state_37079__$1 = state_37079;var statearr_37085_37125 = state_37079__$1;(statearr_37085_37125[2] = inst_37018);
(statearr_37085_37125[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 4))
{var inst_37018 = (state_37079[7]);var inst_37024 = (state_37079[2]);var inst_37025 = cljs.core.get.call(null,inst_37024,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_37026 = cljs.core.get.call(null,inst_37024,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_37027 = cljs.core.get.call(null,inst_37024,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_37028 = inst_37018;var state_37079__$1 = (function (){var statearr_37086 = state_37079;(statearr_37086[8] = inst_37028);
(statearr_37086[9] = inst_37027);
(statearr_37086[10] = inst_37025);
(statearr_37086[11] = inst_37026);
return statearr_37086;
})();var statearr_37087_37126 = state_37079__$1;(statearr_37087_37126[2] = null);
(statearr_37087_37126[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 5))
{var inst_37028 = (state_37079[8]);var inst_37031 = cljs.core.seq_QMARK_.call(null,inst_37028);var state_37079__$1 = state_37079;if(inst_37031)
{var statearr_37088_37127 = state_37079__$1;(statearr_37088_37127[1] = 7);
} else
{var statearr_37089_37128 = state_37079__$1;(statearr_37089_37128[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 6))
{var inst_37077 = (state_37079[2]);var state_37079__$1 = state_37079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37079__$1,inst_37077);
} else
{if((state_val_37080 === 7))
{var inst_37028 = (state_37079[8]);var inst_37033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37028);var state_37079__$1 = state_37079;var statearr_37090_37129 = state_37079__$1;(statearr_37090_37129[2] = inst_37033);
(statearr_37090_37129[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 8))
{var inst_37028 = (state_37079[8]);var state_37079__$1 = state_37079;var statearr_37091_37130 = state_37079__$1;(statearr_37091_37130[2] = inst_37028);
(statearr_37091_37130[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 9))
{var inst_37036 = (state_37079[12]);var inst_37036__$1 = (state_37079[2]);var inst_37037 = cljs.core.get.call(null,inst_37036__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_37038 = cljs.core.get.call(null,inst_37036__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_37039 = cljs.core.get.call(null,inst_37036__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_37079__$1 = (function (){var statearr_37092 = state_37079;(statearr_37092[12] = inst_37036__$1);
(statearr_37092[13] = inst_37039);
(statearr_37092[14] = inst_37038);
return statearr_37092;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_37079__$1,10,inst_37037);
} else
{if((state_val_37080 === 10))
{var inst_37044 = (state_37079[15]);var inst_37043 = (state_37079[16]);var inst_37042 = (state_37079[2]);var inst_37043__$1 = cljs.core.nth.call(null,inst_37042,0,null);var inst_37044__$1 = cljs.core.nth.call(null,inst_37042,1,null);var inst_37045 = (inst_37043__$1 == null);var inst_37046 = cljs.core._EQ_.call(null,inst_37044__$1,change);var inst_37047 = (inst_37045) || (inst_37046);var state_37079__$1 = (function (){var statearr_37093 = state_37079;(statearr_37093[15] = inst_37044__$1);
(statearr_37093[16] = inst_37043__$1);
return statearr_37093;
})();if(cljs.core.truth_(inst_37047))
{var statearr_37094_37131 = state_37079__$1;(statearr_37094_37131[1] = 11);
} else
{var statearr_37095_37132 = state_37079__$1;(statearr_37095_37132[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 11))
{var inst_37043 = (state_37079[16]);var inst_37049 = (inst_37043 == null);var state_37079__$1 = state_37079;if(cljs.core.truth_(inst_37049))
{var statearr_37096_37133 = state_37079__$1;(statearr_37096_37133[1] = 14);
} else
{var statearr_37097_37134 = state_37079__$1;(statearr_37097_37134[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 12))
{var inst_37044 = (state_37079[15]);var inst_37039 = (state_37079[13]);var inst_37058 = (state_37079[17]);var inst_37058__$1 = inst_37039.call(null,inst_37044);var state_37079__$1 = (function (){var statearr_37098 = state_37079;(statearr_37098[17] = inst_37058__$1);
return statearr_37098;
})();if(cljs.core.truth_(inst_37058__$1))
{var statearr_37099_37135 = state_37079__$1;(statearr_37099_37135[1] = 17);
} else
{var statearr_37100_37136 = state_37079__$1;(statearr_37100_37136[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 13))
{var inst_37075 = (state_37079[2]);var state_37079__$1 = state_37079;var statearr_37101_37137 = state_37079__$1;(statearr_37101_37137[2] = inst_37075);
(statearr_37101_37137[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 14))
{var inst_37044 = (state_37079[15]);var inst_37051 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37044);var state_37079__$1 = state_37079;var statearr_37102_37138 = state_37079__$1;(statearr_37102_37138[2] = inst_37051);
(statearr_37102_37138[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 15))
{var state_37079__$1 = state_37079;var statearr_37103_37139 = state_37079__$1;(statearr_37103_37139[2] = null);
(statearr_37103_37139[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 16))
{var inst_37054 = (state_37079[2]);var inst_37055 = calc_state.call(null);var inst_37028 = inst_37055;var state_37079__$1 = (function (){var statearr_37104 = state_37079;(statearr_37104[8] = inst_37028);
(statearr_37104[18] = inst_37054);
return statearr_37104;
})();var statearr_37105_37140 = state_37079__$1;(statearr_37105_37140[2] = null);
(statearr_37105_37140[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 17))
{var inst_37058 = (state_37079[17]);var state_37079__$1 = state_37079;var statearr_37106_37141 = state_37079__$1;(statearr_37106_37141[2] = inst_37058);
(statearr_37106_37141[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 18))
{var inst_37044 = (state_37079[15]);var inst_37039 = (state_37079[13]);var inst_37038 = (state_37079[14]);var inst_37061 = cljs.core.empty_QMARK_.call(null,inst_37039);var inst_37062 = inst_37038.call(null,inst_37044);var inst_37063 = cljs.core.not.call(null,inst_37062);var inst_37064 = (inst_37061) && (inst_37063);var state_37079__$1 = state_37079;var statearr_37107_37142 = state_37079__$1;(statearr_37107_37142[2] = inst_37064);
(statearr_37107_37142[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 19))
{var inst_37066 = (state_37079[2]);var state_37079__$1 = state_37079;if(cljs.core.truth_(inst_37066))
{var statearr_37108_37143 = state_37079__$1;(statearr_37108_37143[1] = 20);
} else
{var statearr_37109_37144 = state_37079__$1;(statearr_37109_37144[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 20))
{var inst_37043 = (state_37079[16]);var state_37079__$1 = state_37079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37079__$1,23,out,inst_37043);
} else
{if((state_val_37080 === 21))
{var state_37079__$1 = state_37079;var statearr_37110_37145 = state_37079__$1;(statearr_37110_37145[2] = null);
(statearr_37110_37145[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 22))
{var inst_37036 = (state_37079[12]);var inst_37072 = (state_37079[2]);var inst_37028 = inst_37036;var state_37079__$1 = (function (){var statearr_37111 = state_37079;(statearr_37111[8] = inst_37028);
(statearr_37111[19] = inst_37072);
return statearr_37111;
})();var statearr_37112_37146 = state_37079__$1;(statearr_37112_37146[2] = null);
(statearr_37112_37146[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37080 === 23))
{var inst_37069 = (state_37079[2]);var state_37079__$1 = state_37079;var statearr_37113_37147 = state_37079__$1;(statearr_37113_37147[2] = inst_37069);
(statearr_37113_37147[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_37117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37117[0] = state_machine__5507__auto__);
(statearr_37117[1] = 1);
return statearr_37117;
});
var state_machine__5507__auto____1 = (function (state_37079){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37118){if((e37118 instanceof Object))
{var ex__5510__auto__ = e37118;var statearr_37119_37148 = state_37079;(statearr_37119_37148[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37149 = state_37079;
state_37079 = G__37149;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37079){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37120 = f__5522__auto__.call(null);(statearr_37120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37121);
return statearr_37120;
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
cljs.core.async.Pub = (function (){var obj37151 = {};return obj37151;
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
return (function (p1__37152_SHARP_){if(cljs.core.truth_(p1__37152_SHARP_.call(null,topic)))
{return p1__37152_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__37152_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37277 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37278){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37278 = meta37278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37277.cljs$lang$type = true;
cljs.core.async.t37277.cljs$lang$ctorStr = "cljs.core.async/t37277";
cljs.core.async.t37277.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t37277");
});})(mults,ensure_mult))
;
cljs.core.async.t37277.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37277.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37277.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37277.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37277.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37277.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37279){var self__ = this;
var _37279__$1 = this;return self__.meta37278;
});})(mults,ensure_mult))
;
cljs.core.async.t37277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37279,meta37278__$1){var self__ = this;
var _37279__$1 = this;return (new cljs.core.async.t37277(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37278__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37277 = ((function (mults,ensure_mult){
return (function __GT_t37277(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37278){return (new cljs.core.async.t37277(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37278));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37277(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___37401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37353){var state_val_37354 = (state_37353[1]);if((state_val_37354 === 1))
{var state_37353__$1 = state_37353;var statearr_37355_37402 = state_37353__$1;(statearr_37355_37402[2] = null);
(statearr_37355_37402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 2))
{var state_37353__$1 = state_37353;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37353__$1,4,ch);
} else
{if((state_val_37354 === 3))
{var inst_37351 = (state_37353[2]);var state_37353__$1 = state_37353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37353__$1,inst_37351);
} else
{if((state_val_37354 === 4))
{var inst_37282 = (state_37353[7]);var inst_37282__$1 = (state_37353[2]);var inst_37283 = (inst_37282__$1 == null);var state_37353__$1 = (function (){var statearr_37356 = state_37353;(statearr_37356[7] = inst_37282__$1);
return statearr_37356;
})();if(cljs.core.truth_(inst_37283))
{var statearr_37357_37403 = state_37353__$1;(statearr_37357_37403[1] = 5);
} else
{var statearr_37358_37404 = state_37353__$1;(statearr_37358_37404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 5))
{var inst_37289 = cljs.core.deref.call(null,mults);var inst_37290 = cljs.core.vals.call(null,inst_37289);var inst_37291 = cljs.core.seq.call(null,inst_37290);var inst_37292 = inst_37291;var inst_37293 = null;var inst_37294 = 0;var inst_37295 = 0;var state_37353__$1 = (function (){var statearr_37359 = state_37353;(statearr_37359[8] = inst_37292);
(statearr_37359[9] = inst_37293);
(statearr_37359[10] = inst_37295);
(statearr_37359[11] = inst_37294);
return statearr_37359;
})();var statearr_37360_37405 = state_37353__$1;(statearr_37360_37405[2] = null);
(statearr_37360_37405[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 6))
{var inst_37332 = (state_37353[12]);var inst_37282 = (state_37353[7]);var inst_37330 = (state_37353[13]);var inst_37330__$1 = topic_fn.call(null,inst_37282);var inst_37331 = cljs.core.deref.call(null,mults);var inst_37332__$1 = cljs.core.get.call(null,inst_37331,inst_37330__$1);var state_37353__$1 = (function (){var statearr_37361 = state_37353;(statearr_37361[12] = inst_37332__$1);
(statearr_37361[13] = inst_37330__$1);
return statearr_37361;
})();if(cljs.core.truth_(inst_37332__$1))
{var statearr_37362_37406 = state_37353__$1;(statearr_37362_37406[1] = 19);
} else
{var statearr_37363_37407 = state_37353__$1;(statearr_37363_37407[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 7))
{var inst_37349 = (state_37353[2]);var state_37353__$1 = state_37353;var statearr_37364_37408 = state_37353__$1;(statearr_37364_37408[2] = inst_37349);
(statearr_37364_37408[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 8))
{var inst_37295 = (state_37353[10]);var inst_37294 = (state_37353[11]);var inst_37297 = (inst_37295 < inst_37294);var inst_37298 = inst_37297;var state_37353__$1 = state_37353;if(cljs.core.truth_(inst_37298))
{var statearr_37368_37409 = state_37353__$1;(statearr_37368_37409[1] = 10);
} else
{var statearr_37369_37410 = state_37353__$1;(statearr_37369_37410[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 9))
{var inst_37328 = (state_37353[2]);var state_37353__$1 = state_37353;var statearr_37370_37411 = state_37353__$1;(statearr_37370_37411[2] = inst_37328);
(statearr_37370_37411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 10))
{var inst_37292 = (state_37353[8]);var inst_37293 = (state_37353[9]);var inst_37295 = (state_37353[10]);var inst_37294 = (state_37353[11]);var inst_37300 = cljs.core._nth.call(null,inst_37293,inst_37295);var inst_37301 = cljs.core.async.muxch_STAR_.call(null,inst_37300);var inst_37302 = cljs.core.async.close_BANG_.call(null,inst_37301);var inst_37303 = (inst_37295 + 1);var tmp37365 = inst_37292;var tmp37366 = inst_37293;var tmp37367 = inst_37294;var inst_37292__$1 = tmp37365;var inst_37293__$1 = tmp37366;var inst_37294__$1 = tmp37367;var inst_37295__$1 = inst_37303;var state_37353__$1 = (function (){var statearr_37371 = state_37353;(statearr_37371[8] = inst_37292__$1);
(statearr_37371[9] = inst_37293__$1);
(statearr_37371[10] = inst_37295__$1);
(statearr_37371[11] = inst_37294__$1);
(statearr_37371[14] = inst_37302);
return statearr_37371;
})();var statearr_37372_37412 = state_37353__$1;(statearr_37372_37412[2] = null);
(statearr_37372_37412[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 11))
{var inst_37292 = (state_37353[8]);var inst_37306 = (state_37353[15]);var inst_37306__$1 = cljs.core.seq.call(null,inst_37292);var state_37353__$1 = (function (){var statearr_37373 = state_37353;(statearr_37373[15] = inst_37306__$1);
return statearr_37373;
})();if(inst_37306__$1)
{var statearr_37374_37413 = state_37353__$1;(statearr_37374_37413[1] = 13);
} else
{var statearr_37375_37414 = state_37353__$1;(statearr_37375_37414[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 12))
{var inst_37326 = (state_37353[2]);var state_37353__$1 = state_37353;var statearr_37376_37415 = state_37353__$1;(statearr_37376_37415[2] = inst_37326);
(statearr_37376_37415[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 13))
{var inst_37306 = (state_37353[15]);var inst_37308 = cljs.core.chunked_seq_QMARK_.call(null,inst_37306);var state_37353__$1 = state_37353;if(inst_37308)
{var statearr_37377_37416 = state_37353__$1;(statearr_37377_37416[1] = 16);
} else
{var statearr_37378_37417 = state_37353__$1;(statearr_37378_37417[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 14))
{var state_37353__$1 = state_37353;var statearr_37379_37418 = state_37353__$1;(statearr_37379_37418[2] = null);
(statearr_37379_37418[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 15))
{var inst_37324 = (state_37353[2]);var state_37353__$1 = state_37353;var statearr_37380_37419 = state_37353__$1;(statearr_37380_37419[2] = inst_37324);
(statearr_37380_37419[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 16))
{var inst_37306 = (state_37353[15]);var inst_37310 = cljs.core.chunk_first.call(null,inst_37306);var inst_37311 = cljs.core.chunk_rest.call(null,inst_37306);var inst_37312 = cljs.core.count.call(null,inst_37310);var inst_37292 = inst_37311;var inst_37293 = inst_37310;var inst_37294 = inst_37312;var inst_37295 = 0;var state_37353__$1 = (function (){var statearr_37381 = state_37353;(statearr_37381[8] = inst_37292);
(statearr_37381[9] = inst_37293);
(statearr_37381[10] = inst_37295);
(statearr_37381[11] = inst_37294);
return statearr_37381;
})();var statearr_37382_37420 = state_37353__$1;(statearr_37382_37420[2] = null);
(statearr_37382_37420[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 17))
{var inst_37306 = (state_37353[15]);var inst_37315 = cljs.core.first.call(null,inst_37306);var inst_37316 = cljs.core.async.muxch_STAR_.call(null,inst_37315);var inst_37317 = cljs.core.async.close_BANG_.call(null,inst_37316);var inst_37318 = cljs.core.next.call(null,inst_37306);var inst_37292 = inst_37318;var inst_37293 = null;var inst_37294 = 0;var inst_37295 = 0;var state_37353__$1 = (function (){var statearr_37383 = state_37353;(statearr_37383[16] = inst_37317);
(statearr_37383[8] = inst_37292);
(statearr_37383[9] = inst_37293);
(statearr_37383[10] = inst_37295);
(statearr_37383[11] = inst_37294);
return statearr_37383;
})();var statearr_37384_37421 = state_37353__$1;(statearr_37384_37421[2] = null);
(statearr_37384_37421[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 18))
{var inst_37321 = (state_37353[2]);var state_37353__$1 = state_37353;var statearr_37385_37422 = state_37353__$1;(statearr_37385_37422[2] = inst_37321);
(statearr_37385_37422[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 19))
{var state_37353__$1 = state_37353;var statearr_37386_37423 = state_37353__$1;(statearr_37386_37423[2] = null);
(statearr_37386_37423[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 20))
{var state_37353__$1 = state_37353;var statearr_37387_37424 = state_37353__$1;(statearr_37387_37424[2] = null);
(statearr_37387_37424[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 21))
{var inst_37346 = (state_37353[2]);var state_37353__$1 = (function (){var statearr_37388 = state_37353;(statearr_37388[17] = inst_37346);
return statearr_37388;
})();var statearr_37389_37425 = state_37353__$1;(statearr_37389_37425[2] = null);
(statearr_37389_37425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 22))
{var inst_37343 = (state_37353[2]);var state_37353__$1 = state_37353;var statearr_37390_37426 = state_37353__$1;(statearr_37390_37426[2] = inst_37343);
(statearr_37390_37426[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 23))
{var inst_37330 = (state_37353[13]);var inst_37334 = (state_37353[2]);var inst_37335 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37330);var state_37353__$1 = (function (){var statearr_37391 = state_37353;(statearr_37391[18] = inst_37334);
return statearr_37391;
})();var statearr_37392_37427 = state_37353__$1;(statearr_37392_37427[2] = inst_37335);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37353__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37354 === 24))
{var inst_37332 = (state_37353[12]);var inst_37282 = (state_37353[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37353,23,Object,null,22);var inst_37339 = cljs.core.async.muxch_STAR_.call(null,inst_37332);var state_37353__$1 = state_37353;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37353__$1,25,inst_37339,inst_37282);
} else
{if((state_val_37354 === 25))
{var inst_37341 = (state_37353[2]);var state_37353__$1 = state_37353;var statearr_37393_37428 = state_37353__$1;(statearr_37393_37428[2] = inst_37341);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37353__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_37397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37397[0] = state_machine__5507__auto__);
(statearr_37397[1] = 1);
return statearr_37397;
});
var state_machine__5507__auto____1 = (function (state_37353){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37353);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37398){if((e37398 instanceof Object))
{var ex__5510__auto__ = e37398;var statearr_37399_37429 = state_37353;(statearr_37399_37429[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37353);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37430 = state_37353;
state_37353 = G__37430;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37353){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37400 = f__5522__auto__.call(null);(statearr_37400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37401);
return statearr_37400;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___37567 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37537){var state_val_37538 = (state_37537[1]);if((state_val_37538 === 1))
{var state_37537__$1 = state_37537;var statearr_37539_37568 = state_37537__$1;(statearr_37539_37568[2] = null);
(statearr_37539_37568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 2))
{var inst_37500 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_37501 = 0;var state_37537__$1 = (function (){var statearr_37540 = state_37537;(statearr_37540[7] = inst_37501);
(statearr_37540[8] = inst_37500);
return statearr_37540;
})();var statearr_37541_37569 = state_37537__$1;(statearr_37541_37569[2] = null);
(statearr_37541_37569[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 3))
{var inst_37535 = (state_37537[2]);var state_37537__$1 = state_37537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37537__$1,inst_37535);
} else
{if((state_val_37538 === 4))
{var inst_37501 = (state_37537[7]);var inst_37503 = (inst_37501 < cnt);var state_37537__$1 = state_37537;if(cljs.core.truth_(inst_37503))
{var statearr_37542_37570 = state_37537__$1;(statearr_37542_37570[1] = 6);
} else
{var statearr_37543_37571 = state_37537__$1;(statearr_37543_37571[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 5))
{var inst_37521 = (state_37537[2]);var state_37537__$1 = (function (){var statearr_37544 = state_37537;(statearr_37544[9] = inst_37521);
return statearr_37544;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37537__$1,12,dchan);
} else
{if((state_val_37538 === 6))
{var state_37537__$1 = state_37537;var statearr_37545_37572 = state_37537__$1;(statearr_37545_37572[2] = null);
(statearr_37545_37572[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 7))
{var state_37537__$1 = state_37537;var statearr_37546_37573 = state_37537__$1;(statearr_37546_37573[2] = null);
(statearr_37546_37573[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 8))
{var inst_37519 = (state_37537[2]);var state_37537__$1 = state_37537;var statearr_37547_37574 = state_37537__$1;(statearr_37547_37574[2] = inst_37519);
(statearr_37547_37574[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 9))
{var inst_37501 = (state_37537[7]);var inst_37514 = (state_37537[2]);var inst_37515 = (inst_37501 + 1);var inst_37501__$1 = inst_37515;var state_37537__$1 = (function (){var statearr_37548 = state_37537;(statearr_37548[10] = inst_37514);
(statearr_37548[7] = inst_37501__$1);
return statearr_37548;
})();var statearr_37549_37575 = state_37537__$1;(statearr_37549_37575[2] = null);
(statearr_37549_37575[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 10))
{var inst_37505 = (state_37537[2]);var inst_37506 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_37537__$1 = (function (){var statearr_37550 = state_37537;(statearr_37550[11] = inst_37505);
return statearr_37550;
})();var statearr_37551_37576 = state_37537__$1;(statearr_37551_37576[2] = inst_37506);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37537__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 11))
{var inst_37501 = (state_37537[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37537,10,Object,null,9);var inst_37510 = chs__$1.call(null,inst_37501);var inst_37511 = done.call(null,inst_37501);var inst_37512 = cljs.core.async.take_BANG_.call(null,inst_37510,inst_37511);var state_37537__$1 = state_37537;var statearr_37552_37577 = state_37537__$1;(statearr_37552_37577[2] = inst_37512);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37537__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 12))
{var inst_37523 = (state_37537[12]);var inst_37523__$1 = (state_37537[2]);var inst_37524 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37523__$1);var state_37537__$1 = (function (){var statearr_37553 = state_37537;(statearr_37553[12] = inst_37523__$1);
return statearr_37553;
})();if(cljs.core.truth_(inst_37524))
{var statearr_37554_37578 = state_37537__$1;(statearr_37554_37578[1] = 13);
} else
{var statearr_37555_37579 = state_37537__$1;(statearr_37555_37579[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 13))
{var inst_37526 = cljs.core.async.close_BANG_.call(null,out);var state_37537__$1 = state_37537;var statearr_37556_37580 = state_37537__$1;(statearr_37556_37580[2] = inst_37526);
(statearr_37556_37580[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 14))
{var inst_37523 = (state_37537[12]);var inst_37528 = cljs.core.apply.call(null,f,inst_37523);var state_37537__$1 = state_37537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37537__$1,16,out,inst_37528);
} else
{if((state_val_37538 === 15))
{var inst_37533 = (state_37537[2]);var state_37537__$1 = state_37537;var statearr_37557_37581 = state_37537__$1;(statearr_37557_37581[2] = inst_37533);
(statearr_37557_37581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37538 === 16))
{var inst_37530 = (state_37537[2]);var state_37537__$1 = (function (){var statearr_37558 = state_37537;(statearr_37558[13] = inst_37530);
return statearr_37558;
})();var statearr_37559_37582 = state_37537__$1;(statearr_37559_37582[2] = null);
(statearr_37559_37582[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37563[0] = state_machine__5507__auto__);
(statearr_37563[1] = 1);
return statearr_37563;
});
var state_machine__5507__auto____1 = (function (state_37537){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37537);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37564){if((e37564 instanceof Object))
{var ex__5510__auto__ = e37564;var statearr_37565_37583 = state_37537;(statearr_37565_37583[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37584 = state_37537;
state_37537 = G__37584;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37537){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37566 = f__5522__auto__.call(null);(statearr_37566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37567);
return statearr_37566;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37668){var state_val_37669 = (state_37668[1]);if((state_val_37669 === 1))
{var inst_37639 = cljs.core.vec.call(null,chs);var inst_37640 = inst_37639;var state_37668__$1 = (function (){var statearr_37670 = state_37668;(statearr_37670[7] = inst_37640);
return statearr_37670;
})();var statearr_37671_37693 = state_37668__$1;(statearr_37671_37693[2] = null);
(statearr_37671_37693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37669 === 2))
{var inst_37640 = (state_37668[7]);var inst_37642 = cljs.core.count.call(null,inst_37640);var inst_37643 = (inst_37642 > 0);var state_37668__$1 = state_37668;if(cljs.core.truth_(inst_37643))
{var statearr_37672_37694 = state_37668__$1;(statearr_37672_37694[1] = 4);
} else
{var statearr_37673_37695 = state_37668__$1;(statearr_37673_37695[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37669 === 3))
{var inst_37666 = (state_37668[2]);var state_37668__$1 = state_37668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37668__$1,inst_37666);
} else
{if((state_val_37669 === 4))
{var inst_37640 = (state_37668[7]);var state_37668__$1 = state_37668;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_37668__$1,7,inst_37640);
} else
{if((state_val_37669 === 5))
{var inst_37662 = cljs.core.async.close_BANG_.call(null,out);var state_37668__$1 = state_37668;var statearr_37674_37696 = state_37668__$1;(statearr_37674_37696[2] = inst_37662);
(statearr_37674_37696[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37669 === 6))
{var inst_37664 = (state_37668[2]);var state_37668__$1 = state_37668;var statearr_37675_37697 = state_37668__$1;(statearr_37675_37697[2] = inst_37664);
(statearr_37675_37697[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37669 === 7))
{var inst_37647 = (state_37668[8]);var inst_37648 = (state_37668[9]);var inst_37647__$1 = (state_37668[2]);var inst_37648__$1 = cljs.core.nth.call(null,inst_37647__$1,0,null);var inst_37649 = cljs.core.nth.call(null,inst_37647__$1,1,null);var inst_37650 = (inst_37648__$1 == null);var state_37668__$1 = (function (){var statearr_37676 = state_37668;(statearr_37676[8] = inst_37647__$1);
(statearr_37676[9] = inst_37648__$1);
(statearr_37676[10] = inst_37649);
return statearr_37676;
})();if(cljs.core.truth_(inst_37650))
{var statearr_37677_37698 = state_37668__$1;(statearr_37677_37698[1] = 8);
} else
{var statearr_37678_37699 = state_37668__$1;(statearr_37678_37699[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37669 === 8))
{var inst_37640 = (state_37668[7]);var inst_37647 = (state_37668[8]);var inst_37648 = (state_37668[9]);var inst_37649 = (state_37668[10]);var inst_37652 = (function (){var c = inst_37649;var v = inst_37648;var vec__37645 = inst_37647;var cs = inst_37640;return ((function (c,v,vec__37645,cs,inst_37640,inst_37647,inst_37648,inst_37649,state_val_37669){
return (function (p1__37585_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__37585_SHARP_);
});
;})(c,v,vec__37645,cs,inst_37640,inst_37647,inst_37648,inst_37649,state_val_37669))
})();var inst_37653 = cljs.core.filterv.call(null,inst_37652,inst_37640);var inst_37640__$1 = inst_37653;var state_37668__$1 = (function (){var statearr_37679 = state_37668;(statearr_37679[7] = inst_37640__$1);
return statearr_37679;
})();var statearr_37680_37700 = state_37668__$1;(statearr_37680_37700[2] = null);
(statearr_37680_37700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37669 === 9))
{var inst_37648 = (state_37668[9]);var state_37668__$1 = state_37668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37668__$1,11,out,inst_37648);
} else
{if((state_val_37669 === 10))
{var inst_37660 = (state_37668[2]);var state_37668__$1 = state_37668;var statearr_37682_37701 = state_37668__$1;(statearr_37682_37701[2] = inst_37660);
(statearr_37682_37701[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37669 === 11))
{var inst_37640 = (state_37668[7]);var inst_37657 = (state_37668[2]);var tmp37681 = inst_37640;var inst_37640__$1 = tmp37681;var state_37668__$1 = (function (){var statearr_37683 = state_37668;(statearr_37683[7] = inst_37640__$1);
(statearr_37683[11] = inst_37657);
return statearr_37683;
})();var statearr_37684_37702 = state_37668__$1;(statearr_37684_37702[2] = null);
(statearr_37684_37702[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37688 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37688[0] = state_machine__5507__auto__);
(statearr_37688[1] = 1);
return statearr_37688;
});
var state_machine__5507__auto____1 = (function (state_37668){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37668);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37689){if((e37689 instanceof Object))
{var ex__5510__auto__ = e37689;var statearr_37690_37703 = state_37668;(statearr_37690_37703[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37704 = state_37668;
state_37668 = G__37704;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37668){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37691 = f__5522__auto__.call(null);(statearr_37691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37692);
return statearr_37691;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37797 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37774){var state_val_37775 = (state_37774[1]);if((state_val_37775 === 1))
{var inst_37751 = 0;var state_37774__$1 = (function (){var statearr_37776 = state_37774;(statearr_37776[7] = inst_37751);
return statearr_37776;
})();var statearr_37777_37798 = state_37774__$1;(statearr_37777_37798[2] = null);
(statearr_37777_37798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37775 === 2))
{var inst_37751 = (state_37774[7]);var inst_37753 = (inst_37751 < n);var state_37774__$1 = state_37774;if(cljs.core.truth_(inst_37753))
{var statearr_37778_37799 = state_37774__$1;(statearr_37778_37799[1] = 4);
} else
{var statearr_37779_37800 = state_37774__$1;(statearr_37779_37800[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37775 === 3))
{var inst_37771 = (state_37774[2]);var inst_37772 = cljs.core.async.close_BANG_.call(null,out);var state_37774__$1 = (function (){var statearr_37780 = state_37774;(statearr_37780[8] = inst_37771);
return statearr_37780;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37774__$1,inst_37772);
} else
{if((state_val_37775 === 4))
{var state_37774__$1 = state_37774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37774__$1,7,ch);
} else
{if((state_val_37775 === 5))
{var state_37774__$1 = state_37774;var statearr_37781_37801 = state_37774__$1;(statearr_37781_37801[2] = null);
(statearr_37781_37801[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37775 === 6))
{var inst_37769 = (state_37774[2]);var state_37774__$1 = state_37774;var statearr_37782_37802 = state_37774__$1;(statearr_37782_37802[2] = inst_37769);
(statearr_37782_37802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37775 === 7))
{var inst_37756 = (state_37774[9]);var inst_37756__$1 = (state_37774[2]);var inst_37757 = (inst_37756__$1 == null);var inst_37758 = cljs.core.not.call(null,inst_37757);var state_37774__$1 = (function (){var statearr_37783 = state_37774;(statearr_37783[9] = inst_37756__$1);
return statearr_37783;
})();if(inst_37758)
{var statearr_37784_37803 = state_37774__$1;(statearr_37784_37803[1] = 8);
} else
{var statearr_37785_37804 = state_37774__$1;(statearr_37785_37804[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37775 === 8))
{var inst_37756 = (state_37774[9]);var state_37774__$1 = state_37774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37774__$1,11,out,inst_37756);
} else
{if((state_val_37775 === 9))
{var state_37774__$1 = state_37774;var statearr_37786_37805 = state_37774__$1;(statearr_37786_37805[2] = null);
(statearr_37786_37805[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37775 === 10))
{var inst_37766 = (state_37774[2]);var state_37774__$1 = state_37774;var statearr_37787_37806 = state_37774__$1;(statearr_37787_37806[2] = inst_37766);
(statearr_37787_37806[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37775 === 11))
{var inst_37751 = (state_37774[7]);var inst_37761 = (state_37774[2]);var inst_37762 = (inst_37751 + 1);var inst_37751__$1 = inst_37762;var state_37774__$1 = (function (){var statearr_37788 = state_37774;(statearr_37788[7] = inst_37751__$1);
(statearr_37788[10] = inst_37761);
return statearr_37788;
})();var statearr_37789_37807 = state_37774__$1;(statearr_37789_37807[2] = null);
(statearr_37789_37807[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37793 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37793[0] = state_machine__5507__auto__);
(statearr_37793[1] = 1);
return statearr_37793;
});
var state_machine__5507__auto____1 = (function (state_37774){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37794){if((e37794 instanceof Object))
{var ex__5510__auto__ = e37794;var statearr_37795_37808 = state_37774;(statearr_37795_37808[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37809 = state_37774;
state_37774 = G__37809;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37774){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37796 = f__5522__auto__.call(null);(statearr_37796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37797);
return statearr_37796;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37906 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37881){var state_val_37882 = (state_37881[1]);if((state_val_37882 === 1))
{var inst_37858 = null;var state_37881__$1 = (function (){var statearr_37883 = state_37881;(statearr_37883[7] = inst_37858);
return statearr_37883;
})();var statearr_37884_37907 = state_37881__$1;(statearr_37884_37907[2] = null);
(statearr_37884_37907[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37882 === 2))
{var state_37881__$1 = state_37881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37881__$1,4,ch);
} else
{if((state_val_37882 === 3))
{var inst_37878 = (state_37881[2]);var inst_37879 = cljs.core.async.close_BANG_.call(null,out);var state_37881__$1 = (function (){var statearr_37885 = state_37881;(statearr_37885[8] = inst_37878);
return statearr_37885;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37881__$1,inst_37879);
} else
{if((state_val_37882 === 4))
{var inst_37861 = (state_37881[9]);var inst_37861__$1 = (state_37881[2]);var inst_37862 = (inst_37861__$1 == null);var inst_37863 = cljs.core.not.call(null,inst_37862);var state_37881__$1 = (function (){var statearr_37886 = state_37881;(statearr_37886[9] = inst_37861__$1);
return statearr_37886;
})();if(inst_37863)
{var statearr_37887_37908 = state_37881__$1;(statearr_37887_37908[1] = 5);
} else
{var statearr_37888_37909 = state_37881__$1;(statearr_37888_37909[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37882 === 5))
{var inst_37858 = (state_37881[7]);var inst_37861 = (state_37881[9]);var inst_37865 = cljs.core._EQ_.call(null,inst_37861,inst_37858);var state_37881__$1 = state_37881;if(inst_37865)
{var statearr_37889_37910 = state_37881__$1;(statearr_37889_37910[1] = 8);
} else
{var statearr_37890_37911 = state_37881__$1;(statearr_37890_37911[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37882 === 6))
{var state_37881__$1 = state_37881;var statearr_37892_37912 = state_37881__$1;(statearr_37892_37912[2] = null);
(statearr_37892_37912[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37882 === 7))
{var inst_37876 = (state_37881[2]);var state_37881__$1 = state_37881;var statearr_37893_37913 = state_37881__$1;(statearr_37893_37913[2] = inst_37876);
(statearr_37893_37913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37882 === 8))
{var inst_37858 = (state_37881[7]);var tmp37891 = inst_37858;var inst_37858__$1 = tmp37891;var state_37881__$1 = (function (){var statearr_37894 = state_37881;(statearr_37894[7] = inst_37858__$1);
return statearr_37894;
})();var statearr_37895_37914 = state_37881__$1;(statearr_37895_37914[2] = null);
(statearr_37895_37914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37882 === 9))
{var inst_37861 = (state_37881[9]);var state_37881__$1 = state_37881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37881__$1,11,out,inst_37861);
} else
{if((state_val_37882 === 10))
{var inst_37873 = (state_37881[2]);var state_37881__$1 = state_37881;var statearr_37896_37915 = state_37881__$1;(statearr_37896_37915[2] = inst_37873);
(statearr_37896_37915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37882 === 11))
{var inst_37861 = (state_37881[9]);var inst_37870 = (state_37881[2]);var inst_37858 = inst_37861;var state_37881__$1 = (function (){var statearr_37897 = state_37881;(statearr_37897[10] = inst_37870);
(statearr_37897[7] = inst_37858);
return statearr_37897;
})();var statearr_37898_37916 = state_37881__$1;(statearr_37898_37916[2] = null);
(statearr_37898_37916[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37902 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37902[0] = state_machine__5507__auto__);
(statearr_37902[1] = 1);
return statearr_37902;
});
var state_machine__5507__auto____1 = (function (state_37881){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37881);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37903){if((e37903 instanceof Object))
{var ex__5510__auto__ = e37903;var statearr_37904_37917 = state_37881;(statearr_37904_37917[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37881);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37918 = state_37881;
state_37881 = G__37918;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37881){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37905 = f__5522__auto__.call(null);(statearr_37905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37906);
return statearr_37905;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___38053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_38023){var state_val_38024 = (state_38023[1]);if((state_val_38024 === 1))
{var inst_37986 = (new Array(n));var inst_37987 = inst_37986;var inst_37988 = 0;var state_38023__$1 = (function (){var statearr_38025 = state_38023;(statearr_38025[7] = inst_37988);
(statearr_38025[8] = inst_37987);
return statearr_38025;
})();var statearr_38026_38054 = state_38023__$1;(statearr_38026_38054[2] = null);
(statearr_38026_38054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 2))
{var state_38023__$1 = state_38023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38023__$1,4,ch);
} else
{if((state_val_38024 === 3))
{var inst_38021 = (state_38023[2]);var state_38023__$1 = state_38023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38023__$1,inst_38021);
} else
{if((state_val_38024 === 4))
{var inst_37991 = (state_38023[9]);var inst_37991__$1 = (state_38023[2]);var inst_37992 = (inst_37991__$1 == null);var inst_37993 = cljs.core.not.call(null,inst_37992);var state_38023__$1 = (function (){var statearr_38027 = state_38023;(statearr_38027[9] = inst_37991__$1);
return statearr_38027;
})();if(inst_37993)
{var statearr_38028_38055 = state_38023__$1;(statearr_38028_38055[1] = 5);
} else
{var statearr_38029_38056 = state_38023__$1;(statearr_38029_38056[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 5))
{var inst_37991 = (state_38023[9]);var inst_37988 = (state_38023[7]);var inst_37996 = (state_38023[10]);var inst_37987 = (state_38023[8]);var inst_37995 = (inst_37987[inst_37988] = inst_37991);var inst_37996__$1 = (inst_37988 + 1);var inst_37997 = (inst_37996__$1 < n);var state_38023__$1 = (function (){var statearr_38030 = state_38023;(statearr_38030[10] = inst_37996__$1);
(statearr_38030[11] = inst_37995);
return statearr_38030;
})();if(cljs.core.truth_(inst_37997))
{var statearr_38031_38057 = state_38023__$1;(statearr_38031_38057[1] = 8);
} else
{var statearr_38032_38058 = state_38023__$1;(statearr_38032_38058[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 6))
{var inst_37988 = (state_38023[7]);var inst_38009 = (inst_37988 > 0);var state_38023__$1 = state_38023;if(cljs.core.truth_(inst_38009))
{var statearr_38034_38059 = state_38023__$1;(statearr_38034_38059[1] = 12);
} else
{var statearr_38035_38060 = state_38023__$1;(statearr_38035_38060[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 7))
{var inst_38019 = (state_38023[2]);var state_38023__$1 = state_38023;var statearr_38036_38061 = state_38023__$1;(statearr_38036_38061[2] = inst_38019);
(statearr_38036_38061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 8))
{var inst_37996 = (state_38023[10]);var inst_37987 = (state_38023[8]);var tmp38033 = inst_37987;var inst_37987__$1 = tmp38033;var inst_37988 = inst_37996;var state_38023__$1 = (function (){var statearr_38037 = state_38023;(statearr_38037[7] = inst_37988);
(statearr_38037[8] = inst_37987__$1);
return statearr_38037;
})();var statearr_38038_38062 = state_38023__$1;(statearr_38038_38062[2] = null);
(statearr_38038_38062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 9))
{var inst_37987 = (state_38023[8]);var inst_38001 = cljs.core.vec.call(null,inst_37987);var state_38023__$1 = state_38023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38023__$1,11,out,inst_38001);
} else
{if((state_val_38024 === 10))
{var inst_38007 = (state_38023[2]);var state_38023__$1 = state_38023;var statearr_38039_38063 = state_38023__$1;(statearr_38039_38063[2] = inst_38007);
(statearr_38039_38063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 11))
{var inst_38003 = (state_38023[2]);var inst_38004 = (new Array(n));var inst_37987 = inst_38004;var inst_37988 = 0;var state_38023__$1 = (function (){var statearr_38040 = state_38023;(statearr_38040[12] = inst_38003);
(statearr_38040[7] = inst_37988);
(statearr_38040[8] = inst_37987);
return statearr_38040;
})();var statearr_38041_38064 = state_38023__$1;(statearr_38041_38064[2] = null);
(statearr_38041_38064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 12))
{var inst_37987 = (state_38023[8]);var inst_38011 = cljs.core.vec.call(null,inst_37987);var state_38023__$1 = state_38023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38023__$1,15,out,inst_38011);
} else
{if((state_val_38024 === 13))
{var state_38023__$1 = state_38023;var statearr_38042_38065 = state_38023__$1;(statearr_38042_38065[2] = null);
(statearr_38042_38065[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 14))
{var inst_38016 = (state_38023[2]);var inst_38017 = cljs.core.async.close_BANG_.call(null,out);var state_38023__$1 = (function (){var statearr_38043 = state_38023;(statearr_38043[13] = inst_38016);
return statearr_38043;
})();var statearr_38044_38066 = state_38023__$1;(statearr_38044_38066[2] = inst_38017);
(statearr_38044_38066[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38024 === 15))
{var inst_38013 = (state_38023[2]);var state_38023__$1 = state_38023;var statearr_38045_38067 = state_38023__$1;(statearr_38045_38067[2] = inst_38013);
(statearr_38045_38067[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_38049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38049[0] = state_machine__5507__auto__);
(statearr_38049[1] = 1);
return statearr_38049;
});
var state_machine__5507__auto____1 = (function (state_38023){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_38023);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e38050){if((e38050 instanceof Object))
{var ex__5510__auto__ = e38050;var statearr_38051_38068 = state_38023;(statearr_38051_38068[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38069 = state_38023;
state_38023 = G__38069;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_38023){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_38023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_38052 = f__5522__auto__.call(null);(statearr_38052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___38053);
return statearr_38052;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___38212 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_38182){var state_val_38183 = (state_38182[1]);if((state_val_38183 === 1))
{var inst_38141 = [];var inst_38142 = inst_38141;var inst_38143 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_38182__$1 = (function (){var statearr_38184 = state_38182;(statearr_38184[7] = inst_38142);
(statearr_38184[8] = inst_38143);
return statearr_38184;
})();var statearr_38185_38213 = state_38182__$1;(statearr_38185_38213[2] = null);
(statearr_38185_38213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 2))
{var state_38182__$1 = state_38182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38182__$1,4,ch);
} else
{if((state_val_38183 === 3))
{var inst_38180 = (state_38182[2]);var state_38182__$1 = state_38182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38182__$1,inst_38180);
} else
{if((state_val_38183 === 4))
{var inst_38146 = (state_38182[9]);var inst_38146__$1 = (state_38182[2]);var inst_38147 = (inst_38146__$1 == null);var inst_38148 = cljs.core.not.call(null,inst_38147);var state_38182__$1 = (function (){var statearr_38186 = state_38182;(statearr_38186[9] = inst_38146__$1);
return statearr_38186;
})();if(inst_38148)
{var statearr_38187_38214 = state_38182__$1;(statearr_38187_38214[1] = 5);
} else
{var statearr_38188_38215 = state_38182__$1;(statearr_38188_38215[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 5))
{var inst_38150 = (state_38182[10]);var inst_38146 = (state_38182[9]);var inst_38143 = (state_38182[8]);var inst_38150__$1 = f.call(null,inst_38146);var inst_38151 = cljs.core._EQ_.call(null,inst_38150__$1,inst_38143);var inst_38152 = cljs.core.keyword_identical_QMARK_.call(null,inst_38143,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_38153 = (inst_38151) || (inst_38152);var state_38182__$1 = (function (){var statearr_38189 = state_38182;(statearr_38189[10] = inst_38150__$1);
return statearr_38189;
})();if(cljs.core.truth_(inst_38153))
{var statearr_38190_38216 = state_38182__$1;(statearr_38190_38216[1] = 8);
} else
{var statearr_38191_38217 = state_38182__$1;(statearr_38191_38217[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 6))
{var inst_38142 = (state_38182[7]);var inst_38167 = inst_38142.length;var inst_38168 = (inst_38167 > 0);var state_38182__$1 = state_38182;if(cljs.core.truth_(inst_38168))
{var statearr_38193_38218 = state_38182__$1;(statearr_38193_38218[1] = 12);
} else
{var statearr_38194_38219 = state_38182__$1;(statearr_38194_38219[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 7))
{var inst_38178 = (state_38182[2]);var state_38182__$1 = state_38182;var statearr_38195_38220 = state_38182__$1;(statearr_38195_38220[2] = inst_38178);
(statearr_38195_38220[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 8))
{var inst_38150 = (state_38182[10]);var inst_38146 = (state_38182[9]);var inst_38142 = (state_38182[7]);var inst_38155 = inst_38142.push(inst_38146);var tmp38192 = inst_38142;var inst_38142__$1 = tmp38192;var inst_38143 = inst_38150;var state_38182__$1 = (function (){var statearr_38196 = state_38182;(statearr_38196[7] = inst_38142__$1);
(statearr_38196[8] = inst_38143);
(statearr_38196[11] = inst_38155);
return statearr_38196;
})();var statearr_38197_38221 = state_38182__$1;(statearr_38197_38221[2] = null);
(statearr_38197_38221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 9))
{var inst_38142 = (state_38182[7]);var inst_38158 = cljs.core.vec.call(null,inst_38142);var state_38182__$1 = state_38182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38182__$1,11,out,inst_38158);
} else
{if((state_val_38183 === 10))
{var inst_38165 = (state_38182[2]);var state_38182__$1 = state_38182;var statearr_38198_38222 = state_38182__$1;(statearr_38198_38222[2] = inst_38165);
(statearr_38198_38222[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 11))
{var inst_38150 = (state_38182[10]);var inst_38146 = (state_38182[9]);var inst_38160 = (state_38182[2]);var inst_38161 = [];var inst_38162 = inst_38161.push(inst_38146);var inst_38142 = inst_38161;var inst_38143 = inst_38150;var state_38182__$1 = (function (){var statearr_38199 = state_38182;(statearr_38199[7] = inst_38142);
(statearr_38199[8] = inst_38143);
(statearr_38199[12] = inst_38160);
(statearr_38199[13] = inst_38162);
return statearr_38199;
})();var statearr_38200_38223 = state_38182__$1;(statearr_38200_38223[2] = null);
(statearr_38200_38223[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 12))
{var inst_38142 = (state_38182[7]);var inst_38170 = cljs.core.vec.call(null,inst_38142);var state_38182__$1 = state_38182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38182__$1,15,out,inst_38170);
} else
{if((state_val_38183 === 13))
{var state_38182__$1 = state_38182;var statearr_38201_38224 = state_38182__$1;(statearr_38201_38224[2] = null);
(statearr_38201_38224[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 14))
{var inst_38175 = (state_38182[2]);var inst_38176 = cljs.core.async.close_BANG_.call(null,out);var state_38182__$1 = (function (){var statearr_38202 = state_38182;(statearr_38202[14] = inst_38175);
return statearr_38202;
})();var statearr_38203_38225 = state_38182__$1;(statearr_38203_38225[2] = inst_38176);
(statearr_38203_38225[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38183 === 15))
{var inst_38172 = (state_38182[2]);var state_38182__$1 = state_38182;var statearr_38204_38226 = state_38182__$1;(statearr_38204_38226[2] = inst_38172);
(statearr_38204_38226[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_38208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38208[0] = state_machine__5507__auto__);
(statearr_38208[1] = 1);
return statearr_38208;
});
var state_machine__5507__auto____1 = (function (state_38182){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_38182);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e38209){if((e38209 instanceof Object))
{var ex__5510__auto__ = e38209;var statearr_38210_38227 = state_38182;(statearr_38210_38227[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38228 = state_38182;
state_38182 = G__38228;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_38182){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_38182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_38211 = f__5522__auto__.call(null);(statearr_38211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___38212);
return statearr_38211;
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
