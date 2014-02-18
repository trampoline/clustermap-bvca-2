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
var opt_wrapper_38215 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38216 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_38217 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_38216,table_section_wrapper_38216,opt_wrapper_38215,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_38217,table_section_wrapper_38216,cell_wrapper_38217,opt_wrapper_38215,table_section_wrapper_38216,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_38216]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__38222 = cljs.core.seq.call(null,tbody);var chunk__38223 = null;var count__38224 = 0;var i__38225 = 0;while(true){
if((i__38225 < count__38224))
{var child = cljs.core._nth.call(null,chunk__38223,i__38225);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38226 = seq__38222;
var G__38227 = chunk__38223;
var G__38228 = count__38224;
var G__38229 = (i__38225 + 1);
seq__38222 = G__38226;
chunk__38223 = G__38227;
count__38224 = G__38228;
i__38225 = G__38229;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38222);if(temp__4092__auto__)
{var seq__38222__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38222__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38222__$1);{
var G__38230 = cljs.core.chunk_rest.call(null,seq__38222__$1);
var G__38231 = c__4148__auto__;
var G__38232 = cljs.core.count.call(null,c__4148__auto__);
var G__38233 = 0;
seq__38222 = G__38230;
chunk__38223 = G__38231;
count__38224 = G__38232;
i__38225 = G__38233;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38222__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38234 = cljs.core.next.call(null,seq__38222__$1);
var G__38235 = null;
var G__38236 = 0;
var G__38237 = 0;
seq__38222 = G__38234;
chunk__38223 = G__38235;
count__38224 = G__38236;
i__38225 = G__38237;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__38239 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38239,0,null);var start_wrap = cljs.core.nth.call(null,vec__38239,1,null);var end_wrap = cljs.core.nth.call(null,vec__38239,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__38240 = wrapper.lastChild;
var G__38241 = (level - 1);
wrapper = G__38240;
level = G__38241;
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
domina.DomContent = (function (){var obj38243 = {};return obj38243;
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
log_debug.cljs$lang$applyTo = (function (arglist__38244){
var mesg = cljs.core.seq(arglist__38244);
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
log.cljs$lang$applyTo = (function (arglist__38245){
var mesg = cljs.core.seq(arglist__38245);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__38246){
var contents = cljs.core.seq(arglist__38246);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38247_SHARP_){return p1__38247_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38248_SHARP_,p2__38249_SHARP_){return goog.dom.insertChildAt(p1__38248_SHARP_,p2__38249_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38251_SHARP_,p2__38250_SHARP_){return goog.dom.insertSiblingBefore(p2__38250_SHARP_,p1__38251_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38253_SHARP_,p2__38252_SHARP_){return goog.dom.insertSiblingAfter(p2__38252_SHARP_,p1__38253_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38255_SHARP_,p2__38254_SHARP_){return goog.dom.replaceNode(p2__38254_SHARP_,p1__38255_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__38260_38264 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38261_38265 = null;var count__38262_38266 = 0;var i__38263_38267 = 0;while(true){
if((i__38263_38267 < count__38262_38266))
{var n_38268 = cljs.core._nth.call(null,chunk__38261_38265,i__38263_38267);goog.style.setStyle(n_38268,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38269 = seq__38260_38264;
var G__38270 = chunk__38261_38265;
var G__38271 = count__38262_38266;
var G__38272 = (i__38263_38267 + 1);
seq__38260_38264 = G__38269;
chunk__38261_38265 = G__38270;
count__38262_38266 = G__38271;
i__38263_38267 = G__38272;
continue;
}
} else
{var temp__4092__auto___38273 = cljs.core.seq.call(null,seq__38260_38264);if(temp__4092__auto___38273)
{var seq__38260_38274__$1 = temp__4092__auto___38273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38260_38274__$1))
{var c__4148__auto___38275 = cljs.core.chunk_first.call(null,seq__38260_38274__$1);{
var G__38276 = cljs.core.chunk_rest.call(null,seq__38260_38274__$1);
var G__38277 = c__4148__auto___38275;
var G__38278 = cljs.core.count.call(null,c__4148__auto___38275);
var G__38279 = 0;
seq__38260_38264 = G__38276;
chunk__38261_38265 = G__38277;
count__38262_38266 = G__38278;
i__38263_38267 = G__38279;
continue;
}
} else
{var n_38280 = cljs.core.first.call(null,seq__38260_38274__$1);goog.style.setStyle(n_38280,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38281 = cljs.core.next.call(null,seq__38260_38274__$1);
var G__38282 = null;
var G__38283 = 0;
var G__38284 = 0;
seq__38260_38264 = G__38281;
chunk__38261_38265 = G__38282;
count__38262_38266 = G__38283;
i__38263_38267 = G__38284;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38285){
var content = cljs.core.first(arglist__38285);
arglist__38285 = cljs.core.next(arglist__38285);
var name = cljs.core.first(arglist__38285);
var value = cljs.core.rest(arglist__38285);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38290_38294 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38291_38295 = null;var count__38292_38296 = 0;var i__38293_38297 = 0;while(true){
if((i__38293_38297 < count__38292_38296))
{var n_38298 = cljs.core._nth.call(null,chunk__38291_38295,i__38293_38297);n_38298.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38299 = seq__38290_38294;
var G__38300 = chunk__38291_38295;
var G__38301 = count__38292_38296;
var G__38302 = (i__38293_38297 + 1);
seq__38290_38294 = G__38299;
chunk__38291_38295 = G__38300;
count__38292_38296 = G__38301;
i__38293_38297 = G__38302;
continue;
}
} else
{var temp__4092__auto___38303 = cljs.core.seq.call(null,seq__38290_38294);if(temp__4092__auto___38303)
{var seq__38290_38304__$1 = temp__4092__auto___38303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38290_38304__$1))
{var c__4148__auto___38305 = cljs.core.chunk_first.call(null,seq__38290_38304__$1);{
var G__38306 = cljs.core.chunk_rest.call(null,seq__38290_38304__$1);
var G__38307 = c__4148__auto___38305;
var G__38308 = cljs.core.count.call(null,c__4148__auto___38305);
var G__38309 = 0;
seq__38290_38294 = G__38306;
chunk__38291_38295 = G__38307;
count__38292_38296 = G__38308;
i__38293_38297 = G__38309;
continue;
}
} else
{var n_38310 = cljs.core.first.call(null,seq__38290_38304__$1);n_38310.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38311 = cljs.core.next.call(null,seq__38290_38304__$1);
var G__38312 = null;
var G__38313 = 0;
var G__38314 = 0;
seq__38290_38294 = G__38311;
chunk__38291_38295 = G__38312;
count__38292_38296 = G__38313;
i__38293_38297 = G__38314;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38315){
var content = cljs.core.first(arglist__38315);
arglist__38315 = cljs.core.next(arglist__38315);
var name = cljs.core.first(arglist__38315);
var value = cljs.core.rest(arglist__38315);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38320_38324 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38321_38325 = null;var count__38322_38326 = 0;var i__38323_38327 = 0;while(true){
if((i__38323_38327 < count__38322_38326))
{var n_38328 = cljs.core._nth.call(null,chunk__38321_38325,i__38323_38327);n_38328.removeAttribute(cljs.core.name.call(null,name));
{
var G__38329 = seq__38320_38324;
var G__38330 = chunk__38321_38325;
var G__38331 = count__38322_38326;
var G__38332 = (i__38323_38327 + 1);
seq__38320_38324 = G__38329;
chunk__38321_38325 = G__38330;
count__38322_38326 = G__38331;
i__38323_38327 = G__38332;
continue;
}
} else
{var temp__4092__auto___38333 = cljs.core.seq.call(null,seq__38320_38324);if(temp__4092__auto___38333)
{var seq__38320_38334__$1 = temp__4092__auto___38333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38320_38334__$1))
{var c__4148__auto___38335 = cljs.core.chunk_first.call(null,seq__38320_38334__$1);{
var G__38336 = cljs.core.chunk_rest.call(null,seq__38320_38334__$1);
var G__38337 = c__4148__auto___38335;
var G__38338 = cljs.core.count.call(null,c__4148__auto___38335);
var G__38339 = 0;
seq__38320_38324 = G__38336;
chunk__38321_38325 = G__38337;
count__38322_38326 = G__38338;
i__38323_38327 = G__38339;
continue;
}
} else
{var n_38340 = cljs.core.first.call(null,seq__38320_38334__$1);n_38340.removeAttribute(cljs.core.name.call(null,name));
{
var G__38341 = cljs.core.next.call(null,seq__38320_38334__$1);
var G__38342 = null;
var G__38343 = 0;
var G__38344 = 0;
seq__38320_38324 = G__38341;
chunk__38321_38325 = G__38342;
count__38322_38326 = G__38343;
i__38323_38327 = G__38344;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38346 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38346,0,null);var v = cljs.core.nth.call(null,vec__38346,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38347_SHARP_){var attr = attrs__$1.item(p1__38347_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38354_38360 = cljs.core.seq.call(null,styles);var chunk__38355_38361 = null;var count__38356_38362 = 0;var i__38357_38363 = 0;while(true){
if((i__38357_38363 < count__38356_38362))
{var vec__38358_38364 = cljs.core._nth.call(null,chunk__38355_38361,i__38357_38363);var name_38365 = cljs.core.nth.call(null,vec__38358_38364,0,null);var value_38366 = cljs.core.nth.call(null,vec__38358_38364,1,null);domina.set_style_BANG_.call(null,content,name_38365,value_38366);
{
var G__38367 = seq__38354_38360;
var G__38368 = chunk__38355_38361;
var G__38369 = count__38356_38362;
var G__38370 = (i__38357_38363 + 1);
seq__38354_38360 = G__38367;
chunk__38355_38361 = G__38368;
count__38356_38362 = G__38369;
i__38357_38363 = G__38370;
continue;
}
} else
{var temp__4092__auto___38371 = cljs.core.seq.call(null,seq__38354_38360);if(temp__4092__auto___38371)
{var seq__38354_38372__$1 = temp__4092__auto___38371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38354_38372__$1))
{var c__4148__auto___38373 = cljs.core.chunk_first.call(null,seq__38354_38372__$1);{
var G__38374 = cljs.core.chunk_rest.call(null,seq__38354_38372__$1);
var G__38375 = c__4148__auto___38373;
var G__38376 = cljs.core.count.call(null,c__4148__auto___38373);
var G__38377 = 0;
seq__38354_38360 = G__38374;
chunk__38355_38361 = G__38375;
count__38356_38362 = G__38376;
i__38357_38363 = G__38377;
continue;
}
} else
{var vec__38359_38378 = cljs.core.first.call(null,seq__38354_38372__$1);var name_38379 = cljs.core.nth.call(null,vec__38359_38378,0,null);var value_38380 = cljs.core.nth.call(null,vec__38359_38378,1,null);domina.set_style_BANG_.call(null,content,name_38379,value_38380);
{
var G__38381 = cljs.core.next.call(null,seq__38354_38372__$1);
var G__38382 = null;
var G__38383 = 0;
var G__38384 = 0;
seq__38354_38360 = G__38381;
chunk__38355_38361 = G__38382;
count__38356_38362 = G__38383;
i__38357_38363 = G__38384;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38391_38397 = cljs.core.seq.call(null,attrs);var chunk__38392_38398 = null;var count__38393_38399 = 0;var i__38394_38400 = 0;while(true){
if((i__38394_38400 < count__38393_38399))
{var vec__38395_38401 = cljs.core._nth.call(null,chunk__38392_38398,i__38394_38400);var name_38402 = cljs.core.nth.call(null,vec__38395_38401,0,null);var value_38403 = cljs.core.nth.call(null,vec__38395_38401,1,null);domina.set_attr_BANG_.call(null,content,name_38402,value_38403);
{
var G__38404 = seq__38391_38397;
var G__38405 = chunk__38392_38398;
var G__38406 = count__38393_38399;
var G__38407 = (i__38394_38400 + 1);
seq__38391_38397 = G__38404;
chunk__38392_38398 = G__38405;
count__38393_38399 = G__38406;
i__38394_38400 = G__38407;
continue;
}
} else
{var temp__4092__auto___38408 = cljs.core.seq.call(null,seq__38391_38397);if(temp__4092__auto___38408)
{var seq__38391_38409__$1 = temp__4092__auto___38408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38391_38409__$1))
{var c__4148__auto___38410 = cljs.core.chunk_first.call(null,seq__38391_38409__$1);{
var G__38411 = cljs.core.chunk_rest.call(null,seq__38391_38409__$1);
var G__38412 = c__4148__auto___38410;
var G__38413 = cljs.core.count.call(null,c__4148__auto___38410);
var G__38414 = 0;
seq__38391_38397 = G__38411;
chunk__38392_38398 = G__38412;
count__38393_38399 = G__38413;
i__38394_38400 = G__38414;
continue;
}
} else
{var vec__38396_38415 = cljs.core.first.call(null,seq__38391_38409__$1);var name_38416 = cljs.core.nth.call(null,vec__38396_38415,0,null);var value_38417 = cljs.core.nth.call(null,vec__38396_38415,1,null);domina.set_attr_BANG_.call(null,content,name_38416,value_38417);
{
var G__38418 = cljs.core.next.call(null,seq__38391_38409__$1);
var G__38419 = null;
var G__38420 = 0;
var G__38421 = 0;
seq__38391_38397 = G__38418;
chunk__38392_38398 = G__38419;
count__38393_38399 = G__38420;
i__38394_38400 = G__38421;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38426_38430 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38427_38431 = null;var count__38428_38432 = 0;var i__38429_38433 = 0;while(true){
if((i__38429_38433 < count__38428_38432))
{var node_38434 = cljs.core._nth.call(null,chunk__38427_38431,i__38429_38433);goog.dom.classes.add(node_38434,class$);
{
var G__38435 = seq__38426_38430;
var G__38436 = chunk__38427_38431;
var G__38437 = count__38428_38432;
var G__38438 = (i__38429_38433 + 1);
seq__38426_38430 = G__38435;
chunk__38427_38431 = G__38436;
count__38428_38432 = G__38437;
i__38429_38433 = G__38438;
continue;
}
} else
{var temp__4092__auto___38439 = cljs.core.seq.call(null,seq__38426_38430);if(temp__4092__auto___38439)
{var seq__38426_38440__$1 = temp__4092__auto___38439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38426_38440__$1))
{var c__4148__auto___38441 = cljs.core.chunk_first.call(null,seq__38426_38440__$1);{
var G__38442 = cljs.core.chunk_rest.call(null,seq__38426_38440__$1);
var G__38443 = c__4148__auto___38441;
var G__38444 = cljs.core.count.call(null,c__4148__auto___38441);
var G__38445 = 0;
seq__38426_38430 = G__38442;
chunk__38427_38431 = G__38443;
count__38428_38432 = G__38444;
i__38429_38433 = G__38445;
continue;
}
} else
{var node_38446 = cljs.core.first.call(null,seq__38426_38440__$1);goog.dom.classes.add(node_38446,class$);
{
var G__38447 = cljs.core.next.call(null,seq__38426_38440__$1);
var G__38448 = null;
var G__38449 = 0;
var G__38450 = 0;
seq__38426_38430 = G__38447;
chunk__38427_38431 = G__38448;
count__38428_38432 = G__38449;
i__38429_38433 = G__38450;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38455_38459 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38456_38460 = null;var count__38457_38461 = 0;var i__38458_38462 = 0;while(true){
if((i__38458_38462 < count__38457_38461))
{var node_38463 = cljs.core._nth.call(null,chunk__38456_38460,i__38458_38462);goog.dom.classes.remove(node_38463,class$);
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
{var node_38475 = cljs.core.first.call(null,seq__38455_38469__$1);goog.dom.classes.remove(node_38475,class$);
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
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38484_38488 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38485_38489 = null;var count__38486_38490 = 0;var i__38487_38491 = 0;while(true){
if((i__38487_38491 < count__38486_38490))
{var node_38492 = cljs.core._nth.call(null,chunk__38485_38489,i__38487_38491);goog.dom.classes.toggle(node_38492,class$);
{
var G__38493 = seq__38484_38488;
var G__38494 = chunk__38485_38489;
var G__38495 = count__38486_38490;
var G__38496 = (i__38487_38491 + 1);
seq__38484_38488 = G__38493;
chunk__38485_38489 = G__38494;
count__38486_38490 = G__38495;
i__38487_38491 = G__38496;
continue;
}
} else
{var temp__4092__auto___38497 = cljs.core.seq.call(null,seq__38484_38488);if(temp__4092__auto___38497)
{var seq__38484_38498__$1 = temp__4092__auto___38497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38484_38498__$1))
{var c__4148__auto___38499 = cljs.core.chunk_first.call(null,seq__38484_38498__$1);{
var G__38500 = cljs.core.chunk_rest.call(null,seq__38484_38498__$1);
var G__38501 = c__4148__auto___38499;
var G__38502 = cljs.core.count.call(null,c__4148__auto___38499);
var G__38503 = 0;
seq__38484_38488 = G__38500;
chunk__38485_38489 = G__38501;
count__38486_38490 = G__38502;
i__38487_38491 = G__38503;
continue;
}
} else
{var node_38504 = cljs.core.first.call(null,seq__38484_38498__$1);goog.dom.classes.toggle(node_38504,class$);
{
var G__38505 = cljs.core.next.call(null,seq__38484_38498__$1);
var G__38506 = null;
var G__38507 = 0;
var G__38508 = 0;
seq__38484_38488 = G__38505;
chunk__38485_38489 = G__38506;
count__38486_38490 = G__38507;
i__38487_38491 = G__38508;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38517__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38513_38518 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38514_38519 = null;var count__38515_38520 = 0;var i__38516_38521 = 0;while(true){
if((i__38516_38521 < count__38515_38520))
{var node_38522 = cljs.core._nth.call(null,chunk__38514_38519,i__38516_38521);goog.dom.classes.set(node_38522,classes_38517__$1);
{
var G__38523 = seq__38513_38518;
var G__38524 = chunk__38514_38519;
var G__38525 = count__38515_38520;
var G__38526 = (i__38516_38521 + 1);
seq__38513_38518 = G__38523;
chunk__38514_38519 = G__38524;
count__38515_38520 = G__38525;
i__38516_38521 = G__38526;
continue;
}
} else
{var temp__4092__auto___38527 = cljs.core.seq.call(null,seq__38513_38518);if(temp__4092__auto___38527)
{var seq__38513_38528__$1 = temp__4092__auto___38527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38513_38528__$1))
{var c__4148__auto___38529 = cljs.core.chunk_first.call(null,seq__38513_38528__$1);{
var G__38530 = cljs.core.chunk_rest.call(null,seq__38513_38528__$1);
var G__38531 = c__4148__auto___38529;
var G__38532 = cljs.core.count.call(null,c__4148__auto___38529);
var G__38533 = 0;
seq__38513_38518 = G__38530;
chunk__38514_38519 = G__38531;
count__38515_38520 = G__38532;
i__38516_38521 = G__38533;
continue;
}
} else
{var node_38534 = cljs.core.first.call(null,seq__38513_38528__$1);goog.dom.classes.set(node_38534,classes_38517__$1);
{
var G__38535 = cljs.core.next.call(null,seq__38513_38528__$1);
var G__38536 = null;
var G__38537 = 0;
var G__38538 = 0;
seq__38513_38518 = G__38535;
chunk__38514_38519 = G__38536;
count__38515_38520 = G__38537;
i__38516_38521 = G__38538;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38543_38547 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38544_38548 = null;var count__38545_38549 = 0;var i__38546_38550 = 0;while(true){
if((i__38546_38550 < count__38545_38549))
{var node_38551 = cljs.core._nth.call(null,chunk__38544_38548,i__38546_38550);goog.dom.setTextContent(node_38551,value);
{
var G__38552 = seq__38543_38547;
var G__38553 = chunk__38544_38548;
var G__38554 = count__38545_38549;
var G__38555 = (i__38546_38550 + 1);
seq__38543_38547 = G__38552;
chunk__38544_38548 = G__38553;
count__38545_38549 = G__38554;
i__38546_38550 = G__38555;
continue;
}
} else
{var temp__4092__auto___38556 = cljs.core.seq.call(null,seq__38543_38547);if(temp__4092__auto___38556)
{var seq__38543_38557__$1 = temp__4092__auto___38556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38543_38557__$1))
{var c__4148__auto___38558 = cljs.core.chunk_first.call(null,seq__38543_38557__$1);{
var G__38559 = cljs.core.chunk_rest.call(null,seq__38543_38557__$1);
var G__38560 = c__4148__auto___38558;
var G__38561 = cljs.core.count.call(null,c__4148__auto___38558);
var G__38562 = 0;
seq__38543_38547 = G__38559;
chunk__38544_38548 = G__38560;
count__38545_38549 = G__38561;
i__38546_38550 = G__38562;
continue;
}
} else
{var node_38563 = cljs.core.first.call(null,seq__38543_38557__$1);goog.dom.setTextContent(node_38563,value);
{
var G__38564 = cljs.core.next.call(null,seq__38543_38557__$1);
var G__38565 = null;
var G__38566 = 0;
var G__38567 = 0;
seq__38543_38547 = G__38564;
chunk__38544_38548 = G__38565;
count__38545_38549 = G__38566;
i__38546_38550 = G__38567;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38572_38576 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38573_38577 = null;var count__38574_38578 = 0;var i__38575_38579 = 0;while(true){
if((i__38575_38579 < count__38574_38578))
{var node_38580 = cljs.core._nth.call(null,chunk__38573_38577,i__38575_38579);goog.dom.forms.setValue(node_38580,value);
{
var G__38581 = seq__38572_38576;
var G__38582 = chunk__38573_38577;
var G__38583 = count__38574_38578;
var G__38584 = (i__38575_38579 + 1);
seq__38572_38576 = G__38581;
chunk__38573_38577 = G__38582;
count__38574_38578 = G__38583;
i__38575_38579 = G__38584;
continue;
}
} else
{var temp__4092__auto___38585 = cljs.core.seq.call(null,seq__38572_38576);if(temp__4092__auto___38585)
{var seq__38572_38586__$1 = temp__4092__auto___38585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38572_38586__$1))
{var c__4148__auto___38587 = cljs.core.chunk_first.call(null,seq__38572_38586__$1);{
var G__38588 = cljs.core.chunk_rest.call(null,seq__38572_38586__$1);
var G__38589 = c__4148__auto___38587;
var G__38590 = cljs.core.count.call(null,c__4148__auto___38587);
var G__38591 = 0;
seq__38572_38576 = G__38588;
chunk__38573_38577 = G__38589;
count__38574_38578 = G__38590;
i__38575_38579 = G__38591;
continue;
}
} else
{var node_38592 = cljs.core.first.call(null,seq__38572_38586__$1);goog.dom.forms.setValue(node_38592,value);
{
var G__38593 = cljs.core.next.call(null,seq__38572_38586__$1);
var G__38594 = null;
var G__38595 = 0;
var G__38596 = 0;
seq__38572_38576 = G__38593;
chunk__38573_38577 = G__38594;
count__38574_38578 = G__38595;
i__38575_38579 = G__38596;
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
{var value_38607 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38603_38608 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38604_38609 = null;var count__38605_38610 = 0;var i__38606_38611 = 0;while(true){
if((i__38606_38611 < count__38605_38610))
{var node_38612 = cljs.core._nth.call(null,chunk__38604_38609,i__38606_38611);node_38612.innerHTML = value_38607;
{
var G__38613 = seq__38603_38608;
var G__38614 = chunk__38604_38609;
var G__38615 = count__38605_38610;
var G__38616 = (i__38606_38611 + 1);
seq__38603_38608 = G__38613;
chunk__38604_38609 = G__38614;
count__38605_38610 = G__38615;
i__38606_38611 = G__38616;
continue;
}
} else
{var temp__4092__auto___38617 = cljs.core.seq.call(null,seq__38603_38608);if(temp__4092__auto___38617)
{var seq__38603_38618__$1 = temp__4092__auto___38617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38603_38618__$1))
{var c__4148__auto___38619 = cljs.core.chunk_first.call(null,seq__38603_38618__$1);{
var G__38620 = cljs.core.chunk_rest.call(null,seq__38603_38618__$1);
var G__38621 = c__4148__auto___38619;
var G__38622 = cljs.core.count.call(null,c__4148__auto___38619);
var G__38623 = 0;
seq__38603_38608 = G__38620;
chunk__38604_38609 = G__38621;
count__38605_38610 = G__38622;
i__38606_38611 = G__38623;
continue;
}
} else
{var node_38624 = cljs.core.first.call(null,seq__38603_38618__$1);node_38624.innerHTML = value_38607;
{
var G__38625 = cljs.core.next.call(null,seq__38603_38618__$1);
var G__38626 = null;
var G__38627 = 0;
var G__38628 = 0;
seq__38603_38608 = G__38625;
chunk__38604_38609 = G__38626;
count__38605_38610 = G__38627;
i__38606_38611 = G__38628;
continue;
}
}
} else
{}
}
break;
}
}catch (e38602){if((e38602 instanceof Error))
{var e_38629 = e38602;domina.replace_children_BANG_.call(null,content,value_38607);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38602;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38636_38640 = cljs.core.seq.call(null,children);var chunk__38637_38641 = null;var count__38638_38642 = 0;var i__38639_38643 = 0;while(true){
if((i__38639_38643 < count__38638_38642))
{var child_38644 = cljs.core._nth.call(null,chunk__38637_38641,i__38639_38643);frag.appendChild(child_38644);
{
var G__38645 = seq__38636_38640;
var G__38646 = chunk__38637_38641;
var G__38647 = count__38638_38642;
var G__38648 = (i__38639_38643 + 1);
seq__38636_38640 = G__38645;
chunk__38637_38641 = G__38646;
count__38638_38642 = G__38647;
i__38639_38643 = G__38648;
continue;
}
} else
{var temp__4092__auto___38649 = cljs.core.seq.call(null,seq__38636_38640);if(temp__4092__auto___38649)
{var seq__38636_38650__$1 = temp__4092__auto___38649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38636_38650__$1))
{var c__4148__auto___38651 = cljs.core.chunk_first.call(null,seq__38636_38650__$1);{
var G__38652 = cljs.core.chunk_rest.call(null,seq__38636_38650__$1);
var G__38653 = c__4148__auto___38651;
var G__38654 = cljs.core.count.call(null,c__4148__auto___38651);
var G__38655 = 0;
seq__38636_38640 = G__38652;
chunk__38637_38641 = G__38653;
count__38638_38642 = G__38654;
i__38639_38643 = G__38655;
continue;
}
} else
{var child_38656 = cljs.core.first.call(null,seq__38636_38650__$1);frag.appendChild(child_38656);
{
var G__38657 = cljs.core.next.call(null,seq__38636_38650__$1);
var G__38658 = null;
var G__38659 = 0;
var G__38660 = 0;
seq__38636_38640 = G__38657;
chunk__38637_38641 = G__38658;
count__38638_38642 = G__38659;
i__38639_38643 = G__38660;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38630_SHARP_,p2__38631_SHARP_){return f.call(null,p1__38630_SHARP_,p2__38631_SHARP_);
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
{if((function (){var G__38662 = list_thing;if(G__38662)
{var bit__4050__auto__ = (G__38662.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38662.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38662.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38662);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38662);
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
{if((function (){var G__38663 = content;if(G__38663)
{var bit__4050__auto__ = (G__38663.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38663.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38663.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38663);
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
{if((function (){var G__38664 = content;if(G__38664)
{var bit__4050__auto__ = (G__38664.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38664.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38664.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38664);
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
