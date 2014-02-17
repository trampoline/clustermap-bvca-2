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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13590 = (function (f,fn_handler,meta13591){
this.f = f;
this.fn_handler = fn_handler;
this.meta13591 = meta13591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13590.cljs$lang$type = true;
cljs.core.async.t13590.cljs$lang$ctorStr = "cljs.core.async/t13590";
cljs.core.async.t13590.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13590");
});
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13592){var self__ = this;
var _13592__$1 = this;return self__.meta13591;
});
cljs.core.async.t13590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13592,meta13591__$1){var self__ = this;
var _13592__$1 = this;return (new cljs.core.async.t13590(self__.f,self__.fn_handler,meta13591__$1));
});
cljs.core.async.__GT_t13590 = (function __GT_t13590(f__$1,fn_handler__$1,meta13591){return (new cljs.core.async.t13590(f__$1,fn_handler__$1,meta13591));
});
}
return (new cljs.core.async.t13590(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13594 = buff;if(G__13594)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13594.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13594.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13594);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13594);
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
{var val_13595 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13595);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13595);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13596 = n;var x_13597 = 0;while(true){
if((x_13597 < n__4248__auto___13596))
{(a[x_13597] = 0);
{
var G__13598 = (x_13597 + 1);
x_13597 = G__13598;
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
var G__13599 = (i + 1);
i = G__13599;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13603 = (function (flag,alt_flag,meta13604){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13604 = meta13604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13603.cljs$lang$type = true;
cljs.core.async.t13603.cljs$lang$ctorStr = "cljs.core.async/t13603";
cljs.core.async.t13603.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13603");
});
cljs.core.async.t13603.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13605){var self__ = this;
var _13605__$1 = this;return self__.meta13604;
});
cljs.core.async.t13603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13605,meta13604__$1){var self__ = this;
var _13605__$1 = this;return (new cljs.core.async.t13603(self__.flag,self__.alt_flag,meta13604__$1));
});
cljs.core.async.__GT_t13603 = (function __GT_t13603(flag__$1,alt_flag__$1,meta13604){return (new cljs.core.async.t13603(flag__$1,alt_flag__$1,meta13604));
});
}
return (new cljs.core.async.t13603(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13609 = (function (cb,flag,alt_handler,meta13610){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13610 = meta13610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13609.cljs$lang$type = true;
cljs.core.async.t13609.cljs$lang$ctorStr = "cljs.core.async/t13609";
cljs.core.async.t13609.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13609");
});
cljs.core.async.t13609.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13611){var self__ = this;
var _13611__$1 = this;return self__.meta13610;
});
cljs.core.async.t13609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13611,meta13610__$1){var self__ = this;
var _13611__$1 = this;return (new cljs.core.async.t13609(self__.cb,self__.flag,self__.alt_handler,meta13610__$1));
});
cljs.core.async.__GT_t13609 = (function __GT_t13609(cb__$1,flag__$1,alt_handler__$1,meta13610){return (new cljs.core.async.t13609(cb__$1,flag__$1,alt_handler__$1,meta13610));
});
}
return (new cljs.core.async.t13609(cb,flag,alt_handler,null));
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
return (function (p1__13612_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13612_SHARP_,port], null));
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
var G__13613 = (i + 1);
i = G__13613;
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
var alts_BANG___delegate = function (ports,p__13614){var map__13616 = p__13614;var map__13616__$1 = ((cljs.core.seq_QMARK_.call(null,map__13616))?cljs.core.apply.call(null,cljs.core.hash_map,map__13616):map__13616);var opts = map__13616__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13614 = null;if (arguments.length > 1) {
  p__13614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13614);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13617){
var ports = cljs.core.first(arglist__13617);
var p__13614 = cljs.core.rest(arglist__13617);
return alts_BANG___delegate(ports,p__13614);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13625 = (function (ch,f,map_LT_,meta13626){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13626 = meta13626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13625.cljs$lang$type = true;
cljs.core.async.t13625.cljs$lang$ctorStr = "cljs.core.async/t13625";
cljs.core.async.t13625.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13625");
});
cljs.core.async.t13625.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13625.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13628 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13628 = (function (fn1,_,meta13626,ch,f,map_LT_,meta13629){
this.fn1 = fn1;
this._ = _;
this.meta13626 = meta13626;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13629 = meta13629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13628.cljs$lang$type = true;
cljs.core.async.t13628.cljs$lang$ctorStr = "cljs.core.async/t13628";
cljs.core.async.t13628.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13628");
});
cljs.core.async.t13628.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13628.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13618_SHARP_){return f1.call(null,(((p1__13618_SHARP_ == null))?null:self__.f.call(null,p1__13618_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13630){var self__ = this;
var _13630__$1 = this;return self__.meta13629;
});
cljs.core.async.t13628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13630,meta13629__$1){var self__ = this;
var _13630__$1 = this;return (new cljs.core.async.t13628(self__.fn1,self__._,self__.meta13626,self__.ch,self__.f,self__.map_LT_,meta13629__$1));
});
cljs.core.async.__GT_t13628 = (function __GT_t13628(fn1__$1,___$2,meta13626__$1,ch__$2,f__$2,map_LT___$2,meta13629){return (new cljs.core.async.t13628(fn1__$1,___$2,meta13626__$1,ch__$2,f__$2,map_LT___$2,meta13629));
});
}
return (new cljs.core.async.t13628(fn1,___$1,self__.meta13626,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13625.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13627){var self__ = this;
var _13627__$1 = this;return self__.meta13626;
});
cljs.core.async.t13625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13627,meta13626__$1){var self__ = this;
var _13627__$1 = this;return (new cljs.core.async.t13625(self__.ch,self__.f,self__.map_LT_,meta13626__$1));
});
cljs.core.async.__GT_t13625 = (function __GT_t13625(ch__$1,f__$1,map_LT___$1,meta13626){return (new cljs.core.async.t13625(ch__$1,f__$1,map_LT___$1,meta13626));
});
}
return (new cljs.core.async.t13625(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13634 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13634 = (function (ch,f,map_GT_,meta13635){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13635 = meta13635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13634.cljs$lang$type = true;
cljs.core.async.t13634.cljs$lang$ctorStr = "cljs.core.async/t13634";
cljs.core.async.t13634.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13634");
});
cljs.core.async.t13634.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13634.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13634.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13634.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13634.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13634.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13636){var self__ = this;
var _13636__$1 = this;return self__.meta13635;
});
cljs.core.async.t13634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13636,meta13635__$1){var self__ = this;
var _13636__$1 = this;return (new cljs.core.async.t13634(self__.ch,self__.f,self__.map_GT_,meta13635__$1));
});
cljs.core.async.__GT_t13634 = (function __GT_t13634(ch__$1,f__$1,map_GT___$1,meta13635){return (new cljs.core.async.t13634(ch__$1,f__$1,map_GT___$1,meta13635));
});
}
return (new cljs.core.async.t13634(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13640 = (function (ch,p,filter_GT_,meta13641){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13641 = meta13641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13640.cljs$lang$type = true;
cljs.core.async.t13640.cljs$lang$ctorStr = "cljs.core.async/t13640";
cljs.core.async.t13640.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13640");
});
cljs.core.async.t13640.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13640.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13640.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13642){var self__ = this;
var _13642__$1 = this;return self__.meta13641;
});
cljs.core.async.t13640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13642,meta13641__$1){var self__ = this;
var _13642__$1 = this;return (new cljs.core.async.t13640(self__.ch,self__.p,self__.filter_GT_,meta13641__$1));
});
cljs.core.async.__GT_t13640 = (function __GT_t13640(ch__$1,p__$1,filter_GT___$1,meta13641){return (new cljs.core.async.t13640(ch__$1,p__$1,filter_GT___$1,meta13641));
});
}
return (new cljs.core.async.t13640(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13725 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13704){var state_val_13705 = (state_13704[1]);if((state_val_13705 === 1))
{var state_13704__$1 = state_13704;var statearr_13706_13726 = state_13704__$1;(statearr_13706_13726[2] = null);
(statearr_13706_13726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 2))
{var state_13704__$1 = state_13704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13704__$1,4,ch);
} else
{if((state_val_13705 === 3))
{var inst_13702 = (state_13704[2]);var state_13704__$1 = state_13704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13704__$1,inst_13702);
} else
{if((state_val_13705 === 4))
{var inst_13686 = (state_13704[7]);var inst_13686__$1 = (state_13704[2]);var inst_13687 = (inst_13686__$1 == null);var state_13704__$1 = (function (){var statearr_13707 = state_13704;(statearr_13707[7] = inst_13686__$1);
return statearr_13707;
})();if(cljs.core.truth_(inst_13687))
{var statearr_13708_13727 = state_13704__$1;(statearr_13708_13727[1] = 5);
} else
{var statearr_13709_13728 = state_13704__$1;(statearr_13709_13728[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 5))
{var inst_13689 = cljs.core.async.close_BANG_.call(null,out);var state_13704__$1 = state_13704;var statearr_13710_13729 = state_13704__$1;(statearr_13710_13729[2] = inst_13689);
(statearr_13710_13729[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 6))
{var inst_13686 = (state_13704[7]);var inst_13691 = p.call(null,inst_13686);var state_13704__$1 = state_13704;if(cljs.core.truth_(inst_13691))
{var statearr_13711_13730 = state_13704__$1;(statearr_13711_13730[1] = 8);
} else
{var statearr_13712_13731 = state_13704__$1;(statearr_13712_13731[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 7))
{var inst_13700 = (state_13704[2]);var state_13704__$1 = state_13704;var statearr_13713_13732 = state_13704__$1;(statearr_13713_13732[2] = inst_13700);
(statearr_13713_13732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 8))
{var inst_13686 = (state_13704[7]);var state_13704__$1 = state_13704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13704__$1,11,out,inst_13686);
} else
{if((state_val_13705 === 9))
{var state_13704__$1 = state_13704;var statearr_13714_13733 = state_13704__$1;(statearr_13714_13733[2] = null);
(statearr_13714_13733[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 10))
{var inst_13697 = (state_13704[2]);var state_13704__$1 = (function (){var statearr_13715 = state_13704;(statearr_13715[8] = inst_13697);
return statearr_13715;
})();var statearr_13716_13734 = state_13704__$1;(statearr_13716_13734[2] = null);
(statearr_13716_13734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 11))
{var inst_13694 = (state_13704[2]);var state_13704__$1 = state_13704;var statearr_13717_13735 = state_13704__$1;(statearr_13717_13735[2] = inst_13694);
(statearr_13717_13735[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13721 = [null,null,null,null,null,null,null,null,null];(statearr_13721[0] = state_machine__5507__auto__);
(statearr_13721[1] = 1);
return statearr_13721;
});
var state_machine__5507__auto____1 = (function (state_13704){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13704);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13722){if((e13722 instanceof Object))
{var ex__5510__auto__ = e13722;var statearr_13723_13736 = state_13704;(statearr_13723_13736[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13737 = state_13704;
state_13704 = G__13737;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13704){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13724 = f__5522__auto__.call(null);(statearr_13724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13725);
return statearr_13724;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13889){var state_val_13890 = (state_13889[1]);if((state_val_13890 === 1))
{var state_13889__$1 = state_13889;var statearr_13891_13928 = state_13889__$1;(statearr_13891_13928[2] = null);
(statearr_13891_13928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 2))
{var state_13889__$1 = state_13889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13889__$1,4,in$);
} else
{if((state_val_13890 === 3))
{var inst_13887 = (state_13889[2]);var state_13889__$1 = state_13889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13889__$1,inst_13887);
} else
{if((state_val_13890 === 4))
{var inst_13835 = (state_13889[7]);var inst_13835__$1 = (state_13889[2]);var inst_13836 = (inst_13835__$1 == null);var state_13889__$1 = (function (){var statearr_13892 = state_13889;(statearr_13892[7] = inst_13835__$1);
return statearr_13892;
})();if(cljs.core.truth_(inst_13836))
{var statearr_13893_13929 = state_13889__$1;(statearr_13893_13929[1] = 5);
} else
{var statearr_13894_13930 = state_13889__$1;(statearr_13894_13930[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 5))
{var inst_13838 = cljs.core.async.close_BANG_.call(null,out);var state_13889__$1 = state_13889;var statearr_13895_13931 = state_13889__$1;(statearr_13895_13931[2] = inst_13838);
(statearr_13895_13931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 6))
{var inst_13835 = (state_13889[7]);var inst_13840 = f.call(null,inst_13835);var inst_13845 = cljs.core.seq.call(null,inst_13840);var inst_13846 = inst_13845;var inst_13847 = null;var inst_13848 = 0;var inst_13849 = 0;var state_13889__$1 = (function (){var statearr_13896 = state_13889;(statearr_13896[8] = inst_13848);
(statearr_13896[9] = inst_13847);
(statearr_13896[10] = inst_13849);
(statearr_13896[11] = inst_13846);
return statearr_13896;
})();var statearr_13897_13932 = state_13889__$1;(statearr_13897_13932[2] = null);
(statearr_13897_13932[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 7))
{var inst_13885 = (state_13889[2]);var state_13889__$1 = state_13889;var statearr_13898_13933 = state_13889__$1;(statearr_13898_13933[2] = inst_13885);
(statearr_13898_13933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 8))
{var inst_13848 = (state_13889[8]);var inst_13849 = (state_13889[10]);var inst_13851 = (inst_13849 < inst_13848);var inst_13852 = inst_13851;var state_13889__$1 = state_13889;if(cljs.core.truth_(inst_13852))
{var statearr_13899_13934 = state_13889__$1;(statearr_13899_13934[1] = 10);
} else
{var statearr_13900_13935 = state_13889__$1;(statearr_13900_13935[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 9))
{var inst_13882 = (state_13889[2]);var state_13889__$1 = (function (){var statearr_13901 = state_13889;(statearr_13901[12] = inst_13882);
return statearr_13901;
})();var statearr_13902_13936 = state_13889__$1;(statearr_13902_13936[2] = null);
(statearr_13902_13936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 10))
{var inst_13847 = (state_13889[9]);var inst_13849 = (state_13889[10]);var inst_13854 = cljs.core._nth.call(null,inst_13847,inst_13849);var state_13889__$1 = state_13889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13889__$1,13,out,inst_13854);
} else
{if((state_val_13890 === 11))
{var inst_13860 = (state_13889[13]);var inst_13846 = (state_13889[11]);var inst_13860__$1 = cljs.core.seq.call(null,inst_13846);var state_13889__$1 = (function (){var statearr_13906 = state_13889;(statearr_13906[13] = inst_13860__$1);
return statearr_13906;
})();if(inst_13860__$1)
{var statearr_13907_13937 = state_13889__$1;(statearr_13907_13937[1] = 14);
} else
{var statearr_13908_13938 = state_13889__$1;(statearr_13908_13938[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 12))
{var inst_13880 = (state_13889[2]);var state_13889__$1 = state_13889;var statearr_13909_13939 = state_13889__$1;(statearr_13909_13939[2] = inst_13880);
(statearr_13909_13939[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 13))
{var inst_13848 = (state_13889[8]);var inst_13847 = (state_13889[9]);var inst_13849 = (state_13889[10]);var inst_13846 = (state_13889[11]);var inst_13856 = (state_13889[2]);var inst_13857 = (inst_13849 + 1);var tmp13903 = inst_13848;var tmp13904 = inst_13847;var tmp13905 = inst_13846;var inst_13846__$1 = tmp13905;var inst_13847__$1 = tmp13904;var inst_13848__$1 = tmp13903;var inst_13849__$1 = inst_13857;var state_13889__$1 = (function (){var statearr_13910 = state_13889;(statearr_13910[8] = inst_13848__$1);
(statearr_13910[9] = inst_13847__$1);
(statearr_13910[10] = inst_13849__$1);
(statearr_13910[14] = inst_13856);
(statearr_13910[11] = inst_13846__$1);
return statearr_13910;
})();var statearr_13911_13940 = state_13889__$1;(statearr_13911_13940[2] = null);
(statearr_13911_13940[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 14))
{var inst_13860 = (state_13889[13]);var inst_13862 = cljs.core.chunked_seq_QMARK_.call(null,inst_13860);var state_13889__$1 = state_13889;if(inst_13862)
{var statearr_13912_13941 = state_13889__$1;(statearr_13912_13941[1] = 17);
} else
{var statearr_13913_13942 = state_13889__$1;(statearr_13913_13942[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 15))
{var state_13889__$1 = state_13889;var statearr_13914_13943 = state_13889__$1;(statearr_13914_13943[2] = null);
(statearr_13914_13943[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 16))
{var inst_13878 = (state_13889[2]);var state_13889__$1 = state_13889;var statearr_13915_13944 = state_13889__$1;(statearr_13915_13944[2] = inst_13878);
(statearr_13915_13944[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 17))
{var inst_13860 = (state_13889[13]);var inst_13864 = cljs.core.chunk_first.call(null,inst_13860);var inst_13865 = cljs.core.chunk_rest.call(null,inst_13860);var inst_13866 = cljs.core.count.call(null,inst_13864);var inst_13846 = inst_13865;var inst_13847 = inst_13864;var inst_13848 = inst_13866;var inst_13849 = 0;var state_13889__$1 = (function (){var statearr_13916 = state_13889;(statearr_13916[8] = inst_13848);
(statearr_13916[9] = inst_13847);
(statearr_13916[10] = inst_13849);
(statearr_13916[11] = inst_13846);
return statearr_13916;
})();var statearr_13917_13945 = state_13889__$1;(statearr_13917_13945[2] = null);
(statearr_13917_13945[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 18))
{var inst_13860 = (state_13889[13]);var inst_13869 = cljs.core.first.call(null,inst_13860);var state_13889__$1 = state_13889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13889__$1,20,out,inst_13869);
} else
{if((state_val_13890 === 19))
{var inst_13875 = (state_13889[2]);var state_13889__$1 = state_13889;var statearr_13918_13946 = state_13889__$1;(statearr_13918_13946[2] = inst_13875);
(statearr_13918_13946[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13890 === 20))
{var inst_13860 = (state_13889[13]);var inst_13871 = (state_13889[2]);var inst_13872 = cljs.core.next.call(null,inst_13860);var inst_13846 = inst_13872;var inst_13847 = null;var inst_13848 = 0;var inst_13849 = 0;var state_13889__$1 = (function (){var statearr_13919 = state_13889;(statearr_13919[8] = inst_13848);
(statearr_13919[15] = inst_13871);
(statearr_13919[9] = inst_13847);
(statearr_13919[10] = inst_13849);
(statearr_13919[11] = inst_13846);
return statearr_13919;
})();var statearr_13920_13947 = state_13889__$1;(statearr_13920_13947[2] = null);
(statearr_13920_13947[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13924[0] = state_machine__5507__auto__);
(statearr_13924[1] = 1);
return statearr_13924;
});
var state_machine__5507__auto____1 = (function (state_13889){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13889);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13925){if((e13925 instanceof Object))
{var ex__5510__auto__ = e13925;var statearr_13926_13948 = state_13889;(statearr_13926_13948[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13949 = state_13889;
state_13889 = G__13949;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13889){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13927 = f__5522__auto__.call(null);(statearr_13927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13927;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14030 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14009){var state_val_14010 = (state_14009[1]);if((state_val_14010 === 1))
{var state_14009__$1 = state_14009;var statearr_14011_14031 = state_14009__$1;(statearr_14011_14031[2] = null);
(statearr_14011_14031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14010 === 2))
{var state_14009__$1 = state_14009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14009__$1,4,from);
} else
{if((state_val_14010 === 3))
{var inst_14007 = (state_14009[2]);var state_14009__$1 = state_14009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14009__$1,inst_14007);
} else
{if((state_val_14010 === 4))
{var inst_13992 = (state_14009[7]);var inst_13992__$1 = (state_14009[2]);var inst_13993 = (inst_13992__$1 == null);var state_14009__$1 = (function (){var statearr_14012 = state_14009;(statearr_14012[7] = inst_13992__$1);
return statearr_14012;
})();if(cljs.core.truth_(inst_13993))
{var statearr_14013_14032 = state_14009__$1;(statearr_14013_14032[1] = 5);
} else
{var statearr_14014_14033 = state_14009__$1;(statearr_14014_14033[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14010 === 5))
{var state_14009__$1 = state_14009;if(cljs.core.truth_(close_QMARK_))
{var statearr_14015_14034 = state_14009__$1;(statearr_14015_14034[1] = 8);
} else
{var statearr_14016_14035 = state_14009__$1;(statearr_14016_14035[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14010 === 6))
{var inst_13992 = (state_14009[7]);var state_14009__$1 = state_14009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14009__$1,11,to,inst_13992);
} else
{if((state_val_14010 === 7))
{var inst_14005 = (state_14009[2]);var state_14009__$1 = state_14009;var statearr_14017_14036 = state_14009__$1;(statearr_14017_14036[2] = inst_14005);
(statearr_14017_14036[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14010 === 8))
{var inst_13996 = cljs.core.async.close_BANG_.call(null,to);var state_14009__$1 = state_14009;var statearr_14018_14037 = state_14009__$1;(statearr_14018_14037[2] = inst_13996);
(statearr_14018_14037[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14010 === 9))
{var state_14009__$1 = state_14009;var statearr_14019_14038 = state_14009__$1;(statearr_14019_14038[2] = null);
(statearr_14019_14038[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14010 === 10))
{var inst_13999 = (state_14009[2]);var state_14009__$1 = state_14009;var statearr_14020_14039 = state_14009__$1;(statearr_14020_14039[2] = inst_13999);
(statearr_14020_14039[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14010 === 11))
{var inst_14002 = (state_14009[2]);var state_14009__$1 = (function (){var statearr_14021 = state_14009;(statearr_14021[8] = inst_14002);
return statearr_14021;
})();var statearr_14022_14040 = state_14009__$1;(statearr_14022_14040[2] = null);
(statearr_14022_14040[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14026 = [null,null,null,null,null,null,null,null,null];(statearr_14026[0] = state_machine__5507__auto__);
(statearr_14026[1] = 1);
return statearr_14026;
});
var state_machine__5507__auto____1 = (function (state_14009){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14009);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14027){if((e14027 instanceof Object))
{var ex__5510__auto__ = e14027;var statearr_14028_14041 = state_14009;(statearr_14028_14041[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14042 = state_14009;
state_14009 = G__14042;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14009){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14029 = f__5522__auto__.call(null);(statearr_14029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14030);
return statearr_14029;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14129 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14107){var state_val_14108 = (state_14107[1]);if((state_val_14108 === 1))
{var state_14107__$1 = state_14107;var statearr_14109_14130 = state_14107__$1;(statearr_14109_14130[2] = null);
(statearr_14109_14130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14108 === 2))
{var state_14107__$1 = state_14107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14107__$1,4,ch);
} else
{if((state_val_14108 === 3))
{var inst_14105 = (state_14107[2]);var state_14107__$1 = state_14107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14107__$1,inst_14105);
} else
{if((state_val_14108 === 4))
{var inst_14088 = (state_14107[7]);var inst_14088__$1 = (state_14107[2]);var inst_14089 = (inst_14088__$1 == null);var state_14107__$1 = (function (){var statearr_14110 = state_14107;(statearr_14110[7] = inst_14088__$1);
return statearr_14110;
})();if(cljs.core.truth_(inst_14089))
{var statearr_14111_14131 = state_14107__$1;(statearr_14111_14131[1] = 5);
} else
{var statearr_14112_14132 = state_14107__$1;(statearr_14112_14132[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14108 === 5))
{var inst_14091 = cljs.core.async.close_BANG_.call(null,tc);var inst_14092 = cljs.core.async.close_BANG_.call(null,fc);var state_14107__$1 = (function (){var statearr_14113 = state_14107;(statearr_14113[8] = inst_14091);
return statearr_14113;
})();var statearr_14114_14133 = state_14107__$1;(statearr_14114_14133[2] = inst_14092);
(statearr_14114_14133[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14108 === 6))
{var inst_14088 = (state_14107[7]);var inst_14094 = p.call(null,inst_14088);var state_14107__$1 = state_14107;if(cljs.core.truth_(inst_14094))
{var statearr_14115_14134 = state_14107__$1;(statearr_14115_14134[1] = 9);
} else
{var statearr_14116_14135 = state_14107__$1;(statearr_14116_14135[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14108 === 7))
{var inst_14103 = (state_14107[2]);var state_14107__$1 = state_14107;var statearr_14117_14136 = state_14107__$1;(statearr_14117_14136[2] = inst_14103);
(statearr_14117_14136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14108 === 8))
{var inst_14100 = (state_14107[2]);var state_14107__$1 = (function (){var statearr_14118 = state_14107;(statearr_14118[9] = inst_14100);
return statearr_14118;
})();var statearr_14119_14137 = state_14107__$1;(statearr_14119_14137[2] = null);
(statearr_14119_14137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14108 === 9))
{var state_14107__$1 = state_14107;var statearr_14120_14138 = state_14107__$1;(statearr_14120_14138[2] = tc);
(statearr_14120_14138[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14108 === 10))
{var state_14107__$1 = state_14107;var statearr_14121_14139 = state_14107__$1;(statearr_14121_14139[2] = fc);
(statearr_14121_14139[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14108 === 11))
{var inst_14088 = (state_14107[7]);var inst_14098 = (state_14107[2]);var state_14107__$1 = state_14107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14107__$1,8,inst_14098,inst_14088);
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
var state_machine__5507__auto____0 = (function (){var statearr_14125 = [null,null,null,null,null,null,null,null,null,null];(statearr_14125[0] = state_machine__5507__auto__);
(statearr_14125[1] = 1);
return statearr_14125;
});
var state_machine__5507__auto____1 = (function (state_14107){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14107);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14126){if((e14126 instanceof Object))
{var ex__5510__auto__ = e14126;var statearr_14127_14140 = state_14107;(statearr_14127_14140[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14107);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14141 = state_14107;
state_14107 = G__14141;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14107){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14128 = f__5522__auto__.call(null);(statearr_14128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14129);
return statearr_14128;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14188){var state_val_14189 = (state_14188[1]);if((state_val_14189 === 7))
{var inst_14184 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14190_14206 = state_14188__$1;(statearr_14190_14206[2] = inst_14184);
(statearr_14190_14206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 6))
{var inst_14177 = (state_14188[7]);var inst_14174 = (state_14188[8]);var inst_14181 = f.call(null,inst_14174,inst_14177);var inst_14174__$1 = inst_14181;var state_14188__$1 = (function (){var statearr_14191 = state_14188;(statearr_14191[8] = inst_14174__$1);
return statearr_14191;
})();var statearr_14192_14207 = state_14188__$1;(statearr_14192_14207[2] = null);
(statearr_14192_14207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 5))
{var inst_14174 = (state_14188[8]);var state_14188__$1 = state_14188;var statearr_14193_14208 = state_14188__$1;(statearr_14193_14208[2] = inst_14174);
(statearr_14193_14208[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 4))
{var inst_14177 = (state_14188[7]);var inst_14177__$1 = (state_14188[2]);var inst_14178 = (inst_14177__$1 == null);var state_14188__$1 = (function (){var statearr_14194 = state_14188;(statearr_14194[7] = inst_14177__$1);
return statearr_14194;
})();if(cljs.core.truth_(inst_14178))
{var statearr_14195_14209 = state_14188__$1;(statearr_14195_14209[1] = 5);
} else
{var statearr_14196_14210 = state_14188__$1;(statearr_14196_14210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 3))
{var inst_14186 = (state_14188[2]);var state_14188__$1 = state_14188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14188__$1,inst_14186);
} else
{if((state_val_14189 === 2))
{var state_14188__$1 = state_14188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14188__$1,4,ch);
} else
{if((state_val_14189 === 1))
{var inst_14174 = init;var state_14188__$1 = (function (){var statearr_14197 = state_14188;(statearr_14197[8] = inst_14174);
return statearr_14197;
})();var statearr_14198_14211 = state_14188__$1;(statearr_14198_14211[2] = null);
(statearr_14198_14211[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14202 = [null,null,null,null,null,null,null,null,null];(statearr_14202[0] = state_machine__5507__auto__);
(statearr_14202[1] = 1);
return statearr_14202;
});
var state_machine__5507__auto____1 = (function (state_14188){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14188);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14203){if((e14203 instanceof Object))
{var ex__5510__auto__ = e14203;var statearr_14204_14212 = state_14188;(statearr_14204_14212[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14213 = state_14188;
state_14188 = G__14213;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14188){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14205 = f__5522__auto__.call(null);(statearr_14205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14205;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14275){var state_val_14276 = (state_14275[1]);if((state_val_14276 === 1))
{var inst_14255 = cljs.core.seq.call(null,coll);var inst_14256 = inst_14255;var state_14275__$1 = (function (){var statearr_14277 = state_14275;(statearr_14277[7] = inst_14256);
return statearr_14277;
})();var statearr_14278_14296 = state_14275__$1;(statearr_14278_14296[2] = null);
(statearr_14278_14296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 2))
{var inst_14256 = (state_14275[7]);var state_14275__$1 = state_14275;if(cljs.core.truth_(inst_14256))
{var statearr_14279_14297 = state_14275__$1;(statearr_14279_14297[1] = 4);
} else
{var statearr_14280_14298 = state_14275__$1;(statearr_14280_14298[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 3))
{var inst_14273 = (state_14275[2]);var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14275__$1,inst_14273);
} else
{if((state_val_14276 === 4))
{var inst_14256 = (state_14275[7]);var inst_14259 = cljs.core.first.call(null,inst_14256);var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14275__$1,7,ch,inst_14259);
} else
{if((state_val_14276 === 5))
{var state_14275__$1 = state_14275;if(cljs.core.truth_(close_QMARK_))
{var statearr_14281_14299 = state_14275__$1;(statearr_14281_14299[1] = 8);
} else
{var statearr_14282_14300 = state_14275__$1;(statearr_14282_14300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 6))
{var inst_14271 = (state_14275[2]);var state_14275__$1 = state_14275;var statearr_14283_14301 = state_14275__$1;(statearr_14283_14301[2] = inst_14271);
(statearr_14283_14301[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 7))
{var inst_14256 = (state_14275[7]);var inst_14261 = (state_14275[2]);var inst_14262 = cljs.core.next.call(null,inst_14256);var inst_14256__$1 = inst_14262;var state_14275__$1 = (function (){var statearr_14284 = state_14275;(statearr_14284[7] = inst_14256__$1);
(statearr_14284[8] = inst_14261);
return statearr_14284;
})();var statearr_14285_14302 = state_14275__$1;(statearr_14285_14302[2] = null);
(statearr_14285_14302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 8))
{var inst_14266 = cljs.core.async.close_BANG_.call(null,ch);var state_14275__$1 = state_14275;var statearr_14286_14303 = state_14275__$1;(statearr_14286_14303[2] = inst_14266);
(statearr_14286_14303[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 9))
{var state_14275__$1 = state_14275;var statearr_14287_14304 = state_14275__$1;(statearr_14287_14304[2] = null);
(statearr_14287_14304[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 10))
{var inst_14269 = (state_14275[2]);var state_14275__$1 = state_14275;var statearr_14288_14305 = state_14275__$1;(statearr_14288_14305[2] = inst_14269);
(statearr_14288_14305[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14292 = [null,null,null,null,null,null,null,null,null];(statearr_14292[0] = state_machine__5507__auto__);
(statearr_14292[1] = 1);
return statearr_14292;
});
var state_machine__5507__auto____1 = (function (state_14275){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14275);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14293){if((e14293 instanceof Object))
{var ex__5510__auto__ = e14293;var statearr_14294_14306 = state_14275;(statearr_14294_14306[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14307 = state_14275;
state_14275 = G__14307;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14275){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14295 = f__5522__auto__.call(null);(statearr_14295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14295;
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
cljs.core.async.Mux = (function (){var obj14309 = {};return obj14309;
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
cljs.core.async.Mult = (function (){var obj14311 = {};return obj14311;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14535 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14535 = (function (cs,ch,mult,meta14536){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14536 = meta14536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14535.cljs$lang$type = true;
cljs.core.async.t14535.cljs$lang$ctorStr = "cljs.core.async/t14535";
cljs.core.async.t14535.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14535");
});})(cs))
;
cljs.core.async.t14535.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14535.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14535.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14535.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14535.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14537){var self__ = this;
var _14537__$1 = this;return self__.meta14536;
});})(cs))
;
cljs.core.async.t14535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14537,meta14536__$1){var self__ = this;
var _14537__$1 = this;return (new cljs.core.async.t14535(self__.cs,self__.ch,self__.mult,meta14536__$1));
});})(cs))
;
cljs.core.async.__GT_t14535 = ((function (cs){
return (function __GT_t14535(cs__$1,ch__$1,mult__$1,meta14536){return (new cljs.core.async.t14535(cs__$1,ch__$1,mult__$1,meta14536));
});})(cs))
;
}
return (new cljs.core.async.t14535(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14672){var state_val_14673 = (state_14672[1]);if((state_val_14673 === 32))
{var inst_14540 = (state_14672[7]);var inst_14616 = (state_14672[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14672,31,Object,null,30);var inst_14623 = cljs.core.async.put_BANG_.call(null,inst_14616,inst_14540,done);var state_14672__$1 = state_14672;var statearr_14674_14759 = state_14672__$1;(statearr_14674_14759[2] = inst_14623);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14672__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 1))
{var state_14672__$1 = state_14672;var statearr_14675_14760 = state_14672__$1;(statearr_14675_14760[2] = null);
(statearr_14675_14760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 33))
{var inst_14629 = (state_14672[9]);var inst_14631 = cljs.core.chunked_seq_QMARK_.call(null,inst_14629);var state_14672__$1 = state_14672;if(inst_14631)
{var statearr_14676_14761 = state_14672__$1;(statearr_14676_14761[1] = 36);
} else
{var statearr_14677_14762 = state_14672__$1;(statearr_14677_14762[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 2))
{var state_14672__$1 = state_14672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14672__$1,4,ch);
} else
{if((state_val_14673 === 34))
{var state_14672__$1 = state_14672;var statearr_14678_14763 = state_14672__$1;(statearr_14678_14763[2] = null);
(statearr_14678_14763[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 3))
{var inst_14670 = (state_14672[2]);var state_14672__$1 = state_14672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14672__$1,inst_14670);
} else
{if((state_val_14673 === 35))
{var inst_14654 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14679_14764 = state_14672__$1;(statearr_14679_14764[2] = inst_14654);
(statearr_14679_14764[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 4))
{var inst_14540 = (state_14672[7]);var inst_14540__$1 = (state_14672[2]);var inst_14541 = (inst_14540__$1 == null);var state_14672__$1 = (function (){var statearr_14680 = state_14672;(statearr_14680[7] = inst_14540__$1);
return statearr_14680;
})();if(cljs.core.truth_(inst_14541))
{var statearr_14681_14765 = state_14672__$1;(statearr_14681_14765[1] = 5);
} else
{var statearr_14682_14766 = state_14672__$1;(statearr_14682_14766[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 36))
{var inst_14629 = (state_14672[9]);var inst_14633 = cljs.core.chunk_first.call(null,inst_14629);var inst_14634 = cljs.core.chunk_rest.call(null,inst_14629);var inst_14635 = cljs.core.count.call(null,inst_14633);var inst_14608 = inst_14634;var inst_14609 = inst_14633;var inst_14610 = inst_14635;var inst_14611 = 0;var state_14672__$1 = (function (){var statearr_14683 = state_14672;(statearr_14683[10] = inst_14611);
(statearr_14683[11] = inst_14610);
(statearr_14683[12] = inst_14609);
(statearr_14683[13] = inst_14608);
return statearr_14683;
})();var statearr_14684_14767 = state_14672__$1;(statearr_14684_14767[2] = null);
(statearr_14684_14767[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 5))
{var inst_14547 = cljs.core.deref.call(null,cs);var inst_14548 = cljs.core.seq.call(null,inst_14547);var inst_14549 = inst_14548;var inst_14550 = null;var inst_14551 = 0;var inst_14552 = 0;var state_14672__$1 = (function (){var statearr_14685 = state_14672;(statearr_14685[14] = inst_14549);
(statearr_14685[15] = inst_14552);
(statearr_14685[16] = inst_14550);
(statearr_14685[17] = inst_14551);
return statearr_14685;
})();var statearr_14686_14768 = state_14672__$1;(statearr_14686_14768[2] = null);
(statearr_14686_14768[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 37))
{var inst_14629 = (state_14672[9]);var inst_14638 = cljs.core.first.call(null,inst_14629);var state_14672__$1 = (function (){var statearr_14687 = state_14672;(statearr_14687[18] = inst_14638);
return statearr_14687;
})();var statearr_14688_14769 = state_14672__$1;(statearr_14688_14769[2] = null);
(statearr_14688_14769[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 6))
{var inst_14600 = (state_14672[19]);var inst_14599 = cljs.core.deref.call(null,cs);var inst_14600__$1 = cljs.core.keys.call(null,inst_14599);var inst_14601 = cljs.core.count.call(null,inst_14600__$1);var inst_14602 = cljs.core.reset_BANG_.call(null,dctr,inst_14601);var inst_14607 = cljs.core.seq.call(null,inst_14600__$1);var inst_14608 = inst_14607;var inst_14609 = null;var inst_14610 = 0;var inst_14611 = 0;var state_14672__$1 = (function (){var statearr_14689 = state_14672;(statearr_14689[20] = inst_14602);
(statearr_14689[10] = inst_14611);
(statearr_14689[11] = inst_14610);
(statearr_14689[19] = inst_14600__$1);
(statearr_14689[12] = inst_14609);
(statearr_14689[13] = inst_14608);
return statearr_14689;
})();var statearr_14690_14770 = state_14672__$1;(statearr_14690_14770[2] = null);
(statearr_14690_14770[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 38))
{var inst_14651 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14691_14771 = state_14672__$1;(statearr_14691_14771[2] = inst_14651);
(statearr_14691_14771[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 7))
{var inst_14668 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14692_14772 = state_14672__$1;(statearr_14692_14772[2] = inst_14668);
(statearr_14692_14772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 39))
{var inst_14629 = (state_14672[9]);var inst_14647 = (state_14672[2]);var inst_14648 = cljs.core.next.call(null,inst_14629);var inst_14608 = inst_14648;var inst_14609 = null;var inst_14610 = 0;var inst_14611 = 0;var state_14672__$1 = (function (){var statearr_14693 = state_14672;(statearr_14693[10] = inst_14611);
(statearr_14693[21] = inst_14647);
(statearr_14693[11] = inst_14610);
(statearr_14693[12] = inst_14609);
(statearr_14693[13] = inst_14608);
return statearr_14693;
})();var statearr_14694_14773 = state_14672__$1;(statearr_14694_14773[2] = null);
(statearr_14694_14773[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 8))
{var inst_14552 = (state_14672[15]);var inst_14551 = (state_14672[17]);var inst_14554 = (inst_14552 < inst_14551);var inst_14555 = inst_14554;var state_14672__$1 = state_14672;if(cljs.core.truth_(inst_14555))
{var statearr_14695_14774 = state_14672__$1;(statearr_14695_14774[1] = 10);
} else
{var statearr_14696_14775 = state_14672__$1;(statearr_14696_14775[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 40))
{var inst_14638 = (state_14672[18]);var inst_14639 = (state_14672[2]);var inst_14640 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14641 = cljs.core.async.untap_STAR_.call(null,m,inst_14638);var state_14672__$1 = (function (){var statearr_14697 = state_14672;(statearr_14697[22] = inst_14640);
(statearr_14697[23] = inst_14639);
return statearr_14697;
})();var statearr_14698_14776 = state_14672__$1;(statearr_14698_14776[2] = inst_14641);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14672__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 9))
{var inst_14597 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14699_14777 = state_14672__$1;(statearr_14699_14777[2] = inst_14597);
(statearr_14699_14777[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 41))
{var inst_14638 = (state_14672[18]);var inst_14540 = (state_14672[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14672,40,Object,null,39);var inst_14645 = cljs.core.async.put_BANG_.call(null,inst_14638,inst_14540,done);var state_14672__$1 = state_14672;var statearr_14700_14778 = state_14672__$1;(statearr_14700_14778[2] = inst_14645);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14672__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 10))
{var inst_14552 = (state_14672[15]);var inst_14550 = (state_14672[16]);var inst_14558 = cljs.core._nth.call(null,inst_14550,inst_14552);var inst_14559 = cljs.core.nth.call(null,inst_14558,0,null);var inst_14560 = cljs.core.nth.call(null,inst_14558,1,null);var state_14672__$1 = (function (){var statearr_14701 = state_14672;(statearr_14701[24] = inst_14559);
return statearr_14701;
})();if(cljs.core.truth_(inst_14560))
{var statearr_14702_14779 = state_14672__$1;(statearr_14702_14779[1] = 13);
} else
{var statearr_14703_14780 = state_14672__$1;(statearr_14703_14780[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 42))
{var state_14672__$1 = state_14672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14672__$1,45,dchan);
} else
{if((state_val_14673 === 11))
{var inst_14569 = (state_14672[25]);var inst_14549 = (state_14672[14]);var inst_14569__$1 = cljs.core.seq.call(null,inst_14549);var state_14672__$1 = (function (){var statearr_14704 = state_14672;(statearr_14704[25] = inst_14569__$1);
return statearr_14704;
})();if(inst_14569__$1)
{var statearr_14705_14781 = state_14672__$1;(statearr_14705_14781[1] = 16);
} else
{var statearr_14706_14782 = state_14672__$1;(statearr_14706_14782[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 43))
{var state_14672__$1 = state_14672;var statearr_14707_14783 = state_14672__$1;(statearr_14707_14783[2] = null);
(statearr_14707_14783[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 12))
{var inst_14595 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14708_14784 = state_14672__$1;(statearr_14708_14784[2] = inst_14595);
(statearr_14708_14784[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 44))
{var inst_14665 = (state_14672[2]);var state_14672__$1 = (function (){var statearr_14709 = state_14672;(statearr_14709[26] = inst_14665);
return statearr_14709;
})();var statearr_14710_14785 = state_14672__$1;(statearr_14710_14785[2] = null);
(statearr_14710_14785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 13))
{var inst_14559 = (state_14672[24]);var inst_14562 = cljs.core.async.close_BANG_.call(null,inst_14559);var state_14672__$1 = state_14672;var statearr_14711_14786 = state_14672__$1;(statearr_14711_14786[2] = inst_14562);
(statearr_14711_14786[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 45))
{var inst_14662 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14715_14787 = state_14672__$1;(statearr_14715_14787[2] = inst_14662);
(statearr_14715_14787[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 14))
{var state_14672__$1 = state_14672;var statearr_14716_14788 = state_14672__$1;(statearr_14716_14788[2] = null);
(statearr_14716_14788[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 15))
{var inst_14549 = (state_14672[14]);var inst_14552 = (state_14672[15]);var inst_14550 = (state_14672[16]);var inst_14551 = (state_14672[17]);var inst_14565 = (state_14672[2]);var inst_14566 = (inst_14552 + 1);var tmp14712 = inst_14549;var tmp14713 = inst_14550;var tmp14714 = inst_14551;var inst_14549__$1 = tmp14712;var inst_14550__$1 = tmp14713;var inst_14551__$1 = tmp14714;var inst_14552__$1 = inst_14566;var state_14672__$1 = (function (){var statearr_14717 = state_14672;(statearr_14717[27] = inst_14565);
(statearr_14717[14] = inst_14549__$1);
(statearr_14717[15] = inst_14552__$1);
(statearr_14717[16] = inst_14550__$1);
(statearr_14717[17] = inst_14551__$1);
return statearr_14717;
})();var statearr_14718_14789 = state_14672__$1;(statearr_14718_14789[2] = null);
(statearr_14718_14789[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 16))
{var inst_14569 = (state_14672[25]);var inst_14571 = cljs.core.chunked_seq_QMARK_.call(null,inst_14569);var state_14672__$1 = state_14672;if(inst_14571)
{var statearr_14719_14790 = state_14672__$1;(statearr_14719_14790[1] = 19);
} else
{var statearr_14720_14791 = state_14672__$1;(statearr_14720_14791[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 17))
{var state_14672__$1 = state_14672;var statearr_14721_14792 = state_14672__$1;(statearr_14721_14792[2] = null);
(statearr_14721_14792[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 18))
{var inst_14593 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14722_14793 = state_14672__$1;(statearr_14722_14793[2] = inst_14593);
(statearr_14722_14793[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 19))
{var inst_14569 = (state_14672[25]);var inst_14573 = cljs.core.chunk_first.call(null,inst_14569);var inst_14574 = cljs.core.chunk_rest.call(null,inst_14569);var inst_14575 = cljs.core.count.call(null,inst_14573);var inst_14549 = inst_14574;var inst_14550 = inst_14573;var inst_14551 = inst_14575;var inst_14552 = 0;var state_14672__$1 = (function (){var statearr_14723 = state_14672;(statearr_14723[14] = inst_14549);
(statearr_14723[15] = inst_14552);
(statearr_14723[16] = inst_14550);
(statearr_14723[17] = inst_14551);
return statearr_14723;
})();var statearr_14724_14794 = state_14672__$1;(statearr_14724_14794[2] = null);
(statearr_14724_14794[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 20))
{var inst_14569 = (state_14672[25]);var inst_14579 = cljs.core.first.call(null,inst_14569);var inst_14580 = cljs.core.nth.call(null,inst_14579,0,null);var inst_14581 = cljs.core.nth.call(null,inst_14579,1,null);var state_14672__$1 = (function (){var statearr_14725 = state_14672;(statearr_14725[28] = inst_14580);
return statearr_14725;
})();if(cljs.core.truth_(inst_14581))
{var statearr_14726_14795 = state_14672__$1;(statearr_14726_14795[1] = 22);
} else
{var statearr_14727_14796 = state_14672__$1;(statearr_14727_14796[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 21))
{var inst_14590 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14728_14797 = state_14672__$1;(statearr_14728_14797[2] = inst_14590);
(statearr_14728_14797[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 22))
{var inst_14580 = (state_14672[28]);var inst_14583 = cljs.core.async.close_BANG_.call(null,inst_14580);var state_14672__$1 = state_14672;var statearr_14729_14798 = state_14672__$1;(statearr_14729_14798[2] = inst_14583);
(statearr_14729_14798[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 23))
{var state_14672__$1 = state_14672;var statearr_14730_14799 = state_14672__$1;(statearr_14730_14799[2] = null);
(statearr_14730_14799[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 24))
{var inst_14569 = (state_14672[25]);var inst_14586 = (state_14672[2]);var inst_14587 = cljs.core.next.call(null,inst_14569);var inst_14549 = inst_14587;var inst_14550 = null;var inst_14551 = 0;var inst_14552 = 0;var state_14672__$1 = (function (){var statearr_14731 = state_14672;(statearr_14731[29] = inst_14586);
(statearr_14731[14] = inst_14549);
(statearr_14731[15] = inst_14552);
(statearr_14731[16] = inst_14550);
(statearr_14731[17] = inst_14551);
return statearr_14731;
})();var statearr_14732_14800 = state_14672__$1;(statearr_14732_14800[2] = null);
(statearr_14732_14800[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 25))
{var inst_14611 = (state_14672[10]);var inst_14610 = (state_14672[11]);var inst_14613 = (inst_14611 < inst_14610);var inst_14614 = inst_14613;var state_14672__$1 = state_14672;if(cljs.core.truth_(inst_14614))
{var statearr_14733_14801 = state_14672__$1;(statearr_14733_14801[1] = 27);
} else
{var statearr_14734_14802 = state_14672__$1;(statearr_14734_14802[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 26))
{var inst_14600 = (state_14672[19]);var inst_14658 = (state_14672[2]);var inst_14659 = cljs.core.seq.call(null,inst_14600);var state_14672__$1 = (function (){var statearr_14735 = state_14672;(statearr_14735[30] = inst_14658);
return statearr_14735;
})();if(inst_14659)
{var statearr_14736_14803 = state_14672__$1;(statearr_14736_14803[1] = 42);
} else
{var statearr_14737_14804 = state_14672__$1;(statearr_14737_14804[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 27))
{var inst_14611 = (state_14672[10]);var inst_14609 = (state_14672[12]);var inst_14616 = cljs.core._nth.call(null,inst_14609,inst_14611);var state_14672__$1 = (function (){var statearr_14738 = state_14672;(statearr_14738[8] = inst_14616);
return statearr_14738;
})();var statearr_14739_14805 = state_14672__$1;(statearr_14739_14805[2] = null);
(statearr_14739_14805[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 28))
{var inst_14629 = (state_14672[9]);var inst_14608 = (state_14672[13]);var inst_14629__$1 = cljs.core.seq.call(null,inst_14608);var state_14672__$1 = (function (){var statearr_14743 = state_14672;(statearr_14743[9] = inst_14629__$1);
return statearr_14743;
})();if(inst_14629__$1)
{var statearr_14744_14806 = state_14672__$1;(statearr_14744_14806[1] = 33);
} else
{var statearr_14745_14807 = state_14672__$1;(statearr_14745_14807[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 29))
{var inst_14656 = (state_14672[2]);var state_14672__$1 = state_14672;var statearr_14746_14808 = state_14672__$1;(statearr_14746_14808[2] = inst_14656);
(statearr_14746_14808[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 30))
{var inst_14611 = (state_14672[10]);var inst_14610 = (state_14672[11]);var inst_14609 = (state_14672[12]);var inst_14608 = (state_14672[13]);var inst_14625 = (state_14672[2]);var inst_14626 = (inst_14611 + 1);var tmp14740 = inst_14610;var tmp14741 = inst_14609;var tmp14742 = inst_14608;var inst_14608__$1 = tmp14742;var inst_14609__$1 = tmp14741;var inst_14610__$1 = tmp14740;var inst_14611__$1 = inst_14626;var state_14672__$1 = (function (){var statearr_14747 = state_14672;(statearr_14747[10] = inst_14611__$1);
(statearr_14747[11] = inst_14610__$1);
(statearr_14747[31] = inst_14625);
(statearr_14747[12] = inst_14609__$1);
(statearr_14747[13] = inst_14608__$1);
return statearr_14747;
})();var statearr_14748_14809 = state_14672__$1;(statearr_14748_14809[2] = null);
(statearr_14748_14809[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14673 === 31))
{var inst_14616 = (state_14672[8]);var inst_14617 = (state_14672[2]);var inst_14618 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14619 = cljs.core.async.untap_STAR_.call(null,m,inst_14616);var state_14672__$1 = (function (){var statearr_14749 = state_14672;(statearr_14749[32] = inst_14618);
(statearr_14749[33] = inst_14617);
return statearr_14749;
})();var statearr_14750_14810 = state_14672__$1;(statearr_14750_14810[2] = inst_14619);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14672__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14754[0] = state_machine__5507__auto__);
(statearr_14754[1] = 1);
return statearr_14754;
});
var state_machine__5507__auto____1 = (function (state_14672){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14672);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14755){if((e14755 instanceof Object))
{var ex__5510__auto__ = e14755;var statearr_14756_14811 = state_14672;(statearr_14756_14811[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14812 = state_14672;
state_14672 = G__14812;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14672){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14757 = f__5522__auto__.call(null);(statearr_14757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14758);
return statearr_14757;
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
cljs.core.async.Mix = (function (){var obj14814 = {};return obj14814;
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
;var m = (function (){if(typeof cljs.core.async.t14924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14924 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14925){
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
this.meta14925 = meta14925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14924.cljs$lang$type = true;
cljs.core.async.t14924.cljs$lang$ctorStr = "cljs.core.async/t14924";
cljs.core.async.t14924.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14924");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14924.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14926){var self__ = this;
var _14926__$1 = this;return self__.meta14925;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14926,meta14925__$1){var self__ = this;
var _14926__$1 = this;return (new cljs.core.async.t14924(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14925__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14924 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14924(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14925){return (new cljs.core.async.t14924(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14925));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14924(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14991){var state_val_14992 = (state_14991[1]);if((state_val_14992 === 1))
{var inst_14930 = (state_14991[7]);var inst_14930__$1 = calc_state.call(null);var inst_14931 = cljs.core.seq_QMARK_.call(null,inst_14930__$1);var state_14991__$1 = (function (){var statearr_14993 = state_14991;(statearr_14993[7] = inst_14930__$1);
return statearr_14993;
})();if(inst_14931)
{var statearr_14994_15034 = state_14991__$1;(statearr_14994_15034[1] = 2);
} else
{var statearr_14995_15035 = state_14991__$1;(statearr_14995_15035[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 2))
{var inst_14930 = (state_14991[7]);var inst_14933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14930);var state_14991__$1 = state_14991;var statearr_14996_15036 = state_14991__$1;(statearr_14996_15036[2] = inst_14933);
(statearr_14996_15036[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 3))
{var inst_14930 = (state_14991[7]);var state_14991__$1 = state_14991;var statearr_14997_15037 = state_14991__$1;(statearr_14997_15037[2] = inst_14930);
(statearr_14997_15037[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 4))
{var inst_14930 = (state_14991[7]);var inst_14936 = (state_14991[2]);var inst_14937 = cljs.core.get.call(null,inst_14936,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14938 = cljs.core.get.call(null,inst_14936,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14939 = cljs.core.get.call(null,inst_14936,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14940 = inst_14930;var state_14991__$1 = (function (){var statearr_14998 = state_14991;(statearr_14998[8] = inst_14937);
(statearr_14998[9] = inst_14939);
(statearr_14998[10] = inst_14938);
(statearr_14998[11] = inst_14940);
return statearr_14998;
})();var statearr_14999_15038 = state_14991__$1;(statearr_14999_15038[2] = null);
(statearr_14999_15038[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 5))
{var inst_14940 = (state_14991[11]);var inst_14943 = cljs.core.seq_QMARK_.call(null,inst_14940);var state_14991__$1 = state_14991;if(inst_14943)
{var statearr_15000_15039 = state_14991__$1;(statearr_15000_15039[1] = 7);
} else
{var statearr_15001_15040 = state_14991__$1;(statearr_15001_15040[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 6))
{var inst_14989 = (state_14991[2]);var state_14991__$1 = state_14991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14991__$1,inst_14989);
} else
{if((state_val_14992 === 7))
{var inst_14940 = (state_14991[11]);var inst_14945 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14940);var state_14991__$1 = state_14991;var statearr_15002_15041 = state_14991__$1;(statearr_15002_15041[2] = inst_14945);
(statearr_15002_15041[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 8))
{var inst_14940 = (state_14991[11]);var state_14991__$1 = state_14991;var statearr_15003_15042 = state_14991__$1;(statearr_15003_15042[2] = inst_14940);
(statearr_15003_15042[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 9))
{var inst_14948 = (state_14991[12]);var inst_14948__$1 = (state_14991[2]);var inst_14949 = cljs.core.get.call(null,inst_14948__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14950 = cljs.core.get.call(null,inst_14948__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14951 = cljs.core.get.call(null,inst_14948__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14991__$1 = (function (){var statearr_15004 = state_14991;(statearr_15004[12] = inst_14948__$1);
(statearr_15004[13] = inst_14951);
(statearr_15004[14] = inst_14950);
return statearr_15004;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14991__$1,10,inst_14949);
} else
{if((state_val_14992 === 10))
{var inst_14955 = (state_14991[15]);var inst_14956 = (state_14991[16]);var inst_14954 = (state_14991[2]);var inst_14955__$1 = cljs.core.nth.call(null,inst_14954,0,null);var inst_14956__$1 = cljs.core.nth.call(null,inst_14954,1,null);var inst_14957 = (inst_14955__$1 == null);var inst_14958 = cljs.core._EQ_.call(null,inst_14956__$1,change);var inst_14959 = (inst_14957) || (inst_14958);var state_14991__$1 = (function (){var statearr_15005 = state_14991;(statearr_15005[15] = inst_14955__$1);
(statearr_15005[16] = inst_14956__$1);
return statearr_15005;
})();if(cljs.core.truth_(inst_14959))
{var statearr_15006_15043 = state_14991__$1;(statearr_15006_15043[1] = 11);
} else
{var statearr_15007_15044 = state_14991__$1;(statearr_15007_15044[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 11))
{var inst_14955 = (state_14991[15]);var inst_14961 = (inst_14955 == null);var state_14991__$1 = state_14991;if(cljs.core.truth_(inst_14961))
{var statearr_15008_15045 = state_14991__$1;(statearr_15008_15045[1] = 14);
} else
{var statearr_15009_15046 = state_14991__$1;(statearr_15009_15046[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 12))
{var inst_14970 = (state_14991[17]);var inst_14956 = (state_14991[16]);var inst_14951 = (state_14991[13]);var inst_14970__$1 = inst_14951.call(null,inst_14956);var state_14991__$1 = (function (){var statearr_15010 = state_14991;(statearr_15010[17] = inst_14970__$1);
return statearr_15010;
})();if(cljs.core.truth_(inst_14970__$1))
{var statearr_15011_15047 = state_14991__$1;(statearr_15011_15047[1] = 17);
} else
{var statearr_15012_15048 = state_14991__$1;(statearr_15012_15048[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 13))
{var inst_14987 = (state_14991[2]);var state_14991__$1 = state_14991;var statearr_15013_15049 = state_14991__$1;(statearr_15013_15049[2] = inst_14987);
(statearr_15013_15049[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 14))
{var inst_14956 = (state_14991[16]);var inst_14963 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14956);var state_14991__$1 = state_14991;var statearr_15014_15050 = state_14991__$1;(statearr_15014_15050[2] = inst_14963);
(statearr_15014_15050[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 15))
{var state_14991__$1 = state_14991;var statearr_15015_15051 = state_14991__$1;(statearr_15015_15051[2] = null);
(statearr_15015_15051[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 16))
{var inst_14966 = (state_14991[2]);var inst_14967 = calc_state.call(null);var inst_14940 = inst_14967;var state_14991__$1 = (function (){var statearr_15016 = state_14991;(statearr_15016[18] = inst_14966);
(statearr_15016[11] = inst_14940);
return statearr_15016;
})();var statearr_15017_15052 = state_14991__$1;(statearr_15017_15052[2] = null);
(statearr_15017_15052[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 17))
{var inst_14970 = (state_14991[17]);var state_14991__$1 = state_14991;var statearr_15018_15053 = state_14991__$1;(statearr_15018_15053[2] = inst_14970);
(statearr_15018_15053[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 18))
{var inst_14956 = (state_14991[16]);var inst_14951 = (state_14991[13]);var inst_14950 = (state_14991[14]);var inst_14973 = cljs.core.empty_QMARK_.call(null,inst_14951);var inst_14974 = inst_14950.call(null,inst_14956);var inst_14975 = cljs.core.not.call(null,inst_14974);var inst_14976 = (inst_14973) && (inst_14975);var state_14991__$1 = state_14991;var statearr_15019_15054 = state_14991__$1;(statearr_15019_15054[2] = inst_14976);
(statearr_15019_15054[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 19))
{var inst_14978 = (state_14991[2]);var state_14991__$1 = state_14991;if(cljs.core.truth_(inst_14978))
{var statearr_15020_15055 = state_14991__$1;(statearr_15020_15055[1] = 20);
} else
{var statearr_15021_15056 = state_14991__$1;(statearr_15021_15056[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 20))
{var inst_14955 = (state_14991[15]);var state_14991__$1 = state_14991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14991__$1,23,out,inst_14955);
} else
{if((state_val_14992 === 21))
{var state_14991__$1 = state_14991;var statearr_15022_15057 = state_14991__$1;(statearr_15022_15057[2] = null);
(statearr_15022_15057[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 22))
{var inst_14948 = (state_14991[12]);var inst_14984 = (state_14991[2]);var inst_14940 = inst_14948;var state_14991__$1 = (function (){var statearr_15023 = state_14991;(statearr_15023[11] = inst_14940);
(statearr_15023[19] = inst_14984);
return statearr_15023;
})();var statearr_15024_15058 = state_14991__$1;(statearr_15024_15058[2] = null);
(statearr_15024_15058[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14992 === 23))
{var inst_14981 = (state_14991[2]);var state_14991__$1 = state_14991;var statearr_15025_15059 = state_14991__$1;(statearr_15025_15059[2] = inst_14981);
(statearr_15025_15059[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15029[0] = state_machine__5507__auto__);
(statearr_15029[1] = 1);
return statearr_15029;
});
var state_machine__5507__auto____1 = (function (state_14991){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15030){if((e15030 instanceof Object))
{var ex__5510__auto__ = e15030;var statearr_15031_15060 = state_14991;(statearr_15031_15060[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15061 = state_14991;
state_14991 = G__15061;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14991){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15032 = f__5522__auto__.call(null);(statearr_15032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15033);
return statearr_15032;
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
cljs.core.async.Pub = (function (){var obj15063 = {};return obj15063;
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
return (function (p1__15064_SHARP_){if(cljs.core.truth_(p1__15064_SHARP_.call(null,topic)))
{return p1__15064_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15064_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15189 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15189 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15190){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15190 = meta15190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15189.cljs$lang$type = true;
cljs.core.async.t15189.cljs$lang$ctorStr = "cljs.core.async/t15189";
cljs.core.async.t15189.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15189");
});})(mults,ensure_mult))
;
cljs.core.async.t15189.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15189.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15189.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15189.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15191){var self__ = this;
var _15191__$1 = this;return self__.meta15190;
});})(mults,ensure_mult))
;
cljs.core.async.t15189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15191,meta15190__$1){var self__ = this;
var _15191__$1 = this;return (new cljs.core.async.t15189(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15190__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15189 = ((function (mults,ensure_mult){
return (function __GT_t15189(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15190){return (new cljs.core.async.t15189(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15190));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15189(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15313 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15265){var state_val_15266 = (state_15265[1]);if((state_val_15266 === 1))
{var state_15265__$1 = state_15265;var statearr_15267_15314 = state_15265__$1;(statearr_15267_15314[2] = null);
(statearr_15267_15314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 2))
{var state_15265__$1 = state_15265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15265__$1,4,ch);
} else
{if((state_val_15266 === 3))
{var inst_15263 = (state_15265[2]);var state_15265__$1 = state_15265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15265__$1,inst_15263);
} else
{if((state_val_15266 === 4))
{var inst_15194 = (state_15265[7]);var inst_15194__$1 = (state_15265[2]);var inst_15195 = (inst_15194__$1 == null);var state_15265__$1 = (function (){var statearr_15268 = state_15265;(statearr_15268[7] = inst_15194__$1);
return statearr_15268;
})();if(cljs.core.truth_(inst_15195))
{var statearr_15269_15315 = state_15265__$1;(statearr_15269_15315[1] = 5);
} else
{var statearr_15270_15316 = state_15265__$1;(statearr_15270_15316[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 5))
{var inst_15201 = cljs.core.deref.call(null,mults);var inst_15202 = cljs.core.vals.call(null,inst_15201);var inst_15203 = cljs.core.seq.call(null,inst_15202);var inst_15204 = inst_15203;var inst_15205 = null;var inst_15206 = 0;var inst_15207 = 0;var state_15265__$1 = (function (){var statearr_15271 = state_15265;(statearr_15271[8] = inst_15207);
(statearr_15271[9] = inst_15206);
(statearr_15271[10] = inst_15205);
(statearr_15271[11] = inst_15204);
return statearr_15271;
})();var statearr_15272_15317 = state_15265__$1;(statearr_15272_15317[2] = null);
(statearr_15272_15317[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 6))
{var inst_15194 = (state_15265[7]);var inst_15244 = (state_15265[12]);var inst_15242 = (state_15265[13]);var inst_15242__$1 = topic_fn.call(null,inst_15194);var inst_15243 = cljs.core.deref.call(null,mults);var inst_15244__$1 = cljs.core.get.call(null,inst_15243,inst_15242__$1);var state_15265__$1 = (function (){var statearr_15273 = state_15265;(statearr_15273[12] = inst_15244__$1);
(statearr_15273[13] = inst_15242__$1);
return statearr_15273;
})();if(cljs.core.truth_(inst_15244__$1))
{var statearr_15274_15318 = state_15265__$1;(statearr_15274_15318[1] = 19);
} else
{var statearr_15275_15319 = state_15265__$1;(statearr_15275_15319[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 7))
{var inst_15261 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15276_15320 = state_15265__$1;(statearr_15276_15320[2] = inst_15261);
(statearr_15276_15320[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 8))
{var inst_15207 = (state_15265[8]);var inst_15206 = (state_15265[9]);var inst_15209 = (inst_15207 < inst_15206);var inst_15210 = inst_15209;var state_15265__$1 = state_15265;if(cljs.core.truth_(inst_15210))
{var statearr_15280_15321 = state_15265__$1;(statearr_15280_15321[1] = 10);
} else
{var statearr_15281_15322 = state_15265__$1;(statearr_15281_15322[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 9))
{var inst_15240 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15282_15323 = state_15265__$1;(statearr_15282_15323[2] = inst_15240);
(statearr_15282_15323[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 10))
{var inst_15207 = (state_15265[8]);var inst_15206 = (state_15265[9]);var inst_15205 = (state_15265[10]);var inst_15204 = (state_15265[11]);var inst_15212 = cljs.core._nth.call(null,inst_15205,inst_15207);var inst_15213 = cljs.core.async.muxch_STAR_.call(null,inst_15212);var inst_15214 = cljs.core.async.close_BANG_.call(null,inst_15213);var inst_15215 = (inst_15207 + 1);var tmp15277 = inst_15206;var tmp15278 = inst_15205;var tmp15279 = inst_15204;var inst_15204__$1 = tmp15279;var inst_15205__$1 = tmp15278;var inst_15206__$1 = tmp15277;var inst_15207__$1 = inst_15215;var state_15265__$1 = (function (){var statearr_15283 = state_15265;(statearr_15283[8] = inst_15207__$1);
(statearr_15283[14] = inst_15214);
(statearr_15283[9] = inst_15206__$1);
(statearr_15283[10] = inst_15205__$1);
(statearr_15283[11] = inst_15204__$1);
return statearr_15283;
})();var statearr_15284_15324 = state_15265__$1;(statearr_15284_15324[2] = null);
(statearr_15284_15324[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 11))
{var inst_15218 = (state_15265[15]);var inst_15204 = (state_15265[11]);var inst_15218__$1 = cljs.core.seq.call(null,inst_15204);var state_15265__$1 = (function (){var statearr_15285 = state_15265;(statearr_15285[15] = inst_15218__$1);
return statearr_15285;
})();if(inst_15218__$1)
{var statearr_15286_15325 = state_15265__$1;(statearr_15286_15325[1] = 13);
} else
{var statearr_15287_15326 = state_15265__$1;(statearr_15287_15326[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 12))
{var inst_15238 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15288_15327 = state_15265__$1;(statearr_15288_15327[2] = inst_15238);
(statearr_15288_15327[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 13))
{var inst_15218 = (state_15265[15]);var inst_15220 = cljs.core.chunked_seq_QMARK_.call(null,inst_15218);var state_15265__$1 = state_15265;if(inst_15220)
{var statearr_15289_15328 = state_15265__$1;(statearr_15289_15328[1] = 16);
} else
{var statearr_15290_15329 = state_15265__$1;(statearr_15290_15329[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 14))
{var state_15265__$1 = state_15265;var statearr_15291_15330 = state_15265__$1;(statearr_15291_15330[2] = null);
(statearr_15291_15330[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 15))
{var inst_15236 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15292_15331 = state_15265__$1;(statearr_15292_15331[2] = inst_15236);
(statearr_15292_15331[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 16))
{var inst_15218 = (state_15265[15]);var inst_15222 = cljs.core.chunk_first.call(null,inst_15218);var inst_15223 = cljs.core.chunk_rest.call(null,inst_15218);var inst_15224 = cljs.core.count.call(null,inst_15222);var inst_15204 = inst_15223;var inst_15205 = inst_15222;var inst_15206 = inst_15224;var inst_15207 = 0;var state_15265__$1 = (function (){var statearr_15293 = state_15265;(statearr_15293[8] = inst_15207);
(statearr_15293[9] = inst_15206);
(statearr_15293[10] = inst_15205);
(statearr_15293[11] = inst_15204);
return statearr_15293;
})();var statearr_15294_15332 = state_15265__$1;(statearr_15294_15332[2] = null);
(statearr_15294_15332[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 17))
{var inst_15218 = (state_15265[15]);var inst_15227 = cljs.core.first.call(null,inst_15218);var inst_15228 = cljs.core.async.muxch_STAR_.call(null,inst_15227);var inst_15229 = cljs.core.async.close_BANG_.call(null,inst_15228);var inst_15230 = cljs.core.next.call(null,inst_15218);var inst_15204 = inst_15230;var inst_15205 = null;var inst_15206 = 0;var inst_15207 = 0;var state_15265__$1 = (function (){var statearr_15295 = state_15265;(statearr_15295[8] = inst_15207);
(statearr_15295[9] = inst_15206);
(statearr_15295[10] = inst_15205);
(statearr_15295[11] = inst_15204);
(statearr_15295[16] = inst_15229);
return statearr_15295;
})();var statearr_15296_15333 = state_15265__$1;(statearr_15296_15333[2] = null);
(statearr_15296_15333[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 18))
{var inst_15233 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15297_15334 = state_15265__$1;(statearr_15297_15334[2] = inst_15233);
(statearr_15297_15334[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 19))
{var state_15265__$1 = state_15265;var statearr_15298_15335 = state_15265__$1;(statearr_15298_15335[2] = null);
(statearr_15298_15335[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 20))
{var state_15265__$1 = state_15265;var statearr_15299_15336 = state_15265__$1;(statearr_15299_15336[2] = null);
(statearr_15299_15336[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 21))
{var inst_15258 = (state_15265[2]);var state_15265__$1 = (function (){var statearr_15300 = state_15265;(statearr_15300[17] = inst_15258);
return statearr_15300;
})();var statearr_15301_15337 = state_15265__$1;(statearr_15301_15337[2] = null);
(statearr_15301_15337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 22))
{var inst_15255 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15302_15338 = state_15265__$1;(statearr_15302_15338[2] = inst_15255);
(statearr_15302_15338[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 23))
{var inst_15242 = (state_15265[13]);var inst_15246 = (state_15265[2]);var inst_15247 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15242);var state_15265__$1 = (function (){var statearr_15303 = state_15265;(statearr_15303[18] = inst_15246);
return statearr_15303;
})();var statearr_15304_15339 = state_15265__$1;(statearr_15304_15339[2] = inst_15247);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15265__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 24))
{var inst_15194 = (state_15265[7]);var inst_15244 = (state_15265[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15265,23,Object,null,22);var inst_15251 = cljs.core.async.muxch_STAR_.call(null,inst_15244);var state_15265__$1 = state_15265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15265__$1,25,inst_15251,inst_15194);
} else
{if((state_val_15266 === 25))
{var inst_15253 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15305_15340 = state_15265__$1;(statearr_15305_15340[2] = inst_15253);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15265__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15309[0] = state_machine__5507__auto__);
(statearr_15309[1] = 1);
return statearr_15309;
});
var state_machine__5507__auto____1 = (function (state_15265){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15310){if((e15310 instanceof Object))
{var ex__5510__auto__ = e15310;var statearr_15311_15341 = state_15265;(statearr_15311_15341[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15342 = state_15265;
state_15265 = G__15342;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15265){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15312 = f__5522__auto__.call(null);(statearr_15312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15313);
return statearr_15312;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15479 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15449){var state_val_15450 = (state_15449[1]);if((state_val_15450 === 1))
{var state_15449__$1 = state_15449;var statearr_15451_15480 = state_15449__$1;(statearr_15451_15480[2] = null);
(statearr_15451_15480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 2))
{var inst_15412 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15413 = 0;var state_15449__$1 = (function (){var statearr_15452 = state_15449;(statearr_15452[7] = inst_15413);
(statearr_15452[8] = inst_15412);
return statearr_15452;
})();var statearr_15453_15481 = state_15449__$1;(statearr_15453_15481[2] = null);
(statearr_15453_15481[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 3))
{var inst_15447 = (state_15449[2]);var state_15449__$1 = state_15449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15449__$1,inst_15447);
} else
{if((state_val_15450 === 4))
{var inst_15413 = (state_15449[7]);var inst_15415 = (inst_15413 < cnt);var state_15449__$1 = state_15449;if(cljs.core.truth_(inst_15415))
{var statearr_15454_15482 = state_15449__$1;(statearr_15454_15482[1] = 6);
} else
{var statearr_15455_15483 = state_15449__$1;(statearr_15455_15483[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 5))
{var inst_15433 = (state_15449[2]);var state_15449__$1 = (function (){var statearr_15456 = state_15449;(statearr_15456[9] = inst_15433);
return statearr_15456;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15449__$1,12,dchan);
} else
{if((state_val_15450 === 6))
{var state_15449__$1 = state_15449;var statearr_15457_15484 = state_15449__$1;(statearr_15457_15484[2] = null);
(statearr_15457_15484[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 7))
{var state_15449__$1 = state_15449;var statearr_15458_15485 = state_15449__$1;(statearr_15458_15485[2] = null);
(statearr_15458_15485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 8))
{var inst_15431 = (state_15449[2]);var state_15449__$1 = state_15449;var statearr_15459_15486 = state_15449__$1;(statearr_15459_15486[2] = inst_15431);
(statearr_15459_15486[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 9))
{var inst_15413 = (state_15449[7]);var inst_15426 = (state_15449[2]);var inst_15427 = (inst_15413 + 1);var inst_15413__$1 = inst_15427;var state_15449__$1 = (function (){var statearr_15460 = state_15449;(statearr_15460[10] = inst_15426);
(statearr_15460[7] = inst_15413__$1);
return statearr_15460;
})();var statearr_15461_15487 = state_15449__$1;(statearr_15461_15487[2] = null);
(statearr_15461_15487[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 10))
{var inst_15417 = (state_15449[2]);var inst_15418 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15449__$1 = (function (){var statearr_15462 = state_15449;(statearr_15462[11] = inst_15417);
return statearr_15462;
})();var statearr_15463_15488 = state_15449__$1;(statearr_15463_15488[2] = inst_15418);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15449__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 11))
{var inst_15413 = (state_15449[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15449,10,Object,null,9);var inst_15422 = chs__$1.call(null,inst_15413);var inst_15423 = done.call(null,inst_15413);var inst_15424 = cljs.core.async.take_BANG_.call(null,inst_15422,inst_15423);var state_15449__$1 = state_15449;var statearr_15464_15489 = state_15449__$1;(statearr_15464_15489[2] = inst_15424);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15449__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 12))
{var inst_15435 = (state_15449[12]);var inst_15435__$1 = (state_15449[2]);var inst_15436 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15435__$1);var state_15449__$1 = (function (){var statearr_15465 = state_15449;(statearr_15465[12] = inst_15435__$1);
return statearr_15465;
})();if(cljs.core.truth_(inst_15436))
{var statearr_15466_15490 = state_15449__$1;(statearr_15466_15490[1] = 13);
} else
{var statearr_15467_15491 = state_15449__$1;(statearr_15467_15491[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 13))
{var inst_15438 = cljs.core.async.close_BANG_.call(null,out);var state_15449__$1 = state_15449;var statearr_15468_15492 = state_15449__$1;(statearr_15468_15492[2] = inst_15438);
(statearr_15468_15492[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 14))
{var inst_15435 = (state_15449[12]);var inst_15440 = cljs.core.apply.call(null,f,inst_15435);var state_15449__$1 = state_15449;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15449__$1,16,out,inst_15440);
} else
{if((state_val_15450 === 15))
{var inst_15445 = (state_15449[2]);var state_15449__$1 = state_15449;var statearr_15469_15493 = state_15449__$1;(statearr_15469_15493[2] = inst_15445);
(statearr_15469_15493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 16))
{var inst_15442 = (state_15449[2]);var state_15449__$1 = (function (){var statearr_15470 = state_15449;(statearr_15470[13] = inst_15442);
return statearr_15470;
})();var statearr_15471_15494 = state_15449__$1;(statearr_15471_15494[2] = null);
(statearr_15471_15494[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15475[0] = state_machine__5507__auto__);
(statearr_15475[1] = 1);
return statearr_15475;
});
var state_machine__5507__auto____1 = (function (state_15449){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15449);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15476){if((e15476 instanceof Object))
{var ex__5510__auto__ = e15476;var statearr_15477_15495 = state_15449;(statearr_15477_15495[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15496 = state_15449;
state_15449 = G__15496;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15449){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15478 = f__5522__auto__.call(null);(statearr_15478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15479);
return statearr_15478;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15604 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15580){var state_val_15581 = (state_15580[1]);if((state_val_15581 === 1))
{var inst_15551 = cljs.core.vec.call(null,chs);var inst_15552 = inst_15551;var state_15580__$1 = (function (){var statearr_15582 = state_15580;(statearr_15582[7] = inst_15552);
return statearr_15582;
})();var statearr_15583_15605 = state_15580__$1;(statearr_15583_15605[2] = null);
(statearr_15583_15605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15581 === 2))
{var inst_15552 = (state_15580[7]);var inst_15554 = cljs.core.count.call(null,inst_15552);var inst_15555 = (inst_15554 > 0);var state_15580__$1 = state_15580;if(cljs.core.truth_(inst_15555))
{var statearr_15584_15606 = state_15580__$1;(statearr_15584_15606[1] = 4);
} else
{var statearr_15585_15607 = state_15580__$1;(statearr_15585_15607[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15581 === 3))
{var inst_15578 = (state_15580[2]);var state_15580__$1 = state_15580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15580__$1,inst_15578);
} else
{if((state_val_15581 === 4))
{var inst_15552 = (state_15580[7]);var state_15580__$1 = state_15580;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15580__$1,7,inst_15552);
} else
{if((state_val_15581 === 5))
{var inst_15574 = cljs.core.async.close_BANG_.call(null,out);var state_15580__$1 = state_15580;var statearr_15586_15608 = state_15580__$1;(statearr_15586_15608[2] = inst_15574);
(statearr_15586_15608[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15581 === 6))
{var inst_15576 = (state_15580[2]);var state_15580__$1 = state_15580;var statearr_15587_15609 = state_15580__$1;(statearr_15587_15609[2] = inst_15576);
(statearr_15587_15609[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15581 === 7))
{var inst_15559 = (state_15580[8]);var inst_15560 = (state_15580[9]);var inst_15559__$1 = (state_15580[2]);var inst_15560__$1 = cljs.core.nth.call(null,inst_15559__$1,0,null);var inst_15561 = cljs.core.nth.call(null,inst_15559__$1,1,null);var inst_15562 = (inst_15560__$1 == null);var state_15580__$1 = (function (){var statearr_15588 = state_15580;(statearr_15588[8] = inst_15559__$1);
(statearr_15588[10] = inst_15561);
(statearr_15588[9] = inst_15560__$1);
return statearr_15588;
})();if(cljs.core.truth_(inst_15562))
{var statearr_15589_15610 = state_15580__$1;(statearr_15589_15610[1] = 8);
} else
{var statearr_15590_15611 = state_15580__$1;(statearr_15590_15611[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15581 === 8))
{var inst_15552 = (state_15580[7]);var inst_15559 = (state_15580[8]);var inst_15561 = (state_15580[10]);var inst_15560 = (state_15580[9]);var inst_15564 = (function (){var c = inst_15561;var v = inst_15560;var vec__15557 = inst_15559;var cs = inst_15552;return ((function (c,v,vec__15557,cs,inst_15552,inst_15559,inst_15561,inst_15560,state_val_15581){
return (function (p1__15497_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15497_SHARP_);
});
;})(c,v,vec__15557,cs,inst_15552,inst_15559,inst_15561,inst_15560,state_val_15581))
})();var inst_15565 = cljs.core.filterv.call(null,inst_15564,inst_15552);var inst_15552__$1 = inst_15565;var state_15580__$1 = (function (){var statearr_15591 = state_15580;(statearr_15591[7] = inst_15552__$1);
return statearr_15591;
})();var statearr_15592_15612 = state_15580__$1;(statearr_15592_15612[2] = null);
(statearr_15592_15612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15581 === 9))
{var inst_15560 = (state_15580[9]);var state_15580__$1 = state_15580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15580__$1,11,out,inst_15560);
} else
{if((state_val_15581 === 10))
{var inst_15572 = (state_15580[2]);var state_15580__$1 = state_15580;var statearr_15594_15613 = state_15580__$1;(statearr_15594_15613[2] = inst_15572);
(statearr_15594_15613[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15581 === 11))
{var inst_15552 = (state_15580[7]);var inst_15569 = (state_15580[2]);var tmp15593 = inst_15552;var inst_15552__$1 = tmp15593;var state_15580__$1 = (function (){var statearr_15595 = state_15580;(statearr_15595[7] = inst_15552__$1);
(statearr_15595[11] = inst_15569);
return statearr_15595;
})();var statearr_15596_15614 = state_15580__$1;(statearr_15596_15614[2] = null);
(statearr_15596_15614[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15600 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15600[0] = state_machine__5507__auto__);
(statearr_15600[1] = 1);
return statearr_15600;
});
var state_machine__5507__auto____1 = (function (state_15580){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15580);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15601){if((e15601 instanceof Object))
{var ex__5510__auto__ = e15601;var statearr_15602_15615 = state_15580;(statearr_15602_15615[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15580);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15616 = state_15580;
state_15580 = G__15616;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15580){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15603 = f__5522__auto__.call(null);(statearr_15603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15604);
return statearr_15603;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15686){var state_val_15687 = (state_15686[1]);if((state_val_15687 === 1))
{var inst_15663 = 0;var state_15686__$1 = (function (){var statearr_15688 = state_15686;(statearr_15688[7] = inst_15663);
return statearr_15688;
})();var statearr_15689_15710 = state_15686__$1;(statearr_15689_15710[2] = null);
(statearr_15689_15710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 2))
{var inst_15663 = (state_15686[7]);var inst_15665 = (inst_15663 < n);var state_15686__$1 = state_15686;if(cljs.core.truth_(inst_15665))
{var statearr_15690_15711 = state_15686__$1;(statearr_15690_15711[1] = 4);
} else
{var statearr_15691_15712 = state_15686__$1;(statearr_15691_15712[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 3))
{var inst_15683 = (state_15686[2]);var inst_15684 = cljs.core.async.close_BANG_.call(null,out);var state_15686__$1 = (function (){var statearr_15692 = state_15686;(statearr_15692[8] = inst_15683);
return statearr_15692;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15686__$1,inst_15684);
} else
{if((state_val_15687 === 4))
{var state_15686__$1 = state_15686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15686__$1,7,ch);
} else
{if((state_val_15687 === 5))
{var state_15686__$1 = state_15686;var statearr_15693_15713 = state_15686__$1;(statearr_15693_15713[2] = null);
(statearr_15693_15713[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 6))
{var inst_15681 = (state_15686[2]);var state_15686__$1 = state_15686;var statearr_15694_15714 = state_15686__$1;(statearr_15694_15714[2] = inst_15681);
(statearr_15694_15714[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 7))
{var inst_15668 = (state_15686[9]);var inst_15668__$1 = (state_15686[2]);var inst_15669 = (inst_15668__$1 == null);var inst_15670 = cljs.core.not.call(null,inst_15669);var state_15686__$1 = (function (){var statearr_15695 = state_15686;(statearr_15695[9] = inst_15668__$1);
return statearr_15695;
})();if(inst_15670)
{var statearr_15696_15715 = state_15686__$1;(statearr_15696_15715[1] = 8);
} else
{var statearr_15697_15716 = state_15686__$1;(statearr_15697_15716[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 8))
{var inst_15668 = (state_15686[9]);var state_15686__$1 = state_15686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15686__$1,11,out,inst_15668);
} else
{if((state_val_15687 === 9))
{var state_15686__$1 = state_15686;var statearr_15698_15717 = state_15686__$1;(statearr_15698_15717[2] = null);
(statearr_15698_15717[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 10))
{var inst_15678 = (state_15686[2]);var state_15686__$1 = state_15686;var statearr_15699_15718 = state_15686__$1;(statearr_15699_15718[2] = inst_15678);
(statearr_15699_15718[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 11))
{var inst_15663 = (state_15686[7]);var inst_15673 = (state_15686[2]);var inst_15674 = (inst_15663 + 1);var inst_15663__$1 = inst_15674;var state_15686__$1 = (function (){var statearr_15700 = state_15686;(statearr_15700[7] = inst_15663__$1);
(statearr_15700[10] = inst_15673);
return statearr_15700;
})();var statearr_15701_15719 = state_15686__$1;(statearr_15701_15719[2] = null);
(statearr_15701_15719[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15705 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15705[0] = state_machine__5507__auto__);
(statearr_15705[1] = 1);
return statearr_15705;
});
var state_machine__5507__auto____1 = (function (state_15686){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15686);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15706){if((e15706 instanceof Object))
{var ex__5510__auto__ = e15706;var statearr_15707_15720 = state_15686;(statearr_15707_15720[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15686);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15721 = state_15686;
state_15686 = G__15721;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15686){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15708 = f__5522__auto__.call(null);(statearr_15708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15709);
return statearr_15708;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15818 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15793){var state_val_15794 = (state_15793[1]);if((state_val_15794 === 1))
{var inst_15770 = null;var state_15793__$1 = (function (){var statearr_15795 = state_15793;(statearr_15795[7] = inst_15770);
return statearr_15795;
})();var statearr_15796_15819 = state_15793__$1;(statearr_15796_15819[2] = null);
(statearr_15796_15819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15794 === 2))
{var state_15793__$1 = state_15793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15793__$1,4,ch);
} else
{if((state_val_15794 === 3))
{var inst_15790 = (state_15793[2]);var inst_15791 = cljs.core.async.close_BANG_.call(null,out);var state_15793__$1 = (function (){var statearr_15797 = state_15793;(statearr_15797[8] = inst_15790);
return statearr_15797;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15793__$1,inst_15791);
} else
{if((state_val_15794 === 4))
{var inst_15773 = (state_15793[9]);var inst_15773__$1 = (state_15793[2]);var inst_15774 = (inst_15773__$1 == null);var inst_15775 = cljs.core.not.call(null,inst_15774);var state_15793__$1 = (function (){var statearr_15798 = state_15793;(statearr_15798[9] = inst_15773__$1);
return statearr_15798;
})();if(inst_15775)
{var statearr_15799_15820 = state_15793__$1;(statearr_15799_15820[1] = 5);
} else
{var statearr_15800_15821 = state_15793__$1;(statearr_15800_15821[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15794 === 5))
{var inst_15773 = (state_15793[9]);var inst_15770 = (state_15793[7]);var inst_15777 = cljs.core._EQ_.call(null,inst_15773,inst_15770);var state_15793__$1 = state_15793;if(inst_15777)
{var statearr_15801_15822 = state_15793__$1;(statearr_15801_15822[1] = 8);
} else
{var statearr_15802_15823 = state_15793__$1;(statearr_15802_15823[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15794 === 6))
{var state_15793__$1 = state_15793;var statearr_15804_15824 = state_15793__$1;(statearr_15804_15824[2] = null);
(statearr_15804_15824[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15794 === 7))
{var inst_15788 = (state_15793[2]);var state_15793__$1 = state_15793;var statearr_15805_15825 = state_15793__$1;(statearr_15805_15825[2] = inst_15788);
(statearr_15805_15825[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15794 === 8))
{var inst_15770 = (state_15793[7]);var tmp15803 = inst_15770;var inst_15770__$1 = tmp15803;var state_15793__$1 = (function (){var statearr_15806 = state_15793;(statearr_15806[7] = inst_15770__$1);
return statearr_15806;
})();var statearr_15807_15826 = state_15793__$1;(statearr_15807_15826[2] = null);
(statearr_15807_15826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15794 === 9))
{var inst_15773 = (state_15793[9]);var state_15793__$1 = state_15793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15793__$1,11,out,inst_15773);
} else
{if((state_val_15794 === 10))
{var inst_15785 = (state_15793[2]);var state_15793__$1 = state_15793;var statearr_15808_15827 = state_15793__$1;(statearr_15808_15827[2] = inst_15785);
(statearr_15808_15827[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15794 === 11))
{var inst_15773 = (state_15793[9]);var inst_15782 = (state_15793[2]);var inst_15770 = inst_15773;var state_15793__$1 = (function (){var statearr_15809 = state_15793;(statearr_15809[7] = inst_15770);
(statearr_15809[10] = inst_15782);
return statearr_15809;
})();var statearr_15810_15828 = state_15793__$1;(statearr_15810_15828[2] = null);
(statearr_15810_15828[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15814 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15814[0] = state_machine__5507__auto__);
(statearr_15814[1] = 1);
return statearr_15814;
});
var state_machine__5507__auto____1 = (function (state_15793){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15815){if((e15815 instanceof Object))
{var ex__5510__auto__ = e15815;var statearr_15816_15829 = state_15793;(statearr_15816_15829[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15793);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15830 = state_15793;
state_15793 = G__15830;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15793){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15817 = f__5522__auto__.call(null);(statearr_15817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15818);
return statearr_15817;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15965 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15935){var state_val_15936 = (state_15935[1]);if((state_val_15936 === 1))
{var inst_15898 = (new Array(n));var inst_15899 = inst_15898;var inst_15900 = 0;var state_15935__$1 = (function (){var statearr_15937 = state_15935;(statearr_15937[7] = inst_15899);
(statearr_15937[8] = inst_15900);
return statearr_15937;
})();var statearr_15938_15966 = state_15935__$1;(statearr_15938_15966[2] = null);
(statearr_15938_15966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 2))
{var state_15935__$1 = state_15935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15935__$1,4,ch);
} else
{if((state_val_15936 === 3))
{var inst_15933 = (state_15935[2]);var state_15935__$1 = state_15935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15935__$1,inst_15933);
} else
{if((state_val_15936 === 4))
{var inst_15903 = (state_15935[9]);var inst_15903__$1 = (state_15935[2]);var inst_15904 = (inst_15903__$1 == null);var inst_15905 = cljs.core.not.call(null,inst_15904);var state_15935__$1 = (function (){var statearr_15939 = state_15935;(statearr_15939[9] = inst_15903__$1);
return statearr_15939;
})();if(inst_15905)
{var statearr_15940_15967 = state_15935__$1;(statearr_15940_15967[1] = 5);
} else
{var statearr_15941_15968 = state_15935__$1;(statearr_15941_15968[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 5))
{var inst_15908 = (state_15935[10]);var inst_15899 = (state_15935[7]);var inst_15900 = (state_15935[8]);var inst_15903 = (state_15935[9]);var inst_15907 = (inst_15899[inst_15900] = inst_15903);var inst_15908__$1 = (inst_15900 + 1);var inst_15909 = (inst_15908__$1 < n);var state_15935__$1 = (function (){var statearr_15942 = state_15935;(statearr_15942[11] = inst_15907);
(statearr_15942[10] = inst_15908__$1);
return statearr_15942;
})();if(cljs.core.truth_(inst_15909))
{var statearr_15943_15969 = state_15935__$1;(statearr_15943_15969[1] = 8);
} else
{var statearr_15944_15970 = state_15935__$1;(statearr_15944_15970[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 6))
{var inst_15900 = (state_15935[8]);var inst_15921 = (inst_15900 > 0);var state_15935__$1 = state_15935;if(cljs.core.truth_(inst_15921))
{var statearr_15946_15971 = state_15935__$1;(statearr_15946_15971[1] = 12);
} else
{var statearr_15947_15972 = state_15935__$1;(statearr_15947_15972[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 7))
{var inst_15931 = (state_15935[2]);var state_15935__$1 = state_15935;var statearr_15948_15973 = state_15935__$1;(statearr_15948_15973[2] = inst_15931);
(statearr_15948_15973[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 8))
{var inst_15908 = (state_15935[10]);var inst_15899 = (state_15935[7]);var tmp15945 = inst_15899;var inst_15899__$1 = tmp15945;var inst_15900 = inst_15908;var state_15935__$1 = (function (){var statearr_15949 = state_15935;(statearr_15949[7] = inst_15899__$1);
(statearr_15949[8] = inst_15900);
return statearr_15949;
})();var statearr_15950_15974 = state_15935__$1;(statearr_15950_15974[2] = null);
(statearr_15950_15974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 9))
{var inst_15899 = (state_15935[7]);var inst_15913 = cljs.core.vec.call(null,inst_15899);var state_15935__$1 = state_15935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15935__$1,11,out,inst_15913);
} else
{if((state_val_15936 === 10))
{var inst_15919 = (state_15935[2]);var state_15935__$1 = state_15935;var statearr_15951_15975 = state_15935__$1;(statearr_15951_15975[2] = inst_15919);
(statearr_15951_15975[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 11))
{var inst_15915 = (state_15935[2]);var inst_15916 = (new Array(n));var inst_15899 = inst_15916;var inst_15900 = 0;var state_15935__$1 = (function (){var statearr_15952 = state_15935;(statearr_15952[12] = inst_15915);
(statearr_15952[7] = inst_15899);
(statearr_15952[8] = inst_15900);
return statearr_15952;
})();var statearr_15953_15976 = state_15935__$1;(statearr_15953_15976[2] = null);
(statearr_15953_15976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 12))
{var inst_15899 = (state_15935[7]);var inst_15923 = cljs.core.vec.call(null,inst_15899);var state_15935__$1 = state_15935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15935__$1,15,out,inst_15923);
} else
{if((state_val_15936 === 13))
{var state_15935__$1 = state_15935;var statearr_15954_15977 = state_15935__$1;(statearr_15954_15977[2] = null);
(statearr_15954_15977[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 14))
{var inst_15928 = (state_15935[2]);var inst_15929 = cljs.core.async.close_BANG_.call(null,out);var state_15935__$1 = (function (){var statearr_15955 = state_15935;(statearr_15955[13] = inst_15928);
return statearr_15955;
})();var statearr_15956_15978 = state_15935__$1;(statearr_15956_15978[2] = inst_15929);
(statearr_15956_15978[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15936 === 15))
{var inst_15925 = (state_15935[2]);var state_15935__$1 = state_15935;var statearr_15957_15979 = state_15935__$1;(statearr_15957_15979[2] = inst_15925);
(statearr_15957_15979[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15961[0] = state_machine__5507__auto__);
(statearr_15961[1] = 1);
return statearr_15961;
});
var state_machine__5507__auto____1 = (function (state_15935){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15935);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15962){if((e15962 instanceof Object))
{var ex__5510__auto__ = e15962;var statearr_15963_15980 = state_15935;(statearr_15963_15980[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15935);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15981 = state_15935;
state_15935 = G__15981;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15935){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15964 = f__5522__auto__.call(null);(statearr_15964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15965);
return statearr_15964;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16094){var state_val_16095 = (state_16094[1]);if((state_val_16095 === 1))
{var inst_16053 = [];var inst_16054 = inst_16053;var inst_16055 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16094__$1 = (function (){var statearr_16096 = state_16094;(statearr_16096[7] = inst_16054);
(statearr_16096[8] = inst_16055);
return statearr_16096;
})();var statearr_16097_16125 = state_16094__$1;(statearr_16097_16125[2] = null);
(statearr_16097_16125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 2))
{var state_16094__$1 = state_16094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16094__$1,4,ch);
} else
{if((state_val_16095 === 3))
{var inst_16092 = (state_16094[2]);var state_16094__$1 = state_16094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16094__$1,inst_16092);
} else
{if((state_val_16095 === 4))
{var inst_16058 = (state_16094[9]);var inst_16058__$1 = (state_16094[2]);var inst_16059 = (inst_16058__$1 == null);var inst_16060 = cljs.core.not.call(null,inst_16059);var state_16094__$1 = (function (){var statearr_16098 = state_16094;(statearr_16098[9] = inst_16058__$1);
return statearr_16098;
})();if(inst_16060)
{var statearr_16099_16126 = state_16094__$1;(statearr_16099_16126[1] = 5);
} else
{var statearr_16100_16127 = state_16094__$1;(statearr_16100_16127[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 5))
{var inst_16062 = (state_16094[10]);var inst_16058 = (state_16094[9]);var inst_16055 = (state_16094[8]);var inst_16062__$1 = f.call(null,inst_16058);var inst_16063 = cljs.core._EQ_.call(null,inst_16062__$1,inst_16055);var inst_16064 = cljs.core.keyword_identical_QMARK_.call(null,inst_16055,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16065 = (inst_16063) || (inst_16064);var state_16094__$1 = (function (){var statearr_16101 = state_16094;(statearr_16101[10] = inst_16062__$1);
return statearr_16101;
})();if(cljs.core.truth_(inst_16065))
{var statearr_16102_16128 = state_16094__$1;(statearr_16102_16128[1] = 8);
} else
{var statearr_16103_16129 = state_16094__$1;(statearr_16103_16129[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 6))
{var inst_16054 = (state_16094[7]);var inst_16079 = inst_16054.length;var inst_16080 = (inst_16079 > 0);var state_16094__$1 = state_16094;if(cljs.core.truth_(inst_16080))
{var statearr_16105_16130 = state_16094__$1;(statearr_16105_16130[1] = 12);
} else
{var statearr_16106_16131 = state_16094__$1;(statearr_16106_16131[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 7))
{var inst_16090 = (state_16094[2]);var state_16094__$1 = state_16094;var statearr_16107_16132 = state_16094__$1;(statearr_16107_16132[2] = inst_16090);
(statearr_16107_16132[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 8))
{var inst_16062 = (state_16094[10]);var inst_16058 = (state_16094[9]);var inst_16054 = (state_16094[7]);var inst_16067 = inst_16054.push(inst_16058);var tmp16104 = inst_16054;var inst_16054__$1 = tmp16104;var inst_16055 = inst_16062;var state_16094__$1 = (function (){var statearr_16108 = state_16094;(statearr_16108[11] = inst_16067);
(statearr_16108[7] = inst_16054__$1);
(statearr_16108[8] = inst_16055);
return statearr_16108;
})();var statearr_16109_16133 = state_16094__$1;(statearr_16109_16133[2] = null);
(statearr_16109_16133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 9))
{var inst_16054 = (state_16094[7]);var inst_16070 = cljs.core.vec.call(null,inst_16054);var state_16094__$1 = state_16094;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16094__$1,11,out,inst_16070);
} else
{if((state_val_16095 === 10))
{var inst_16077 = (state_16094[2]);var state_16094__$1 = state_16094;var statearr_16110_16134 = state_16094__$1;(statearr_16110_16134[2] = inst_16077);
(statearr_16110_16134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 11))
{var inst_16062 = (state_16094[10]);var inst_16058 = (state_16094[9]);var inst_16072 = (state_16094[2]);var inst_16073 = [];var inst_16074 = inst_16073.push(inst_16058);var inst_16054 = inst_16073;var inst_16055 = inst_16062;var state_16094__$1 = (function (){var statearr_16111 = state_16094;(statearr_16111[12] = inst_16072);
(statearr_16111[13] = inst_16074);
(statearr_16111[7] = inst_16054);
(statearr_16111[8] = inst_16055);
return statearr_16111;
})();var statearr_16112_16135 = state_16094__$1;(statearr_16112_16135[2] = null);
(statearr_16112_16135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 12))
{var inst_16054 = (state_16094[7]);var inst_16082 = cljs.core.vec.call(null,inst_16054);var state_16094__$1 = state_16094;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16094__$1,15,out,inst_16082);
} else
{if((state_val_16095 === 13))
{var state_16094__$1 = state_16094;var statearr_16113_16136 = state_16094__$1;(statearr_16113_16136[2] = null);
(statearr_16113_16136[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 14))
{var inst_16087 = (state_16094[2]);var inst_16088 = cljs.core.async.close_BANG_.call(null,out);var state_16094__$1 = (function (){var statearr_16114 = state_16094;(statearr_16114[14] = inst_16087);
return statearr_16114;
})();var statearr_16115_16137 = state_16094__$1;(statearr_16115_16137[2] = inst_16088);
(statearr_16115_16137[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16095 === 15))
{var inst_16084 = (state_16094[2]);var state_16094__$1 = state_16094;var statearr_16116_16138 = state_16094__$1;(statearr_16116_16138[2] = inst_16084);
(statearr_16116_16138[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16120[0] = state_machine__5507__auto__);
(statearr_16120[1] = 1);
return statearr_16120;
});
var state_machine__5507__auto____1 = (function (state_16094){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16094);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16121){if((e16121 instanceof Object))
{var ex__5510__auto__ = e16121;var statearr_16122_16139 = state_16094;(statearr_16122_16139[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16094);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16140 = state_16094;
state_16094 = G__16140;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16094){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16123 = f__5522__auto__.call(null);(statearr_16123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16124);
return statearr_16123;
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