// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_57155 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_57156 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_57157 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_57157,opt_wrapper_57155,table_section_wrapper_57156,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_57155,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_57156,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_57156,cell_wrapper_57157,table_section_wrapper_57156,table_section_wrapper_57156]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__57162 = cljs.core.seq.call(null,tbody);var chunk__57163 = null;var count__57164 = (0);var i__57165 = (0);while(true){
if((i__57165 < count__57164))
{var child = cljs.core._nth.call(null,chunk__57163,i__57165);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__57166 = seq__57162;
var G__57167 = chunk__57163;
var G__57168 = count__57164;
var G__57169 = (i__57165 + (1));
seq__57162 = G__57166;
chunk__57163 = G__57167;
count__57164 = G__57168;
i__57165 = G__57169;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__57162);if(temp__4126__auto__)
{var seq__57162__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57162__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__57162__$1);{
var G__57170 = cljs.core.chunk_rest.call(null,seq__57162__$1);
var G__57171 = c__4314__auto__;
var G__57172 = cljs.core.count.call(null,c__4314__auto__);
var G__57173 = (0);
seq__57162 = G__57170;
chunk__57163 = G__57171;
count__57164 = G__57172;
i__57165 = G__57173;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__57162__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__57174 = cljs.core.next.call(null,seq__57162__$1);
var G__57175 = null;
var G__57176 = (0);
var G__57177 = (0);
seq__57162 = G__57174;
chunk__57163 = G__57175;
count__57164 = G__57176;
i__57165 = G__57177;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__57179 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__57179,(0),null);var start_wrap = cljs.core.nth.call(null,vec__57179,(1),null);var end_wrap = cljs.core.nth.call(null,vec__57179,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__57180 = wrapper.lastChild;
var G__57181 = (level - (1));
wrapper = G__57180;
level = G__57181;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj57183 = {};return obj57183;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__57184){
var mesg = cljs.core.seq(arglist__57184);
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
log.cljs$lang$applyTo = (function (arglist__57185){
var mesg = cljs.core.seq(arglist__57185);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__57186){
var contents = cljs.core.seq(arglist__57186);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__57187_SHARP_){return p1__57187_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__57188_SHARP_,p2__57189_SHARP_){return goog.dom.insertChildAt(p1__57188_SHARP_,p2__57189_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__57191_SHARP_,p2__57190_SHARP_){return goog.dom.insertSiblingBefore(p2__57190_SHARP_,p1__57191_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__57193_SHARP_,p2__57192_SHARP_){return goog.dom.insertSiblingAfter(p2__57192_SHARP_,p1__57193_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__57195_SHARP_,p2__57194_SHARP_){return goog.dom.replaceNode(p2__57194_SHARP_,p1__57195_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__57200_57204 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57201_57205 = null;var count__57202_57206 = (0);var i__57203_57207 = (0);while(true){
if((i__57203_57207 < count__57202_57206))
{var n_57208 = cljs.core._nth.call(null,chunk__57201_57205,i__57203_57207);goog.style.setStyle(n_57208,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57209 = seq__57200_57204;
var G__57210 = chunk__57201_57205;
var G__57211 = count__57202_57206;
var G__57212 = (i__57203_57207 + (1));
seq__57200_57204 = G__57209;
chunk__57201_57205 = G__57210;
count__57202_57206 = G__57211;
i__57203_57207 = G__57212;
continue;
}
} else
{var temp__4126__auto___57213 = cljs.core.seq.call(null,seq__57200_57204);if(temp__4126__auto___57213)
{var seq__57200_57214__$1 = temp__4126__auto___57213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57200_57214__$1))
{var c__4314__auto___57215 = cljs.core.chunk_first.call(null,seq__57200_57214__$1);{
var G__57216 = cljs.core.chunk_rest.call(null,seq__57200_57214__$1);
var G__57217 = c__4314__auto___57215;
var G__57218 = cljs.core.count.call(null,c__4314__auto___57215);
var G__57219 = (0);
seq__57200_57204 = G__57216;
chunk__57201_57205 = G__57217;
count__57202_57206 = G__57218;
i__57203_57207 = G__57219;
continue;
}
} else
{var n_57220 = cljs.core.first.call(null,seq__57200_57214__$1);goog.style.setStyle(n_57220,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57221 = cljs.core.next.call(null,seq__57200_57214__$1);
var G__57222 = null;
var G__57223 = (0);
var G__57224 = (0);
seq__57200_57204 = G__57221;
chunk__57201_57205 = G__57222;
count__57202_57206 = G__57223;
i__57203_57207 = G__57224;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__57225){
var content = cljs.core.first(arglist__57225);
arglist__57225 = cljs.core.next(arglist__57225);
var name = cljs.core.first(arglist__57225);
var value = cljs.core.rest(arglist__57225);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__57230_57234 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57231_57235 = null;var count__57232_57236 = (0);var i__57233_57237 = (0);while(true){
if((i__57233_57237 < count__57232_57236))
{var n_57238 = cljs.core._nth.call(null,chunk__57231_57235,i__57233_57237);n_57238.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57239 = seq__57230_57234;
var G__57240 = chunk__57231_57235;
var G__57241 = count__57232_57236;
var G__57242 = (i__57233_57237 + (1));
seq__57230_57234 = G__57239;
chunk__57231_57235 = G__57240;
count__57232_57236 = G__57241;
i__57233_57237 = G__57242;
continue;
}
} else
{var temp__4126__auto___57243 = cljs.core.seq.call(null,seq__57230_57234);if(temp__4126__auto___57243)
{var seq__57230_57244__$1 = temp__4126__auto___57243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57230_57244__$1))
{var c__4314__auto___57245 = cljs.core.chunk_first.call(null,seq__57230_57244__$1);{
var G__57246 = cljs.core.chunk_rest.call(null,seq__57230_57244__$1);
var G__57247 = c__4314__auto___57245;
var G__57248 = cljs.core.count.call(null,c__4314__auto___57245);
var G__57249 = (0);
seq__57230_57234 = G__57246;
chunk__57231_57235 = G__57247;
count__57232_57236 = G__57248;
i__57233_57237 = G__57249;
continue;
}
} else
{var n_57250 = cljs.core.first.call(null,seq__57230_57244__$1);n_57250.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57251 = cljs.core.next.call(null,seq__57230_57244__$1);
var G__57252 = null;
var G__57253 = (0);
var G__57254 = (0);
seq__57230_57234 = G__57251;
chunk__57231_57235 = G__57252;
count__57232_57236 = G__57253;
i__57233_57237 = G__57254;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__57255){
var content = cljs.core.first(arglist__57255);
arglist__57255 = cljs.core.next(arglist__57255);
var name = cljs.core.first(arglist__57255);
var value = cljs.core.rest(arglist__57255);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__57260_57264 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57261_57265 = null;var count__57262_57266 = (0);var i__57263_57267 = (0);while(true){
if((i__57263_57267 < count__57262_57266))
{var n_57268 = cljs.core._nth.call(null,chunk__57261_57265,i__57263_57267);n_57268.removeAttribute(cljs.core.name.call(null,name));
{
var G__57269 = seq__57260_57264;
var G__57270 = chunk__57261_57265;
var G__57271 = count__57262_57266;
var G__57272 = (i__57263_57267 + (1));
seq__57260_57264 = G__57269;
chunk__57261_57265 = G__57270;
count__57262_57266 = G__57271;
i__57263_57267 = G__57272;
continue;
}
} else
{var temp__4126__auto___57273 = cljs.core.seq.call(null,seq__57260_57264);if(temp__4126__auto___57273)
{var seq__57260_57274__$1 = temp__4126__auto___57273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57260_57274__$1))
{var c__4314__auto___57275 = cljs.core.chunk_first.call(null,seq__57260_57274__$1);{
var G__57276 = cljs.core.chunk_rest.call(null,seq__57260_57274__$1);
var G__57277 = c__4314__auto___57275;
var G__57278 = cljs.core.count.call(null,c__4314__auto___57275);
var G__57279 = (0);
seq__57260_57264 = G__57276;
chunk__57261_57265 = G__57277;
count__57262_57266 = G__57278;
i__57263_57267 = G__57279;
continue;
}
} else
{var n_57280 = cljs.core.first.call(null,seq__57260_57274__$1);n_57280.removeAttribute(cljs.core.name.call(null,name));
{
var G__57281 = cljs.core.next.call(null,seq__57260_57274__$1);
var G__57282 = null;
var G__57283 = (0);
var G__57284 = (0);
seq__57260_57264 = G__57281;
chunk__57261_57265 = G__57282;
count__57262_57266 = G__57283;
i__57263_57267 = G__57284;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__57286 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__57286,(0),null);var v = cljs.core.nth.call(null,vec__57286,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__57287_SHARP_){var attr = attrs__$1.item(p1__57287_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__57294_57300 = cljs.core.seq.call(null,styles);var chunk__57295_57301 = null;var count__57296_57302 = (0);var i__57297_57303 = (0);while(true){
if((i__57297_57303 < count__57296_57302))
{var vec__57298_57304 = cljs.core._nth.call(null,chunk__57295_57301,i__57297_57303);var name_57305 = cljs.core.nth.call(null,vec__57298_57304,(0),null);var value_57306 = cljs.core.nth.call(null,vec__57298_57304,(1),null);domina.set_style_BANG_.call(null,content,name_57305,value_57306);
{
var G__57307 = seq__57294_57300;
var G__57308 = chunk__57295_57301;
var G__57309 = count__57296_57302;
var G__57310 = (i__57297_57303 + (1));
seq__57294_57300 = G__57307;
chunk__57295_57301 = G__57308;
count__57296_57302 = G__57309;
i__57297_57303 = G__57310;
continue;
}
} else
{var temp__4126__auto___57311 = cljs.core.seq.call(null,seq__57294_57300);if(temp__4126__auto___57311)
{var seq__57294_57312__$1 = temp__4126__auto___57311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57294_57312__$1))
{var c__4314__auto___57313 = cljs.core.chunk_first.call(null,seq__57294_57312__$1);{
var G__57314 = cljs.core.chunk_rest.call(null,seq__57294_57312__$1);
var G__57315 = c__4314__auto___57313;
var G__57316 = cljs.core.count.call(null,c__4314__auto___57313);
var G__57317 = (0);
seq__57294_57300 = G__57314;
chunk__57295_57301 = G__57315;
count__57296_57302 = G__57316;
i__57297_57303 = G__57317;
continue;
}
} else
{var vec__57299_57318 = cljs.core.first.call(null,seq__57294_57312__$1);var name_57319 = cljs.core.nth.call(null,vec__57299_57318,(0),null);var value_57320 = cljs.core.nth.call(null,vec__57299_57318,(1),null);domina.set_style_BANG_.call(null,content,name_57319,value_57320);
{
var G__57321 = cljs.core.next.call(null,seq__57294_57312__$1);
var G__57322 = null;
var G__57323 = (0);
var G__57324 = (0);
seq__57294_57300 = G__57321;
chunk__57295_57301 = G__57322;
count__57296_57302 = G__57323;
i__57297_57303 = G__57324;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__57331_57337 = cljs.core.seq.call(null,attrs);var chunk__57332_57338 = null;var count__57333_57339 = (0);var i__57334_57340 = (0);while(true){
if((i__57334_57340 < count__57333_57339))
{var vec__57335_57341 = cljs.core._nth.call(null,chunk__57332_57338,i__57334_57340);var name_57342 = cljs.core.nth.call(null,vec__57335_57341,(0),null);var value_57343 = cljs.core.nth.call(null,vec__57335_57341,(1),null);domina.set_attr_BANG_.call(null,content,name_57342,value_57343);
{
var G__57344 = seq__57331_57337;
var G__57345 = chunk__57332_57338;
var G__57346 = count__57333_57339;
var G__57347 = (i__57334_57340 + (1));
seq__57331_57337 = G__57344;
chunk__57332_57338 = G__57345;
count__57333_57339 = G__57346;
i__57334_57340 = G__57347;
continue;
}
} else
{var temp__4126__auto___57348 = cljs.core.seq.call(null,seq__57331_57337);if(temp__4126__auto___57348)
{var seq__57331_57349__$1 = temp__4126__auto___57348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57331_57349__$1))
{var c__4314__auto___57350 = cljs.core.chunk_first.call(null,seq__57331_57349__$1);{
var G__57351 = cljs.core.chunk_rest.call(null,seq__57331_57349__$1);
var G__57352 = c__4314__auto___57350;
var G__57353 = cljs.core.count.call(null,c__4314__auto___57350);
var G__57354 = (0);
seq__57331_57337 = G__57351;
chunk__57332_57338 = G__57352;
count__57333_57339 = G__57353;
i__57334_57340 = G__57354;
continue;
}
} else
{var vec__57336_57355 = cljs.core.first.call(null,seq__57331_57349__$1);var name_57356 = cljs.core.nth.call(null,vec__57336_57355,(0),null);var value_57357 = cljs.core.nth.call(null,vec__57336_57355,(1),null);domina.set_attr_BANG_.call(null,content,name_57356,value_57357);
{
var G__57358 = cljs.core.next.call(null,seq__57331_57349__$1);
var G__57359 = null;
var G__57360 = (0);
var G__57361 = (0);
seq__57331_57337 = G__57358;
chunk__57332_57338 = G__57359;
count__57333_57339 = G__57360;
i__57334_57340 = G__57361;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__57366_57370 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57367_57371 = null;var count__57368_57372 = (0);var i__57369_57373 = (0);while(true){
if((i__57369_57373 < count__57368_57372))
{var node_57374 = cljs.core._nth.call(null,chunk__57367_57371,i__57369_57373);goog.dom.classes.add(node_57374,class$);
{
var G__57375 = seq__57366_57370;
var G__57376 = chunk__57367_57371;
var G__57377 = count__57368_57372;
var G__57378 = (i__57369_57373 + (1));
seq__57366_57370 = G__57375;
chunk__57367_57371 = G__57376;
count__57368_57372 = G__57377;
i__57369_57373 = G__57378;
continue;
}
} else
{var temp__4126__auto___57379 = cljs.core.seq.call(null,seq__57366_57370);if(temp__4126__auto___57379)
{var seq__57366_57380__$1 = temp__4126__auto___57379;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57366_57380__$1))
{var c__4314__auto___57381 = cljs.core.chunk_first.call(null,seq__57366_57380__$1);{
var G__57382 = cljs.core.chunk_rest.call(null,seq__57366_57380__$1);
var G__57383 = c__4314__auto___57381;
var G__57384 = cljs.core.count.call(null,c__4314__auto___57381);
var G__57385 = (0);
seq__57366_57370 = G__57382;
chunk__57367_57371 = G__57383;
count__57368_57372 = G__57384;
i__57369_57373 = G__57385;
continue;
}
} else
{var node_57386 = cljs.core.first.call(null,seq__57366_57380__$1);goog.dom.classes.add(node_57386,class$);
{
var G__57387 = cljs.core.next.call(null,seq__57366_57380__$1);
var G__57388 = null;
var G__57389 = (0);
var G__57390 = (0);
seq__57366_57370 = G__57387;
chunk__57367_57371 = G__57388;
count__57368_57372 = G__57389;
i__57369_57373 = G__57390;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__57395_57399 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57396_57400 = null;var count__57397_57401 = (0);var i__57398_57402 = (0);while(true){
if((i__57398_57402 < count__57397_57401))
{var node_57403 = cljs.core._nth.call(null,chunk__57396_57400,i__57398_57402);goog.dom.classes.remove(node_57403,class$);
{
var G__57404 = seq__57395_57399;
var G__57405 = chunk__57396_57400;
var G__57406 = count__57397_57401;
var G__57407 = (i__57398_57402 + (1));
seq__57395_57399 = G__57404;
chunk__57396_57400 = G__57405;
count__57397_57401 = G__57406;
i__57398_57402 = G__57407;
continue;
}
} else
{var temp__4126__auto___57408 = cljs.core.seq.call(null,seq__57395_57399);if(temp__4126__auto___57408)
{var seq__57395_57409__$1 = temp__4126__auto___57408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57395_57409__$1))
{var c__4314__auto___57410 = cljs.core.chunk_first.call(null,seq__57395_57409__$1);{
var G__57411 = cljs.core.chunk_rest.call(null,seq__57395_57409__$1);
var G__57412 = c__4314__auto___57410;
var G__57413 = cljs.core.count.call(null,c__4314__auto___57410);
var G__57414 = (0);
seq__57395_57399 = G__57411;
chunk__57396_57400 = G__57412;
count__57397_57401 = G__57413;
i__57398_57402 = G__57414;
continue;
}
} else
{var node_57415 = cljs.core.first.call(null,seq__57395_57409__$1);goog.dom.classes.remove(node_57415,class$);
{
var G__57416 = cljs.core.next.call(null,seq__57395_57409__$1);
var G__57417 = null;
var G__57418 = (0);
var G__57419 = (0);
seq__57395_57399 = G__57416;
chunk__57396_57400 = G__57417;
count__57397_57401 = G__57418;
i__57398_57402 = G__57419;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__57424_57428 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57425_57429 = null;var count__57426_57430 = (0);var i__57427_57431 = (0);while(true){
if((i__57427_57431 < count__57426_57430))
{var node_57432 = cljs.core._nth.call(null,chunk__57425_57429,i__57427_57431);goog.dom.classes.toggle(node_57432,class$);
{
var G__57433 = seq__57424_57428;
var G__57434 = chunk__57425_57429;
var G__57435 = count__57426_57430;
var G__57436 = (i__57427_57431 + (1));
seq__57424_57428 = G__57433;
chunk__57425_57429 = G__57434;
count__57426_57430 = G__57435;
i__57427_57431 = G__57436;
continue;
}
} else
{var temp__4126__auto___57437 = cljs.core.seq.call(null,seq__57424_57428);if(temp__4126__auto___57437)
{var seq__57424_57438__$1 = temp__4126__auto___57437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57424_57438__$1))
{var c__4314__auto___57439 = cljs.core.chunk_first.call(null,seq__57424_57438__$1);{
var G__57440 = cljs.core.chunk_rest.call(null,seq__57424_57438__$1);
var G__57441 = c__4314__auto___57439;
var G__57442 = cljs.core.count.call(null,c__4314__auto___57439);
var G__57443 = (0);
seq__57424_57428 = G__57440;
chunk__57425_57429 = G__57441;
count__57426_57430 = G__57442;
i__57427_57431 = G__57443;
continue;
}
} else
{var node_57444 = cljs.core.first.call(null,seq__57424_57438__$1);goog.dom.classes.toggle(node_57444,class$);
{
var G__57445 = cljs.core.next.call(null,seq__57424_57438__$1);
var G__57446 = null;
var G__57447 = (0);
var G__57448 = (0);
seq__57424_57428 = G__57445;
chunk__57425_57429 = G__57446;
count__57426_57430 = G__57447;
i__57427_57431 = G__57448;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_57457__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__57453_57458 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57454_57459 = null;var count__57455_57460 = (0);var i__57456_57461 = (0);while(true){
if((i__57456_57461 < count__57455_57460))
{var node_57462 = cljs.core._nth.call(null,chunk__57454_57459,i__57456_57461);goog.dom.classes.set(node_57462,classes_57457__$1);
{
var G__57463 = seq__57453_57458;
var G__57464 = chunk__57454_57459;
var G__57465 = count__57455_57460;
var G__57466 = (i__57456_57461 + (1));
seq__57453_57458 = G__57463;
chunk__57454_57459 = G__57464;
count__57455_57460 = G__57465;
i__57456_57461 = G__57466;
continue;
}
} else
{var temp__4126__auto___57467 = cljs.core.seq.call(null,seq__57453_57458);if(temp__4126__auto___57467)
{var seq__57453_57468__$1 = temp__4126__auto___57467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57453_57468__$1))
{var c__4314__auto___57469 = cljs.core.chunk_first.call(null,seq__57453_57468__$1);{
var G__57470 = cljs.core.chunk_rest.call(null,seq__57453_57468__$1);
var G__57471 = c__4314__auto___57469;
var G__57472 = cljs.core.count.call(null,c__4314__auto___57469);
var G__57473 = (0);
seq__57453_57458 = G__57470;
chunk__57454_57459 = G__57471;
count__57455_57460 = G__57472;
i__57456_57461 = G__57473;
continue;
}
} else
{var node_57474 = cljs.core.first.call(null,seq__57453_57468__$1);goog.dom.classes.set(node_57474,classes_57457__$1);
{
var G__57475 = cljs.core.next.call(null,seq__57453_57468__$1);
var G__57476 = null;
var G__57477 = (0);
var G__57478 = (0);
seq__57453_57458 = G__57475;
chunk__57454_57459 = G__57476;
count__57455_57460 = G__57477;
i__57456_57461 = G__57478;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__57483_57487 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57484_57488 = null;var count__57485_57489 = (0);var i__57486_57490 = (0);while(true){
if((i__57486_57490 < count__57485_57489))
{var node_57491 = cljs.core._nth.call(null,chunk__57484_57488,i__57486_57490);goog.dom.setTextContent(node_57491,value);
{
var G__57492 = seq__57483_57487;
var G__57493 = chunk__57484_57488;
var G__57494 = count__57485_57489;
var G__57495 = (i__57486_57490 + (1));
seq__57483_57487 = G__57492;
chunk__57484_57488 = G__57493;
count__57485_57489 = G__57494;
i__57486_57490 = G__57495;
continue;
}
} else
{var temp__4126__auto___57496 = cljs.core.seq.call(null,seq__57483_57487);if(temp__4126__auto___57496)
{var seq__57483_57497__$1 = temp__4126__auto___57496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57483_57497__$1))
{var c__4314__auto___57498 = cljs.core.chunk_first.call(null,seq__57483_57497__$1);{
var G__57499 = cljs.core.chunk_rest.call(null,seq__57483_57497__$1);
var G__57500 = c__4314__auto___57498;
var G__57501 = cljs.core.count.call(null,c__4314__auto___57498);
var G__57502 = (0);
seq__57483_57487 = G__57499;
chunk__57484_57488 = G__57500;
count__57485_57489 = G__57501;
i__57486_57490 = G__57502;
continue;
}
} else
{var node_57503 = cljs.core.first.call(null,seq__57483_57497__$1);goog.dom.setTextContent(node_57503,value);
{
var G__57504 = cljs.core.next.call(null,seq__57483_57497__$1);
var G__57505 = null;
var G__57506 = (0);
var G__57507 = (0);
seq__57483_57487 = G__57504;
chunk__57484_57488 = G__57505;
count__57485_57489 = G__57506;
i__57486_57490 = G__57507;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__57512_57516 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57513_57517 = null;var count__57514_57518 = (0);var i__57515_57519 = (0);while(true){
if((i__57515_57519 < count__57514_57518))
{var node_57520 = cljs.core._nth.call(null,chunk__57513_57517,i__57515_57519);goog.dom.forms.setValue(node_57520,value);
{
var G__57521 = seq__57512_57516;
var G__57522 = chunk__57513_57517;
var G__57523 = count__57514_57518;
var G__57524 = (i__57515_57519 + (1));
seq__57512_57516 = G__57521;
chunk__57513_57517 = G__57522;
count__57514_57518 = G__57523;
i__57515_57519 = G__57524;
continue;
}
} else
{var temp__4126__auto___57525 = cljs.core.seq.call(null,seq__57512_57516);if(temp__4126__auto___57525)
{var seq__57512_57526__$1 = temp__4126__auto___57525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57512_57526__$1))
{var c__4314__auto___57527 = cljs.core.chunk_first.call(null,seq__57512_57526__$1);{
var G__57528 = cljs.core.chunk_rest.call(null,seq__57512_57526__$1);
var G__57529 = c__4314__auto___57527;
var G__57530 = cljs.core.count.call(null,c__4314__auto___57527);
var G__57531 = (0);
seq__57512_57516 = G__57528;
chunk__57513_57517 = G__57529;
count__57514_57518 = G__57530;
i__57515_57519 = G__57531;
continue;
}
} else
{var node_57532 = cljs.core.first.call(null,seq__57512_57526__$1);goog.dom.forms.setValue(node_57532,value);
{
var G__57533 = cljs.core.next.call(null,seq__57512_57526__$1);
var G__57534 = null;
var G__57535 = (0);
var G__57536 = (0);
seq__57512_57516 = G__57533;
chunk__57513_57517 = G__57534;
count__57514_57518 = G__57535;
i__57515_57519 = G__57536;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_57547 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__57543_57548 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57544_57549 = null;var count__57545_57550 = (0);var i__57546_57551 = (0);while(true){
if((i__57546_57551 < count__57545_57550))
{var node_57552 = cljs.core._nth.call(null,chunk__57544_57549,i__57546_57551);node_57552.innerHTML = value_57547;
{
var G__57553 = seq__57543_57548;
var G__57554 = chunk__57544_57549;
var G__57555 = count__57545_57550;
var G__57556 = (i__57546_57551 + (1));
seq__57543_57548 = G__57553;
chunk__57544_57549 = G__57554;
count__57545_57550 = G__57555;
i__57546_57551 = G__57556;
continue;
}
} else
{var temp__4126__auto___57557 = cljs.core.seq.call(null,seq__57543_57548);if(temp__4126__auto___57557)
{var seq__57543_57558__$1 = temp__4126__auto___57557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57543_57558__$1))
{var c__4314__auto___57559 = cljs.core.chunk_first.call(null,seq__57543_57558__$1);{
var G__57560 = cljs.core.chunk_rest.call(null,seq__57543_57558__$1);
var G__57561 = c__4314__auto___57559;
var G__57562 = cljs.core.count.call(null,c__4314__auto___57559);
var G__57563 = (0);
seq__57543_57548 = G__57560;
chunk__57544_57549 = G__57561;
count__57545_57550 = G__57562;
i__57546_57551 = G__57563;
continue;
}
} else
{var node_57564 = cljs.core.first.call(null,seq__57543_57558__$1);node_57564.innerHTML = value_57547;
{
var G__57565 = cljs.core.next.call(null,seq__57543_57558__$1);
var G__57566 = null;
var G__57567 = (0);
var G__57568 = (0);
seq__57543_57548 = G__57565;
chunk__57544_57549 = G__57566;
count__57545_57550 = G__57567;
i__57546_57551 = G__57568;
continue;
}
}
} else
{}
}
break;
}
}catch (e57542){if((e57542 instanceof Error))
{var e_57569 = e57542;domina.replace_children_BANG_.call(null,content,value_57547);
} else
{throw e57542;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__57576_57580 = cljs.core.seq.call(null,children);var chunk__57577_57581 = null;var count__57578_57582 = (0);var i__57579_57583 = (0);while(true){
if((i__57579_57583 < count__57578_57582))
{var child_57584 = cljs.core._nth.call(null,chunk__57577_57581,i__57579_57583);frag.appendChild(child_57584);
{
var G__57585 = seq__57576_57580;
var G__57586 = chunk__57577_57581;
var G__57587 = count__57578_57582;
var G__57588 = (i__57579_57583 + (1));
seq__57576_57580 = G__57585;
chunk__57577_57581 = G__57586;
count__57578_57582 = G__57587;
i__57579_57583 = G__57588;
continue;
}
} else
{var temp__4126__auto___57589 = cljs.core.seq.call(null,seq__57576_57580);if(temp__4126__auto___57589)
{var seq__57576_57590__$1 = temp__4126__auto___57589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57576_57590__$1))
{var c__4314__auto___57591 = cljs.core.chunk_first.call(null,seq__57576_57590__$1);{
var G__57592 = cljs.core.chunk_rest.call(null,seq__57576_57590__$1);
var G__57593 = c__4314__auto___57591;
var G__57594 = cljs.core.count.call(null,c__4314__auto___57591);
var G__57595 = (0);
seq__57576_57580 = G__57592;
chunk__57577_57581 = G__57593;
count__57578_57582 = G__57594;
i__57579_57583 = G__57595;
continue;
}
} else
{var child_57596 = cljs.core.first.call(null,seq__57576_57590__$1);frag.appendChild(child_57596);
{
var G__57597 = cljs.core.next.call(null,seq__57576_57590__$1);
var G__57598 = null;
var G__57599 = (0);
var G__57600 = (0);
seq__57576_57580 = G__57597;
chunk__57577_57581 = G__57598;
count__57578_57582 = G__57599;
i__57579_57583 = G__57600;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__57570_SHARP_,p2__57571_SHARP_){return f.call(null,p1__57570_SHARP_,p2__57571_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__57602 = list_thing;if(G__57602)
{var bit__4208__auto__ = (G__57602.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__57602.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57602.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57602);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57602);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__57603 = content;if(G__57603)
{var bit__4208__auto__ = (G__57603.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__57603.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57603.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57603);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57603);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__57604 = content;if(G__57604)
{var bit__4208__auto__ = (G__57604.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__57604.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57604.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57604);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57604);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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