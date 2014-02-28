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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13706 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13706 = (function (f,fn_handler,meta13707){
this.f = f;
this.fn_handler = fn_handler;
this.meta13707 = meta13707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13706.cljs$lang$type = true;
cljs.core.async.t13706.cljs$lang$ctorStr = "cljs.core.async/t13706";
cljs.core.async.t13706.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13706");
});
cljs.core.async.t13706.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13708){var self__ = this;
var _13708__$1 = this;return self__.meta13707;
});
cljs.core.async.t13706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13708,meta13707__$1){var self__ = this;
var _13708__$1 = this;return (new cljs.core.async.t13706(self__.f,self__.fn_handler,meta13707__$1));
});
cljs.core.async.__GT_t13706 = (function __GT_t13706(f__$1,fn_handler__$1,meta13707){return (new cljs.core.async.t13706(f__$1,fn_handler__$1,meta13707));
});
}
return (new cljs.core.async.t13706(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13710 = buff;if(G__13710)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13710.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13710.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13710);
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
{var val_13711 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13711);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13711);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13712 = n;var x_13713 = 0;while(true){
if((x_13713 < n__4248__auto___13712))
{(a[x_13713] = 0);
{
var G__13714 = (x_13713 + 1);
x_13713 = G__13714;
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
var G__13715 = (i + 1);
i = G__13715;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13719 = (function (flag,alt_flag,meta13720){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13720 = meta13720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13719.cljs$lang$type = true;
cljs.core.async.t13719.cljs$lang$ctorStr = "cljs.core.async/t13719";
cljs.core.async.t13719.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13719");
});
cljs.core.async.t13719.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13721){var self__ = this;
var _13721__$1 = this;return self__.meta13720;
});
cljs.core.async.t13719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13721,meta13720__$1){var self__ = this;
var _13721__$1 = this;return (new cljs.core.async.t13719(self__.flag,self__.alt_flag,meta13720__$1));
});
cljs.core.async.__GT_t13719 = (function __GT_t13719(flag__$1,alt_flag__$1,meta13720){return (new cljs.core.async.t13719(flag__$1,alt_flag__$1,meta13720));
});
}
return (new cljs.core.async.t13719(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13725 = (function (cb,flag,alt_handler,meta13726){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13726 = meta13726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13725.cljs$lang$type = true;
cljs.core.async.t13725.cljs$lang$ctorStr = "cljs.core.async/t13725";
cljs.core.async.t13725.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13725");
});
cljs.core.async.t13725.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13727){var self__ = this;
var _13727__$1 = this;return self__.meta13726;
});
cljs.core.async.t13725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13727,meta13726__$1){var self__ = this;
var _13727__$1 = this;return (new cljs.core.async.t13725(self__.cb,self__.flag,self__.alt_handler,meta13726__$1));
});
cljs.core.async.__GT_t13725 = (function __GT_t13725(cb__$1,flag__$1,alt_handler__$1,meta13726){return (new cljs.core.async.t13725(cb__$1,flag__$1,alt_handler__$1,meta13726));
});
}
return (new cljs.core.async.t13725(cb,flag,alt_handler,null));
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
return (function (p1__13728_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13728_SHARP_,port], null));
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
var G__13729 = (i + 1);
i = G__13729;
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
var alts_BANG___delegate = function (ports,p__13730){var map__13732 = p__13730;var map__13732__$1 = ((cljs.core.seq_QMARK_.call(null,map__13732))?cljs.core.apply.call(null,cljs.core.hash_map,map__13732):map__13732);var opts = map__13732__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13730 = null;if (arguments.length > 1) {
  p__13730 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13730);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13733){
var ports = cljs.core.first(arglist__13733);
var p__13730 = cljs.core.rest(arglist__13733);
return alts_BANG___delegate(ports,p__13730);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13741 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13741 = (function (ch,f,map_LT_,meta13742){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13742 = meta13742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13741.cljs$lang$type = true;
cljs.core.async.t13741.cljs$lang$ctorStr = "cljs.core.async/t13741";
cljs.core.async.t13741.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13741");
});
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13744 = (function (fn1,_,meta13742,ch,f,map_LT_,meta13745){
this.fn1 = fn1;
this._ = _;
this.meta13742 = meta13742;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13745 = meta13745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13744.cljs$lang$type = true;
cljs.core.async.t13744.cljs$lang$ctorStr = "cljs.core.async/t13744";
cljs.core.async.t13744.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13744");
});
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13734_SHARP_){return f1.call(null,(((p1__13734_SHARP_ == null))?null:self__.f.call(null,p1__13734_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13746){var self__ = this;
var _13746__$1 = this;return self__.meta13745;
});
cljs.core.async.t13744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13746,meta13745__$1){var self__ = this;
var _13746__$1 = this;return (new cljs.core.async.t13744(self__.fn1,self__._,self__.meta13742,self__.ch,self__.f,self__.map_LT_,meta13745__$1));
});
cljs.core.async.__GT_t13744 = (function __GT_t13744(fn1__$1,___$2,meta13742__$1,ch__$2,f__$2,map_LT___$2,meta13745){return (new cljs.core.async.t13744(fn1__$1,___$2,meta13742__$1,ch__$2,f__$2,map_LT___$2,meta13745));
});
}
return (new cljs.core.async.t13744(fn1,___$1,self__.meta13742,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13741.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13743){var self__ = this;
var _13743__$1 = this;return self__.meta13742;
});
cljs.core.async.t13741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13743,meta13742__$1){var self__ = this;
var _13743__$1 = this;return (new cljs.core.async.t13741(self__.ch,self__.f,self__.map_LT_,meta13742__$1));
});
cljs.core.async.__GT_t13741 = (function __GT_t13741(ch__$1,f__$1,map_LT___$1,meta13742){return (new cljs.core.async.t13741(ch__$1,f__$1,map_LT___$1,meta13742));
});
}
return (new cljs.core.async.t13741(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13750 = (function (ch,f,map_GT_,meta13751){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13751 = meta13751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13750.cljs$lang$type = true;
cljs.core.async.t13750.cljs$lang$ctorStr = "cljs.core.async/t13750";
cljs.core.async.t13750.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13750");
});
cljs.core.async.t13750.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13750.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13750.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13750.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13750.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13750.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13752){var self__ = this;
var _13752__$1 = this;return self__.meta13751;
});
cljs.core.async.t13750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13752,meta13751__$1){var self__ = this;
var _13752__$1 = this;return (new cljs.core.async.t13750(self__.ch,self__.f,self__.map_GT_,meta13751__$1));
});
cljs.core.async.__GT_t13750 = (function __GT_t13750(ch__$1,f__$1,map_GT___$1,meta13751){return (new cljs.core.async.t13750(ch__$1,f__$1,map_GT___$1,meta13751));
});
}
return (new cljs.core.async.t13750(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13756 = (function (ch,p,filter_GT_,meta13757){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13757 = meta13757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13756.cljs$lang$type = true;
cljs.core.async.t13756.cljs$lang$ctorStr = "cljs.core.async/t13756";
cljs.core.async.t13756.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13756");
});
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13758){var self__ = this;
var _13758__$1 = this;return self__.meta13757;
});
cljs.core.async.t13756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13758,meta13757__$1){var self__ = this;
var _13758__$1 = this;return (new cljs.core.async.t13756(self__.ch,self__.p,self__.filter_GT_,meta13757__$1));
});
cljs.core.async.__GT_t13756 = (function __GT_t13756(ch__$1,p__$1,filter_GT___$1,meta13757){return (new cljs.core.async.t13756(ch__$1,p__$1,filter_GT___$1,meta13757));
});
}
return (new cljs.core.async.t13756(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13820){var state_val_13821 = (state_13820[1]);if((state_val_13821 === 1))
{var state_13820__$1 = state_13820;var statearr_13822_13842 = state_13820__$1;(statearr_13822_13842[2] = null);
(statearr_13822_13842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 2))
{var state_13820__$1 = state_13820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13820__$1,4,ch);
} else
{if((state_val_13821 === 3))
{var inst_13818 = (state_13820[2]);var state_13820__$1 = state_13820;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13820__$1,inst_13818);
} else
{if((state_val_13821 === 4))
{var inst_13802 = (state_13820[7]);var inst_13802__$1 = (state_13820[2]);var inst_13803 = (inst_13802__$1 == null);var state_13820__$1 = (function (){var statearr_13823 = state_13820;(statearr_13823[7] = inst_13802__$1);
return statearr_13823;
})();if(cljs.core.truth_(inst_13803))
{var statearr_13824_13843 = state_13820__$1;(statearr_13824_13843[1] = 5);
} else
{var statearr_13825_13844 = state_13820__$1;(statearr_13825_13844[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 5))
{var inst_13805 = cljs.core.async.close_BANG_.call(null,out);var state_13820__$1 = state_13820;var statearr_13826_13845 = state_13820__$1;(statearr_13826_13845[2] = inst_13805);
(statearr_13826_13845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 6))
{var inst_13802 = (state_13820[7]);var inst_13807 = p.call(null,inst_13802);var state_13820__$1 = state_13820;if(cljs.core.truth_(inst_13807))
{var statearr_13827_13846 = state_13820__$1;(statearr_13827_13846[1] = 8);
} else
{var statearr_13828_13847 = state_13820__$1;(statearr_13828_13847[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 7))
{var inst_13816 = (state_13820[2]);var state_13820__$1 = state_13820;var statearr_13829_13848 = state_13820__$1;(statearr_13829_13848[2] = inst_13816);
(statearr_13829_13848[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 8))
{var inst_13802 = (state_13820[7]);var state_13820__$1 = state_13820;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13820__$1,11,out,inst_13802);
} else
{if((state_val_13821 === 9))
{var state_13820__$1 = state_13820;var statearr_13830_13849 = state_13820__$1;(statearr_13830_13849[2] = null);
(statearr_13830_13849[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 10))
{var inst_13813 = (state_13820[2]);var state_13820__$1 = (function (){var statearr_13831 = state_13820;(statearr_13831[8] = inst_13813);
return statearr_13831;
})();var statearr_13832_13850 = state_13820__$1;(statearr_13832_13850[2] = null);
(statearr_13832_13850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 11))
{var inst_13810 = (state_13820[2]);var state_13820__$1 = state_13820;var statearr_13833_13851 = state_13820__$1;(statearr_13833_13851[2] = inst_13810);
(statearr_13833_13851[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13837 = [null,null,null,null,null,null,null,null,null];(statearr_13837[0] = state_machine__5507__auto__);
(statearr_13837[1] = 1);
return statearr_13837;
});
var state_machine__5507__auto____1 = (function (state_13820){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13820);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13838){if((e13838 instanceof Object))
{var ex__5510__auto__ = e13838;var statearr_13839_13852 = state_13820;(statearr_13839_13852[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13820);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13853 = state_13820;
state_13820 = G__13853;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13820){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13840 = f__5522__auto__.call(null);(statearr_13840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13841);
return statearr_13840;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14005){var state_val_14006 = (state_14005[1]);if((state_val_14006 === 1))
{var state_14005__$1 = state_14005;var statearr_14007_14044 = state_14005__$1;(statearr_14007_14044[2] = null);
(statearr_14007_14044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 2))
{var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14005__$1,4,in$);
} else
{if((state_val_14006 === 3))
{var inst_14003 = (state_14005[2]);var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14005__$1,inst_14003);
} else
{if((state_val_14006 === 4))
{var inst_13951 = (state_14005[7]);var inst_13951__$1 = (state_14005[2]);var inst_13952 = (inst_13951__$1 == null);var state_14005__$1 = (function (){var statearr_14008 = state_14005;(statearr_14008[7] = inst_13951__$1);
return statearr_14008;
})();if(cljs.core.truth_(inst_13952))
{var statearr_14009_14045 = state_14005__$1;(statearr_14009_14045[1] = 5);
} else
{var statearr_14010_14046 = state_14005__$1;(statearr_14010_14046[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 5))
{var inst_13954 = cljs.core.async.close_BANG_.call(null,out);var state_14005__$1 = state_14005;var statearr_14011_14047 = state_14005__$1;(statearr_14011_14047[2] = inst_13954);
(statearr_14011_14047[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 6))
{var inst_13951 = (state_14005[7]);var inst_13956 = f.call(null,inst_13951);var inst_13961 = cljs.core.seq.call(null,inst_13956);var inst_13962 = inst_13961;var inst_13963 = null;var inst_13964 = 0;var inst_13965 = 0;var state_14005__$1 = (function (){var statearr_14012 = state_14005;(statearr_14012[8] = inst_13963);
(statearr_14012[9] = inst_13962);
(statearr_14012[10] = inst_13964);
(statearr_14012[11] = inst_13965);
return statearr_14012;
})();var statearr_14013_14048 = state_14005__$1;(statearr_14013_14048[2] = null);
(statearr_14013_14048[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 7))
{var inst_14001 = (state_14005[2]);var state_14005__$1 = state_14005;var statearr_14014_14049 = state_14005__$1;(statearr_14014_14049[2] = inst_14001);
(statearr_14014_14049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 8))
{var inst_13964 = (state_14005[10]);var inst_13965 = (state_14005[11]);var inst_13967 = (inst_13965 < inst_13964);var inst_13968 = inst_13967;var state_14005__$1 = state_14005;if(cljs.core.truth_(inst_13968))
{var statearr_14015_14050 = state_14005__$1;(statearr_14015_14050[1] = 10);
} else
{var statearr_14016_14051 = state_14005__$1;(statearr_14016_14051[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 9))
{var inst_13998 = (state_14005[2]);var state_14005__$1 = (function (){var statearr_14017 = state_14005;(statearr_14017[12] = inst_13998);
return statearr_14017;
})();var statearr_14018_14052 = state_14005__$1;(statearr_14018_14052[2] = null);
(statearr_14018_14052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 10))
{var inst_13963 = (state_14005[8]);var inst_13965 = (state_14005[11]);var inst_13970 = cljs.core._nth.call(null,inst_13963,inst_13965);var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14005__$1,13,out,inst_13970);
} else
{if((state_val_14006 === 11))
{var inst_13962 = (state_14005[9]);var inst_13976 = (state_14005[13]);var inst_13976__$1 = cljs.core.seq.call(null,inst_13962);var state_14005__$1 = (function (){var statearr_14022 = state_14005;(statearr_14022[13] = inst_13976__$1);
return statearr_14022;
})();if(inst_13976__$1)
{var statearr_14023_14053 = state_14005__$1;(statearr_14023_14053[1] = 14);
} else
{var statearr_14024_14054 = state_14005__$1;(statearr_14024_14054[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 12))
{var inst_13996 = (state_14005[2]);var state_14005__$1 = state_14005;var statearr_14025_14055 = state_14005__$1;(statearr_14025_14055[2] = inst_13996);
(statearr_14025_14055[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 13))
{var inst_13963 = (state_14005[8]);var inst_13962 = (state_14005[9]);var inst_13964 = (state_14005[10]);var inst_13965 = (state_14005[11]);var inst_13972 = (state_14005[2]);var inst_13973 = (inst_13965 + 1);var tmp14019 = inst_13963;var tmp14020 = inst_13962;var tmp14021 = inst_13964;var inst_13962__$1 = tmp14020;var inst_13963__$1 = tmp14019;var inst_13964__$1 = tmp14021;var inst_13965__$1 = inst_13973;var state_14005__$1 = (function (){var statearr_14026 = state_14005;(statearr_14026[8] = inst_13963__$1);
(statearr_14026[9] = inst_13962__$1);
(statearr_14026[10] = inst_13964__$1);
(statearr_14026[11] = inst_13965__$1);
(statearr_14026[14] = inst_13972);
return statearr_14026;
})();var statearr_14027_14056 = state_14005__$1;(statearr_14027_14056[2] = null);
(statearr_14027_14056[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 14))
{var inst_13976 = (state_14005[13]);var inst_13978 = cljs.core.chunked_seq_QMARK_.call(null,inst_13976);var state_14005__$1 = state_14005;if(inst_13978)
{var statearr_14028_14057 = state_14005__$1;(statearr_14028_14057[1] = 17);
} else
{var statearr_14029_14058 = state_14005__$1;(statearr_14029_14058[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 15))
{var state_14005__$1 = state_14005;var statearr_14030_14059 = state_14005__$1;(statearr_14030_14059[2] = null);
(statearr_14030_14059[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 16))
{var inst_13994 = (state_14005[2]);var state_14005__$1 = state_14005;var statearr_14031_14060 = state_14005__$1;(statearr_14031_14060[2] = inst_13994);
(statearr_14031_14060[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 17))
{var inst_13976 = (state_14005[13]);var inst_13980 = cljs.core.chunk_first.call(null,inst_13976);var inst_13981 = cljs.core.chunk_rest.call(null,inst_13976);var inst_13982 = cljs.core.count.call(null,inst_13980);var inst_13962 = inst_13981;var inst_13963 = inst_13980;var inst_13964 = inst_13982;var inst_13965 = 0;var state_14005__$1 = (function (){var statearr_14032 = state_14005;(statearr_14032[8] = inst_13963);
(statearr_14032[9] = inst_13962);
(statearr_14032[10] = inst_13964);
(statearr_14032[11] = inst_13965);
return statearr_14032;
})();var statearr_14033_14061 = state_14005__$1;(statearr_14033_14061[2] = null);
(statearr_14033_14061[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 18))
{var inst_13976 = (state_14005[13]);var inst_13985 = cljs.core.first.call(null,inst_13976);var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14005__$1,20,out,inst_13985);
} else
{if((state_val_14006 === 19))
{var inst_13991 = (state_14005[2]);var state_14005__$1 = state_14005;var statearr_14034_14062 = state_14005__$1;(statearr_14034_14062[2] = inst_13991);
(statearr_14034_14062[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 20))
{var inst_13976 = (state_14005[13]);var inst_13987 = (state_14005[2]);var inst_13988 = cljs.core.next.call(null,inst_13976);var inst_13962 = inst_13988;var inst_13963 = null;var inst_13964 = 0;var inst_13965 = 0;var state_14005__$1 = (function (){var statearr_14035 = state_14005;(statearr_14035[8] = inst_13963);
(statearr_14035[9] = inst_13962);
(statearr_14035[15] = inst_13987);
(statearr_14035[10] = inst_13964);
(statearr_14035[11] = inst_13965);
return statearr_14035;
})();var statearr_14036_14063 = state_14005__$1;(statearr_14036_14063[2] = null);
(statearr_14036_14063[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_14040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14040[0] = state_machine__5507__auto__);
(statearr_14040[1] = 1);
return statearr_14040;
});
var state_machine__5507__auto____1 = (function (state_14005){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14041){if((e14041 instanceof Object))
{var ex__5510__auto__ = e14041;var statearr_14042_14064 = state_14005;(statearr_14042_14064[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14065 = state_14005;
state_14005 = G__14065;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14005){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14043 = f__5522__auto__.call(null);(statearr_14043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14043;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14146 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14125){var state_val_14126 = (state_14125[1]);if((state_val_14126 === 1))
{var state_14125__$1 = state_14125;var statearr_14127_14147 = state_14125__$1;(statearr_14127_14147[2] = null);
(statearr_14127_14147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 2))
{var state_14125__$1 = state_14125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14125__$1,4,from);
} else
{if((state_val_14126 === 3))
{var inst_14123 = (state_14125[2]);var state_14125__$1 = state_14125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14125__$1,inst_14123);
} else
{if((state_val_14126 === 4))
{var inst_14108 = (state_14125[7]);var inst_14108__$1 = (state_14125[2]);var inst_14109 = (inst_14108__$1 == null);var state_14125__$1 = (function (){var statearr_14128 = state_14125;(statearr_14128[7] = inst_14108__$1);
return statearr_14128;
})();if(cljs.core.truth_(inst_14109))
{var statearr_14129_14148 = state_14125__$1;(statearr_14129_14148[1] = 5);
} else
{var statearr_14130_14149 = state_14125__$1;(statearr_14130_14149[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 5))
{var state_14125__$1 = state_14125;if(cljs.core.truth_(close_QMARK_))
{var statearr_14131_14150 = state_14125__$1;(statearr_14131_14150[1] = 8);
} else
{var statearr_14132_14151 = state_14125__$1;(statearr_14132_14151[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 6))
{var inst_14108 = (state_14125[7]);var state_14125__$1 = state_14125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14125__$1,11,to,inst_14108);
} else
{if((state_val_14126 === 7))
{var inst_14121 = (state_14125[2]);var state_14125__$1 = state_14125;var statearr_14133_14152 = state_14125__$1;(statearr_14133_14152[2] = inst_14121);
(statearr_14133_14152[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 8))
{var inst_14112 = cljs.core.async.close_BANG_.call(null,to);var state_14125__$1 = state_14125;var statearr_14134_14153 = state_14125__$1;(statearr_14134_14153[2] = inst_14112);
(statearr_14134_14153[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 9))
{var state_14125__$1 = state_14125;var statearr_14135_14154 = state_14125__$1;(statearr_14135_14154[2] = null);
(statearr_14135_14154[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 10))
{var inst_14115 = (state_14125[2]);var state_14125__$1 = state_14125;var statearr_14136_14155 = state_14125__$1;(statearr_14136_14155[2] = inst_14115);
(statearr_14136_14155[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 11))
{var inst_14118 = (state_14125[2]);var state_14125__$1 = (function (){var statearr_14137 = state_14125;(statearr_14137[8] = inst_14118);
return statearr_14137;
})();var statearr_14138_14156 = state_14125__$1;(statearr_14138_14156[2] = null);
(statearr_14138_14156[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14142 = [null,null,null,null,null,null,null,null,null];(statearr_14142[0] = state_machine__5507__auto__);
(statearr_14142[1] = 1);
return statearr_14142;
});
var state_machine__5507__auto____1 = (function (state_14125){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14125);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14143){if((e14143 instanceof Object))
{var ex__5510__auto__ = e14143;var statearr_14144_14157 = state_14125;(statearr_14144_14157[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14143;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14158 = state_14125;
state_14125 = G__14158;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14125){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14145 = f__5522__auto__.call(null);(statearr_14145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14146);
return statearr_14145;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14223){var state_val_14224 = (state_14223[1]);if((state_val_14224 === 1))
{var state_14223__$1 = state_14223;var statearr_14225_14246 = state_14223__$1;(statearr_14225_14246[2] = null);
(statearr_14225_14246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14224 === 2))
{var state_14223__$1 = state_14223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14223__$1,4,ch);
} else
{if((state_val_14224 === 3))
{var inst_14221 = (state_14223[2]);var state_14223__$1 = state_14223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14223__$1,inst_14221);
} else
{if((state_val_14224 === 4))
{var inst_14204 = (state_14223[7]);var inst_14204__$1 = (state_14223[2]);var inst_14205 = (inst_14204__$1 == null);var state_14223__$1 = (function (){var statearr_14226 = state_14223;(statearr_14226[7] = inst_14204__$1);
return statearr_14226;
})();if(cljs.core.truth_(inst_14205))
{var statearr_14227_14247 = state_14223__$1;(statearr_14227_14247[1] = 5);
} else
{var statearr_14228_14248 = state_14223__$1;(statearr_14228_14248[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14224 === 5))
{var inst_14207 = cljs.core.async.close_BANG_.call(null,tc);var inst_14208 = cljs.core.async.close_BANG_.call(null,fc);var state_14223__$1 = (function (){var statearr_14229 = state_14223;(statearr_14229[8] = inst_14207);
return statearr_14229;
})();var statearr_14230_14249 = state_14223__$1;(statearr_14230_14249[2] = inst_14208);
(statearr_14230_14249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14224 === 6))
{var inst_14204 = (state_14223[7]);var inst_14210 = p.call(null,inst_14204);var state_14223__$1 = state_14223;if(cljs.core.truth_(inst_14210))
{var statearr_14231_14250 = state_14223__$1;(statearr_14231_14250[1] = 9);
} else
{var statearr_14232_14251 = state_14223__$1;(statearr_14232_14251[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14224 === 7))
{var inst_14219 = (state_14223[2]);var state_14223__$1 = state_14223;var statearr_14233_14252 = state_14223__$1;(statearr_14233_14252[2] = inst_14219);
(statearr_14233_14252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14224 === 8))
{var inst_14216 = (state_14223[2]);var state_14223__$1 = (function (){var statearr_14234 = state_14223;(statearr_14234[9] = inst_14216);
return statearr_14234;
})();var statearr_14235_14253 = state_14223__$1;(statearr_14235_14253[2] = null);
(statearr_14235_14253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14224 === 9))
{var state_14223__$1 = state_14223;var statearr_14236_14254 = state_14223__$1;(statearr_14236_14254[2] = tc);
(statearr_14236_14254[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14224 === 10))
{var state_14223__$1 = state_14223;var statearr_14237_14255 = state_14223__$1;(statearr_14237_14255[2] = fc);
(statearr_14237_14255[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14224 === 11))
{var inst_14204 = (state_14223[7]);var inst_14214 = (state_14223[2]);var state_14223__$1 = state_14223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14223__$1,8,inst_14214,inst_14204);
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
var state_machine__5507__auto____0 = (function (){var statearr_14241 = [null,null,null,null,null,null,null,null,null,null];(statearr_14241[0] = state_machine__5507__auto__);
(statearr_14241[1] = 1);
return statearr_14241;
});
var state_machine__5507__auto____1 = (function (state_14223){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14223);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14242){if((e14242 instanceof Object))
{var ex__5510__auto__ = e14242;var statearr_14243_14256 = state_14223;(statearr_14243_14256[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14257 = state_14223;
state_14223 = G__14257;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14223){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14244 = f__5522__auto__.call(null);(statearr_14244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14245);
return statearr_14244;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14304){var state_val_14305 = (state_14304[1]);if((state_val_14305 === 7))
{var inst_14300 = (state_14304[2]);var state_14304__$1 = state_14304;var statearr_14306_14322 = state_14304__$1;(statearr_14306_14322[2] = inst_14300);
(statearr_14306_14322[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 6))
{var inst_14293 = (state_14304[7]);var inst_14290 = (state_14304[8]);var inst_14297 = f.call(null,inst_14290,inst_14293);var inst_14290__$1 = inst_14297;var state_14304__$1 = (function (){var statearr_14307 = state_14304;(statearr_14307[8] = inst_14290__$1);
return statearr_14307;
})();var statearr_14308_14323 = state_14304__$1;(statearr_14308_14323[2] = null);
(statearr_14308_14323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 5))
{var inst_14290 = (state_14304[8]);var state_14304__$1 = state_14304;var statearr_14309_14324 = state_14304__$1;(statearr_14309_14324[2] = inst_14290);
(statearr_14309_14324[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 4))
{var inst_14293 = (state_14304[7]);var inst_14293__$1 = (state_14304[2]);var inst_14294 = (inst_14293__$1 == null);var state_14304__$1 = (function (){var statearr_14310 = state_14304;(statearr_14310[7] = inst_14293__$1);
return statearr_14310;
})();if(cljs.core.truth_(inst_14294))
{var statearr_14311_14325 = state_14304__$1;(statearr_14311_14325[1] = 5);
} else
{var statearr_14312_14326 = state_14304__$1;(statearr_14312_14326[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14305 === 3))
{var inst_14302 = (state_14304[2]);var state_14304__$1 = state_14304;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14304__$1,inst_14302);
} else
{if((state_val_14305 === 2))
{var state_14304__$1 = state_14304;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14304__$1,4,ch);
} else
{if((state_val_14305 === 1))
{var inst_14290 = init;var state_14304__$1 = (function (){var statearr_14313 = state_14304;(statearr_14313[8] = inst_14290);
return statearr_14313;
})();var statearr_14314_14327 = state_14304__$1;(statearr_14314_14327[2] = null);
(statearr_14314_14327[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14318 = [null,null,null,null,null,null,null,null,null];(statearr_14318[0] = state_machine__5507__auto__);
(statearr_14318[1] = 1);
return statearr_14318;
});
var state_machine__5507__auto____1 = (function (state_14304){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14304);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14319){if((e14319 instanceof Object))
{var ex__5510__auto__ = e14319;var statearr_14320_14328 = state_14304;(statearr_14320_14328[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14304);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14329 = state_14304;
state_14304 = G__14329;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14304){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14321 = f__5522__auto__.call(null);(statearr_14321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14321;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14391){var state_val_14392 = (state_14391[1]);if((state_val_14392 === 1))
{var inst_14371 = cljs.core.seq.call(null,coll);var inst_14372 = inst_14371;var state_14391__$1 = (function (){var statearr_14393 = state_14391;(statearr_14393[7] = inst_14372);
return statearr_14393;
})();var statearr_14394_14412 = state_14391__$1;(statearr_14394_14412[2] = null);
(statearr_14394_14412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 2))
{var inst_14372 = (state_14391[7]);var state_14391__$1 = state_14391;if(cljs.core.truth_(inst_14372))
{var statearr_14395_14413 = state_14391__$1;(statearr_14395_14413[1] = 4);
} else
{var statearr_14396_14414 = state_14391__$1;(statearr_14396_14414[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 3))
{var inst_14389 = (state_14391[2]);var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14391__$1,inst_14389);
} else
{if((state_val_14392 === 4))
{var inst_14372 = (state_14391[7]);var inst_14375 = cljs.core.first.call(null,inst_14372);var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14391__$1,7,ch,inst_14375);
} else
{if((state_val_14392 === 5))
{var state_14391__$1 = state_14391;if(cljs.core.truth_(close_QMARK_))
{var statearr_14397_14415 = state_14391__$1;(statearr_14397_14415[1] = 8);
} else
{var statearr_14398_14416 = state_14391__$1;(statearr_14398_14416[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 6))
{var inst_14387 = (state_14391[2]);var state_14391__$1 = state_14391;var statearr_14399_14417 = state_14391__$1;(statearr_14399_14417[2] = inst_14387);
(statearr_14399_14417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 7))
{var inst_14372 = (state_14391[7]);var inst_14377 = (state_14391[2]);var inst_14378 = cljs.core.next.call(null,inst_14372);var inst_14372__$1 = inst_14378;var state_14391__$1 = (function (){var statearr_14400 = state_14391;(statearr_14400[8] = inst_14377);
(statearr_14400[7] = inst_14372__$1);
return statearr_14400;
})();var statearr_14401_14418 = state_14391__$1;(statearr_14401_14418[2] = null);
(statearr_14401_14418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 8))
{var inst_14382 = cljs.core.async.close_BANG_.call(null,ch);var state_14391__$1 = state_14391;var statearr_14402_14419 = state_14391__$1;(statearr_14402_14419[2] = inst_14382);
(statearr_14402_14419[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 9))
{var state_14391__$1 = state_14391;var statearr_14403_14420 = state_14391__$1;(statearr_14403_14420[2] = null);
(statearr_14403_14420[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 10))
{var inst_14385 = (state_14391[2]);var state_14391__$1 = state_14391;var statearr_14404_14421 = state_14391__$1;(statearr_14404_14421[2] = inst_14385);
(statearr_14404_14421[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14408 = [null,null,null,null,null,null,null,null,null];(statearr_14408[0] = state_machine__5507__auto__);
(statearr_14408[1] = 1);
return statearr_14408;
});
var state_machine__5507__auto____1 = (function (state_14391){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14409){if((e14409 instanceof Object))
{var ex__5510__auto__ = e14409;var statearr_14410_14422 = state_14391;(statearr_14410_14422[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14423 = state_14391;
state_14391 = G__14423;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14391){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14411 = f__5522__auto__.call(null);(statearr_14411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14411;
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
cljs.core.async.Mux = (function (){var obj14425 = {};return obj14425;
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
cljs.core.async.Mult = (function (){var obj14427 = {};return obj14427;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14651 = (function (cs,ch,mult,meta14652){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14652 = meta14652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14651.cljs$lang$type = true;
cljs.core.async.t14651.cljs$lang$ctorStr = "cljs.core.async/t14651";
cljs.core.async.t14651.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14651");
});})(cs))
;
cljs.core.async.t14651.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14651.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14651.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14651.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14651.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14653){var self__ = this;
var _14653__$1 = this;return self__.meta14652;
});})(cs))
;
cljs.core.async.t14651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14653,meta14652__$1){var self__ = this;
var _14653__$1 = this;return (new cljs.core.async.t14651(self__.cs,self__.ch,self__.mult,meta14652__$1));
});})(cs))
;
cljs.core.async.__GT_t14651 = ((function (cs){
return (function __GT_t14651(cs__$1,ch__$1,mult__$1,meta14652){return (new cljs.core.async.t14651(cs__$1,ch__$1,mult__$1,meta14652));
});})(cs))
;
}
return (new cljs.core.async.t14651(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14874 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14788){var state_val_14789 = (state_14788[1]);if((state_val_14789 === 32))
{var inst_14656 = (state_14788[7]);var inst_14732 = (state_14788[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14788,31,Object,null,30);var inst_14739 = cljs.core.async.put_BANG_.call(null,inst_14732,inst_14656,done);var state_14788__$1 = state_14788;var statearr_14790_14875 = state_14788__$1;(statearr_14790_14875[2] = inst_14739);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14788__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 1))
{var state_14788__$1 = state_14788;var statearr_14791_14876 = state_14788__$1;(statearr_14791_14876[2] = null);
(statearr_14791_14876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 33))
{var inst_14745 = (state_14788[9]);var inst_14747 = cljs.core.chunked_seq_QMARK_.call(null,inst_14745);var state_14788__$1 = state_14788;if(inst_14747)
{var statearr_14792_14877 = state_14788__$1;(statearr_14792_14877[1] = 36);
} else
{var statearr_14793_14878 = state_14788__$1;(statearr_14793_14878[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 2))
{var state_14788__$1 = state_14788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14788__$1,4,ch);
} else
{if((state_val_14789 === 34))
{var state_14788__$1 = state_14788;var statearr_14794_14879 = state_14788__$1;(statearr_14794_14879[2] = null);
(statearr_14794_14879[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 3))
{var inst_14786 = (state_14788[2]);var state_14788__$1 = state_14788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14788__$1,inst_14786);
} else
{if((state_val_14789 === 35))
{var inst_14770 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14795_14880 = state_14788__$1;(statearr_14795_14880[2] = inst_14770);
(statearr_14795_14880[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 4))
{var inst_14656 = (state_14788[7]);var inst_14656__$1 = (state_14788[2]);var inst_14657 = (inst_14656__$1 == null);var state_14788__$1 = (function (){var statearr_14796 = state_14788;(statearr_14796[7] = inst_14656__$1);
return statearr_14796;
})();if(cljs.core.truth_(inst_14657))
{var statearr_14797_14881 = state_14788__$1;(statearr_14797_14881[1] = 5);
} else
{var statearr_14798_14882 = state_14788__$1;(statearr_14798_14882[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 36))
{var inst_14745 = (state_14788[9]);var inst_14749 = cljs.core.chunk_first.call(null,inst_14745);var inst_14750 = cljs.core.chunk_rest.call(null,inst_14745);var inst_14751 = cljs.core.count.call(null,inst_14749);var inst_14724 = inst_14750;var inst_14725 = inst_14749;var inst_14726 = inst_14751;var inst_14727 = 0;var state_14788__$1 = (function (){var statearr_14799 = state_14788;(statearr_14799[10] = inst_14724);
(statearr_14799[11] = inst_14725);
(statearr_14799[12] = inst_14726);
(statearr_14799[13] = inst_14727);
return statearr_14799;
})();var statearr_14800_14883 = state_14788__$1;(statearr_14800_14883[2] = null);
(statearr_14800_14883[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 5))
{var inst_14663 = cljs.core.deref.call(null,cs);var inst_14664 = cljs.core.seq.call(null,inst_14663);var inst_14665 = inst_14664;var inst_14666 = null;var inst_14667 = 0;var inst_14668 = 0;var state_14788__$1 = (function (){var statearr_14801 = state_14788;(statearr_14801[14] = inst_14668);
(statearr_14801[15] = inst_14667);
(statearr_14801[16] = inst_14666);
(statearr_14801[17] = inst_14665);
return statearr_14801;
})();var statearr_14802_14884 = state_14788__$1;(statearr_14802_14884[2] = null);
(statearr_14802_14884[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 37))
{var inst_14745 = (state_14788[9]);var inst_14754 = cljs.core.first.call(null,inst_14745);var state_14788__$1 = (function (){var statearr_14803 = state_14788;(statearr_14803[18] = inst_14754);
return statearr_14803;
})();var statearr_14804_14885 = state_14788__$1;(statearr_14804_14885[2] = null);
(statearr_14804_14885[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 6))
{var inst_14716 = (state_14788[19]);var inst_14715 = cljs.core.deref.call(null,cs);var inst_14716__$1 = cljs.core.keys.call(null,inst_14715);var inst_14717 = cljs.core.count.call(null,inst_14716__$1);var inst_14718 = cljs.core.reset_BANG_.call(null,dctr,inst_14717);var inst_14723 = cljs.core.seq.call(null,inst_14716__$1);var inst_14724 = inst_14723;var inst_14725 = null;var inst_14726 = 0;var inst_14727 = 0;var state_14788__$1 = (function (){var statearr_14805 = state_14788;(statearr_14805[10] = inst_14724);
(statearr_14805[11] = inst_14725);
(statearr_14805[12] = inst_14726);
(statearr_14805[19] = inst_14716__$1);
(statearr_14805[20] = inst_14718);
(statearr_14805[13] = inst_14727);
return statearr_14805;
})();var statearr_14806_14886 = state_14788__$1;(statearr_14806_14886[2] = null);
(statearr_14806_14886[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 38))
{var inst_14767 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14807_14887 = state_14788__$1;(statearr_14807_14887[2] = inst_14767);
(statearr_14807_14887[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 7))
{var inst_14784 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14808_14888 = state_14788__$1;(statearr_14808_14888[2] = inst_14784);
(statearr_14808_14888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 39))
{var inst_14745 = (state_14788[9]);var inst_14763 = (state_14788[2]);var inst_14764 = cljs.core.next.call(null,inst_14745);var inst_14724 = inst_14764;var inst_14725 = null;var inst_14726 = 0;var inst_14727 = 0;var state_14788__$1 = (function (){var statearr_14809 = state_14788;(statearr_14809[10] = inst_14724);
(statearr_14809[11] = inst_14725);
(statearr_14809[12] = inst_14726);
(statearr_14809[21] = inst_14763);
(statearr_14809[13] = inst_14727);
return statearr_14809;
})();var statearr_14810_14889 = state_14788__$1;(statearr_14810_14889[2] = null);
(statearr_14810_14889[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 8))
{var inst_14668 = (state_14788[14]);var inst_14667 = (state_14788[15]);var inst_14670 = (inst_14668 < inst_14667);var inst_14671 = inst_14670;var state_14788__$1 = state_14788;if(cljs.core.truth_(inst_14671))
{var statearr_14811_14890 = state_14788__$1;(statearr_14811_14890[1] = 10);
} else
{var statearr_14812_14891 = state_14788__$1;(statearr_14812_14891[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 40))
{var inst_14754 = (state_14788[18]);var inst_14755 = (state_14788[2]);var inst_14756 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14757 = cljs.core.async.untap_STAR_.call(null,m,inst_14754);var state_14788__$1 = (function (){var statearr_14813 = state_14788;(statearr_14813[22] = inst_14756);
(statearr_14813[23] = inst_14755);
return statearr_14813;
})();var statearr_14814_14892 = state_14788__$1;(statearr_14814_14892[2] = inst_14757);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14788__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 9))
{var inst_14713 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14815_14893 = state_14788__$1;(statearr_14815_14893[2] = inst_14713);
(statearr_14815_14893[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 41))
{var inst_14656 = (state_14788[7]);var inst_14754 = (state_14788[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14788,40,Object,null,39);var inst_14761 = cljs.core.async.put_BANG_.call(null,inst_14754,inst_14656,done);var state_14788__$1 = state_14788;var statearr_14816_14894 = state_14788__$1;(statearr_14816_14894[2] = inst_14761);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14788__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 10))
{var inst_14668 = (state_14788[14]);var inst_14666 = (state_14788[16]);var inst_14674 = cljs.core._nth.call(null,inst_14666,inst_14668);var inst_14675 = cljs.core.nth.call(null,inst_14674,0,null);var inst_14676 = cljs.core.nth.call(null,inst_14674,1,null);var state_14788__$1 = (function (){var statearr_14817 = state_14788;(statearr_14817[24] = inst_14675);
return statearr_14817;
})();if(cljs.core.truth_(inst_14676))
{var statearr_14818_14895 = state_14788__$1;(statearr_14818_14895[1] = 13);
} else
{var statearr_14819_14896 = state_14788__$1;(statearr_14819_14896[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 42))
{var state_14788__$1 = state_14788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14788__$1,45,dchan);
} else
{if((state_val_14789 === 11))
{var inst_14685 = (state_14788[25]);var inst_14665 = (state_14788[17]);var inst_14685__$1 = cljs.core.seq.call(null,inst_14665);var state_14788__$1 = (function (){var statearr_14820 = state_14788;(statearr_14820[25] = inst_14685__$1);
return statearr_14820;
})();if(inst_14685__$1)
{var statearr_14821_14897 = state_14788__$1;(statearr_14821_14897[1] = 16);
} else
{var statearr_14822_14898 = state_14788__$1;(statearr_14822_14898[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 43))
{var state_14788__$1 = state_14788;var statearr_14823_14899 = state_14788__$1;(statearr_14823_14899[2] = null);
(statearr_14823_14899[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 12))
{var inst_14711 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14824_14900 = state_14788__$1;(statearr_14824_14900[2] = inst_14711);
(statearr_14824_14900[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 44))
{var inst_14781 = (state_14788[2]);var state_14788__$1 = (function (){var statearr_14825 = state_14788;(statearr_14825[26] = inst_14781);
return statearr_14825;
})();var statearr_14826_14901 = state_14788__$1;(statearr_14826_14901[2] = null);
(statearr_14826_14901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 13))
{var inst_14675 = (state_14788[24]);var inst_14678 = cljs.core.async.close_BANG_.call(null,inst_14675);var state_14788__$1 = state_14788;var statearr_14827_14902 = state_14788__$1;(statearr_14827_14902[2] = inst_14678);
(statearr_14827_14902[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 45))
{var inst_14778 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14831_14903 = state_14788__$1;(statearr_14831_14903[2] = inst_14778);
(statearr_14831_14903[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 14))
{var state_14788__$1 = state_14788;var statearr_14832_14904 = state_14788__$1;(statearr_14832_14904[2] = null);
(statearr_14832_14904[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 15))
{var inst_14668 = (state_14788[14]);var inst_14667 = (state_14788[15]);var inst_14666 = (state_14788[16]);var inst_14665 = (state_14788[17]);var inst_14681 = (state_14788[2]);var inst_14682 = (inst_14668 + 1);var tmp14828 = inst_14667;var tmp14829 = inst_14666;var tmp14830 = inst_14665;var inst_14665__$1 = tmp14830;var inst_14666__$1 = tmp14829;var inst_14667__$1 = tmp14828;var inst_14668__$1 = inst_14682;var state_14788__$1 = (function (){var statearr_14833 = state_14788;(statearr_14833[27] = inst_14681);
(statearr_14833[14] = inst_14668__$1);
(statearr_14833[15] = inst_14667__$1);
(statearr_14833[16] = inst_14666__$1);
(statearr_14833[17] = inst_14665__$1);
return statearr_14833;
})();var statearr_14834_14905 = state_14788__$1;(statearr_14834_14905[2] = null);
(statearr_14834_14905[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 16))
{var inst_14685 = (state_14788[25]);var inst_14687 = cljs.core.chunked_seq_QMARK_.call(null,inst_14685);var state_14788__$1 = state_14788;if(inst_14687)
{var statearr_14835_14906 = state_14788__$1;(statearr_14835_14906[1] = 19);
} else
{var statearr_14836_14907 = state_14788__$1;(statearr_14836_14907[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 17))
{var state_14788__$1 = state_14788;var statearr_14837_14908 = state_14788__$1;(statearr_14837_14908[2] = null);
(statearr_14837_14908[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 18))
{var inst_14709 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14838_14909 = state_14788__$1;(statearr_14838_14909[2] = inst_14709);
(statearr_14838_14909[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 19))
{var inst_14685 = (state_14788[25]);var inst_14689 = cljs.core.chunk_first.call(null,inst_14685);var inst_14690 = cljs.core.chunk_rest.call(null,inst_14685);var inst_14691 = cljs.core.count.call(null,inst_14689);var inst_14665 = inst_14690;var inst_14666 = inst_14689;var inst_14667 = inst_14691;var inst_14668 = 0;var state_14788__$1 = (function (){var statearr_14839 = state_14788;(statearr_14839[14] = inst_14668);
(statearr_14839[15] = inst_14667);
(statearr_14839[16] = inst_14666);
(statearr_14839[17] = inst_14665);
return statearr_14839;
})();var statearr_14840_14910 = state_14788__$1;(statearr_14840_14910[2] = null);
(statearr_14840_14910[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 20))
{var inst_14685 = (state_14788[25]);var inst_14695 = cljs.core.first.call(null,inst_14685);var inst_14696 = cljs.core.nth.call(null,inst_14695,0,null);var inst_14697 = cljs.core.nth.call(null,inst_14695,1,null);var state_14788__$1 = (function (){var statearr_14841 = state_14788;(statearr_14841[28] = inst_14696);
return statearr_14841;
})();if(cljs.core.truth_(inst_14697))
{var statearr_14842_14911 = state_14788__$1;(statearr_14842_14911[1] = 22);
} else
{var statearr_14843_14912 = state_14788__$1;(statearr_14843_14912[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 21))
{var inst_14706 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14844_14913 = state_14788__$1;(statearr_14844_14913[2] = inst_14706);
(statearr_14844_14913[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 22))
{var inst_14696 = (state_14788[28]);var inst_14699 = cljs.core.async.close_BANG_.call(null,inst_14696);var state_14788__$1 = state_14788;var statearr_14845_14914 = state_14788__$1;(statearr_14845_14914[2] = inst_14699);
(statearr_14845_14914[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 23))
{var state_14788__$1 = state_14788;var statearr_14846_14915 = state_14788__$1;(statearr_14846_14915[2] = null);
(statearr_14846_14915[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 24))
{var inst_14685 = (state_14788[25]);var inst_14702 = (state_14788[2]);var inst_14703 = cljs.core.next.call(null,inst_14685);var inst_14665 = inst_14703;var inst_14666 = null;var inst_14667 = 0;var inst_14668 = 0;var state_14788__$1 = (function (){var statearr_14847 = state_14788;(statearr_14847[14] = inst_14668);
(statearr_14847[29] = inst_14702);
(statearr_14847[15] = inst_14667);
(statearr_14847[16] = inst_14666);
(statearr_14847[17] = inst_14665);
return statearr_14847;
})();var statearr_14848_14916 = state_14788__$1;(statearr_14848_14916[2] = null);
(statearr_14848_14916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 25))
{var inst_14726 = (state_14788[12]);var inst_14727 = (state_14788[13]);var inst_14729 = (inst_14727 < inst_14726);var inst_14730 = inst_14729;var state_14788__$1 = state_14788;if(cljs.core.truth_(inst_14730))
{var statearr_14849_14917 = state_14788__$1;(statearr_14849_14917[1] = 27);
} else
{var statearr_14850_14918 = state_14788__$1;(statearr_14850_14918[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 26))
{var inst_14716 = (state_14788[19]);var inst_14774 = (state_14788[2]);var inst_14775 = cljs.core.seq.call(null,inst_14716);var state_14788__$1 = (function (){var statearr_14851 = state_14788;(statearr_14851[30] = inst_14774);
return statearr_14851;
})();if(inst_14775)
{var statearr_14852_14919 = state_14788__$1;(statearr_14852_14919[1] = 42);
} else
{var statearr_14853_14920 = state_14788__$1;(statearr_14853_14920[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 27))
{var inst_14725 = (state_14788[11]);var inst_14727 = (state_14788[13]);var inst_14732 = cljs.core._nth.call(null,inst_14725,inst_14727);var state_14788__$1 = (function (){var statearr_14854 = state_14788;(statearr_14854[8] = inst_14732);
return statearr_14854;
})();var statearr_14855_14921 = state_14788__$1;(statearr_14855_14921[2] = null);
(statearr_14855_14921[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 28))
{var inst_14724 = (state_14788[10]);var inst_14745 = (state_14788[9]);var inst_14745__$1 = cljs.core.seq.call(null,inst_14724);var state_14788__$1 = (function (){var statearr_14859 = state_14788;(statearr_14859[9] = inst_14745__$1);
return statearr_14859;
})();if(inst_14745__$1)
{var statearr_14860_14922 = state_14788__$1;(statearr_14860_14922[1] = 33);
} else
{var statearr_14861_14923 = state_14788__$1;(statearr_14861_14923[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 29))
{var inst_14772 = (state_14788[2]);var state_14788__$1 = state_14788;var statearr_14862_14924 = state_14788__$1;(statearr_14862_14924[2] = inst_14772);
(statearr_14862_14924[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 30))
{var inst_14724 = (state_14788[10]);var inst_14725 = (state_14788[11]);var inst_14726 = (state_14788[12]);var inst_14727 = (state_14788[13]);var inst_14741 = (state_14788[2]);var inst_14742 = (inst_14727 + 1);var tmp14856 = inst_14724;var tmp14857 = inst_14725;var tmp14858 = inst_14726;var inst_14724__$1 = tmp14856;var inst_14725__$1 = tmp14857;var inst_14726__$1 = tmp14858;var inst_14727__$1 = inst_14742;var state_14788__$1 = (function (){var statearr_14863 = state_14788;(statearr_14863[10] = inst_14724__$1);
(statearr_14863[11] = inst_14725__$1);
(statearr_14863[12] = inst_14726__$1);
(statearr_14863[13] = inst_14727__$1);
(statearr_14863[31] = inst_14741);
return statearr_14863;
})();var statearr_14864_14925 = state_14788__$1;(statearr_14864_14925[2] = null);
(statearr_14864_14925[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14789 === 31))
{var inst_14732 = (state_14788[8]);var inst_14733 = (state_14788[2]);var inst_14734 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14735 = cljs.core.async.untap_STAR_.call(null,m,inst_14732);var state_14788__$1 = (function (){var statearr_14865 = state_14788;(statearr_14865[32] = inst_14733);
(statearr_14865[33] = inst_14734);
return statearr_14865;
})();var statearr_14866_14926 = state_14788__$1;(statearr_14866_14926[2] = inst_14735);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14788__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14870[0] = state_machine__5507__auto__);
(statearr_14870[1] = 1);
return statearr_14870;
});
var state_machine__5507__auto____1 = (function (state_14788){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14788);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14871){if((e14871 instanceof Object))
{var ex__5510__auto__ = e14871;var statearr_14872_14927 = state_14788;(statearr_14872_14927[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14928 = state_14788;
state_14788 = G__14928;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14788){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14873 = f__5522__auto__.call(null);(statearr_14873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14874);
return statearr_14873;
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
cljs.core.async.Mix = (function (){var obj14930 = {};return obj14930;
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
;var m = (function (){if(typeof cljs.core.async.t15040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15040 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15041){
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
this.meta15041 = meta15041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15040.cljs$lang$type = true;
cljs.core.async.t15040.cljs$lang$ctorStr = "cljs.core.async/t15040";
cljs.core.async.t15040.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15040");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15040.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15040.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15040.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15040.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15040.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15040.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15040.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15040.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15042){var self__ = this;
var _15042__$1 = this;return self__.meta15041;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15042,meta15041__$1){var self__ = this;
var _15042__$1 = this;return (new cljs.core.async.t15040(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15041__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15040 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15040(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15041){return (new cljs.core.async.t15040(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15041));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15040(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15149 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15107){var state_val_15108 = (state_15107[1]);if((state_val_15108 === 1))
{var inst_15046 = (state_15107[7]);var inst_15046__$1 = calc_state.call(null);var inst_15047 = cljs.core.seq_QMARK_.call(null,inst_15046__$1);var state_15107__$1 = (function (){var statearr_15109 = state_15107;(statearr_15109[7] = inst_15046__$1);
return statearr_15109;
})();if(inst_15047)
{var statearr_15110_15150 = state_15107__$1;(statearr_15110_15150[1] = 2);
} else
{var statearr_15111_15151 = state_15107__$1;(statearr_15111_15151[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 2))
{var inst_15046 = (state_15107[7]);var inst_15049 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15046);var state_15107__$1 = state_15107;var statearr_15112_15152 = state_15107__$1;(statearr_15112_15152[2] = inst_15049);
(statearr_15112_15152[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 3))
{var inst_15046 = (state_15107[7]);var state_15107__$1 = state_15107;var statearr_15113_15153 = state_15107__$1;(statearr_15113_15153[2] = inst_15046);
(statearr_15113_15153[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 4))
{var inst_15046 = (state_15107[7]);var inst_15052 = (state_15107[2]);var inst_15053 = cljs.core.get.call(null,inst_15052,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15054 = cljs.core.get.call(null,inst_15052,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15055 = cljs.core.get.call(null,inst_15052,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15056 = inst_15046;var state_15107__$1 = (function (){var statearr_15114 = state_15107;(statearr_15114[8] = inst_15056);
(statearr_15114[9] = inst_15053);
(statearr_15114[10] = inst_15055);
(statearr_15114[11] = inst_15054);
return statearr_15114;
})();var statearr_15115_15154 = state_15107__$1;(statearr_15115_15154[2] = null);
(statearr_15115_15154[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 5))
{var inst_15056 = (state_15107[8]);var inst_15059 = cljs.core.seq_QMARK_.call(null,inst_15056);var state_15107__$1 = state_15107;if(inst_15059)
{var statearr_15116_15155 = state_15107__$1;(statearr_15116_15155[1] = 7);
} else
{var statearr_15117_15156 = state_15107__$1;(statearr_15117_15156[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 6))
{var inst_15105 = (state_15107[2]);var state_15107__$1 = state_15107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15107__$1,inst_15105);
} else
{if((state_val_15108 === 7))
{var inst_15056 = (state_15107[8]);var inst_15061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15056);var state_15107__$1 = state_15107;var statearr_15118_15157 = state_15107__$1;(statearr_15118_15157[2] = inst_15061);
(statearr_15118_15157[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 8))
{var inst_15056 = (state_15107[8]);var state_15107__$1 = state_15107;var statearr_15119_15158 = state_15107__$1;(statearr_15119_15158[2] = inst_15056);
(statearr_15119_15158[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 9))
{var inst_15064 = (state_15107[12]);var inst_15064__$1 = (state_15107[2]);var inst_15065 = cljs.core.get.call(null,inst_15064__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15066 = cljs.core.get.call(null,inst_15064__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15067 = cljs.core.get.call(null,inst_15064__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15107__$1 = (function (){var statearr_15120 = state_15107;(statearr_15120[13] = inst_15067);
(statearr_15120[12] = inst_15064__$1);
(statearr_15120[14] = inst_15066);
return statearr_15120;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15107__$1,10,inst_15065);
} else
{if((state_val_15108 === 10))
{var inst_15071 = (state_15107[15]);var inst_15072 = (state_15107[16]);var inst_15070 = (state_15107[2]);var inst_15071__$1 = cljs.core.nth.call(null,inst_15070,0,null);var inst_15072__$1 = cljs.core.nth.call(null,inst_15070,1,null);var inst_15073 = (inst_15071__$1 == null);var inst_15074 = cljs.core._EQ_.call(null,inst_15072__$1,change);var inst_15075 = (inst_15073) || (inst_15074);var state_15107__$1 = (function (){var statearr_15121 = state_15107;(statearr_15121[15] = inst_15071__$1);
(statearr_15121[16] = inst_15072__$1);
return statearr_15121;
})();if(cljs.core.truth_(inst_15075))
{var statearr_15122_15159 = state_15107__$1;(statearr_15122_15159[1] = 11);
} else
{var statearr_15123_15160 = state_15107__$1;(statearr_15123_15160[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 11))
{var inst_15071 = (state_15107[15]);var inst_15077 = (inst_15071 == null);var state_15107__$1 = state_15107;if(cljs.core.truth_(inst_15077))
{var statearr_15124_15161 = state_15107__$1;(statearr_15124_15161[1] = 14);
} else
{var statearr_15125_15162 = state_15107__$1;(statearr_15125_15162[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 12))
{var inst_15067 = (state_15107[13]);var inst_15072 = (state_15107[16]);var inst_15086 = (state_15107[17]);var inst_15086__$1 = inst_15067.call(null,inst_15072);var state_15107__$1 = (function (){var statearr_15126 = state_15107;(statearr_15126[17] = inst_15086__$1);
return statearr_15126;
})();if(cljs.core.truth_(inst_15086__$1))
{var statearr_15127_15163 = state_15107__$1;(statearr_15127_15163[1] = 17);
} else
{var statearr_15128_15164 = state_15107__$1;(statearr_15128_15164[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 13))
{var inst_15103 = (state_15107[2]);var state_15107__$1 = state_15107;var statearr_15129_15165 = state_15107__$1;(statearr_15129_15165[2] = inst_15103);
(statearr_15129_15165[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 14))
{var inst_15072 = (state_15107[16]);var inst_15079 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15072);var state_15107__$1 = state_15107;var statearr_15130_15166 = state_15107__$1;(statearr_15130_15166[2] = inst_15079);
(statearr_15130_15166[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 15))
{var state_15107__$1 = state_15107;var statearr_15131_15167 = state_15107__$1;(statearr_15131_15167[2] = null);
(statearr_15131_15167[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 16))
{var inst_15082 = (state_15107[2]);var inst_15083 = calc_state.call(null);var inst_15056 = inst_15083;var state_15107__$1 = (function (){var statearr_15132 = state_15107;(statearr_15132[18] = inst_15082);
(statearr_15132[8] = inst_15056);
return statearr_15132;
})();var statearr_15133_15168 = state_15107__$1;(statearr_15133_15168[2] = null);
(statearr_15133_15168[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 17))
{var inst_15086 = (state_15107[17]);var state_15107__$1 = state_15107;var statearr_15134_15169 = state_15107__$1;(statearr_15134_15169[2] = inst_15086);
(statearr_15134_15169[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 18))
{var inst_15067 = (state_15107[13]);var inst_15072 = (state_15107[16]);var inst_15066 = (state_15107[14]);var inst_15089 = cljs.core.empty_QMARK_.call(null,inst_15067);var inst_15090 = inst_15066.call(null,inst_15072);var inst_15091 = cljs.core.not.call(null,inst_15090);var inst_15092 = (inst_15089) && (inst_15091);var state_15107__$1 = state_15107;var statearr_15135_15170 = state_15107__$1;(statearr_15135_15170[2] = inst_15092);
(statearr_15135_15170[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 19))
{var inst_15094 = (state_15107[2]);var state_15107__$1 = state_15107;if(cljs.core.truth_(inst_15094))
{var statearr_15136_15171 = state_15107__$1;(statearr_15136_15171[1] = 20);
} else
{var statearr_15137_15172 = state_15107__$1;(statearr_15137_15172[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 20))
{var inst_15071 = (state_15107[15]);var state_15107__$1 = state_15107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15107__$1,23,out,inst_15071);
} else
{if((state_val_15108 === 21))
{var state_15107__$1 = state_15107;var statearr_15138_15173 = state_15107__$1;(statearr_15138_15173[2] = null);
(statearr_15138_15173[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 22))
{var inst_15064 = (state_15107[12]);var inst_15100 = (state_15107[2]);var inst_15056 = inst_15064;var state_15107__$1 = (function (){var statearr_15139 = state_15107;(statearr_15139[8] = inst_15056);
(statearr_15139[19] = inst_15100);
return statearr_15139;
})();var statearr_15140_15174 = state_15107__$1;(statearr_15140_15174[2] = null);
(statearr_15140_15174[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15108 === 23))
{var inst_15097 = (state_15107[2]);var state_15107__$1 = state_15107;var statearr_15141_15175 = state_15107__$1;(statearr_15141_15175[2] = inst_15097);
(statearr_15141_15175[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15145[0] = state_machine__5507__auto__);
(statearr_15145[1] = 1);
return statearr_15145;
});
var state_machine__5507__auto____1 = (function (state_15107){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15107);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15146){if((e15146 instanceof Object))
{var ex__5510__auto__ = e15146;var statearr_15147_15176 = state_15107;(statearr_15147_15176[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15107);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15177 = state_15107;
state_15107 = G__15177;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15107){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15148 = f__5522__auto__.call(null);(statearr_15148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15149);
return statearr_15148;
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
cljs.core.async.Pub = (function (){var obj15179 = {};return obj15179;
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
return (function (p1__15180_SHARP_){if(cljs.core.truth_(p1__15180_SHARP_.call(null,topic)))
{return p1__15180_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15180_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15305 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15306){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15306 = meta15306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15305.cljs$lang$type = true;
cljs.core.async.t15305.cljs$lang$ctorStr = "cljs.core.async/t15305";
cljs.core.async.t15305.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15305");
});})(mults,ensure_mult))
;
cljs.core.async.t15305.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15305.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15305.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15305.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15305.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15305.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15307){var self__ = this;
var _15307__$1 = this;return self__.meta15306;
});})(mults,ensure_mult))
;
cljs.core.async.t15305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15307,meta15306__$1){var self__ = this;
var _15307__$1 = this;return (new cljs.core.async.t15305(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15306__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15305 = ((function (mults,ensure_mult){
return (function __GT_t15305(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15306){return (new cljs.core.async.t15305(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15306));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15305(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15429 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15381){var state_val_15382 = (state_15381[1]);if((state_val_15382 === 1))
{var state_15381__$1 = state_15381;var statearr_15383_15430 = state_15381__$1;(statearr_15383_15430[2] = null);
(statearr_15383_15430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 2))
{var state_15381__$1 = state_15381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15381__$1,4,ch);
} else
{if((state_val_15382 === 3))
{var inst_15379 = (state_15381[2]);var state_15381__$1 = state_15381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15381__$1,inst_15379);
} else
{if((state_val_15382 === 4))
{var inst_15310 = (state_15381[7]);var inst_15310__$1 = (state_15381[2]);var inst_15311 = (inst_15310__$1 == null);var state_15381__$1 = (function (){var statearr_15384 = state_15381;(statearr_15384[7] = inst_15310__$1);
return statearr_15384;
})();if(cljs.core.truth_(inst_15311))
{var statearr_15385_15431 = state_15381__$1;(statearr_15385_15431[1] = 5);
} else
{var statearr_15386_15432 = state_15381__$1;(statearr_15386_15432[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 5))
{var inst_15317 = cljs.core.deref.call(null,mults);var inst_15318 = cljs.core.vals.call(null,inst_15317);var inst_15319 = cljs.core.seq.call(null,inst_15318);var inst_15320 = inst_15319;var inst_15321 = null;var inst_15322 = 0;var inst_15323 = 0;var state_15381__$1 = (function (){var statearr_15387 = state_15381;(statearr_15387[8] = inst_15322);
(statearr_15387[9] = inst_15323);
(statearr_15387[10] = inst_15320);
(statearr_15387[11] = inst_15321);
return statearr_15387;
})();var statearr_15388_15433 = state_15381__$1;(statearr_15388_15433[2] = null);
(statearr_15388_15433[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 6))
{var inst_15310 = (state_15381[7]);var inst_15360 = (state_15381[12]);var inst_15358 = (state_15381[13]);var inst_15358__$1 = topic_fn.call(null,inst_15310);var inst_15359 = cljs.core.deref.call(null,mults);var inst_15360__$1 = cljs.core.get.call(null,inst_15359,inst_15358__$1);var state_15381__$1 = (function (){var statearr_15389 = state_15381;(statearr_15389[12] = inst_15360__$1);
(statearr_15389[13] = inst_15358__$1);
return statearr_15389;
})();if(cljs.core.truth_(inst_15360__$1))
{var statearr_15390_15434 = state_15381__$1;(statearr_15390_15434[1] = 19);
} else
{var statearr_15391_15435 = state_15381__$1;(statearr_15391_15435[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 7))
{var inst_15377 = (state_15381[2]);var state_15381__$1 = state_15381;var statearr_15392_15436 = state_15381__$1;(statearr_15392_15436[2] = inst_15377);
(statearr_15392_15436[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 8))
{var inst_15322 = (state_15381[8]);var inst_15323 = (state_15381[9]);var inst_15325 = (inst_15323 < inst_15322);var inst_15326 = inst_15325;var state_15381__$1 = state_15381;if(cljs.core.truth_(inst_15326))
{var statearr_15396_15437 = state_15381__$1;(statearr_15396_15437[1] = 10);
} else
{var statearr_15397_15438 = state_15381__$1;(statearr_15397_15438[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 9))
{var inst_15356 = (state_15381[2]);var state_15381__$1 = state_15381;var statearr_15398_15439 = state_15381__$1;(statearr_15398_15439[2] = inst_15356);
(statearr_15398_15439[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 10))
{var inst_15322 = (state_15381[8]);var inst_15323 = (state_15381[9]);var inst_15320 = (state_15381[10]);var inst_15321 = (state_15381[11]);var inst_15328 = cljs.core._nth.call(null,inst_15321,inst_15323);var inst_15329 = cljs.core.async.muxch_STAR_.call(null,inst_15328);var inst_15330 = cljs.core.async.close_BANG_.call(null,inst_15329);var inst_15331 = (inst_15323 + 1);var tmp15393 = inst_15322;var tmp15394 = inst_15320;var tmp15395 = inst_15321;var inst_15320__$1 = tmp15394;var inst_15321__$1 = tmp15395;var inst_15322__$1 = tmp15393;var inst_15323__$1 = inst_15331;var state_15381__$1 = (function (){var statearr_15399 = state_15381;(statearr_15399[14] = inst_15330);
(statearr_15399[8] = inst_15322__$1);
(statearr_15399[9] = inst_15323__$1);
(statearr_15399[10] = inst_15320__$1);
(statearr_15399[11] = inst_15321__$1);
return statearr_15399;
})();var statearr_15400_15440 = state_15381__$1;(statearr_15400_15440[2] = null);
(statearr_15400_15440[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 11))
{var inst_15334 = (state_15381[15]);var inst_15320 = (state_15381[10]);var inst_15334__$1 = cljs.core.seq.call(null,inst_15320);var state_15381__$1 = (function (){var statearr_15401 = state_15381;(statearr_15401[15] = inst_15334__$1);
return statearr_15401;
})();if(inst_15334__$1)
{var statearr_15402_15441 = state_15381__$1;(statearr_15402_15441[1] = 13);
} else
{var statearr_15403_15442 = state_15381__$1;(statearr_15403_15442[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 12))
{var inst_15354 = (state_15381[2]);var state_15381__$1 = state_15381;var statearr_15404_15443 = state_15381__$1;(statearr_15404_15443[2] = inst_15354);
(statearr_15404_15443[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 13))
{var inst_15334 = (state_15381[15]);var inst_15336 = cljs.core.chunked_seq_QMARK_.call(null,inst_15334);var state_15381__$1 = state_15381;if(inst_15336)
{var statearr_15405_15444 = state_15381__$1;(statearr_15405_15444[1] = 16);
} else
{var statearr_15406_15445 = state_15381__$1;(statearr_15406_15445[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 14))
{var state_15381__$1 = state_15381;var statearr_15407_15446 = state_15381__$1;(statearr_15407_15446[2] = null);
(statearr_15407_15446[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 15))
{var inst_15352 = (state_15381[2]);var state_15381__$1 = state_15381;var statearr_15408_15447 = state_15381__$1;(statearr_15408_15447[2] = inst_15352);
(statearr_15408_15447[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 16))
{var inst_15334 = (state_15381[15]);var inst_15338 = cljs.core.chunk_first.call(null,inst_15334);var inst_15339 = cljs.core.chunk_rest.call(null,inst_15334);var inst_15340 = cljs.core.count.call(null,inst_15338);var inst_15320 = inst_15339;var inst_15321 = inst_15338;var inst_15322 = inst_15340;var inst_15323 = 0;var state_15381__$1 = (function (){var statearr_15409 = state_15381;(statearr_15409[8] = inst_15322);
(statearr_15409[9] = inst_15323);
(statearr_15409[10] = inst_15320);
(statearr_15409[11] = inst_15321);
return statearr_15409;
})();var statearr_15410_15448 = state_15381__$1;(statearr_15410_15448[2] = null);
(statearr_15410_15448[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 17))
{var inst_15334 = (state_15381[15]);var inst_15343 = cljs.core.first.call(null,inst_15334);var inst_15344 = cljs.core.async.muxch_STAR_.call(null,inst_15343);var inst_15345 = cljs.core.async.close_BANG_.call(null,inst_15344);var inst_15346 = cljs.core.next.call(null,inst_15334);var inst_15320 = inst_15346;var inst_15321 = null;var inst_15322 = 0;var inst_15323 = 0;var state_15381__$1 = (function (){var statearr_15411 = state_15381;(statearr_15411[16] = inst_15345);
(statearr_15411[8] = inst_15322);
(statearr_15411[9] = inst_15323);
(statearr_15411[10] = inst_15320);
(statearr_15411[11] = inst_15321);
return statearr_15411;
})();var statearr_15412_15449 = state_15381__$1;(statearr_15412_15449[2] = null);
(statearr_15412_15449[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 18))
{var inst_15349 = (state_15381[2]);var state_15381__$1 = state_15381;var statearr_15413_15450 = state_15381__$1;(statearr_15413_15450[2] = inst_15349);
(statearr_15413_15450[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 19))
{var state_15381__$1 = state_15381;var statearr_15414_15451 = state_15381__$1;(statearr_15414_15451[2] = null);
(statearr_15414_15451[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 20))
{var state_15381__$1 = state_15381;var statearr_15415_15452 = state_15381__$1;(statearr_15415_15452[2] = null);
(statearr_15415_15452[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 21))
{var inst_15374 = (state_15381[2]);var state_15381__$1 = (function (){var statearr_15416 = state_15381;(statearr_15416[17] = inst_15374);
return statearr_15416;
})();var statearr_15417_15453 = state_15381__$1;(statearr_15417_15453[2] = null);
(statearr_15417_15453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 22))
{var inst_15371 = (state_15381[2]);var state_15381__$1 = state_15381;var statearr_15418_15454 = state_15381__$1;(statearr_15418_15454[2] = inst_15371);
(statearr_15418_15454[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 23))
{var inst_15358 = (state_15381[13]);var inst_15362 = (state_15381[2]);var inst_15363 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15358);var state_15381__$1 = (function (){var statearr_15419 = state_15381;(statearr_15419[18] = inst_15362);
return statearr_15419;
})();var statearr_15420_15455 = state_15381__$1;(statearr_15420_15455[2] = inst_15363);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15381__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15382 === 24))
{var inst_15310 = (state_15381[7]);var inst_15360 = (state_15381[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15381,23,Object,null,22);var inst_15367 = cljs.core.async.muxch_STAR_.call(null,inst_15360);var state_15381__$1 = state_15381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15381__$1,25,inst_15367,inst_15310);
} else
{if((state_val_15382 === 25))
{var inst_15369 = (state_15381[2]);var state_15381__$1 = state_15381;var statearr_15421_15456 = state_15381__$1;(statearr_15421_15456[2] = inst_15369);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15381__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15425[0] = state_machine__5507__auto__);
(statearr_15425[1] = 1);
return statearr_15425;
});
var state_machine__5507__auto____1 = (function (state_15381){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15381);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15426){if((e15426 instanceof Object))
{var ex__5510__auto__ = e15426;var statearr_15427_15457 = state_15381;(statearr_15427_15457[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15458 = state_15381;
state_15381 = G__15458;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15381){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15428 = f__5522__auto__.call(null);(statearr_15428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15429);
return statearr_15428;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15565){var state_val_15566 = (state_15565[1]);if((state_val_15566 === 1))
{var state_15565__$1 = state_15565;var statearr_15567_15596 = state_15565__$1;(statearr_15567_15596[2] = null);
(statearr_15567_15596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 2))
{var inst_15528 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15529 = 0;var state_15565__$1 = (function (){var statearr_15568 = state_15565;(statearr_15568[7] = inst_15528);
(statearr_15568[8] = inst_15529);
return statearr_15568;
})();var statearr_15569_15597 = state_15565__$1;(statearr_15569_15597[2] = null);
(statearr_15569_15597[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 3))
{var inst_15563 = (state_15565[2]);var state_15565__$1 = state_15565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15565__$1,inst_15563);
} else
{if((state_val_15566 === 4))
{var inst_15529 = (state_15565[8]);var inst_15531 = (inst_15529 < cnt);var state_15565__$1 = state_15565;if(cljs.core.truth_(inst_15531))
{var statearr_15570_15598 = state_15565__$1;(statearr_15570_15598[1] = 6);
} else
{var statearr_15571_15599 = state_15565__$1;(statearr_15571_15599[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 5))
{var inst_15549 = (state_15565[2]);var state_15565__$1 = (function (){var statearr_15572 = state_15565;(statearr_15572[9] = inst_15549);
return statearr_15572;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15565__$1,12,dchan);
} else
{if((state_val_15566 === 6))
{var state_15565__$1 = state_15565;var statearr_15573_15600 = state_15565__$1;(statearr_15573_15600[2] = null);
(statearr_15573_15600[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 7))
{var state_15565__$1 = state_15565;var statearr_15574_15601 = state_15565__$1;(statearr_15574_15601[2] = null);
(statearr_15574_15601[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 8))
{var inst_15547 = (state_15565[2]);var state_15565__$1 = state_15565;var statearr_15575_15602 = state_15565__$1;(statearr_15575_15602[2] = inst_15547);
(statearr_15575_15602[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 9))
{var inst_15529 = (state_15565[8]);var inst_15542 = (state_15565[2]);var inst_15543 = (inst_15529 + 1);var inst_15529__$1 = inst_15543;var state_15565__$1 = (function (){var statearr_15576 = state_15565;(statearr_15576[10] = inst_15542);
(statearr_15576[8] = inst_15529__$1);
return statearr_15576;
})();var statearr_15577_15603 = state_15565__$1;(statearr_15577_15603[2] = null);
(statearr_15577_15603[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 10))
{var inst_15533 = (state_15565[2]);var inst_15534 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15565__$1 = (function (){var statearr_15578 = state_15565;(statearr_15578[11] = inst_15533);
return statearr_15578;
})();var statearr_15579_15604 = state_15565__$1;(statearr_15579_15604[2] = inst_15534);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15565__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 11))
{var inst_15529 = (state_15565[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15565,10,Object,null,9);var inst_15538 = chs__$1.call(null,inst_15529);var inst_15539 = done.call(null,inst_15529);var inst_15540 = cljs.core.async.take_BANG_.call(null,inst_15538,inst_15539);var state_15565__$1 = state_15565;var statearr_15580_15605 = state_15565__$1;(statearr_15580_15605[2] = inst_15540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15565__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 12))
{var inst_15551 = (state_15565[12]);var inst_15551__$1 = (state_15565[2]);var inst_15552 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15551__$1);var state_15565__$1 = (function (){var statearr_15581 = state_15565;(statearr_15581[12] = inst_15551__$1);
return statearr_15581;
})();if(cljs.core.truth_(inst_15552))
{var statearr_15582_15606 = state_15565__$1;(statearr_15582_15606[1] = 13);
} else
{var statearr_15583_15607 = state_15565__$1;(statearr_15583_15607[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 13))
{var inst_15554 = cljs.core.async.close_BANG_.call(null,out);var state_15565__$1 = state_15565;var statearr_15584_15608 = state_15565__$1;(statearr_15584_15608[2] = inst_15554);
(statearr_15584_15608[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 14))
{var inst_15551 = (state_15565[12]);var inst_15556 = cljs.core.apply.call(null,f,inst_15551);var state_15565__$1 = state_15565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15565__$1,16,out,inst_15556);
} else
{if((state_val_15566 === 15))
{var inst_15561 = (state_15565[2]);var state_15565__$1 = state_15565;var statearr_15585_15609 = state_15565__$1;(statearr_15585_15609[2] = inst_15561);
(statearr_15585_15609[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15566 === 16))
{var inst_15558 = (state_15565[2]);var state_15565__$1 = (function (){var statearr_15586 = state_15565;(statearr_15586[13] = inst_15558);
return statearr_15586;
})();var statearr_15587_15610 = state_15565__$1;(statearr_15587_15610[2] = null);
(statearr_15587_15610[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15591[0] = state_machine__5507__auto__);
(statearr_15591[1] = 1);
return statearr_15591;
});
var state_machine__5507__auto____1 = (function (state_15565){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15592){if((e15592 instanceof Object))
{var ex__5510__auto__ = e15592;var statearr_15593_15611 = state_15565;(statearr_15593_15611[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15612 = state_15565;
state_15565 = G__15612;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15565){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15594 = f__5522__auto__.call(null);(statearr_15594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15595);
return statearr_15594;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15720 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15696){var state_val_15697 = (state_15696[1]);if((state_val_15697 === 1))
{var inst_15667 = cljs.core.vec.call(null,chs);var inst_15668 = inst_15667;var state_15696__$1 = (function (){var statearr_15698 = state_15696;(statearr_15698[7] = inst_15668);
return statearr_15698;
})();var statearr_15699_15721 = state_15696__$1;(statearr_15699_15721[2] = null);
(statearr_15699_15721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15697 === 2))
{var inst_15668 = (state_15696[7]);var inst_15670 = cljs.core.count.call(null,inst_15668);var inst_15671 = (inst_15670 > 0);var state_15696__$1 = state_15696;if(cljs.core.truth_(inst_15671))
{var statearr_15700_15722 = state_15696__$1;(statearr_15700_15722[1] = 4);
} else
{var statearr_15701_15723 = state_15696__$1;(statearr_15701_15723[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15697 === 3))
{var inst_15694 = (state_15696[2]);var state_15696__$1 = state_15696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15696__$1,inst_15694);
} else
{if((state_val_15697 === 4))
{var inst_15668 = (state_15696[7]);var state_15696__$1 = state_15696;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15696__$1,7,inst_15668);
} else
{if((state_val_15697 === 5))
{var inst_15690 = cljs.core.async.close_BANG_.call(null,out);var state_15696__$1 = state_15696;var statearr_15702_15724 = state_15696__$1;(statearr_15702_15724[2] = inst_15690);
(statearr_15702_15724[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15697 === 6))
{var inst_15692 = (state_15696[2]);var state_15696__$1 = state_15696;var statearr_15703_15725 = state_15696__$1;(statearr_15703_15725[2] = inst_15692);
(statearr_15703_15725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15697 === 7))
{var inst_15675 = (state_15696[8]);var inst_15676 = (state_15696[9]);var inst_15675__$1 = (state_15696[2]);var inst_15676__$1 = cljs.core.nth.call(null,inst_15675__$1,0,null);var inst_15677 = cljs.core.nth.call(null,inst_15675__$1,1,null);var inst_15678 = (inst_15676__$1 == null);var state_15696__$1 = (function (){var statearr_15704 = state_15696;(statearr_15704[8] = inst_15675__$1);
(statearr_15704[10] = inst_15677);
(statearr_15704[9] = inst_15676__$1);
return statearr_15704;
})();if(cljs.core.truth_(inst_15678))
{var statearr_15705_15726 = state_15696__$1;(statearr_15705_15726[1] = 8);
} else
{var statearr_15706_15727 = state_15696__$1;(statearr_15706_15727[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15697 === 8))
{var inst_15668 = (state_15696[7]);var inst_15675 = (state_15696[8]);var inst_15677 = (state_15696[10]);var inst_15676 = (state_15696[9]);var inst_15680 = (function (){var c = inst_15677;var v = inst_15676;var vec__15673 = inst_15675;var cs = inst_15668;return ((function (c,v,vec__15673,cs,inst_15668,inst_15675,inst_15677,inst_15676,state_val_15697){
return (function (p1__15613_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15613_SHARP_);
});
;})(c,v,vec__15673,cs,inst_15668,inst_15675,inst_15677,inst_15676,state_val_15697))
})();var inst_15681 = cljs.core.filterv.call(null,inst_15680,inst_15668);var inst_15668__$1 = inst_15681;var state_15696__$1 = (function (){var statearr_15707 = state_15696;(statearr_15707[7] = inst_15668__$1);
return statearr_15707;
})();var statearr_15708_15728 = state_15696__$1;(statearr_15708_15728[2] = null);
(statearr_15708_15728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15697 === 9))
{var inst_15676 = (state_15696[9]);var state_15696__$1 = state_15696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15696__$1,11,out,inst_15676);
} else
{if((state_val_15697 === 10))
{var inst_15688 = (state_15696[2]);var state_15696__$1 = state_15696;var statearr_15710_15729 = state_15696__$1;(statearr_15710_15729[2] = inst_15688);
(statearr_15710_15729[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15697 === 11))
{var inst_15668 = (state_15696[7]);var inst_15685 = (state_15696[2]);var tmp15709 = inst_15668;var inst_15668__$1 = tmp15709;var state_15696__$1 = (function (){var statearr_15711 = state_15696;(statearr_15711[7] = inst_15668__$1);
(statearr_15711[11] = inst_15685);
return statearr_15711;
})();var statearr_15712_15730 = state_15696__$1;(statearr_15712_15730[2] = null);
(statearr_15712_15730[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15716 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15716[0] = state_machine__5507__auto__);
(statearr_15716[1] = 1);
return statearr_15716;
});
var state_machine__5507__auto____1 = (function (state_15696){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15696);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15717){if((e15717 instanceof Object))
{var ex__5510__auto__ = e15717;var statearr_15718_15731 = state_15696;(statearr_15718_15731[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15732 = state_15696;
state_15696 = G__15732;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15696){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15719 = f__5522__auto__.call(null);(statearr_15719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15720);
return statearr_15719;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15825 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15802){var state_val_15803 = (state_15802[1]);if((state_val_15803 === 1))
{var inst_15779 = 0;var state_15802__$1 = (function (){var statearr_15804 = state_15802;(statearr_15804[7] = inst_15779);
return statearr_15804;
})();var statearr_15805_15826 = state_15802__$1;(statearr_15805_15826[2] = null);
(statearr_15805_15826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15803 === 2))
{var inst_15779 = (state_15802[7]);var inst_15781 = (inst_15779 < n);var state_15802__$1 = state_15802;if(cljs.core.truth_(inst_15781))
{var statearr_15806_15827 = state_15802__$1;(statearr_15806_15827[1] = 4);
} else
{var statearr_15807_15828 = state_15802__$1;(statearr_15807_15828[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15803 === 3))
{var inst_15799 = (state_15802[2]);var inst_15800 = cljs.core.async.close_BANG_.call(null,out);var state_15802__$1 = (function (){var statearr_15808 = state_15802;(statearr_15808[8] = inst_15799);
return statearr_15808;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15802__$1,inst_15800);
} else
{if((state_val_15803 === 4))
{var state_15802__$1 = state_15802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15802__$1,7,ch);
} else
{if((state_val_15803 === 5))
{var state_15802__$1 = state_15802;var statearr_15809_15829 = state_15802__$1;(statearr_15809_15829[2] = null);
(statearr_15809_15829[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15803 === 6))
{var inst_15797 = (state_15802[2]);var state_15802__$1 = state_15802;var statearr_15810_15830 = state_15802__$1;(statearr_15810_15830[2] = inst_15797);
(statearr_15810_15830[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15803 === 7))
{var inst_15784 = (state_15802[9]);var inst_15784__$1 = (state_15802[2]);var inst_15785 = (inst_15784__$1 == null);var inst_15786 = cljs.core.not.call(null,inst_15785);var state_15802__$1 = (function (){var statearr_15811 = state_15802;(statearr_15811[9] = inst_15784__$1);
return statearr_15811;
})();if(inst_15786)
{var statearr_15812_15831 = state_15802__$1;(statearr_15812_15831[1] = 8);
} else
{var statearr_15813_15832 = state_15802__$1;(statearr_15813_15832[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15803 === 8))
{var inst_15784 = (state_15802[9]);var state_15802__$1 = state_15802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15802__$1,11,out,inst_15784);
} else
{if((state_val_15803 === 9))
{var state_15802__$1 = state_15802;var statearr_15814_15833 = state_15802__$1;(statearr_15814_15833[2] = null);
(statearr_15814_15833[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15803 === 10))
{var inst_15794 = (state_15802[2]);var state_15802__$1 = state_15802;var statearr_15815_15834 = state_15802__$1;(statearr_15815_15834[2] = inst_15794);
(statearr_15815_15834[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15803 === 11))
{var inst_15779 = (state_15802[7]);var inst_15789 = (state_15802[2]);var inst_15790 = (inst_15779 + 1);var inst_15779__$1 = inst_15790;var state_15802__$1 = (function (){var statearr_15816 = state_15802;(statearr_15816[7] = inst_15779__$1);
(statearr_15816[10] = inst_15789);
return statearr_15816;
})();var statearr_15817_15835 = state_15802__$1;(statearr_15817_15835[2] = null);
(statearr_15817_15835[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15821 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15821[0] = state_machine__5507__auto__);
(statearr_15821[1] = 1);
return statearr_15821;
});
var state_machine__5507__auto____1 = (function (state_15802){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15802);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15822){if((e15822 instanceof Object))
{var ex__5510__auto__ = e15822;var statearr_15823_15836 = state_15802;(statearr_15823_15836[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15837 = state_15802;
state_15802 = G__15837;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15802){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15824 = f__5522__auto__.call(null);(statearr_15824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15825);
return statearr_15824;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15934 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15909){var state_val_15910 = (state_15909[1]);if((state_val_15910 === 1))
{var inst_15886 = null;var state_15909__$1 = (function (){var statearr_15911 = state_15909;(statearr_15911[7] = inst_15886);
return statearr_15911;
})();var statearr_15912_15935 = state_15909__$1;(statearr_15912_15935[2] = null);
(statearr_15912_15935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15910 === 2))
{var state_15909__$1 = state_15909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15909__$1,4,ch);
} else
{if((state_val_15910 === 3))
{var inst_15906 = (state_15909[2]);var inst_15907 = cljs.core.async.close_BANG_.call(null,out);var state_15909__$1 = (function (){var statearr_15913 = state_15909;(statearr_15913[8] = inst_15906);
return statearr_15913;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15909__$1,inst_15907);
} else
{if((state_val_15910 === 4))
{var inst_15889 = (state_15909[9]);var inst_15889__$1 = (state_15909[2]);var inst_15890 = (inst_15889__$1 == null);var inst_15891 = cljs.core.not.call(null,inst_15890);var state_15909__$1 = (function (){var statearr_15914 = state_15909;(statearr_15914[9] = inst_15889__$1);
return statearr_15914;
})();if(inst_15891)
{var statearr_15915_15936 = state_15909__$1;(statearr_15915_15936[1] = 5);
} else
{var statearr_15916_15937 = state_15909__$1;(statearr_15916_15937[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15910 === 5))
{var inst_15889 = (state_15909[9]);var inst_15886 = (state_15909[7]);var inst_15893 = cljs.core._EQ_.call(null,inst_15889,inst_15886);var state_15909__$1 = state_15909;if(inst_15893)
{var statearr_15917_15938 = state_15909__$1;(statearr_15917_15938[1] = 8);
} else
{var statearr_15918_15939 = state_15909__$1;(statearr_15918_15939[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15910 === 6))
{var state_15909__$1 = state_15909;var statearr_15920_15940 = state_15909__$1;(statearr_15920_15940[2] = null);
(statearr_15920_15940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15910 === 7))
{var inst_15904 = (state_15909[2]);var state_15909__$1 = state_15909;var statearr_15921_15941 = state_15909__$1;(statearr_15921_15941[2] = inst_15904);
(statearr_15921_15941[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15910 === 8))
{var inst_15886 = (state_15909[7]);var tmp15919 = inst_15886;var inst_15886__$1 = tmp15919;var state_15909__$1 = (function (){var statearr_15922 = state_15909;(statearr_15922[7] = inst_15886__$1);
return statearr_15922;
})();var statearr_15923_15942 = state_15909__$1;(statearr_15923_15942[2] = null);
(statearr_15923_15942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15910 === 9))
{var inst_15889 = (state_15909[9]);var state_15909__$1 = state_15909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15909__$1,11,out,inst_15889);
} else
{if((state_val_15910 === 10))
{var inst_15901 = (state_15909[2]);var state_15909__$1 = state_15909;var statearr_15924_15943 = state_15909__$1;(statearr_15924_15943[2] = inst_15901);
(statearr_15924_15943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15910 === 11))
{var inst_15889 = (state_15909[9]);var inst_15898 = (state_15909[2]);var inst_15886 = inst_15889;var state_15909__$1 = (function (){var statearr_15925 = state_15909;(statearr_15925[10] = inst_15898);
(statearr_15925[7] = inst_15886);
return statearr_15925;
})();var statearr_15926_15944 = state_15909__$1;(statearr_15926_15944[2] = null);
(statearr_15926_15944[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15930 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15930[0] = state_machine__5507__auto__);
(statearr_15930[1] = 1);
return statearr_15930;
});
var state_machine__5507__auto____1 = (function (state_15909){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15909);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15931){if((e15931 instanceof Object))
{var ex__5510__auto__ = e15931;var statearr_15932_15945 = state_15909;(statearr_15932_15945[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15946 = state_15909;
state_15909 = G__15946;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15909){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15933 = f__5522__auto__.call(null);(statearr_15933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15934);
return statearr_15933;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16081 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16051){var state_val_16052 = (state_16051[1]);if((state_val_16052 === 1))
{var inst_16014 = (new Array(n));var inst_16015 = inst_16014;var inst_16016 = 0;var state_16051__$1 = (function (){var statearr_16053 = state_16051;(statearr_16053[7] = inst_16015);
(statearr_16053[8] = inst_16016);
return statearr_16053;
})();var statearr_16054_16082 = state_16051__$1;(statearr_16054_16082[2] = null);
(statearr_16054_16082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 2))
{var state_16051__$1 = state_16051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16051__$1,4,ch);
} else
{if((state_val_16052 === 3))
{var inst_16049 = (state_16051[2]);var state_16051__$1 = state_16051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16051__$1,inst_16049);
} else
{if((state_val_16052 === 4))
{var inst_16019 = (state_16051[9]);var inst_16019__$1 = (state_16051[2]);var inst_16020 = (inst_16019__$1 == null);var inst_16021 = cljs.core.not.call(null,inst_16020);var state_16051__$1 = (function (){var statearr_16055 = state_16051;(statearr_16055[9] = inst_16019__$1);
return statearr_16055;
})();if(inst_16021)
{var statearr_16056_16083 = state_16051__$1;(statearr_16056_16083[1] = 5);
} else
{var statearr_16057_16084 = state_16051__$1;(statearr_16057_16084[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 5))
{var inst_16024 = (state_16051[10]);var inst_16019 = (state_16051[9]);var inst_16015 = (state_16051[7]);var inst_16016 = (state_16051[8]);var inst_16023 = (inst_16015[inst_16016] = inst_16019);var inst_16024__$1 = (inst_16016 + 1);var inst_16025 = (inst_16024__$1 < n);var state_16051__$1 = (function (){var statearr_16058 = state_16051;(statearr_16058[10] = inst_16024__$1);
(statearr_16058[11] = inst_16023);
return statearr_16058;
})();if(cljs.core.truth_(inst_16025))
{var statearr_16059_16085 = state_16051__$1;(statearr_16059_16085[1] = 8);
} else
{var statearr_16060_16086 = state_16051__$1;(statearr_16060_16086[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 6))
{var inst_16016 = (state_16051[8]);var inst_16037 = (inst_16016 > 0);var state_16051__$1 = state_16051;if(cljs.core.truth_(inst_16037))
{var statearr_16062_16087 = state_16051__$1;(statearr_16062_16087[1] = 12);
} else
{var statearr_16063_16088 = state_16051__$1;(statearr_16063_16088[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 7))
{var inst_16047 = (state_16051[2]);var state_16051__$1 = state_16051;var statearr_16064_16089 = state_16051__$1;(statearr_16064_16089[2] = inst_16047);
(statearr_16064_16089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 8))
{var inst_16024 = (state_16051[10]);var inst_16015 = (state_16051[7]);var tmp16061 = inst_16015;var inst_16015__$1 = tmp16061;var inst_16016 = inst_16024;var state_16051__$1 = (function (){var statearr_16065 = state_16051;(statearr_16065[7] = inst_16015__$1);
(statearr_16065[8] = inst_16016);
return statearr_16065;
})();var statearr_16066_16090 = state_16051__$1;(statearr_16066_16090[2] = null);
(statearr_16066_16090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 9))
{var inst_16015 = (state_16051[7]);var inst_16029 = cljs.core.vec.call(null,inst_16015);var state_16051__$1 = state_16051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16051__$1,11,out,inst_16029);
} else
{if((state_val_16052 === 10))
{var inst_16035 = (state_16051[2]);var state_16051__$1 = state_16051;var statearr_16067_16091 = state_16051__$1;(statearr_16067_16091[2] = inst_16035);
(statearr_16067_16091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 11))
{var inst_16031 = (state_16051[2]);var inst_16032 = (new Array(n));var inst_16015 = inst_16032;var inst_16016 = 0;var state_16051__$1 = (function (){var statearr_16068 = state_16051;(statearr_16068[12] = inst_16031);
(statearr_16068[7] = inst_16015);
(statearr_16068[8] = inst_16016);
return statearr_16068;
})();var statearr_16069_16092 = state_16051__$1;(statearr_16069_16092[2] = null);
(statearr_16069_16092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 12))
{var inst_16015 = (state_16051[7]);var inst_16039 = cljs.core.vec.call(null,inst_16015);var state_16051__$1 = state_16051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16051__$1,15,out,inst_16039);
} else
{if((state_val_16052 === 13))
{var state_16051__$1 = state_16051;var statearr_16070_16093 = state_16051__$1;(statearr_16070_16093[2] = null);
(statearr_16070_16093[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 14))
{var inst_16044 = (state_16051[2]);var inst_16045 = cljs.core.async.close_BANG_.call(null,out);var state_16051__$1 = (function (){var statearr_16071 = state_16051;(statearr_16071[13] = inst_16044);
return statearr_16071;
})();var statearr_16072_16094 = state_16051__$1;(statearr_16072_16094[2] = inst_16045);
(statearr_16072_16094[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 15))
{var inst_16041 = (state_16051[2]);var state_16051__$1 = state_16051;var statearr_16073_16095 = state_16051__$1;(statearr_16073_16095[2] = inst_16041);
(statearr_16073_16095[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16077[0] = state_machine__5507__auto__);
(statearr_16077[1] = 1);
return statearr_16077;
});
var state_machine__5507__auto____1 = (function (state_16051){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16078){if((e16078 instanceof Object))
{var ex__5510__auto__ = e16078;var statearr_16079_16096 = state_16051;(statearr_16079_16096[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16097 = state_16051;
state_16051 = G__16097;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16051){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16080 = f__5522__auto__.call(null);(statearr_16080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16081);
return statearr_16080;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16240 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16210){var state_val_16211 = (state_16210[1]);if((state_val_16211 === 1))
{var inst_16169 = [];var inst_16170 = inst_16169;var inst_16171 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16210__$1 = (function (){var statearr_16212 = state_16210;(statearr_16212[7] = inst_16170);
(statearr_16212[8] = inst_16171);
return statearr_16212;
})();var statearr_16213_16241 = state_16210__$1;(statearr_16213_16241[2] = null);
(statearr_16213_16241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 2))
{var state_16210__$1 = state_16210;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16210__$1,4,ch);
} else
{if((state_val_16211 === 3))
{var inst_16208 = (state_16210[2]);var state_16210__$1 = state_16210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16210__$1,inst_16208);
} else
{if((state_val_16211 === 4))
{var inst_16174 = (state_16210[9]);var inst_16174__$1 = (state_16210[2]);var inst_16175 = (inst_16174__$1 == null);var inst_16176 = cljs.core.not.call(null,inst_16175);var state_16210__$1 = (function (){var statearr_16214 = state_16210;(statearr_16214[9] = inst_16174__$1);
return statearr_16214;
})();if(inst_16176)
{var statearr_16215_16242 = state_16210__$1;(statearr_16215_16242[1] = 5);
} else
{var statearr_16216_16243 = state_16210__$1;(statearr_16216_16243[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 5))
{var inst_16171 = (state_16210[8]);var inst_16178 = (state_16210[10]);var inst_16174 = (state_16210[9]);var inst_16178__$1 = f.call(null,inst_16174);var inst_16179 = cljs.core._EQ_.call(null,inst_16178__$1,inst_16171);var inst_16180 = cljs.core.keyword_identical_QMARK_.call(null,inst_16171,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16181 = (inst_16179) || (inst_16180);var state_16210__$1 = (function (){var statearr_16217 = state_16210;(statearr_16217[10] = inst_16178__$1);
return statearr_16217;
})();if(cljs.core.truth_(inst_16181))
{var statearr_16218_16244 = state_16210__$1;(statearr_16218_16244[1] = 8);
} else
{var statearr_16219_16245 = state_16210__$1;(statearr_16219_16245[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 6))
{var inst_16170 = (state_16210[7]);var inst_16195 = inst_16170.length;var inst_16196 = (inst_16195 > 0);var state_16210__$1 = state_16210;if(cljs.core.truth_(inst_16196))
{var statearr_16221_16246 = state_16210__$1;(statearr_16221_16246[1] = 12);
} else
{var statearr_16222_16247 = state_16210__$1;(statearr_16222_16247[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 7))
{var inst_16206 = (state_16210[2]);var state_16210__$1 = state_16210;var statearr_16223_16248 = state_16210__$1;(statearr_16223_16248[2] = inst_16206);
(statearr_16223_16248[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 8))
{var inst_16170 = (state_16210[7]);var inst_16178 = (state_16210[10]);var inst_16174 = (state_16210[9]);var inst_16183 = inst_16170.push(inst_16174);var tmp16220 = inst_16170;var inst_16170__$1 = tmp16220;var inst_16171 = inst_16178;var state_16210__$1 = (function (){var statearr_16224 = state_16210;(statearr_16224[7] = inst_16170__$1);
(statearr_16224[8] = inst_16171);
(statearr_16224[11] = inst_16183);
return statearr_16224;
})();var statearr_16225_16249 = state_16210__$1;(statearr_16225_16249[2] = null);
(statearr_16225_16249[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 9))
{var inst_16170 = (state_16210[7]);var inst_16186 = cljs.core.vec.call(null,inst_16170);var state_16210__$1 = state_16210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16210__$1,11,out,inst_16186);
} else
{if((state_val_16211 === 10))
{var inst_16193 = (state_16210[2]);var state_16210__$1 = state_16210;var statearr_16226_16250 = state_16210__$1;(statearr_16226_16250[2] = inst_16193);
(statearr_16226_16250[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 11))
{var inst_16178 = (state_16210[10]);var inst_16174 = (state_16210[9]);var inst_16188 = (state_16210[2]);var inst_16189 = [];var inst_16190 = inst_16189.push(inst_16174);var inst_16170 = inst_16189;var inst_16171 = inst_16178;var state_16210__$1 = (function (){var statearr_16227 = state_16210;(statearr_16227[7] = inst_16170);
(statearr_16227[8] = inst_16171);
(statearr_16227[12] = inst_16188);
(statearr_16227[13] = inst_16190);
return statearr_16227;
})();var statearr_16228_16251 = state_16210__$1;(statearr_16228_16251[2] = null);
(statearr_16228_16251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 12))
{var inst_16170 = (state_16210[7]);var inst_16198 = cljs.core.vec.call(null,inst_16170);var state_16210__$1 = state_16210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16210__$1,15,out,inst_16198);
} else
{if((state_val_16211 === 13))
{var state_16210__$1 = state_16210;var statearr_16229_16252 = state_16210__$1;(statearr_16229_16252[2] = null);
(statearr_16229_16252[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 14))
{var inst_16203 = (state_16210[2]);var inst_16204 = cljs.core.async.close_BANG_.call(null,out);var state_16210__$1 = (function (){var statearr_16230 = state_16210;(statearr_16230[14] = inst_16203);
return statearr_16230;
})();var statearr_16231_16253 = state_16210__$1;(statearr_16231_16253[2] = inst_16204);
(statearr_16231_16253[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16211 === 15))
{var inst_16200 = (state_16210[2]);var state_16210__$1 = state_16210;var statearr_16232_16254 = state_16210__$1;(statearr_16232_16254[2] = inst_16200);
(statearr_16232_16254[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16236[0] = state_machine__5507__auto__);
(statearr_16236[1] = 1);
return statearr_16236;
});
var state_machine__5507__auto____1 = (function (state_16210){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16210);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16237){if((e16237 instanceof Object))
{var ex__5510__auto__ = e16237;var statearr_16238_16255 = state_16210;(statearr_16238_16255[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16210);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16256 = state_16210;
state_16210 = G__16256;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16210){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16239 = f__5522__auto__.call(null);(statearr_16239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16240);
return statearr_16239;
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