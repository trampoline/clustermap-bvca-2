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
var opt_wrapper_16283 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16285 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16284,table_section_wrapper_16284,opt_wrapper_16283,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16285,table_section_wrapper_16284,cell_wrapper_16285,opt_wrapper_16283,table_section_wrapper_16284,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16284]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16290 = cljs.core.seq.call(null,tbody);var chunk__16291 = null;var count__16292 = 0;var i__16293 = 0;while(true){
if((i__16293 < count__16292))
{var child = cljs.core._nth.call(null,chunk__16291,i__16293);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16294 = seq__16290;
var G__16295 = chunk__16291;
var G__16296 = count__16292;
var G__16297 = (i__16293 + 1);
seq__16290 = G__16294;
chunk__16291 = G__16295;
count__16292 = G__16296;
i__16293 = G__16297;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16290);if(temp__4092__auto__)
{var seq__16290__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16290__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16290__$1);{
var G__16298 = cljs.core.chunk_rest.call(null,seq__16290__$1);
var G__16299 = c__4148__auto__;
var G__16300 = cljs.core.count.call(null,c__4148__auto__);
var G__16301 = 0;
seq__16290 = G__16298;
chunk__16291 = G__16299;
count__16292 = G__16300;
i__16293 = G__16301;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16290__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16302 = cljs.core.next.call(null,seq__16290__$1);
var G__16303 = null;
var G__16304 = 0;
var G__16305 = 0;
seq__16290 = G__16302;
chunk__16291 = G__16303;
count__16292 = G__16304;
i__16293 = G__16305;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16307 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16307,0,null);var start_wrap = cljs.core.nth.call(null,vec__16307,1,null);var end_wrap = cljs.core.nth.call(null,vec__16307,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16308 = wrapper.lastChild;
var G__16309 = (level - 1);
wrapper = G__16308;
level = G__16309;
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
domina.DomContent = (function (){var obj16311 = {};return obj16311;
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
log_debug.cljs$lang$applyTo = (function (arglist__16312){
var mesg = cljs.core.seq(arglist__16312);
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
log.cljs$lang$applyTo = (function (arglist__16313){
var mesg = cljs.core.seq(arglist__16313);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16314){
var contents = cljs.core.seq(arglist__16314);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16315_SHARP_){return p1__16315_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16316_SHARP_,p2__16317_SHARP_){return goog.dom.insertChildAt(p1__16316_SHARP_,p2__16317_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16319_SHARP_,p2__16318_SHARP_){return goog.dom.insertSiblingBefore(p2__16318_SHARP_,p1__16319_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16321_SHARP_,p2__16320_SHARP_){return goog.dom.insertSiblingAfter(p2__16320_SHARP_,p1__16321_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16323_SHARP_,p2__16322_SHARP_){return goog.dom.replaceNode(p2__16322_SHARP_,p1__16323_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16328_16332 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16329_16333 = null;var count__16330_16334 = 0;var i__16331_16335 = 0;while(true){
if((i__16331_16335 < count__16330_16334))
{var n_16336 = cljs.core._nth.call(null,chunk__16329_16333,i__16331_16335);goog.style.setStyle(n_16336,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16337 = seq__16328_16332;
var G__16338 = chunk__16329_16333;
var G__16339 = count__16330_16334;
var G__16340 = (i__16331_16335 + 1);
seq__16328_16332 = G__16337;
chunk__16329_16333 = G__16338;
count__16330_16334 = G__16339;
i__16331_16335 = G__16340;
continue;
}
} else
{var temp__4092__auto___16341 = cljs.core.seq.call(null,seq__16328_16332);if(temp__4092__auto___16341)
{var seq__16328_16342__$1 = temp__4092__auto___16341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16328_16342__$1))
{var c__4148__auto___16343 = cljs.core.chunk_first.call(null,seq__16328_16342__$1);{
var G__16344 = cljs.core.chunk_rest.call(null,seq__16328_16342__$1);
var G__16345 = c__4148__auto___16343;
var G__16346 = cljs.core.count.call(null,c__4148__auto___16343);
var G__16347 = 0;
seq__16328_16332 = G__16344;
chunk__16329_16333 = G__16345;
count__16330_16334 = G__16346;
i__16331_16335 = G__16347;
continue;
}
} else
{var n_16348 = cljs.core.first.call(null,seq__16328_16342__$1);goog.style.setStyle(n_16348,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16349 = cljs.core.next.call(null,seq__16328_16342__$1);
var G__16350 = null;
var G__16351 = 0;
var G__16352 = 0;
seq__16328_16332 = G__16349;
chunk__16329_16333 = G__16350;
count__16330_16334 = G__16351;
i__16331_16335 = G__16352;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16353){
var content = cljs.core.first(arglist__16353);
arglist__16353 = cljs.core.next(arglist__16353);
var name = cljs.core.first(arglist__16353);
var value = cljs.core.rest(arglist__16353);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16358_16362 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16359_16363 = null;var count__16360_16364 = 0;var i__16361_16365 = 0;while(true){
if((i__16361_16365 < count__16360_16364))
{var n_16366 = cljs.core._nth.call(null,chunk__16359_16363,i__16361_16365);n_16366.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16367 = seq__16358_16362;
var G__16368 = chunk__16359_16363;
var G__16369 = count__16360_16364;
var G__16370 = (i__16361_16365 + 1);
seq__16358_16362 = G__16367;
chunk__16359_16363 = G__16368;
count__16360_16364 = G__16369;
i__16361_16365 = G__16370;
continue;
}
} else
{var temp__4092__auto___16371 = cljs.core.seq.call(null,seq__16358_16362);if(temp__4092__auto___16371)
{var seq__16358_16372__$1 = temp__4092__auto___16371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16358_16372__$1))
{var c__4148__auto___16373 = cljs.core.chunk_first.call(null,seq__16358_16372__$1);{
var G__16374 = cljs.core.chunk_rest.call(null,seq__16358_16372__$1);
var G__16375 = c__4148__auto___16373;
var G__16376 = cljs.core.count.call(null,c__4148__auto___16373);
var G__16377 = 0;
seq__16358_16362 = G__16374;
chunk__16359_16363 = G__16375;
count__16360_16364 = G__16376;
i__16361_16365 = G__16377;
continue;
}
} else
{var n_16378 = cljs.core.first.call(null,seq__16358_16372__$1);n_16378.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16379 = cljs.core.next.call(null,seq__16358_16372__$1);
var G__16380 = null;
var G__16381 = 0;
var G__16382 = 0;
seq__16358_16362 = G__16379;
chunk__16359_16363 = G__16380;
count__16360_16364 = G__16381;
i__16361_16365 = G__16382;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16383){
var content = cljs.core.first(arglist__16383);
arglist__16383 = cljs.core.next(arglist__16383);
var name = cljs.core.first(arglist__16383);
var value = cljs.core.rest(arglist__16383);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16388_16392 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16389_16393 = null;var count__16390_16394 = 0;var i__16391_16395 = 0;while(true){
if((i__16391_16395 < count__16390_16394))
{var n_16396 = cljs.core._nth.call(null,chunk__16389_16393,i__16391_16395);n_16396.removeAttribute(cljs.core.name.call(null,name));
{
var G__16397 = seq__16388_16392;
var G__16398 = chunk__16389_16393;
var G__16399 = count__16390_16394;
var G__16400 = (i__16391_16395 + 1);
seq__16388_16392 = G__16397;
chunk__16389_16393 = G__16398;
count__16390_16394 = G__16399;
i__16391_16395 = G__16400;
continue;
}
} else
{var temp__4092__auto___16401 = cljs.core.seq.call(null,seq__16388_16392);if(temp__4092__auto___16401)
{var seq__16388_16402__$1 = temp__4092__auto___16401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16388_16402__$1))
{var c__4148__auto___16403 = cljs.core.chunk_first.call(null,seq__16388_16402__$1);{
var G__16404 = cljs.core.chunk_rest.call(null,seq__16388_16402__$1);
var G__16405 = c__4148__auto___16403;
var G__16406 = cljs.core.count.call(null,c__4148__auto___16403);
var G__16407 = 0;
seq__16388_16392 = G__16404;
chunk__16389_16393 = G__16405;
count__16390_16394 = G__16406;
i__16391_16395 = G__16407;
continue;
}
} else
{var n_16408 = cljs.core.first.call(null,seq__16388_16402__$1);n_16408.removeAttribute(cljs.core.name.call(null,name));
{
var G__16409 = cljs.core.next.call(null,seq__16388_16402__$1);
var G__16410 = null;
var G__16411 = 0;
var G__16412 = 0;
seq__16388_16392 = G__16409;
chunk__16389_16393 = G__16410;
count__16390_16394 = G__16411;
i__16391_16395 = G__16412;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16414 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16414,0,null);var v = cljs.core.nth.call(null,vec__16414,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16415_SHARP_){var attr = attrs__$1.item(p1__16415_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16422_16428 = cljs.core.seq.call(null,styles);var chunk__16423_16429 = null;var count__16424_16430 = 0;var i__16425_16431 = 0;while(true){
if((i__16425_16431 < count__16424_16430))
{var vec__16426_16432 = cljs.core._nth.call(null,chunk__16423_16429,i__16425_16431);var name_16433 = cljs.core.nth.call(null,vec__16426_16432,0,null);var value_16434 = cljs.core.nth.call(null,vec__16426_16432,1,null);domina.set_style_BANG_.call(null,content,name_16433,value_16434);
{
var G__16435 = seq__16422_16428;
var G__16436 = chunk__16423_16429;
var G__16437 = count__16424_16430;
var G__16438 = (i__16425_16431 + 1);
seq__16422_16428 = G__16435;
chunk__16423_16429 = G__16436;
count__16424_16430 = G__16437;
i__16425_16431 = G__16438;
continue;
}
} else
{var temp__4092__auto___16439 = cljs.core.seq.call(null,seq__16422_16428);if(temp__4092__auto___16439)
{var seq__16422_16440__$1 = temp__4092__auto___16439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16422_16440__$1))
{var c__4148__auto___16441 = cljs.core.chunk_first.call(null,seq__16422_16440__$1);{
var G__16442 = cljs.core.chunk_rest.call(null,seq__16422_16440__$1);
var G__16443 = c__4148__auto___16441;
var G__16444 = cljs.core.count.call(null,c__4148__auto___16441);
var G__16445 = 0;
seq__16422_16428 = G__16442;
chunk__16423_16429 = G__16443;
count__16424_16430 = G__16444;
i__16425_16431 = G__16445;
continue;
}
} else
{var vec__16427_16446 = cljs.core.first.call(null,seq__16422_16440__$1);var name_16447 = cljs.core.nth.call(null,vec__16427_16446,0,null);var value_16448 = cljs.core.nth.call(null,vec__16427_16446,1,null);domina.set_style_BANG_.call(null,content,name_16447,value_16448);
{
var G__16449 = cljs.core.next.call(null,seq__16422_16440__$1);
var G__16450 = null;
var G__16451 = 0;
var G__16452 = 0;
seq__16422_16428 = G__16449;
chunk__16423_16429 = G__16450;
count__16424_16430 = G__16451;
i__16425_16431 = G__16452;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16459_16465 = cljs.core.seq.call(null,attrs);var chunk__16460_16466 = null;var count__16461_16467 = 0;var i__16462_16468 = 0;while(true){
if((i__16462_16468 < count__16461_16467))
{var vec__16463_16469 = cljs.core._nth.call(null,chunk__16460_16466,i__16462_16468);var name_16470 = cljs.core.nth.call(null,vec__16463_16469,0,null);var value_16471 = cljs.core.nth.call(null,vec__16463_16469,1,null);domina.set_attr_BANG_.call(null,content,name_16470,value_16471);
{
var G__16472 = seq__16459_16465;
var G__16473 = chunk__16460_16466;
var G__16474 = count__16461_16467;
var G__16475 = (i__16462_16468 + 1);
seq__16459_16465 = G__16472;
chunk__16460_16466 = G__16473;
count__16461_16467 = G__16474;
i__16462_16468 = G__16475;
continue;
}
} else
{var temp__4092__auto___16476 = cljs.core.seq.call(null,seq__16459_16465);if(temp__4092__auto___16476)
{var seq__16459_16477__$1 = temp__4092__auto___16476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16459_16477__$1))
{var c__4148__auto___16478 = cljs.core.chunk_first.call(null,seq__16459_16477__$1);{
var G__16479 = cljs.core.chunk_rest.call(null,seq__16459_16477__$1);
var G__16480 = c__4148__auto___16478;
var G__16481 = cljs.core.count.call(null,c__4148__auto___16478);
var G__16482 = 0;
seq__16459_16465 = G__16479;
chunk__16460_16466 = G__16480;
count__16461_16467 = G__16481;
i__16462_16468 = G__16482;
continue;
}
} else
{var vec__16464_16483 = cljs.core.first.call(null,seq__16459_16477__$1);var name_16484 = cljs.core.nth.call(null,vec__16464_16483,0,null);var value_16485 = cljs.core.nth.call(null,vec__16464_16483,1,null);domina.set_attr_BANG_.call(null,content,name_16484,value_16485);
{
var G__16486 = cljs.core.next.call(null,seq__16459_16477__$1);
var G__16487 = null;
var G__16488 = 0;
var G__16489 = 0;
seq__16459_16465 = G__16486;
chunk__16460_16466 = G__16487;
count__16461_16467 = G__16488;
i__16462_16468 = G__16489;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16494_16498 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16495_16499 = null;var count__16496_16500 = 0;var i__16497_16501 = 0;while(true){
if((i__16497_16501 < count__16496_16500))
{var node_16502 = cljs.core._nth.call(null,chunk__16495_16499,i__16497_16501);goog.dom.classes.add(node_16502,class$);
{
var G__16503 = seq__16494_16498;
var G__16504 = chunk__16495_16499;
var G__16505 = count__16496_16500;
var G__16506 = (i__16497_16501 + 1);
seq__16494_16498 = G__16503;
chunk__16495_16499 = G__16504;
count__16496_16500 = G__16505;
i__16497_16501 = G__16506;
continue;
}
} else
{var temp__4092__auto___16507 = cljs.core.seq.call(null,seq__16494_16498);if(temp__4092__auto___16507)
{var seq__16494_16508__$1 = temp__4092__auto___16507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16494_16508__$1))
{var c__4148__auto___16509 = cljs.core.chunk_first.call(null,seq__16494_16508__$1);{
var G__16510 = cljs.core.chunk_rest.call(null,seq__16494_16508__$1);
var G__16511 = c__4148__auto___16509;
var G__16512 = cljs.core.count.call(null,c__4148__auto___16509);
var G__16513 = 0;
seq__16494_16498 = G__16510;
chunk__16495_16499 = G__16511;
count__16496_16500 = G__16512;
i__16497_16501 = G__16513;
continue;
}
} else
{var node_16514 = cljs.core.first.call(null,seq__16494_16508__$1);goog.dom.classes.add(node_16514,class$);
{
var G__16515 = cljs.core.next.call(null,seq__16494_16508__$1);
var G__16516 = null;
var G__16517 = 0;
var G__16518 = 0;
seq__16494_16498 = G__16515;
chunk__16495_16499 = G__16516;
count__16496_16500 = G__16517;
i__16497_16501 = G__16518;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16523_16527 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16524_16528 = null;var count__16525_16529 = 0;var i__16526_16530 = 0;while(true){
if((i__16526_16530 < count__16525_16529))
{var node_16531 = cljs.core._nth.call(null,chunk__16524_16528,i__16526_16530);goog.dom.classes.remove(node_16531,class$);
{
var G__16532 = seq__16523_16527;
var G__16533 = chunk__16524_16528;
var G__16534 = count__16525_16529;
var G__16535 = (i__16526_16530 + 1);
seq__16523_16527 = G__16532;
chunk__16524_16528 = G__16533;
count__16525_16529 = G__16534;
i__16526_16530 = G__16535;
continue;
}
} else
{var temp__4092__auto___16536 = cljs.core.seq.call(null,seq__16523_16527);if(temp__4092__auto___16536)
{var seq__16523_16537__$1 = temp__4092__auto___16536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16523_16537__$1))
{var c__4148__auto___16538 = cljs.core.chunk_first.call(null,seq__16523_16537__$1);{
var G__16539 = cljs.core.chunk_rest.call(null,seq__16523_16537__$1);
var G__16540 = c__4148__auto___16538;
var G__16541 = cljs.core.count.call(null,c__4148__auto___16538);
var G__16542 = 0;
seq__16523_16527 = G__16539;
chunk__16524_16528 = G__16540;
count__16525_16529 = G__16541;
i__16526_16530 = G__16542;
continue;
}
} else
{var node_16543 = cljs.core.first.call(null,seq__16523_16537__$1);goog.dom.classes.remove(node_16543,class$);
{
var G__16544 = cljs.core.next.call(null,seq__16523_16537__$1);
var G__16545 = null;
var G__16546 = 0;
var G__16547 = 0;
seq__16523_16527 = G__16544;
chunk__16524_16528 = G__16545;
count__16525_16529 = G__16546;
i__16526_16530 = G__16547;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16552_16556 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16553_16557 = null;var count__16554_16558 = 0;var i__16555_16559 = 0;while(true){
if((i__16555_16559 < count__16554_16558))
{var node_16560 = cljs.core._nth.call(null,chunk__16553_16557,i__16555_16559);goog.dom.classes.toggle(node_16560,class$);
{
var G__16561 = seq__16552_16556;
var G__16562 = chunk__16553_16557;
var G__16563 = count__16554_16558;
var G__16564 = (i__16555_16559 + 1);
seq__16552_16556 = G__16561;
chunk__16553_16557 = G__16562;
count__16554_16558 = G__16563;
i__16555_16559 = G__16564;
continue;
}
} else
{var temp__4092__auto___16565 = cljs.core.seq.call(null,seq__16552_16556);if(temp__4092__auto___16565)
{var seq__16552_16566__$1 = temp__4092__auto___16565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16552_16566__$1))
{var c__4148__auto___16567 = cljs.core.chunk_first.call(null,seq__16552_16566__$1);{
var G__16568 = cljs.core.chunk_rest.call(null,seq__16552_16566__$1);
var G__16569 = c__4148__auto___16567;
var G__16570 = cljs.core.count.call(null,c__4148__auto___16567);
var G__16571 = 0;
seq__16552_16556 = G__16568;
chunk__16553_16557 = G__16569;
count__16554_16558 = G__16570;
i__16555_16559 = G__16571;
continue;
}
} else
{var node_16572 = cljs.core.first.call(null,seq__16552_16566__$1);goog.dom.classes.toggle(node_16572,class$);
{
var G__16573 = cljs.core.next.call(null,seq__16552_16566__$1);
var G__16574 = null;
var G__16575 = 0;
var G__16576 = 0;
seq__16552_16556 = G__16573;
chunk__16553_16557 = G__16574;
count__16554_16558 = G__16575;
i__16555_16559 = G__16576;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16585__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16581_16586 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16582_16587 = null;var count__16583_16588 = 0;var i__16584_16589 = 0;while(true){
if((i__16584_16589 < count__16583_16588))
{var node_16590 = cljs.core._nth.call(null,chunk__16582_16587,i__16584_16589);goog.dom.classes.set(node_16590,classes_16585__$1);
{
var G__16591 = seq__16581_16586;
var G__16592 = chunk__16582_16587;
var G__16593 = count__16583_16588;
var G__16594 = (i__16584_16589 + 1);
seq__16581_16586 = G__16591;
chunk__16582_16587 = G__16592;
count__16583_16588 = G__16593;
i__16584_16589 = G__16594;
continue;
}
} else
{var temp__4092__auto___16595 = cljs.core.seq.call(null,seq__16581_16586);if(temp__4092__auto___16595)
{var seq__16581_16596__$1 = temp__4092__auto___16595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16581_16596__$1))
{var c__4148__auto___16597 = cljs.core.chunk_first.call(null,seq__16581_16596__$1);{
var G__16598 = cljs.core.chunk_rest.call(null,seq__16581_16596__$1);
var G__16599 = c__4148__auto___16597;
var G__16600 = cljs.core.count.call(null,c__4148__auto___16597);
var G__16601 = 0;
seq__16581_16586 = G__16598;
chunk__16582_16587 = G__16599;
count__16583_16588 = G__16600;
i__16584_16589 = G__16601;
continue;
}
} else
{var node_16602 = cljs.core.first.call(null,seq__16581_16596__$1);goog.dom.classes.set(node_16602,classes_16585__$1);
{
var G__16603 = cljs.core.next.call(null,seq__16581_16596__$1);
var G__16604 = null;
var G__16605 = 0;
var G__16606 = 0;
seq__16581_16586 = G__16603;
chunk__16582_16587 = G__16604;
count__16583_16588 = G__16605;
i__16584_16589 = G__16606;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16611_16615 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16612_16616 = null;var count__16613_16617 = 0;var i__16614_16618 = 0;while(true){
if((i__16614_16618 < count__16613_16617))
{var node_16619 = cljs.core._nth.call(null,chunk__16612_16616,i__16614_16618);goog.dom.setTextContent(node_16619,value);
{
var G__16620 = seq__16611_16615;
var G__16621 = chunk__16612_16616;
var G__16622 = count__16613_16617;
var G__16623 = (i__16614_16618 + 1);
seq__16611_16615 = G__16620;
chunk__16612_16616 = G__16621;
count__16613_16617 = G__16622;
i__16614_16618 = G__16623;
continue;
}
} else
{var temp__4092__auto___16624 = cljs.core.seq.call(null,seq__16611_16615);if(temp__4092__auto___16624)
{var seq__16611_16625__$1 = temp__4092__auto___16624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16611_16625__$1))
{var c__4148__auto___16626 = cljs.core.chunk_first.call(null,seq__16611_16625__$1);{
var G__16627 = cljs.core.chunk_rest.call(null,seq__16611_16625__$1);
var G__16628 = c__4148__auto___16626;
var G__16629 = cljs.core.count.call(null,c__4148__auto___16626);
var G__16630 = 0;
seq__16611_16615 = G__16627;
chunk__16612_16616 = G__16628;
count__16613_16617 = G__16629;
i__16614_16618 = G__16630;
continue;
}
} else
{var node_16631 = cljs.core.first.call(null,seq__16611_16625__$1);goog.dom.setTextContent(node_16631,value);
{
var G__16632 = cljs.core.next.call(null,seq__16611_16625__$1);
var G__16633 = null;
var G__16634 = 0;
var G__16635 = 0;
seq__16611_16615 = G__16632;
chunk__16612_16616 = G__16633;
count__16613_16617 = G__16634;
i__16614_16618 = G__16635;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16640_16644 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16641_16645 = null;var count__16642_16646 = 0;var i__16643_16647 = 0;while(true){
if((i__16643_16647 < count__16642_16646))
{var node_16648 = cljs.core._nth.call(null,chunk__16641_16645,i__16643_16647);goog.dom.forms.setValue(node_16648,value);
{
var G__16649 = seq__16640_16644;
var G__16650 = chunk__16641_16645;
var G__16651 = count__16642_16646;
var G__16652 = (i__16643_16647 + 1);
seq__16640_16644 = G__16649;
chunk__16641_16645 = G__16650;
count__16642_16646 = G__16651;
i__16643_16647 = G__16652;
continue;
}
} else
{var temp__4092__auto___16653 = cljs.core.seq.call(null,seq__16640_16644);if(temp__4092__auto___16653)
{var seq__16640_16654__$1 = temp__4092__auto___16653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16640_16654__$1))
{var c__4148__auto___16655 = cljs.core.chunk_first.call(null,seq__16640_16654__$1);{
var G__16656 = cljs.core.chunk_rest.call(null,seq__16640_16654__$1);
var G__16657 = c__4148__auto___16655;
var G__16658 = cljs.core.count.call(null,c__4148__auto___16655);
var G__16659 = 0;
seq__16640_16644 = G__16656;
chunk__16641_16645 = G__16657;
count__16642_16646 = G__16658;
i__16643_16647 = G__16659;
continue;
}
} else
{var node_16660 = cljs.core.first.call(null,seq__16640_16654__$1);goog.dom.forms.setValue(node_16660,value);
{
var G__16661 = cljs.core.next.call(null,seq__16640_16654__$1);
var G__16662 = null;
var G__16663 = 0;
var G__16664 = 0;
seq__16640_16644 = G__16661;
chunk__16641_16645 = G__16662;
count__16642_16646 = G__16663;
i__16643_16647 = G__16664;
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
{var value_16675 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16671_16676 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16672_16677 = null;var count__16673_16678 = 0;var i__16674_16679 = 0;while(true){
if((i__16674_16679 < count__16673_16678))
{var node_16680 = cljs.core._nth.call(null,chunk__16672_16677,i__16674_16679);node_16680.innerHTML = value_16675;
{
var G__16681 = seq__16671_16676;
var G__16682 = chunk__16672_16677;
var G__16683 = count__16673_16678;
var G__16684 = (i__16674_16679 + 1);
seq__16671_16676 = G__16681;
chunk__16672_16677 = G__16682;
count__16673_16678 = G__16683;
i__16674_16679 = G__16684;
continue;
}
} else
{var temp__4092__auto___16685 = cljs.core.seq.call(null,seq__16671_16676);if(temp__4092__auto___16685)
{var seq__16671_16686__$1 = temp__4092__auto___16685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16671_16686__$1))
{var c__4148__auto___16687 = cljs.core.chunk_first.call(null,seq__16671_16686__$1);{
var G__16688 = cljs.core.chunk_rest.call(null,seq__16671_16686__$1);
var G__16689 = c__4148__auto___16687;
var G__16690 = cljs.core.count.call(null,c__4148__auto___16687);
var G__16691 = 0;
seq__16671_16676 = G__16688;
chunk__16672_16677 = G__16689;
count__16673_16678 = G__16690;
i__16674_16679 = G__16691;
continue;
}
} else
{var node_16692 = cljs.core.first.call(null,seq__16671_16686__$1);node_16692.innerHTML = value_16675;
{
var G__16693 = cljs.core.next.call(null,seq__16671_16686__$1);
var G__16694 = null;
var G__16695 = 0;
var G__16696 = 0;
seq__16671_16676 = G__16693;
chunk__16672_16677 = G__16694;
count__16673_16678 = G__16695;
i__16674_16679 = G__16696;
continue;
}
}
} else
{}
}
break;
}
}catch (e16670){if((e16670 instanceof Error))
{var e_16697 = e16670;domina.replace_children_BANG_.call(null,content,value_16675);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16670;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16704_16708 = cljs.core.seq.call(null,children);var chunk__16705_16709 = null;var count__16706_16710 = 0;var i__16707_16711 = 0;while(true){
if((i__16707_16711 < count__16706_16710))
{var child_16712 = cljs.core._nth.call(null,chunk__16705_16709,i__16707_16711);frag.appendChild(child_16712);
{
var G__16713 = seq__16704_16708;
var G__16714 = chunk__16705_16709;
var G__16715 = count__16706_16710;
var G__16716 = (i__16707_16711 + 1);
seq__16704_16708 = G__16713;
chunk__16705_16709 = G__16714;
count__16706_16710 = G__16715;
i__16707_16711 = G__16716;
continue;
}
} else
{var temp__4092__auto___16717 = cljs.core.seq.call(null,seq__16704_16708);if(temp__4092__auto___16717)
{var seq__16704_16718__$1 = temp__4092__auto___16717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16704_16718__$1))
{var c__4148__auto___16719 = cljs.core.chunk_first.call(null,seq__16704_16718__$1);{
var G__16720 = cljs.core.chunk_rest.call(null,seq__16704_16718__$1);
var G__16721 = c__4148__auto___16719;
var G__16722 = cljs.core.count.call(null,c__4148__auto___16719);
var G__16723 = 0;
seq__16704_16708 = G__16720;
chunk__16705_16709 = G__16721;
count__16706_16710 = G__16722;
i__16707_16711 = G__16723;
continue;
}
} else
{var child_16724 = cljs.core.first.call(null,seq__16704_16718__$1);frag.appendChild(child_16724);
{
var G__16725 = cljs.core.next.call(null,seq__16704_16718__$1);
var G__16726 = null;
var G__16727 = 0;
var G__16728 = 0;
seq__16704_16708 = G__16725;
chunk__16705_16709 = G__16726;
count__16706_16710 = G__16727;
i__16707_16711 = G__16728;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16698_SHARP_,p2__16699_SHARP_){return f.call(null,p1__16698_SHARP_,p2__16699_SHARP_);
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
{if((function (){var G__16730 = list_thing;if(G__16730)
{var bit__4050__auto__ = (G__16730.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16730.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16730.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16730);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16730);
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
{if((function (){var G__16731 = content;if(G__16731)
{var bit__4050__auto__ = (G__16731.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16731.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16731.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16731);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16731);
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
{if((function (){var G__16732 = content;if(G__16732)
{var bit__4050__auto__ = (G__16732.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16732.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16732.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16732);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16732);
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

//# sourceMappingURL=domina.js.map