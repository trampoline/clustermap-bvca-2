// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_38350 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38351 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_38352 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_38351,table_section_wrapper_38351,opt_wrapper_38350,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_38352,table_section_wrapper_38351,cell_wrapper_38352,opt_wrapper_38350,table_section_wrapper_38351,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_38351]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__38357 = cljs.core.seq.call(null,tbody);var chunk__38358 = null;var count__38359 = 0;var i__38360 = 0;while(true){
if((i__38360 < count__38359))
{var child = cljs.core._nth.call(null,chunk__38358,i__38360);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38361 = seq__38357;
var G__38362 = chunk__38358;
var G__38363 = count__38359;
var G__38364 = (i__38360 + 1);
seq__38357 = G__38361;
chunk__38358 = G__38362;
count__38359 = G__38363;
i__38360 = G__38364;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38357);if(temp__4092__auto__)
{var seq__38357__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38357__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38357__$1);{
var G__38365 = cljs.core.chunk_rest.call(null,seq__38357__$1);
var G__38366 = c__4148__auto__;
var G__38367 = cljs.core.count.call(null,c__4148__auto__);
var G__38368 = 0;
seq__38357 = G__38365;
chunk__38358 = G__38366;
count__38359 = G__38367;
i__38360 = G__38368;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38357__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38369 = cljs.core.next.call(null,seq__38357__$1);
var G__38370 = null;
var G__38371 = 0;
var G__38372 = 0;
seq__38357 = G__38369;
chunk__38358 = G__38370;
count__38359 = G__38371;
i__38360 = G__38372;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__38374 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38374,0,null);var start_wrap = cljs.core.nth.call(null,vec__38374,1,null);var end_wrap = cljs.core.nth.call(null,vec__38374,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__38375 = wrapper.lastChild;
var G__38376 = (level - 1);
wrapper = G__38375;
level = G__38376;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj38378 = {};return obj38378;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__38379){
var mesg = cljs.core.seq(arglist__38379);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__38380){
var mesg = cljs.core.seq(arglist__38380);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__38381){
var contents = cljs.core.seq(arglist__38381);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38382_SHARP_){return p1__38382_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38383_SHARP_,p2__38384_SHARP_){return goog.dom.insertChildAt(p1__38383_SHARP_,p2__38384_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38386_SHARP_,p2__38385_SHARP_){return goog.dom.insertSiblingBefore(p2__38385_SHARP_,p1__38386_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38388_SHARP_,p2__38387_SHARP_){return goog.dom.insertSiblingAfter(p2__38387_SHARP_,p1__38388_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38390_SHARP_,p2__38389_SHARP_){return goog.dom.replaceNode(p2__38389_SHARP_,p1__38390_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__38395_38399 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38396_38400 = null;var count__38397_38401 = 0;var i__38398_38402 = 0;while(true){
if((i__38398_38402 < count__38397_38401))
{var n_38403 = cljs.core._nth.call(null,chunk__38396_38400,i__38398_38402);goog.style.setStyle(n_38403,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38404 = seq__38395_38399;
var G__38405 = chunk__38396_38400;
var G__38406 = count__38397_38401;
var G__38407 = (i__38398_38402 + 1);
seq__38395_38399 = G__38404;
chunk__38396_38400 = G__38405;
count__38397_38401 = G__38406;
i__38398_38402 = G__38407;
continue;
}
} else
{var temp__4092__auto___38408 = cljs.core.seq.call(null,seq__38395_38399);if(temp__4092__auto___38408)
{var seq__38395_38409__$1 = temp__4092__auto___38408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38395_38409__$1))
{var c__4148__auto___38410 = cljs.core.chunk_first.call(null,seq__38395_38409__$1);{
var G__38411 = cljs.core.chunk_rest.call(null,seq__38395_38409__$1);
var G__38412 = c__4148__auto___38410;
var G__38413 = cljs.core.count.call(null,c__4148__auto___38410);
var G__38414 = 0;
seq__38395_38399 = G__38411;
chunk__38396_38400 = G__38412;
count__38397_38401 = G__38413;
i__38398_38402 = G__38414;
continue;
}
} else
{var n_38415 = cljs.core.first.call(null,seq__38395_38409__$1);goog.style.setStyle(n_38415,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38416 = cljs.core.next.call(null,seq__38395_38409__$1);
var G__38417 = null;
var G__38418 = 0;
var G__38419 = 0;
seq__38395_38399 = G__38416;
chunk__38396_38400 = G__38417;
count__38397_38401 = G__38418;
i__38398_38402 = G__38419;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38420){
var content = cljs.core.first(arglist__38420);
arglist__38420 = cljs.core.next(arglist__38420);
var name = cljs.core.first(arglist__38420);
var value = cljs.core.rest(arglist__38420);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__38425_38429 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38426_38430 = null;var count__38427_38431 = 0;var i__38428_38432 = 0;while(true){
if((i__38428_38432 < count__38427_38431))
{var n_38433 = cljs.core._nth.call(null,chunk__38426_38430,i__38428_38432);n_38433.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38434 = seq__38425_38429;
var G__38435 = chunk__38426_38430;
var G__38436 = count__38427_38431;
var G__38437 = (i__38428_38432 + 1);
seq__38425_38429 = G__38434;
chunk__38426_38430 = G__38435;
count__38427_38431 = G__38436;
i__38428_38432 = G__38437;
continue;
}
} else
{var temp__4092__auto___38438 = cljs.core.seq.call(null,seq__38425_38429);if(temp__4092__auto___38438)
{var seq__38425_38439__$1 = temp__4092__auto___38438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38425_38439__$1))
{var c__4148__auto___38440 = cljs.core.chunk_first.call(null,seq__38425_38439__$1);{
var G__38441 = cljs.core.chunk_rest.call(null,seq__38425_38439__$1);
var G__38442 = c__4148__auto___38440;
var G__38443 = cljs.core.count.call(null,c__4148__auto___38440);
var G__38444 = 0;
seq__38425_38429 = G__38441;
chunk__38426_38430 = G__38442;
count__38427_38431 = G__38443;
i__38428_38432 = G__38444;
continue;
}
} else
{var n_38445 = cljs.core.first.call(null,seq__38425_38439__$1);n_38445.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38446 = cljs.core.next.call(null,seq__38425_38439__$1);
var G__38447 = null;
var G__38448 = 0;
var G__38449 = 0;
seq__38425_38429 = G__38446;
chunk__38426_38430 = G__38447;
count__38427_38431 = G__38448;
i__38428_38432 = G__38449;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38450){
var content = cljs.core.first(arglist__38450);
arglist__38450 = cljs.core.next(arglist__38450);
var name = cljs.core.first(arglist__38450);
var value = cljs.core.rest(arglist__38450);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38455_38459 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38456_38460 = null;var count__38457_38461 = 0;var i__38458_38462 = 0;while(true){
if((i__38458_38462 < count__38457_38461))
{var n_38463 = cljs.core._nth.call(null,chunk__38456_38460,i__38458_38462);n_38463.removeAttribute(cljs.core.name.call(null,name));
{
var G__38464 = seq__38455_38459;
var G__38465 = chunk__38456_38460;
var G__38466 = count__38457_38461;
var G__38467 = (i__38458_38462 + 1);
seq__38455_38459 = G__38464;
chunk__38456_38460 = G__38465;
count__38457_38461 = G__38466;
i__38458_38462 = G__38467;
continue;
}
} else
{var temp__4092__auto___38468 = cljs.core.seq.call(null,seq__38455_38459);if(temp__4092__auto___38468)
{var seq__38455_38469__$1 = temp__4092__auto___38468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38455_38469__$1))
{var c__4148__auto___38470 = cljs.core.chunk_first.call(null,seq__38455_38469__$1);{
var G__38471 = cljs.core.chunk_rest.call(null,seq__38455_38469__$1);
var G__38472 = c__4148__auto___38470;
var G__38473 = cljs.core.count.call(null,c__4148__auto___38470);
var G__38474 = 0;
seq__38455_38459 = G__38471;
chunk__38456_38460 = G__38472;
count__38457_38461 = G__38473;
i__38458_38462 = G__38474;
continue;
}
} else
{var n_38475 = cljs.core.first.call(null,seq__38455_38469__$1);n_38475.removeAttribute(cljs.core.name.call(null,name));
{
var G__38476 = cljs.core.next.call(null,seq__38455_38469__$1);
var G__38477 = null;
var G__38478 = 0;
var G__38479 = 0;
seq__38455_38459 = G__38476;
chunk__38456_38460 = G__38477;
count__38457_38461 = G__38478;
i__38458_38462 = G__38479;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38481 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38481,0,null);var v = cljs.core.nth.call(null,vec__38481,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38482_SHARP_){var attr = attrs__$1.item(p1__38482_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38489_38495 = cljs.core.seq.call(null,styles);var chunk__38490_38496 = null;var count__38491_38497 = 0;var i__38492_38498 = 0;while(true){
if((i__38492_38498 < count__38491_38497))
{var vec__38493_38499 = cljs.core._nth.call(null,chunk__38490_38496,i__38492_38498);var name_38500 = cljs.core.nth.call(null,vec__38493_38499,0,null);var value_38501 = cljs.core.nth.call(null,vec__38493_38499,1,null);domina.set_style_BANG_.call(null,content,name_38500,value_38501);
{
var G__38502 = seq__38489_38495;
var G__38503 = chunk__38490_38496;
var G__38504 = count__38491_38497;
var G__38505 = (i__38492_38498 + 1);
seq__38489_38495 = G__38502;
chunk__38490_38496 = G__38503;
count__38491_38497 = G__38504;
i__38492_38498 = G__38505;
continue;
}
} else
{var temp__4092__auto___38506 = cljs.core.seq.call(null,seq__38489_38495);if(temp__4092__auto___38506)
{var seq__38489_38507__$1 = temp__4092__auto___38506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38489_38507__$1))
{var c__4148__auto___38508 = cljs.core.chunk_first.call(null,seq__38489_38507__$1);{
var G__38509 = cljs.core.chunk_rest.call(null,seq__38489_38507__$1);
var G__38510 = c__4148__auto___38508;
var G__38511 = cljs.core.count.call(null,c__4148__auto___38508);
var G__38512 = 0;
seq__38489_38495 = G__38509;
chunk__38490_38496 = G__38510;
count__38491_38497 = G__38511;
i__38492_38498 = G__38512;
continue;
}
} else
{var vec__38494_38513 = cljs.core.first.call(null,seq__38489_38507__$1);var name_38514 = cljs.core.nth.call(null,vec__38494_38513,0,null);var value_38515 = cljs.core.nth.call(null,vec__38494_38513,1,null);domina.set_style_BANG_.call(null,content,name_38514,value_38515);
{
var G__38516 = cljs.core.next.call(null,seq__38489_38507__$1);
var G__38517 = null;
var G__38518 = 0;
var G__38519 = 0;
seq__38489_38495 = G__38516;
chunk__38490_38496 = G__38517;
count__38491_38497 = G__38518;
i__38492_38498 = G__38519;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38526_38532 = cljs.core.seq.call(null,attrs);var chunk__38527_38533 = null;var count__38528_38534 = 0;var i__38529_38535 = 0;while(true){
if((i__38529_38535 < count__38528_38534))
{var vec__38530_38536 = cljs.core._nth.call(null,chunk__38527_38533,i__38529_38535);var name_38537 = cljs.core.nth.call(null,vec__38530_38536,0,null);var value_38538 = cljs.core.nth.call(null,vec__38530_38536,1,null);domina.set_attr_BANG_.call(null,content,name_38537,value_38538);
{
var G__38539 = seq__38526_38532;
var G__38540 = chunk__38527_38533;
var G__38541 = count__38528_38534;
var G__38542 = (i__38529_38535 + 1);
seq__38526_38532 = G__38539;
chunk__38527_38533 = G__38540;
count__38528_38534 = G__38541;
i__38529_38535 = G__38542;
continue;
}
} else
{var temp__4092__auto___38543 = cljs.core.seq.call(null,seq__38526_38532);if(temp__4092__auto___38543)
{var seq__38526_38544__$1 = temp__4092__auto___38543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38526_38544__$1))
{var c__4148__auto___38545 = cljs.core.chunk_first.call(null,seq__38526_38544__$1);{
var G__38546 = cljs.core.chunk_rest.call(null,seq__38526_38544__$1);
var G__38547 = c__4148__auto___38545;
var G__38548 = cljs.core.count.call(null,c__4148__auto___38545);
var G__38549 = 0;
seq__38526_38532 = G__38546;
chunk__38527_38533 = G__38547;
count__38528_38534 = G__38548;
i__38529_38535 = G__38549;
continue;
}
} else
{var vec__38531_38550 = cljs.core.first.call(null,seq__38526_38544__$1);var name_38551 = cljs.core.nth.call(null,vec__38531_38550,0,null);var value_38552 = cljs.core.nth.call(null,vec__38531_38550,1,null);domina.set_attr_BANG_.call(null,content,name_38551,value_38552);
{
var G__38553 = cljs.core.next.call(null,seq__38526_38544__$1);
var G__38554 = null;
var G__38555 = 0;
var G__38556 = 0;
seq__38526_38532 = G__38553;
chunk__38527_38533 = G__38554;
count__38528_38534 = G__38555;
i__38529_38535 = G__38556;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38561_38565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38562_38566 = null;var count__38563_38567 = 0;var i__38564_38568 = 0;while(true){
if((i__38564_38568 < count__38563_38567))
{var node_38569 = cljs.core._nth.call(null,chunk__38562_38566,i__38564_38568);goog.dom.classes.add(node_38569,class$);
{
var G__38570 = seq__38561_38565;
var G__38571 = chunk__38562_38566;
var G__38572 = count__38563_38567;
var G__38573 = (i__38564_38568 + 1);
seq__38561_38565 = G__38570;
chunk__38562_38566 = G__38571;
count__38563_38567 = G__38572;
i__38564_38568 = G__38573;
continue;
}
} else
{var temp__4092__auto___38574 = cljs.core.seq.call(null,seq__38561_38565);if(temp__4092__auto___38574)
{var seq__38561_38575__$1 = temp__4092__auto___38574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38561_38575__$1))
{var c__4148__auto___38576 = cljs.core.chunk_first.call(null,seq__38561_38575__$1);{
var G__38577 = cljs.core.chunk_rest.call(null,seq__38561_38575__$1);
var G__38578 = c__4148__auto___38576;
var G__38579 = cljs.core.count.call(null,c__4148__auto___38576);
var G__38580 = 0;
seq__38561_38565 = G__38577;
chunk__38562_38566 = G__38578;
count__38563_38567 = G__38579;
i__38564_38568 = G__38580;
continue;
}
} else
{var node_38581 = cljs.core.first.call(null,seq__38561_38575__$1);goog.dom.classes.add(node_38581,class$);
{
var G__38582 = cljs.core.next.call(null,seq__38561_38575__$1);
var G__38583 = null;
var G__38584 = 0;
var G__38585 = 0;
seq__38561_38565 = G__38582;
chunk__38562_38566 = G__38583;
count__38563_38567 = G__38584;
i__38564_38568 = G__38585;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38590_38594 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38591_38595 = null;var count__38592_38596 = 0;var i__38593_38597 = 0;while(true){
if((i__38593_38597 < count__38592_38596))
{var node_38598 = cljs.core._nth.call(null,chunk__38591_38595,i__38593_38597);goog.dom.classes.remove(node_38598,class$);
{
var G__38599 = seq__38590_38594;
var G__38600 = chunk__38591_38595;
var G__38601 = count__38592_38596;
var G__38602 = (i__38593_38597 + 1);
seq__38590_38594 = G__38599;
chunk__38591_38595 = G__38600;
count__38592_38596 = G__38601;
i__38593_38597 = G__38602;
continue;
}
} else
{var temp__4092__auto___38603 = cljs.core.seq.call(null,seq__38590_38594);if(temp__4092__auto___38603)
{var seq__38590_38604__$1 = temp__4092__auto___38603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38590_38604__$1))
{var c__4148__auto___38605 = cljs.core.chunk_first.call(null,seq__38590_38604__$1);{
var G__38606 = cljs.core.chunk_rest.call(null,seq__38590_38604__$1);
var G__38607 = c__4148__auto___38605;
var G__38608 = cljs.core.count.call(null,c__4148__auto___38605);
var G__38609 = 0;
seq__38590_38594 = G__38606;
chunk__38591_38595 = G__38607;
count__38592_38596 = G__38608;
i__38593_38597 = G__38609;
continue;
}
} else
{var node_38610 = cljs.core.first.call(null,seq__38590_38604__$1);goog.dom.classes.remove(node_38610,class$);
{
var G__38611 = cljs.core.next.call(null,seq__38590_38604__$1);
var G__38612 = null;
var G__38613 = 0;
var G__38614 = 0;
seq__38590_38594 = G__38611;
chunk__38591_38595 = G__38612;
count__38592_38596 = G__38613;
i__38593_38597 = G__38614;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38619_38623 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38620_38624 = null;var count__38621_38625 = 0;var i__38622_38626 = 0;while(true){
if((i__38622_38626 < count__38621_38625))
{var node_38627 = cljs.core._nth.call(null,chunk__38620_38624,i__38622_38626);goog.dom.classes.toggle(node_38627,class$);
{
var G__38628 = seq__38619_38623;
var G__38629 = chunk__38620_38624;
var G__38630 = count__38621_38625;
var G__38631 = (i__38622_38626 + 1);
seq__38619_38623 = G__38628;
chunk__38620_38624 = G__38629;
count__38621_38625 = G__38630;
i__38622_38626 = G__38631;
continue;
}
} else
{var temp__4092__auto___38632 = cljs.core.seq.call(null,seq__38619_38623);if(temp__4092__auto___38632)
{var seq__38619_38633__$1 = temp__4092__auto___38632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38619_38633__$1))
{var c__4148__auto___38634 = cljs.core.chunk_first.call(null,seq__38619_38633__$1);{
var G__38635 = cljs.core.chunk_rest.call(null,seq__38619_38633__$1);
var G__38636 = c__4148__auto___38634;
var G__38637 = cljs.core.count.call(null,c__4148__auto___38634);
var G__38638 = 0;
seq__38619_38623 = G__38635;
chunk__38620_38624 = G__38636;
count__38621_38625 = G__38637;
i__38622_38626 = G__38638;
continue;
}
} else
{var node_38639 = cljs.core.first.call(null,seq__38619_38633__$1);goog.dom.classes.toggle(node_38639,class$);
{
var G__38640 = cljs.core.next.call(null,seq__38619_38633__$1);
var G__38641 = null;
var G__38642 = 0;
var G__38643 = 0;
seq__38619_38623 = G__38640;
chunk__38620_38624 = G__38641;
count__38621_38625 = G__38642;
i__38622_38626 = G__38643;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38652__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38648_38653 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38649_38654 = null;var count__38650_38655 = 0;var i__38651_38656 = 0;while(true){
if((i__38651_38656 < count__38650_38655))
{var node_38657 = cljs.core._nth.call(null,chunk__38649_38654,i__38651_38656);goog.dom.classes.set(node_38657,classes_38652__$1);
{
var G__38658 = seq__38648_38653;
var G__38659 = chunk__38649_38654;
var G__38660 = count__38650_38655;
var G__38661 = (i__38651_38656 + 1);
seq__38648_38653 = G__38658;
chunk__38649_38654 = G__38659;
count__38650_38655 = G__38660;
i__38651_38656 = G__38661;
continue;
}
} else
{var temp__4092__auto___38662 = cljs.core.seq.call(null,seq__38648_38653);if(temp__4092__auto___38662)
{var seq__38648_38663__$1 = temp__4092__auto___38662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38648_38663__$1))
{var c__4148__auto___38664 = cljs.core.chunk_first.call(null,seq__38648_38663__$1);{
var G__38665 = cljs.core.chunk_rest.call(null,seq__38648_38663__$1);
var G__38666 = c__4148__auto___38664;
var G__38667 = cljs.core.count.call(null,c__4148__auto___38664);
var G__38668 = 0;
seq__38648_38653 = G__38665;
chunk__38649_38654 = G__38666;
count__38650_38655 = G__38667;
i__38651_38656 = G__38668;
continue;
}
} else
{var node_38669 = cljs.core.first.call(null,seq__38648_38663__$1);goog.dom.classes.set(node_38669,classes_38652__$1);
{
var G__38670 = cljs.core.next.call(null,seq__38648_38663__$1);
var G__38671 = null;
var G__38672 = 0;
var G__38673 = 0;
seq__38648_38653 = G__38670;
chunk__38649_38654 = G__38671;
count__38650_38655 = G__38672;
i__38651_38656 = G__38673;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38678_38682 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38679_38683 = null;var count__38680_38684 = 0;var i__38681_38685 = 0;while(true){
if((i__38681_38685 < count__38680_38684))
{var node_38686 = cljs.core._nth.call(null,chunk__38679_38683,i__38681_38685);goog.dom.setTextContent(node_38686,value);
{
var G__38687 = seq__38678_38682;
var G__38688 = chunk__38679_38683;
var G__38689 = count__38680_38684;
var G__38690 = (i__38681_38685 + 1);
seq__38678_38682 = G__38687;
chunk__38679_38683 = G__38688;
count__38680_38684 = G__38689;
i__38681_38685 = G__38690;
continue;
}
} else
{var temp__4092__auto___38691 = cljs.core.seq.call(null,seq__38678_38682);if(temp__4092__auto___38691)
{var seq__38678_38692__$1 = temp__4092__auto___38691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38678_38692__$1))
{var c__4148__auto___38693 = cljs.core.chunk_first.call(null,seq__38678_38692__$1);{
var G__38694 = cljs.core.chunk_rest.call(null,seq__38678_38692__$1);
var G__38695 = c__4148__auto___38693;
var G__38696 = cljs.core.count.call(null,c__4148__auto___38693);
var G__38697 = 0;
seq__38678_38682 = G__38694;
chunk__38679_38683 = G__38695;
count__38680_38684 = G__38696;
i__38681_38685 = G__38697;
continue;
}
} else
{var node_38698 = cljs.core.first.call(null,seq__38678_38692__$1);goog.dom.setTextContent(node_38698,value);
{
var G__38699 = cljs.core.next.call(null,seq__38678_38692__$1);
var G__38700 = null;
var G__38701 = 0;
var G__38702 = 0;
seq__38678_38682 = G__38699;
chunk__38679_38683 = G__38700;
count__38680_38684 = G__38701;
i__38681_38685 = G__38702;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38707_38711 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38708_38712 = null;var count__38709_38713 = 0;var i__38710_38714 = 0;while(true){
if((i__38710_38714 < count__38709_38713))
{var node_38715 = cljs.core._nth.call(null,chunk__38708_38712,i__38710_38714);goog.dom.forms.setValue(node_38715,value);
{
var G__38716 = seq__38707_38711;
var G__38717 = chunk__38708_38712;
var G__38718 = count__38709_38713;
var G__38719 = (i__38710_38714 + 1);
seq__38707_38711 = G__38716;
chunk__38708_38712 = G__38717;
count__38709_38713 = G__38718;
i__38710_38714 = G__38719;
continue;
}
} else
{var temp__4092__auto___38720 = cljs.core.seq.call(null,seq__38707_38711);if(temp__4092__auto___38720)
{var seq__38707_38721__$1 = temp__4092__auto___38720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38707_38721__$1))
{var c__4148__auto___38722 = cljs.core.chunk_first.call(null,seq__38707_38721__$1);{
var G__38723 = cljs.core.chunk_rest.call(null,seq__38707_38721__$1);
var G__38724 = c__4148__auto___38722;
var G__38725 = cljs.core.count.call(null,c__4148__auto___38722);
var G__38726 = 0;
seq__38707_38711 = G__38723;
chunk__38708_38712 = G__38724;
count__38709_38713 = G__38725;
i__38710_38714 = G__38726;
continue;
}
} else
{var node_38727 = cljs.core.first.call(null,seq__38707_38721__$1);goog.dom.forms.setValue(node_38727,value);
{
var G__38728 = cljs.core.next.call(null,seq__38707_38721__$1);
var G__38729 = null;
var G__38730 = 0;
var G__38731 = 0;
seq__38707_38711 = G__38728;
chunk__38708_38712 = G__38729;
count__38709_38713 = G__38730;
i__38710_38714 = G__38731;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_38742 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38738_38743 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38739_38744 = null;var count__38740_38745 = 0;var i__38741_38746 = 0;while(true){
if((i__38741_38746 < count__38740_38745))
{var node_38747 = cljs.core._nth.call(null,chunk__38739_38744,i__38741_38746);node_38747.innerHTML = value_38742;
{
var G__38748 = seq__38738_38743;
var G__38749 = chunk__38739_38744;
var G__38750 = count__38740_38745;
var G__38751 = (i__38741_38746 + 1);
seq__38738_38743 = G__38748;
chunk__38739_38744 = G__38749;
count__38740_38745 = G__38750;
i__38741_38746 = G__38751;
continue;
}
} else
{var temp__4092__auto___38752 = cljs.core.seq.call(null,seq__38738_38743);if(temp__4092__auto___38752)
{var seq__38738_38753__$1 = temp__4092__auto___38752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38738_38753__$1))
{var c__4148__auto___38754 = cljs.core.chunk_first.call(null,seq__38738_38753__$1);{
var G__38755 = cljs.core.chunk_rest.call(null,seq__38738_38753__$1);
var G__38756 = c__4148__auto___38754;
var G__38757 = cljs.core.count.call(null,c__4148__auto___38754);
var G__38758 = 0;
seq__38738_38743 = G__38755;
chunk__38739_38744 = G__38756;
count__38740_38745 = G__38757;
i__38741_38746 = G__38758;
continue;
}
} else
{var node_38759 = cljs.core.first.call(null,seq__38738_38753__$1);node_38759.innerHTML = value_38742;
{
var G__38760 = cljs.core.next.call(null,seq__38738_38753__$1);
var G__38761 = null;
var G__38762 = 0;
var G__38763 = 0;
seq__38738_38743 = G__38760;
chunk__38739_38744 = G__38761;
count__38740_38745 = G__38762;
i__38741_38746 = G__38763;
continue;
}
}
} else
{}
}
break;
}
}catch (e38737){if((e38737 instanceof Error))
{var e_38764 = e38737;domina.replace_children_BANG_.call(null,content,value_38742);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38737;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38771_38775 = cljs.core.seq.call(null,children);var chunk__38772_38776 = null;var count__38773_38777 = 0;var i__38774_38778 = 0;while(true){
if((i__38774_38778 < count__38773_38777))
{var child_38779 = cljs.core._nth.call(null,chunk__38772_38776,i__38774_38778);frag.appendChild(child_38779);
{
var G__38780 = seq__38771_38775;
var G__38781 = chunk__38772_38776;
var G__38782 = count__38773_38777;
var G__38783 = (i__38774_38778 + 1);
seq__38771_38775 = G__38780;
chunk__38772_38776 = G__38781;
count__38773_38777 = G__38782;
i__38774_38778 = G__38783;
continue;
}
} else
{var temp__4092__auto___38784 = cljs.core.seq.call(null,seq__38771_38775);if(temp__4092__auto___38784)
{var seq__38771_38785__$1 = temp__4092__auto___38784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38771_38785__$1))
{var c__4148__auto___38786 = cljs.core.chunk_first.call(null,seq__38771_38785__$1);{
var G__38787 = cljs.core.chunk_rest.call(null,seq__38771_38785__$1);
var G__38788 = c__4148__auto___38786;
var G__38789 = cljs.core.count.call(null,c__4148__auto___38786);
var G__38790 = 0;
seq__38771_38775 = G__38787;
chunk__38772_38776 = G__38788;
count__38773_38777 = G__38789;
i__38774_38778 = G__38790;
continue;
}
} else
{var child_38791 = cljs.core.first.call(null,seq__38771_38785__$1);frag.appendChild(child_38791);
{
var G__38792 = cljs.core.next.call(null,seq__38771_38785__$1);
var G__38793 = null;
var G__38794 = 0;
var G__38795 = 0;
seq__38771_38775 = G__38792;
chunk__38772_38776 = G__38793;
count__38773_38777 = G__38794;
i__38774_38778 = G__38795;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38765_SHARP_,p2__38766_SHARP_){return f.call(null,p1__38765_SHARP_,p2__38766_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__38797 = list_thing;if(G__38797)
{var bit__4050__auto__ = (G__38797.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38797.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38797.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38797);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38797);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__38798 = content;if(G__38798)
{var bit__4050__auto__ = (G__38798.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38798.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38798.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38798);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__38799 = content;if(G__38799)
{var bit__4050__auto__ = (G__38799.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38799.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38799.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38799);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38799);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
