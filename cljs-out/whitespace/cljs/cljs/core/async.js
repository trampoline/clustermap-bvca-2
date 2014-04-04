// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t46700 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46700 = (function (f,fn_handler,meta46701){
this.f = f;
this.fn_handler = fn_handler;
this.meta46701 = meta46701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46700.cljs$lang$type = true;
cljs.core.async.t46700.cljs$lang$ctorStr = "cljs.core.async/t46700";
cljs.core.async.t46700.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46700");
});
cljs.core.async.t46700.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t46700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t46700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46702){var self__ = this;
var _46702__$1 = this;return self__.meta46701;
});
cljs.core.async.t46700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46702,meta46701__$1){var self__ = this;
var _46702__$1 = this;return (new cljs.core.async.t46700(self__.f,self__.fn_handler,meta46701__$1));
});
cljs.core.async.__GT_t46700 = (function __GT_t46700(f__$1,fn_handler__$1,meta46701){return (new cljs.core.async.t46700(f__$1,fn_handler__$1,meta46701));
});
}
return (new cljs.core.async.t46700(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__46704 = buff;if(G__46704)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__46704.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__46704.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__46704);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__46704);
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
{var val_46705 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_46705);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_46705);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___46706 = n;var x_46707 = 0;while(true){
if((x_46707 < n__4289__auto___46706))
{(a[x_46707] = 0);
{
var G__46708 = (x_46707 + 1);
x_46707 = G__46708;
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
var G__46709 = (i + 1);
i = G__46709;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t46713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46713 = (function (flag,alt_flag,meta46714){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta46714 = meta46714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46713.cljs$lang$type = true;
cljs.core.async.t46713.cljs$lang$ctorStr = "cljs.core.async/t46713";
cljs.core.async.t46713.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46713");
});
cljs.core.async.t46713.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t46713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t46713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46715){var self__ = this;
var _46715__$1 = this;return self__.meta46714;
});
cljs.core.async.t46713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46715,meta46714__$1){var self__ = this;
var _46715__$1 = this;return (new cljs.core.async.t46713(self__.flag,self__.alt_flag,meta46714__$1));
});
cljs.core.async.__GT_t46713 = (function __GT_t46713(flag__$1,alt_flag__$1,meta46714){return (new cljs.core.async.t46713(flag__$1,alt_flag__$1,meta46714));
});
}
return (new cljs.core.async.t46713(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t46719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46719 = (function (cb,flag,alt_handler,meta46720){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta46720 = meta46720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46719.cljs$lang$type = true;
cljs.core.async.t46719.cljs$lang$ctorStr = "cljs.core.async/t46719";
cljs.core.async.t46719.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46719");
});
cljs.core.async.t46719.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t46719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t46719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46721){var self__ = this;
var _46721__$1 = this;return self__.meta46720;
});
cljs.core.async.t46719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46721,meta46720__$1){var self__ = this;
var _46721__$1 = this;return (new cljs.core.async.t46719(self__.cb,self__.flag,self__.alt_handler,meta46720__$1));
});
cljs.core.async.__GT_t46719 = (function __GT_t46719(cb__$1,flag__$1,alt_handler__$1,meta46720){return (new cljs.core.async.t46719(cb__$1,flag__$1,alt_handler__$1,meta46720));
});
}
return (new cljs.core.async.t46719(cb,flag,alt_handler,null));
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
return (function (p1__46722_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46722_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__46723 = (i + 1);
i = G__46723;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
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
var alts_BANG___delegate = function (ports,p__46724){var map__46726 = p__46724;var map__46726__$1 = ((cljs.core.seq_QMARK_.call(null,map__46726))?cljs.core.apply.call(null,cljs.core.hash_map,map__46726):map__46726);var opts = map__46726__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__46724 = null;if (arguments.length > 1) {
  p__46724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__46724);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__46727){
var ports = cljs.core.first(arglist__46727);
var p__46724 = cljs.core.rest(arglist__46727);
return alts_BANG___delegate(ports,p__46724);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t46735 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46735 = (function (ch,f,map_LT_,meta46736){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46736 = meta46736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46735.cljs$lang$type = true;
cljs.core.async.t46735.cljs$lang$ctorStr = "cljs.core.async/t46735";
cljs.core.async.t46735.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46735");
});
cljs.core.async.t46735.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t46735.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t46738 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46738 = (function (fn1,_,meta46736,ch,f,map_LT_,meta46739){
this.fn1 = fn1;
this._ = _;
this.meta46736 = meta46736;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46739 = meta46739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46738.cljs$lang$type = true;
cljs.core.async.t46738.cljs$lang$ctorStr = "cljs.core.async/t46738";
cljs.core.async.t46738.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46738");
});
cljs.core.async.t46738.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t46738.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t46738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__46728_SHARP_){return f1.call(null,(((p1__46728_SHARP_ == null))?null:self__.f.call(null,p1__46728_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t46738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46740){var self__ = this;
var _46740__$1 = this;return self__.meta46739;
});
cljs.core.async.t46738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46740,meta46739__$1){var self__ = this;
var _46740__$1 = this;return (new cljs.core.async.t46738(self__.fn1,self__._,self__.meta46736,self__.ch,self__.f,self__.map_LT_,meta46739__$1));
});
cljs.core.async.__GT_t46738 = (function __GT_t46738(fn1__$1,___$2,meta46736__$1,ch__$2,f__$2,map_LT___$2,meta46739){return (new cljs.core.async.t46738(fn1__$1,___$2,meta46736__$1,ch__$2,f__$2,map_LT___$2,meta46739));
});
}
return (new cljs.core.async.t46738(fn1,___$1,self__.meta46736,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t46735.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46737){var self__ = this;
var _46737__$1 = this;return self__.meta46736;
});
cljs.core.async.t46735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46737,meta46736__$1){var self__ = this;
var _46737__$1 = this;return (new cljs.core.async.t46735(self__.ch,self__.f,self__.map_LT_,meta46736__$1));
});
cljs.core.async.__GT_t46735 = (function __GT_t46735(ch__$1,f__$1,map_LT___$1,meta46736){return (new cljs.core.async.t46735(ch__$1,f__$1,map_LT___$1,meta46736));
});
}
return (new cljs.core.async.t46735(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t46744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46744 = (function (ch,f,map_GT_,meta46745){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta46745 = meta46745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46744.cljs$lang$type = true;
cljs.core.async.t46744.cljs$lang$ctorStr = "cljs.core.async/t46744";
cljs.core.async.t46744.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46744");
});
cljs.core.async.t46744.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t46744.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t46744.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46746){var self__ = this;
var _46746__$1 = this;return self__.meta46745;
});
cljs.core.async.t46744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46746,meta46745__$1){var self__ = this;
var _46746__$1 = this;return (new cljs.core.async.t46744(self__.ch,self__.f,self__.map_GT_,meta46745__$1));
});
cljs.core.async.__GT_t46744 = (function __GT_t46744(ch__$1,f__$1,map_GT___$1,meta46745){return (new cljs.core.async.t46744(ch__$1,f__$1,map_GT___$1,meta46745));
});
}
return (new cljs.core.async.t46744(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t46750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46750 = (function (ch,p,filter_GT_,meta46751){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta46751 = meta46751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46750.cljs$lang$type = true;
cljs.core.async.t46750.cljs$lang$ctorStr = "cljs.core.async/t46750";
cljs.core.async.t46750.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46750");
});
cljs.core.async.t46750.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46750.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t46750.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46750.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t46750.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46750.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46752){var self__ = this;
var _46752__$1 = this;return self__.meta46751;
});
cljs.core.async.t46750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46752,meta46751__$1){var self__ = this;
var _46752__$1 = this;return (new cljs.core.async.t46750(self__.ch,self__.p,self__.filter_GT_,meta46751__$1));
});
cljs.core.async.__GT_t46750 = (function __GT_t46750(ch__$1,p__$1,filter_GT___$1,meta46751){return (new cljs.core.async.t46750(ch__$1,p__$1,filter_GT___$1,meta46751));
});
}
return (new cljs.core.async.t46750(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___46835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_46814){var state_val_46815 = (state_46814[1]);if((state_val_46815 === 1))
{var state_46814__$1 = state_46814;var statearr_46816_46836 = state_46814__$1;(statearr_46816_46836[2] = null);
(statearr_46816_46836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46815 === 2))
{var state_46814__$1 = state_46814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46814__$1,4,ch);
} else
{if((state_val_46815 === 3))
{var inst_46812 = (state_46814[2]);var state_46814__$1 = state_46814;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46814__$1,inst_46812);
} else
{if((state_val_46815 === 4))
{var inst_46796 = (state_46814[7]);var inst_46796__$1 = (state_46814[2]);var inst_46797 = (inst_46796__$1 == null);var state_46814__$1 = (function (){var statearr_46817 = state_46814;(statearr_46817[7] = inst_46796__$1);
return statearr_46817;
})();if(cljs.core.truth_(inst_46797))
{var statearr_46818_46837 = state_46814__$1;(statearr_46818_46837[1] = 5);
} else
{var statearr_46819_46838 = state_46814__$1;(statearr_46819_46838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46815 === 5))
{var inst_46799 = cljs.core.async.close_BANG_.call(null,out);var state_46814__$1 = state_46814;var statearr_46820_46839 = state_46814__$1;(statearr_46820_46839[2] = inst_46799);
(statearr_46820_46839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46815 === 6))
{var inst_46796 = (state_46814[7]);var inst_46801 = p.call(null,inst_46796);var state_46814__$1 = state_46814;if(cljs.core.truth_(inst_46801))
{var statearr_46821_46840 = state_46814__$1;(statearr_46821_46840[1] = 8);
} else
{var statearr_46822_46841 = state_46814__$1;(statearr_46822_46841[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46815 === 7))
{var inst_46810 = (state_46814[2]);var state_46814__$1 = state_46814;var statearr_46823_46842 = state_46814__$1;(statearr_46823_46842[2] = inst_46810);
(statearr_46823_46842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46815 === 8))
{var inst_46796 = (state_46814[7]);var state_46814__$1 = state_46814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46814__$1,11,out,inst_46796);
} else
{if((state_val_46815 === 9))
{var state_46814__$1 = state_46814;var statearr_46824_46843 = state_46814__$1;(statearr_46824_46843[2] = null);
(statearr_46824_46843[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46815 === 10))
{var inst_46807 = (state_46814[2]);var state_46814__$1 = (function (){var statearr_46825 = state_46814;(statearr_46825[8] = inst_46807);
return statearr_46825;
})();var statearr_46826_46844 = state_46814__$1;(statearr_46826_46844[2] = null);
(statearr_46826_46844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46815 === 11))
{var inst_46804 = (state_46814[2]);var state_46814__$1 = state_46814;var statearr_46827_46845 = state_46814__$1;(statearr_46827_46845[2] = inst_46804);
(statearr_46827_46845[1] = 10);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_46831 = [null,null,null,null,null,null,null,null,null];(statearr_46831[0] = state_machine__5548__auto__);
(statearr_46831[1] = 1);
return statearr_46831;
});
var state_machine__5548__auto____1 = (function (state_46814){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_46814);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e46832){if((e46832 instanceof Object))
{var ex__5551__auto__ = e46832;var statearr_46833_46846 = state_46814;(statearr_46833_46846[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46814);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46847 = state_46814;
state_46814 = G__46847;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_46814){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_46814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_46834 = f__5563__auto__.call(null);(statearr_46834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___46835);
return statearr_46834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_46999){var state_val_47000 = (state_46999[1]);if((state_val_47000 === 1))
{var state_46999__$1 = state_46999;var statearr_47001_47038 = state_46999__$1;(statearr_47001_47038[2] = null);
(statearr_47001_47038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 2))
{var state_46999__$1 = state_46999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46999__$1,4,in$);
} else
{if((state_val_47000 === 3))
{var inst_46997 = (state_46999[2]);var state_46999__$1 = state_46999;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46999__$1,inst_46997);
} else
{if((state_val_47000 === 4))
{var inst_46945 = (state_46999[7]);var inst_46945__$1 = (state_46999[2]);var inst_46946 = (inst_46945__$1 == null);var state_46999__$1 = (function (){var statearr_47002 = state_46999;(statearr_47002[7] = inst_46945__$1);
return statearr_47002;
})();if(cljs.core.truth_(inst_46946))
{var statearr_47003_47039 = state_46999__$1;(statearr_47003_47039[1] = 5);
} else
{var statearr_47004_47040 = state_46999__$1;(statearr_47004_47040[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 5))
{var inst_46948 = cljs.core.async.close_BANG_.call(null,out);var state_46999__$1 = state_46999;var statearr_47005_47041 = state_46999__$1;(statearr_47005_47041[2] = inst_46948);
(statearr_47005_47041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 6))
{var inst_46945 = (state_46999[7]);var inst_46950 = f.call(null,inst_46945);var inst_46955 = cljs.core.seq.call(null,inst_46950);var inst_46956 = inst_46955;var inst_46957 = null;var inst_46958 = 0;var inst_46959 = 0;var state_46999__$1 = (function (){var statearr_47006 = state_46999;(statearr_47006[8] = inst_46958);
(statearr_47006[9] = inst_46957);
(statearr_47006[10] = inst_46959);
(statearr_47006[11] = inst_46956);
return statearr_47006;
})();var statearr_47007_47042 = state_46999__$1;(statearr_47007_47042[2] = null);
(statearr_47007_47042[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 7))
{var inst_46995 = (state_46999[2]);var state_46999__$1 = state_46999;var statearr_47008_47043 = state_46999__$1;(statearr_47008_47043[2] = inst_46995);
(statearr_47008_47043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 8))
{var inst_46958 = (state_46999[8]);var inst_46959 = (state_46999[10]);var inst_46961 = (inst_46959 < inst_46958);var inst_46962 = inst_46961;var state_46999__$1 = state_46999;if(cljs.core.truth_(inst_46962))
{var statearr_47009_47044 = state_46999__$1;(statearr_47009_47044[1] = 10);
} else
{var statearr_47010_47045 = state_46999__$1;(statearr_47010_47045[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 9))
{var inst_46992 = (state_46999[2]);var state_46999__$1 = (function (){var statearr_47011 = state_46999;(statearr_47011[12] = inst_46992);
return statearr_47011;
})();var statearr_47012_47046 = state_46999__$1;(statearr_47012_47046[2] = null);
(statearr_47012_47046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 10))
{var inst_46957 = (state_46999[9]);var inst_46959 = (state_46999[10]);var inst_46964 = cljs.core._nth.call(null,inst_46957,inst_46959);var state_46999__$1 = state_46999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46999__$1,13,out,inst_46964);
} else
{if((state_val_47000 === 11))
{var inst_46970 = (state_46999[13]);var inst_46956 = (state_46999[11]);var inst_46970__$1 = cljs.core.seq.call(null,inst_46956);var state_46999__$1 = (function (){var statearr_47016 = state_46999;(statearr_47016[13] = inst_46970__$1);
return statearr_47016;
})();if(inst_46970__$1)
{var statearr_47017_47047 = state_46999__$1;(statearr_47017_47047[1] = 14);
} else
{var statearr_47018_47048 = state_46999__$1;(statearr_47018_47048[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 12))
{var inst_46990 = (state_46999[2]);var state_46999__$1 = state_46999;var statearr_47019_47049 = state_46999__$1;(statearr_47019_47049[2] = inst_46990);
(statearr_47019_47049[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 13))
{var inst_46958 = (state_46999[8]);var inst_46957 = (state_46999[9]);var inst_46959 = (state_46999[10]);var inst_46956 = (state_46999[11]);var inst_46966 = (state_46999[2]);var inst_46967 = (inst_46959 + 1);var tmp47013 = inst_46958;var tmp47014 = inst_46957;var tmp47015 = inst_46956;var inst_46956__$1 = tmp47015;var inst_46957__$1 = tmp47014;var inst_46958__$1 = tmp47013;var inst_46959__$1 = inst_46967;var state_46999__$1 = (function (){var statearr_47020 = state_46999;(statearr_47020[8] = inst_46958__$1);
(statearr_47020[9] = inst_46957__$1);
(statearr_47020[10] = inst_46959__$1);
(statearr_47020[14] = inst_46966);
(statearr_47020[11] = inst_46956__$1);
return statearr_47020;
})();var statearr_47021_47050 = state_46999__$1;(statearr_47021_47050[2] = null);
(statearr_47021_47050[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 14))
{var inst_46970 = (state_46999[13]);var inst_46972 = cljs.core.chunked_seq_QMARK_.call(null,inst_46970);var state_46999__$1 = state_46999;if(inst_46972)
{var statearr_47022_47051 = state_46999__$1;(statearr_47022_47051[1] = 17);
} else
{var statearr_47023_47052 = state_46999__$1;(statearr_47023_47052[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 15))
{var state_46999__$1 = state_46999;var statearr_47024_47053 = state_46999__$1;(statearr_47024_47053[2] = null);
(statearr_47024_47053[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 16))
{var inst_46988 = (state_46999[2]);var state_46999__$1 = state_46999;var statearr_47025_47054 = state_46999__$1;(statearr_47025_47054[2] = inst_46988);
(statearr_47025_47054[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 17))
{var inst_46970 = (state_46999[13]);var inst_46974 = cljs.core.chunk_first.call(null,inst_46970);var inst_46975 = cljs.core.chunk_rest.call(null,inst_46970);var inst_46976 = cljs.core.count.call(null,inst_46974);var inst_46956 = inst_46975;var inst_46957 = inst_46974;var inst_46958 = inst_46976;var inst_46959 = 0;var state_46999__$1 = (function (){var statearr_47026 = state_46999;(statearr_47026[8] = inst_46958);
(statearr_47026[9] = inst_46957);
(statearr_47026[10] = inst_46959);
(statearr_47026[11] = inst_46956);
return statearr_47026;
})();var statearr_47027_47055 = state_46999__$1;(statearr_47027_47055[2] = null);
(statearr_47027_47055[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 18))
{var inst_46970 = (state_46999[13]);var inst_46979 = cljs.core.first.call(null,inst_46970);var state_46999__$1 = state_46999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46999__$1,20,out,inst_46979);
} else
{if((state_val_47000 === 19))
{var inst_46985 = (state_46999[2]);var state_46999__$1 = state_46999;var statearr_47028_47056 = state_46999__$1;(statearr_47028_47056[2] = inst_46985);
(statearr_47028_47056[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47000 === 20))
{var inst_46970 = (state_46999[13]);var inst_46981 = (state_46999[2]);var inst_46982 = cljs.core.next.call(null,inst_46970);var inst_46956 = inst_46982;var inst_46957 = null;var inst_46958 = 0;var inst_46959 = 0;var state_46999__$1 = (function (){var statearr_47029 = state_46999;(statearr_47029[8] = inst_46958);
(statearr_47029[15] = inst_46981);
(statearr_47029[9] = inst_46957);
(statearr_47029[10] = inst_46959);
(statearr_47029[11] = inst_46956);
return statearr_47029;
})();var statearr_47030_47057 = state_46999__$1;(statearr_47030_47057[2] = null);
(statearr_47030_47057[1] = 8);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47034[0] = state_machine__5548__auto__);
(statearr_47034[1] = 1);
return statearr_47034;
});
var state_machine__5548__auto____1 = (function (state_46999){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_46999);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47035){if((e47035 instanceof Object))
{var ex__5551__auto__ = e47035;var statearr_47036_47058 = state_46999;(statearr_47036_47058[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46999);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47059 = state_46999;
state_46999 = G__47059;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_46999){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_46999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47037 = f__5563__auto__.call(null);(statearr_47037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___47140 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47119){var state_val_47120 = (state_47119[1]);if((state_val_47120 === 1))
{var state_47119__$1 = state_47119;var statearr_47121_47141 = state_47119__$1;(statearr_47121_47141[2] = null);
(statearr_47121_47141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47120 === 2))
{var state_47119__$1 = state_47119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47119__$1,4,from);
} else
{if((state_val_47120 === 3))
{var inst_47117 = (state_47119[2]);var state_47119__$1 = state_47119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47119__$1,inst_47117);
} else
{if((state_val_47120 === 4))
{var inst_47102 = (state_47119[7]);var inst_47102__$1 = (state_47119[2]);var inst_47103 = (inst_47102__$1 == null);var state_47119__$1 = (function (){var statearr_47122 = state_47119;(statearr_47122[7] = inst_47102__$1);
return statearr_47122;
})();if(cljs.core.truth_(inst_47103))
{var statearr_47123_47142 = state_47119__$1;(statearr_47123_47142[1] = 5);
} else
{var statearr_47124_47143 = state_47119__$1;(statearr_47124_47143[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47120 === 5))
{var state_47119__$1 = state_47119;if(cljs.core.truth_(close_QMARK_))
{var statearr_47125_47144 = state_47119__$1;(statearr_47125_47144[1] = 8);
} else
{var statearr_47126_47145 = state_47119__$1;(statearr_47126_47145[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47120 === 6))
{var inst_47102 = (state_47119[7]);var state_47119__$1 = state_47119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47119__$1,11,to,inst_47102);
} else
{if((state_val_47120 === 7))
{var inst_47115 = (state_47119[2]);var state_47119__$1 = state_47119;var statearr_47127_47146 = state_47119__$1;(statearr_47127_47146[2] = inst_47115);
(statearr_47127_47146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47120 === 8))
{var inst_47106 = cljs.core.async.close_BANG_.call(null,to);var state_47119__$1 = state_47119;var statearr_47128_47147 = state_47119__$1;(statearr_47128_47147[2] = inst_47106);
(statearr_47128_47147[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47120 === 9))
{var state_47119__$1 = state_47119;var statearr_47129_47148 = state_47119__$1;(statearr_47129_47148[2] = null);
(statearr_47129_47148[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47120 === 10))
{var inst_47109 = (state_47119[2]);var state_47119__$1 = state_47119;var statearr_47130_47149 = state_47119__$1;(statearr_47130_47149[2] = inst_47109);
(statearr_47130_47149[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47120 === 11))
{var inst_47112 = (state_47119[2]);var state_47119__$1 = (function (){var statearr_47131 = state_47119;(statearr_47131[8] = inst_47112);
return statearr_47131;
})();var statearr_47132_47150 = state_47119__$1;(statearr_47132_47150[2] = null);
(statearr_47132_47150[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47136 = [null,null,null,null,null,null,null,null,null];(statearr_47136[0] = state_machine__5548__auto__);
(statearr_47136[1] = 1);
return statearr_47136;
});
var state_machine__5548__auto____1 = (function (state_47119){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47119);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47137){if((e47137 instanceof Object))
{var ex__5551__auto__ = e47137;var statearr_47138_47151 = state_47119;(statearr_47138_47151[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47152 = state_47119;
state_47119 = G__47152;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47119){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47139 = f__5563__auto__.call(null);(statearr_47139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47140);
return statearr_47139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___47239 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47217){var state_val_47218 = (state_47217[1]);if((state_val_47218 === 1))
{var state_47217__$1 = state_47217;var statearr_47219_47240 = state_47217__$1;(statearr_47219_47240[2] = null);
(statearr_47219_47240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47218 === 2))
{var state_47217__$1 = state_47217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47217__$1,4,ch);
} else
{if((state_val_47218 === 3))
{var inst_47215 = (state_47217[2]);var state_47217__$1 = state_47217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47217__$1,inst_47215);
} else
{if((state_val_47218 === 4))
{var inst_47198 = (state_47217[7]);var inst_47198__$1 = (state_47217[2]);var inst_47199 = (inst_47198__$1 == null);var state_47217__$1 = (function (){var statearr_47220 = state_47217;(statearr_47220[7] = inst_47198__$1);
return statearr_47220;
})();if(cljs.core.truth_(inst_47199))
{var statearr_47221_47241 = state_47217__$1;(statearr_47221_47241[1] = 5);
} else
{var statearr_47222_47242 = state_47217__$1;(statearr_47222_47242[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47218 === 5))
{var inst_47201 = cljs.core.async.close_BANG_.call(null,tc);var inst_47202 = cljs.core.async.close_BANG_.call(null,fc);var state_47217__$1 = (function (){var statearr_47223 = state_47217;(statearr_47223[8] = inst_47201);
return statearr_47223;
})();var statearr_47224_47243 = state_47217__$1;(statearr_47224_47243[2] = inst_47202);
(statearr_47224_47243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47218 === 6))
{var inst_47198 = (state_47217[7]);var inst_47204 = p.call(null,inst_47198);var state_47217__$1 = state_47217;if(cljs.core.truth_(inst_47204))
{var statearr_47225_47244 = state_47217__$1;(statearr_47225_47244[1] = 9);
} else
{var statearr_47226_47245 = state_47217__$1;(statearr_47226_47245[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47218 === 7))
{var inst_47213 = (state_47217[2]);var state_47217__$1 = state_47217;var statearr_47227_47246 = state_47217__$1;(statearr_47227_47246[2] = inst_47213);
(statearr_47227_47246[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47218 === 8))
{var inst_47210 = (state_47217[2]);var state_47217__$1 = (function (){var statearr_47228 = state_47217;(statearr_47228[9] = inst_47210);
return statearr_47228;
})();var statearr_47229_47247 = state_47217__$1;(statearr_47229_47247[2] = null);
(statearr_47229_47247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47218 === 9))
{var state_47217__$1 = state_47217;var statearr_47230_47248 = state_47217__$1;(statearr_47230_47248[2] = tc);
(statearr_47230_47248[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47218 === 10))
{var state_47217__$1 = state_47217;var statearr_47231_47249 = state_47217__$1;(statearr_47231_47249[2] = fc);
(statearr_47231_47249[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47218 === 11))
{var inst_47198 = (state_47217[7]);var inst_47208 = (state_47217[2]);var state_47217__$1 = state_47217;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47217__$1,8,inst_47208,inst_47198);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47235 = [null,null,null,null,null,null,null,null,null,null];(statearr_47235[0] = state_machine__5548__auto__);
(statearr_47235[1] = 1);
return statearr_47235;
});
var state_machine__5548__auto____1 = (function (state_47217){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47217);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47236){if((e47236 instanceof Object))
{var ex__5551__auto__ = e47236;var statearr_47237_47250 = state_47217;(statearr_47237_47250[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47217);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47251 = state_47217;
state_47217 = G__47251;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47217){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47238 = f__5563__auto__.call(null);(statearr_47238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47239);
return statearr_47238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47298){var state_val_47299 = (state_47298[1]);if((state_val_47299 === 7))
{var inst_47294 = (state_47298[2]);var state_47298__$1 = state_47298;var statearr_47300_47316 = state_47298__$1;(statearr_47300_47316[2] = inst_47294);
(statearr_47300_47316[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47299 === 6))
{var inst_47287 = (state_47298[7]);var inst_47284 = (state_47298[8]);var inst_47291 = f.call(null,inst_47284,inst_47287);var inst_47284__$1 = inst_47291;var state_47298__$1 = (function (){var statearr_47301 = state_47298;(statearr_47301[8] = inst_47284__$1);
return statearr_47301;
})();var statearr_47302_47317 = state_47298__$1;(statearr_47302_47317[2] = null);
(statearr_47302_47317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47299 === 5))
{var inst_47284 = (state_47298[8]);var state_47298__$1 = state_47298;var statearr_47303_47318 = state_47298__$1;(statearr_47303_47318[2] = inst_47284);
(statearr_47303_47318[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47299 === 4))
{var inst_47287 = (state_47298[7]);var inst_47287__$1 = (state_47298[2]);var inst_47288 = (inst_47287__$1 == null);var state_47298__$1 = (function (){var statearr_47304 = state_47298;(statearr_47304[7] = inst_47287__$1);
return statearr_47304;
})();if(cljs.core.truth_(inst_47288))
{var statearr_47305_47319 = state_47298__$1;(statearr_47305_47319[1] = 5);
} else
{var statearr_47306_47320 = state_47298__$1;(statearr_47306_47320[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47299 === 3))
{var inst_47296 = (state_47298[2]);var state_47298__$1 = state_47298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47298__$1,inst_47296);
} else
{if((state_val_47299 === 2))
{var state_47298__$1 = state_47298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47298__$1,4,ch);
} else
{if((state_val_47299 === 1))
{var inst_47284 = init;var state_47298__$1 = (function (){var statearr_47307 = state_47298;(statearr_47307[8] = inst_47284);
return statearr_47307;
})();var statearr_47308_47321 = state_47298__$1;(statearr_47308_47321[2] = null);
(statearr_47308_47321[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47312 = [null,null,null,null,null,null,null,null,null];(statearr_47312[0] = state_machine__5548__auto__);
(statearr_47312[1] = 1);
return statearr_47312;
});
var state_machine__5548__auto____1 = (function (state_47298){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47298);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47313){if((e47313 instanceof Object))
{var ex__5551__auto__ = e47313;var statearr_47314_47322 = state_47298;(statearr_47314_47322[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47298);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47323 = state_47298;
state_47298 = G__47323;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47298){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47315 = f__5563__auto__.call(null);(statearr_47315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47385){var state_val_47386 = (state_47385[1]);if((state_val_47386 === 1))
{var inst_47365 = cljs.core.seq.call(null,coll);var inst_47366 = inst_47365;var state_47385__$1 = (function (){var statearr_47387 = state_47385;(statearr_47387[7] = inst_47366);
return statearr_47387;
})();var statearr_47388_47406 = state_47385__$1;(statearr_47388_47406[2] = null);
(statearr_47388_47406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47386 === 2))
{var inst_47366 = (state_47385[7]);var state_47385__$1 = state_47385;if(cljs.core.truth_(inst_47366))
{var statearr_47389_47407 = state_47385__$1;(statearr_47389_47407[1] = 4);
} else
{var statearr_47390_47408 = state_47385__$1;(statearr_47390_47408[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47386 === 3))
{var inst_47383 = (state_47385[2]);var state_47385__$1 = state_47385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47385__$1,inst_47383);
} else
{if((state_val_47386 === 4))
{var inst_47366 = (state_47385[7]);var inst_47369 = cljs.core.first.call(null,inst_47366);var state_47385__$1 = state_47385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47385__$1,7,ch,inst_47369);
} else
{if((state_val_47386 === 5))
{var state_47385__$1 = state_47385;if(cljs.core.truth_(close_QMARK_))
{var statearr_47391_47409 = state_47385__$1;(statearr_47391_47409[1] = 8);
} else
{var statearr_47392_47410 = state_47385__$1;(statearr_47392_47410[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47386 === 6))
{var inst_47381 = (state_47385[2]);var state_47385__$1 = state_47385;var statearr_47393_47411 = state_47385__$1;(statearr_47393_47411[2] = inst_47381);
(statearr_47393_47411[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47386 === 7))
{var inst_47366 = (state_47385[7]);var inst_47371 = (state_47385[2]);var inst_47372 = cljs.core.next.call(null,inst_47366);var inst_47366__$1 = inst_47372;var state_47385__$1 = (function (){var statearr_47394 = state_47385;(statearr_47394[7] = inst_47366__$1);
(statearr_47394[8] = inst_47371);
return statearr_47394;
})();var statearr_47395_47412 = state_47385__$1;(statearr_47395_47412[2] = null);
(statearr_47395_47412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47386 === 8))
{var inst_47376 = cljs.core.async.close_BANG_.call(null,ch);var state_47385__$1 = state_47385;var statearr_47396_47413 = state_47385__$1;(statearr_47396_47413[2] = inst_47376);
(statearr_47396_47413[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47386 === 9))
{var state_47385__$1 = state_47385;var statearr_47397_47414 = state_47385__$1;(statearr_47397_47414[2] = null);
(statearr_47397_47414[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47386 === 10))
{var inst_47379 = (state_47385[2]);var state_47385__$1 = state_47385;var statearr_47398_47415 = state_47385__$1;(statearr_47398_47415[2] = inst_47379);
(statearr_47398_47415[1] = 6);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47402 = [null,null,null,null,null,null,null,null,null];(statearr_47402[0] = state_machine__5548__auto__);
(statearr_47402[1] = 1);
return statearr_47402;
});
var state_machine__5548__auto____1 = (function (state_47385){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47385);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47403){if((e47403 instanceof Object))
{var ex__5551__auto__ = e47403;var statearr_47404_47416 = state_47385;(statearr_47404_47416[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47385);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47417 = state_47385;
state_47385 = G__47417;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47385){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47405 = f__5563__auto__.call(null);(statearr_47405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj47419 = {};return obj47419;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj47421 = {};return obj47421;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t47645 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47645 = (function (cs,ch,mult,meta47646){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta47646 = meta47646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47645.cljs$lang$type = true;
cljs.core.async.t47645.cljs$lang$ctorStr = "cljs.core.async/t47645";
cljs.core.async.t47645.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47645");
});})(cs))
;
cljs.core.async.t47645.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t47645.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t47645.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t47645.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t47645.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t47645.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t47645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47647){var self__ = this;
var _47647__$1 = this;return self__.meta47646;
});})(cs))
;
cljs.core.async.t47645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47647,meta47646__$1){var self__ = this;
var _47647__$1 = this;return (new cljs.core.async.t47645(self__.cs,self__.ch,self__.mult,meta47646__$1));
});})(cs))
;
cljs.core.async.__GT_t47645 = ((function (cs){
return (function __GT_t47645(cs__$1,ch__$1,mult__$1,meta47646){return (new cljs.core.async.t47645(cs__$1,ch__$1,mult__$1,meta47646));
});})(cs))
;
}
return (new cljs.core.async.t47645(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___47868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47782){var state_val_47783 = (state_47782[1]);if((state_val_47783 === 32))
{var inst_47650 = (state_47782[7]);var inst_47726 = (state_47782[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47782,31,Object,null,30);var inst_47733 = cljs.core.async.put_BANG_.call(null,inst_47726,inst_47650,done);var state_47782__$1 = state_47782;var statearr_47784_47869 = state_47782__$1;(statearr_47784_47869[2] = inst_47733);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47782__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 1))
{var state_47782__$1 = state_47782;var statearr_47785_47870 = state_47782__$1;(statearr_47785_47870[2] = null);
(statearr_47785_47870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 33))
{var inst_47739 = (state_47782[9]);var inst_47741 = cljs.core.chunked_seq_QMARK_.call(null,inst_47739);var state_47782__$1 = state_47782;if(inst_47741)
{var statearr_47786_47871 = state_47782__$1;(statearr_47786_47871[1] = 36);
} else
{var statearr_47787_47872 = state_47782__$1;(statearr_47787_47872[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 2))
{var state_47782__$1 = state_47782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47782__$1,4,ch);
} else
{if((state_val_47783 === 34))
{var state_47782__$1 = state_47782;var statearr_47788_47873 = state_47782__$1;(statearr_47788_47873[2] = null);
(statearr_47788_47873[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 3))
{var inst_47780 = (state_47782[2]);var state_47782__$1 = state_47782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47782__$1,inst_47780);
} else
{if((state_val_47783 === 35))
{var inst_47764 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47789_47874 = state_47782__$1;(statearr_47789_47874[2] = inst_47764);
(statearr_47789_47874[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 4))
{var inst_47650 = (state_47782[7]);var inst_47650__$1 = (state_47782[2]);var inst_47651 = (inst_47650__$1 == null);var state_47782__$1 = (function (){var statearr_47790 = state_47782;(statearr_47790[7] = inst_47650__$1);
return statearr_47790;
})();if(cljs.core.truth_(inst_47651))
{var statearr_47791_47875 = state_47782__$1;(statearr_47791_47875[1] = 5);
} else
{var statearr_47792_47876 = state_47782__$1;(statearr_47792_47876[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 36))
{var inst_47739 = (state_47782[9]);var inst_47743 = cljs.core.chunk_first.call(null,inst_47739);var inst_47744 = cljs.core.chunk_rest.call(null,inst_47739);var inst_47745 = cljs.core.count.call(null,inst_47743);var inst_47718 = inst_47744;var inst_47719 = inst_47743;var inst_47720 = inst_47745;var inst_47721 = 0;var state_47782__$1 = (function (){var statearr_47793 = state_47782;(statearr_47793[10] = inst_47721);
(statearr_47793[11] = inst_47720);
(statearr_47793[12] = inst_47719);
(statearr_47793[13] = inst_47718);
return statearr_47793;
})();var statearr_47794_47877 = state_47782__$1;(statearr_47794_47877[2] = null);
(statearr_47794_47877[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 5))
{var inst_47657 = cljs.core.deref.call(null,cs);var inst_47658 = cljs.core.seq.call(null,inst_47657);var inst_47659 = inst_47658;var inst_47660 = null;var inst_47661 = 0;var inst_47662 = 0;var state_47782__$1 = (function (){var statearr_47795 = state_47782;(statearr_47795[14] = inst_47659);
(statearr_47795[15] = inst_47662);
(statearr_47795[16] = inst_47660);
(statearr_47795[17] = inst_47661);
return statearr_47795;
})();var statearr_47796_47878 = state_47782__$1;(statearr_47796_47878[2] = null);
(statearr_47796_47878[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 37))
{var inst_47739 = (state_47782[9]);var inst_47748 = cljs.core.first.call(null,inst_47739);var state_47782__$1 = (function (){var statearr_47797 = state_47782;(statearr_47797[18] = inst_47748);
return statearr_47797;
})();var statearr_47798_47879 = state_47782__$1;(statearr_47798_47879[2] = null);
(statearr_47798_47879[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 6))
{var inst_47710 = (state_47782[19]);var inst_47709 = cljs.core.deref.call(null,cs);var inst_47710__$1 = cljs.core.keys.call(null,inst_47709);var inst_47711 = cljs.core.count.call(null,inst_47710__$1);var inst_47712 = cljs.core.reset_BANG_.call(null,dctr,inst_47711);var inst_47717 = cljs.core.seq.call(null,inst_47710__$1);var inst_47718 = inst_47717;var inst_47719 = null;var inst_47720 = 0;var inst_47721 = 0;var state_47782__$1 = (function (){var statearr_47799 = state_47782;(statearr_47799[20] = inst_47712);
(statearr_47799[10] = inst_47721);
(statearr_47799[11] = inst_47720);
(statearr_47799[19] = inst_47710__$1);
(statearr_47799[12] = inst_47719);
(statearr_47799[13] = inst_47718);
return statearr_47799;
})();var statearr_47800_47880 = state_47782__$1;(statearr_47800_47880[2] = null);
(statearr_47800_47880[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 38))
{var inst_47761 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47801_47881 = state_47782__$1;(statearr_47801_47881[2] = inst_47761);
(statearr_47801_47881[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 7))
{var inst_47778 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47802_47882 = state_47782__$1;(statearr_47802_47882[2] = inst_47778);
(statearr_47802_47882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 39))
{var inst_47739 = (state_47782[9]);var inst_47757 = (state_47782[2]);var inst_47758 = cljs.core.next.call(null,inst_47739);var inst_47718 = inst_47758;var inst_47719 = null;var inst_47720 = 0;var inst_47721 = 0;var state_47782__$1 = (function (){var statearr_47803 = state_47782;(statearr_47803[10] = inst_47721);
(statearr_47803[21] = inst_47757);
(statearr_47803[11] = inst_47720);
(statearr_47803[12] = inst_47719);
(statearr_47803[13] = inst_47718);
return statearr_47803;
})();var statearr_47804_47883 = state_47782__$1;(statearr_47804_47883[2] = null);
(statearr_47804_47883[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 8))
{var inst_47662 = (state_47782[15]);var inst_47661 = (state_47782[17]);var inst_47664 = (inst_47662 < inst_47661);var inst_47665 = inst_47664;var state_47782__$1 = state_47782;if(cljs.core.truth_(inst_47665))
{var statearr_47805_47884 = state_47782__$1;(statearr_47805_47884[1] = 10);
} else
{var statearr_47806_47885 = state_47782__$1;(statearr_47806_47885[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 40))
{var inst_47748 = (state_47782[18]);var inst_47749 = (state_47782[2]);var inst_47750 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_47751 = cljs.core.async.untap_STAR_.call(null,m,inst_47748);var state_47782__$1 = (function (){var statearr_47807 = state_47782;(statearr_47807[22] = inst_47750);
(statearr_47807[23] = inst_47749);
return statearr_47807;
})();var statearr_47808_47886 = state_47782__$1;(statearr_47808_47886[2] = inst_47751);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47782__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 9))
{var inst_47707 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47809_47887 = state_47782__$1;(statearr_47809_47887[2] = inst_47707);
(statearr_47809_47887[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 41))
{var inst_47748 = (state_47782[18]);var inst_47650 = (state_47782[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47782,40,Object,null,39);var inst_47755 = cljs.core.async.put_BANG_.call(null,inst_47748,inst_47650,done);var state_47782__$1 = state_47782;var statearr_47810_47888 = state_47782__$1;(statearr_47810_47888[2] = inst_47755);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47782__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 10))
{var inst_47662 = (state_47782[15]);var inst_47660 = (state_47782[16]);var inst_47668 = cljs.core._nth.call(null,inst_47660,inst_47662);var inst_47669 = cljs.core.nth.call(null,inst_47668,0,null);var inst_47670 = cljs.core.nth.call(null,inst_47668,1,null);var state_47782__$1 = (function (){var statearr_47811 = state_47782;(statearr_47811[24] = inst_47669);
return statearr_47811;
})();if(cljs.core.truth_(inst_47670))
{var statearr_47812_47889 = state_47782__$1;(statearr_47812_47889[1] = 13);
} else
{var statearr_47813_47890 = state_47782__$1;(statearr_47813_47890[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 42))
{var state_47782__$1 = state_47782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47782__$1,45,dchan);
} else
{if((state_val_47783 === 11))
{var inst_47679 = (state_47782[25]);var inst_47659 = (state_47782[14]);var inst_47679__$1 = cljs.core.seq.call(null,inst_47659);var state_47782__$1 = (function (){var statearr_47814 = state_47782;(statearr_47814[25] = inst_47679__$1);
return statearr_47814;
})();if(inst_47679__$1)
{var statearr_47815_47891 = state_47782__$1;(statearr_47815_47891[1] = 16);
} else
{var statearr_47816_47892 = state_47782__$1;(statearr_47816_47892[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 43))
{var state_47782__$1 = state_47782;var statearr_47817_47893 = state_47782__$1;(statearr_47817_47893[2] = null);
(statearr_47817_47893[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 12))
{var inst_47705 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47818_47894 = state_47782__$1;(statearr_47818_47894[2] = inst_47705);
(statearr_47818_47894[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 44))
{var inst_47775 = (state_47782[2]);var state_47782__$1 = (function (){var statearr_47819 = state_47782;(statearr_47819[26] = inst_47775);
return statearr_47819;
})();var statearr_47820_47895 = state_47782__$1;(statearr_47820_47895[2] = null);
(statearr_47820_47895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 13))
{var inst_47669 = (state_47782[24]);var inst_47672 = cljs.core.async.close_BANG_.call(null,inst_47669);var state_47782__$1 = state_47782;var statearr_47821_47896 = state_47782__$1;(statearr_47821_47896[2] = inst_47672);
(statearr_47821_47896[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 45))
{var inst_47772 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47825_47897 = state_47782__$1;(statearr_47825_47897[2] = inst_47772);
(statearr_47825_47897[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 14))
{var state_47782__$1 = state_47782;var statearr_47826_47898 = state_47782__$1;(statearr_47826_47898[2] = null);
(statearr_47826_47898[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 15))
{var inst_47659 = (state_47782[14]);var inst_47662 = (state_47782[15]);var inst_47660 = (state_47782[16]);var inst_47661 = (state_47782[17]);var inst_47675 = (state_47782[2]);var inst_47676 = (inst_47662 + 1);var tmp47822 = inst_47659;var tmp47823 = inst_47660;var tmp47824 = inst_47661;var inst_47659__$1 = tmp47822;var inst_47660__$1 = tmp47823;var inst_47661__$1 = tmp47824;var inst_47662__$1 = inst_47676;var state_47782__$1 = (function (){var statearr_47827 = state_47782;(statearr_47827[27] = inst_47675);
(statearr_47827[14] = inst_47659__$1);
(statearr_47827[15] = inst_47662__$1);
(statearr_47827[16] = inst_47660__$1);
(statearr_47827[17] = inst_47661__$1);
return statearr_47827;
})();var statearr_47828_47899 = state_47782__$1;(statearr_47828_47899[2] = null);
(statearr_47828_47899[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 16))
{var inst_47679 = (state_47782[25]);var inst_47681 = cljs.core.chunked_seq_QMARK_.call(null,inst_47679);var state_47782__$1 = state_47782;if(inst_47681)
{var statearr_47829_47900 = state_47782__$1;(statearr_47829_47900[1] = 19);
} else
{var statearr_47830_47901 = state_47782__$1;(statearr_47830_47901[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 17))
{var state_47782__$1 = state_47782;var statearr_47831_47902 = state_47782__$1;(statearr_47831_47902[2] = null);
(statearr_47831_47902[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 18))
{var inst_47703 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47832_47903 = state_47782__$1;(statearr_47832_47903[2] = inst_47703);
(statearr_47832_47903[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 19))
{var inst_47679 = (state_47782[25]);var inst_47683 = cljs.core.chunk_first.call(null,inst_47679);var inst_47684 = cljs.core.chunk_rest.call(null,inst_47679);var inst_47685 = cljs.core.count.call(null,inst_47683);var inst_47659 = inst_47684;var inst_47660 = inst_47683;var inst_47661 = inst_47685;var inst_47662 = 0;var state_47782__$1 = (function (){var statearr_47833 = state_47782;(statearr_47833[14] = inst_47659);
(statearr_47833[15] = inst_47662);
(statearr_47833[16] = inst_47660);
(statearr_47833[17] = inst_47661);
return statearr_47833;
})();var statearr_47834_47904 = state_47782__$1;(statearr_47834_47904[2] = null);
(statearr_47834_47904[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 20))
{var inst_47679 = (state_47782[25]);var inst_47689 = cljs.core.first.call(null,inst_47679);var inst_47690 = cljs.core.nth.call(null,inst_47689,0,null);var inst_47691 = cljs.core.nth.call(null,inst_47689,1,null);var state_47782__$1 = (function (){var statearr_47835 = state_47782;(statearr_47835[28] = inst_47690);
return statearr_47835;
})();if(cljs.core.truth_(inst_47691))
{var statearr_47836_47905 = state_47782__$1;(statearr_47836_47905[1] = 22);
} else
{var statearr_47837_47906 = state_47782__$1;(statearr_47837_47906[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 21))
{var inst_47700 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47838_47907 = state_47782__$1;(statearr_47838_47907[2] = inst_47700);
(statearr_47838_47907[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 22))
{var inst_47690 = (state_47782[28]);var inst_47693 = cljs.core.async.close_BANG_.call(null,inst_47690);var state_47782__$1 = state_47782;var statearr_47839_47908 = state_47782__$1;(statearr_47839_47908[2] = inst_47693);
(statearr_47839_47908[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 23))
{var state_47782__$1 = state_47782;var statearr_47840_47909 = state_47782__$1;(statearr_47840_47909[2] = null);
(statearr_47840_47909[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 24))
{var inst_47679 = (state_47782[25]);var inst_47696 = (state_47782[2]);var inst_47697 = cljs.core.next.call(null,inst_47679);var inst_47659 = inst_47697;var inst_47660 = null;var inst_47661 = 0;var inst_47662 = 0;var state_47782__$1 = (function (){var statearr_47841 = state_47782;(statearr_47841[29] = inst_47696);
(statearr_47841[14] = inst_47659);
(statearr_47841[15] = inst_47662);
(statearr_47841[16] = inst_47660);
(statearr_47841[17] = inst_47661);
return statearr_47841;
})();var statearr_47842_47910 = state_47782__$1;(statearr_47842_47910[2] = null);
(statearr_47842_47910[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 25))
{var inst_47721 = (state_47782[10]);var inst_47720 = (state_47782[11]);var inst_47723 = (inst_47721 < inst_47720);var inst_47724 = inst_47723;var state_47782__$1 = state_47782;if(cljs.core.truth_(inst_47724))
{var statearr_47843_47911 = state_47782__$1;(statearr_47843_47911[1] = 27);
} else
{var statearr_47844_47912 = state_47782__$1;(statearr_47844_47912[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 26))
{var inst_47710 = (state_47782[19]);var inst_47768 = (state_47782[2]);var inst_47769 = cljs.core.seq.call(null,inst_47710);var state_47782__$1 = (function (){var statearr_47845 = state_47782;(statearr_47845[30] = inst_47768);
return statearr_47845;
})();if(inst_47769)
{var statearr_47846_47913 = state_47782__$1;(statearr_47846_47913[1] = 42);
} else
{var statearr_47847_47914 = state_47782__$1;(statearr_47847_47914[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 27))
{var inst_47721 = (state_47782[10]);var inst_47719 = (state_47782[12]);var inst_47726 = cljs.core._nth.call(null,inst_47719,inst_47721);var state_47782__$1 = (function (){var statearr_47848 = state_47782;(statearr_47848[8] = inst_47726);
return statearr_47848;
})();var statearr_47849_47915 = state_47782__$1;(statearr_47849_47915[2] = null);
(statearr_47849_47915[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 28))
{var inst_47739 = (state_47782[9]);var inst_47718 = (state_47782[13]);var inst_47739__$1 = cljs.core.seq.call(null,inst_47718);var state_47782__$1 = (function (){var statearr_47853 = state_47782;(statearr_47853[9] = inst_47739__$1);
return statearr_47853;
})();if(inst_47739__$1)
{var statearr_47854_47916 = state_47782__$1;(statearr_47854_47916[1] = 33);
} else
{var statearr_47855_47917 = state_47782__$1;(statearr_47855_47917[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 29))
{var inst_47766 = (state_47782[2]);var state_47782__$1 = state_47782;var statearr_47856_47918 = state_47782__$1;(statearr_47856_47918[2] = inst_47766);
(statearr_47856_47918[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 30))
{var inst_47721 = (state_47782[10]);var inst_47720 = (state_47782[11]);var inst_47719 = (state_47782[12]);var inst_47718 = (state_47782[13]);var inst_47735 = (state_47782[2]);var inst_47736 = (inst_47721 + 1);var tmp47850 = inst_47720;var tmp47851 = inst_47719;var tmp47852 = inst_47718;var inst_47718__$1 = tmp47852;var inst_47719__$1 = tmp47851;var inst_47720__$1 = tmp47850;var inst_47721__$1 = inst_47736;var state_47782__$1 = (function (){var statearr_47857 = state_47782;(statearr_47857[10] = inst_47721__$1);
(statearr_47857[11] = inst_47720__$1);
(statearr_47857[31] = inst_47735);
(statearr_47857[12] = inst_47719__$1);
(statearr_47857[13] = inst_47718__$1);
return statearr_47857;
})();var statearr_47858_47919 = state_47782__$1;(statearr_47858_47919[2] = null);
(statearr_47858_47919[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47783 === 31))
{var inst_47726 = (state_47782[8]);var inst_47727 = (state_47782[2]);var inst_47728 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_47729 = cljs.core.async.untap_STAR_.call(null,m,inst_47726);var state_47782__$1 = (function (){var statearr_47859 = state_47782;(statearr_47859[32] = inst_47728);
(statearr_47859[33] = inst_47727);
return statearr_47859;
})();var statearr_47860_47920 = state_47782__$1;(statearr_47860_47920[2] = inst_47729);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47782__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47864[0] = state_machine__5548__auto__);
(statearr_47864[1] = 1);
return statearr_47864;
});
var state_machine__5548__auto____1 = (function (state_47782){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47782);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47865){if((e47865 instanceof Object))
{var ex__5551__auto__ = e47865;var statearr_47866_47921 = state_47782;(statearr_47866_47921[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47922 = state_47782;
state_47782 = G__47922;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47782){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47867 = f__5563__auto__.call(null);(statearr_47867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47868);
return statearr_47867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj47924 = {};return obj47924;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t48034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48034 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta48035){
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
this.meta48035 = meta48035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48034.cljs$lang$type = true;
cljs.core.async.t48034.cljs$lang$ctorStr = "cljs.core.async/t48034";
cljs.core.async.t48034.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48034");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48034.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t48034.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48034.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48034.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48034.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48034.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48034.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48036){var self__ = this;
var _48036__$1 = this;return self__.meta48035;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48036,meta48035__$1){var self__ = this;
var _48036__$1 = this;return (new cljs.core.async.t48034(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta48035__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t48034 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t48034(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48035){return (new cljs.core.async.t48034(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48035));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t48034(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___48143 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48101){var state_val_48102 = (state_48101[1]);if((state_val_48102 === 1))
{var inst_48040 = (state_48101[7]);var inst_48040__$1 = calc_state.call(null);var inst_48041 = cljs.core.seq_QMARK_.call(null,inst_48040__$1);var state_48101__$1 = (function (){var statearr_48103 = state_48101;(statearr_48103[7] = inst_48040__$1);
return statearr_48103;
})();if(inst_48041)
{var statearr_48104_48144 = state_48101__$1;(statearr_48104_48144[1] = 2);
} else
{var statearr_48105_48145 = state_48101__$1;(statearr_48105_48145[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 2))
{var inst_48040 = (state_48101[7]);var inst_48043 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48040);var state_48101__$1 = state_48101;var statearr_48106_48146 = state_48101__$1;(statearr_48106_48146[2] = inst_48043);
(statearr_48106_48146[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 3))
{var inst_48040 = (state_48101[7]);var state_48101__$1 = state_48101;var statearr_48107_48147 = state_48101__$1;(statearr_48107_48147[2] = inst_48040);
(statearr_48107_48147[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 4))
{var inst_48040 = (state_48101[7]);var inst_48046 = (state_48101[2]);var inst_48047 = cljs.core.get.call(null,inst_48046,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48048 = cljs.core.get.call(null,inst_48046,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48049 = cljs.core.get.call(null,inst_48046,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_48050 = inst_48040;var state_48101__$1 = (function (){var statearr_48108 = state_48101;(statearr_48108[8] = inst_48047);
(statearr_48108[9] = inst_48048);
(statearr_48108[10] = inst_48049);
(statearr_48108[11] = inst_48050);
return statearr_48108;
})();var statearr_48109_48148 = state_48101__$1;(statearr_48109_48148[2] = null);
(statearr_48109_48148[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 5))
{var inst_48050 = (state_48101[11]);var inst_48053 = cljs.core.seq_QMARK_.call(null,inst_48050);var state_48101__$1 = state_48101;if(inst_48053)
{var statearr_48110_48149 = state_48101__$1;(statearr_48110_48149[1] = 7);
} else
{var statearr_48111_48150 = state_48101__$1;(statearr_48111_48150[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 6))
{var inst_48099 = (state_48101[2]);var state_48101__$1 = state_48101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48101__$1,inst_48099);
} else
{if((state_val_48102 === 7))
{var inst_48050 = (state_48101[11]);var inst_48055 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48050);var state_48101__$1 = state_48101;var statearr_48112_48151 = state_48101__$1;(statearr_48112_48151[2] = inst_48055);
(statearr_48112_48151[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 8))
{var inst_48050 = (state_48101[11]);var state_48101__$1 = state_48101;var statearr_48113_48152 = state_48101__$1;(statearr_48113_48152[2] = inst_48050);
(statearr_48113_48152[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 9))
{var inst_48058 = (state_48101[12]);var inst_48058__$1 = (state_48101[2]);var inst_48059 = cljs.core.get.call(null,inst_48058__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48060 = cljs.core.get.call(null,inst_48058__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48061 = cljs.core.get.call(null,inst_48058__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_48101__$1 = (function (){var statearr_48114 = state_48101;(statearr_48114[12] = inst_48058__$1);
(statearr_48114[13] = inst_48060);
(statearr_48114[14] = inst_48061);
return statearr_48114;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48101__$1,10,inst_48059);
} else
{if((state_val_48102 === 10))
{var inst_48066 = (state_48101[15]);var inst_48065 = (state_48101[16]);var inst_48064 = (state_48101[2]);var inst_48065__$1 = cljs.core.nth.call(null,inst_48064,0,null);var inst_48066__$1 = cljs.core.nth.call(null,inst_48064,1,null);var inst_48067 = (inst_48065__$1 == null);var inst_48068 = cljs.core._EQ_.call(null,inst_48066__$1,change);var inst_48069 = (inst_48067) || (inst_48068);var state_48101__$1 = (function (){var statearr_48115 = state_48101;(statearr_48115[15] = inst_48066__$1);
(statearr_48115[16] = inst_48065__$1);
return statearr_48115;
})();if(cljs.core.truth_(inst_48069))
{var statearr_48116_48153 = state_48101__$1;(statearr_48116_48153[1] = 11);
} else
{var statearr_48117_48154 = state_48101__$1;(statearr_48117_48154[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 11))
{var inst_48065 = (state_48101[16]);var inst_48071 = (inst_48065 == null);var state_48101__$1 = state_48101;if(cljs.core.truth_(inst_48071))
{var statearr_48118_48155 = state_48101__$1;(statearr_48118_48155[1] = 14);
} else
{var statearr_48119_48156 = state_48101__$1;(statearr_48119_48156[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 12))
{var inst_48061 = (state_48101[14]);var inst_48066 = (state_48101[15]);var inst_48080 = (state_48101[17]);var inst_48080__$1 = inst_48061.call(null,inst_48066);var state_48101__$1 = (function (){var statearr_48120 = state_48101;(statearr_48120[17] = inst_48080__$1);
return statearr_48120;
})();if(cljs.core.truth_(inst_48080__$1))
{var statearr_48121_48157 = state_48101__$1;(statearr_48121_48157[1] = 17);
} else
{var statearr_48122_48158 = state_48101__$1;(statearr_48122_48158[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 13))
{var inst_48097 = (state_48101[2]);var state_48101__$1 = state_48101;var statearr_48123_48159 = state_48101__$1;(statearr_48123_48159[2] = inst_48097);
(statearr_48123_48159[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 14))
{var inst_48066 = (state_48101[15]);var inst_48073 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48066);var state_48101__$1 = state_48101;var statearr_48124_48160 = state_48101__$1;(statearr_48124_48160[2] = inst_48073);
(statearr_48124_48160[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 15))
{var state_48101__$1 = state_48101;var statearr_48125_48161 = state_48101__$1;(statearr_48125_48161[2] = null);
(statearr_48125_48161[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 16))
{var inst_48076 = (state_48101[2]);var inst_48077 = calc_state.call(null);var inst_48050 = inst_48077;var state_48101__$1 = (function (){var statearr_48126 = state_48101;(statearr_48126[11] = inst_48050);
(statearr_48126[18] = inst_48076);
return statearr_48126;
})();var statearr_48127_48162 = state_48101__$1;(statearr_48127_48162[2] = null);
(statearr_48127_48162[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 17))
{var inst_48080 = (state_48101[17]);var state_48101__$1 = state_48101;var statearr_48128_48163 = state_48101__$1;(statearr_48128_48163[2] = inst_48080);
(statearr_48128_48163[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 18))
{var inst_48060 = (state_48101[13]);var inst_48061 = (state_48101[14]);var inst_48066 = (state_48101[15]);var inst_48083 = cljs.core.empty_QMARK_.call(null,inst_48061);var inst_48084 = inst_48060.call(null,inst_48066);var inst_48085 = cljs.core.not.call(null,inst_48084);var inst_48086 = (inst_48083) && (inst_48085);var state_48101__$1 = state_48101;var statearr_48129_48164 = state_48101__$1;(statearr_48129_48164[2] = inst_48086);
(statearr_48129_48164[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 19))
{var inst_48088 = (state_48101[2]);var state_48101__$1 = state_48101;if(cljs.core.truth_(inst_48088))
{var statearr_48130_48165 = state_48101__$1;(statearr_48130_48165[1] = 20);
} else
{var statearr_48131_48166 = state_48101__$1;(statearr_48131_48166[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 20))
{var inst_48065 = (state_48101[16]);var state_48101__$1 = state_48101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48101__$1,23,out,inst_48065);
} else
{if((state_val_48102 === 21))
{var state_48101__$1 = state_48101;var statearr_48132_48167 = state_48101__$1;(statearr_48132_48167[2] = null);
(statearr_48132_48167[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 22))
{var inst_48058 = (state_48101[12]);var inst_48094 = (state_48101[2]);var inst_48050 = inst_48058;var state_48101__$1 = (function (){var statearr_48133 = state_48101;(statearr_48133[19] = inst_48094);
(statearr_48133[11] = inst_48050);
return statearr_48133;
})();var statearr_48134_48168 = state_48101__$1;(statearr_48134_48168[2] = null);
(statearr_48134_48168[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48102 === 23))
{var inst_48091 = (state_48101[2]);var state_48101__$1 = state_48101;var statearr_48135_48169 = state_48101__$1;(statearr_48135_48169[2] = inst_48091);
(statearr_48135_48169[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48139[0] = state_machine__5548__auto__);
(statearr_48139[1] = 1);
return statearr_48139;
});
var state_machine__5548__auto____1 = (function (state_48101){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48140){if((e48140 instanceof Object))
{var ex__5551__auto__ = e48140;var statearr_48141_48170 = state_48101;(statearr_48141_48170[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48171 = state_48101;
state_48101 = G__48171;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48101){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48142 = f__5563__auto__.call(null);(statearr_48142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48143);
return statearr_48142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj48173 = {};return obj48173;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__48174_SHARP_){if(cljs.core.truth_(p1__48174_SHARP_.call(null,topic)))
{return p1__48174_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__48174_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t48299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48299 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta48300){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta48300 = meta48300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48299.cljs$lang$type = true;
cljs.core.async.t48299.cljs$lang$ctorStr = "cljs.core.async/t48299";
cljs.core.async.t48299.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48299");
});})(mults,ensure_mult))
;
cljs.core.async.t48299.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t48299.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t48299.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t48299.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t48299.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t48299.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t48299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48301){var self__ = this;
var _48301__$1 = this;return self__.meta48300;
});})(mults,ensure_mult))
;
cljs.core.async.t48299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48301,meta48300__$1){var self__ = this;
var _48301__$1 = this;return (new cljs.core.async.t48299(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta48300__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t48299 = ((function (mults,ensure_mult){
return (function __GT_t48299(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48300){return (new cljs.core.async.t48299(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48300));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t48299(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___48423 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48375){var state_val_48376 = (state_48375[1]);if((state_val_48376 === 1))
{var state_48375__$1 = state_48375;var statearr_48377_48424 = state_48375__$1;(statearr_48377_48424[2] = null);
(statearr_48377_48424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 2))
{var state_48375__$1 = state_48375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48375__$1,4,ch);
} else
{if((state_val_48376 === 3))
{var inst_48373 = (state_48375[2]);var state_48375__$1 = state_48375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48375__$1,inst_48373);
} else
{if((state_val_48376 === 4))
{var inst_48304 = (state_48375[7]);var inst_48304__$1 = (state_48375[2]);var inst_48305 = (inst_48304__$1 == null);var state_48375__$1 = (function (){var statearr_48378 = state_48375;(statearr_48378[7] = inst_48304__$1);
return statearr_48378;
})();if(cljs.core.truth_(inst_48305))
{var statearr_48379_48425 = state_48375__$1;(statearr_48379_48425[1] = 5);
} else
{var statearr_48380_48426 = state_48375__$1;(statearr_48380_48426[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 5))
{var inst_48311 = cljs.core.deref.call(null,mults);var inst_48312 = cljs.core.vals.call(null,inst_48311);var inst_48313 = cljs.core.seq.call(null,inst_48312);var inst_48314 = inst_48313;var inst_48315 = null;var inst_48316 = 0;var inst_48317 = 0;var state_48375__$1 = (function (){var statearr_48381 = state_48375;(statearr_48381[8] = inst_48317);
(statearr_48381[9] = inst_48316);
(statearr_48381[10] = inst_48315);
(statearr_48381[11] = inst_48314);
return statearr_48381;
})();var statearr_48382_48427 = state_48375__$1;(statearr_48382_48427[2] = null);
(statearr_48382_48427[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 6))
{var inst_48354 = (state_48375[12]);var inst_48304 = (state_48375[7]);var inst_48352 = (state_48375[13]);var inst_48352__$1 = topic_fn.call(null,inst_48304);var inst_48353 = cljs.core.deref.call(null,mults);var inst_48354__$1 = cljs.core.get.call(null,inst_48353,inst_48352__$1);var state_48375__$1 = (function (){var statearr_48383 = state_48375;(statearr_48383[12] = inst_48354__$1);
(statearr_48383[13] = inst_48352__$1);
return statearr_48383;
})();if(cljs.core.truth_(inst_48354__$1))
{var statearr_48384_48428 = state_48375__$1;(statearr_48384_48428[1] = 19);
} else
{var statearr_48385_48429 = state_48375__$1;(statearr_48385_48429[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 7))
{var inst_48371 = (state_48375[2]);var state_48375__$1 = state_48375;var statearr_48386_48430 = state_48375__$1;(statearr_48386_48430[2] = inst_48371);
(statearr_48386_48430[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 8))
{var inst_48317 = (state_48375[8]);var inst_48316 = (state_48375[9]);var inst_48319 = (inst_48317 < inst_48316);var inst_48320 = inst_48319;var state_48375__$1 = state_48375;if(cljs.core.truth_(inst_48320))
{var statearr_48390_48431 = state_48375__$1;(statearr_48390_48431[1] = 10);
} else
{var statearr_48391_48432 = state_48375__$1;(statearr_48391_48432[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 9))
{var inst_48350 = (state_48375[2]);var state_48375__$1 = state_48375;var statearr_48392_48433 = state_48375__$1;(statearr_48392_48433[2] = inst_48350);
(statearr_48392_48433[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 10))
{var inst_48317 = (state_48375[8]);var inst_48316 = (state_48375[9]);var inst_48315 = (state_48375[10]);var inst_48314 = (state_48375[11]);var inst_48322 = cljs.core._nth.call(null,inst_48315,inst_48317);var inst_48323 = cljs.core.async.muxch_STAR_.call(null,inst_48322);var inst_48324 = cljs.core.async.close_BANG_.call(null,inst_48323);var inst_48325 = (inst_48317 + 1);var tmp48387 = inst_48316;var tmp48388 = inst_48315;var tmp48389 = inst_48314;var inst_48314__$1 = tmp48389;var inst_48315__$1 = tmp48388;var inst_48316__$1 = tmp48387;var inst_48317__$1 = inst_48325;var state_48375__$1 = (function (){var statearr_48393 = state_48375;(statearr_48393[8] = inst_48317__$1);
(statearr_48393[14] = inst_48324);
(statearr_48393[9] = inst_48316__$1);
(statearr_48393[10] = inst_48315__$1);
(statearr_48393[11] = inst_48314__$1);
return statearr_48393;
})();var statearr_48394_48434 = state_48375__$1;(statearr_48394_48434[2] = null);
(statearr_48394_48434[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 11))
{var inst_48328 = (state_48375[15]);var inst_48314 = (state_48375[11]);var inst_48328__$1 = cljs.core.seq.call(null,inst_48314);var state_48375__$1 = (function (){var statearr_48395 = state_48375;(statearr_48395[15] = inst_48328__$1);
return statearr_48395;
})();if(inst_48328__$1)
{var statearr_48396_48435 = state_48375__$1;(statearr_48396_48435[1] = 13);
} else
{var statearr_48397_48436 = state_48375__$1;(statearr_48397_48436[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 12))
{var inst_48348 = (state_48375[2]);var state_48375__$1 = state_48375;var statearr_48398_48437 = state_48375__$1;(statearr_48398_48437[2] = inst_48348);
(statearr_48398_48437[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 13))
{var inst_48328 = (state_48375[15]);var inst_48330 = cljs.core.chunked_seq_QMARK_.call(null,inst_48328);var state_48375__$1 = state_48375;if(inst_48330)
{var statearr_48399_48438 = state_48375__$1;(statearr_48399_48438[1] = 16);
} else
{var statearr_48400_48439 = state_48375__$1;(statearr_48400_48439[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 14))
{var state_48375__$1 = state_48375;var statearr_48401_48440 = state_48375__$1;(statearr_48401_48440[2] = null);
(statearr_48401_48440[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 15))
{var inst_48346 = (state_48375[2]);var state_48375__$1 = state_48375;var statearr_48402_48441 = state_48375__$1;(statearr_48402_48441[2] = inst_48346);
(statearr_48402_48441[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 16))
{var inst_48328 = (state_48375[15]);var inst_48332 = cljs.core.chunk_first.call(null,inst_48328);var inst_48333 = cljs.core.chunk_rest.call(null,inst_48328);var inst_48334 = cljs.core.count.call(null,inst_48332);var inst_48314 = inst_48333;var inst_48315 = inst_48332;var inst_48316 = inst_48334;var inst_48317 = 0;var state_48375__$1 = (function (){var statearr_48403 = state_48375;(statearr_48403[8] = inst_48317);
(statearr_48403[9] = inst_48316);
(statearr_48403[10] = inst_48315);
(statearr_48403[11] = inst_48314);
return statearr_48403;
})();var statearr_48404_48442 = state_48375__$1;(statearr_48404_48442[2] = null);
(statearr_48404_48442[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 17))
{var inst_48328 = (state_48375[15]);var inst_48337 = cljs.core.first.call(null,inst_48328);var inst_48338 = cljs.core.async.muxch_STAR_.call(null,inst_48337);var inst_48339 = cljs.core.async.close_BANG_.call(null,inst_48338);var inst_48340 = cljs.core.next.call(null,inst_48328);var inst_48314 = inst_48340;var inst_48315 = null;var inst_48316 = 0;var inst_48317 = 0;var state_48375__$1 = (function (){var statearr_48405 = state_48375;(statearr_48405[8] = inst_48317);
(statearr_48405[9] = inst_48316);
(statearr_48405[10] = inst_48315);
(statearr_48405[11] = inst_48314);
(statearr_48405[16] = inst_48339);
return statearr_48405;
})();var statearr_48406_48443 = state_48375__$1;(statearr_48406_48443[2] = null);
(statearr_48406_48443[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 18))
{var inst_48343 = (state_48375[2]);var state_48375__$1 = state_48375;var statearr_48407_48444 = state_48375__$1;(statearr_48407_48444[2] = inst_48343);
(statearr_48407_48444[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 19))
{var state_48375__$1 = state_48375;var statearr_48408_48445 = state_48375__$1;(statearr_48408_48445[2] = null);
(statearr_48408_48445[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 20))
{var state_48375__$1 = state_48375;var statearr_48409_48446 = state_48375__$1;(statearr_48409_48446[2] = null);
(statearr_48409_48446[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 21))
{var inst_48368 = (state_48375[2]);var state_48375__$1 = (function (){var statearr_48410 = state_48375;(statearr_48410[17] = inst_48368);
return statearr_48410;
})();var statearr_48411_48447 = state_48375__$1;(statearr_48411_48447[2] = null);
(statearr_48411_48447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 22))
{var inst_48365 = (state_48375[2]);var state_48375__$1 = state_48375;var statearr_48412_48448 = state_48375__$1;(statearr_48412_48448[2] = inst_48365);
(statearr_48412_48448[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 23))
{var inst_48352 = (state_48375[13]);var inst_48356 = (state_48375[2]);var inst_48357 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48352);var state_48375__$1 = (function (){var statearr_48413 = state_48375;(statearr_48413[18] = inst_48356);
return statearr_48413;
})();var statearr_48414_48449 = state_48375__$1;(statearr_48414_48449[2] = inst_48357);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48375__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48376 === 24))
{var inst_48354 = (state_48375[12]);var inst_48304 = (state_48375[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48375,23,Object,null,22);var inst_48361 = cljs.core.async.muxch_STAR_.call(null,inst_48354);var state_48375__$1 = state_48375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48375__$1,25,inst_48361,inst_48304);
} else
{if((state_val_48376 === 25))
{var inst_48363 = (state_48375[2]);var state_48375__$1 = state_48375;var statearr_48415_48450 = state_48375__$1;(statearr_48415_48450[2] = inst_48363);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48375__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48419[0] = state_machine__5548__auto__);
(statearr_48419[1] = 1);
return statearr_48419;
});
var state_machine__5548__auto____1 = (function (state_48375){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48375);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48420){if((e48420 instanceof Object))
{var ex__5551__auto__ = e48420;var statearr_48421_48451 = state_48375;(statearr_48421_48451[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48452 = state_48375;
state_48375 = G__48452;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48375){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48422 = f__5563__auto__.call(null);(statearr_48422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48423);
return statearr_48422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
,cljs.core.range.call(null,cnt));var c__5562__auto___48589 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48559){var state_val_48560 = (state_48559[1]);if((state_val_48560 === 1))
{var state_48559__$1 = state_48559;var statearr_48561_48590 = state_48559__$1;(statearr_48561_48590[2] = null);
(statearr_48561_48590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 2))
{var inst_48522 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_48523 = 0;var state_48559__$1 = (function (){var statearr_48562 = state_48559;(statearr_48562[7] = inst_48523);
(statearr_48562[8] = inst_48522);
return statearr_48562;
})();var statearr_48563_48591 = state_48559__$1;(statearr_48563_48591[2] = null);
(statearr_48563_48591[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 3))
{var inst_48557 = (state_48559[2]);var state_48559__$1 = state_48559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48559__$1,inst_48557);
} else
{if((state_val_48560 === 4))
{var inst_48523 = (state_48559[7]);var inst_48525 = (inst_48523 < cnt);var state_48559__$1 = state_48559;if(cljs.core.truth_(inst_48525))
{var statearr_48564_48592 = state_48559__$1;(statearr_48564_48592[1] = 6);
} else
{var statearr_48565_48593 = state_48559__$1;(statearr_48565_48593[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 5))
{var inst_48543 = (state_48559[2]);var state_48559__$1 = (function (){var statearr_48566 = state_48559;(statearr_48566[9] = inst_48543);
return statearr_48566;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48559__$1,12,dchan);
} else
{if((state_val_48560 === 6))
{var state_48559__$1 = state_48559;var statearr_48567_48594 = state_48559__$1;(statearr_48567_48594[2] = null);
(statearr_48567_48594[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 7))
{var state_48559__$1 = state_48559;var statearr_48568_48595 = state_48559__$1;(statearr_48568_48595[2] = null);
(statearr_48568_48595[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 8))
{var inst_48541 = (state_48559[2]);var state_48559__$1 = state_48559;var statearr_48569_48596 = state_48559__$1;(statearr_48569_48596[2] = inst_48541);
(statearr_48569_48596[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 9))
{var inst_48523 = (state_48559[7]);var inst_48536 = (state_48559[2]);var inst_48537 = (inst_48523 + 1);var inst_48523__$1 = inst_48537;var state_48559__$1 = (function (){var statearr_48570 = state_48559;(statearr_48570[10] = inst_48536);
(statearr_48570[7] = inst_48523__$1);
return statearr_48570;
})();var statearr_48571_48597 = state_48559__$1;(statearr_48571_48597[2] = null);
(statearr_48571_48597[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 10))
{var inst_48527 = (state_48559[2]);var inst_48528 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_48559__$1 = (function (){var statearr_48572 = state_48559;(statearr_48572[11] = inst_48527);
return statearr_48572;
})();var statearr_48573_48598 = state_48559__$1;(statearr_48573_48598[2] = inst_48528);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48559__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 11))
{var inst_48523 = (state_48559[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48559,10,Object,null,9);var inst_48532 = chs__$1.call(null,inst_48523);var inst_48533 = done.call(null,inst_48523);var inst_48534 = cljs.core.async.take_BANG_.call(null,inst_48532,inst_48533);var state_48559__$1 = state_48559;var statearr_48574_48599 = state_48559__$1;(statearr_48574_48599[2] = inst_48534);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48559__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 12))
{var inst_48545 = (state_48559[12]);var inst_48545__$1 = (state_48559[2]);var inst_48546 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48545__$1);var state_48559__$1 = (function (){var statearr_48575 = state_48559;(statearr_48575[12] = inst_48545__$1);
return statearr_48575;
})();if(cljs.core.truth_(inst_48546))
{var statearr_48576_48600 = state_48559__$1;(statearr_48576_48600[1] = 13);
} else
{var statearr_48577_48601 = state_48559__$1;(statearr_48577_48601[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 13))
{var inst_48548 = cljs.core.async.close_BANG_.call(null,out);var state_48559__$1 = state_48559;var statearr_48578_48602 = state_48559__$1;(statearr_48578_48602[2] = inst_48548);
(statearr_48578_48602[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 14))
{var inst_48545 = (state_48559[12]);var inst_48550 = cljs.core.apply.call(null,f,inst_48545);var state_48559__$1 = state_48559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48559__$1,16,out,inst_48550);
} else
{if((state_val_48560 === 15))
{var inst_48555 = (state_48559[2]);var state_48559__$1 = state_48559;var statearr_48579_48603 = state_48559__$1;(statearr_48579_48603[2] = inst_48555);
(statearr_48579_48603[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48560 === 16))
{var inst_48552 = (state_48559[2]);var state_48559__$1 = (function (){var statearr_48580 = state_48559;(statearr_48580[13] = inst_48552);
return statearr_48580;
})();var statearr_48581_48604 = state_48559__$1;(statearr_48581_48604[2] = null);
(statearr_48581_48604[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48585[0] = state_machine__5548__auto__);
(statearr_48585[1] = 1);
return statearr_48585;
});
var state_machine__5548__auto____1 = (function (state_48559){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48559);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48586){if((e48586 instanceof Object))
{var ex__5551__auto__ = e48586;var statearr_48587_48605 = state_48559;(statearr_48587_48605[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48559);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48606 = state_48559;
state_48559 = G__48606;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48559){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48588 = f__5563__auto__.call(null);(statearr_48588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48589);
return statearr_48588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___48714 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48690){var state_val_48691 = (state_48690[1]);if((state_val_48691 === 1))
{var inst_48661 = cljs.core.vec.call(null,chs);var inst_48662 = inst_48661;var state_48690__$1 = (function (){var statearr_48692 = state_48690;(statearr_48692[7] = inst_48662);
return statearr_48692;
})();var statearr_48693_48715 = state_48690__$1;(statearr_48693_48715[2] = null);
(statearr_48693_48715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48691 === 2))
{var inst_48662 = (state_48690[7]);var inst_48664 = cljs.core.count.call(null,inst_48662);var inst_48665 = (inst_48664 > 0);var state_48690__$1 = state_48690;if(cljs.core.truth_(inst_48665))
{var statearr_48694_48716 = state_48690__$1;(statearr_48694_48716[1] = 4);
} else
{var statearr_48695_48717 = state_48690__$1;(statearr_48695_48717[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48691 === 3))
{var inst_48688 = (state_48690[2]);var state_48690__$1 = state_48690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48690__$1,inst_48688);
} else
{if((state_val_48691 === 4))
{var inst_48662 = (state_48690[7]);var state_48690__$1 = state_48690;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48690__$1,7,inst_48662);
} else
{if((state_val_48691 === 5))
{var inst_48684 = cljs.core.async.close_BANG_.call(null,out);var state_48690__$1 = state_48690;var statearr_48696_48718 = state_48690__$1;(statearr_48696_48718[2] = inst_48684);
(statearr_48696_48718[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48691 === 6))
{var inst_48686 = (state_48690[2]);var state_48690__$1 = state_48690;var statearr_48697_48719 = state_48690__$1;(statearr_48697_48719[2] = inst_48686);
(statearr_48697_48719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48691 === 7))
{var inst_48669 = (state_48690[8]);var inst_48670 = (state_48690[9]);var inst_48669__$1 = (state_48690[2]);var inst_48670__$1 = cljs.core.nth.call(null,inst_48669__$1,0,null);var inst_48671 = cljs.core.nth.call(null,inst_48669__$1,1,null);var inst_48672 = (inst_48670__$1 == null);var state_48690__$1 = (function (){var statearr_48698 = state_48690;(statearr_48698[8] = inst_48669__$1);
(statearr_48698[10] = inst_48671);
(statearr_48698[9] = inst_48670__$1);
return statearr_48698;
})();if(cljs.core.truth_(inst_48672))
{var statearr_48699_48720 = state_48690__$1;(statearr_48699_48720[1] = 8);
} else
{var statearr_48700_48721 = state_48690__$1;(statearr_48700_48721[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48691 === 8))
{var inst_48662 = (state_48690[7]);var inst_48669 = (state_48690[8]);var inst_48671 = (state_48690[10]);var inst_48670 = (state_48690[9]);var inst_48674 = (function (){var c = inst_48671;var v = inst_48670;var vec__48667 = inst_48669;var cs = inst_48662;return ((function (c,v,vec__48667,cs,inst_48662,inst_48669,inst_48671,inst_48670,state_val_48691){
return (function (p1__48607_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__48607_SHARP_);
});
;})(c,v,vec__48667,cs,inst_48662,inst_48669,inst_48671,inst_48670,state_val_48691))
})();var inst_48675 = cljs.core.filterv.call(null,inst_48674,inst_48662);var inst_48662__$1 = inst_48675;var state_48690__$1 = (function (){var statearr_48701 = state_48690;(statearr_48701[7] = inst_48662__$1);
return statearr_48701;
})();var statearr_48702_48722 = state_48690__$1;(statearr_48702_48722[2] = null);
(statearr_48702_48722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48691 === 9))
{var inst_48670 = (state_48690[9]);var state_48690__$1 = state_48690;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48690__$1,11,out,inst_48670);
} else
{if((state_val_48691 === 10))
{var inst_48682 = (state_48690[2]);var state_48690__$1 = state_48690;var statearr_48704_48723 = state_48690__$1;(statearr_48704_48723[2] = inst_48682);
(statearr_48704_48723[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48691 === 11))
{var inst_48662 = (state_48690[7]);var inst_48679 = (state_48690[2]);var tmp48703 = inst_48662;var inst_48662__$1 = tmp48703;var state_48690__$1 = (function (){var statearr_48705 = state_48690;(statearr_48705[7] = inst_48662__$1);
(statearr_48705[11] = inst_48679);
return statearr_48705;
})();var statearr_48706_48724 = state_48690__$1;(statearr_48706_48724[2] = null);
(statearr_48706_48724[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48710 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48710[0] = state_machine__5548__auto__);
(statearr_48710[1] = 1);
return statearr_48710;
});
var state_machine__5548__auto____1 = (function (state_48690){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48690);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48711){if((e48711 instanceof Object))
{var ex__5551__auto__ = e48711;var statearr_48712_48725 = state_48690;(statearr_48712_48725[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48726 = state_48690;
state_48690 = G__48726;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48690){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48713 = f__5563__auto__.call(null);(statearr_48713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48714);
return statearr_48713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___48819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48796){var state_val_48797 = (state_48796[1]);if((state_val_48797 === 1))
{var inst_48773 = 0;var state_48796__$1 = (function (){var statearr_48798 = state_48796;(statearr_48798[7] = inst_48773);
return statearr_48798;
})();var statearr_48799_48820 = state_48796__$1;(statearr_48799_48820[2] = null);
(statearr_48799_48820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48797 === 2))
{var inst_48773 = (state_48796[7]);var inst_48775 = (inst_48773 < n);var state_48796__$1 = state_48796;if(cljs.core.truth_(inst_48775))
{var statearr_48800_48821 = state_48796__$1;(statearr_48800_48821[1] = 4);
} else
{var statearr_48801_48822 = state_48796__$1;(statearr_48801_48822[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48797 === 3))
{var inst_48793 = (state_48796[2]);var inst_48794 = cljs.core.async.close_BANG_.call(null,out);var state_48796__$1 = (function (){var statearr_48802 = state_48796;(statearr_48802[8] = inst_48793);
return statearr_48802;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48796__$1,inst_48794);
} else
{if((state_val_48797 === 4))
{var state_48796__$1 = state_48796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48796__$1,7,ch);
} else
{if((state_val_48797 === 5))
{var state_48796__$1 = state_48796;var statearr_48803_48823 = state_48796__$1;(statearr_48803_48823[2] = null);
(statearr_48803_48823[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48797 === 6))
{var inst_48791 = (state_48796[2]);var state_48796__$1 = state_48796;var statearr_48804_48824 = state_48796__$1;(statearr_48804_48824[2] = inst_48791);
(statearr_48804_48824[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48797 === 7))
{var inst_48778 = (state_48796[9]);var inst_48778__$1 = (state_48796[2]);var inst_48779 = (inst_48778__$1 == null);var inst_48780 = cljs.core.not.call(null,inst_48779);var state_48796__$1 = (function (){var statearr_48805 = state_48796;(statearr_48805[9] = inst_48778__$1);
return statearr_48805;
})();if(inst_48780)
{var statearr_48806_48825 = state_48796__$1;(statearr_48806_48825[1] = 8);
} else
{var statearr_48807_48826 = state_48796__$1;(statearr_48807_48826[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48797 === 8))
{var inst_48778 = (state_48796[9]);var state_48796__$1 = state_48796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48796__$1,11,out,inst_48778);
} else
{if((state_val_48797 === 9))
{var state_48796__$1 = state_48796;var statearr_48808_48827 = state_48796__$1;(statearr_48808_48827[2] = null);
(statearr_48808_48827[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48797 === 10))
{var inst_48788 = (state_48796[2]);var state_48796__$1 = state_48796;var statearr_48809_48828 = state_48796__$1;(statearr_48809_48828[2] = inst_48788);
(statearr_48809_48828[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48797 === 11))
{var inst_48773 = (state_48796[7]);var inst_48783 = (state_48796[2]);var inst_48784 = (inst_48773 + 1);var inst_48773__$1 = inst_48784;var state_48796__$1 = (function (){var statearr_48810 = state_48796;(statearr_48810[7] = inst_48773__$1);
(statearr_48810[10] = inst_48783);
return statearr_48810;
})();var statearr_48811_48829 = state_48796__$1;(statearr_48811_48829[2] = null);
(statearr_48811_48829[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48815 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_48815[0] = state_machine__5548__auto__);
(statearr_48815[1] = 1);
return statearr_48815;
});
var state_machine__5548__auto____1 = (function (state_48796){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48796);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48816){if((e48816 instanceof Object))
{var ex__5551__auto__ = e48816;var statearr_48817_48830 = state_48796;(statearr_48817_48830[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48796);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48831 = state_48796;
state_48796 = G__48831;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48796){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48818 = f__5563__auto__.call(null);(statearr_48818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48819);
return statearr_48818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___48928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48903){var state_val_48904 = (state_48903[1]);if((state_val_48904 === 1))
{var inst_48880 = null;var state_48903__$1 = (function (){var statearr_48905 = state_48903;(statearr_48905[7] = inst_48880);
return statearr_48905;
})();var statearr_48906_48929 = state_48903__$1;(statearr_48906_48929[2] = null);
(statearr_48906_48929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48904 === 2))
{var state_48903__$1 = state_48903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48903__$1,4,ch);
} else
{if((state_val_48904 === 3))
{var inst_48900 = (state_48903[2]);var inst_48901 = cljs.core.async.close_BANG_.call(null,out);var state_48903__$1 = (function (){var statearr_48907 = state_48903;(statearr_48907[8] = inst_48900);
return statearr_48907;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48903__$1,inst_48901);
} else
{if((state_val_48904 === 4))
{var inst_48883 = (state_48903[9]);var inst_48883__$1 = (state_48903[2]);var inst_48884 = (inst_48883__$1 == null);var inst_48885 = cljs.core.not.call(null,inst_48884);var state_48903__$1 = (function (){var statearr_48908 = state_48903;(statearr_48908[9] = inst_48883__$1);
return statearr_48908;
})();if(inst_48885)
{var statearr_48909_48930 = state_48903__$1;(statearr_48909_48930[1] = 5);
} else
{var statearr_48910_48931 = state_48903__$1;(statearr_48910_48931[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48904 === 5))
{var inst_48883 = (state_48903[9]);var inst_48880 = (state_48903[7]);var inst_48887 = cljs.core._EQ_.call(null,inst_48883,inst_48880);var state_48903__$1 = state_48903;if(inst_48887)
{var statearr_48911_48932 = state_48903__$1;(statearr_48911_48932[1] = 8);
} else
{var statearr_48912_48933 = state_48903__$1;(statearr_48912_48933[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48904 === 6))
{var state_48903__$1 = state_48903;var statearr_48914_48934 = state_48903__$1;(statearr_48914_48934[2] = null);
(statearr_48914_48934[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48904 === 7))
{var inst_48898 = (state_48903[2]);var state_48903__$1 = state_48903;var statearr_48915_48935 = state_48903__$1;(statearr_48915_48935[2] = inst_48898);
(statearr_48915_48935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48904 === 8))
{var inst_48880 = (state_48903[7]);var tmp48913 = inst_48880;var inst_48880__$1 = tmp48913;var state_48903__$1 = (function (){var statearr_48916 = state_48903;(statearr_48916[7] = inst_48880__$1);
return statearr_48916;
})();var statearr_48917_48936 = state_48903__$1;(statearr_48917_48936[2] = null);
(statearr_48917_48936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48904 === 9))
{var inst_48883 = (state_48903[9]);var state_48903__$1 = state_48903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48903__$1,11,out,inst_48883);
} else
{if((state_val_48904 === 10))
{var inst_48895 = (state_48903[2]);var state_48903__$1 = state_48903;var statearr_48918_48937 = state_48903__$1;(statearr_48918_48937[2] = inst_48895);
(statearr_48918_48937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48904 === 11))
{var inst_48883 = (state_48903[9]);var inst_48892 = (state_48903[2]);var inst_48880 = inst_48883;var state_48903__$1 = (function (){var statearr_48919 = state_48903;(statearr_48919[7] = inst_48880);
(statearr_48919[10] = inst_48892);
return statearr_48919;
})();var statearr_48920_48938 = state_48903__$1;(statearr_48920_48938[2] = null);
(statearr_48920_48938[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48924 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_48924[0] = state_machine__5548__auto__);
(statearr_48924[1] = 1);
return statearr_48924;
});
var state_machine__5548__auto____1 = (function (state_48903){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48903);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48925){if((e48925 instanceof Object))
{var ex__5551__auto__ = e48925;var statearr_48926_48939 = state_48903;(statearr_48926_48939[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48940 = state_48903;
state_48903 = G__48940;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48903){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48927 = f__5563__auto__.call(null);(statearr_48927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48928);
return statearr_48927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49045){var state_val_49046 = (state_49045[1]);if((state_val_49046 === 1))
{var inst_49008 = (new Array(n));var inst_49009 = inst_49008;var inst_49010 = 0;var state_49045__$1 = (function (){var statearr_49047 = state_49045;(statearr_49047[7] = inst_49010);
(statearr_49047[8] = inst_49009);
return statearr_49047;
})();var statearr_49048_49076 = state_49045__$1;(statearr_49048_49076[2] = null);
(statearr_49048_49076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 2))
{var state_49045__$1 = state_49045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49045__$1,4,ch);
} else
{if((state_val_49046 === 3))
{var inst_49043 = (state_49045[2]);var state_49045__$1 = state_49045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49045__$1,inst_49043);
} else
{if((state_val_49046 === 4))
{var inst_49013 = (state_49045[9]);var inst_49013__$1 = (state_49045[2]);var inst_49014 = (inst_49013__$1 == null);var inst_49015 = cljs.core.not.call(null,inst_49014);var state_49045__$1 = (function (){var statearr_49049 = state_49045;(statearr_49049[9] = inst_49013__$1);
return statearr_49049;
})();if(inst_49015)
{var statearr_49050_49077 = state_49045__$1;(statearr_49050_49077[1] = 5);
} else
{var statearr_49051_49078 = state_49045__$1;(statearr_49051_49078[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 5))
{var inst_49013 = (state_49045[9]);var inst_49010 = (state_49045[7]);var inst_49018 = (state_49045[10]);var inst_49009 = (state_49045[8]);var inst_49017 = (inst_49009[inst_49010] = inst_49013);var inst_49018__$1 = (inst_49010 + 1);var inst_49019 = (inst_49018__$1 < n);var state_49045__$1 = (function (){var statearr_49052 = state_49045;(statearr_49052[10] = inst_49018__$1);
(statearr_49052[11] = inst_49017);
return statearr_49052;
})();if(cljs.core.truth_(inst_49019))
{var statearr_49053_49079 = state_49045__$1;(statearr_49053_49079[1] = 8);
} else
{var statearr_49054_49080 = state_49045__$1;(statearr_49054_49080[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 6))
{var inst_49010 = (state_49045[7]);var inst_49031 = (inst_49010 > 0);var state_49045__$1 = state_49045;if(cljs.core.truth_(inst_49031))
{var statearr_49056_49081 = state_49045__$1;(statearr_49056_49081[1] = 12);
} else
{var statearr_49057_49082 = state_49045__$1;(statearr_49057_49082[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 7))
{var inst_49041 = (state_49045[2]);var state_49045__$1 = state_49045;var statearr_49058_49083 = state_49045__$1;(statearr_49058_49083[2] = inst_49041);
(statearr_49058_49083[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 8))
{var inst_49018 = (state_49045[10]);var inst_49009 = (state_49045[8]);var tmp49055 = inst_49009;var inst_49009__$1 = tmp49055;var inst_49010 = inst_49018;var state_49045__$1 = (function (){var statearr_49059 = state_49045;(statearr_49059[7] = inst_49010);
(statearr_49059[8] = inst_49009__$1);
return statearr_49059;
})();var statearr_49060_49084 = state_49045__$1;(statearr_49060_49084[2] = null);
(statearr_49060_49084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 9))
{var inst_49009 = (state_49045[8]);var inst_49023 = cljs.core.vec.call(null,inst_49009);var state_49045__$1 = state_49045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49045__$1,11,out,inst_49023);
} else
{if((state_val_49046 === 10))
{var inst_49029 = (state_49045[2]);var state_49045__$1 = state_49045;var statearr_49061_49085 = state_49045__$1;(statearr_49061_49085[2] = inst_49029);
(statearr_49061_49085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 11))
{var inst_49025 = (state_49045[2]);var inst_49026 = (new Array(n));var inst_49009 = inst_49026;var inst_49010 = 0;var state_49045__$1 = (function (){var statearr_49062 = state_49045;(statearr_49062[7] = inst_49010);
(statearr_49062[12] = inst_49025);
(statearr_49062[8] = inst_49009);
return statearr_49062;
})();var statearr_49063_49086 = state_49045__$1;(statearr_49063_49086[2] = null);
(statearr_49063_49086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 12))
{var inst_49009 = (state_49045[8]);var inst_49033 = cljs.core.vec.call(null,inst_49009);var state_49045__$1 = state_49045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49045__$1,15,out,inst_49033);
} else
{if((state_val_49046 === 13))
{var state_49045__$1 = state_49045;var statearr_49064_49087 = state_49045__$1;(statearr_49064_49087[2] = null);
(statearr_49064_49087[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 14))
{var inst_49038 = (state_49045[2]);var inst_49039 = cljs.core.async.close_BANG_.call(null,out);var state_49045__$1 = (function (){var statearr_49065 = state_49045;(statearr_49065[13] = inst_49038);
return statearr_49065;
})();var statearr_49066_49088 = state_49045__$1;(statearr_49066_49088[2] = inst_49039);
(statearr_49066_49088[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49046 === 15))
{var inst_49035 = (state_49045[2]);var state_49045__$1 = state_49045;var statearr_49067_49089 = state_49045__$1;(statearr_49067_49089[2] = inst_49035);
(statearr_49067_49089[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_49071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49071[0] = state_machine__5548__auto__);
(statearr_49071[1] = 1);
return statearr_49071;
});
var state_machine__5548__auto____1 = (function (state_49045){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49045);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49072){if((e49072 instanceof Object))
{var ex__5551__auto__ = e49072;var statearr_49073_49090 = state_49045;(statearr_49073_49090[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49091 = state_49045;
state_49045 = G__49091;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49045){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49074 = f__5563__auto__.call(null);(statearr_49074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49075);
return statearr_49074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49234 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49204){var state_val_49205 = (state_49204[1]);if((state_val_49205 === 1))
{var inst_49163 = [];var inst_49164 = inst_49163;var inst_49165 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_49204__$1 = (function (){var statearr_49206 = state_49204;(statearr_49206[7] = inst_49164);
(statearr_49206[8] = inst_49165);
return statearr_49206;
})();var statearr_49207_49235 = state_49204__$1;(statearr_49207_49235[2] = null);
(statearr_49207_49235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 2))
{var state_49204__$1 = state_49204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49204__$1,4,ch);
} else
{if((state_val_49205 === 3))
{var inst_49202 = (state_49204[2]);var state_49204__$1 = state_49204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49204__$1,inst_49202);
} else
{if((state_val_49205 === 4))
{var inst_49168 = (state_49204[9]);var inst_49168__$1 = (state_49204[2]);var inst_49169 = (inst_49168__$1 == null);var inst_49170 = cljs.core.not.call(null,inst_49169);var state_49204__$1 = (function (){var statearr_49208 = state_49204;(statearr_49208[9] = inst_49168__$1);
return statearr_49208;
})();if(inst_49170)
{var statearr_49209_49236 = state_49204__$1;(statearr_49209_49236[1] = 5);
} else
{var statearr_49210_49237 = state_49204__$1;(statearr_49210_49237[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 5))
{var inst_49172 = (state_49204[10]);var inst_49168 = (state_49204[9]);var inst_49165 = (state_49204[8]);var inst_49172__$1 = f.call(null,inst_49168);var inst_49173 = cljs.core._EQ_.call(null,inst_49172__$1,inst_49165);var inst_49174 = cljs.core.keyword_identical_QMARK_.call(null,inst_49165,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_49175 = (inst_49173) || (inst_49174);var state_49204__$1 = (function (){var statearr_49211 = state_49204;(statearr_49211[10] = inst_49172__$1);
return statearr_49211;
})();if(cljs.core.truth_(inst_49175))
{var statearr_49212_49238 = state_49204__$1;(statearr_49212_49238[1] = 8);
} else
{var statearr_49213_49239 = state_49204__$1;(statearr_49213_49239[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 6))
{var inst_49164 = (state_49204[7]);var inst_49189 = inst_49164.length;var inst_49190 = (inst_49189 > 0);var state_49204__$1 = state_49204;if(cljs.core.truth_(inst_49190))
{var statearr_49215_49240 = state_49204__$1;(statearr_49215_49240[1] = 12);
} else
{var statearr_49216_49241 = state_49204__$1;(statearr_49216_49241[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 7))
{var inst_49200 = (state_49204[2]);var state_49204__$1 = state_49204;var statearr_49217_49242 = state_49204__$1;(statearr_49217_49242[2] = inst_49200);
(statearr_49217_49242[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 8))
{var inst_49172 = (state_49204[10]);var inst_49168 = (state_49204[9]);var inst_49164 = (state_49204[7]);var inst_49177 = inst_49164.push(inst_49168);var tmp49214 = inst_49164;var inst_49164__$1 = tmp49214;var inst_49165 = inst_49172;var state_49204__$1 = (function (){var statearr_49218 = state_49204;(statearr_49218[11] = inst_49177);
(statearr_49218[7] = inst_49164__$1);
(statearr_49218[8] = inst_49165);
return statearr_49218;
})();var statearr_49219_49243 = state_49204__$1;(statearr_49219_49243[2] = null);
(statearr_49219_49243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 9))
{var inst_49164 = (state_49204[7]);var inst_49180 = cljs.core.vec.call(null,inst_49164);var state_49204__$1 = state_49204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49204__$1,11,out,inst_49180);
} else
{if((state_val_49205 === 10))
{var inst_49187 = (state_49204[2]);var state_49204__$1 = state_49204;var statearr_49220_49244 = state_49204__$1;(statearr_49220_49244[2] = inst_49187);
(statearr_49220_49244[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 11))
{var inst_49172 = (state_49204[10]);var inst_49168 = (state_49204[9]);var inst_49182 = (state_49204[2]);var inst_49183 = [];var inst_49184 = inst_49183.push(inst_49168);var inst_49164 = inst_49183;var inst_49165 = inst_49172;var state_49204__$1 = (function (){var statearr_49221 = state_49204;(statearr_49221[12] = inst_49182);
(statearr_49221[13] = inst_49184);
(statearr_49221[7] = inst_49164);
(statearr_49221[8] = inst_49165);
return statearr_49221;
})();var statearr_49222_49245 = state_49204__$1;(statearr_49222_49245[2] = null);
(statearr_49222_49245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 12))
{var inst_49164 = (state_49204[7]);var inst_49192 = cljs.core.vec.call(null,inst_49164);var state_49204__$1 = state_49204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49204__$1,15,out,inst_49192);
} else
{if((state_val_49205 === 13))
{var state_49204__$1 = state_49204;var statearr_49223_49246 = state_49204__$1;(statearr_49223_49246[2] = null);
(statearr_49223_49246[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 14))
{var inst_49197 = (state_49204[2]);var inst_49198 = cljs.core.async.close_BANG_.call(null,out);var state_49204__$1 = (function (){var statearr_49224 = state_49204;(statearr_49224[14] = inst_49197);
return statearr_49224;
})();var statearr_49225_49247 = state_49204__$1;(statearr_49225_49247[2] = inst_49198);
(statearr_49225_49247[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49205 === 15))
{var inst_49194 = (state_49204[2]);var state_49204__$1 = state_49204;var statearr_49226_49248 = state_49204__$1;(statearr_49226_49248[2] = inst_49194);
(statearr_49226_49248[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_49230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49230[0] = state_machine__5548__auto__);
(statearr_49230[1] = 1);
return statearr_49230;
});
var state_machine__5548__auto____1 = (function (state_49204){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49204);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49231){if((e49231 instanceof Object))
{var ex__5551__auto__ = e49231;var statearr_49232_49249 = state_49204;(statearr_49232_49249[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49250 = state_49204;
state_49204 = G__49250;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49204){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49233 = f__5563__auto__.call(null);(statearr_49233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49234);
return statearr_49233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
