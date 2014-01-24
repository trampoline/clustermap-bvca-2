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
var opt_wrapper_16175 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16177 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16176,table_section_wrapper_16176,opt_wrapper_16175,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16177,table_section_wrapper_16176,cell_wrapper_16177,opt_wrapper_16175,table_section_wrapper_16176,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16176]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16182 = cljs.core.seq.call(null,tbody);var chunk__16183 = null;var count__16184 = 0;var i__16185 = 0;while(true){
if((i__16185 < count__16184))
{var child = cljs.core._nth.call(null,chunk__16183,i__16185);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16186 = seq__16182;
var G__16187 = chunk__16183;
var G__16188 = count__16184;
var G__16189 = (i__16185 + 1);
seq__16182 = G__16186;
chunk__16183 = G__16187;
count__16184 = G__16188;
i__16185 = G__16189;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16182);if(temp__4092__auto__)
{var seq__16182__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16182__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16182__$1);{
var G__16190 = cljs.core.chunk_rest.call(null,seq__16182__$1);
var G__16191 = c__4148__auto__;
var G__16192 = cljs.core.count.call(null,c__4148__auto__);
var G__16193 = 0;
seq__16182 = G__16190;
chunk__16183 = G__16191;
count__16184 = G__16192;
i__16185 = G__16193;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16182__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16194 = cljs.core.next.call(null,seq__16182__$1);
var G__16195 = null;
var G__16196 = 0;
var G__16197 = 0;
seq__16182 = G__16194;
chunk__16183 = G__16195;
count__16184 = G__16196;
i__16185 = G__16197;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16199 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16199,0,null);var start_wrap = cljs.core.nth.call(null,vec__16199,1,null);var end_wrap = cljs.core.nth.call(null,vec__16199,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16200 = wrapper.lastChild;
var G__16201 = (level - 1);
wrapper = G__16200;
level = G__16201;
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
domina.DomContent = (function (){var obj16203 = {};return obj16203;
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
log_debug.cljs$lang$applyTo = (function (arglist__16204){
var mesg = cljs.core.seq(arglist__16204);
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
log.cljs$lang$applyTo = (function (arglist__16205){
var mesg = cljs.core.seq(arglist__16205);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16206){
var contents = cljs.core.seq(arglist__16206);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16207_SHARP_){return p1__16207_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16208_SHARP_,p2__16209_SHARP_){return goog.dom.insertChildAt(p1__16208_SHARP_,p2__16209_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16211_SHARP_,p2__16210_SHARP_){return goog.dom.insertSiblingBefore(p2__16210_SHARP_,p1__16211_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16213_SHARP_,p2__16212_SHARP_){return goog.dom.insertSiblingAfter(p2__16212_SHARP_,p1__16213_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16215_SHARP_,p2__16214_SHARP_){return goog.dom.replaceNode(p2__16214_SHARP_,p1__16215_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16220_16224 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16221_16225 = null;var count__16222_16226 = 0;var i__16223_16227 = 0;while(true){
if((i__16223_16227 < count__16222_16226))
{var n_16228 = cljs.core._nth.call(null,chunk__16221_16225,i__16223_16227);goog.style.setStyle(n_16228,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16229 = seq__16220_16224;
var G__16230 = chunk__16221_16225;
var G__16231 = count__16222_16226;
var G__16232 = (i__16223_16227 + 1);
seq__16220_16224 = G__16229;
chunk__16221_16225 = G__16230;
count__16222_16226 = G__16231;
i__16223_16227 = G__16232;
continue;
}
} else
{var temp__4092__auto___16233 = cljs.core.seq.call(null,seq__16220_16224);if(temp__4092__auto___16233)
{var seq__16220_16234__$1 = temp__4092__auto___16233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16220_16234__$1))
{var c__4148__auto___16235 = cljs.core.chunk_first.call(null,seq__16220_16234__$1);{
var G__16236 = cljs.core.chunk_rest.call(null,seq__16220_16234__$1);
var G__16237 = c__4148__auto___16235;
var G__16238 = cljs.core.count.call(null,c__4148__auto___16235);
var G__16239 = 0;
seq__16220_16224 = G__16236;
chunk__16221_16225 = G__16237;
count__16222_16226 = G__16238;
i__16223_16227 = G__16239;
continue;
}
} else
{var n_16240 = cljs.core.first.call(null,seq__16220_16234__$1);goog.style.setStyle(n_16240,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16241 = cljs.core.next.call(null,seq__16220_16234__$1);
var G__16242 = null;
var G__16243 = 0;
var G__16244 = 0;
seq__16220_16224 = G__16241;
chunk__16221_16225 = G__16242;
count__16222_16226 = G__16243;
i__16223_16227 = G__16244;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16245){
var content = cljs.core.first(arglist__16245);
arglist__16245 = cljs.core.next(arglist__16245);
var name = cljs.core.first(arglist__16245);
var value = cljs.core.rest(arglist__16245);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16250_16254 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16251_16255 = null;var count__16252_16256 = 0;var i__16253_16257 = 0;while(true){
if((i__16253_16257 < count__16252_16256))
{var n_16258 = cljs.core._nth.call(null,chunk__16251_16255,i__16253_16257);n_16258.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16259 = seq__16250_16254;
var G__16260 = chunk__16251_16255;
var G__16261 = count__16252_16256;
var G__16262 = (i__16253_16257 + 1);
seq__16250_16254 = G__16259;
chunk__16251_16255 = G__16260;
count__16252_16256 = G__16261;
i__16253_16257 = G__16262;
continue;
}
} else
{var temp__4092__auto___16263 = cljs.core.seq.call(null,seq__16250_16254);if(temp__4092__auto___16263)
{var seq__16250_16264__$1 = temp__4092__auto___16263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16250_16264__$1))
{var c__4148__auto___16265 = cljs.core.chunk_first.call(null,seq__16250_16264__$1);{
var G__16266 = cljs.core.chunk_rest.call(null,seq__16250_16264__$1);
var G__16267 = c__4148__auto___16265;
var G__16268 = cljs.core.count.call(null,c__4148__auto___16265);
var G__16269 = 0;
seq__16250_16254 = G__16266;
chunk__16251_16255 = G__16267;
count__16252_16256 = G__16268;
i__16253_16257 = G__16269;
continue;
}
} else
{var n_16270 = cljs.core.first.call(null,seq__16250_16264__$1);n_16270.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16271 = cljs.core.next.call(null,seq__16250_16264__$1);
var G__16272 = null;
var G__16273 = 0;
var G__16274 = 0;
seq__16250_16254 = G__16271;
chunk__16251_16255 = G__16272;
count__16252_16256 = G__16273;
i__16253_16257 = G__16274;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16275){
var content = cljs.core.first(arglist__16275);
arglist__16275 = cljs.core.next(arglist__16275);
var name = cljs.core.first(arglist__16275);
var value = cljs.core.rest(arglist__16275);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16280_16284 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16281_16285 = null;var count__16282_16286 = 0;var i__16283_16287 = 0;while(true){
if((i__16283_16287 < count__16282_16286))
{var n_16288 = cljs.core._nth.call(null,chunk__16281_16285,i__16283_16287);n_16288.removeAttribute(cljs.core.name.call(null,name));
{
var G__16289 = seq__16280_16284;
var G__16290 = chunk__16281_16285;
var G__16291 = count__16282_16286;
var G__16292 = (i__16283_16287 + 1);
seq__16280_16284 = G__16289;
chunk__16281_16285 = G__16290;
count__16282_16286 = G__16291;
i__16283_16287 = G__16292;
continue;
}
} else
{var temp__4092__auto___16293 = cljs.core.seq.call(null,seq__16280_16284);if(temp__4092__auto___16293)
{var seq__16280_16294__$1 = temp__4092__auto___16293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16280_16294__$1))
{var c__4148__auto___16295 = cljs.core.chunk_first.call(null,seq__16280_16294__$1);{
var G__16296 = cljs.core.chunk_rest.call(null,seq__16280_16294__$1);
var G__16297 = c__4148__auto___16295;
var G__16298 = cljs.core.count.call(null,c__4148__auto___16295);
var G__16299 = 0;
seq__16280_16284 = G__16296;
chunk__16281_16285 = G__16297;
count__16282_16286 = G__16298;
i__16283_16287 = G__16299;
continue;
}
} else
{var n_16300 = cljs.core.first.call(null,seq__16280_16294__$1);n_16300.removeAttribute(cljs.core.name.call(null,name));
{
var G__16301 = cljs.core.next.call(null,seq__16280_16294__$1);
var G__16302 = null;
var G__16303 = 0;
var G__16304 = 0;
seq__16280_16284 = G__16301;
chunk__16281_16285 = G__16302;
count__16282_16286 = G__16303;
i__16283_16287 = G__16304;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16306 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16306,0,null);var v = cljs.core.nth.call(null,vec__16306,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16307_SHARP_){var attr = attrs__$1.item(p1__16307_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16314_16320 = cljs.core.seq.call(null,styles);var chunk__16315_16321 = null;var count__16316_16322 = 0;var i__16317_16323 = 0;while(true){
if((i__16317_16323 < count__16316_16322))
{var vec__16318_16324 = cljs.core._nth.call(null,chunk__16315_16321,i__16317_16323);var name_16325 = cljs.core.nth.call(null,vec__16318_16324,0,null);var value_16326 = cljs.core.nth.call(null,vec__16318_16324,1,null);domina.set_style_BANG_.call(null,content,name_16325,value_16326);
{
var G__16327 = seq__16314_16320;
var G__16328 = chunk__16315_16321;
var G__16329 = count__16316_16322;
var G__16330 = (i__16317_16323 + 1);
seq__16314_16320 = G__16327;
chunk__16315_16321 = G__16328;
count__16316_16322 = G__16329;
i__16317_16323 = G__16330;
continue;
}
} else
{var temp__4092__auto___16331 = cljs.core.seq.call(null,seq__16314_16320);if(temp__4092__auto___16331)
{var seq__16314_16332__$1 = temp__4092__auto___16331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16314_16332__$1))
{var c__4148__auto___16333 = cljs.core.chunk_first.call(null,seq__16314_16332__$1);{
var G__16334 = cljs.core.chunk_rest.call(null,seq__16314_16332__$1);
var G__16335 = c__4148__auto___16333;
var G__16336 = cljs.core.count.call(null,c__4148__auto___16333);
var G__16337 = 0;
seq__16314_16320 = G__16334;
chunk__16315_16321 = G__16335;
count__16316_16322 = G__16336;
i__16317_16323 = G__16337;
continue;
}
} else
{var vec__16319_16338 = cljs.core.first.call(null,seq__16314_16332__$1);var name_16339 = cljs.core.nth.call(null,vec__16319_16338,0,null);var value_16340 = cljs.core.nth.call(null,vec__16319_16338,1,null);domina.set_style_BANG_.call(null,content,name_16339,value_16340);
{
var G__16341 = cljs.core.next.call(null,seq__16314_16332__$1);
var G__16342 = null;
var G__16343 = 0;
var G__16344 = 0;
seq__16314_16320 = G__16341;
chunk__16315_16321 = G__16342;
count__16316_16322 = G__16343;
i__16317_16323 = G__16344;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16351_16357 = cljs.core.seq.call(null,attrs);var chunk__16352_16358 = null;var count__16353_16359 = 0;var i__16354_16360 = 0;while(true){
if((i__16354_16360 < count__16353_16359))
{var vec__16355_16361 = cljs.core._nth.call(null,chunk__16352_16358,i__16354_16360);var name_16362 = cljs.core.nth.call(null,vec__16355_16361,0,null);var value_16363 = cljs.core.nth.call(null,vec__16355_16361,1,null);domina.set_attr_BANG_.call(null,content,name_16362,value_16363);
{
var G__16364 = seq__16351_16357;
var G__16365 = chunk__16352_16358;
var G__16366 = count__16353_16359;
var G__16367 = (i__16354_16360 + 1);
seq__16351_16357 = G__16364;
chunk__16352_16358 = G__16365;
count__16353_16359 = G__16366;
i__16354_16360 = G__16367;
continue;
}
} else
{var temp__4092__auto___16368 = cljs.core.seq.call(null,seq__16351_16357);if(temp__4092__auto___16368)
{var seq__16351_16369__$1 = temp__4092__auto___16368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16351_16369__$1))
{var c__4148__auto___16370 = cljs.core.chunk_first.call(null,seq__16351_16369__$1);{
var G__16371 = cljs.core.chunk_rest.call(null,seq__16351_16369__$1);
var G__16372 = c__4148__auto___16370;
var G__16373 = cljs.core.count.call(null,c__4148__auto___16370);
var G__16374 = 0;
seq__16351_16357 = G__16371;
chunk__16352_16358 = G__16372;
count__16353_16359 = G__16373;
i__16354_16360 = G__16374;
continue;
}
} else
{var vec__16356_16375 = cljs.core.first.call(null,seq__16351_16369__$1);var name_16376 = cljs.core.nth.call(null,vec__16356_16375,0,null);var value_16377 = cljs.core.nth.call(null,vec__16356_16375,1,null);domina.set_attr_BANG_.call(null,content,name_16376,value_16377);
{
var G__16378 = cljs.core.next.call(null,seq__16351_16369__$1);
var G__16379 = null;
var G__16380 = 0;
var G__16381 = 0;
seq__16351_16357 = G__16378;
chunk__16352_16358 = G__16379;
count__16353_16359 = G__16380;
i__16354_16360 = G__16381;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16386_16390 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16387_16391 = null;var count__16388_16392 = 0;var i__16389_16393 = 0;while(true){
if((i__16389_16393 < count__16388_16392))
{var node_16394 = cljs.core._nth.call(null,chunk__16387_16391,i__16389_16393);goog.dom.classes.add(node_16394,class$);
{
var G__16395 = seq__16386_16390;
var G__16396 = chunk__16387_16391;
var G__16397 = count__16388_16392;
var G__16398 = (i__16389_16393 + 1);
seq__16386_16390 = G__16395;
chunk__16387_16391 = G__16396;
count__16388_16392 = G__16397;
i__16389_16393 = G__16398;
continue;
}
} else
{var temp__4092__auto___16399 = cljs.core.seq.call(null,seq__16386_16390);if(temp__4092__auto___16399)
{var seq__16386_16400__$1 = temp__4092__auto___16399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16386_16400__$1))
{var c__4148__auto___16401 = cljs.core.chunk_first.call(null,seq__16386_16400__$1);{
var G__16402 = cljs.core.chunk_rest.call(null,seq__16386_16400__$1);
var G__16403 = c__4148__auto___16401;
var G__16404 = cljs.core.count.call(null,c__4148__auto___16401);
var G__16405 = 0;
seq__16386_16390 = G__16402;
chunk__16387_16391 = G__16403;
count__16388_16392 = G__16404;
i__16389_16393 = G__16405;
continue;
}
} else
{var node_16406 = cljs.core.first.call(null,seq__16386_16400__$1);goog.dom.classes.add(node_16406,class$);
{
var G__16407 = cljs.core.next.call(null,seq__16386_16400__$1);
var G__16408 = null;
var G__16409 = 0;
var G__16410 = 0;
seq__16386_16390 = G__16407;
chunk__16387_16391 = G__16408;
count__16388_16392 = G__16409;
i__16389_16393 = G__16410;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16415_16419 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16416_16420 = null;var count__16417_16421 = 0;var i__16418_16422 = 0;while(true){
if((i__16418_16422 < count__16417_16421))
{var node_16423 = cljs.core._nth.call(null,chunk__16416_16420,i__16418_16422);goog.dom.classes.remove(node_16423,class$);
{
var G__16424 = seq__16415_16419;
var G__16425 = chunk__16416_16420;
var G__16426 = count__16417_16421;
var G__16427 = (i__16418_16422 + 1);
seq__16415_16419 = G__16424;
chunk__16416_16420 = G__16425;
count__16417_16421 = G__16426;
i__16418_16422 = G__16427;
continue;
}
} else
{var temp__4092__auto___16428 = cljs.core.seq.call(null,seq__16415_16419);if(temp__4092__auto___16428)
{var seq__16415_16429__$1 = temp__4092__auto___16428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16415_16429__$1))
{var c__4148__auto___16430 = cljs.core.chunk_first.call(null,seq__16415_16429__$1);{
var G__16431 = cljs.core.chunk_rest.call(null,seq__16415_16429__$1);
var G__16432 = c__4148__auto___16430;
var G__16433 = cljs.core.count.call(null,c__4148__auto___16430);
var G__16434 = 0;
seq__16415_16419 = G__16431;
chunk__16416_16420 = G__16432;
count__16417_16421 = G__16433;
i__16418_16422 = G__16434;
continue;
}
} else
{var node_16435 = cljs.core.first.call(null,seq__16415_16429__$1);goog.dom.classes.remove(node_16435,class$);
{
var G__16436 = cljs.core.next.call(null,seq__16415_16429__$1);
var G__16437 = null;
var G__16438 = 0;
var G__16439 = 0;
seq__16415_16419 = G__16436;
chunk__16416_16420 = G__16437;
count__16417_16421 = G__16438;
i__16418_16422 = G__16439;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16444_16448 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16445_16449 = null;var count__16446_16450 = 0;var i__16447_16451 = 0;while(true){
if((i__16447_16451 < count__16446_16450))
{var node_16452 = cljs.core._nth.call(null,chunk__16445_16449,i__16447_16451);goog.dom.classes.toggle(node_16452,class$);
{
var G__16453 = seq__16444_16448;
var G__16454 = chunk__16445_16449;
var G__16455 = count__16446_16450;
var G__16456 = (i__16447_16451 + 1);
seq__16444_16448 = G__16453;
chunk__16445_16449 = G__16454;
count__16446_16450 = G__16455;
i__16447_16451 = G__16456;
continue;
}
} else
{var temp__4092__auto___16457 = cljs.core.seq.call(null,seq__16444_16448);if(temp__4092__auto___16457)
{var seq__16444_16458__$1 = temp__4092__auto___16457;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16444_16458__$1))
{var c__4148__auto___16459 = cljs.core.chunk_first.call(null,seq__16444_16458__$1);{
var G__16460 = cljs.core.chunk_rest.call(null,seq__16444_16458__$1);
var G__16461 = c__4148__auto___16459;
var G__16462 = cljs.core.count.call(null,c__4148__auto___16459);
var G__16463 = 0;
seq__16444_16448 = G__16460;
chunk__16445_16449 = G__16461;
count__16446_16450 = G__16462;
i__16447_16451 = G__16463;
continue;
}
} else
{var node_16464 = cljs.core.first.call(null,seq__16444_16458__$1);goog.dom.classes.toggle(node_16464,class$);
{
var G__16465 = cljs.core.next.call(null,seq__16444_16458__$1);
var G__16466 = null;
var G__16467 = 0;
var G__16468 = 0;
seq__16444_16448 = G__16465;
chunk__16445_16449 = G__16466;
count__16446_16450 = G__16467;
i__16447_16451 = G__16468;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16477__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16473_16478 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16474_16479 = null;var count__16475_16480 = 0;var i__16476_16481 = 0;while(true){
if((i__16476_16481 < count__16475_16480))
{var node_16482 = cljs.core._nth.call(null,chunk__16474_16479,i__16476_16481);goog.dom.classes.set(node_16482,classes_16477__$1);
{
var G__16483 = seq__16473_16478;
var G__16484 = chunk__16474_16479;
var G__16485 = count__16475_16480;
var G__16486 = (i__16476_16481 + 1);
seq__16473_16478 = G__16483;
chunk__16474_16479 = G__16484;
count__16475_16480 = G__16485;
i__16476_16481 = G__16486;
continue;
}
} else
{var temp__4092__auto___16487 = cljs.core.seq.call(null,seq__16473_16478);if(temp__4092__auto___16487)
{var seq__16473_16488__$1 = temp__4092__auto___16487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16473_16488__$1))
{var c__4148__auto___16489 = cljs.core.chunk_first.call(null,seq__16473_16488__$1);{
var G__16490 = cljs.core.chunk_rest.call(null,seq__16473_16488__$1);
var G__16491 = c__4148__auto___16489;
var G__16492 = cljs.core.count.call(null,c__4148__auto___16489);
var G__16493 = 0;
seq__16473_16478 = G__16490;
chunk__16474_16479 = G__16491;
count__16475_16480 = G__16492;
i__16476_16481 = G__16493;
continue;
}
} else
{var node_16494 = cljs.core.first.call(null,seq__16473_16488__$1);goog.dom.classes.set(node_16494,classes_16477__$1);
{
var G__16495 = cljs.core.next.call(null,seq__16473_16488__$1);
var G__16496 = null;
var G__16497 = 0;
var G__16498 = 0;
seq__16473_16478 = G__16495;
chunk__16474_16479 = G__16496;
count__16475_16480 = G__16497;
i__16476_16481 = G__16498;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16503_16507 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16504_16508 = null;var count__16505_16509 = 0;var i__16506_16510 = 0;while(true){
if((i__16506_16510 < count__16505_16509))
{var node_16511 = cljs.core._nth.call(null,chunk__16504_16508,i__16506_16510);goog.dom.setTextContent(node_16511,value);
{
var G__16512 = seq__16503_16507;
var G__16513 = chunk__16504_16508;
var G__16514 = count__16505_16509;
var G__16515 = (i__16506_16510 + 1);
seq__16503_16507 = G__16512;
chunk__16504_16508 = G__16513;
count__16505_16509 = G__16514;
i__16506_16510 = G__16515;
continue;
}
} else
{var temp__4092__auto___16516 = cljs.core.seq.call(null,seq__16503_16507);if(temp__4092__auto___16516)
{var seq__16503_16517__$1 = temp__4092__auto___16516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16503_16517__$1))
{var c__4148__auto___16518 = cljs.core.chunk_first.call(null,seq__16503_16517__$1);{
var G__16519 = cljs.core.chunk_rest.call(null,seq__16503_16517__$1);
var G__16520 = c__4148__auto___16518;
var G__16521 = cljs.core.count.call(null,c__4148__auto___16518);
var G__16522 = 0;
seq__16503_16507 = G__16519;
chunk__16504_16508 = G__16520;
count__16505_16509 = G__16521;
i__16506_16510 = G__16522;
continue;
}
} else
{var node_16523 = cljs.core.first.call(null,seq__16503_16517__$1);goog.dom.setTextContent(node_16523,value);
{
var G__16524 = cljs.core.next.call(null,seq__16503_16517__$1);
var G__16525 = null;
var G__16526 = 0;
var G__16527 = 0;
seq__16503_16507 = G__16524;
chunk__16504_16508 = G__16525;
count__16505_16509 = G__16526;
i__16506_16510 = G__16527;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16532_16536 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16533_16537 = null;var count__16534_16538 = 0;var i__16535_16539 = 0;while(true){
if((i__16535_16539 < count__16534_16538))
{var node_16540 = cljs.core._nth.call(null,chunk__16533_16537,i__16535_16539);goog.dom.forms.setValue(node_16540,value);
{
var G__16541 = seq__16532_16536;
var G__16542 = chunk__16533_16537;
var G__16543 = count__16534_16538;
var G__16544 = (i__16535_16539 + 1);
seq__16532_16536 = G__16541;
chunk__16533_16537 = G__16542;
count__16534_16538 = G__16543;
i__16535_16539 = G__16544;
continue;
}
} else
{var temp__4092__auto___16545 = cljs.core.seq.call(null,seq__16532_16536);if(temp__4092__auto___16545)
{var seq__16532_16546__$1 = temp__4092__auto___16545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16532_16546__$1))
{var c__4148__auto___16547 = cljs.core.chunk_first.call(null,seq__16532_16546__$1);{
var G__16548 = cljs.core.chunk_rest.call(null,seq__16532_16546__$1);
var G__16549 = c__4148__auto___16547;
var G__16550 = cljs.core.count.call(null,c__4148__auto___16547);
var G__16551 = 0;
seq__16532_16536 = G__16548;
chunk__16533_16537 = G__16549;
count__16534_16538 = G__16550;
i__16535_16539 = G__16551;
continue;
}
} else
{var node_16552 = cljs.core.first.call(null,seq__16532_16546__$1);goog.dom.forms.setValue(node_16552,value);
{
var G__16553 = cljs.core.next.call(null,seq__16532_16546__$1);
var G__16554 = null;
var G__16555 = 0;
var G__16556 = 0;
seq__16532_16536 = G__16553;
chunk__16533_16537 = G__16554;
count__16534_16538 = G__16555;
i__16535_16539 = G__16556;
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
{var value_16567 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16563_16568 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16564_16569 = null;var count__16565_16570 = 0;var i__16566_16571 = 0;while(true){
if((i__16566_16571 < count__16565_16570))
{var node_16572 = cljs.core._nth.call(null,chunk__16564_16569,i__16566_16571);node_16572.innerHTML = value_16567;
{
var G__16573 = seq__16563_16568;
var G__16574 = chunk__16564_16569;
var G__16575 = count__16565_16570;
var G__16576 = (i__16566_16571 + 1);
seq__16563_16568 = G__16573;
chunk__16564_16569 = G__16574;
count__16565_16570 = G__16575;
i__16566_16571 = G__16576;
continue;
}
} else
{var temp__4092__auto___16577 = cljs.core.seq.call(null,seq__16563_16568);if(temp__4092__auto___16577)
{var seq__16563_16578__$1 = temp__4092__auto___16577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16563_16578__$1))
{var c__4148__auto___16579 = cljs.core.chunk_first.call(null,seq__16563_16578__$1);{
var G__16580 = cljs.core.chunk_rest.call(null,seq__16563_16578__$1);
var G__16581 = c__4148__auto___16579;
var G__16582 = cljs.core.count.call(null,c__4148__auto___16579);
var G__16583 = 0;
seq__16563_16568 = G__16580;
chunk__16564_16569 = G__16581;
count__16565_16570 = G__16582;
i__16566_16571 = G__16583;
continue;
}
} else
{var node_16584 = cljs.core.first.call(null,seq__16563_16578__$1);node_16584.innerHTML = value_16567;
{
var G__16585 = cljs.core.next.call(null,seq__16563_16578__$1);
var G__16586 = null;
var G__16587 = 0;
var G__16588 = 0;
seq__16563_16568 = G__16585;
chunk__16564_16569 = G__16586;
count__16565_16570 = G__16587;
i__16566_16571 = G__16588;
continue;
}
}
} else
{}
}
break;
}
}catch (e16562){if((e16562 instanceof Error))
{var e_16589 = e16562;domina.replace_children_BANG_.call(null,content,value_16567);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16562;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16596_16600 = cljs.core.seq.call(null,children);var chunk__16597_16601 = null;var count__16598_16602 = 0;var i__16599_16603 = 0;while(true){
if((i__16599_16603 < count__16598_16602))
{var child_16604 = cljs.core._nth.call(null,chunk__16597_16601,i__16599_16603);frag.appendChild(child_16604);
{
var G__16605 = seq__16596_16600;
var G__16606 = chunk__16597_16601;
var G__16607 = count__16598_16602;
var G__16608 = (i__16599_16603 + 1);
seq__16596_16600 = G__16605;
chunk__16597_16601 = G__16606;
count__16598_16602 = G__16607;
i__16599_16603 = G__16608;
continue;
}
} else
{var temp__4092__auto___16609 = cljs.core.seq.call(null,seq__16596_16600);if(temp__4092__auto___16609)
{var seq__16596_16610__$1 = temp__4092__auto___16609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16596_16610__$1))
{var c__4148__auto___16611 = cljs.core.chunk_first.call(null,seq__16596_16610__$1);{
var G__16612 = cljs.core.chunk_rest.call(null,seq__16596_16610__$1);
var G__16613 = c__4148__auto___16611;
var G__16614 = cljs.core.count.call(null,c__4148__auto___16611);
var G__16615 = 0;
seq__16596_16600 = G__16612;
chunk__16597_16601 = G__16613;
count__16598_16602 = G__16614;
i__16599_16603 = G__16615;
continue;
}
} else
{var child_16616 = cljs.core.first.call(null,seq__16596_16610__$1);frag.appendChild(child_16616);
{
var G__16617 = cljs.core.next.call(null,seq__16596_16610__$1);
var G__16618 = null;
var G__16619 = 0;
var G__16620 = 0;
seq__16596_16600 = G__16617;
chunk__16597_16601 = G__16618;
count__16598_16602 = G__16619;
i__16599_16603 = G__16620;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16590_SHARP_,p2__16591_SHARP_){return f.call(null,p1__16590_SHARP_,p2__16591_SHARP_);
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
{if((function (){var G__16622 = list_thing;if(G__16622)
{var bit__4050__auto__ = (G__16622.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16622.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16622.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16622);
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
{if((function (){var G__16623 = content;if(G__16623)
{var bit__4050__auto__ = (G__16623.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16623.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16623.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16623);
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
{if((function (){var G__16624 = content;if(G__16624)
{var bit__4050__auto__ = (G__16624.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16624.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16624);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16624);
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